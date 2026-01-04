"use client";
import { getUserForms } from "@/actions/form";
import { useUser } from "@clerk/nextjs";
import React, { useCallback, useEffect, useState } from "react";
import FormListResponse from "./_component/FormListResponse";

function Page() {
    const { user } = useUser();
    const [formList, setFormList] = useState<any[]>([]);

    const getFormList = useCallback(async () => {
        if (!user?.primaryEmailAddress?.emailAddress) return;

        try {
            const result = await getUserForms(user.primaryEmailAddress.emailAddress);
            setFormList(result);
        } catch (error) {
            console.error("Error fetching form list:", error);
        }
    }, [user]);

    useEffect(() => {
        getFormList();
    }, [getFormList]);

    return (
        <div className="p-10 text-white">
            <h2 className="text-3xl font-bold mb-8 drop-shadow-md">
                Responses
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {formList.map((form) => (
                    <FormListResponse
                        key={form.id}
                        formRecord={form}
                        jsonForm={JSON.parse(form.jsonform)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Page;
