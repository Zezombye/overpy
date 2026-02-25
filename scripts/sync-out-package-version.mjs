import fs from "node:fs";
import path from "node:path";

const rootPackagePath = path.resolve("package.json");
const outPackagePath = path.resolve("out/package.json");

const rootPackage = JSON.parse(fs.readFileSync(rootPackagePath, "utf8"));
const outPackage = JSON.parse(fs.readFileSync(outPackagePath, "utf8"));

outPackage.version = rootPackage.version;

fs.writeFileSync(outPackagePath, `${JSON.stringify(outPackage, null, 2)}\n`);
console.log(`Synced out/package.json version to ${outPackage.version}`);
