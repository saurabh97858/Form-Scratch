import React from "react";
import FormGenerator from "../form-generator";
import FormList from "./_components/FormList";

function Dashboard() {
    return (
        <div className="p-10">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-white drop-shadow-md">My Dashboard</h2>
                <div>
                    <FormGenerator />
                </div>
            </div>

            {/* list of Form */}
            <FormList />
        </div>
    );
}

export default Dashboard;
