import React from "react";
import { Users } from "lucide-react";

export default function UserList() {
    // Mock data - in production, fetch from database
    const users = [
        { id: 1, name: "John Doe", email: "john@example.com", joinedDate: "2024-01-15", status: "Active" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", joinedDate: "2024-02-20", status: "Active" },
        { id: 3, name: "Mike Johnson", email: "mike@example.com", joinedDate: "2024-03-10", status: "Inactive" },
        { id: 4, name: "Sarah Williams", email: "sarah@example.com", joinedDate: "2024-04-05", status: "Active" },
    ];

    return (
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 shadow-2xl hover:shadow-yellow-500/10 transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                    <Users className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">User List</h2>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-gray-700">
                            <th className="text-left py-3 px-2 text-sm font-semibold text-gray-300">Name</th>
                            <th className="text-left py-3 px-2 text-sm font-semibold text-gray-300">Email</th>
                            <th className="text-left py-3 px-2 text-sm font-semibold text-gray-300">Joined</th>
                            <th className="text-left py-3 px-2 text-sm font-semibold text-gray-300">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="border-b border-gray-700/50 hover:bg-gradient-to-r hover:from-yellow-500/5 hover:to-orange-500/5 transition-all duration-300 group">
                                <td className="py-3 px-2 text-sm font-medium group-hover:text-yellow-400 transition-colors">{user.name}</td>
                                <td className="py-3 px-2 text-sm text-gray-400">{user.email}</td>
                                <td className="py-3 px-2 text-sm text-gray-400">{user.joinedDate}</td>
                                <td className="py-3 px-2">
                                    <span className={`text-xs px-3 py-1 rounded-full font-semibold ${user.status === "Active"
                                            ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/30"
                                            : "bg-gray-700/50 text-gray-400 border border-gray-600"
                                        }`}>
                                        {user.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
