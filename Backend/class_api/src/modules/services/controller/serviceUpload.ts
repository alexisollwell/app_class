import { PrismaClient } from "@prisma/client";
import { Context } from "hono";
import { Request } from "../../../types/genericRequest.js";
import { serviceEntryMaping } from "../models/serviceEntryMaping.js";
import { uploadService } from "../db/serviceUpload.js";
import { getCookie } from "hono/cookie";
import { receivingUnitMaping } from "../models/receivingUnitMaping.js";

export async function uploadServiceRequest(c: Context): Promise<Request<string>> {
    const connection = new PrismaClient();
    const service = await c.get('parsedBody');
    let querie;

    // Obtenemos el serviceId del contexto, que debe haber sido establecido en una etapa anterior del flujo
    const studentId = getCookie(c, 'user');

    // Mapeamos las actividades recibidas.
    try {
        //Convertimos header a numero
        const id = Number(studentId);
        const mappedServiceEntry = await serviceEntryMaping.transformData(service);
        const mappedUnit = await receivingUnitMaping.transformData(service);

        if (!mappedServiceEntry.data || !mappedUnit.data){
            return {success: false, data: 'Something went wrong in serviceUploadRequest', statusCode: 401}
        }
        // Subimos las actividades realizadas por el usuario a la db.
        querie = await uploadService(mappedServiceEntry.data, mappedUnit.data, connection, id); 
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