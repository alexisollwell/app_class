import { PrismaClient } from "@prisma/client";
import { Activity } from "../../../types/activity.js";

export async function activitesPerUser(connection: PrismaClient, student_id: number): Promise<Activity[]> {
    try {
    const viewQuerie = await connection.serviceActivitiesByUser.findMany({
        where: { student_id: student_id },
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