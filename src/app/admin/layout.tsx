"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { user, isLoaded } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (isLoaded && (!user || user.publicMetadata?.role !== "admin")) {
            router.push("/");
        }
    }, [isLoaded, user, router]);

    if (!isLoaded || !user || user.publicMetadata?.role !== "admin") {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <div className="text-white text-xl">Loading...</div>
            </div>
        );
    }

    return <>{children}</>;
}
