import { Button } from "@/components/ui/button";
import { Edit, Share, Trash } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useUser } from "@clerk/nextjs";
import { RWebShare } from "react-web-share";
import { toast } from "sonner";
import { deleteUserForm } from "@/actions/form";
import { json } from "stream/consumers";


function FormListItem({ formRecord, jsonform, refreshData }: any) {
    const { user } = useUser();

    const onDeleteForm = async () => {
        try {
            const result = await deleteUserForm(formRecord.id, user?.primaryEmailAddress?.emailAddress ?? "");
            if (result) {
                toast.success("Form deleted successfully");
                refreshData();
            }
        } catch (error) {
            console.error("Delete Error:", error);
            toast.error("Failed to delete form");
            alert("Delete failed: " + (error as Error).message);
        }
    };
    return (
        <div className="group relative border border-white/20 bg-white/10 backdrop-blur-md shadow-lg rounded-xl p-5 my-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-primary/50 text-white overflow-hidden">

            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />

            <div className="flex justify-between items-start">
                <div className="bg-primary/20 p-2 rounded-lg">
                    <Edit className="h-5 w-5 text-primary" />
                </div>

                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Trash className="h-5 w-5 text-white/50 hover:text-red-500 cursor-pointer transition-colors" />
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>
                                Are you absolutely sure?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will
                                permanently delete your account and remove your
                                data from our servers.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => onDeleteForm()}>
                                Continue
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>

            <h2 className="text-xl font-bold mt-4 mb-2 truncate text-white">
                {jsonform.formTitle}
            </h2>
            <h2 className="text-sm text-gray-300 mb-6 line-clamp-2 min-h-[40px]">
                {jsonform.formHeading}
            </h2>

            <div className="w-full bg-white/10 h-[1px] mb-4" />

            <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
                <RWebShare
                    data={{
                        text:
                            jsonform?.formHeading +
                            ", Build Your Form in Seconds",
                        url:
                            process.env.NEXT_PUBLIC_BASE_URL +
                            "/aiform/" +
                            formRecord.id,
                        title: jsonform?.formTitle,
                    }}
                    onClick={() => console.log("shared successfully!")}
                >
                    <Button
                        variant="ghost"
                        size="sm"
                        className="flex gap-2 w-full sm:w-auto text-white hover:bg-white/20 hover:text-white border border-white/20"
                    >
                        <Share className="h-4 w-4" /> Share
                    </Button>
                </RWebShare>

                <Link href={"/edit-form/" + formRecord.id} className="w-full sm:w-auto">
                    <Button size="sm" className="flex gap-2 w-full bg-primary hover:bg-primary/80 text-white shadow-md">
                        <Edit className="h-4 w-4" /> Edit
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default FormListItem;
