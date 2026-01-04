"use client";

import { Button } from "@/components/ui/button";
import { getFormById, updateForm, updateFormMetadata } from "@/actions/form";
import { useUser } from "@clerk/nextjs";
import { ArrowLeft, Share, SquareArrowOutUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, useCallback } from "react";
import FormUi from "../_components/FormUi";
import { toast } from "sonner";
import Controller from "../_components/Controller";
import Link from "next/link";
import { RWebShare } from "react-web-share";

interface EditFormProps {
    params: {
        formId: string | undefined;
    };
}

interface Field {
    label: string;
    placeholder: string;
    fieldName: string;
    fieldTitle: string;
    fieldType: string;
}

interface JsonForm {
    formTitle: string;
    formHeading: string;
    fields: Field[];
}

interface Record {
    id: number;
    jsonform: string | null;
    theme: string;
    background: string | null;
    style: string | null;
    createdBy: string;
    createdAt: string;
}

const EditForm: React.FC<EditFormProps> = ({ params }) => {
    const { user } = useUser();
    const [jsonForm, setJsonForm] = useState<JsonForm>({
        formTitle: "",
        formHeading: "",
        fields: [],
    });
    const router = useRouter();
    const [updateTrigger, setUpdateTrigger] = useState<number | undefined>(
        undefined
    );
    const [record, setRecord] = useState<Record | null>(null);
    const [selectedTheme, setSelectedTheme] = useState("light");
    const [selectedBackground, setSelectedBackground] = useState<string>("");

    // Moved to Server Action usage
    const fetchFormData = useCallback(async () => {
        try {
            // Use Server Action
            const result = await getFormById(parseInt(params.formId!));

            setRecord(result as unknown as Record); // Type cast for safety
            setJsonForm(
                result?.jsonform
                    ? JSON.parse(result.jsonform)
                    : { formTitle: "", formHeading: "", fields: [] }
            );
            setSelectedBackground(result?.background ?? "");
            setSelectedTheme(result?.theme ?? "light");

        } catch (error) {
            console.error("Error fetching form data:", error);
        }
    }, [params.formId]); // Removed user dependency as action handles verification if needed

    useEffect(() => {
        if (user) fetchFormData();
    }, [user, fetchFormData]);

    const updateJsonFormDb = useCallback(async () => {
        if (!record) return;
        try {
            // Use Server Action
            await updateForm(record.id, JSON.stringify(jsonForm));
            toast("Form Updated Successfully");
        } catch (error) {
            console.error("Error updating form data:", error);
            toast("Failed to update form");
        }
    }, [jsonForm, record]);

    useEffect(() => {
        if (updateTrigger) {
            setJsonForm((prev) => ({ ...prev })); // Functional update to avoid direct dependency
            updateJsonFormDb();
        }
    }, [updateTrigger, updateJsonFormDb]);

    const onFieldUpdate = (value: any, index: any) => {
        setJsonForm((prev) => {
            const updatedFields = [...prev.fields];
            updatedFields[index].label = value.label;
            updatedFields[index].placeholder = value.placeholder;
            return { ...prev, fields: updatedFields };
        });
        setUpdateTrigger(Date.now());
    };

    const deleteField = (indexToRemove: number) => {
        setJsonForm((prev) => ({
            ...prev,
            fields: prev.fields.filter((_, index) => index !== indexToRemove),
        }));
        setUpdateTrigger(Date.now());
    };

    const updateControllerFields = async (
        value: string | boolean,
        columnName: string
    ) => {
        const themeToSave = columnName === "theme" && !value ? "light" : value;

        try {
            // Use Server Action
            await updateFormMetadata(record?.id ?? 0, {
                [columnName]: themeToSave
            });

            toast("Form Updated Successfully");
        } catch (error) {
            console.error("Error updating controller fields:", error);
            toast("Failed to update settings");
        }
    };

    return (
        <div
            className="p-10 min-h-screen bg-cover bg-center bg-fixed"
            style={{
                backgroundImage: "url('/dashboard-bg.png')",
                backgroundAttachment: "fixed"
            }}
        >
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/50 z-0 fixed pointer-events-none" />

            <div className="relative z-10 text-white">
                <div className="flex justify-between items-center">
                    <h2
                        className="flex gap-2 items-center my-5 cursor-pointer hover:font-bold transition-all"
                        onClick={() => router.back()}
                    >
                        <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm">
                            <ArrowLeft className="h-4 w-4 mr-2" /> Back
                        </Button>
                    </h2>
                    <div className="flex gap-2">
                        <Link href={`/aiform/` + record?.id} target="_blank">
                            <Button className="flex gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg shadow-purple-500/30 border-0">
                                <SquareArrowOutUpRight className="h-5 w-5 " /> Live Preview
                            </Button>
                        </Link>

                        <RWebShare
                            data={{
                                text: jsonForm?.formHeading + ", Build Your Form in Seconds",
                                url: process.env.NEXT_PUBLIC_BASE_URL + "/aiform/" + record?.id,
                                title: jsonForm?.formTitle,
                            }}
                            onClick={() => console.log("shared successfully!")}
                        >
                            <Button
                                variant="outline"
                                size="sm"
                                className="flex gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm"
                            >
                                <Share className="h-5 w-5" /> Share
                            </Button>
                        </RWebShare>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-2">
                    <div className="p-5 border border-white/20 rounded-xl shadow-xl bg-black/20 backdrop-blur-md">
                        <Controller
                            selectedTheme={(value: any) => {
                                updateControllerFields(value, "theme");
                                setSelectedTheme(value);
                            }}
                            selectedBackground={(value) => {
                                updateControllerFields(value, "background");
                                setSelectedBackground(value);
                            }}
                            setSignInEnable={(value: boolean) => {
                                updateControllerFields(value, "enabelSignIn");
                            }}
                        />
                    </div>
                    <div
                        className="col-span-2 border border-white/20 rounded-xl p-5 flex items-center justify-center bg-white/5 backdrop-blur-sm shadow-xl min-h-[500px]"
                        style={{
                            backgroundImage: selectedBackground,
                        }}
                    >
                        <FormUi
                            formId={parseInt(params.formId!)}
                            jsonForm={jsonForm}
                            selectedTheme={selectedTheme}
                            onFieldUpdate={onFieldUpdate}
                            deleteField={(index) => deleteField(index)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditForm;
