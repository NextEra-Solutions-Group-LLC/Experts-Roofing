"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Quote, Sparkles, ArrowRight } from "lucide-react";

type Testimonial = {
    name: string;
    role: string;
    quote: string;
    image: string;
};

const TESTIMONIALS: Testimonial[] = [
    {
        name: "Charles",
        role: "Homeowner — DFW, TX",
        quote:
            "I had a great experience working with this team. They showed excellent communication throughout the process and made everything simple and stress-free.",
        image:
            "https://i.ibb.co/PvFqjH01/image.png",
    },
    {
        name: "Renee",
        role: "Homeowner — Fort Worth, TX",
        quote:
            "Storm damage repaired fast, and the insurance paperwork was handled for us end to end.",
        image:
            "https://i.ibb.co/PvFqjH01/image.png",
    },
    {
        name: "Ana",
        role: "Homeowner — Plano, TX",
        quote:
            "Honest quote, no upsells, and the crew showed up exactly when they said they would.",
        image:
            "https://i.ibb.co/PvFqjH01/image.png",
    },
    {
        name: "Oakes",
        role: "Property Manager — Irving, TX",
        quote:
            "We manage a dozen properties and Experts Roofing is the only crew we call now.",
        image:
            "https://i.ibb.co/PvFqjH01/image.png",
    },
    {
        name: "Lauren",
        role: "Homeowner — Frisco, TX",
        quote:
            "Five year old leak finally gone. Wish we'd called them the first time it happened.",
        image:
            "https://i.ibb.co/PvFqjH01/image.png",
    },
];

export default function TestimonialsSection() {
    const [active, setActive] = useState(0);

    return (
        <section className="relative bg-[#070b14] py-20 sm:py-28 lg:py-32 overflow-hidden">
            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#1d4ed8]/[0.06] blur-[160px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
                {/* ---------- Header ---------- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="text-center max-w-xl mx-auto mb-14 sm:mb-16"
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#1d4ed8]/35 bg-[#1d4ed8]/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.28em] uppercase text-[#60a5fa] mb-5">
                        <Sparkles className="w-3.5 h-3.5" strokeWidth={2} />
                        Testimonials
                    </span>
                    <h2 className="text-white font-semibold text-3xl sm:text-[2.6rem] leading-[1.12] tracking-tight">
                        What DFW Homeowners Say
                    </h2>
                </motion.div>

                {/* ---------- Interactive tab carousel ---------- */}
                <div className="flex items-stretch justify-center gap-2 sm:gap-3 h-[380px] sm:h-[440px] lg:h-[480px] max-w-5xl mx-auto">
                    {TESTIMONIALS.map((t, i) => {
                        const isActive = i === active;
                        return (
                            <motion.button
                                key={t.name}
                                layout
                                onClick={() => setActive(i)}
                                transition={{ type: "spring", stiffness: 260, damping: 32 }}
                                className={`relative rounded-2xl overflow-hidden border ${isActive
                                    ? "border-[#1d4ed8]/50 shadow-[0_0_25px_rgba(29,78,216,0.2)]"
                                    : "border-[#1d4ed8]/20 hover:border-[#1d4ed8]/40"
                                    } transition-colors duration-300`}
                                style={{
                                    flex: isActive ? "8 1 0%" : "1 1 0%",
                                    minWidth: isActive ? 0 : 44,
                                }}
                            >
                                {/* background image */}
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div
                                    className={`absolute inset-0 ${isActive
                                        ? "bg-gradient-to-t from-[#070b14]/95 via-[#070b14]/30 to-[#070b14]/50"
                                        : "bg-[#070b14]/85 hover:bg-[#070b14]/70 transition-colors duration-300"
                                        }`}
                                />

                                <AnimatePresence mode="wait">
                                    {isActive ? (
                                        <motion.div
                                            key="active"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.35, delay: 0.15 }}
                                            className="relative z-10 h-full w-full flex flex-col justify-between p-4 sm:p-6"
                                        >
                                            {/* top quote */}
                                            <div className="flex items-start gap-2 max-w-[85%]">
                                                <Quote className="w-4 h-4 text-[#60a5fa] shrink-0 mt-0.5" strokeWidth={2.5} />
                                                <p className="text-neutral-100 text-[12.5px] sm:text-[13.5px] leading-snug text-left">
                                                    {t.quote}
                                                </p>
                                            </div>

                                            {/* center play button */}
                                            <div className="flex-1 flex items-center justify-center">
                                                <span className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#1d4ed8] backdrop-blur-sm shadow-[0_10px_30px_-6px_rgba(29,78,216,0.7)]">
                                                    <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white ml-0.5" />
                                                </span>
                                            </div>

                                            {/* bottom name/role */}
                                            <div className="text-left">
                                                <p className="text-white font-bold text-base sm:text-lg tracking-tight">
                                                    {t.name}
                                                </p>
                                                <p className="text-[#60a5fa] text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase mt-0.5">
                                                    {t.role}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="inactive"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.25 }}
                                            className="relative z-10 h-full w-full flex items-center justify-center py-6"
                                        >
                                            <div className="flex flex-col items-center gap-[3px]">
                                                {t.name
                                                    .toUpperCase()
                                                    .split("")
                                                    .map((letter, li) => (
                                                        <span
                                                            key={li}
                                                            className="text-neutral-300/80 text-[11px] sm:text-[12px] font-bold tracking-wider leading-none"
                                                        >
                                                            {letter}
                                                        </span>
                                                    ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                        );
                    })}
                </div>

                {/* ---------- footer link ---------- */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-center mt-10 sm:mt-12"
                >
                    <a
                        href="/testimonials"
                        className="inline-flex items-center gap-2 text-[13px] font-medium text-neutral-400 hover:text-[#60a5fa] transition-colors duration-300"
                    >
                        See all testimonials
                        <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}