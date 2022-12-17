import { readFile } from "fs/promises";
import { getFileURL } from "./utils.js";
import { ERROR_MESSAGE } from "./constants.js";

const filePath = "/files/fileToRead.txt";

const read = async () => {
  try {
    const fileData = await readFile(getFileURL(filePath), "utf8");
    console.log(fileData);
  } catch (e) {
    throw new Error(ERROR_MESSAGE);
  }
};

await read();
