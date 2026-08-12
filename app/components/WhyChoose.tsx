"use client";

import { motion } from "framer-motion";
import {
    Award,
    HeartHandshake,
    Clock,
    ShieldCheck,
    Sparkles,
    Zap,
    DollarSign,
    type LucideIcon,
} from "lucide-react";

type FeatureItem = {
    title: string;
    description: string;
    icon: LucideIcon;
};

const ROW_1: FeatureItem[] = [
    {
        title: "Certified Contractor",
        description: "Experienced, reliable, and focused on premium quality on every job.",
        icon: Award,
    },
    {
        title: "Customer Satisfaction",
        description: "Clean work, clear communication, no shortcuts, ever.",
        icon: HeartHandshake,
    },
    {
        title: "One Stop Shop",
        description: "Repairs, upgrades, and full project builds, all in one place.",
        icon: Clock,
    },
    {
        title: "24/7 Support",
        description: "Rapid response and guidance for emergency roofing needs.",
        icon: ShieldCheck,
    },
];

const ROW_2: FeatureItem[] = [
    {
        title: "Affordable Cost",
        description: "Transparent pricing with no hidden fees, ever.",
        icon: DollarSign,
    },
    {
        title: "Fast Execution",
        description: "Streamlined workflow for swift completion, top standards kept.",
        icon: Zap,
    },
];

const HEX_W = 210; // hexagon width in px
const HEX_H = HEX_W * 1.02; // slightly taller than wide, flat top/bottom
const GAP = 16;

const hexClip =
    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";

function Hex({ item, index }: { item: FeatureItem; index: number }) {
    const Icon = item.icon;
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="group relative flex-shrink-0"
            style={{ width: HEX_W, height: HEX_H }}
        >
            <div
                className="absolute inset-0 bg-white/90 backdrop-blur-xl border border-zinc-200 group-hover:border-blue-400 transition-colors duration-400 flex flex-col items-center justify-center text-center px-7 shadow-sm group-hover:shadow-[0_15px_30px_-10px_rgba(37,99,235,0.12)]"
                style={{ clipPath: hexClip }}
            >
                <div className="w-12 h-12 mb-3 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-all duration-300">
                    <Icon className="w-5.5 h-5.5" strokeWidth={1.9} />
                </div>
                <h3 className="text-zinc-900 font-semibold text-[13.5px] leading-snug mb-1.5 group-hover:text-[#2563eb] transition-colors">
                    {item.title}
                </h3>
                <p className="text-zinc-600 text-[10.5px] leading-relaxed max-w-[150px]">
                    {item.description}
                </p>
            </div>
        </motion.div>
    );
}

export default function WhyChooseUs() {
    return (
        <section className="relative bg-[#ffffff] py-24 lg:py-32 overflow-hidden">
            {/* Sticky Background Image with Light Professional Overlays matching your other sections */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="sticky top-0 h-screen w-full">
                    <img
                        src="https://i.ibb.co/TDVpL04r/image.png"
                        alt="Why choose us background"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ffffff]/95 via-[#ffffff]/80 to-[#ffffff]/60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#ffffff] via-transparent to-[#ffffff]/30" />
                </div>
            </div>

            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/[0.03] blur-[160px] z-10" />

            <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-10">
                {/* ---------- Header ---------- */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-16 lg:mb-20"
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-[11px] font-semibold tracking-[0.28em] uppercase text-[#2563eb] mb-4">
                        <Sparkles className="w-3.5 h-3.5" strokeWidth={2} />
                        DFW's Top Rated Roofing Contractor
                    </span>
                    <h2 className="text-[#111827] font-extrabold text-3xl sm:text-5xl tracking-tight mb-4">
                        Why Choose{" "}
                        <span className="text-[#2563eb]">
                            Us
                        </span>
                    </h2>
                    <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                        Delivering unmatched precision, reliability, and craftsmanship on
                        every roof we touch.
                    </p>
                </motion.div>

                {/* ---------- Honeycomb hexagon grid ---------- */}
                {/* Desktop / tablet: true interlocked honeycomb with adjusted second row spacing */}
                <div className="hidden md:flex flex-col items-center">
                    <div className="flex" style={{ gap: GAP }}>
                        {ROW_1.map((item, i) => (
                            <Hex key={item.title} item={item} index={i} />
                        ))}
                    </div>
                    <div
                        className="flex"
                        style={{
                            gap: GAP,
                            marginTop: -HEX_H * 0.22, // Adjusted vertically so it sits neatly centered below row 1
                            transform: `translateX(${HEX_W * 0.55}px)`, // Centered nicely for 2 items in row 2
                        }}
                    >
                        {ROW_2.map((item, i) => (
                            <Hex key={item.title} item={item} index={i + 4} />
                        ))}
                    </div>
                </div>

                {/* Mobile: simple stacked grid */}
                <div className="grid grid-cols-2 gap-4 md:hidden">
                    {[...ROW_1, ...ROW_2].map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06, duration: 0.45 }}
                                className="rounded-2xl border border-zinc-200 bg-white/90 backdrop-blur-xl p-5 flex flex-col items-center text-center group shadow-sm"
                            >
                                <div className="w-11 h-11 mb-3 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-all duration-300">
                                    <Icon className="w-5 h-5" strokeWidth={1.9} />
                                </div>
                                <h3 className="text-zinc-900 font-semibold text-[13.5px] mb-1.5 group-hover:text-[#2563eb] transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-zinc-600 text-[11px] leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}