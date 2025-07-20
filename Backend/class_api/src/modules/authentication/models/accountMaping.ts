import { account } from "../../../types/account.js";
import { Request } from "../../../types/extractionGeneric.js";

export class AccountMaping {
    static transformData(data: any): Request<account> {
        try {
            const transformedData: account = {
                email: data.email,
                password: data.password
            }
            return { success: true, data: transformedData, statusCode: 200 }
        } catch (error) {
            return { 
                success: false, 
                error: (error as Error).message, 
                errorType: (error as Error).name, 
                //stackTrace: (error as Error).stack, No incluir stackTrace por seguridad.
                statusCode: 500 }
        }
    }
}