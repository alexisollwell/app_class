import { Hono } from "hono";
import { uploadActivitiesRequest } from "../modules/activities/controllers/activityUploadRequest.js";
import { parseBodyMiddleware } from "../middlewares/parseBody.js";
import { activitiesReport } from "../modules/activities/controllers/activitiesReportRequest.js";

export const activityRoutes = new Hono();
//activityRoutes.use("*", authMiddleware)
activityRoutes.use("*", parseBodyMiddleware)

// Ruta para subir actividades a un servicio o prácticas de un estudiante
activityRoutes.post("/uploadActivities", async (c) => {
    const request = await uploadActivitiesRequest(c);
    return c.json(request, request.statusCode);
});

activityRoutes.get("/activitiesReport", async (c) => {
        const lenguageJson = "./src/docs/locale/activitiesReport/spanish.json";
        const document = await activitiesReport(lenguageJson);

        c.header('Content-Type', 'application/pdf');
        c.header('Content-Disposition', 'attachment; filename="test.pdf"');
            if (!document.success) {
                return c.json({ success: false, error: document.error }, 500);
            } else if (!document.data) {
                return c.json({ success: false, error: "Document data is undefined" }, 500);
            };

        return c.body(Buffer.from(document.data));
    });