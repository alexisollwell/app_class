import jsPDF from "jspdf";
import { ReporteActividades } from "../../../types/docType/activitiesReport.js";
import { serviceProgressView } from "../../../types/serviceProgress.js";

export class studentInfo{
    constructor(private x: number, private y: number, private staticText:ReporteActividades, private dinamicText: serviceProgressView){}
    draw(doc: jsPDF){
        // Texto estatico
        doc.setFont("Arial", "bold");
        doc.text(this.staticText.middleStudentInfo.entityName, this.x, this.y);
        doc.text(this.staticText.middleStudentInfo.supervisorName, this.x, this.y + 10);
        doc.text(this.staticText.middleStudentInfo.studentName, this.x, this.y + 20);

        doc.text(this.staticText.middleStudentInfo.phoneNumber, this.x + 170, this.y);
        doc.text(this.staticText.middleStudentInfo.email, this.x + 170, this.y + 10);
        doc.text(this.staticText.middleStudentInfo.career, this.x + 170, this.y + 20);

        // Texto Dinamico
        doc.setFont("Arial", "");
        doc.text(this.dinamicText.institutionName ?? "", this.x + 42, this.y);
        doc.rect(this.x + 40, this.y - 6, 120, 8);
        doc.text(this.dinamicText.supervisorName ?? "", this.x + 42, this.y + 10);
        doc.rect(this.x + 40, this.y + 4 , 120, 8);
        doc.text(this.dinamicText.name ?? "", this.x + 42, this.y + 20);
        doc.rect(this.x + 40, this.y + 14 , 120, 8);

        doc.text(this.dinamicText.phoneNumber ?? "", this.x + 190, this.y);
        doc.rect(this.x + 187, this.y - 6, 60, 8);
        doc.text(this.dinamicText.institutionalEmail ?? "", this.x + 190, this.y + 10);
        doc.rect(this.x + 187, this.y + 4, 60, 8);
        doc.text(this.dinamicText.careerInCourse ?? "", this.x + 190, this.y + 20);
        doc.rect(this.x + 187, this.y + 14, 60, 8);
    }
}