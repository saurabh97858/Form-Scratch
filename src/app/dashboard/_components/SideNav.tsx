"use client";

// components/SideNav.tsx
import { Button } from "@/components/ui/button";
import { LibraryBig, LineChart, MessagesSquare, Shield } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useCallback } from "react";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

import { useUser } from "@clerk/nextjs";
import { getUserForms } from "@/actions/form";

// Types
interface MenuItem {
    id: number;
    name: string;
    icons: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    path: string;
}

interface Form {
    id: number;
    style: string | null;
    jsonform: string | null;
    theme: string;
    background: string | null;
    createdBy: string;
    createdAt: string;
}

function SideNav() {
    const menuList: MenuItem[] = React.useMemo(() => [
        { id: 1, name: "MyForms", icons: LibraryBig, path: "/dashboard" },
        {
            id: 2,
            name: "Responses",
            icons: MessagesSquare,
            path: "/dashboard/responses",
        },
    ], []);

    const { user } = useUser();
    const path = usePathname();
    const [formList, setFormList] = React.useState<Form[]>([]);
    const [percFileCreated, setPercFileCreated] = React.useState(0);

    const getFormList = useCallback(async () => {
        if (!user?.primaryEmailAddress?.emailAddress) return;

        try {
            const result = await getUserForms(user?.primaryEmailAddress?.emailAddress); // Use server action

            setFormList(result);
            const perc = (result.length / 3) * 100;
            setPercFileCreated(Math.min(perc, 100));
        } catch (error) {
            console.error('Error fetching form list:', error);
            // Here you might want to add error handling UI
        }
    }, [user?.primaryEmailAddress?.emailAddress]);

    React.useEffect(() => {
        if (user) {
            getFormList();
        }
    }, [user, getFormList]);

    const handleCreateForm = () => {
        // Redirect to dashboard with query param to open modal
        // This works because FormGenerator listens for ?create=true
        window.location.href = "/dashboard?create=true";
    };

    return (
        <aside className="h-screen border-r border-white/20 bg-black/20 backdrop-blur-xl shadow-xl flex flex-col">
            <div className="p-5 border-b border-white/10">
                {/* Optional: Add Logo here if needed */}
                <h1 className="text-white font-bold text-xl tracking-tight">FormScratch</h1>
            </div>

            <nav className="p-5 flex-1">
                <div className="mb-6">
                    <Button
                        onClick={handleCreateForm}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 border-0"
                    >
                        <span className="flex items-center gap-2 font-semibold">
                            <span className="text-xl leading-none">+</span> Create Form
                        </span>
                    </Button>
                </div>
                {menuList.map((menu) => (
                    <Link
                        href={menu.path}
                        key={menu.id}
                        className={`flex items-center gap-3 p-4 mb-3 rounded-lg cursor-pointer transition-all duration-300 md:text-sm lg:text-base group
                            ${path === menu.path
                                ? "bg-primary text-white shadow-lg shadow-primary/40 scale-105 font-medium"
                                : "text-gray-300 hover:bg-white/10 hover:text-white"
                            }`}
                    >
                        <menu.icons className={`h-5 w-5 ${path === menu.path ? "animate-pulse" : "group-hover:text-white"}`} />
                        <span>{menu.name}</span>
                    </Link>
                ))}
            </nav>

            <div className="p-6">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-gray-400">Usage</span>
                        <span className="text-xs text-white font-bold">{Math.round(percFileCreated)}%</span>
                    </div>
                    <Progress
                        value={percFileCreated}
                        className="h-2 bg-white/20"
                    // Custom styling for indicator usually handled by class, forcing color here if needed or relying on primary
                    />
                    <h2 className="mt-2 text-xs text-gray-400">
                        <strong className="text-white">{formList.length} </strong>
                        of
                        <strong className="text-white"> 3 </strong>
                        forms used
                    </h2>
                </div>
            </div>
        </aside>
    );
}

export default SideNav;