import { RecordWithTtl } from "dns";
import { Activity } from "../../../types/activity.js";
import { Request } from "../../../types/genericRequest.js";

export class activityMapping {
    static transformData(data: any): Request<Activity> {
        if (!data || typeof data !== 'object') {
            return { success: false, error: "Invalid data format or no data found.", statusCode: 400 };
        }
        
        try {
            const activity: Activity = {
                studentId: data.studentId ? Number(data.studentId) : undefined,
                description: data.description || '',
                postingDate: data.postingDate ? new Date(data.postingDate).toISOString() : new Date().toISOString(),
                hours: data.hours ? Number(data.hours) : 0
            };

            return { success: true, data: activity, statusCode: 200 };
            
        } catch (error) {
            return {
                 success: false, error: (error as Error).message, errorType: (error as Error).name, stackTrace: (error as Error).stack ,statusCode:500
            }
        }
    }
};