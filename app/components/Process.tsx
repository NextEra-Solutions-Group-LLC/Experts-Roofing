"use client";

import { motion } from "framer-motion";
import {
    MessageSquare,
    ClipboardList,
    PackageCheck,
    Wrench,
    type LucideIcon,
} from "lucide-react";

type Step = {
    number: string;
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
};

const STEPS: Step[] = [
    {
        number: "1",
        title: "Contact Us",
        description:
            "Submit an estimate request form. We'll then give you a call to learn more about your project and schedule your consultation.",
        icon: MessageSquare,
        color: "#2563eb",
    },
    {
        number: "2",
        title: "Consultation",
        description:
            "Meet for an in-person estimate where we take measurements and learn everything you're looking to have done.",
        icon: ClipboardList,
        color: "#2563eb",
    },
    {
        number: "3",
        title: "Deposit",
        description:
            "Pay your deposit, get scheduled, and we'll get prepared to provide you with top-notch service.",
        icon: PackageCheck,
        color: "#2563eb",
    },
    {
        number: "4",
        title: "Install",
        description:
            "Sit back, relax, and let our team handle everything so you can enjoy your new and updated property.",
        icon: Wrench,
        color: "#2563eb",
    },
];

export default function OurProcess() {
    return (
        <section className="relative bg-[#ffffff] py-24 lg:py-32 overflow-hidden">
            {/* Sticky Background Image with Light Professional Overlays */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="sticky top-0 h-screen w-full">
                    <img
                        src="https://i.ibb.co.com/TMCZk9GJ/image.png"
                        alt="Background map"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ffffff]/95 via-[#ffffff]/80 to-[#ffffff]/60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#ffffff] via-transparent to-[#ffffff]/30" />
                </div>
            </div>

            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-500/[0.04] blur-[160px] z-10" />

            <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-10">
                {/* ---------- Header ---------- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="mb-20 text-center sm:text-left"
                >
                    <p className="text-[#2563eb] font-semibold text-[14px] uppercase tracking-wider mb-3">
                        Efficient Solutions.
                    </p>
                    <h2 className="text-[#111827] font-extrabold text-3xl sm:text-5xl tracking-tight">
                        Our{" "}
                        <span className="text-[#2563eb]">
                            Process
                        </span>
                    </h2>
                </motion.div>

                {/* ---------- Step cards ---------- */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                    {STEPS.map((s, i) => {
                        const Icon = s.icon;
                        return (
                            <motion.div
                                key={s.number}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                                className="relative pt-8 group"
                            >
                                {/* ---- circle badge with flag arrow, overlapping card top ---- */}
                                <div className="relative flex justify-center mb-[-30px] z-20">
                                    <div className="relative">
                                        <div
                                            className="w-[60px] h-[60px] rounded-full bg-white border-[3px] border-[#2563eb] flex items-center justify-center shadow-[0_8px_20px_-4px_rgba(37,99,235,0.18)] group-hover:bg-[#2563eb] transition-all duration-300"
                                        >
                                            <Icon className="w-5.5 h-5.5 text-[#2563eb] group-hover:text-white transition-colors duration-300" strokeWidth={1.8} />
                                        </div>
                                        {/* flag/arrow tag flush against circle's right edge */}
                                        <div
                                            className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-[13px] w-0 h-0"
                                            style={{
                                                borderTop: "9px solid transparent",
                                                borderBottom: "9px solid transparent",
                                                borderLeft: "13px solid #2563eb",
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* ---- card body ---- */}
                                <div className="relative rounded-2xl bg-white/90 backdrop-blur-xl border border-zinc-200 px-6 pt-11 pb-7 text-center shadow-[0_15px_40px_-15px_rgba(0,0,0,0.07)] group-hover:border-blue-400 group-hover:shadow-[0_20px_50px_-15px_rgba(37,99,235,0.12)] transition-all duration-300">
                                    <h3
                                        className="font-bold text-[13.5px] tracking-wide mb-3 text-zinc-900 group-hover:text-[#2563eb] transition-colors"
                                    >
                                        {s.number}. {s.title}
                                    </h3>
                                    <p className="text-zinc-600 text-[12.5px] leading-relaxed">
                                        {s.description}
                                    </p>

                                    {/* looping accent line wrapping bottom-left of the card */}
                                    <svg
                                        className="absolute -bottom-2 -left-2 w-[calc(100%+8px)] h-10 pointer-events-none"
                                        viewBox="0 0 200 40"
                                        preserveAspectRatio="none"
                                    >
                                        <path
                                            d="M 0 -20 L 0 28 Q 0 34 6 34 L 190 34"
                                            fill="none"
                                            stroke="#2563eb"
                                            strokeWidth="2"
                                            strokeOpacity="0.3"
                                        />
                                    </svg>
                                    {/* connector dot at end of loop */}
                                    <span
                                        className="absolute -bottom-[9px] right-3 w-3 h-3 rounded-full border-2 border-white bg-[#2563eb]"
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}