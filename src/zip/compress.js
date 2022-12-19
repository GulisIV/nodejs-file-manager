import { createBrotliCompress } from "zlib";
import { pipeline } from "stream/promises";
import { createReadStream, createWriteStream } from "fs";
import { checkFileExistance } from "../utils.js";

export const compress = async (currentDir, args) => {
  const requestedFilePath = join(currentDir, args[0]);
  const newFilePath = join(currentDir, args[1]);

  if (await checkFileExistance(requestedFilePath)) {
    const readStream = createReadStream(requestedFilePath);
    const writeStream = createWriteStream(newFilePath);
    await pipeline(readStream, createBrotliCompress(), writeStream);
  }
};
