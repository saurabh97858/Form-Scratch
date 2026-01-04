"use server";

import { db } from "@/config";
import { JsonForms, userResponses } from "@/config/schema";
import { desc, eq, and } from "drizzle-orm";
import moment from "moment";

export const getUserForms = async (userEmail: string) => {
    if (!userEmail) return [];

    try {
        const result = await db
            .select()
            .from(JsonForms)
            .where(eq(JsonForms.createdBy, userEmail))
            .orderBy(desc(JsonForms.id));

        return result;
    } catch (error) {
        console.error("Error fetching forms:", error);
        return [];
    }
};

export const deleteUserForm = async (formId: number, userEmail: string) => {
    try {
        // First, delete all responses associated with this form
        await db.delete(userResponses).where(eq(userResponses.formRef, formId));

        // Then, delete the form itself
        const result = await db
            .delete(JsonForms)
            .where(and(eq(JsonForms.id, formId), eq(JsonForms.createdBy, userEmail)));

        return { success: true };
    } catch (error) {
        console.error("Error deleting form:", error);
        throw error;
    }
}

export const getFormResponses = async (formId: number) => {
    try {
        const result = await db
            .select()
            .from(userResponses)
            .where(eq(userResponses.formRef, formId));
        return result;
    } catch (error) {
        console.error("Error fetching responses:", error);
        return [];
    }
}

export const submitFormResponse = async (formId: number, jsonResponse: string) => {
    try {
        const result = await db.insert(userResponses).values({
            jsonresponse: jsonResponse,
            createdAt: moment().format("YYYY-MM-DD"),
            formRef: formId,
        }).returning({ id: userResponses.id });

        // Return only the ID (serializable), not the full DB result object
        return { id: result[0].id };
    } catch (error) {
        console.error("Error submitting response:", error);
        throw error;
    }
}
// ... existing code ...

export const getFormById = async (formId: number) => {
    try {
        const result = await db
            .select()
            .from(JsonForms)
            .where(eq(JsonForms.id, formId));
        return result[0]; // Return the first matching form
    } catch (error) {
        console.error("Error fetching form by ID:", error);
        throw error;
    }
}

export const updateForm = async (formId: number, jsonForm: string) => {
    try {
        const result = await db
            .update(JsonForms)
            .set({
                jsonform: jsonForm,
            })
            .where(eq(JsonForms.id, formId));
        return { success: true };
    } catch (error) {
        console.error("Error updating form:", error);
        throw error;
    }
}

export const updateFormMetadata = async (formId: number, data: any) => {
    try {
        const result = await db
            .update(JsonForms)
            .set(data)
            .where(eq(JsonForms.id, formId));
        return { success: true };
    } catch (error) {
        console.error("Error updating form metadata:", error);
        throw error;
    }
}
