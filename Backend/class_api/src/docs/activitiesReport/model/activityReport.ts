import jsPDF from "jspdf";
import { ReporteActividades } from "../../../types/docType/activitiesReport.js";
import { Request } from "../../../types/genericRequest.js";
import { headerTitle } from "../components/title.js";
import { activityInfo } from "../components/activityInfoHeader.js";
import { studentInfo } from "../components/studentInfo.js";
import { autoTable } from "jspdf-autotable";
import { Activity } from "../../../types/activity.js";
import { dateSimplier } from "../../../utils/dateSimplier.js";
import { serviceProgressView } from "../../../types/serviceProgress.js";
import { footer } from "../components/footer.js";


export class ActivitiesReport {
    constructor(private data: Activity[], private staticText: ReporteActividades, private dinamicText: serviceProgressView) { }

    private drawHeader(doc: jsPDF, totalHours: number, docDate: string) {
        const title = new headerTitle(105, 20, this.staticText);
        const actInfo = new activityInfo(15, 40, this.staticText, docDate);
        const stInfo = new studentInfo(25, 55, this.staticText, this.dinamicText);
        const foot = new footer(200, 145, this.staticText);

        return Promise.all([
            title.draw(doc),
            actInfo.draw(doc),
            stInfo.draw(doc),
            foot.draw(doc, totalHours)
        ]);
    }

    async draw(doc: jsPDF): Promise<Request<ArrayBuffer>> {
        try {
            if (!this.data || !Array.isArray(this.data)) {
                throw new Error("Data is undefined or activities list is invalid");
            }

            const columns = [
                this.staticText.tableText.N,
                this.staticText.tableText.date,
                this.staticText.tableText.activities,
                this.staticText.tableText.hours,
            ];

            const rowsPerPage = 10;
            const activities = this.data;
            const pageCount = Math.ceil(activities.length / rowsPerPage);
            let N = 1;

            for (let pageIndex = 0; pageIndex < pageCount; pageIndex++) {
                const start = pageIndex * rowsPerPage;
                const end = start + rowsPerPage;
                const currentActivities = activities.slice(start, end);

                const firstDateRaw = currentActivities[0]?.postingDate;
                const firstDate = firstDateRaw ? await dateSimplier(firstDateRaw) : "";
                const pageTotalHours = currentActivities.reduce((sum, act) => sum + (act.hours ?? 0), 0);

                const currentRows = await Promise.all(
                    currentActivities.map(async (act, i) => [
                        N++,
                        await dateSimplier(act.postingDate) ?? "",
                        act.description ?? "",
                        act.hours ?? ""
                    ])
                );

                if (pageIndex > 0) doc.addPage();
                await this.drawHeader(doc, pageTotalHours, firstDate);

                if (N > 9) {
                    N = 1;
                };

                autoTable(doc, {
                    head: [columns],
                    body: currentRows,
                    startY: 85,
                    theme: "grid",
                    headStyles: {
                        fillColor: [255, 255, 255],
                        textColor: [0, 0, 0],
                        lineColor: [0, 0, 0],
                        halign: "center",
                        fontStyle: "bold",
                        lineWidth: 0.1,
                        font: "Arial"
                    },
                    bodyStyles: {
                        halign: "center",
                        fontSize: 10,
                        textColor: [0, 0, 0],
                        lineColor: [0, 0, 0],
                        lineWidth: 0.1,
                        font: "Arial"
                    },
                    columnStyles: {
                        0: { minCellWidth: 20 },
                        1: { minCellWidth: 30 },
                        2: { minCellWidth: 130 },
                        3: { minCellWidth: 30 },
                    },
                    margin: { top: 10, bottom: 10, left: 25, right: 25 },
                });
            }

            const pdfBytes = doc.output("arraybuffer");

            return { success: true, data: pdfBytes, statusCode: 200 };
        } catch (error) {
            console.error("Error al generar el documento:", error);
            return {
                success: false,
                error: (error as Error).message,
                statusCode: 500,
            };
        }
    }
}