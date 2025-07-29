import { PrismaClient } from "@prisma/client";
import { serviceProgressView } from "../../../types/serviceProgress.js";


export async function servicesPerUser(connection: PrismaClient, student_id: number): Promise<serviceProgressView[]> {
    try {
    const viewQuerie = await connection.serviceProgressView.findMany({
        where: { studentId: student_id },
    })

    return viewQuerie.map(service => ({
        serviceId: service.serviceId,
        studentId: service.studentId,
        name: service.name ?? "",
        institutionalEmail: service.institutionalEmail ?? "",
        type: service.type ?? "",
        totalHours: typeof service.totalHours === "number" ? service.totalHours : 0,
        serviceProgress: typeof service.serviceProgress === "number" ? service.serviceProgress : 0
    }));

    } catch (error) {
        console.error("Error in 'servicesPerUser' function:", error);
        throw error;
    }
    
}