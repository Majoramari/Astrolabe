import type { Config } from "drizzle-kit";

if (process.env.DATABASE_URL == null)
  throw new Error("DATABASE_URL is not defined");

export default {
  schema: "src/database/schema",
  out: "src/database/migrations",
  driver: "better-sqlite",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
} satisfies Config;
