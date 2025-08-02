import { PrismaClient } from "@prisma/client";
import { Request } from "../../../types/genericRequest.js";
import { Service } from "../../../types/service.js";
import { receivingUnit } from "../../../types/receivingUnit.js";
import { dateFormat } from "../../../utils/formatDate.js";

/**
 * Sube un servicio y su unidad receptora a la base de datos usando una transacción.
 * Retorna mensaje de éxito o error.
 */
export async function uploadService(
  serviceData: Service,
  receivingUnitData: receivingUnit,
  connection: PrismaClient,
  student_id: number
): Promise<Request<string>> {
  try {
    await connection.$transaction(async (tx) => {
      // 1. Crear la unidad receptora
      const createdUnit = await tx.receivingUnit.create({
        data: {
          institutionName: receivingUnitData.institutionName,
          contactNumber: receivingUnitData.contactNumber,
          institutionDirection: receivingUnitData.institutionDirection,
          contactEmail: receivingUnitData.contactEmail,
          principalActivities: receivingUnitData.principalActivities,
        },
      });

      // 2. Crear el servicio con referencia a la unidad receptora
      await tx.service.create({
        data: {
          student_id,
          serviceType_id: serviceData.serviceType_id,
          servicesStartDate: await dateFormat(serviceData.serviceStartDate),
          service_status_id: serviceData.service_status_id,
          supervisorName: serviceData.supervisorName,
          supervisorContactNumber: serviceData.supervisorContactNumber,
          programObjective: serviceData.programObjective,
          supervisorPosition: serviceData.supervisorPosition,
          receivingUnit_id: createdUnit.receivingUnitId, // relación por FK
        },
      });
    });

    return {
      success: true,
      data: "Service or practice uploaded successfully.",
      statusCode: 200,
    };
  } catch (error) {
    console.error("Error en uploadService:", error);
    return {
      success: false,
      error: "An error occurred while uploading the service or unit.",
      statusCode: 500,
    };
  }
}
