import { chdir } from "process";

export const up = async () => {
  chdir("..");
};
