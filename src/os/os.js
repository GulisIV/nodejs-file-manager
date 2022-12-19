import { EOL, cpus, homedir, userInfo, arch } from "os";
import { invalidInputMessage } from "../constants.js";

export const os = async (args) => {
  const flag = args[0];
  switch (flag) {
    case "--EOL": {
      console.log(`EOL: ${JSON.stringify(EOL)}`);
      break;
    }
    case "--cpus": {
      const results = [];
      console.log(`Overall amount of CPUS: ${cpus().length}`);
      cpus().forEach((cpu) => {
        results.push({
          Model: cpu.model,
          Speed: `${(cpu.speed / 1024).toFixed(1)} GHz`,
        });
      });
      console.table(results);
      break;
    }
    case "--homedir": {
      console.log(`Home directory: ${homedir()}`);
      break;
    }
    case "--username": {
      console.log(`System user name:  ${userInfo().username}`);
      break;
    }
    case "--architecture": {
      console.log(`CPU architecture: ${arch()}`);
      break;
    }

    default:
      console.log(invalidInputMessage);
      break;
  }
};
