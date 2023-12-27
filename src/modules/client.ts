import { red } from "colorette";
import { type ClientOptions, Client } from "discord.js";

import { configs } from "@modules/config";
import { log } from "@modules/logger";

export class AstrolabeClient extends Client {
  constructor(options: ClientOptions) {
    super(options);

    this.login(configs.clientToken).catch((error) => {
      log.error(
        `API server could be down! ${red(`STACK: ${error.message}`)}`,
        "MJ-FL401",
      );
      process.exit(1);
    });
  }
}
