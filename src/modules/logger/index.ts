import {
  green,
  bold,
  black,
  cyan,
  blue,
  yellow,
  gray,
  bgGreen,
  bgYellow,
  bgBlue,
  bgRedBright,
  bgCyanBright,
  redBright,
  white,
  bgWhite,
  bgMagentaBright,
  magentaBright,
} from "colorette";
import type { User } from "discord.js";

import { logDate } from "./utils";

class Logger {
  private separatorCounter: number = 0;

  constructor() {
    console.log(`
    ${green(`
    ███╗░░░███╗░█████╗░░░░░░██╗░█████╗░██████╗░░█████╗░███╗░░░███╗░█████╗░██████╗░██╗
    ████╗░████║██╔══██╗░░░░░██║██╔══██╗██╔══██╗██╔══██╗████╗░████║██╔══██╗██╔══██╗██║
    ██╔████╔██║███████║░░░░░██║██║░░██║██████╔╝███████║██╔████╔██║███████║██████╔╝██║
    ██║╚██╔╝██║██╔══██║██╗░░██║██║░░██║██╔══██╗██╔══██║██║╚██╔╝██║██╔══██║██╔══██╗██║
    ██║░╚═╝░██║██║░░██║╚█████╔╝╚█████╔╝██║░░██║██║░░██║██║░╚═╝░██║██║░░██║██║░░██║██║
    ╚═╝░░░░░╚═╝╚═╝░░╚═╝░╚════╝░░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝
    `)}
             ${cyan(
               bold(
                 "This bot is made with ❤️ by MajorAmari - me@majoramari.com",
               ),
             )}
  
                     ┏━━━━━━━━━━━━━━━┓`);
  }

  invoke(message: string, user?: User): void {
    this.separator();
    console.log(
      `${gray(logDate(new Date()))} ┃ ${bgWhite(
        black("[INVOKE]"),
      )}      ┃ 📄 ${message}${
        user != null
          ? ` invoked by ${black(bgCyanBright(user.username ?? "unknown"))}`
          : ""
      }`,
    );
  }

  info(message: string, username?: string): void {
    this.separator();
    console.log(
      `${gray(logDate(new Date()))} ┃ ${bgWhite(
        black("[INFO]"),
      )}        ┃ 📄 ${blue(username ?? "")} ${message}`,
    );
  }

  ready(message: string): void {
    this.separator();
    console.log(
      `${gray(logDate(new Date()))} ┃ ${black(
        bgGreen("[READY]"),
      )}       ┃ ✅ ${green(message)} `,
    );
  }

  command(cmdName: string): void {
    this.separator();
    console.log(
      `${gray(logDate(new Date()))} ┃ ${black(
        bgMagentaBright("[COMMAND]"),
      )}     ┃ 📝 ${magentaBright(cmdName)} Command registered!`,
    );
  }

  event(message: string): void {
    this.separator();
    console.log(
      `${gray(logDate(new Date()))} ┃ ${black(
        bgBlue("[EVENT]"),
      )}       ┃ 👂 ${blue(message)} Event registered!`,
    );
  }

  warning(message: string): void {
    this.separator();
    console.log(
      `${gray(logDate(new Date()))} ┃ ${black(
        bgYellow("[WARNING]"),
      )}     ┃ ⚠️ ${yellow(message)}`,
    );
  }

  error(message: string = "MJ-UNKNOWN", code: string): void {
    this.separator();
    console.log(
      `${gray(logDate(new Date()))} ┃ ${black(
        bgRedBright("[ERROR]"),
      )}       ┃ 💀 ${redBright(code)} - ${white(message)}`,
    );
  }

  private separator(): void {
    this.separatorCounter++;

    if (this.separatorCounter >= 20) {
      this.separatorCounter = 0;
      console.log(`                     ┗━━━━━━━━━━━━━━━┛
      
           ${gray("Made with ❤️ by MajorAmari")}
    
                     ┏━━━━━━━━━━━━━━━┓`);
    }
  }
}

export const log = new Logger();
