import bcrypt from "bcrypt";

export async function validateKey(input: string, storedHash: string) {
  return await bcrypt.compare(input, storedHash);
}
