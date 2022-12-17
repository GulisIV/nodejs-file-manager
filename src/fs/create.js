import { writeFile } from "fs/promises";
import { getFileURL } from "./utils.js";
import { ERROR_MESSAGE } from "./constants.js";

const freshFilePath = "/files/fresh.txt";
const fileContent = "I am fresh and young";

const create = async () => {
  try {
    await writeFile(getFileURL(freshFilePath), fileContent, { flag: "wx+" });
  } catch (e) {
    throw new Error(ERROR_MESSAGE);
  }
};

await create();
