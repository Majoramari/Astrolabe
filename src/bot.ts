import {
  type ClientOptions,
  AllowedMentionsTypes,
  GatewayIntentBits,
  Partials,
} from "discord.js";

import { AstrolabeClient } from "@modules/client";

const clientOptions: ClientOptions = {
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Message, Partials.Reaction, Partials.Channel],
  allowedMentions: {
    parse: [
      AllowedMentionsTypes.Everyone,
      AllowedMentionsTypes.Role,
      AllowedMentionsTypes.User,
    ],
  },
};

void new AstrolabeClient(clientOptions);
