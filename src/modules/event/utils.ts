/* eslint-disable @typescript-eslint/no-unsafe-argument */
import type { Event, EventExecute, EventKeys } from "./types";
import type { AstrolabeClient } from "@modules/client";
import { log } from "@modules/logger";
import { catchErrorMsg } from "@utils/catchErrorMsg";

export const event = <T extends EventKeys>(
  id: T,
  execute: EventExecute<T>,
): Event<T> => ({
  id,
  execute,
});

export const registerEvents = (
  client: AstrolabeClient,
  events: Array<Event<any>>,
): void => {
  for (const event of events) {
    // ? Log registered events
    log.event(event.id);

    client[event.id === "ready" ? "once" : "on"](event.id, async (...args) => {
      const props = {
        client,
      };

      try {
        await event.execute(props, ...args);
      } catch (error) {
        log.error(catchErrorMsg(error), "MJ-FL401");
      }
    });
  }
};
