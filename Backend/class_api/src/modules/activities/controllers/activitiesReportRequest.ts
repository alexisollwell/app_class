import { jsPDF } from "jspdf";
import { ActivitiesReport } from "../../../docs/activitiesReport/model/activityReport.js";
import { ReporteActividades } from "../../../types/docType/activitiesReport.js";
import { Request } from "../../../types/genericRequest.js";
import { readFileSync } from "fs";
import { activitesPerService } from "../db/activitiesView.js";
import { PrismaClient } from "@prisma/client";
import { serviceInformation } from "../../services/db/serviceFunctions.js";

export const activitiesReport = async (lenguageJson: string, id: string):Promise<Request<ArrayBuffer>> => {
    try {
        const connection = new PrismaClient();
        const serviceId = Number(id);
        const serviceData = await serviceInformation(connection, serviceId);
        const tableData = await activitesPerService(connection, serviceId);
        if(tableData.length === 0){
            return { success: false, error: "El id brindado no tiene ninguna actividad.", statusCode: 201};
        }
        const lenguage: ReporteActividades = JSON.parse(readFileSync(lenguageJson, 'utf-8'));
        const report = new ActivitiesReport(tableData, lenguage, serviceData);

        const document = new jsPDF({
            orientation: "landscape"
        });
        const doc = await report.draw(document);

        return { success: true, data: doc.data, statusCode: 200 };
    } catch (error) {
        return { success: false, error: (error as Error).message, statusCode: 500 };
    }
}

