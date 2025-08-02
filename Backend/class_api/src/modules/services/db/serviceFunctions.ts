import { PrismaClient, ServiceProgressView } from "@prisma/client";
import { serviceProgressView } from "../../../types/serviceProgress.js";

export async function servicesPerUser(
  connection: PrismaClient,
  student_id: number
): Promise<serviceProgressView[]> {
  try {
    const viewQuery = await connection.serviceProgressView.findMany({
      where: { studentId: student_id },
    });

    return viewQuery.map(service => ({
      serviceId: service.serviceId,
      studentId: service.studentId,
      name: service.name ?? "",
      careerInCourse: service.careerInCourse ?? "",
      institutionName: service.institutionName ?? "",
      supervisorName: service.supervisorName ?? "",
      phoneNumber: service.phoneNumber ?? "",
      institutionalEmail: service.institutionalEmail ?? "",
      type: service.type ?? "",
      totalHours: typeof service.totalHours === "number" ? service.totalHours : 0,
      serviceProgress: typeof service.serviceProgress === "number" ? service.serviceProgress : 0,
      quantityToComplete: typeof service.quantityToComplete === "number" ? service.quantityToComplete : 0
    }));
  } catch (error) {
    console.error("Error in 'servicesPerUser' function:", error);
    throw error;
  }
}

export async function serviceInformation(
  connection: PrismaClient,
  service_id: number
): Promise<serviceProgressView> {
  try {
    const viewQuery = await connection.serviceProgressView.findFirst({
      where: { serviceId: service_id },
    });

    if (!viewQuery) {
      throw new Error(`Service with ID ${service_id} not found`);
    }

    const data: serviceProgressView = {
      serviceId: viewQuery.serviceId,
      studentId: viewQuery.studentId,
      name: viewQuery.name ?? "",
      careerInCourse: viewQuery.careerInCourse ?? "",
      institutionName: viewQuery.institutionName ?? "",
      supervisorName: viewQuery.supervisorName ?? "",
      phoneNumber: viewQuery.phoneNumber ?? "",
      institutionalEmail: viewQuery.institutionalEmail ?? "",
      type: viewQuery.type ?? "",
      totalHours: viewQuery.totalHours ?? 0,
      serviceProgress: viewQuery.serviceProgress ?? 0,
      quantityToComplete: viewQuery.quantityToComplete ?? 0
    };

    return data;
  } catch (error) {
    console.error("Error in 'serviceGetting' function:", error);
    throw error;
  }
}