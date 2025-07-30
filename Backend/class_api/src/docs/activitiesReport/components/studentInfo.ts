import jsPDF from "jspdf";
import { ReporteActividades } from "../../../types/docType/activitiesReport.js";

export class studentInfo{
    constructor(private x: number, private y: number, private staticText:ReporteActividades){}
    draw(doc: jsPDF){
        doc.setFont("arial", "bold");
        doc.text(this.staticText.middleStudentInfo.entityName, this.x, this.y);
        doc.text(this.staticText.middleStudentInfo.supervisorName, this.x, this.y + 10);
        doc.text(this.staticText.middleStudentInfo.studentName, this.x, this.y + 20);

        doc.text(this.staticText.middleStudentInfo.phoneNumber, this.x + 170, this.y);
        doc.text(this.staticText.middleStudentInfo.email, this.x + 170, this.y + 10);
        doc.text(this.staticText.middleStudentInfo.career, this.x + 170, this.y + 20);
    }
}