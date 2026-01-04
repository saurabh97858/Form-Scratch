"use client"
import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { generateForm } from "@/config/generateForm";
import { useFormState, useFormStatus } from "react-dom";
import { useRouter, useSearchParams } from "next/navigation"; // Import useRouter for redirection

type Props = {};

const initialState: {
    message: string;
    formId?: number; // formId should be a number or undefined
} = {
    message: "",
};

export function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            disabled={pending}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-6 text-lg rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all"
        >
            {pending ? (
                <span className="flex items-center gap-2">
                    <span className="animate-spin">✨</span> Generating Magic...
                </span>
            ) : "✨ Generate My Form"}
        </Button>
    );
}

const FormGenerator = (props: Props) => {
    const [state, formAction] = useFormState(generateForm, initialState);
    const [open, setOpen] = useState(false);
    const router = useRouter(); // Hook for client-side navigation
    const searchParams = useSearchParams();

    const onFormCreate = () => {
        setOpen(true);
    };

    useEffect(() => {
        if (state.message === "Form created successfully" && state.formId) {
            router.push(`/edit-form/${state.formId}`); // Redirect to the dynamic form page
        } else if (state.message && state.message !== "Form created successfully") {
            toast.error(state.message);
        }
    }, [state.message, state.formId, router]); // Check directly for formId

    useEffect(() => {
        if (searchParams.get('create') === 'true') {
            setOpen(true);
        }
    }, [searchParams]);

    // Cleanup URL when closing, so refreshing doesn't re-open it
    const handleOpenChange = (isOpen: boolean) => {
        setOpen(isOpen);
        if (!isOpen) {
            const url = new URL(window.location.href);
            url.searchParams.delete('create');
            window.history.replaceState({}, '', url);
        }
    }

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <Button
                onClick={onFormCreate}
                className="bg-gradient-to-r from-primary to-purple-600 text-white hover:from-primary/90 hover:to-purple-600/90 shadow-md transition-all hover:scale-105"
            >
                + Create New Form
            </Button>
            <DialogContent className="sm:max-w-3xl bg-white/95 backdrop-blur-md border-0 shadow-2xl p-8 rounded-2xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

                <DialogHeader className="mb-4">
                    <DialogTitle className="text-3xl font-extrabold text-gray-900 tracking-tight">
                        Create Your AI Form
                        <span className="ml-2 text-2xl">✨</span>
                    </DialogTitle>
                    <DialogDescription className="text-lg text-gray-500">
                        Describe your dream form in plain English, and watch our AI build it instantly.
                    </DialogDescription>
                </DialogHeader>

                <form action={formAction} className="space-y-6">
                    <div className="grid gap-4">
                        <Textarea
                            id="description"
                            name="description"
                            required
                            placeholder="e.g. A registration form for a cricket tournament with team details, captain&apos;s name, and payment upload..."
                            className="min-h-[200px] text-lg p-6 rounded-xl border-2 border-gray-100 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all resize-none shadow-inner bg-gray-50/50 text-gray-900 placeholder:text-gray-400"
                        />
                    </div>

                    <DialogFooter className="flex items-center gap-4 pt-4 border-t border-gray-100">
                        <Button
                            variant="ghost"
                            className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
                        >
                            Create manually
                        </Button>
                        <SubmitButton />
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default FormGenerator;
