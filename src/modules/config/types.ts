import type { ColorResolvable } from "discord.js";

export type Config = {
  clientToken: string;
  mainGuild: string;
  developerId: string;
  spaceChannelId: string;
  logCategoryId: string;
  notifyChannelId: string;
  giveawayChannelId: string;
  zionChannelId: string;
  dailyChannelId: string;
  voiceLogChannelId: string;
  seasonLogChannelId: string;
  zionBotId: string;
  donateAmount: string;
  databaseUrl: string;
  femaleRole: string;
  voiceRole: string;
  colors: {
    primary: ColorResolvable;
    accent: ColorResolvable;
  };
  emojis: {
    like: string;
    dislike: string;
    retweet: string;
    action: string;
  };
};
