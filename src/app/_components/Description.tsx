import React from "react";
import { ArrowRight, CheckCircle2, Code2, Sparkles } from "lucide-react";

function Description() {
    return (
        <section className="bg-slate-950 text-white py-24 border-t border-gray-800/50">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">

                    {/* Visual Side */}
                    <div className="relative order-last lg:order-first">
                        <div className="absolute inset-0 bg-blue-600/20 blur-[64px] rounded-full pointer-events-none" />

                        <div className="relative rounded-2xl border border-gray-800 bg-gray-900/80 p-6 backdrop-blur-xl shadow-2xl">
                            <div className="flex items-center gap-2 mb-4 border-b border-gray-800 pb-4">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <span className="ml-2 text-xs text-gray-500 font-mono">prompt_to_form.json</span>
                            </div>

                            <div className="space-y-3 font-mono text-sm">
                                <div className="flex gap-2">
                                    <span className="text-purple-400">const</span>
                                    <span className="text-blue-400">userPrompt</span>
                                    <span className="text-gray-400">=</span>
                                    <span className="text-green-400">"Create a feedback form for my coffee shop with rating and comments"</span>
                                </div>

                                <div className="flex gap-2">
                                    <span className="text-purple-400">const</span>
                                    <span className="text-blue-400">aiResponse</span>
                                    <span className="text-gray-400">=</span>
                                    <span className="text-yellow-400">await</span>
                                    <span className="text-blue-300">generateForm</span>
                                    <span className="text-gray-400">(userPrompt);</span>
                                </div>

                                <div className="pl-4 border-l-2 border-gray-800 mt-4">
                                    <p className="text-gray-500">// AI Architecting Form Structure...</p>
                                    <p className="text-gray-500">// analyzing requirements...</p>
                                    <p className="text-emerald-500 flex items-center gap-2 mt-2">
                                        <Sparkles className="w-3 h-3" />
                                        Form Generated Successfully!
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-xl shadow-lg border border-white/10 hidden sm:block">
                            <div className="flex items-center gap-3">
                                <div className="bg-white/20 p-2 rounded-lg">
                                    <Code2 className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-blue-100">Code Export</p>
                                    <p className="font-bold">Ready to deploy</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="lg:py-12">
                        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-900/20 px-3 py-1 text-xs font-medium text-blue-400 mb-6">
                            <Sparkles className="h-3 w-3" />
                            <span>Intelligent Workflow</span>
                        </div>

                        <h2 className="text-4xl font-extrabold sm:text-5xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
                            Revolutionize Your <br />
                            Data Collection
                        </h2>

                        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                            Make Your Form isn&apos;t just another form builder. It&apos;s an intelligent assistant that specifically understands your context.
                            Whether you need a simple contact form or a complex multi-step survey, our AI engine crafts the perfect structure
                            in seconds, saving you valuable time and effort.
                        </p>

                        <div className="space-y-5 mb-10">
                            {[
                                "Natural Language Processing Engine",
                                "Real-time Preview & Instant Editing",
                                "Seamless Integration with your Workflow",
                                "Export to React, HTML, or JSON"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center">
                                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                                    </div>
                                    <span className="text-gray-300">{item}</span>
                                </div>
                            ))}
                        </div>

                        <a
                            href="/dashboard"
                            className="inline-flex items-center rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-gray-900 transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-xl hover:shadow-white/10 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
                        >
                            Start Building Now
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Description;
