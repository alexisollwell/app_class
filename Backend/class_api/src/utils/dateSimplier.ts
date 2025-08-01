/**
 * @constant dateFormat
 * @param date - Una cadena de texto que representa una fecha.
 * @description Esta función toma una cadena de texto que representa una fecha, la convierte a un objeto Date y la formatea como 'YYYY/MM/DD'.
 * @returns una cadena de texto en formato 'YYYY/MM/DD' de la fecha proporcionada.
 */
export const dateSimplier = async (date: string): Promise<string> => {
    try {
        const originalDate = new Date(date);
        const year = originalDate.getFullYear();
        const month = String(originalDate.getMonth() + 1).padStart(2, '0'); // Meses van de 0 a 11
        const day = String(originalDate.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    } catch (error) {
        console.error("Error al formatear la fecha:", error);
        return ""; // Puedes retornar un string vacío o lanzar el error si prefieres
    }
};