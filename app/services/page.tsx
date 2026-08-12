"use client";

import { motion } from "framer-motion";
import { Droplet, ShieldAlert, Home, ArrowUpRight } from "lucide-react";

const SERVICES = [
    {
        number: "01",
        title: "Roof Leak Repairs",
        description: "We diagnose and repair roof leaks quickly to prevent water damage and protect your home from further issues.",

        image: "https://i.ibb.co.com/bjm1dBR9/image.png",
        color: "from-[#3b82f6] to-[#1d4ed8]",
        border: "border-[#3b82f6]/30",
    },
    {
        number: "02",
        title: "Rotted Plywood Repairs",
        description: "We remove damaged shingles and replace rotted plywood to restore the strength and integrity of your roof structure.",

        image: "https://i.ibb.co.com/twcQMYCk/image.png",
        color: "from-[#60a5fa] to-[#2563eb]",
        border: "border-[#60a5fa]/30",
    },
    {
        number: "03",
        title: "Full Roof Replacement",
        description: "Complete roof replacements using quality materials for long-lasting protection, improved curb appeal, and peace of mind.",
        image: "https://i.ibb.co.com/whLC0NLq/image.png",
        color: "from-[#93c5fd] to-[#3b82f6]",
        border: "border-[#93c5fd]/30",
    },
];

export default function ServicesSection() {
    return (
        <section className="relative bg-[#0B0C0F] py-32 lg:py-44 overflow-hidden">
            {/* Sticky Background Image matching previous sections */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="sticky top-0 h-screen w-full">
                    <img
                        src="https://i.ibb.co.com/TMCZk9GJ/image.png"
                        alt="Roofing background"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C0F] via-[#0B0C0F]/90 to-[#0B0C0F]/70" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0F] via-transparent to-[#0B0C0F]" />
                </div>
            </div>

            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#3b82f6]/[0.04] blur-[150px] z-10" />

            {/* Added generous top padding (pt-16 sm:pt-24) so content sits down nicely inside the viewport */}
            <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-10 pt-16 sm:pt-24">
                {/* Section Header with Larger & Bolder Typography */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-20 lg:mb-28"
                >
                    {/* Eyebrow text made bolder and slightly larger */}
                    <span className="inline-block text-xs sm:text-sm font-bold tracking-[0.35em] uppercase text-[#3b82f6] mb-5">
                        OUR SERVICES
                    </span>
                    {/* Main Heading made significantly larger and bolder */}
                    <h2 className="text-[#ffffff] font-black text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-tight mb-6">
                        Your Roofing Expert
                    </h2>
                    {/* Subtitle styled for better readability */}
                    <p className="text-[#9ca3af] text-base sm:text-lg lg:text-xl tracking-wide uppercase font-semibold">
                        Elevating your property&apos;s aesthetics, <br className="hidden sm:block" />
                        one step at a time
                    </p>
                </motion.div>

                {/* 3 Services Cards Grid with Background Images & Framer Motion Entrance */}
                <div className="grid md:grid-cols-3 gap-8 items-stretch">
                    {SERVICES.map((service, index) => {
                        return (
                            <motion.div
                                key={service.number}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                // Enhanced hover effect with scale and lift
                                whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.3 } }}
                                className={`relative group rounded-[2.5xl] border ${service.border} bg-[#141519] p-8 sm:p-10 flex flex-col justify-between hover:border-[#3b82f6]/60 transition-all duration-500 shadow-2xl overflow-hidden`}
                                style={{
                                    clipPath: "polygon(0% 12%, 12% 0%, 88% 0%, 100% 12%, 100% 88%, 88% 100%, 12% 100%, 0% 88%)"
                                }}
                            >
                                {/* --- Background Image Container --- */}
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                                    />
                                    {/* Gradient Overlay for Text Readability - Darker at bottom */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#141519] via-[#141519]/70 to-transparent" />
                                    {/* Top subtle gradient to make number/icon stand out */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-[#141519]/60 via-transparent to-transparent" />
                                </div>

                                {/* Content Container */}
                                <div className="relative z-10 flex flex-col h-full justify-between">
                                    {/* Top badge row: Animated Number (Replaces Icon as primary badge) */}
                                    <div className="flex items-center justify-between mb-auto pb-24">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white opacity-90 group-hover:opacity-100 transition-opacity">
                                            {/* You can still place a small icon here if desired, but removed for clean pic focus */}
                                            <span className="text-2xl font-bold text-white/70">{service.number}</span>
                                        </div>

                                    </div>

                                    {/* Title & Description */}
                                    <div>
                                        <h3 className="text-[#ffffff] font-extrabold text-xl sm:text-2xl mb-4 leading-snug group-hover:text-[#60a5fa] transition-colors duration-300 drop-shadow-md">
                                            {service.title}
                                        </h3>
                                        <p className="text-[#d1d5db] text-[15px] leading-relaxed mb-8 opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-sm">
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* Learn More Action Link with Hover Icon Motion */}
                                    <div className="pt-6 border-t border-white/10">
                                        <a
                                            href="#learn-more"
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-[#60a5fa] group-hover:text-white transition-colors duration-300"
                                        >
                                            Learn More
                                            <div className="w-7 h-7 rounded-full bg-[#3b82f6]/10 flex items-center justify-center group-hover:bg-[#3b82f6] group-hover:text-white transition-all duration-300">
                                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" strokeWidth={2.5} />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}