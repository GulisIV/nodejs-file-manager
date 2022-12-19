import { createBrotliDecompress } from "zlib";
import { join } from "path";
import { pipeline } from "stream/promises";
import { createReadStream, createWriteStream } from "fs";
import { checkFileExistance } from "../utils.js";

export const decompress = async (currentDir, args) => {
  const requestedFilePath = join(currentDir, args[0]);
  const newFilePath = join(currentDir, args[1]);

  if (await checkFileExistance(requestedFilePath)) {
    const readStream = createReadStream(requestedFilePath);
    const writeStream = createWriteStream(newFilePath);
    await pipeline(readStream, createBrotliDecompress(), writeStream);
  }
};
