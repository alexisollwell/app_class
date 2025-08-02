import { Request } from "../../../types/genericRequest.js";
import { User } from "../../../types/user.js";

export class AccountMaping {
    static transformData(data: any): Request<User> {
        try {
            const userData: User = {
                            email: data.email,
                            pssKey: data.pssKey,
            };
            return { success: true, data: userData, statusCode: 200 }
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