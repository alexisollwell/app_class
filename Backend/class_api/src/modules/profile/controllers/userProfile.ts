import { PrismaClient } from "@prisma/client";
import { Context } from "hono";
import { Request } from "../../../types/genericRequest.js";
import { getCookie } from "hono/cookie";
import { profileInfo } from "../db/profileInfo.js";
import { Student } from "../../../types/student.js";

export async function userProfileInfo(c: Context): Promise<Request<Student>> {
    const connection = new PrismaClient();
    let querie;

    // Obtenemos el serviceId del contexto, que debe haber sido establecido en una etapa anterior del flujo
    const userId = getCookie(c, 'user');
    
    try {

        if (userId === null || undefined){
            return {success: false, error: "User ID its null", statusCode: 400}
        } 

        const id = Number(userId);

        //Convertimos header a numero
        querie = await profileInfo(connection, id);

        return {success: true, data: querie, statusCode: 200}

    } catch (error) {
        return { success: false, error: (error as Error).message, errorType: (error as Error).name, stackTrace: (error as Error).stack, statusCode: 500 };

    }
}