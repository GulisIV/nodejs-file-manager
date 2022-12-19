import { homedir } from "os";
import readline from "readline";
import { stdin, stdout } from "process";
import { getUsername, executeCommand } from "./utils.js";
import { commandsList, operationFailedMessage } from "./constants.js";

const onStartArgsArray = process.argv.slice(2);
const userName = getUsername(onStartArgsArray);
let currentDir = homedir();

const welcomeMessage = `Welcome to the File Manager, ${userName}!`;
const exitMessage = `Thank you for using File Manager, ${userName}, goodbye!`;
const currentDirMessage = `You are currently in ${currentDir}`;

console.log(welcomeMessage);
console.log(currentDirMessage);

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
  } catch (e) {
    console.log(operationFailedMessage);
  }
  console.log(currentDirMessage);
});

rl.on("SIGINT", () => {
  rl.close();
});

rl.on("close", () => {
  console.log(exitMessage);
});
