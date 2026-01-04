"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Lock } from "lucide-react";
import { processPayment } from "@/actions/payment";
import { toast } from "sonner"; // Assuming sonner is set up in layout

interface CheckoutModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    plan: {
        name: string;
        price: string;
        period: string;
    } | null;
}

export function CheckoutModal({ open, onOpenChange, plan }: CheckoutModalProps) {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        upi: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        if (!plan) return;

        try {
            const result = await processPayment({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                amount: plan.price,
                plan: plan.name,
                duration: plan.period.replace("/ ", "")
            });

            if (result.success) {
                toast.success("Payment Successful! Notifications sent.");
                onOpenChange(false);
            } else {
                toast.error("Payment failed. Please try again.");
            }

        } catch (error) {
            console.error("Payment error:", error);
            toast.error("An unexpected error occurred.");
        } finally {
            setLoading(false);
        }
    };

    if (!plan) return null;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px] bg-slate-900 border-slate-800 text-white">
                <DialogHeader>
                    <DialogTitle className="text-xl font-bold flex items-center justify-between">
                        <span>Checkout</span>
                        <span className="text-blue-400">{plan.price}</span>
                    </DialogTitle>
                    <DialogDescription className="text-gray-400">
                        You are purchasing the <span className="font-semibold text-white">{plan.name}</span> plan.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name" className="text-gray-300">Full Name</Label>
                        <Input id="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className="bg-slate-800 border-slate-700 text-white placeholder:text-gray-500" />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="email" className="text-gray-300">Email Address</Label>
                        <Input id="email" type="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" className="bg-slate-800 border-slate-700 text-white placeholder:text-gray-500" />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="phone" className="text-gray-300">Phone Number</Label>
                        <Input id="phone" type="tel" value={formData.phone} onChange={handleChange} required placeholder="+91 98765 43210" className="bg-slate-800 border-slate-700 text-white placeholder:text-gray-500" />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="address" className="text-gray-300">Billing Address</Label>
                        <Input id="address" value={formData.address} onChange={handleChange} required placeholder="123 Main St, City, Country" className="bg-slate-800 border-slate-700 text-white placeholder:text-gray-500" />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="upi" className="text-gray-300">UPI ID</Label>
                        <div className="relative">
                            <Input id="upi" value={formData.upi} onChange={handleChange} required placeholder="username@upi" className="bg-slate-800 border-slate-700 text-white placeholder:text-gray-500 pl-10" />
                            <div className="absolute left-3 top-2.5 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-green-400 mt-2 bg-green-500/10 p-2 rounded border border-green-500/20">
                        <Lock className="w-3 h-3" />
                        <span>Payments are 100% Secure & Encrypted</span>
                    </div>

                    <DialogFooter className="mt-4">
                        <Button type="submit" disabled={loading} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-6">
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Processing...
                                </>
                            ) : (
                                `Pay ${plan.price}`
                            )}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
