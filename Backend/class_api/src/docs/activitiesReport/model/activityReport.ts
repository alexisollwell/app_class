import jsPDF from "jspdf";
import { ReporteActividades } from "../../../types/docType/activitiesReport.js";
import { Request } from "../../../types/genericRequest.js";
import { headerTitle } from "../components/title.js";
import { activityInfo } from "../components/activityInfoHeader.js";
import { studentInfo } from "../components/studentInfo.js";
import { autoTable } from "jspdf-autotable";

export class ActivitiesReport {
    constructor(private data: any, private staticText: ReporteActividades) { }

    async draw(doc: jsPDF): Promise<Request<ArrayBuffer>> {
        try {
            if (!this.data) {
                throw new Error('Data is undefined');
            }
            const title = new headerTitle(105, 20, this.staticText);
            const actInfo = new activityInfo(25, 40, this.staticText);
            const stInfo = new studentInfo(25, 55, this.staticText);

            await title.draw(doc);
            actInfo.draw(doc);
            stInfo.draw(doc);

            const columns = [
                this.staticText.tableText.N,
                this.staticText.tableText.date,
                this.staticText.tableText.activities,
                this.staticText.tableText.hours
            ]
            const rows = [
                [1, "", "", ""],
                [2, "", "", ""],
                [3, "", "", ""],
                [4, "", "", ""],
                [5, "", "", ""],
                [6, "", "", ""],
                [7, "", "", ""],
                [8, "", "", ""],
                [9, "", "", ""],
                [10, "", "", ""]
            ];

            autoTable(doc, {
                head: [columns],
                body: rows,
                startY: 85,  // Inicia la tabla a partir de una posición específica
                theme: 'grid', // Utiliza el estilo de 'grid' que tiene líneas
                headStyles: {
                    fillColor: [255, 255, 255], // Fondo blanco para el encabezado
                    textColor: [0, 0, 0], // Texto negro
                    lineColor: [0, 0, 0], // Líneas negras en el borde
                    halign: 'center', // Centra el texto en el encabezado
                    fontStyle: 'bold', // Texto en negrita
                    lineWidth: 0.1, // Grosor de las líneas
                },
                bodyStyles: {
                    halign: 'center', // Centra el texto en las celdas del cuerpo
                    fontSize: 10, // Tamaño de fuente de la tabla
                    textColor: [0, 0, 0], // Color de texto negro
                    lineColor: [0, 0, 0], // Líneas negras
                    lineWidth: 0.1, // Grosor de las líneas
                },
                columnStyles: {
                    0: { minCellWidth: 20 }, // "No." (columna 0) tiene un ancho de 20
                    1: { minCellWidth: 30 }, // "Fecha" (columna 1) tiene un ancho de 30
                    2: { minCellWidth: 130 }, // "Actividades" (columna 2) tiene un ancho de 100 (más grande)
                    3: { minCellWidth: 30 }, // "Horas" (columna 3) tiene un ancho de 30
                },
                margin: { top: 10, bottom: 10, left: 25, right: 25 }, // Márgenes
            });


            const pdfBytes = doc.output('arraybuffer');

            return { success: true, data: pdfBytes, statusCode: 200 };
        } catch (error) {
            console.error('Error al generar el documento:', error);
            // Retornar el resultado con error
            return { success: false, error: (error as Error).message, statusCode: 500 };
        }
    }
}