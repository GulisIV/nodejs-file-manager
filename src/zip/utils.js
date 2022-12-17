import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const filePath = `${__dirname}/files/fileToCompress.txt`;
export const archivePath = `${__dirname}/files/archive.gz`;
