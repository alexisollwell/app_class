import jsPDF from "jspdf";
import { ReporteActividades } from "../../../types/docType/activitiesReport.js";

export class footer{
    constructor(private x: number, private y: number, private staticText:ReporteActividades){}
    async draw(doc: jsPDF, totalHours: Number){
        doc.setFont('arial', 'bold');
        doc.rect(this.x + 38, this.y + 23, 34, 8);
        doc.text(String(totalHours), this.x + 54, this.y + 29)
        doc.text(this.staticText.tableText.totalHours, this.x - 15, this.y + 30);

        doc.rect(this.x - 175, this.y + 35, 247, 22);
        doc.rect(this.x - 175, this.y + 52, 247, 5);

        doc.line(this.x - 100, this.y + 35, this.x - 100 , this.y + 57 )
        doc.line(this.x - 5, this.y + 35, this.x - 5 , this.y + 57 )

        doc.text(this.staticText.signature.institutionSignature, this.x - 165, this.y + 56)
        doc.text(this.staticText.signature.studentSignature, this.x - 68, this.y + 56)
        doc.text(this.staticText.signature.cesunSignature, this.x + 17, this.y + 56)
    }
}