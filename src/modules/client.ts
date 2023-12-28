import { red } from "colorette";
import { type ClientOptions, Client, Collection } from "discord.js";

import { type Command } from "./command";
import { registerEvents } from "./event";
import commandsFiles from "@commands";
import events from "@events";
import { configs } from "@modules/config";
import { log } from "@modules/logger";

export class AstrolabeClient extends Client {
  readonly commands: Collection<string, Command> = this.getCommands();
  readonly contextMenu: Collection<string, Command> = this.getContextMenus();

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

  // ? Helpers
  // * Get all commands from the commands folder
  private getCommands(): Collection<string, Command> {
    const mappedCommand = commandsFiles.map(({ commands }) => commands).flat();
    return new Collection<string, Command>(
      mappedCommand.map((data) => {
        log.command(data.cmd.meta.name);
        return [data.cmd.meta.name, data];
      }),
    );
  }

  // * Get all context menus from the commands folder
  private getContextMenus(): Collection<string, Command> {
    const mappedCommand = commandsFiles.map(({ commands }) => commands).flat();
    return new Collection<string, Command>(
      mappedCommand
        .filter((data) => data.ctx?.meta)
        .map((data) => {
          log.command(data.ctx!.meta.name);
          return [data.ctx!.meta.name, data];
        }),
    );
  }
}
