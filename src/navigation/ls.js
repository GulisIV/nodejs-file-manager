import { readdir } from "node:fs/promises";
import { formatFilesOutput } from "../utils.js";

export const ls = async (currentDir) => {
  const files = await readdir(currentDir);
  const result = await formatFilesOutput(currentDir, files);
  console.table(result);
};
