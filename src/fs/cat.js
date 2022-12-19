import { join, isAbsolute } from "path";
import { open } from "fs/promises";
import { getRequestedFileType } from "../utils.js";
import { operationFailedMessage } from "../constants.js";

export const cat = async (currentDir, args) => {
  const requestedPath = args[0];
  const path = isAbsolute(requestedPath)
    ? requestedPath
    : join(currentDir, requestedPath);

  if ((await getRequestedFileType(path)) === "directory") {
    console.log("here");
    console.log(operationFailedMessage);
    return;
  }

  const file = await open(path);
  let fileData = "";
  const readStream = file.createReadStream();
  readStream.on("data", (data) => (fileData += data));
  readStream.on("end", () => process.stdout.write(fileData + "\n"));
  readStream.on("error", () => console.log(operationFailedMessage));
};
