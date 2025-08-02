import jsPDF from "jspdf";
import { ReporteActividades } from "../../../types/docType/activitiesReport.js";
import { imgAdd } from "../../../utils/imageLoader.js";

export class headerTitle{
    constructor(private x: number, private y: number, private staticText:ReporteActividades){}
    async draw(doc: jsPDF){
        const loadImage1 = new imgAdd('./src/docs/activitiesReport/images/cesunLogo.jpg');
        const cesunLogo = await loadImage1.imageLoad();

        const loadImage2 = new imgAdd('./src/docs/activitiesReport/images/cesunNumber.jpg');
        const numberImage = await loadImage2.imageLoad();
        
        doc.setFontSize(11);
        doc.setFont("montserrat");
        doc.text(this.staticText.header.titleInfo, this.x + 14, this.y);
        doc.setFont("montserrat","bold");
        doc.setFontSize(18);
        doc.text(this.staticText.header.title, this.x, this.y + 6);
        doc.addImage(cesunLogo, 'png', this.x - 105, this.y - 18, 50, 30);
        doc.addImage(numberImage, 'png', this.x + 120, this.y - 22, 80, 30);
    }
}