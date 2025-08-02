import jsPDF from "jspdf";
import { ReporteActividades } from "../../../types/docType/activitiesReport.js";

export class activityInfo{
    constructor(private x: number, private y: number, private staticText:ReporteActividades, private date: string){}
    draw(doc: jsPDF){
        const formatedDate = new Date(this.date);
        
        const day = String(formatedDate.getUTCDate()).padStart(2, "0");
        const monthIndex  = formatedDate.getUTCMonth();
        const year = String(formatedDate.getUTCFullYear());

        const monthNames = [
            "enero", "febrero", "marzo", "abril", "mayo", "junio",
            "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
            ];

        const monthName = monthNames[monthIndex];

        //Texto Estatico
        doc.setFont("arial", "bold");
        doc.setFontSize(11);
        doc.text(this.staticText.activityInfoHeader.socialService, this.x, this.y);
        doc.rect(this.x + 28, this.y - 6, 13, 8);
        doc.text(this.staticText.activityInfoHeader.profesionalPractices, this.x + 45, this.y);
        doc.rect(this.x + 87, this.y - 6, 13, 8);
        doc.text(this.staticText.activityInfoHeader.city, this.x + 150, this.y);
        doc.rect(this.x + 179, this.y - 6, 13, 8);
        doc.text(this.staticText.activityInfoHeader.preposition, this.x + 195, this.y);
        doc.rect(this.x + 201, this.y - 6, 37, 8);
        doc.text(this.staticText.activityInfoHeader.preposition, this.x + 240, this.y);
        doc.rect(this.x + 246, this.y - 6, 15, 8);
        

        // Texto Dinamico
        doc.text(day, this.x + 184, this.y);
        doc.text(monthName, this.x + 217, this.y);
        doc.text(year, this.x + 250, this.y)
    }
}