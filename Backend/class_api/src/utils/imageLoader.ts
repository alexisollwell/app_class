import { readFileSync } from 'fs';

//Clase creada para obtener una imagen para nuestros pdfs.

export class imgAdd{
    private path : string;
    
    constructor(path: string) {
        this.path = path
    }
    /**
     * Reads an image file from the specified path and returns it as a base64 encoded string.
     * 
     * @returns {Promise<string>} A promise that resolves to the base64 encoded image string.
     */
    async imageLoad(): Promise<any>{
        try{
            const image = readFileSync(this.path).toString('base64');
            const base64image = `data:image/png;base64,${image}`;
            return base64image
        }catch(error){
            console.error('An error happend trying to read the image: ', error);
            throw error
        }
    }
}