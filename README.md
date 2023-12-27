> Astrolabe aka (الأسْطرْلاب) is an application able to interact with [discordapp public API](https://discord.com/developers/docs/reference) by MajorAmari

---

### Error Codes

- **MJ-EV404**: The config is not filled
- **MJ-FL401**: Failed to login
- **MJ-DIR404**: No such directory
- **MJ-FILE404**: No such file
- **MJ-DIF**: Dynamic import failure
- **MJ-ICCINV**: Failed to invoke command
- **MJ-404CC**: Invalid Astrolabe page interaction Id
- **MJ-403INSR**: Invalid namespace reached
- **MJ-0000IMERR**: This error means its impossible to happen

### Deploy slash command

- **bun run deploy**: Deploy commands to main guild
- **bun run deploy --empty**: Deploy remove commands from main guild
- **bun run deploy --prod**: Deploy commands globally (to production)
- **bun run deploy --prod --empty**: Deploy remove commands globally (from production)
