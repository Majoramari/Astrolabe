import { relations } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

import { posts } from "./posts";

export const users = sqliteTable("users", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  gender: text("text", { enum: ["male", "female"] }).notNull(),
});

export const usersRelations = relations(users, ({ many }) => ({
  posts: many(posts),
}));
