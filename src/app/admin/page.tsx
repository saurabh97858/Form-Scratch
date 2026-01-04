"use client";

import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import UserList from "./_components/UserList";
import IncomeStats from "./_components/IncomeStats";
import ContactRequests from "./_components/ContactRequests";
import Analytics from "./_components/Analytics";
import { Users, DollarSign, MessageSquare, TrendingUp, BarChart3 } from "lucide-react";

export default function AdminPage() {
    const { user } = useUser();
    const [activeTab, setActiveTab] = useState("overview");

    const stats = [
        {
            title: "Total Users",
            value: "1,234",
            icon: <Users className="h-8 w-8 text-blue-500" />,
            change: "+12%",
        },
        {
            title: "Total Income",
            value: "$45,678",
            icon: <DollarSign className="h-8 w-8 text-green-500" />,
            change: "+23%",
        },
        {
            title: "Contact Requests",
            value: "56",
            icon: <MessageSquare className="h-8 w-8 text-purple-500" />,
            change: "+8",
        },
        {
            title: "Forms Created",
            value: "8,945",
            icon: <TrendingUp className="h-8 w-8 text-orange-500" />,
            change: "+15%",
        },
    ];

    const tabs = [
        { id: "overview", label: "Overview", icon: <BarChart3 className="h-4 w-4" /> },
        { id: "users", label: "Users", icon: <Users className="h-4 w-4" /> },
        { id: "income", label: "Income", icon: <DollarSign className="h-4 w-4" /> },
        { id: "contacts", label: "Contacts", icon: <MessageSquare className="h-4 w-4" /> },
        { id: "analytics", label: "Analytics", icon: <TrendingUp className="h-4 w-4" /> },
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white pb-16">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                        Admin Dashboard
                    </h1>
                    <p className="text-gray-400 mt-2 text-lg">
                        Welcome back, {user?.firstName || "Admin"}
                    </p>
                </div>

                {/* Tabs */}
                <div className="mb-8 border-b border-gray-700">
                    <div className="flex gap-2 overflow-x-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-6 py-3 font-semibold text-sm transition-all duration-300 whitespace-nowrap relative group ${activeTab === tab.id
                                        ? "text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 border-b-2 border-yellow-500"
                                        : "text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-300 hover:via-yellow-400 hover:to-orange-400"
                                    }`}
                            >
                                <span className={activeTab === tab.id ? "text-yellow-500" : "text-gray-400 group-hover:text-yellow-400 transition-colors duration-300"}>
                                    {tab.icon}
                                </span>
                                {tab.label}
                                {/* Hover glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-orange-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg pointer-events-none"></div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="animate-fadeIn">
                    {activeTab === "overview" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        {stat.icon}
                                        <span className="text-sm text-green-400 font-semibold">
                                            {stat.change}
                                        </span>
                                    </div>
                                    <h3 className="text-gray-400 text-sm mb-1">{stat.title}</h3>
                                    <p className="text-3xl font-bold">{stat.value}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === "users" && <UserList />}
                    {activeTab === "income" && <IncomeStats />}
                    {activeTab === "contacts" && <ContactRequests />}
                    {activeTab === "analytics" && <Analytics />}
                </div>
            </div>
        </div>
    );
}
