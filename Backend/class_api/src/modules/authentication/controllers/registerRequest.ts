import { PrismaClient } from "@prisma/client";
import { Context } from "hono";
import { registerClass } from "../db/register.js";
import { registerMaping } from "../models/registerMaping.js";
import { Request } from "../../../types/genericRequest.js";

export async function registerRequest(c: Context):Promise<Request<string>> {
    const connection = new PrismaClient();
    const activities = await c.req.json()
    console.log(activities);

    try {
        const registerData = registerMaping.transformData(activities);
        let registration;

        while (registerData.data){
            const worker = new registerClass(registerData.data.user, registerData.data.student, connection);

            const check = await worker.CheckExisting()
            // Si no se encontraron duplicados se puede proseguir con el registro
            if(check.success){
                registration = await worker.registerUser()
            }else{
                return check 
            }
            return registration;
        }

        // If while loop does not execute, return a default error response
        return { success: false, error: "No registration data found.", errorType: "NoDataError", stackTrace: "", statusCode: 400, data: "" };

    } catch (error) {
        return { success: false, error: (error as Error).message, errorType: (error as Error).name, stackTrace: (error as Error).stack, statusCode: 500, data: "Error." };
    }
}