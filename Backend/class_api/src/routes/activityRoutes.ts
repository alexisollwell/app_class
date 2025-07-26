import { Hono } from "hono";
import { uploadActivitiesRequest } from "../modules/activities/controllers/activityUploadRequest.js";
import { parseBodyMiddleware } from "../middlewares/parseBody.js";
import { authMiddleware } from "../middlewares/verifying.js";

export const activityRoutes = new Hono();
activityRoutes.use("*", authMiddleware)
activityRoutes.use("*", parseBodyMiddleware)

// Ruta para subir actividades a un servicio o prácticas de un estudiante
activityRoutes.post("/uploadActivities", async (c) => {
    const request = await uploadActivitiesRequest(c);
    return c.json(request, request.statusCode);
});