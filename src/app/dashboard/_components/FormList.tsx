"use client";
import { useUser } from "@clerk/nextjs";
import React, { useCallback, useEffect, useState } from "react";
import FormListItem from "./FormListItem";
import { getUserForms } from "@/actions/form";

function FormList() {
    const { user } = useUser();
    const [formList, setFormList] = useState<any[]>([]);

    const getFormList = useCallback(async () => {
        if (!user) return; // Ensure user exists before making the query
        const result = await getUserForms(user.primaryEmailAddress?.emailAddress ?? "");
        setFormList(result);
        console.log("Form List:", result);
    }, [user]);

    useEffect(() => {
        getFormList();
    }, [getFormList]);

    return (
        <div className="mt-5 grid lg:grid-cols-4 md:grid-cols-3 md:gap-1 gap-5">
            {formList.map((form) => (
                <div key={form.id}> {/* Use a unique property from the form as the key */}
                    <FormListItem
                        jsonform={JSON.parse(form.jsonform)}
                        formRecord={form}
                        refreshData={getFormList}
                    />
                </div>
            ))}
        </div>
    );
}

export default FormList;
