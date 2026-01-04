import React from "react";
import { Wand2, Layout, Share2, Shield, BarChart3, Globe } from "lucide-react";

function Features() {
    const features = [
        {
            icon: <Wand2 className="h-6 w-6 text-blue-400" />,
            title: "AI-Powered Generation",
            description:
                "Describe your form in plain English and let our advanced AI architect the perfect structure instantly.",
        },
        {
            icon: <Layout className="h-6 w-6 text-purple-400" />,
            title: "Smart Customization",
            description:
                "Intuitive drag-and-drop editor to refine your forms. Add, edit, or remove fields with zero coding required.",
        },
        {
            icon: <Share2 className="h-6 w-6 text-green-400" />,
            title: "Instant Sharing",
            description:
                "Get a unique link immediately. Share across email, social media, or embed directly on your website.",
        },
        {
            icon: <Shield className="h-6 w-6 text-amber-400" />,
            title: "Secure & Reliable",
            description:
                "Enterprise-grade security ensures your data is always protected and available when you need it.",
        },
        {
            icon: <BarChart3 className="h-6 w-6 text-pink-400" />,
            title: "Analytics Dashboard",
            description:
                "Track responses, completion rates, and user engagement with built-in powerful analytics tools.",
        },
        {
            icon: <Globe className="h-6 w-6 text-cyan-400" />,
            title: "Global Reach",
            description:
                "Create multi-language forms that adapt to your audience, ensuring maximum accessibility worldwide.",
        }
    ];

    return (
        <section id="features" className="bg-slate-950 text-white py-24 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[500px] w-[500px] rounded-full bg-blue-600/5 blur-[100px] animate-blob" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-[500px] w-[500px] rounded-full bg-purple-600/5 blur-[100px] animate-blob animation-delay-2000" />

            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-2xl text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl font-extrabold sm:text-4xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        Everything You Need
                    </h2>
                    <p className="mt-4 text-lg text-gray-400">
                        Powerful features designed to help you collect data faster and smarter.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`group relative rounded-2xl border border-gray-800 bg-gray-900/50 p-8 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 animate-fade-in-up`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                            <div className="relative z-10">
                                <div className="mb-4 inline-block rounded-xl bg-gray-800/80 p-3 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                                    {React.cloneElement(feature.icon as React.ReactElement, { className: "h-6 w-6 text-blue-400 group-hover:text-blue-300 transition-colors" })}
                                </div>
                                <h3 className="mt-2 text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="mt-3 text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;
