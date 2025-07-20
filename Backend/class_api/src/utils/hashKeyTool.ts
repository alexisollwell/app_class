import bcrypt from "bcrypt";

export async function haskKey(plainKey: string): Promise<string> {
    const key = await bcrypt.hash(plainKey, 10);
    return key
}