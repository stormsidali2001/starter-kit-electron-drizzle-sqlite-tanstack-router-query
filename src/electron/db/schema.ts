import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

// Minimal config table for storing key-value pairs
export const config = sqliteTable('config', {
  key: text('key').primaryKey(),
  value: text('value').notNull(),
});
