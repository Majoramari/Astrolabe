import { Events } from "discord.js";

import { commandHandler } from "./handlers";
import { event } from "@modules/event";

export default event(
  Events.InteractionCreate,
  async ({ client }, interaction) => {
    void commandHandler(client, interaction);
  },
);
