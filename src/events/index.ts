import interactionCreate from "./interactionCreate";
import ready from "./ready";
import type { Event } from "@modules/event";

const events: Array<Event<any>> = [ready, interactionCreate];

export default events;
