import { Activity } from "../../../types/activity.js";
import { PrismaClient} from "@prisma/client";
import { Request } from "../../../types/genericRequest.js";

/**
 * Sube una lista de actividades a la base de datos usando una transacción.
 * Retorna las entidades recién creadas como comprobante.
 */
export async function uploadActivities(
  activities: Activity[],
  connection: PrismaClient,
  service_id: number
): Promise<Request<string>> {
  try {
    // Ejecutamos la transacción: mapeamos cada actividad a una operación create()
    const createdActivities = await connection.$transaction(
      activities.map(activity =>
        connection.serviceActivities.create({
          data: {
            description: activity.description,
            postingDate: new Date(activity.postingDate),
            hours: activity.hours,
            service_id,
          },
        })
      )
    );

    if (createdActivities.length === 0) {
        return {
            success: false,
            error: "No activities were submited.",
            statusCode: 400,
        };
    }

    return {success: true, data: "Activities uploaded successfully", statusCode: 200};
  } catch (error) {
    console.error("Error en uploadActivities:", error);
    throw error;
  }
}
