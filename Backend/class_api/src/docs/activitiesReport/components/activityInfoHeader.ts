import jsPDF from "jspdf";
import { ReporteActividades } from "../../../types/docType/activitiesReport.js";

export class activityInfo{
    constructor(private x: number, private y: number, private staticText:ReporteActividades){}
    draw(doc: jsPDF){
        doc.setFont("arial", "bold");
        doc.setFontSize(11);
        doc.text(this.staticText.activityInfoHeader.socialService, this.x, this.y);
        doc.text(this.staticText.activityInfoHeader.profesionalPractices, this.x + 45, this.y);
        doc.text(this.staticText.activityInfoHeader.city, this.x + 150, this.y);
        doc.text(this.staticText.activityInfoHeader.preposition, this.x + 195, this.y);
        doc.text(this.staticText.activityInfoHeader.preposition, this.x + 240, this.y);
    }
}