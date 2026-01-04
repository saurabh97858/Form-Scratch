import { boolean, integer, pgTable, serial, text, varchar, timestamp } from "drizzle-orm/pg-core";

export const JsonForms = pgTable("JsonForms", {
    id: serial("id").primaryKey(),
    jsonform: text("jsonform"),
    theme: varchar("theme").notNull().default("light"),
    background: varchar("background"),
    style: varchar("style"),
    createdBy: varchar("createdBy").notNull(),
    createdAt: varchar("createdAt").notNull(),

    enabelSignIn: boolean("enabelSignIn").default(false),
});

export const userResponses = pgTable("userResponses", {
    id: serial("id").primaryKey(),
    jsonresponse: text("jsonresponse").notNull(),
    createdBy: varchar("createdBy").default("anonymous"),
    createdAt: varchar("createdAt").notNull(),
    formRef: integer("formRef").references(() => JsonForms.id),
});

export const contactSubmissions = pgTable("contactSubmissions", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull(),
    subject: varchar("subject", { length: 255 }).notNull(),
    message: text("message").notNull(),
    status: varchar("status", { length: 50 }).notNull().default("Pending"),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const UserSubscriptions = pgTable("userSubscriptions", {
    id: serial("id").primaryKey(),
    name: varchar("name").notNull(),
    email: varchar("email").notNull(),
    plan: varchar("plan").notNull(),
    amount: integer("amount").notNull(),
    paymentId: varchar("paymentId"),
    createdAt: varchar("createdAt").notNull(),
});
