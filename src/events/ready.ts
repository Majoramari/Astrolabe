import { EventTypes, event } from "@modules/event";
import { log } from "@modules/logger";

export default event(EventTypes.ClientReady, async ({ client }) => {
  log.ready(`${client.user?.username} is online and ready to serve!`);
});
