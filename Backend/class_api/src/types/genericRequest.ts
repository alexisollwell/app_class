import { ContentfulStatusCode } from "hono/utils/http-status";

/**
 * Interfaz genérica para manejar solicitudes y respuestas en un sistema de extracción de datos.
 * Esta interfaz define la estructura de una solicitud que puede contener datos, errores y metadatos adicionales.
 */
export interface Request<T> {
    success: boolean; // Indica si la operación fue exitosa
    data?: T;         // Contiene los datos si la operación tuvo éxito
    error?: string;   // Contiene un mensaje de error si la operación falló
    errorType?: string; // Tipo de error, opcional
    stackTrace?: string; // Traza de pila del error, opcional
    additionalInfo?: string; // Información adicional opcional
    statusCode: ContentfulStatusCode; // Contiene el código de error HTTP si la operación falló
  }
  