import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="bg-gray-900 min-h-screen">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg text-center mb-16">
                    <h1 className="text-4xl font-bold text-white sm:text-5xl">Get in Touch</h1>
                    <p className="mt-4 text-gray-300">
                        Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
                    </p>
                </div>
                {/* No changes made to this file as only email address contained the string and replacing it with 'Make Your Form' would create an invalid email address. */}

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-16">
                    {/* Contact Info */}
                    <div className="lg:col-span-1">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <Mail className="h-6 w-6 text-blue-500 mt-1" />
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Email</h3>
                                    <p className="mt-1 text-gray-300">support@formscratch.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="h-6 w-6 text-blue-500 mt-1" />
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Phone</h3>
                                    <p className="mt-1 text-gray-300">+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <MapPin className="h-6 w-6 text-blue-500 mt-1" />
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Office</h3>
                                    <p className="mt-1 text-gray-300">
                                        123 Innovation Street<br />
                                        San Francisco, CA 94102
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2 rounded-lg bg-gray-800 p-8 shadow-lg">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="mt-2 w-full rounded-lg border-gray-700 bg-gray-900 p-3 text-sm text-white focus:border-blue-500 focus:ring-blue-500"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="mt-2 w-full rounded-lg border-gray-700 bg-gray-900 p-3 text-sm text-white focus:border-blue-500 focus:ring-blue-500"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-200">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="mt-2 w-full rounded-lg border-gray-700 bg-gray-900 p-3 text-sm text-white focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="How can we help?"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-200">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={6}
                                    className="mt-2 w-full rounded-lg border-gray-700 bg-gray-900 p-3 text-sm text-white focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="Tell us more about your inquiry..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
