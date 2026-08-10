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
        color: "#3b82f6",
    },
    {
        number: "2",
        title: "Consultation",
        description:
            "Meet for an in-person estimate where we take measurements and learn everything you're looking to have done.",
        icon: ClipboardList,
        color: "#3b82f6",
    },
    {
        number: "3",
        title: "Deposit",
        description:
            "Pay your deposit, get scheduled, and we'll get prepared to provide you with top-notch service.",
        icon: PackageCheck,
        color: "#3b82f6",
    },
    {
        number: "4",
        title: "Install",
        description:
            "Sit back, relax, and let our team handle everything so you can enjoy your new and updated property.",
        icon: Wrench,
        color: "#3b82f6",
    },
];

export default function OurProcess() {
    return (
        <section className="relative bg-[#0B0C0F] py-24 lg:py-32 overflow-hidden">
            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#3b82f6]/[0.05] blur-[160px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
                {/* ---------- Header ---------- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="mb-20"
                >
                    <p className="text-[#3b82f6] font-semibold text-[14px] uppercase tracking-wider mb-3">
                        Efficient Solutions.
                    </p>
                    <h2 className="text-white font-extrabold text-3xl sm:text-5xl tracking-tight">
                        Our{" "}
                        <span className="text-[#3b82f6]">
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
                                            className="w-[60px] h-[60px] rounded-full bg-[#141519] border-[3px] border-[#3b82f6] flex items-center justify-center shadow-[0_6px_18px_-4px_rgba(59,130,246,0.2)] group-hover:bg-[#3b82f6] transition-all duration-300"
                                        >
                                            <Icon className="w-5.5 h-5.5 text-[#60a5fa] group-hover:text-white transition-colors duration-300" strokeWidth={1.8} />
                                        </div>
                                        {/* flag/arrow tag flush against circle's right edge */}
                                        <div
                                            className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-[13px] w-0 h-0"
                                            style={{
                                                borderTop: "9px solid transparent",
                                                borderBottom: "9px solid transparent",
                                                borderLeft: "13px solid #3b82f6",
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* ---- card body ---- */}
                                <div className="relative rounded-2xl bg-[#141519]/90 backdrop-blur-xl border border-[#3b82f6]/20 px-6 pt-11 pb-7 text-center shadow-[0_15px_40px_-15px_rgba(0,0,0,0.7)] group-hover:border-[#3b82f6]/50 transition-all duration-300">
                                    <h3
                                        className="font-bold text-[13.5px] tracking-wide mb-3 text-white group-hover:text-[#60a5fa] transition-colors"
                                    >
                                        {s.number}. {s.title}
                                    </h3>
                                    <p className="text-[#9ca3af] text-[12.5px] leading-relaxed">
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
                                            stroke="#3b82f6"
                                            strokeWidth="2"
                                            strokeOpacity="0.4"
                                        />
                                    </svg>
                                    {/* connector dot at end of loop */}
                                    <span
                                        className="absolute -bottom-[9px] right-3 w-3 h-3 rounded-full border-2 border-[#0B0C0F] bg-[#3b82f6]"
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