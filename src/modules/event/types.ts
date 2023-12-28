import type { Awaitable, ClientEvents } from "discord.js";

import type { AstrolabeClient } from "@modules/client";

export type EventProps = {
  client: AstrolabeClient;
};

export type EventKeys = keyof ClientEvents;

export type EventExecute<T extends EventKeys> = (
  props: EventProps,
  ...args: ClientEvents[T]
) => Awaitable<unknown>;

export type Event<T extends EventKeys> = {
  id: T;
  execute: EventExecute<T>;
};

export { Events as EventTypes } from "discord.js";
