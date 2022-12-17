import { rm } from "fs/promises";
import { getFileURL, checkFileExistance } from "./utils.js";
import { ERROR_MESSAGE } from "./constants.js";

const filePath = "/files/fileToRemove.txt";

const remove = async () => {
  const isFileToRemoveExists = await checkFileExistance(getFileURL(filePath));

  if (!isFileToRemoveExists) {
    throw new Error(ERROR_MESSAGE);
  }

  try {
    await rm(getFileURL(filePath));
  } catch (e) {
    throw e;
  }
};

await remove();
