import { createGunzip } from "zlib";
import { pipeline } from "stream/promises";
import { createReadStream, createWriteStream } from "fs";
import { filePath, archivePath } from "./utils.js";

const decompress = async () => {
  const readStream = createReadStream(archivePath);
  const writeStream = createWriteStream(filePath);
  await pipeline(readStream, createGunzip(), writeStream);
};

await decompress();
