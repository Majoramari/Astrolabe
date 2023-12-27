import { Database } from "bun:sqlite";
import { drizzle } from "drizzle-orm/bun-sqlite";
import { migrate } from "drizzle-orm/bun-sqlite/migrator";

const databaseUrl = process.env.DATABASE_URL;
if (databaseUrl == null) throw new Error("DATABASE_URL is not defined");

try {
  if (process.env.DATABASE_URL == null)
    throw new Error("DATABASE_URL is not defined");

  const sqlite = new Database(databaseUrl);
  const dbConnection = drizzle(sqlite);

  migrate(dbConnection, {
    migrationsFolder: "src/database/migrations",
  });

  console.log("Migration completed!");
  process.exit(0);
} catch (error) {
  console.log(error);
  process.exit(0);
}
