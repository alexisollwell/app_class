import { Hono } from "hono";
import { parseBodyMiddleware } from "../middlewares/parseBody.js";
import { userServices } from "../modules/services/controller/userServices.js";
import { uploadServiceRequest } from "../modules/services/controller/serviceUpload.js";

export const servicesRoutes = new Hono();
servicesRoutes.use("*", parseBodyMiddleware)

// Ruta para subir actividades a un servicio o prácticas de un estudiante
servicesRoutes.get("/userServices", async (c) => {
    const request = await userServices(c);
    return c.json(request, request.statusCode);
});

servicesRoutes.post("/serviceUpload", async (c) => {
    const request = await uploadServiceRequest(c);
    return c.json(request, request.statusCode);
});