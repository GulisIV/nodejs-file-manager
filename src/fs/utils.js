import { access } from "fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const getFileURL = (path) => {
  return __dirname + path;
};

export const checkFileExistance = async (file) => {
  try {
    await access(file);
    return true;
  } catch (e) {
    return false;
  }
};
