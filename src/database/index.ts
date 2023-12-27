import { Database } from "bun:sqlite";
import { drizzle } from "drizzle-orm/bun-sqlite";

import { users } from "./schema";
const schema = { users };

const databaseUrl = process.env.DATABASE_URL;
if (databaseUrl == null) throw new Error("DATABASE_URL is not defined");

const connection = new Database(databaseUrl);
export const db = drizzle(connection, { schema });
