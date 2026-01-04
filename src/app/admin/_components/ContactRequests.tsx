import React from "react";
import { MessageSquare, Clock, CheckCircle } from "lucide-react";

export default function ContactRequests() {
    // Mock data - in production, fetch from database
    const requests = [
        {
            id: 1,
            name: "Alice Cooper",
            email: "alice@example.com",
            subject: "Payment Issue",
            message: "I'm having trouble with payment processing...",
            status: "Pending",
            date: "2024-12-01",
        },
        {
            id: 2,
            name: "Bob Martin",
            email: "bob@example.com",
            subject: "Feature Request",
            message: "Would love to see dark mode support...",
            status: "Resolved",
            date: "2024-11-30",
        },
        {
            id: 3,
            name: "Carol White",
            email: "carol@example.com",
            subject: "Technical Support",
            message: "My forms aren't displaying correctly...",
            status: "Pending",
            date: "2024-11-29",
        },
    ];

    return (
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 shadow-2xl hover:shadow-yellow-500/10 transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Contact Requests</h2>
            </div>

            <div className="space-y-4">
                {requests.map((request) => (
                    <div
                        key={request.id}
                        className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300 group"
                    >
                        <div className="flex items-start justify-between mb-2">
                            <div>
                                <h3 className="font-semibold text-white group-hover:text-yellow-400 transition-colors">{request.name}</h3>
                                <p className="text-sm text-gray-400">{request.email}</p>
                            </div>
                            <span
                                className={`text-xs px-3 py-1 rounded-full flex items-center gap-1 font-semibold border ${request.status === "Pending"
                                        ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/30"
                                        : "bg-green-500/10 text-green-400 border-green-500/30"
                                    }`}
                            >
                                {request.status === "Pending" ? (
                                    <Clock className="h-3 w-3" />
                                ) : (
                                    <CheckCircle className="h-3 w-3" />
                                )}
                                {request.status}
                            </span>
                        </div>
                        <p className="text-sm font-semibold text-gray-200 mb-2">{request.subject}</p>
                        <p className="text-sm text-gray-400 line-clamp-2">{request.message}</p>
                        <p className="text-xs text-gray-500 mt-2">{request.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
