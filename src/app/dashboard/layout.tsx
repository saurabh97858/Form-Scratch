"use client";

import { SignedIn } from "@clerk/nextjs";
import React, { ReactNode } from "react";
import SideNav from "./_components/SideNav";

interface LayoutProps {
    children: ReactNode;
}

const DashboardLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <SignedIn>
            <div
                className="min-h-screen bg-cover bg-center bg-fixed relative flex"
                style={{
                    backgroundImage: "url('/dashboard-bg.png')",
                    backgroundAttachment: "fixed"
                }}
            >
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/50 z-0 fixed pointer-events-none" />

                <div className="md:w-64 fixed hidden md:block z-20 h-full">
                    <SideNav />
                </div>
                <div className="md:ml-64 w-full relative z-10">{children}</div>
            </div>
        </SignedIn>
    );
};

export default DashboardLayout;
