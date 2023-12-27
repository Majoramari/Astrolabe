import type { Command, CommandCategory, CommandCategoryExtra } from "./types";

export const command = ({ cmd, ctx, extra }: Command): Command => {
  return {
    cmd,
    ctx,
    extra,
  };
};

export const category = (
  name: string,
  commands: Command[],
  extra: CommandCategoryExtra = {},
): CommandCategory => ({
  name,
  commands,
  ...extra,
});
