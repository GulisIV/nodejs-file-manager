import { homedir } from "os";
import readline from "readline";
import { stdin, stdout } from "process";
import {
  getUsername,
  executeCommand,
  getCurrentDir,
  setCurrentDir,
  getCurrentDirMessage,
} from "./utils.js";
import { commandsList, operationFailedMessage } from "./constants.js";

const onStartArgsArray = process.argv.slice(2);
const userName = getUsername(onStartArgsArray);
let currentDir = setCurrentDir(homedir());

const welcomeMessage = `Welcome to the File Manager, ${userName}!`;
const exitMessage = `Thank you for using File Manager, ${userName}, goodbye!`;

console.log(welcomeMessage);
console.log(getCurrentDirMessage(currentDir));

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

rl.on("line", async (input) => {
  const lineInput = input.split(" ");
  const command = lineInput[0];
  const args = lineInput.slice(1);

  const commandData = {
    currentDir: currentDir,
    command: command,
    args: args,
  };

  command === commandsList.exit && rl.close();
  try {
    await executeCommand(commandData);
    currentDir = setCurrentDir(getCurrentDir());
  } catch (e) {
    console.error(`${operationFailedMessage} \n ${e}`);
  }
  console.log(getCurrentDirMessage(currentDir));
});

rl.on("SIGINT", () => {
  rl.close();
});

rl.on("close", () => {
  console.log(exitMessage);
});
