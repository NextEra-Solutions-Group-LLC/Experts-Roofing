"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Project = {
    title: string;
    subtitle: string;
    src: string;
};

const projects: Project[] = [
    { title: "Residential Reroof", subtitle: "Cedar Park, TX", src: "https://i.ibb.co/TMCZk9GJ/image.png" },
    { title: "Storm Damage Repair", subtitle: "Round Rock, TX", src: "https://i.ibb.co/36Tkvk5/image.png" },
    { title: "Commercial Flat Roof", subtitle: "Austin, TX", src: "https://i.ibb.co/twcQMYCk/image.png" },
    { title: "Gutter Replacement", subtitle: "Leander, TX", src: "https://i.ibb.co/jmfkN9r/image.png" },
    { title: "Lakefront Home Roof", subtitle: "Lakeway, TX", src: "https://i.ibb.co/bjm1dBR9/image.png" },
    { title: "Custom Fencing", subtitle: "Liberty Hill, TX", src: "https://i.ibb.co/Q3d0r758/image.png" },
    { title: "Full Tear-Off & Reroof", subtitle: "Georgetown, TX", src: "https://i.ibb.co/JjHB6dDW/image.png" },
    { title: "Emergency Tarping", subtitle: "Brushy Creek, TX", src: "https://i.ibb.co/TDM1zyFs/image.png" },
    { title: "Luxury Home Exterior", subtitle: "Barton Creek, TX", src: "https://i.ibb.co/bjm1dBR9/image.png" },
    { title: "Insurance Claim Reroof", subtitle: "Serenada, TX", src: "https://i.ibb.co/TxkM02w9/image.png" },
];

export default function ProjectGallery() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [progressPx, setProgressPx] = useState(0);
    const [vh, setVh] = useState(0);

    // Update viewport height on resize
    useEffect(() => {
        const updateVh = () => setVh(window.innerHeight);
        updateVh();
        window.addEventListener("resize", updateVh);
        return () => window.removeEventListener("resize", updateVh);
    }, []);

    // Scroll progress calculation
    useEffect(() => {
        let raf: number;
        const loop = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const scrolled = -rect.top;
                const total = (projects.length - 1) * window.innerHeight;
                setProgressPx(Math.min(Math.max(scrolled, 0), total));
            }
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(raf);
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative bg-[#0B0C0F]"
            style={{ height: `${projects.length * 100}vh` }}
        >
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">
                {/* ---------- হেডিং সেকশন ( ছবির উপরে ) ---------- */}
                <div className="relative z-[100] flex flex-col items-center pt-12 sm:pt-16 pb-4 sm:pb-8 text-center bg-[#0B0C0F]">
                    <span className="inline-block text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-[#3b82f6] bg-[#3b82f6]/10 px-4 py-1.5 rounded-full border border-[#3b82f6]/30 mb-3">
                        Our Work
                    </span>
                    <h2 className="text-[#ffffff] font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight">
                        Recent Projects
                    </h2>
                </div>

                {/* ---------- গ্যালারি স্লাইডার ---------- */}
                <div className="relative flex-grow w-full h-full">
                    {projects.map((project, i) => {
                        const vhSafe = vh || 1;
                        const local = i === 0 ? 1 : Math.min(Math.max((progressPx - (i - 1) * vhSafe) / vhSafe, 0), 1);

                        const translateY = (1 - local) * 100;

                        return (
                            <div
                                key={project.title}
                                className="absolute inset-0 w-full h-full flex items-center justify-center will-change-transform"
                                style={{
                                    zIndex: i + 1,
                                    transform: `translateY(${translateY}%)`,
                                }}
                            >
                                {/* Main Card Container */}
                                <div className="flex h-full w-full items-start justify-center px-0 sm:px-6 lg:px-10">
                                    <div className="relative w-full max-w-7xl overflow-hidden rounded-none sm:rounded-[2.5rem] border-b sm:border border-[#3b82f6]/25 bg-[#141519] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9)] h-[55vh] sm:h-[82vh]">

                                        {/* Next.js Optimized Image */}
                                        <Image
                                            src={project.src}
                                            alt={project.title}
                                            fill
                                            priority={i === 0}
                                            sizes="(max-width: 1280px) 100vw, 1280px"
                                            className="object-cover object-center antialiased"
                                            draggable={false}
                                        />

                                        {/* Balanced Dark Gradient Overlay for Text Readability */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

                                        {/* Index Badge */}
                                        <div className="absolute right-5 top-5 sm:right-8 sm:top-8 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-[#3b82f6]/40 bg-[#141519]/70 font-mono text-xs sm:text-sm font-bold text-[#60a5fa] backdrop-blur-md shadow-lg z-10">
                                            {String(i + 1).padStart(2, "0")}
                                        </div>

                                        {/* Caption / Text Centered Directly on Image without separate card background */}
                                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-12 z-10">
                                            <span className="inline-block text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-blue-400 mb-2 drop-shadow">
                                                Featured Project
                                            </span>
                                            <h3 className="text-3xl font-extrabold text-white sm:text-5xl tracking-tight mb-3 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                                                {project.title}
                                            </h3>
                                            <p className="text-base sm:text-xl text-zinc-200 font-medium mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                                                {project.subtitle}
                                            </p>
                                            <span className="inline-block rounded-full bg-gradient-to-r from-[#2563eb] to-[#3b82f6] px-7 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/40 transition-transform hover:scale-105 border border-blue-400/30">
                                                View Project
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}