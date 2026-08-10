"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface PreloaderProps {
    onComplete?: () => void;
    minDuration?: number;
}

const BRAND = "EXPERTS ROOFING";

export default function Preloader({ onComplete, minDuration = 3200 }: PreloaderProps) {
    const [progress, setProgress] = useState(0);
    const [done, setDone] = useState(false);
    const [exiting, setExiting] = useState(false);

    // deterministic-looking "random" particle positions, computed once
    const particles = useMemo(
        () =>
            Array.from({ length: 26 }, (_, i) => ({
                left: `${(i * 37) % 100}%`,
                top: `${(i * 53) % 100}%`,
                size: 1.5 + ((i * 13) % 3),
                delay: (i % 10) * 0.25,
                duration: 4 + (i % 5),
            })),
        []
    );

    useEffect(() => {
        const start = Date.now();
        let raf: number;

        const tick = () => {
            const elapsed = Date.now() - start;
            // ease toward 100 over minDuration, with a little organic jitter curve
            const linear = Math.min(elapsed / minDuration, 1);
            const eased = 1 - Math.pow(1 - linear, 2.4);
            const pct = Math.min(Math.round(eased * 100), 100);
            setProgress(pct);

            if (elapsed < minDuration) {
                raf = requestAnimationFrame(tick);
            } else {
                setProgress(100);
                setDone(true);
            }
        };

        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [minDuration]);

    useEffect(() => {
        if (!done) return;
        const t = setTimeout(() => setExiting(true), 450);
        return () => clearTimeout(t);
    }, [done]);

    useEffect(() => {
        if (!exiting) return;
        const t = setTimeout(() => onComplete?.(), 1100);
        return () => clearTimeout(t);
    }, [exiting, onComplete]);

    return (
        <AnimatePresence>
            {!exiting && (
                <motion.div
                    className="fixed inset-0 z-[999] bg-[#070b14] overflow-hidden flex items-center justify-center"
                    exit={{ opacity: 0, transition: { duration: 0.1 } }}
                >
                    {/* ---------- ambient blue glow ---------- */}
                    <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[#1d4ed8]/[0.08] blur-[160px]" />

                    {/* ---------- drifting particles ---------- */}
                    {particles.map((p, i) => (
                        <motion.span
                            key={i}
                            className="absolute rounded-full bg-[#1d4ed8]"
                            style={{
                                left: p.left,
                                top: p.top,
                                width: p.size,
                                height: p.size,
                                opacity: 0.35,
                            }}
                            animate={{
                                y: [0, -18, 0],
                                opacity: [0.15, 0.55, 0.15],
                            }}
                            transition={{
                                duration: p.duration,
                                delay: p.delay,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    ))}

                    {/* ---------- curtain panels (exit reveal) ---------- */}
                    <motion.div
                        className="absolute top-0 left-0 w-1/2 h-full bg-[#070b14] z-10 border-r border-[#1d4ed8]/10"
                        animate={exiting ? { x: "-100%" } : { x: 0 }}
                        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                    />
                    <motion.div
                        className="absolute top-0 right-0 w-1/2 h-full bg-[#070b14] z-10 border-l border-[#1d4ed8]/10"
                        animate={exiting ? { x: "100%" } : { x: 0 }}
                        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                    />

                    {/* ---------- center content ---------- */}
                    <motion.div
                        className="relative z-20 flex flex-col items-center px-6"
                        animate={exiting ? { opacity: 0, scale: 1.08 } : { opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* ---- rotating concentric rings behind logo ---- */}
                        <div className="relative w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] mb-8 flex items-center justify-center">
                            <motion.div
                                className="absolute inset-0 rounded-full border border-[#1d4ed8]/20"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.div
                                className="absolute inset-3 rounded-full border border-[#1d4ed8]/35 border-dashed"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            />

                            {/* ---- Logo Image Integration ---- */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                                className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center"
                            >
                                <Image
                                    src="https://i.ibb.co/0jyqw7Kr/image.png"
                                    alt="Experts Roofing Logo"
                                    width={96}
                                    height={96}
                                    priority
                                    className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(29,78,216,0.5)]"
                                />
                            </motion.div>

                            {/* soft pulse glow once drawn */}
                            <motion.div
                                className="absolute inset-0 rounded-full bg-[#1d4ed8]/25 blur-xl"
                                animate={{ opacity: [0, 0.5, 0], scale: [0.8, 1.3, 0.8] }}
                                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
                            />
                        </div>

                        {/* ---- wordmark, letter-by-letter reveal ---- */}
                        <div className="flex flex-wrap justify-center mb-1">
                            {BRAND.split("").map((char, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, y: 14 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.9 + i * 0.035, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    className={`text-[15px] sm:text-lg font-semibold tracking-[0.28em] ${char === " " ? "w-2" : ""
                                        } ${char === " "
                                            ? ""
                                            : "bg-gradient-to-b from-white to-neutral-300 bg-clip-text text-transparent"
                                        }`}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.7, duration: 0.6 }}
                            className="text-[#60a5fa]/85 text-[10.5px] sm:text-[11px] tracking-[0.3em] uppercase mb-10"
                        >
                            Dallas • Fort Worth • DFW
                        </motion.p>

                        {/* ---- progress bar + rolling counter ---- */}
                        <div className="w-[220px] sm:w-[260px]">
                            <div className="relative h-[3px] w-full rounded-full bg-white/10 overflow-hidden mb-4">
                                <motion.div
                                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#1d4ed8] via-[#60a5fa] to-[#1d4ed8]"
                                    style={{ width: `${progress}%` }}
                                    transition={{ ease: "linear" }}
                                />
                                {/* shimmer sweep */}
                                <motion.div
                                    className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                                    animate={{ left: ["-15%", "115%"] }}
                                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400">
                                    Loading Experience
                                </span>
                                <span className="text-[#60a5fa] text-[13px] font-semibold tabular-nums tracking-wide">
                                    {progress}%
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* ---------- corner frame accents ---------- */}
                    <div className="absolute top-8 left-8 w-10 h-10 border-t border-l border-[#1d4ed8]/35 z-20" />
                    <div className="absolute top-8 right-8 w-10 h-10 border-t border-r border-[#1d4ed8]/35 z-20" />
                    <div className="absolute bottom-8 left-8 w-10 h-10 border-b border-l border-[#1d4ed8]/35 z-20" />
                    <div className="absolute bottom-8 right-8 w-10 h-10 border-b border-r border-[#1d4ed8]/35 z-20" />
                </motion.div>
            )}
        </AnimatePresence>
    );
}