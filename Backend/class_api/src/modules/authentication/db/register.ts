import { PrismaClient } from "@prisma/client";
import { Student } from "../../../types/student.js";
import { User } from "../../../types/user.js";
import { Request } from "../../../types/genericRequest.js";
import { haskKey } from "../../../utils/hashKeyTool.js";

export class registerClass {
    private user: User;
    private student: Student
    private connection: PrismaClient

    constructor(user: User, student: Student, connection: PrismaClient) {
        this.user = user;
        this.student = student;
        this.connection = connection;
    }

    // Metodo para saber si ya existe un usuario con el mismo username o email
    async CheckExisting(): Promise<Request<string>> {
        try {
            const userCheck = await this.connection.user.findFirst({ where: { userName: this.user.userName } });
            const emailCheck = await this.connection.user.findFirst({ where: { email: this.user.email } })

            if (userCheck || emailCheck) {
                return { success: false, statusCode: 409, error: "El nombre de usuario o correo ya está registrado." }
            } else {
                return { success: true, statusCode: 201 }
            }

        } catch (error) {
            return { success: false, error: (error as Error).message, errorType: (error as Error).name, stackTrace: (error as Error).stack, statusCode: 500 };
        }
    }

    async registerUser(): Promise<Request<string>> {
        try {
            const registerUser = await this.connection.user.create(
                {
                    data: {
                        userName: this.user.userName || "",
                        email: this.user.email,
                        pssKey: await haskKey(this.user.pssKey),
                        Student: {
                            create: this.student
                        }
                    }
                }
            )

            if (registerUser) {
                return { success: true, statusCode: 201, data: "User Correctly Register." }
            } else {
                return { success: false, statusCode: 404, data: "Something went Wrong" }
            }

        } catch (error) {
            return { success: false, error: (error as Error).message, errorType: (error as Error).name, stackTrace: (error as Error).stack, statusCode: 500 };
        }
    }

}