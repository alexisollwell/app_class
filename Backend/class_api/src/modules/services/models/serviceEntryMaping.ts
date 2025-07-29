import { Request } from "../../../types/genericRequest.js";
import { Service } from "../../../types/service.js";

export class serviceEntryMaping {
    static transformData(data: any): Request<Service> {
        if (!data || typeof data !== 'object') {
            return { success: false, error: "Invalid data format or no data found.", statusCode: 400 };
        }
        
        try {
            const activity: Service = {
                student_id: data.student_id,
                serviceType_id: data.serviceType_id,
                serviceStartDate: data.serviceStartDate,
                service_status_id: data.service_status_id,
                supervisorName: data.supervisorName,
                supervisorContactNumber: data.supervisorContactNumber,
                programObjective: data.programObjective,
                supervisorPosition: data.supervisorPosition,
                receivingUnit_id: data.receivingUnit_id
            };

            return { success: true, data: activity, statusCode: 200 };
            
        } catch (error) {
            return {
                 success: false, error: (error as Error).message, errorType: (error as Error).name, stackTrace: (error as Error).stack ,statusCode:500
            }
        }
    }
};