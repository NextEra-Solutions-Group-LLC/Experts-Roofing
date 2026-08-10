'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Phone, CalendarDays, X, Send, User, Mail, MessageSquare } from 'lucide-react';


const PHONE_DISPLAY = "817-768-0413";
const PHONE_TEL = "tel:+18177680413";
const EMAIL_CONTACT = "raul.gill.2020@gmail.com";

interface FormState {
    name: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    message: string;
}

const initialForm: FormState = {
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
};

export default function FloatingActions() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form, setForm] = useState<FormState>(initialForm);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Appointment request:", form);
        setSubmitted(true);
        setTimeout(() => {
            setIsModalOpen(false);
            setSubmitted(false);
            setForm(initialForm);
        }, 2000);
    };

    const handleDirectCall = () => {
        window.location.href = PHONE_TEL;
    };

    return (
        <>
            {/* ---------------- Floating action cluster ---------------- */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
                {/* Book Appointment Button */}
                <motion.button
                    onClick={() => setIsModalOpen(true)}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="flex items-center gap-2 rounded-full px-5 py-3.5 text-[#0B1220] font-bold shadow-xl shadow-[#1d4ed8]/30 backdrop-blur-md border border-[#1d4ed8]/40 bg-[#1d4ed8] transition-all hover:bg-[#1e40af] hover:text-white"
                >
                    <CalendarDays className="h-5 w-5 shrink-0 text-white" />
                    <span className="hidden sm:inline whitespace-nowrap text-white">
                        Book Appointment
                    </span>
                </motion.button>

                {/* Direct Call Button (Mobile Only) */}
                <motion.button
                    onClick={handleDirectCall}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    className="relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg shadow-[#1d4ed8]/30 sm:hidden border border-[#1d4ed8]/50 bg-[#1d4ed8] backdrop-blur-md"
                    aria-label={`Call ${PHONE_DISPLAY}`}
                >
                    <span
                        className="absolute inset-0 rounded-full animate-ping opacity-40 bg-[#1d4ed8]"
                    />
                    <Phone className="h-6 w-6 relative z-10 text-white" />
                </motion.button>
            </div>

            {/* ---------------- Modal ---------------- */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* backdrop */}
                        <motion.div
                            className="absolute inset-0 bg-black/70 backdrop-blur-md"
                            onClick={() => setIsModalOpen(false)}
                        />

                        {/* modal card with glass effect */}
                        <motion.div
                            initial={{ opacity: 0, y: 40, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.96 }}
                            transition={{ type: "spring", damping: 24, stiffness: 260 }}
                            className="relative w-full max-w-lg rounded-3xl bg-[#0B1220]/95 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden text-neutral-100"
                        >
                            {/* header */}
                            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#0B1220]">
                                <div className="flex items-center gap-3">
                                    <CalendarDays className="h-6 w-6 text-[#1d4ed8]" />
                                    <h2 className="text-lg font-bold text-white">Book an Appointment</h2>
                                </div>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="text-neutral-300 hover:text-white transition-colors p-1.5 rounded-full bg-white/5 hover:bg-white/10"
                                    aria-label="Close"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            {/* body */}
                            <div className="p-6">
                                {submitted ? (
                                    <div className="flex flex-col items-center gap-3 py-10 text-center">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#1d4ed8]/30 bg-[#1d4ed8]/10">
                                            <Send className="h-6 w-6 text-[#1d4ed8]" />
                                        </div>
                                        <p className="text-lg font-semibold text-white">
                                            Request sent!
                                        </p>
                                        <p className="text-sm text-neutral-300">
                                            We&apos;ll follow up within one business day.
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="relative">
                                            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                                            <input
                                                required
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                placeholder="Full name"
                                                className="w-full rounded-xl border border-white/10 bg-black/30 py-3.5 pl-10 pr-4 text-sm text-white placeholder-neutral-400 outline-none focus:border-[#1d4ed8] transition-colors"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="relative">
                                                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                                                <input
                                                    required
                                                    type="email"
                                                    name="email"
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    placeholder={EMAIL_CONTACT}
                                                    className="w-full rounded-xl border border-white/10 bg-black/30 py-3.5 pl-10 pr-4 text-sm text-white placeholder-neutral-400 outline-none focus:border-[#1d4ed8] transition-colors"
                                                />
                                            </div>
                                            <div className="relative">
                                                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                                                <input
                                                    required
                                                    type="tel"
                                                    name="phone"
                                                    value={form.phone}
                                                    onChange={handleChange}
                                                    placeholder={PHONE_DISPLAY}
                                                    className="w-full rounded-xl border border-white/10 bg-black/30 py-3.5 pl-10 pr-4 text-sm text-white placeholder-neutral-400 outline-none focus:border-[#1d4ed8] transition-colors"
                                                />
                                            </div>
                                        </div>

                                        {/* calendar / preferred date & time */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="mb-1.5 block text-xs font-bold text-neutral-300 uppercase tracking-wider">
                                                    Preferred date
                                                </label>
                                                <input
                                                    required
                                                    type="date"
                                                    name="date"
                                                    value={form.date}
                                                    onChange={handleChange}
                                                    min={new Date().toISOString().split("T")[0]}
                                                    className="w-full rounded-xl border border-white/10 bg-black/30 py-3.5 px-3.5 text-sm text-white outline-none focus:border-[#1d4ed8] transition-colors"
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-1.5 block text-xs font-bold text-neutral-300 uppercase tracking-wider">
                                                    Preferred time
                                                </label>
                                                <input
                                                    required
                                                    type="time"
                                                    name="time"
                                                    value={form.time}
                                                    onChange={handleChange}
                                                    className="w-full rounded-xl border border-white/10 bg-black/30 py-3.5 px-3.5 text-sm text-white outline-none focus:border-[#1d4ed8] transition-colors"
                                                />
                                            </div>
                                        </div>

                                        <div className="relative">
                                            <MessageSquare className="absolute left-3.5 top-3.5 h-4 w-4 text-neutral-400" />
                                            <textarea
                                                name="message"
                                                value={form.message}
                                                onChange={handleChange}
                                                placeholder="Tell us about your roof (optional)"
                                                rows={3}
                                                className="w-full resize-none rounded-xl border border-white/10 bg-black/30 py-3.5 pl-10 pr-4 text-sm text-white placeholder-neutral-400 outline-none focus:border-[#1d4ed8] transition-colors"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="flex w-full items-center justify-center gap-2 rounded-xl py-3.5 font-bold text-white transition-all hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-[#1d4ed8]/20 bg-[#1d4ed8] hover:bg-[#1e40af]"
                                        >
                                            <Send className="h-4 w-4 text-white" />
                                            Request Appointment
                                        </button>

                                        {/* quick direct-call shortcut inside modal */}
                                        <button
                                            type="button"
                                            onClick={handleDirectCall}
                                            className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-black/30 py-3.5 text-sm font-medium text-neutral-300 hover:bg-black/50 hover:text-white transition-colors"
                                        >
                                            <Phone className="h-4 w-4 text-[#1d4ed8]" />
                                            Or call us now — {PHONE_DISPLAY}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}