import React from "react";
import { TrendingUp, Activity } from "lucide-react";

export default function Analytics() {
    // Mock data - in production, fetch from database
    const analytics = {
        totalForms: 8945,
        totalResponses: 45623,
        conversionRate: 87.5,
        activeUsers: 1234,
    };

    const activityData = [
        { label: "Form Creation", value: 78, color: "from-blue-500 to-cyan-500" },
        { label: "Form Responses", value: 92, color: "from-green-500 to-emerald-500" },
        { label: "User Sign-ups", value: 65, color: "from-purple-500 to-pink-500" },
        { label: "Contact Requests", value: 48, color: "from-orange-500 to-red-500" },
    ];

    return (
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 shadow-2xl hover:shadow-yellow-500/10 transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg">
                    <Activity className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Platform Analytics</h2>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-lg p-4 text-center hover:border-blue-400/50 transition-all group">
                    <TrendingUp className="h-6 w-6 text-blue-500 mx-auto mb-2 group-hover:text-blue-400 transition-colors" />
                    <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{analytics.totalForms.toLocaleString()}</p>
                    <p className="text-xs text-gray-400 mt-1">Total Forms</p>
                </div>
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg p-4 text-center hover:border-green-400/50 transition-all group">
                    <TrendingUp className="h-6 w-6 text-green-500 mx-auto mb-2 group-hover:text-green-400 transition-colors" />
                    <p className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">{analytics.totalResponses.toLocaleString()}</p>
                    <p className="text-xs text-gray-400 mt-1">Total Responses</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-4 text-center hover:border-purple-400/50 transition-all group">
                    <TrendingUp className="h-6 w-6 text-purple-500 mx-auto mb-2 group-hover:text-purple-400 transition-colors" />
                    <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{analytics.conversionRate}%</p>
                    <p className="text-xs text-gray-400 mt-1">Conversion Rate</p>
                </div>
                <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-lg p-4 text-center hover:border-orange-400/50 transition-all group">
                    <TrendingUp className="h-6 w-6 text-orange-500 mx-auto mb-2 group-hover:text-orange-400 transition-colors" />
                    <p className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">{analytics.activeUsers.toLocaleString()}</p>
                    <p className="text-xs text-gray-400 mt-1">Active Users</p>
                </div>
            </div>

            <div className="space-y-3">
                <h3 className="text-sm font-semibold text-gray-200 mb-3 flex items-center gap-2">
                    <Activity className="h-4 w-4 text-yellow-500" />
                    Activity Overview
                </h3>
                {activityData.map((item, index) => (
                    <div key={index} className="group">
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-sm text-gray-400 group-hover:text-yellow-400 transition-colors">{item.label}</span>
                            <span className="text-sm font-semibold text-white group-hover:text-yellow-400 transition-colors">{item.value}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                            <div
                                className={`bg-gradient-to-r ${item.color} h-2 rounded-full transition-all duration-500 hover:opacity-80`}
                                style={{ width: `${item.value}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
