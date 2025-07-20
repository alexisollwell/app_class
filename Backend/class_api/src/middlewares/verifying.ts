import { bearerAuth } from "hono/bearer-auth";
import { Jwt } from "hono/utils/jwt";

export const authMiddleware = bearerAuth({
   verifyToken: async (token, c) => {
      try {
         // Validar el token con la clave secreta
         await Jwt.verify(token, process.env.secret || "");
         
         return true; // Retorna true si el token es válido
      } catch (error) {
         return false; // Si el token no es válido, rechaza la autenticación
      }
   }
})
