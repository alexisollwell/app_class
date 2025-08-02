import bcrypt from "bcrypt";

export async function validateKey(input: string, storedHash: string) {
  try{
    const ver = await bcrypt.compare(input, storedHash);
    return ver; 
  }catch(error){console.log(error)}
}
