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

    // Obtenemos el service_id del contexto, que debe haber sido establecido en una etapa anterior del flujo
    const service_id = c.get('service_id');
    const activityList: Activity[] = [];

    // Mapeamos las actividades recibidas.
    try {
        for (const activity of activities) {
            const mappedEntry = await activityMapping.transformData(activity);

            if (!mappedEntry.success && mappedEntry.data) {
                activityList.push(mappedEntry.data);
            }
        }

        querie = await uploadActivities(activityList, connection, service_id); 
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