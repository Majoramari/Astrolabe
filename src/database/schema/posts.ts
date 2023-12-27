import { relations } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

import { users } from "@database/schema";

export const posts = sqliteTable("posts", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  content: text("content").notNull(),
  authorId: integer("authorId", { mode: "number" }).notNull(),
});

export const postsRelations = relations(posts, ({ one }) => ({
  author: one(users, {
    fields: [posts.authorId],
    references: [users.id],
  }),
}));
