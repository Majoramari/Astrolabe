import type { ColorResolvable } from "discord.js";

import type { Config } from "./types";

const checkEnv = (environmentVariable: string | undefined): string =>
  environmentVariable ?? "nil";

export const configs: Config = {
  clientToken: checkEnv(process.env.BOT_TOKEN),
  mainGuild: checkEnv(process.env.MAIN_GUILD_ID),
  developerId: checkEnv(process.env.DEVELOPER_ID),
  logCategoryId: checkEnv(process.env.LOG_CATEGORY_ID),
  spaceChannelId: checkEnv(process.env.SPACE_CHANNEL_ID),
  notifyChannelId: checkEnv(process.env.NOTIFY_CHANNEL_ID),
  giveawayChannelId: checkEnv(process.env.GIVEAWAY_CHANNEL_ID),
  zionChannelId: checkEnv(process.env.ZION_CHANNEL_ID),
  dailyChannelId: checkEnv(process.env.DAILY_CHANNEL_D),
  voiceLogChannelId: checkEnv(process.env.VOICE_LOG_ID),
  seasonLogChannelId: checkEnv(process.env.SEASON_LOG_ID),
  zionBotId: checkEnv(process.env.ZION_BOT_ID),
  donateAmount: checkEnv(process.env.DONATE_AMOUNT),
  databaseUrl: checkEnv(process.env.DATABASE_URL),
  femaleRole: checkEnv(process.env.FEMALE_ROLE),
  voiceRole: checkEnv(process.env.VOICE_ROLE),
  colors: {
    primary: checkEnv(process.env.PRIMARY_COLOR) as ColorResolvable,
    accent: checkEnv(process.env.ACCENT_COLOR) as ColorResolvable,
  },
  emojis: {
    like: checkEnv(process.env.LIKE_EMOJI),
    dislike: checkEnv(process.env.DISLIKE_EMOJI),
    retweet: checkEnv(process.env.RETWEET_EMOJI),
    action: checkEnv(process.env.ACTION_EMOJI),
  },
};

if (
  Object.values(configs).includes("nil") ||
  Object.values(configs.emojis).includes("nil")
) {
  throw new Error("MJ-EV404 - Please set the ENVIRONMENT VARIABLES!");
}
