import type { Interaction } from "discord.js";

import type { AstrolabeClient } from "@modules/client";
import { log } from "@modules/logger";

export const commandHandler = async (
  client: AstrolabeClient,
  interaction: Interaction,
): Promise<void> => {
  if (!interaction.isChatInputCommand() || !interaction.inCachedGuild()) return;

  try {
    const commandName = interaction.commandName;
    const command = client.commands.get(commandName);

    if (command == null) {
      log.error("MJ-404ICCMD: Command not found...", "MJ-ICCINV");
      // void prereplies.wentWrong({ interaction }, false, "MJ-ICCINV");
      return;
    }

    void command.cmd.exec({
      client,
      interaction,
    });

    log.invoke(commandName, interaction.user);
  } catch (rawError: unknown) {
    const error =
      typeof rawError === "string"
        ? rawError.toUpperCase()
        : rawError instanceof Error
          ? rawError.message
          : "unknown error message";
    log.error(error, "MJ-ICCINV");
    // void prereplies.wentWrong({ interaction }, false, "MJ-ICCINV");
  }
};
