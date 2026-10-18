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
        <section className="relative min-h-screen flex items-center pt-40 lg:pt-48 pb-20 overflow-hidden bg-white text-slate-900">
            {/* Background Images without dark overlays */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentImage}
                        src={HERO_IMAGES[currentImage]}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 0.15, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        alt="Roofing background"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </AnimatePresence>
            </div>

            {/* Content Container */}
            <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-12 w-full">
                <div className="grid lg:grid-cols-2 gap-14 items-center">
                    {/* Left Column */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="inline-flex items-center gap-2.5 rounded-full border border-blue-600/20 bg-blue-50 px-4 py-1.5 mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                            <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-700">
                                20 Years of Experience
                            </span>
                        </motion.div>

                        {/* Slogan */}
                        <motion.p
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase mb-3"
                        >
                            #1 RATED CONTRACTOR IN Dallas, Texas
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="text-slate-900 font-black leading-[1.05] text-4xl sm:text-5xl lg:text-[3.6rem] tracking-tight uppercase"
                        >
                            EXPERTS
                            <br />
                            <span className="text-blue-600">
                                ROOFING
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.24, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-6 max-w-lg text-slate-600 text-base sm:text-lg leading-relaxed font-normal"
                        >
                            Experts Roofing, we take pride quality with over 20 Years of experience. We can help you with any roof issue.
                        </motion.p>

                        {/* Image Swiper Pagination Dots */}
                        <div className="flex items-center gap-3 mt-10">
                            {HERO_IMAGES.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentImage(idx)}
                                    className={`h-2.5 rounded-full transition-all duration-300 ${currentImage === idx ? "w-8 bg-blue-600" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                                        }`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="hidden lg:block relative"></div>
                </div>

                {/* ---------- Feature Cards (Clean White Light Theme) ---------- */}
                <div className="relative mt-20 grid sm:grid-cols-3 gap-8">
                    {FEATURES.map((f, i) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ delay: 0.12 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="group relative bg-white rounded-3xl p-8 text-slate-900 shadow-xl border border-slate-100 hover:border-blue-500/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
                        >
                            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                <f.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" strokeWidth={1.8} />
                            </div>

                            <h3 className="text-slate-900 font-extrabold text-lg text-center mb-2 uppercase group-hover:text-blue-600 transition-colors">
                                {f.title}
                            </h3>

                            <p className="text-slate-600 text-sm leading-relaxed text-center font-medium">
                                {f.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}