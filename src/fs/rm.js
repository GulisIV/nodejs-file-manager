import { unlink } from "fs/promises";
import { join } from "path";

export const rm = async (currentDir, args) => {
  const requestedFilePath = join(currentDir, args[0]);

  await unlink(requestedFilePath);
};
