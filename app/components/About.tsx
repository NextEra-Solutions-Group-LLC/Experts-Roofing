"use client";

import {
    CheckCircle2,
    ArrowUpRight,
    ShieldCheck,
    HardHat,
    Layers,
    Wrench,
    Award,
    Clock,
} from "lucide-react";

const BULLETS = [
    "Certified roofing crews with 20+ years combined field experience",
    "Premium materials sourced from top-tier manufacturers",
    "Transparent quoting with no hidden costs, ever",
    "Licensed, bonded, and fully insured across the DFW area",
];

const PARTNERS = [
    { icon: ShieldCheck, label: "GAF Certified" },
    { icon: Award, label: "CertainTeed" },
    { icon: HardHat, label: "Owens Corning" },
    { icon: Layers, label: "BBB A+ Rated" },
    { icon: Wrench, label: "Licensed & Insured" },
    { icon: Clock, label: "24/7 Response" },
];

export default function About() {
    return (
        <section className="relative bg-[#0B0C0F] py-24 lg:py-32 overflow-hidden">
            {/* Sticky Background Image with Dark Professional Overlays */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="sticky top-0 h-screen w-full">
                    <img
                        src="https://i.ibb.co/HDbXJwcy/image.png"
                        alt="Roofing background"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C0F] via-[#0B0C0F]/90 to-[#0B0C0F]/70" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0F] via-transparent to-[#0B0C0F]" />
                </div>
            </div>

            <div className="pointer-events-none absolute top-1/3 -left-40 w-[600px] h-[600px] rounded-full bg-[#3b82f6]/[0.05] blur-[140px] z-10" />

            <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* ---------- Left: eyebrow, heading, images ---------- */}
                    <div>
                        <span className="inline-block text-[12px] font-semibold tracking-[0.3em] uppercase text-[#3b82f6] mb-4">
                            About Us
                        </span>

                        <h2 className="text-[#ffffff] font-extrabold text-3xl sm:text-[2.6rem] leading-[1.12] tracking-tight mb-10">
                            We Are:
                            <br />
                            <span className="bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-[#93c5fd] bg-clip-text text-transparent">
                                Experts Roofing
                            </span>
                        </h2>

                        <div className="grid grid-cols-5 gap-4">
                            <div className="col-span-3 relative rounded-2xl overflow-hidden border border-[#3b82f6]/20 aspect-[4/5]">
                                <img
                                    src="https://i.ibb.co/whLC0NLq/image.png"
                                    alt="Roofing crew installing shingles"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0F]/60 via-transparent to-transparent" />
                            </div>
                            <div className="col-span-2 relative rounded-2xl overflow-hidden border border-[#3b82f6]/20 aspect-[4/5] self-end">
                                <img
                                    src="https://i.ibb.co/dwJ2BwWF/image.png"
                                    alt="Completed residential roof"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0F]/60 via-transparent to-transparent" />
                            </div>
                        </div>
                    </div>

                    {/* ---------- Right: description, bullets, CTA ---------- */}
                    <div>
                        <div className="flex items-start justify-between gap-6 mb-6">
                            <h3 className="text-[#ffffff] font-bold text-2xl sm:text-[1.7rem] leading-snug">
                                Reliable Protection Built on Real Craftsmanship
                            </h3>
                            <a
                                href="/about"
                                className="hidden sm:inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-[12px] font-semibold tracking-[0.06em] uppercase text-white bg-gradient-to-r from-[#2563eb] to-[#3b82f6] hover:opacity-90 transition-all duration-300 shadow-lg shadow-[#3b82f6]/25"
                            >
                                Learn About Us
                                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                            </a>
                        </div>

                        <p className="text-[#9ca3af] text-[15px] leading-relaxed mb-7">
                            Experts Roofing specializes in residential and commercial
                            roofing services throughout the DFW area, delivering quality
                            workmanship, reliable service, and long-lasting protection on
                            every project.
                        </p>

                        <ul className="space-y-3.5 mb-8">
                            {BULLETS.map((b) => (
                                <li key={b} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-4.5 h-4.5 text-[#3b82f6] mt-0.5 shrink-0" strokeWidth={2} />
                                    <span className="text-[#d1d5db] text-[14.5px] leading-relaxed">
                                        {b}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <p className="text-[#9ca3af] text-[14.5px] leading-relaxed border-t border-[#3b82f6]/15 pt-7">
                            By combining hands-on{" "}
                            <span className="text-[#60a5fa] font-medium">
                                roofing expertise
                            </span>{" "}
                            with premium materials, we deliver systems built to protect
                            Dallas-Fort Worth homes for decades to come.
                        </p>
                    </div>
                </div>

                {/* ---------- Bottom: trust row + partner chips ---------- */}
                <div className="mt-20 pt-12 border-t border-[#3b82f6]/15 grid md:grid-cols-[280px_1fr] gap-10 items-center">
                    <div>
                        <h4 className="text-[#ffffff] font-semibold text-lg mb-5">
                            Trusted Across DFW
                        </h4>
                        <div className="flex items-center gap-3">
                            <div className="flex -space-x-3">
                                {["A", "B", "C", "D"].map((letter) => (
                                    <div
                                        key={letter}
                                        className="w-9 h-9 rounded-full border-2 border-[#0B0C0F] bg-gradient-to-br from-[#3b82f6]/50 to-[#0B0C0F] flex items-center justify-center text-[11px] font-semibold text-[#ffffff]"
                                    >
                                        {letter}
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[#60a5fa] font-bold text-lg">500+</span>
                                <span className="text-[#9ca3af] text-[13px]">
                                    Happy Customers
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                        {PARTNERS.map((p) => (
                            <div
                                key={p.label}
                                className="flex flex-col items-center justify-center gap-2 rounded-xl border border-[#3b82f6]/15 bg-[#141519]/80 backdrop-blur-md px-3 py-4 hover:border-[#3b82f6]/40 transition-colors duration-300"
                            >
                                <p.icon className="w-4.5 h-4.5 text-[#60a5fa]" strokeWidth={1.7} />
                                <span className="text-[10px] font-medium tracking-wide text-[#9ca3af] text-center leading-tight">
                                    {p.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}