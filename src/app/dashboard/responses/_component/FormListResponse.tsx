"use client";
import { Button } from "@/components/ui/button";
import { getUserForms, getFormResponses } from "@/actions/form";
import * as XLSX from "xlsx";
import React, { useState } from "react";
import { Loader2, Download } from "lucide-react";

function FormListResponse({ jsonForm, formRecord }: any) {
    const [loading, setIsLoading] = useState(false);

    const exportData = async () => {
        let data: any[] = [];
        setIsLoading(true);
        const result = await getFormResponses(formRecord.id);

        console.log(result);

        if (result) {
            result.forEach((res) => {
                const jsonItem = JSON.parse(res.jsonresponse);
                data.push(jsonItem);
            })
            setIsLoading(false);
        }
        console.log(data);
        exportToExcel(data);

    };

    // convert json to excel
    const exportToExcel = (data: any[]) => {
        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
        XLSX.writeFile(wb, jsonForm?.formTitle + ".xlsx");
    }

    return (
        <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group flex flex-col justify-between h-full">
            <div>
                <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-bold text-white mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                        {jsonForm?.formTitle}
                    </h2>
                    <div className="bg-primary/20 p-2 rounded-lg text-primary">
                        <Loader2 className="h-5 w-5 animate-spin-slow" />
                    </div>
                </div>

                <h2 className="text-sm text-gray-300 mb-6 line-clamp-3">
                    {jsonForm?.formHeading}
                </h2>

                <div className="w-full bg-white/10 h-[1px] mb-4" />
            </div>

            <Button
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-md hover:shadow-purple-500/25 border-0"
                onClick={() => exportData()}
                disabled={loading}
            >
                {loading ? <Loader2 className="animate-spin mr-2" /> : <Download className="mr-2 h-4 w-4" />}
                Export Responses
            </Button>
        </div>
    );
}

export default FormListResponse;
