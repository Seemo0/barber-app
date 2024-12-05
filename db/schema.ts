import { text, pgTable, date, time, serial } from "drizzle-orm/pg-core";

export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  haircut_type: text("haircut_type").notNull(),
  appointment_date: date("appointment_date"),
  appointment_time: time("appointment_time"),
});
