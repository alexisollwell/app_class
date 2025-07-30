import {jsPDF} from "jspdf";
import { ActivitiesReport } from "../../../docs/activitiesReport/model/activityReport.js";
import { ReporteActividades } from "../../../types/docType/activitiesReport.js";
import { Request } from "../../../types/genericRequest.js";
import { readFileSync } from "fs";

export const activitiesReport = async (lenguageJson: string):Promise<Request<ArrayBuffer>> => {
    try {
        const lenguage: ReporteActividades = JSON.parse(readFileSync(lenguageJson, 'utf-8'));
        const data = {}
        const report = new ActivitiesReport(data, lenguage);

        const document = new jsPDF({
            orientation: "landscape"
        });
        const doc = await report.draw(document);

        return { success: true, data: doc.data, statusCode: 200 };
    } catch (error) {
        return { success: false, error: (error as Error).message, statusCode: 500 };
    }
}

