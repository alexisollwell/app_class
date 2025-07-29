
/**
 * @constant dateFormat
 * @param date - Una cadena de texto que representa una fecha.
 * @description Esta función toma una cadena de texto que representa una fecha, la convierte a un objeto Date y luego la formatea a una cadena en formato ISO.
 * @returns una cadena de texto en formato ISO de la fecha proporcionada.
 */
export const dateFormat = (date: string)  => {
    try {
        const originalDate = new Date(date);
        const ISODate = originalDate.toISOString();
        
        return ISODate;
    } catch (error) {
        console.log(error)
    }
}