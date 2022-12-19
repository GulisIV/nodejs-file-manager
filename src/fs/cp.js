import { createReadStream, createWriteStream } from "fs";
import { join } from "path";
import { checkFileExistance } from "../utils.js";

export const cp = async (currentDir, args) => {
  const requestedFilePath = join(currentDir, args[0]);
  const newFilePath = join(currentDir, args[1]);

  if (
    (await checkFileExistance(requestedFilePath)) &&
    !(await checkFileExistance(newFilePath))
  ) {
    createReadStream(requestedFilePath).pipe(createWriteStream(newFilePath));
  }
};
