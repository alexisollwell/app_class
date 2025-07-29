import { Context } from "hono";
import { AccountMaping } from "../models/accountMaping.js";
import { config } from "dotenv";
import { Request } from "../../../types/genericRequest.js";
import { authentication } from "../../../types/authentication.js";

import { sign } from "hono/utils/jwt/jwt";
import { setCookie } from "hono/cookie";
import { loginPayload } from "../../../types/payload.js";
import { credentialVerify } from "../db/verification.js";
import { studentIdGet } from "../db/studentIdGet.js";

config();

export const recieveCredentials = async (c: Context): Promise<Request<authentication>> => {
    try {
        const credentials = await c.req.json();
        const credentialFormatting = AccountMaping.transformData(credentials);

        let verification;

        if (credentialFormatting.data){
           verification = await credentialVerify(credentialFormatting.data)
        }

        if (!verification?.success) {
            if (!verification) {
                return {
                    success: false,
                    error: "Verification failed",
                    statusCode: 401,
                };
            }
            return {
                success: verification.success,
                error: verification.data,
                statusCode: verification.statusCode,
            };
        }
        else{
            const payload: loginPayload = {
                email:  credentialFormatting.data?.email || "",
                exp: Math.floor(Date.now() / 1000) + 60 * 60
            }

            const token = await sign(payload, process.env.secret || "")

            const tokens:authentication = {
                token: token,
                payload: payload
            }

            const id = await studentIdGet(tokens);
            if(id.data){
                setCookie(c, "user", id.data);
            }
    
            setCookie(c, "token", token);            

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

