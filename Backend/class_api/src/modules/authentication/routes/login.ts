import { Hono } from "hono";
import { recieveCredentials } from "../controllers/authentication.js";

export const auth = new Hono();

auth.post("login", async (c) => {
   const tokens = await recieveCredentials(c);
   return c.json(tokens);
});
