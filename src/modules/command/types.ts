import type {
  AutocompleteInteraction,
  Awaitable,
  ChatInputCommandInteraction,
  ContextMenuCommandBuilder,
  MessageContextMenuCommandInteraction,
  SlashCommandBuilder,
  SlashCommandSubcommandBuilder,
  SlashCommandSubcommandsOnlyBuilder,
  UserContextMenuCommandInteraction,
} from "discord.js";

import type { AstrolabeClient } from "@modules/client";

type CommandProps = {
  client: AstrolabeClient;
  interaction: ChatInputCommandInteraction<"cached">;
};

type ContextProps = {
  client: AstrolabeClient;
  interaction:
    | MessageContextMenuCommandInteraction<"cached">
    | UserContextMenuCommandInteraction<"cached">;
};

export type CommandAutocompleteProps = {
  client: AstrolabeClient;
  interaction: AutocompleteInteraction<"cached">;
};

export type CommandExec = (props: CommandProps) => Awaitable<unknown>;
export type ContextExec = (props: ContextProps) => Awaitable<unknown>;
export type AutocompleteInteractionExec = (
  props: CommandAutocompleteProps,
) => Awaitable<unknown>;

export type CommandMeta =
  | SlashCommandSubcommandBuilder
  | SlashCommandSubcommandsOnlyBuilder
  | Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">;

export type ContextMeta = ContextMenuCommandBuilder;

export type Command = {
  cmd: {
    meta: CommandMeta;
    exec: CommandExec;
  };
  ctx?: {
    meta: ContextMeta;
    exec: ContextExec;
  };
  extra?: {
    autocomplete?: AutocompleteInteractionExec;
  };
};

export type CommandCategoryExtra = {
  description?: string;
  thumbnail?: string;
  emoji?: string;
};

export type CommandCategory = {
  name: string;
  commands: Command[];
} & CommandCategoryExtra;
