"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Menu, X, ArrowUpRight, Calendar, FileText } from "lucide-react";

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Our Projects", href: "/gallery" },
    { label: "Service Area", href: "/area" },
];

const PHONE_DISPLAY = "347-ROOF-NOW";
const PHONE_NUM = "347-766-3669";
const PHONE_HREF = "tel:3477663669";
const EMAIL_ADDRESS = "contact@expertsroofing.us";

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
            {/* ---------- Permanent Top Info Bar ---------- */}
            <div className="bg-[#05070B] border-b border-[#3B82F6]/20 shadow-[inset_0_-1px_0_rgba(59,130,246,0.1)]">
                <div className="mx-auto max-w-7xl px-6 lg:px-12 flex items-center justify-between h-12 text-[13px] tracking-wide text-zinc-300">

                    {/* Left side: Location */}
                    <div className="hidden sm:flex items-center gap-2 text-zinc-400 bg-zinc-900/60 px-3.5 py-1 rounded-full border border-zinc-800">
                        <MapPin className="w-4 h-4 text-[#3B82F6]" strokeWidth={2.2} />
                        <span className="font-semibold text-zinc-200">Dallas, TX</span>
                    </div>

                    {/* Right side: Pure Email Icon (No text) & Phone Number */}
                    <div className="flex items-center gap-6 ml-auto sm:ml-0">

                        {/* Email Link: Just the icon as instructed */}
                        <a
                            href={`mailto:${EMAIL_ADDRESS}`}
                            title={`Email us: ${EMAIL_ADDRESS}`}
                            className="flex items-center group"
                        >
                            <div className="w-8 h-8 rounded-full bg-[#3B82F6]/15 border border-[#3B82F6]/40 flex items-center justify-center group-hover:border-[#60A5FA] group-hover:bg-[#3B82F6]/30 transition-all shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                                <Mail className="w-4 h-4 text-[#3B82F6] group-hover:text-white transition-colors" strokeWidth={2.2} />
                            </div>
                        </a>

                        <span className="w-px h-4 bg-zinc-800 hidden sm:block" />

                        {/* Phone Number */}
                        <a
                            href={PHONE_HREF}
                            className="flex items-center gap-2.5 hover:text-[#60A5FA] transition-colors duration-300 group"
                        >
                            <div className="w-8 h-8 rounded-full bg-[#3B82F6]/15 border border-[#3B82F6]/40 flex items-center justify-center group-hover:border-[#60A5FA] group-hover:bg-[#3B82F6]/30 transition-all">
                                <Phone className="w-4 h-4 text-[#3B82F6]" strokeWidth={2.2} />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-zinc-100 text-[13.5px] leading-tight">{PHONE_DISPLAY}</span>
                                <span className="text-[11px] text-zinc-400 font-medium tracking-wide hidden sm:inline">{PHONE_NUM}</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* ---------- Main Navigation Section ---------- */}
            <motion.div
                animate={{
                    paddingTop: scrolled ? 14 : 20,
                    paddingBottom: scrolled ? 14 : 20,
                }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className={`relative transition-all duration-500 ${scrolled
                    ? "bg-[#05070B]/95 backdrop-blur-2xl border-b border-[#3B82F6]/30 shadow-[0_16px_50px_-10px_rgba(0,0,0,0.8)]"
                    : "bg-transparent border-b border-transparent"
                    }`}
            >
                {/* Glowing Top Line */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent transition-opacity duration-500 ${scrolled ? "opacity-90 shadow-[0_0_12px_#3B82F6]" : "opacity-0"}`} />

                <div className="mx-auto max-w-7xl px-6 lg:px-12 flex items-center justify-between gap-4">

                    {/* Logo Section */}
                    <div className="relative group shrink-0">
                        <Link href="/" className="flex items-center py-1">
                            <div className="relative w-48 h-12 sm:w-56 sm:h-14 flex items-center">
                                <Image
                                    src="https://i.ibb.co/0jyqw7Kr/image.png"
                                    alt="Experts Roofing Logo"
                                    fill
                                    className="object-contain object-left drop-shadow-[0_6px_16px_rgba(0,0,0,0.6)] brightness-110"
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden xl:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="relative text-[14px] tracking-wide font-medium text-zinc-100 hover:text-white transition-colors duration-300 group py-1 drop-shadow-sm"
                            >
                                {link.label}
                                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] transition-all duration-300 group-hover:w-full rounded-full shadow-[0_0_8px_#3B82F6]" />
                            </Link>
                        ))}
                    </nav>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3">
                        {/* Call Now Button */}
                        <a
                            href={PHONE_HREF}
                            className="hidden lg:flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/90 backdrop-blur-md px-4.5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:border-[#3B82F6] transition-all shadow-md"
                        >
                            <Phone className="w-3.5 h-3.5 text-[#3B82F6]" strokeWidth={2.2} />
                            Call Now
                        </a>

                        {/* High-Visibility Free Estimate Button */}
                        <Link
                            href="/contact"
                            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white text-slate-900 hover:bg-blue-50 px-5 py-2.5 text-xs font-black uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 border border-white"
                        >
                            <FileText className="w-3.5 h-3.5 text-blue-600" strokeWidth={2.5} />
                            Free Estimate
                        </Link>

                        {/* Book Online Button */}
                        <Link
                            href="/contact"
                            className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#3B82F6] hover:from-[#2563EB] hover:to-[#1D4ED8] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_4px_20px_rgba(37,99,235,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 border border-blue-400/30"
                        >
                            <Calendar className="w-3.5 h-3.5" strokeWidth={2.2} />
                            Book Online
                            <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            aria-label="Toggle menu"
                            onClick={() => setMobileOpen((v) => !v)}
                            className="xl:hidden flex items-center justify-center w-11 h-11 rounded-full border border-white/30 text-white bg-slate-900/80 backdrop-blur-md transition-colors shadow-md"
                        >
                            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
                        className="xl:hidden overflow-hidden bg-[#05070B] border-b border-[#3B82F6]/30 shadow-2xl"
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
                                        className="flex items-center justify-between py-3.5 border-b border-zinc-800 text-zinc-200 text-[15px] font-medium hover:text-[#60A5FA] transition-colors"
                                    >
                                        {link.label}
                                        <ArrowUpRight className="w-4 h-4 text-[#3B82F6]" />
                                    </Link>
                                </motion.div>
                            ))}

                            {/* Mobile Action Buttons */}
                            <div className="mt-6 space-y-3">
                                <a
                                    href={PHONE_HREF}
                                    className="flex items-center justify-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 py-3 text-xs font-bold uppercase tracking-wider text-zinc-200"
                                >
                                    <Phone className="w-4 h-4 text-[#3B82F6]" />
                                    Call Now ({PHONE_NUM})
                                </a>
                                <div className="grid grid-cols-2 gap-3">
                                    <Link
                                        href="/contact"
                                        onClick={() => setMobileOpen(false)}
                                        className="flex items-center justify-center gap-2 rounded-full bg-white py-3 text-xs font-black uppercase tracking-wider text-slate-900 shadow-md"
                                    >
                                        <FileText className="w-4 h-4 text-blue-600" />
                                        Free Estimate
                                    </Link>
                                    <Link
                                        href="/contact"
                                        onClick={() => setMobileOpen(false)}
                                        className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#3B82F6] py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg"
                                    >
                                        <Calendar className="w-4 h-4" />
                                        Book Online
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}