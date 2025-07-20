import { Context } from "hono";
import { AccountMaping } from "../models/accountMaping.js";
import { config } from "dotenv";
import { Request } from "../../../types/genericRequest.js";
import { authentication } from "../../../types/authentication.js";

import { sign } from "hono/utils/jwt/jwt";
import { setCookie } from "hono/cookie";
import { loginPayload } from "../../../types/payload.js";

config();

export const recieveCredentials = async (c: Context): Promise<Request<authentication>> => {
    try {
        const credentials = await c.req.json();
        const credentialFormatting = AccountMaping.transformData(credentials);

        if (
            credentialFormatting.data?.email !== process.env.testEmail ||
            credentialFormatting.data?.password !== process.env.password
        ) {
            return { success: false, statusCode: 300, error: "Wrong Data, Check your credentials" }
        }
        else{
            const payload: loginPayload = {
                email:  credentialFormatting.data?.email || "",
                exp: Math.floor(Date.now() / 1000) + 60 * 60
            }

            const token = await sign(payload, process.env.secret || "")
            setCookie(c, "token", token)
            
            const tokens:authentication = {
                token: token,
                payload: payload
            } 
            return {success: true, statusCode: 200, data: tokens}
        }
    } catch (error) {
        
        return {
            success: false,
            error: (error as Error).message,
            statusCode: 500, 
        };
    }
};

