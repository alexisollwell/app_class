import { PrismaClient } from "@prisma/client";
import { Student } from "../../../types/student.js";

export async function profileInfo(connection: PrismaClient, id: number): Promise<Student> {
  try {
    const viewQuerie = await connection.user.findFirst({
      include: {
        Student: true,
      },
      where: {
        userId: id,
      },
    });

    if (!viewQuerie || viewQuerie.Student.length === 0) {
      throw new Error(`No student found for userId ${id}`);
    }

    const student = viewQuerie.Student[0];
    const data: Student = {
      name: student.name || "",
      phoneNumber: student.phoneNumber || "",
      careerInCourse: student.careerInCourse || "",
      classGroup: student.classGroup || "",
      enrollmentNumber: student.enrollmentNumber || "",
      careerModality: student.careerModality || "",
      grade: student.grade || 0,
      institutionalEmail: student.institutionalEmail || "",
    };

    return data;
  } catch (error) {
    console.error("Error in 'profileInfo' function:", error);
    throw error;
  }
}