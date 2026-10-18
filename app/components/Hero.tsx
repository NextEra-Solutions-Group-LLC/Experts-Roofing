"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HERO_IMAGES = [
    "https://i.ibb.co/Swrm59HQ/image.png",
    "https://i.ibb.co/nNZtQRj0/image.png",
    "https://i.ibb.co/DPkwyVxm/image.png",
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
            {/* Background Images - 100% Original Color & Full Opacity */}
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
            </div>

            {/* Content Container */}
            <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-12 w-full">
                <div className="grid lg:grid-cols-2 gap-14 items-center">
                    {/* Left Column: Direct text on background image */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="inline-flex items-center gap-2.5 rounded-full border border-blue-600/30 bg-white/90 backdrop-blur-md px-4 py-1.5 mb-6 shadow-sm"
                        >
                            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                            <span className="text-xs font-extrabold tracking-[0.25em] uppercase text-blue-700">
                                20 Years of Experience
                            </span>
                        </motion.div>

                        {/* Slogan */}
                        <motion.p
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="text-blue-700 font-extrabold text-xs sm:text-sm tracking-wider uppercase mb-3 drop-shadow-sm"
                        >
                            #1 RATED CONTRACTOR IN Dallas, Texas
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="text-slate-900 font-black leading-[1.05] text-4xl sm:text-5xl lg:text-[3.6rem] tracking-tight uppercase drop-shadow-md"
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
                            className="mt-6 max-w-lg text-slate-900 text-base sm:text-lg leading-relaxed font-bold drop-shadow-sm"
                        >
                            Experts Roofing, we take pride quality with over 20 Years of experience. We can help you with any roof issue.
                        </motion.p>

                        {/* Image Swiper Pagination Dots */}
                        <div className="flex items-center gap-3 mt-8">
                            {HERO_IMAGES.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentImage(idx)}
                                    className={`h-2.5 rounded-full transition-all duration-300 ${currentImage === idx ? "w-8 bg-blue-600 shadow-md" : "w-2.5 bg-white/80 hover:bg-white"
                                        }`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="hidden lg:block relative"></div>
                </div>
            </div>
        </section>
    );
}