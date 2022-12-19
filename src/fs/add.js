import { open } from "fs/promises";
import { join } from "path";

export const add = async (currentDir, args) => {
  const requestedPath = args[0];

  const createdFile = await open(join(currentDir, requestedPath), "ax");
  await createdFile.close();
};
