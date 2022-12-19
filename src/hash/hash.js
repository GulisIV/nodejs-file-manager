import { createHash } from "crypto";
import { readFile } from "fs/promises";
import { join } from "path";

export const hash = async (currentDir, args) => {
  const requestedFilePath = join(currentDir, args[0]);

  const fileData = await readFile(requestedFilePath);
  const hash = createHash("sha256").update(fileData).digest("hex");
  console.log(hash);
};
