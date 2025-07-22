import { Request } from "../../../types/genericRequest.js";
import { registerType } from "../../../types/register.js";
import { Student } from "../../../types/student.js";
import { User } from "../../../types/user.js";

export class registerMaping {
    static transformData(data: any): Request<registerType> {
        try {
            const userData: User = {
                email: data.email,
                pssKey: data.pssKey,
                userName: data.userName
            };
            const studentData: Student = {
                name: data.name,
                phoneNumber: data.phoneNumber,
                careerInCourse: data.careerInCourse,
                classGroup: data.classGroup,
                enrollmentNumber: data.enrollmentNumber,
                careerModality: data.careerModality,
                grade: data.grade,
                studentStatus_id: data.studentStatus_id,
                institutionalEmail: data.institutionalEmail
            };

            const transformedData: registerType = {
                user: userData,
                student: studentData
            };

            return { success: true, data: transformedData, statusCode: 200 };
        } catch (error) {
            return {
                success: false,
                error: (error as Error).message,
                errorType: (error as Error).name,
                statusCode: 500
            };
        }
    }
}