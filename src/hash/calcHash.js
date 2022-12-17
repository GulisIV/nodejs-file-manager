import { createHash } from "crypto";
import { readFile } from "fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = `${__dirname}/files/fileToCalculateHashFor.txt`;
const calculateHash = async () => {
  try {
    const fileData = await readFile(filePath);
    const hash = createHash("sha256").update(fileData).digest("hex");
    console.log(hash);
  } catch (e) {
    throw e;
  }
};

await calculateHash();
