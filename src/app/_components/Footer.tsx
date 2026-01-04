import React from "react";
import { Github, Twitter, Linkedin, Heart } from "lucide-react";

function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-gray-800/60">
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    <div className="flex flex-col items-center md:items-start gap-2">
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
                                <span className="text-white font-bold text-xl">F</span>
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                Make Your Form
                            </span>
                        </div>
                        <p className="text-sm text-gray-400 max-w-xs text-center md:text-left">
                            Building the future of form generation with artificial intelligence.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-4">
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="p-2 rounded-full bg-gray-900 text-gray-400 transition hover:bg-gray-800 hover:text-white"
                                aria-label="GitHub"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="p-2 rounded-full bg-gray-900 text-gray-400 transition hover:bg-gray-800 hover:text-blue-400"
                                aria-label="Twitter"
                            >
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="p-2 rounded-full bg-gray-900 text-gray-400 transition hover:bg-gray-800 hover:text-blue-600"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>

                        <div className="flex flex-col items-center md:items-end gap-1">
                            <p className="text-sm text-gray-500">
                                © {new Date().getFullYear()} Make Your Form. All rights reserved.
                            </p>
                            <p className="text-xs text-gray-600 flex items-center gap-1">
                                Made with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> by developers, for developers
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
