import { createGzip } from "zlib";
import { pipeline } from "stream/promises";
import { createReadStream, createWriteStream } from "fs";
import { filePath, archivePath } from "./utils.js";

const compress = async () => {
  const readStream = createReadStream(filePath);
  const writeStream = createWriteStream(archivePath);
  await pipeline(readStream, createGzip(), writeStream);
};

await compress();
