"use client";

import { useState } from 'react';
import { motion } from "framer-motion";

interface Hour {
    day: string;
    time: string;
}

interface RoofingContactProps {
    heading?: string;
    intro?: string;
    phone?: string;
    email?: string;
    address?: string;
    hours?: Hour[];
    onSubmit?: (data: { name: string; phone: string; email: string; message: string }) => void;
}

const defaultHours: Hour[] = [
    { day: 'Monday', time: '7:00 AM – 6:00 PM' },
    { day: 'Tuesday', time: '7:00 AM – 6:00 PM' },
    { day: 'Wednesday', time: '7:00 AM – 6:00 PM' },
    { day: 'Thursday', time: '7:00 AM – 6:00 PM' },
    { day: 'Friday', time: '7:00 AM – 6:00 PM' },
    { day: 'Saturday', time: '8:00 AM – 3:00 PM' },
    { day: 'Sunday', time: 'Closed — Emergency Calls Only' },
];

function Icon({ path }: { path: string }) {
    return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d={path} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default function RoofingContactSectionWhite({
    heading = 'Contact Us',
    intro = "If you have any questions, please feel free to get in touch with us by phone, text, email, or the form below — a real roofer will get back to you.",
    phone = '347-7663-669',
    email = 'contact@expertsroofing.us',
    address = 'Dallas, TX',
    hours = defaultHours,
    onSubmit,
}: RoofingContactProps) {
    const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
    const [sent, setSent] = useState(false);
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit?.(form);
        setSent(true);
        setForm({ name: '', phone: '', email: '', message: '' });
        window.setTimeout(() => setSent(false), 4000);
    };

    return (
        <div className="relative w-full text-neutral-900 font-sans">

            {/* Contact Section (Pure White Aesthetic with significantly increased top padding to push content further down, and darker gray background) */}
            <section
                id="contact"
                className="relative z-10 w-full bg-slate-200 pt-48 pb-20 md:pt-56 md:pb-28 px-6 border-t border-slate-300"
            >
                <div className="max-w-6xl mx-auto">

                    {/* Top Heading */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-[30px] items-start mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-5xl font-black uppercase tracking-wide text-neutral-900"
                        >
                            {heading}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-neutral-600 leading-relaxed text-sm md:text-base"
                        >
                            {intro}
                        </motion.p>
                    </div>

                    {/* Form & Info Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6">

                        {/* Form Panel */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white border border-slate-200 rounded-2xl p-7 md:p-8 shadow-lg"
                        >
                            <h3 className="text-xs md:text-sm font-extrabold uppercase tracking-wider mb-6 text-[#1d4ed8]">
                                Send Us A Message
                            </h3>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1.5">
                                        <label htmlFor="c-name" className="text-xs text-neutral-600 font-medium">Your Name</label>
                                        <input
                                            id="c-name"
                                            type="text"
                                            required
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            className="border border-slate-300 rounded-lg p-3 text-sm bg-white text-neutral-900 focus:outline-none focus:border-[#1d4ed8] focus:ring-2 focus:ring-[#1d4ed8]/20 transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label htmlFor="c-phone" className="text-xs text-neutral-600 font-medium">Phone Number</label>
                                        <input
                                            id="c-phone"
                                            type="tel"
                                            value={form.phone}
                                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                            className="border border-slate-300 rounded-lg p-3 text-sm bg-white text-neutral-900 focus:outline-none focus:border-[#1d4ed8] focus:ring-2 focus:ring-[#1d4ed8]/20 transition-all"
                                            placeholder="(555) 000-0000"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="c-email" className="text-xs text-neutral-600 font-medium">Your Email</label>
                                    <input
                                        id="c-email"
                                        type="email"
                                        required
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        className="border border-slate-300 rounded-lg p-3 text-sm bg-white text-neutral-900 focus:outline-none focus:border-[#1d4ed8] focus:ring-2 focus:ring-[#1d4ed8]/20 transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="c-message" className="text-xs text-neutral-600 font-medium">Your Message</label>
                                    <textarea
                                        id="c-message"
                                        rows={4}
                                        required
                                        value={form.message}
                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        className="border border-slate-300 rounded-lg p-3 text-sm bg-white text-neutral-900 focus:outline-none focus:border-[#1d4ed8] focus:ring-2 focus:ring-[#1d4ed8]/20 transition-all"
                                        placeholder="Tell us about your roofing project..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="self-start bg-[#1d4ed8] hover:bg-[#1e40af] text-white border-none rounded-lg py-3 px-8 font-black uppercase text-xs md:text-sm tracking-wider cursor-pointer transition-all hover:-translate-y-0.5 shadow-md"
                                >
                                    {sent ? 'Message Sent ✓' : 'Send Message'}
                                </button>
                            </form>
                        </motion.div>

                        {/* Info & Working Hours Panel */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-white border border-slate-200 rounded-2xl p-7 md:p-8 flex flex-col gap-8 shadow-lg"
                        >
                            {/* Contact Details */}
                            <div>
                                <h3 className="text-xs md:text-sm font-extrabold uppercase tracking-wider mb-5 text-[#1d4ed8]">
                                    Contact Information
                                </h3>
                                <ul className="flex flex-col gap-4 list-none p-0 m-0">
                                    <li className="flex gap-3.5 items-start">
                                        <span className="w-9 h-9 min-w-[36px] rounded-xl bg-[#1d4ed8]/10 text-[#1d4ed8] flex items-center justify-center">
                                            <Icon path="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c1 .4 2 .6 3 .7a2 2 0 0 1 1.7 2z" />
                                        </span>
                                        <div>
                                            <p className="text-[10px] md:text-xs uppercase tracking-wider text-neutral-500 font-medium">Phone</p>
                                            <p className="text-neutral-900 font-medium text-sm">{phone}</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3.5 items-start">
                                        <span className="w-9 h-9 min-w-[36px] rounded-xl bg-[#1d4ed8]/10 text-[#1d4ed8] flex items-center justify-center">
                                            <Icon path="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z" />
                                        </span>
                                        <div>
                                            <p className="text-[10px] md:text-xs uppercase tracking-wider text-neutral-500 font-medium">Address</p>
                                            <p className="text-neutral-900 font-medium text-sm">{address}</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3.5 items-start">
                                        <span className="w-9 h-9 min-w-[36px] rounded-xl bg-[#1d4ed8]/10 text-[#1d4ed8] flex items-center justify-center">
                                            <Icon path="M4 4h16v16H4z M22 6l-10 7L2 6" />
                                        </span>
                                        <div>
                                            <p className="text-[10px] md:text-xs uppercase tracking-wider text-neutral-500 font-medium">Email</p>
                                            <p className="text-neutral-900 font-medium text-sm">{email}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Working Hours & Week Days */}
                            <div>
                                <h3 className="text-xs md:text-sm font-extrabold uppercase tracking-wider mb-4 text-[#1d4ed8]">
                                    Working Hours
                                </h3>
                                <ul className="flex flex-col gap-2.5 list-none p-0 m-0 text-xs md:text-sm">
                                    {hours.map((h) => (
                                        <li
                                            key={h.day}
                                            className={`flex justify-between py-1.5 border-b border-slate-100 ${h.day === today ? 'text-[#1d4ed8] font-bold' : 'text-neutral-700'}`}
                                        >
                                            <span>{h.day}</span>
                                            <span>{h.time}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                    </div>

                </div>
            </section>
        </div>
    );
}