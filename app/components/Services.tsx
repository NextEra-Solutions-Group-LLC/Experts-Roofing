"use client";

import { motion } from "framer-motion";
import { Droplet, ShieldAlert, Home, ArrowUpRight } from "lucide-react";

const SERVICES = [
    {
        number: "01",
        title: "Roof Leak Repairs",
        description: "We diagnose and repair roof leaks quickly to prevent water damage and protect your home from further issues.",
        icon: Droplet,
        color: "from-[#3b82f6] to-[#1d4ed8]",
        border: "border-[#3b82f6]/30",
        bgGlow: "bg-[#3b82f6]/10",
    },
    {
        number: "02",
        title: "Rotted Plywood Repairs",
        description: "We remove damaged shingles and replace rotted plywood to restore the strength and integrity of your roof structure.",
        icon: ShieldAlert,
        color: "from-[#60a5fa] to-[#2563eb]",
        border: "border-[#60a5fa]/30",
        bgGlow: "bg-[#60a5fa]/10",
    },
    {
        number: "03",
        title: "Full Roof Replacement",
        description: "Complete roof replacements using quality materials for long-lasting protection, improved curb appeal, and peace of mind.",
        icon: Home,
        color: "from-[#93c5fd] to-[#3b82f6]",
        border: "border-[#93c5fd]/30",
        bgGlow: "bg-[#93c5fd]/10",
    },
];

export default function ServicesSection() {
    return (
        <section className="relative bg-[#0B0C0F] py-24 lg:py-32 overflow-hidden">
            {/* Sticky Background Image matching previous sections */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="sticky top-0 h-screen w-full">
                    <img
                        src="https://i.ibb.co/dwSgZ8LG/image.png"
                        alt="Roofing background"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C0F] via-[#0B0C0F]/90 to-[#0B0C0F]/70" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0F] via-transparent to-[#0B0C0F]" />
                </div>
            </div>

            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#3b82f6]/[0.04] blur-[150px] z-10" />

            <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <span className="inline-block text-[12px] font-semibold tracking-[0.3em] uppercase text-[#3b82f6] mb-4">
                        OUR SERVICES
                    </span>
                    <h2 className="text-[#ffffff] font-extrabold text-3xl sm:text-[2.6rem] leading-[1.12] tracking-tight mb-4">
                        Your Roofing Expert
                    </h2>
                    <p className="text-[#9ca3af] text-base sm:text-lg tracking-wide uppercase font-medium">
                        Elevating your property&apos;s aesthetics, one step at a time
                    </p>
                </motion.div>

                {/* 3 Services Cards Grid with Shield-inspired rounded shapes & Framer Motion Entrance */}
                <div className="grid md:grid-cols-3 gap-8 items-stretch">
                    {SERVICES.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <motion.div
                                key={service.number}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className={`relative group rounded-[2.5xl] border ${service.border} bg-[#141519]/85 backdrop-blur-xl p-8 sm:p-10 flex flex-col justify-between hover:border-[#3b82f6]/60 transition-colors duration-500 shadow-2xl overflow-hidden`}
                                style={{
                                    clipPath: "polygon(0% 12%, 12% 0%, 88% 0%, 100% 12%, 100% 88%, 88% 100%, 12% 100%, 0% 88%)"
                                }}
                            >
                                {/* Subtle inner ambient lighting glow on hover */}
                                <div className={`absolute inset-0 ${service.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                                <div className="relative z-10">
                                    {/* Top badge row: Icon + Animated Number */}
                                    <div className="flex items-center justify-between mb-8">
                                        <motion.div
                                            whileHover={{ rotate: 10, scale: 1.05 }}
                                            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg shadow-blue-500/25`}
                                        >
                                            <IconComponent className="w-7 h-7" strokeWidth={2} />
                                        </motion.div>
                                        <span className="text-3xl font-extrabold text-white/20 font-mono">
                                            {service.number}
                                        </span>
                                    </div>

                                    {/* Title & Description */}
                                    <h3 className="text-[#ffffff] font-bold text-xl sm:text-2xl mb-4 leading-snug">
                                        {service.title}
                                    </h3>
                                    <p className="text-[#9ca3af] text-[15px] leading-relaxed mb-8">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Learn More Action Link with Hover Icon Motion */}
                                <div className="relative z-10 pt-6 border-t border-[#3b82f6]/15">
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
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}