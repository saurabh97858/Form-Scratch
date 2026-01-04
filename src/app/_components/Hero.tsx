import React from "react";
import { Sparkles, Users, Zap, ArrowRight, ShieldCheck } from "lucide-react";

function Hero() {
    return (
        <section className="relative overflow-hidden bg-slate-950 text-white pt-24 pb-32">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[128px] animate-blob" />
                <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[128px] animate-blob animation-delay-2000" />
                <div className="absolute bottom-[-20%] left-[20%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[128px] animate-blob animation-delay-4000" />
            </div>

            <div className="relative z-10 mx-auto max-w-screen-xl px-4 lg:flex lg:h-screen lg:items-center">
                <div className="mx-auto max-w-4xl text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 mb-8 backdrop-blur-sm animate-fade-in-up">
                        <Sparkles className="h-4 w-4" />
                        <span>AI-Powered Form Generation is Here</span>
                    </div>

                    <h1 className="bg-gradient-to-br from-white via-white to-gray-400 bg-clip-text text-5xl font-extrabold text-transparent sm:text-7xl tracking-tight animate-fade-in-up delay-100">
                        Build Powerful Forms <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
                            In Seconds, Not Hours
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 leading-relaxed sm:text-xl animate-fade-in-up delay-200">
                        Stop wresting with complex form builders. Describe your needs, and let our AI
                        architect the perfect form for you instantly. effortless, smart, and beautiful.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-300">
                        <a
                            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-blue-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                            href="/dashboard?create=true"
                        >
                            Create Free Form
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>

                        <a
                            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-900/50 px-8 py-4 text-sm font-semibold text-gray-300 backdrop-blur-sm transition-all hover:bg-gray-800 hover:text-white hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-900"
                            href="#features"
                        >
                            See How It Works
                        </a>
                    </div>

                    {/* Trust Badges & Stats */}
                    <div className="mt-20 border-t border-gray-800/60 pt-12 animate-fade-in-up delay-500">
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-8">Trusted by developers & businesses</p>
                        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-4">
                            <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-900/30 border border-gray-800/50 backdrop-blur-sm hover:border-gray-700 transition-colors">
                                <span className="text-3xl font-bold text-white mb-1">10k+</span>
                                <span className="text-sm text-gray-400">Forms Created</span>
                            </div>
                            <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-900/30 border border-gray-800/50 backdrop-blur-sm hover:border-gray-700 transition-colors">
                                <span className="text-3xl font-bold text-white mb-1">5k+</span>
                                <span className="text-sm text-gray-400">Active Users</span>
                            </div>
                            <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-900/30 border border-gray-800/50 backdrop-blur-sm hover:border-gray-700 transition-colors">
                                <span className="text-3xl font-bold text-white mb-1">99.9%</span>
                                <span className="text-sm text-gray-400">Uptime</span>
                            </div>
                            <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-900/30 border border-gray-800/50 backdrop-blur-sm hover:border-gray-700 transition-colors">
                                <span className="text-3xl font-bold text-white mb-1">4.9/5</span>
                                <span className="text-sm text-gray-400">User Rating</span>
                            </div>
                        </div>

                        {/* Additional Trust Indicators */}
                        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-gray-400">
                            <span className="flex items-center gap-2">
                                <ShieldCheck className="h-5 w-5 text-emerald-500" />
                                No credit card required
                            </span>
                            <span className="flex items-center gap-2">
                                <Zap className="h-5 w-5 text-amber-500" />
                                Setup in seconds
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
