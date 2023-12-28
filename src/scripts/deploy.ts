import { bgGreen, bgRed, black } from "colorette";
import { REST, Routes, type APIUser } from "discord.js";

import slashCommands from "@commands";
import { configs } from "@modules/config";

const isProduction: boolean = process.argv.includes("--prod");
const isCleaning: boolean = process.argv.includes("--empty");

const rest = new REST({ version: "10" }).setToken(configs.clientToken);

const currentUser = (await rest.get(Routes.user())) as APIUser;
const globalEndpoint = Routes.applicationCommands(currentUser.id);
const localEndpoint = Routes.applicationGuildCommands(
  currentUser.id,
  configs.mainGuild,
);
const endpoint = isProduction ? globalEndpoint : localEndpoint;

const body = isCleaning
  ? []
  : slashCommands
      .flatMap(({ commands }) => [
        ...commands.map(({ cmd }) => cmd.meta),
        ...commands.map(({ ctx }) => ctx?.meta),
      ])
      .filter((item) => Boolean(item));

const releaseMessage = (tag: string, action: string): string =>
  bgGreen(
    black(
      `Successfully ${action} commands in ${
        isCleaning ? "cleaned" : "registered"
      } ${isCleaning ? "from" : "for"} ${bgRed(configs.mainGuild)} as ${bgRed(
        tag,
      )}`,
    ),
  );

void rest
  .put(endpoint, { body })
  .then(() => {
    const tag: string = `${currentUser.username}#${currentUser.bot}`;
    const action: string = isProduction
      ? isCleaning
        ? "cleaned global"
        : "released"
      : "registered for development";

    const response: string = releaseMessage(tag, action);
    console.log(response);
  })
  .catch((error: Error) => {
    console.error(error);
  });
