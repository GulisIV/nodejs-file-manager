import { cp } from "fs/promises";
import { getFileURL } from "./utils.js";
import { ERROR_MESSAGE } from "./constants.js";

const sourceFolder = "/files/";
const destinationFolder = "/files_copy/";

const copy = async () => {
  try {
    await cp(getFileURL(sourceFolder), getFileURL(destinationFolder), {
      recursive: true,
      errorOnExist: true,
      force: false,
    });
  } catch (e) {
    throw new Error(ERROR_MESSAGE);
  }
};

copy();
