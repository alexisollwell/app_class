import { PrismaClient } from "@prisma/client";
import { Context } from "hono";
import { Request } from "../../../types/genericRequest.js";
import { serviceProgressView } from "../../../types/serviceProgress.js";
import { servicesPerUser } from "../db/servicesPerUser.js";

export async function userServices(c: Context): Promise<Request<serviceProgressView[]>> {
    const connection = new PrismaClient();
    let querie;

    // Obtenemos el serviceId del contexto, que debe haber sido establecido en una etapa anterior del flujo
    const userId = c.header('userId');
    
    try {

        if (userId === null || undefined){
            return {success: false, error: "User ID its null", statusCode: 400}
        } 

        const id = Number(userId);

        //Convertimos header a numero
        querie = await servicesPerUser(connection, id);

        return {success: true, data: querie, statusCode: 200}

    } catch (error) {
        return { success: false, error: (error as Error).message, errorType: (error as Error).name, stackTrace: (error as Error).stack, statusCode: 500 };

    }
}