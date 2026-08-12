"use client";

import { motion } from "framer-motion";
import { MapPin, Radar } from "lucide-react";

type CityPin = {
    name: string;
    state: string;
    top: string; // % position within the map
    left: string;
    primary?: boolean;
};

const CITIES: CityPin[] = [
    { name: "Dallas", state: "TX", top: "50%", left: "50%", primary: true },
    { name: "Fort Worth", state: "TX", top: "56%", left: "24%" },
    { name: "Arlington", state: "TX", top: "68%", left: "38%" },
    { name: "Plano", state: "TX", top: "25%", left: "62%" },
    { name: "Irving", state: "TX", top: "48%", left: "41%" },
    { name: "Frisco", state: "TX", top: "15%", left: "53%" },
    { name: "McKinney", state: "TX", top: "18%", left: "73%" },
    { name: "Denton", state: "TX", top: "20%", left: "28%" },
];

export default function ServiceArea() {
    return (
        <section className="relative bg-[#ffffff] py-24 lg:py-32 overflow-hidden">
            {/* Sticky Background Image with Light Professional Overlays */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="sticky top-0 h-screen w-full">
                    <img
                        src="https://i.ibb.co/5XmGTXf7/image.png"
                        alt="Service area background map"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ffffff]/95 via-[#ffffff]/80 to-[#ffffff]/60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#ffffff] via-transparent to-[#ffffff]/30" />
                </div>
            </div>

            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-blue-500/[0.03] blur-[160px] z-10" />

            <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-10">
                {/* ---------- Header ---------- */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-xl mx-auto mb-14"
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-[11px] font-semibold tracking-[0.28em] uppercase text-[#2563eb] mb-5">
                        <Radar className="w-3.5 h-3.5" strokeWidth={2} />
                        DFW Service Area
                    </span>
                    <h2 className="text-[#111827] font-extrabold text-3xl sm:text-[2.6rem] leading-[1.12] tracking-tight mb-4">
                        Our Service Areas
                    </h2>
                    <p className="text-[#4b5563] text-[15px] leading-relaxed">
                        Proudly serving Dallas, Fort Worth, and the surrounding
                        metroplex with fast, reliable roofing service.
                    </p>
                </motion.div>

                {/* ---------- Glass map card ---------- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="relative rounded-[28px] border border-zinc-200 bg-white/90 backdrop-blur-2xl p-3 sm:p-5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.07)] overflow-hidden"
                >
                    {/* hairline top accent */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

                    <div className="relative w-full aspect-[16/10] sm:aspect-[16/8] rounded-3xl overflow-hidden bg-slate-50 border border-zinc-100">
                        {/* dot grid background */}
                        <svg
                            className="absolute inset-0 w-full h-full opacity-[0.45]"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <pattern
                                    id="dotgrid"
                                    width="26"
                                    height="26"
                                    patternUnits="userSpaceOnUse"
                                >
                                    <circle cx="1.5" cy="1.5" r="1.1" fill="#2563eb" fillOpacity="0.25" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#dotgrid)" />
                        </svg>

                        {/* soft radial glow behind Dallas center */}
                        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full bg-blue-500/10 blur-[90px]" />

                        {/* connecting lines from Dallas hub to satellite cities */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none">
                            {CITIES.filter((c) => !c.primary).map((c) => (
                                <line
                                    key={c.name}
                                    x1="50%"
                                    y1="50%"
                                    x2={c.left}
                                    y2={c.top}
                                    stroke="#2563eb"
                                    strokeOpacity="0.3"
                                    strokeWidth="1"
                                    strokeDasharray="4 5"
                                />
                            ))}
                        </svg>

                        {/* city pins */}
                        {CITIES.map((city, i) => (
                            <motion.div
                                key={city.name}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.15 + i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group z-30 cursor-pointer"
                                style={{ top: city.top, left: city.left }}
                            >
                                {/* label */}
                                <div
                                    className={`mb-2 rounded-xl px-3.5 py-1.5 text-[11.5px] font-semibold tracking-wide whitespace-nowrap backdrop-blur-xl border transition-all duration-300 group-hover:scale-105 group-hover:border-[#2563eb] shadow-md ${city.primary
                                        ? "bg-blue-600 border-blue-400 text-white shadow-blue-500/20"
                                        : "bg-white/95 border-zinc-200 text-zinc-800"
                                        }`}
                                >
                                    {city.name}, {city.state}
                                </div>

                                {/* pin */}
                                <div className="relative flex items-center justify-center">
                                    {city.primary && (
                                        <span className="absolute w-10 h-10 rounded-full bg-blue-400/30 animate-ping pointer-events-none" />
                                    )}
                                    <span
                                        className={`relative flex items-center justify-center rounded-full border transition-transform duration-300 group-hover:scale-110 ${city.primary
                                            ? "w-9 h-9 bg-gradient-to-br from-[#1d4ed8] to-[#2563eb] border-blue-200 shadow-lg shadow-blue-500/30"
                                            : "w-7 h-7 bg-white border-blue-200 shadow-sm"
                                            }`}
                                    >
                                        <MapPin
                                            className={city.primary ? "w-4 h-4 text-white" : "w-3.5 h-3.5 text-[#2563eb]"}
                                            strokeWidth={2.5}
                                            fill={city.primary ? "currentColor" : "none"}
                                        />
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* bottom strip: quick city chips */}
                    <div className="flex flex-wrap items-center justify-center gap-2.5 pt-5 pb-2">
                        {CITIES.map((city) => (
                            <span
                                key={city.name}
                                className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-3.5 py-1.5 text-[11.5px] font-medium text-zinc-600 transition-colors hover:border-blue-400 hover:text-[#2563eb]"
                            >
                                <MapPin className="w-3 h-3 text-[#2563eb]" strokeWidth={2} />
                                {city.name}, {city.state}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}