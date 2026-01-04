import React from "react";
import { DollarSign, TrendingUp } from "lucide-react";

export default function IncomeStats() {
    // Mock data - in production, fetch from database
    const monthlyIncome = [
        { month: "Jan", amount: 5420 },
        { month: "Feb", amount: 6280 },
        { month: "Mar", amount: 7150 },
        { month: "Apr", amount: 8240 },
        { month: "May", amount: 9630 },
        { month: "Jun", amount: 11450 },
    ];

    const totalIncome = monthlyIncome.reduce((sum, item) => sum + item.amount, 0);
    const avgIncome = (totalIncome / monthlyIncome.length).toFixed(0);

    return (
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 shadow-2xl hover:shadow-yellow-500/10 transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg">
                    <DollarSign className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Income Statistics</h2>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg p-4 hover:border-green-400/50 transition-colors">
                    <p className="text-sm text-gray-300 mb-1">Total Income</p>
                    <p className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">${totalIncome.toLocaleString()}</p>
                </div>
                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-lg p-4 hover:border-blue-400/50 transition-colors">
                    <p className="text-sm text-gray-300 mb-1">Average/Month</p>
                    <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">${avgIncome}</p>
                </div>
            </div>

            <div className="space-y-3">
                <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="h-5 w-5 text-yellow-500" />
                    <h3 className="text-sm font-semibold text-gray-200">Monthly Breakdown</h3>
                </div>
                {monthlyIncome.map((item, index) => (
                    <div key={index} className="flex items-center justify-between group">
                        <span className="text-sm text-gray-400 group-hover:text-yellow-400 transition-colors w-12">{item.month}</span>
                        <div className="flex items-center gap-3 flex-1 ml-4">
                            <div className="flex-1 bg-gray-700 rounded-full h-2 overflow-hidden">
                                <div
                                    className="bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 h-2 rounded-full transition-all duration-500 hover:from-yellow-300 hover:via-orange-300 hover:to-orange-400"
                                    style={{ width: `${(item.amount / 12000) * 100}%` }}
                                ></div>
                            </div>
                            <span className="text-sm font-semibold text-white w-20 text-right group-hover:text-yellow-400 transition-colors">
                                ${item.amount.toLocaleString()}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
