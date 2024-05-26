import { _hash,  _verify } from "./wasm_bcrypt.js";
export const hash = (password: string): string => _hash(password)
export const verify = (password: string, hash: string): boolean => _verify(password, hash)