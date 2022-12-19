import { rename } from "fs/promises";
import { join } from "path";
import { checkFileExistance } from "../utils.js";

export const rn = async (currentDir, args) => {
  const requestedFilePath = join(currentDir, args[0]);
  const newFilePath = join(currentDir, args[1]);

  if (
    (await checkFileExistance(requestedFilePath)) &&
    !(await checkFileExistance(newFilePath))
  ) {
    await rename(requestedFilePath, newFilePath);
  }
};
