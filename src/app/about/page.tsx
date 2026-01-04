import React from "react";
import { Target, Lightbulb, Users2, Zap } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="bg-gray-900 min-h-screen text-white">
            {/* Hero Section */}
            <div className="mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="text-4xl font-bold sm:text-6xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                        About Make Your Form
                    </h1>
                    <p className="mt-6 text-xl text-gray-300">
                        Empowering individuals and organizations to collect data smartly, efficiently, and beautifully.
                    </p>
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="bg-gray-800 py-16">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                        <div className="flex items-start gap-4">
                            <Target className="h-12 w-12 text-blue-500 flex-shrink-0" />
                            <div>
                                <h2 className="text-2xl font-bold">Our Mission</h2>
                                <p className="mt-4 text-gray-300 leading-relaxed">
                                    To revolutionize form creation by leveraging artificial intelligence, making it accessible to everyone
                                    regardless of technical expertise. We believe that creating forms should be as simple as describing
                                    what you need in plain English.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Lightbulb className="h-12 w-12 text-purple-500 flex-shrink-0" />
                            <div>
                                <h2 className="text-2xl font-bold">Our Vision</h2>
                                <p className="mt-4 text-gray-300 leading-relaxed">
                                    A world where data collection is intuitive, insightful, and instantly actionable. We envision Make Your Form
                                    as the go-to platform for businesses, educators, researchers, and creators who want to gather feedback,
                                    opinions, and information effortlessly.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Story */}
            <div className="py-16">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl">
                        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                        <div className="space-y-4 text-gray-300 leading-relaxed">
                            <p>
                                Make Your Form was born from a simple frustration: creating forms was tedious, time-consuming, and often
                                required technical skills that not everyone possessed. Our founders, experienced developers and UX designers,
                                saw an opportunity to change this.
                            </p>
                            <p>
                                By combining cutting-edge AI technology with user-centered design principles, we created a platform that
                                understands natural language and transforms simple descriptions into fully functional, beautifully designed
                                forms in seconds.
                            </p>
                            <p>
                                Since our launch, we&apos;ve helped thousands of users create millions of forms, saving countless hours and
                                enabling better data collection across industries. But we&apos;re just getting started.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values */}
            <div className="bg-gray-800 py-16">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <Zap className="h-10 w-10 text-yellow-500" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                            <p className="text-gray-400 text-sm">
                                Constantly pushing boundaries with AI-driven solutions
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <Users2 className="h-10 w-10 text-green-500" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">User-Centric</h3>
                            <p className="text-gray-400 text-sm">
                                Every feature designed with our users in mind
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <Target className="h-10 w-10 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                            <p className="text-gray-400 text-sm">
                                Committed to delivering the highest quality experience
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <Lightbulb className="h-10 w-10 text-purple-500" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Transparency</h3>
                            <p className="text-gray-400 text-sm">
                                Open, honest communication with our community
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="py-16">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                    <p className="text-gray-300 mb-8">
                        Join thousands of users who are already creating better forms with Make Your Form.
                    </p>
                    <a
                        href="/"
                        className="inline-flex items-center rounded-lg bg-blue-600 px-8 py-3 text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500"
                    >
                        Start Creating Forms
                    </a>
                </div>
            </div>
        </div>
    );
}
