import { lstat, access } from "fs/promises";
import { chdir, cwd } from "process";
import { join } from "path";
import { up, cd, ls } from "./navigation/index.js";
import { cat, add, rn, cp, mv, rm } from "./fs/index.js";
import { hash } from "./hash/hash.js";
import { os } from "./os/os.js";
import { compress, decompress } from "./zip/index.js";
import { commandsList, invalidInputMessage } from "./constants.js";

export const getCurrentDir = () => {
  return cwd();
};

export const setCurrentDir = (currentDir) => {
  chdir(currentDir);
  return getCurrentDir();
};

export const getCurrentDirMessage = (currentDir) => {
  return `You are currently in ${currentDir}`;
};

export const getRequestedFileType = async (path) => {
  const fileStat = await lstat(path);
  return fileStat.isDirectory() ? "directory" : "file";
};

export const getUsername = (lineArgs) => {
  const usernameKey = lineArgs[0];
  const usernameStartIndex = usernameKey.indexOf("=") + 1;
  return usernameKey.slice(usernameStartIndex) || "Username";
};

export const formatFilesOutput = async (currentDir, files) => {
  const dirFiles = [];
  const filesWithTypes = await Promise.allSettled(
    files.map(async (file) => {
      const type = await getRequestedFileType(join(currentDir, file));
      return {
        Name: file,
        Type: type,
      };
    })
  );

  for (const file of filesWithTypes) {
    if (file.status === "fulfilled") {
      dirFiles.push(file.value);
    }
  }
  const result = dirFiles.sort((a, b) => a.Type.localeCompare(b.Type));
  return result;
};

export const executeCommand = async (input) => {
  const { currentDir, command, args } = input;
  switch (command) {
    case commandsList.up:
      await up();
      break;
    case commandsList.cd:
      await cd(currentDir, args);
      break;
    case commandsList.ls:
      await ls(currentDir);
      break;
    case commandsList.cat:
      await cat(currentDir, args);
      break;
    case commandsList.add:
      await add(currentDir, args);
      break;
    case commandsList.rn:
      await rn(currentDir, args);
      break;
    case commandsList.cp:
      await cp(currentDir, args);
      break;
    case commandsList.mv:
      await mv(currentDir, args);
      break;
    case commandsList.rm:
      await rm(currentDir, args);
      break;
    case commandsList.os:
      await os(args);
      break;
    case commandsList.hash:
      await hash(currentDir, args);
      break;
    case commandsList.compress:
      await compress(currentDir, args);
      break;
    case commandsList.decompress:
      await decompress(currentDir, args);
      break;
    default:
      console.log(invalidInputMessage);
      break;
  }
};

export const checkFileExistance = async (file) => {
  try {
    await access(file);
    return true;
  } catch (e) {
    return false;
  }
};
