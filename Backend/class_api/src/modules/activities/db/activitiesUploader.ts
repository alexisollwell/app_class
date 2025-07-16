import { Activity } from "../../../types/activity.js";
import { PrismaClient } from "@prisma/client";

// Function to upload activities to the database
export async function uploadActivities(activities: Activity[], connection: PrismaClient, service_id: number): Promise<void> {
    const transactionUpload = await connection.$transaction;
    try{
        transactionUpload(async (tx) => {
            for (const activity of activities) {
                await tx.serviceActivities.create({
                    data: {
                        description: activity.description,
                        postingDate: new Date(activity.postingDate),
                        hours: activity.hours,
                        service_id: service_id
                    }
                });
            }})

    }catch (error) { 
        console.error("Error in 'uploadingActivities' function:", error);
        throw error;
    }
}