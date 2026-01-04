"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function Header() {
    const { isSignedIn, user } = useUser();
    const path = usePathname();
    const isAdmin = (user?.publicMetadata as any)?.role === "admin";

    useEffect(() => {
        console.log(path);
    }, [path]); // Add 'path' to the dependency array

    return (
        !path.includes("aiform") && (
            <div className="sticky top-0 z-50 w-full border-b border-white/5 bg-slate-950/70 backdrop-blur-2xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-purple-600/5 pointer-events-none" />
                <div className="flex items-center justify-between max-w-screen-xl mx-auto px-6 py-4 relative z-10">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-600 to-blue-400 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                            <span className="text-white font-bold text-xl">M</span>
                        </div>
                        <span className="text-2xl font-bold text-white tracking-tight">
                            Make Your Form
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-1">
                        {[
                            { name: 'About', href: '/about' },
                            { name: 'Contact', href: '/contact' },
                            { name: 'Credits', href: '/credits' }
                        ].map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="relative px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white group overflow-hidden rounded-full"
                            >
                                <span className="relative z-10">{item.name}</span>
                                <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-500 group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300 ease-out -translate-x-1/2 group-hover:translate-x-0" />
                            </Link>
                        ))}
                    </nav>

                    {isSignedIn ? (
                        <div className="flex items-center gap-4">
                            {isAdmin && (
                                <Link href={"/admin"}>
                                    <Button variant="outline" className="relative overflow-hidden border-purple-500/50 bg-purple-500/10 text-purple-300 hover:text-white hover:border-purple-400 hover:bg-purple-500/20 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.1)] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] px-6 py-5 text-base font-medium">
                                        <span className="relative z-10">Admin Panel</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                                    </Button>
                                </Link>
                            )}
                            <Link href={"/dashboard"}>
                                <Button className="relative group border border-gray-700 bg-gray-900/50 hover:bg-gray-800 text-gray-200 hover:text-white transition-all duration-300 overflow-hidden rounded-lg px-6 py-5 text-base font-medium">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <span className="relative flex items-center gap-2">
                                        Dashboard
                                    </span>
                                </Button>
                            </Link>
                            <UserButton
                                appearance={{
                                    elements: {
                                        avatarBox: "h-11 w-11 ring-2 ring-white/10 hover:ring-white/20 transition-all shadow-lg shadow-black/20"
                                    }
                                }}
                            />
                        </div>
                    ) : (
                        <SignInButton>
                            <Button className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/25 border-0 rounded-full px-10 py-6 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50 group text-lg">
                                <span className="relative z-10 flex items-center gap-2 font-semibold">
                                    Get Started
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
                            </Button>
                        </SignInButton>
                    )}
                </div>
            </div>
        )
    );
}

export default Header;
