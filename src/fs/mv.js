import { copyFile, unlink } from "fs/promises";
import { constants } from "fs";
import { join } from "path";
import { checkFileExistance } from "../utils.js";

export const mv = async (currentDir, args) => {
  const requestedFilePath = join(currentDir, args[0]);
  const newFilePath = join(currentDir, args[1], args[0]);

  if (await checkFileExistance(requestedFilePath)) {
    await copyFile(requestedFilePath, newFilePath, constants.COPYFILE_EXCL);
    await unlink(requestedFilePath);
  }
};
