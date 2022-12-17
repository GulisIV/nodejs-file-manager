import { readdir } from "fs/promises";
import { getFileURL } from "./utils.js";
import { ERROR_MESSAGE } from "./constants.js";

const dirPath = "/files";

const list = async () => {
  try {
    const folderFiles = await readdir(getFileURL(dirPath));
    console.log(folderFiles);
  } catch (e) {
    throw new Error(ERROR_MESSAGE);
  }
};

await list();
