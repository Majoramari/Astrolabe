import {
  type CommandMeta,
  type CommandExec,
  SlashCommandSubcommandBuilder,
  command,
} from "@modules/command";

const cmdMeta: CommandMeta = new SlashCommandSubcommandBuilder()
  .setName("test")
  .setDescription("test");

const cmdExec: CommandExec = async ({ interaction }): Promise<void> => {
  void interaction.reply({
    content: "Hello World!",
  });
};

export default command({ cmd: { meta: cmdMeta, exec: cmdExec } });
