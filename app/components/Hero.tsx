"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, ClipboardCheck, Wrench, ShieldAlert } from "lucide-react";

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
        <section className="relative min-h-screen flex items-center pt-48 lg:pt-56 pb-24 overflow-hidden bg-[#05070B] text-white">
            {/* Background Swiper Images with Smooth Fade Transition */}
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
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </AnimatePresence>
                {/* Dark Professional Overlay Gradients */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#05070B] via-[#05070B]/85 to-[#05070B]/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-[#05070B]/60" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 w-full">
                <div className="grid lg:grid-cols-2 gap-14 items-center">

                    {/* Left Column: Copy & CTAs */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="inline-flex items-center gap-2.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-4.5 py-1.5 mb-7 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                        >
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                            <span className="text-[11.5px] font-bold tracking-[0.28em] uppercase text-blue-400">
                                20 Years of Experience
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="text-white font-extrabold leading-[1.08] text-4xl sm:text-5xl lg:text-[3.5rem] tracking-tight"
                        >
                            EXPERTS
                            <br />
                            <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(59,130,246,0.3)]">
                                ROOFING
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.24, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-6 max-w-lg text-zinc-300 text-[16px] leading-relaxed font-normal"
                        >
                            Experts Roofing, we take pride quality with over 25 Years of experience. We can help you with any roof issue.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.36, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-10 flex flex-wrap items-center gap-5"
                        >
                            <a
                                href="tel:8177680413"
                                className="group inline-flex items-center gap-3 rounded-full px-7 py-4 text-[13.5px] font-bold tracking-[0.08em] uppercase text-white bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#3B82F6] hover:from-[#2563EB] hover:to-[#1D4ED8] shadow-[0_8px_30px_rgba(37,99,235,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 border border-blue-400/30"
                            >
                                <Phone className="w-4 h-4 text-blue-200" />
                                <span>817-768-0413</span>
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>

                            <a
                                href="/contact"
                                className="group inline-flex items-center gap-2 rounded-full px-7 py-4 text-[13.5px] font-bold tracking-[0.08em] uppercase text-zinc-200 bg-zinc-900/80 border border-zinc-700 hover:border-blue-500 hover:text-white hover:bg-zinc-800 transition-all duration-300 shadow-lg"
                            >
                                <span>Request an Estimate</span>
                            </a>
                        </motion.div>

                        {/* Image Swiper Pagination Dots */}
                        <div className="flex items-center gap-3 mt-10">
                            {HERO_IMAGES.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentImage(idx)}
                                    className={`h-2 rounded-full transition-all duration-300 ${currentImage === idx ? "w-8 bg-blue-500" : "w-2 bg-zinc-600 hover:bg-zinc-400"
                                        }`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Decorative Visual Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="hidden lg:block relative"
                    >
                        <div className="relative p-8 rounded-[32px] bg-zinc-900/40 backdrop-blur-xl border border-blue-500/20 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.8)]">
                            <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-blue-500/50 rounded-tr-[32px]" />
                            <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-blue-500/50 rounded-bl-[32px]" />

                            <span className="text-blue-500 font-bold text-xs tracking-widest uppercase mb-2 block">Certified Excellence</span>
                            <h3 className="text-2xl font-bold text-white mb-4">Trusted Roof Protection Across Texas</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                                Our team delivers robust residential and commercial roofing solutions backed by long-standing craftsmanship and robust material warranties.
                            </p>
                            <div className="flex items-center gap-4 pt-4 border-t border-zinc-800">
                                <div>
                                    <h4 className="text-2xl font-extrabold text-white">20+</h4>
                                    <p className="text-xs text-zinc-400">Years Experience</p>
                                </div>
                                <div className="w-[1px] h-8 bg-zinc-800" />
                                <div>
                                    <h4 className="text-2xl font-extrabold text-white">100%</h4>
                                    <p className="text-xs text-zinc-400">Satisfaction Rate</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

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
                            className="group relative bg-white rounded-3xl p-8 pt-10 text-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-blue-100 hover:border-blue-500 transition-all duration-400 hover:-translate-y-1.5"
                        >
                            {/* House Silhouette Roof Top Element */}
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-10 bg-white border-t border-x border-blue-100 rounded-t-xl flex items-end justify-center pb-2 shadow-sm group-hover:border-blue-500 transition-colors">
                                <div className="w-4 h-2 bg-zinc-200 rounded-sm" />
                            </div>

                            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 mx-auto mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                                <f.icon className="w-7 h-7 text-[#2563EB] group-hover:text-white transition-colors" strokeWidth={1.8} />
                            </div>

                            <h3 className="text-zinc-900 font-bold text-lg text-center mb-3">
                                {f.title}
                            </h3>

                            <p className="text-zinc-600 text-[14px] leading-relaxed text-center font-normal">
                                {f.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}