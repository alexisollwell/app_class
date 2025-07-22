import { PrismaClient } from "@prisma/client";
import { authentication } from "../../../types/authentication.js";
import { Request } from "../../../types/genericRequest.js";

export async function studentIdGet(keys: authentication): Promise<Request<string>> {
    const connection = new PrismaClient();
    try {
        const query = await connection.user.findUnique({
            where:
            {
                email: keys.payload.email
            },
            include: {
                Student: true
            }
        })
        let id;
        if (query?.Student[0].studentId) {
            id = String(query.Student[0].studentId);
        } else {
            return {
                success: false,
                error: "User not found",
                statusCode: 404,
            };
        }
        return { success: true, data: id, statusCode: 201 }
    } catch (error) {
        return {
            success: false,
            error: (error as Error).message,
            statusCode: 500,
        };
    } finally {
        await connection.$disconnect()
    }
}