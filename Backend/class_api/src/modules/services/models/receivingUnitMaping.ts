import { Request } from "../../../types/genericRequest.js";
import { receivingUnit } from "../../../types/receivingUnit.js";


export class receivingUnitMaping {
    static transformData(data: any): Request<receivingUnit> {
        if (!data || typeof data !== 'object') {
            return { success: false, error: "Invalid data format or no data found.", statusCode: 400 };
        }
        
        try {
            const unit: receivingUnit = {
                institutionName: data.institutionName,
                contactNumber: data.contactNumber,
                institutionDirection: data.institutionDirection,
                contactEmail: data.contactEmail,
                principalActivities: data.principalActivities
            };

            return { success: true, data: unit, statusCode: 200 };
            
        } catch (error) {
            return {
                 success: false, error: (error as Error).message, errorType: (error as Error).name, stackTrace: (error as Error).stack ,statusCode:500
            }
        }
    }
};