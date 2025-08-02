import { Hono } from "hono";
import { recieveCredentials } from "../modules/authentication/controllers/authentication.js";
import { registerRequest } from "../modules/authentication/controllers/registerRequest.js";

export const auth = new Hono();

auth.post("login", async (c) => {
   const tokens = await recieveCredentials(c);
   return c.json(tokens);
});

auth.post("registration", async (c) => {
   const reqister = await registerRequest(c);

   return c.json(reqister, reqister.statusCode)
})
