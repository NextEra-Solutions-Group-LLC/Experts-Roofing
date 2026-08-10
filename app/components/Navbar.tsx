"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Our Projects", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 font-sans">
            {/* ---------- Ultra VIP Top Info Bar (Hides on Scroll) ---------- */}
            <AnimatePresence initial={false}>
                {!scrolled && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden bg-[#05070B] border-b border-[#3B82F6]/20 shadow-[inset_0_-1px_0_rgba(59,130,246,0.1)]"
                    >
                        <div className="mx-auto max-w-7xl px-6 lg:px-12 flex items-center justify-between h-11 text-[13px] tracking-wide text-zinc-300">
                            <div className="flex items-center gap-6">
                                <a
                                    href="tel:3477663669"
                                    className="flex items-center gap-2 hover:text-[#60A5FA] transition-colors duration-300 group"
                                >
                                    <div className="w-6 h-6 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/30 flex items-center justify-center group-hover:border-[#60A5FA] transition-colors">
                                        <Phone className="w-3.5 h-3.5 text-[#3B82F6]" strokeWidth={2.2} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-zinc-100 text-[13.5px] leading-tight">347-ROOF-NOW</span>
                                        <span className="text-[10px] text-zinc-400 font-medium tracking-normal leading-tight">347-7663-669</span>
                                    </div>
                                </a>
                                <span className="hidden sm:block w-px h-4 bg-zinc-800" />
                                <a
                                    href="mailto:contact@expertsroofing.us"
                                    className="hidden sm:flex items-center gap-2 hover:text-[#60A5FA] transition-colors duration-300 group"
                                >
                                    <div className="w-6 h-6 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/30 flex items-center justify-center group-hover:border-[#60A5FA] transition-colors">
                                        <Mail className="w-3.5 h-3.5 text-[#3B82F6]" strokeWidth={2.2} />
                                    </div>
                                    <span className="font-medium text-zinc-200">contact@expertsroofing.us</span>
                                </a>
                            </div>
                            <div className="flex items-center gap-2 text-zinc-400 bg-zinc-900/60 px-3.5 py-1 rounded-full border border-zinc-800">
                                <MapPin className="w-3.5 h-3.5 text-[#3B82F6]" strokeWidth={2.2} />
                                <span className="font-semibold text-zinc-200">Dallas, TX</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>


            <motion.div
                animate={{
                    paddingTop: scrolled ? 16 : 24,
                    paddingBottom: scrolled ? 16 : 24,
                }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className={`relative transition-all duration-500 ${scrolled
                    ? "bg-[#05070B]/95 backdrop-blur-2xl border-b border-[#3B82F6]/30 shadow-[0_16px_50px_-10px_rgba(0,0,0,0.8)]"
                    : "bg-transparent border-b border-transparent"
                    }`}
            >
                {/* Glowing Top Neon Line (Only shows on scroll) */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent transition-opacity duration-500 ${scrolled ? "opacity-90 shadow-[0_0_12px_#3B82F6]" : "opacity-0"}`} />

                <div className="mx-auto max-w-7xl px-6 lg:px-12 flex items-center justify-between">

                    {/* Logo Section with Larger Size & Modern Bottom Kona/Extension */}
                    <div className="relative group">
                        <Link href="/" className="flex items-center py-2">
                            <div className="relative w-64 h-16 sm:w-72 sm:h-20 flex items-center">
                                <Image
                                    src="https://i.ibb.co/0jyqw7Kr/image.png"
                                    alt="Experts Roofing Logo"
                                    fill
                                    className="object-contain object-left drop-shadow-[0_6px_16px_rgba(0,0,0,0.6)] brightness-110"
                                    priority
                                />
                            </div>
                        </Link>

                        {/* Premium Modern Bottom Kona Shape */}
                        <div className="absolute -bottom-[28px] left-0 w-44 h-2.5 bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-transparent rounded-bl-2xl shadow-[0_4px_16px_rgba(59,130,246,0.6)] pointer-events-none transition-all duration-500 group-hover:w-56" />
                        <div className="absolute -bottom-[28px] left-44 w-2.5 h-2.5 bg-[#2563EB] transform rotate-45 pointer-events-none hidden lg:block shadow-[0_0_8px_#3B82F6]" />
                    </div>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden lg:flex items-center gap-10">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="relative text-[14.5px] tracking-wide font-medium text-zinc-300 hover:text-white transition-colors duration-300 group py-1"
                            >
                                {link.label}
                                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] transition-all duration-300 group-hover:w-full rounded-full shadow-[0_0_8px_#3B82F6]" />
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/contact"
                            className="hidden md:inline-flex items-center gap-2.5 rounded-full px-7.5 py-3.5 text-[13px] font-bold tracking-[0.1em] uppercase text-white bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#3B82F6] hover:from-[#2563EB] hover:to-[#1D4ED8] shadow-[0_4px_25px_rgba(37,99,235,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 border border-blue-400/30"
                        >
                            Request an Estimate
                            <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                        </Link>

                        <button
                            aria-label="Toggle menu"
                            onClick={() => setMobileOpen((v) => !v)}
                            className="lg:hidden flex items-center justify-center w-12 h-12 rounded-full border border-[#3B82F6]/40 text-[#60A5FA] bg-[#3B82F6]/10 hover:bg-[#3B82F6]/20 transition-colors shadow-[0_0_12px_rgba(59,130,246,0.2)]"
                        >
                            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* ---------- Mobile Menu Dropdown ---------- */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:hidden overflow-hidden bg-[#05070B] border-b border-[#3B82F6]/30 shadow-2xl"
                    >
                        <nav className="flex flex-col px-6 py-6 gap-2">
                            {NAV_LINKS.map((link, i) => (
                                <motion.div
                                    key={link.label}
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05, duration: 0.3 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="flex items-center justify-between py-4 border-b border-zinc-800 text-zinc-200 text-[16px] font-medium hover:text-[#60A5FA] transition-colors"
                                    >
                                        {link.label}
                                        <ArrowUpRight className="w-4 h-4 text-[#3B82F6]" />
                                    </Link>
                                </motion.div>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setMobileOpen(false)}
                                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-[13px] font-bold tracking-[0.1em] uppercase text-white bg-gradient-to-r from-[#2563EB] to-[#3B82F6] shadow-lg shadow-blue-500/40 border border-blue-400/30"
                            >
                                Request an Estimate
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}