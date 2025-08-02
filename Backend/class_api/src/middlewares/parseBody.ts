import { Context, MiddlewareHandler } from "hono";

export const parseBodyMiddleware: MiddlewareHandler = async (c: Context, next: () => Promise<void>) => {
  try {
    const contentType = c.req.header("Content-Type") || "";

    let parsedBody;
    if (contentType.includes("application/json")) {
      parsedBody = await c.req.json();
    } else {
      parsedBody = await c.req.parseBody(); // para formularios, multipart, etc.
    }

    c.set("parsedBody", parsedBody);
    c.set("parsedExecuted", true);

  } catch (error) {
    console.error("Error al parsear el body:", error);
  } finally {
    await next();
  }
};