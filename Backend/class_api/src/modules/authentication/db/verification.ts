import { PrismaClient } from "@prisma/client";
import { User } from "../../../types/user.js";
import { Request } from "../../../types/genericRequest.js";
import { validateKey } from "../../../utils/deHashTool.js";

export async function credentialVerify( verifyInfo: User): Promise<Request<string>> {
    const connection = new PrismaClient()
    try {
        const viewQuerie = await connection.user.findMany({
            where: { userName: verifyInfo.userName }
        })

        if (!viewQuerie) {
            return { success: false, statusCode: 401, data: "Credenciales Incorrectas" };
        }

        const keyValidation = await validateKey(verifyInfo.pssKey, viewQuerie[0].pssKey);

        if (!keyValidation) {
            return { success: false, statusCode: 401, data: "Incorrect Password" };
        }

        return { success: true, statusCode: 200, data: "Correct Credentials." };


    } catch (error) {
        console.error("Error in 'uploadingActivities' function:", error);
        throw error;
    }finally{
        await connection.$disconnect();
    }
}