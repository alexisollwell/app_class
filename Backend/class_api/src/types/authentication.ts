import { loginPayload } from "./payload.js"

export type authentication = {
    token: string,
    payload: loginPayload
}