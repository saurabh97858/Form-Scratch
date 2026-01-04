import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./_components/Header";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Make Your Form",
    description: "An AI form Builder",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <html lang="en" data-theme="light">
                <body className={inter.className}>
                    <Header />
                    <Toaster theme="light" />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
