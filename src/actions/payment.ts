"use server";

import { Resend } from "resend";
import twilio from "twilio";
import { db } from "@/config";
import { UserSubscriptions } from "@/config/schema";

export async function processPayment(details: {
    name: string;
    email: string;
    phone: string;
    amount: string;
    plan: string;
    duration: string;
}) {
    console.log("Processing payment for:", details);

    // Initialize clients inside the function to ensure env vars are loaded
    const resendApiKey = process.env.RESEND_API_KEY;
    const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
    const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

    // Debug Logs (Masked for security)
    console.log("Resend Key Present:", !!resendApiKey);
    console.log("Twilio SID Present:", !!twilioAccountSid);

    const resend = resendApiKey ? new Resend(resendApiKey) : null;
    const twilioClient =
        twilioAccountSid && twilioAuthToken ? twilio(twilioAccountSid, twilioAuthToken) : null;

    // Simulate Payment Processing
    await new Promise((resolve) => setTimeout(resolve, 1500));

    let emailSent = false;
    let smsSent = false;

    // Send Email
    if (resend) {
        try {
            await resend.emails.send({
                from: "onboarding@resend.dev", // Using default testing domain
                to: details.email,
                subject: "Payment Successful - Subscription Activated",
                html: `
                    <h1>Thank you for your purchase, ${details.name}!</h1>
                    <p>We have successfully received your payment of <strong>${details.amount}</strong>.</p>
                    <p><strong>Plan Details:</strong></p>
                    <ul>
                        <li>Plan: ${details.plan}</li>
                        <li>Duration: ${details.duration}</li>
                        <li>Status: Active</li>
                    </ul>
                    <p>Your subscription is now active. You can start creating unlimited AI forms immediately.</p>
                    <br />
                    <p>Best Regards,</p>
                    <p>Make Your Form Team</p>
                `,
            });
            console.log("Email sent successfully");
            emailSent = true;
        } catch (error) {
            console.error("Failed to send email:", error);
        }
    } else {
        console.warn("Resend API Key missing. Skipping email.");
    }

    // Send SMS
    if (twilioClient && twilioPhoneNumber) {
        try {
            // Ensure phone number has country code (Defaulting to +91 for India if missing)
            let formattedPhone = details.phone.trim();
            if (!formattedPhone.startsWith("+")) {
                formattedPhone = `+91${formattedPhone}`;
            }

            console.log(`Sending SMS to: ${formattedPhone}`);

            await twilioClient.messages.create({
                body: `Ui thanks: Hi ${details.name}, Payment of ${details.amount} received! Your ${details.plan} plan (${details.duration}) is now ACTIVE. Thanks for choosing Make Your Form!`,
                from: twilioPhoneNumber,
                to: formattedPhone,
            });
            console.log("SMS sent successfully");
            smsSent = true;
        } catch (error) {
            console.error("Failed to send SMS:", error);
        }
    } else {
        console.warn("Twilio credentials missing. Skipping SMS.");
    }

    // Record Payment in Database
    try {
        // Parse amount (remove currency symbol if present)
        const numericAmount = parseInt(details.amount.replace(/[^0-9]/g, "")) || 0;

        await db.insert(UserSubscriptions).values({
            name: details.name,
            email: details.email,
            plan: details.plan,
            amount: numericAmount,
            paymentId: `PAY-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
            createdAt: new Date().toISOString(),
        });
        console.log("Payment recorded in database");
    } catch (dbError) {
        console.error("Failed to record payment in DB:", dbError);
    }

    return {
        success: true,
        message: "Payment processed successfully",
        notifications: {
            email: emailSent,
            sms: smsSent,
        },
    };
}
