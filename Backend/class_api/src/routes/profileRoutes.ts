import { Hono } from "hono";
import { userProfileInfo } from "../modules/profile/controllers/userProfile.js";
import { authMiddleware } from "../middlewares/verifying.js";

export const profile = new Hono();

profile.use("*", authMiddleware);

profile.get("studentInfo", async (c) => {
   const request = await userProfileInfo(c);
   return c.json(request);
});
