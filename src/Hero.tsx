import React from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

export const Hero: React.FC = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-black text-white px-6 py-12">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Profile Photograph */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-blue-500/40 shadow-2xl bg-zinc-900">
                    <img
                        src="/surendar.png"
                        alt="Surendar SD"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Bio & Actions */}
                <div className="flex-1 text-center md:text-left space-y-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                        Hi, I'm <span className="text-blue-500">Surendar SD</span>
                    </h1>
                    <p className="text-lg text-zinc-400 max-w-xl">
                        Computer Science Engineering Student specializing in IoT, Cybersecurity, and UI/UX Design.
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center md:justify-start gap-4">
                        <a
                            href="https://github.com/surendar-sd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-blue-500 text-zinc-300 hover:text-white transition-all"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/surendarsd25"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-blue-500 text-zinc-300 hover:text-white transition-all"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="mailto:surendarsd25@gmail.com"
                            className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-blue-500 text-zinc-300 hover:text-white transition-all"
                        >
                            <Mail size={20} />
                        </a>
                    </div>

                    {/* Resume Download Button */}
                    <div className="pt-2">
                        <a
                            href="/Surendar_SD_Resume.pdf"
                            download="Surendar_SD_Resume.pdf"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all cursor-pointer"
                        >
                            <Download size={18} />
                            Download Resume
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};