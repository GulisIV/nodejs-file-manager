import { rename as renameFS } from "fs/promises";
import { getFileURL, checkFileExistance } from "./utils.js";
import { ERROR_MESSAGE } from "./constants.js";

const fileToRename = "/files/wrongFilename.txt";
const newFileName = "/files/properFilename.md";

const rename = async () => {
  const isFileToRenameExists = await checkFileExistance(
    getFileURL(fileToRename)
  );
  const isNewFileExists = await checkFileExistance(getFileURL(newFileName));

  if (!isFileToRenameExists || isNewFileExists) {
    throw new Error(ERROR_MESSAGE);
  }

  try {
    renameFS(getFileURL(fileToRename), getFileURL(newFileName));
  } catch (e) {
    throw e;
  }
};

await rename();
