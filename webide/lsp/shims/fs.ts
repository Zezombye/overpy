// Replaces `fs` / `node:fs` in the language server worker bundle.
import * as fsPromises from "./fsPromises";

export { existsSync, lstatSync, readdirSync, readFileSync, statSync, writeFileSync } from "./vfs";
export const promises = fsPromises;
