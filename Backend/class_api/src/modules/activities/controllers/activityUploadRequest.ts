import { PrismaClient } from "@prisma/client";
import { Context } from "hono";
import { uploadActivities } from "../db/activitiesUploader.js";
import { activityMapping } from "../models/activityModel.js";
import { Activity } from "../../../types/activity.js";
import { Request } from "../../../types/genericRequest.js";

export async function uploadActivitiesRequest(c: Context): Promise<Request<string>> {
    const connection = new PrismaClient();
    const activities = await c.get('parsedBody');
    let querie;

    // Obtenemos el serviceId del contexto, que debe haber sido establecido en una etapa anterior del flujo
    let service_id = c.req.header('serviceId');
        
    if (service_id === null) {
        return {success: false, error: 'No serviceId Provided. Check your headers', statusCode: 401}
    }
    const activityList: Activity[] = [];

    // Mapeamos las actividades recibidas.
    try {
        //Convertimos header a numero
        const id = Number(service_id);

        for (const activity of activities) {
            const mappedEntry = await activityMapping.transformData(activity);

            if (mappedEntry.success && mappedEntry.data) {
                activityList.push(mappedEntry.data);
            }
        }

        if (activityList.length === 0){
            return {success: false, error: 'Body is null. Check your body format', statusCode: 401}
        }
        // Subimos las actividades realizadas por el usuario a la db.
        querie = await uploadActivities(activityList, connection, id); 
        return querie

    } catch (error) {
        console.error("Error uploading activities:", error);
        if (querie) {
            return querie;
        } else {
            return { success: false, error: (error as Error).message, errorType: (error as Error).name, stackTrace: (error as Error).stack, statusCode: 500 };
        }

    }
}