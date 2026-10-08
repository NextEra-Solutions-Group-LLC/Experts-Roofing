"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wrench, ClipboardCheck, ShieldAlert } from "lucide-react";

const HERO_IMAGES = [
    "https://i.ibb.co/Swrm59HQ/image.png",
    "https://i.ibb.co/nNZtQRj0/image.png",
    "https://i.ibb.co/DPkwyVxm/image.png",
];

const FEATURES = [
    {
        icon: Wrench,
        title: "Quality Materials",
        desc: "We have all the quality roofing products needed.",
    },
    {
        icon: ClipboardCheck,
        title: "Expert Engineer",
        desc: "Our roofing team members are well educated and professional.",
    },
    {
        icon: ShieldAlert,
        title: "Quality Maintenance",
        desc: "Ensure the quality of work is our main goal to follow.",
    },
];

export default function Hero() {
    const [currentImage, setCurrentImage] = useState(0);

    // Auto-slide background images
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center pt-40 lg:pt-48 pb-24 overflow-hidden bg-[#0A0D14] text-zinc-100">
            {/* Background Swiper Images with Smooth Fade Transition & Balanced Overlays */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentImage}
                        src={HERO_IMAGES[currentImage]}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        alt="Roofing background"
                        className="absolute inset-0 w-full h-full object-cover brightness-[0.7] contrast-[1.05]"
                    />
                </AnimatePresence>
                {/* Balanced Professional Overlays (Not too dark) */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#07090E]/85 via-[#07090E]/65 to-[#07090E]/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-transparent to-[#0A0D14]/50" />
            </div>

            {/* Ambient Background Glow */}
            <div className="pointer-events-none absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#2563eb]/[0.12] blur-[140px] z-10" />

            {/* Content Container */}
            <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-12 w-full">
                <div className="grid lg:grid-cols-2 gap-14 items-center">
                    {/* Left Column: Copy Only */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="inline-flex items-center gap-2.5 rounded-full border border-blue-500/30 bg-blue-500/15 px-4.5 py-1.5 mb-7 backdrop-blur-md shadow-lg shadow-blue-500/10"
                        >
                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                            <span className="text-[11.5px] font-bold tracking-[0.28em] uppercase text-blue-300">
                                20 Years of Experience
                            </span>
                        </motion.div>

                        {/* Slogan above main title */}
                        <motion.p
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="text-blue-400 font-semibold text-sm tracking-wider uppercase mb-2 drop-shadow"
                        >
                            #1 RATED CONTRACTOR IN Dallas, Texas
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="text-white font-extrabold leading-[1.08] text-4xl sm:text-5xl lg:text-[3.5rem] tracking-tight drop-shadow-md"
                        >
                            EXPERTS
                            <br />
                            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
                                ROOFING
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.24, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-6 max-w-lg text-zinc-200 text-[16px] leading-relaxed font-normal drop-shadow"
                        >
                            Experts Roofing, we take pride quality with over 20 Years of experience. We can help you with any roof issue.
                        </motion.p>

                        {/* Image Swiper Pagination Dots */}
                        <div className="flex items-center gap-3 mt-10">
                            {HERO_IMAGES.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentImage(idx)}
                                    className={`h-2 rounded-full transition-all duration-300 ${currentImage === idx ? "w-8 bg-blue-500 shadow-md shadow-blue-500/50" : "w-2 bg-zinc-600 hover:bg-zinc-500"
                                        }`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Empty space to balance the layout */}
                    <div className="hidden lg:block relative"></div>
                </div>

                {/* ---------- Feature Cards (House Shape Top Design) ---------- */}
                <div className="relative mt-24 grid sm:grid-cols-3 gap-8">
                    {FEATURES.map((f, i) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ delay: 0.12 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="group relative bg-[#131620]/90 backdrop-blur-xl rounded-3xl p-8 pt-10 text-zinc-100 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 hover:border-blue-500/50 transition-all duration-400 hover:-translate-y-1.5"
                        >
                            {/* House Silhouette Roof Top Element */}
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-10 bg-[#131620] border-t border-x border-white/10 rounded-t-xl flex items-end justify-center pb-2 shadow-inner group-hover:border-blue-500/50 transition-colors">
                                <div className="w-4 h-2 bg-zinc-600 rounded-sm" />
                            </div>

                            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-500/15 border border-blue-500/30 mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-md shadow-blue-500/10">
                                <f.icon className="w-7 h-7 text-blue-400 group-hover:text-white transition-colors" strokeWidth={1.8} />
                            </div>

                            <h3 className="text-white font-bold text-lg text-center mb-3 group-hover:text-blue-400 transition-colors">{f.title}</h3>

                            <p className="text-zinc-300 text-[14px] leading-relaxed text-center font-normal">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
