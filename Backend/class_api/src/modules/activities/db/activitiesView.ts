import { PrismaClient } from "@prisma/client";
import { Activity } from "../../../types/activity.js";

export async function activitesPerService(connection: PrismaClient, id: number): Promise<Activity[]> {
    try {
    const viewQuerie = await connection.serviceActivitiesByUser.findMany({
        where: { service_id: id },
    })
    return viewQuerie.map(activity => ({
        studentId: activity.student_id || undefined,
        description: activity.description || '',
        postingDate: typeof activity.postingDate === 'string'
            ? activity.postingDate
            : activity.postingDate
                ? activity.postingDate.toISOString()
                : '',
        hours: activity.hours || 0
    }));

    } catch (error) {
        console.error("Error in 'uploadingActivities' function:", error);
        throw error;
    }
    
}