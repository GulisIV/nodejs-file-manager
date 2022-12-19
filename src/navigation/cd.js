import { chdir, cwd } from "process";
import { join, isAbsolute } from "path";

export const cd = async (currentDir, args) => {
  const requestedPath = args[0];
  const path = isAbsolute(requestedPath)
    ? requestedPath
    : join(currentDir, requestedPath);
  chdir(path);
};
