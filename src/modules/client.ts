import { red } from "colorette";
import { type ClientOptions, Client } from "discord.js";

import { registerEvents } from "./event";
import events from "@events";
import { configs } from "@modules/config";
import { log } from "@modules/logger";

export class AstrolabeClient extends Client {
  constructor(options: ClientOptions) {
    super(options);

    registerEvents(this, events);

    this.login(configs.clientToken).catch((error) => {
      log.error(
        `API server could be down! ${red(`STACK: ${error.message}`)}`,
        "MJ-FL401",
      );
      process.exit(1);
    });
  }
}
