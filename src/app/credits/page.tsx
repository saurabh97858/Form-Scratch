"use client";

import React, { useState } from "react";
import { Check, Info, Sparkles, Zap, Shield, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CheckoutModal } from "./_components/CheckoutModal";

export default function PricingPage() {
    const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: string; period: string } | null>(null);
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

    const handleBuyNow = (plan: { name: string; price: string; period: string }) => {
        setSelectedPlan(plan);
        setIsCheckoutOpen(true);
    };

    const plans = [
        {
            name: "Quarterly",
            description: "Get started with short-term flexibility.",
            price: "₹99",
            period: "/ 3 months",
            features: [
                "Unlimited AI Generated Forms",
                "1,000 Responses / Month",
                "Basic Analytics",
                "Email Support",
            ],
            cta: "Buy Now",
            popular: false,
            gradient: "from-blue-400/20 to-blue-600/20",
            border: "border-blue-500/30",
            icon: <Zap className="w-6 h-6 text-blue-400" />,
        },
        {
            name: "Economy",
            description: "Perfect balance of time and value.",
            price: "₹179",
            period: "/ 7 months",
            features: [
                "Everything in Quarterly",
                "5,000 Responses / Month",
                "Advanced Analytics",
                "Priority Email Support",
                "Remove Branding",
            ],
            cta: "Buy Now",
            popular: false,
            gradient: "from-emerald-400/20 to-teal-600/20",
            border: "border-emerald-500/30",
            icon: <Shield className="w-6 h-6 text-emerald-400" />,
        },
        {
            name: "Yearly Pro",
            description: "Maximum savings for serious creators.",
            price: "₹239",
            period: "/ 1 year",
            features: [
                "Everything in Economy",
                "Unlimited Responses",
                "Dedicated Success Manager",
                "Custom Themes & CSS",
                "Early Access to Features",
                "Priority 24/7 Support",
            ],
            cta: "Buy Now",
            popular: true,
            gradient: "from-purple-400/20 to-pink-600/20",
            border: "border-purple-500/50",
            icon: <Crown className="w-6 h-6 text-purple-400" />,
        },
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-white py-24 relative overflow-hidden">
            <CheckoutModal
                open={isCheckoutOpen}
                onOpenChange={setIsCheckoutOpen}
                plan={selectedPlan}
            />
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-3xl text-center mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-400 mb-6 backdrop-blur-sm">
                        <Sparkles className="h-4 w-4" />
                        <span>Simple, Transparent Pricing</span>
                    </div>
                    <h1 className="text-4xl font-extrabold sm:text-6xl bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-6">
                        Choose the Perfect Plan
                    </h1>
                    <p className="text-xl text-gray-400">
                        Unlock the full potential of AI-powered form generation with our flexible pricing plans.
                        Scale as you grow.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-2xl border ${plan.border} bg-gray-900/40 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10 group animate-fade-in-up`}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg shadow-purple-500/30">
                                    Most Popular
                                </div>
                            )}

                            {/* Background Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none`} />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 rounded-xl bg-gray-800/50 border border-gray-700/50 group-hover:bg-gray-700/50 transition-colors">
                                        {plan.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                                        <p className="text-sm text-gray-400">{plan.description}</p>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                                    <span className="text-gray-400 ml-1">{plan.period}</span>
                                </div>

                                <div className="space-y-4 mb-8 flex-1">
                                    {plan.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-start gap-3 text-gray-300">
                                            <div className="mt-1 min-w-[18px]">
                                                <Check className="h-4.5 w-4.5 text-blue-500" />
                                            </div>
                                            <span className="text-sm leading-relaxed">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button
                                    onClick={() => handleBuyNow(plan)}
                                    className={`w-full py-6 text-lg font-semibold rounded-xl transition-all duration-300 ${plan.popular
                                        ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                                        : "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 hover:border-gray-600"
                                        }`}
                                >
                                    {plan.cta}
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center animate-fade-in-up opacity-0" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
                    <div className="inline-flex items-center gap-2 text-gray-400 bg-gray-900/50 px-6 py-3 rounded-full border border-gray-800 backdrop-blur-sm">
                        <Info className="h-5 w-5 text-blue-400" />
                        <span>All plans include 24/7 access to our community & basic support.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
