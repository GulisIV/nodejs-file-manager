import { commandsList, invalidInputMessage } from "./constants.js";

export const getUsername = (lineArgs) => {
  const usernameKey = lineArgs[0];
  const usernameStartIndex = usernameKey.indexOf("=") + 1;
  return usernameKey.slice(usernameStartIndex) || "Username";
};

export const executeCommand = async (input) => {
  const { currentDir, command, args } = input;
  switch (command) {
    case commandsList.up:
      await up();
      break;
    case commandsList.cd:
      await cd();
      break;
    case commandsList.ls:
      await list();
      break;
    case commandsList.cat:
      await cat();
      break;
    case commandsList.add:
      await add();
      break;
    case commandsList.rn:
      await rn();
      break;
    case commandsList.cp:
      await cp();
      break;
    case commandsList.mv:
      await mv();
      break;
    case commandsList.rm:
      await rm();
      break;
    case commandsList.os:
      await os();
      break;
    case commandsList.hash:
      await hash();
      break;
    case commandsList.compress:
      await compress();
      break;
    case commandsList.decompress:
      await decompress();
      break;
    default:
      console.log(invalidInputMessage);
      break;
  }
};
