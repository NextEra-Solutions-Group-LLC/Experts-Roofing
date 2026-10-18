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
            className="relative bg-white text-slate-900"
            style={{ height: `${projects.length * 100}vh` }}
        >
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">

                {/* Section Header */}
                <div className="relative z-[100] flex flex-col items-center pt-10 sm:pt-14 pb-4 sm:pb-6 text-center bg-white">
                    <span className="inline-block text-[11px] sm:text-xs font-bold tracking-[0.28em] uppercase text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100 mb-2">
                        Our Work
                    </span>
                    <h2 className="text-slate-900 font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight uppercase">
                        Recent Projects
                    </h2>
                </div>

                {/* Full Image Stacking Slider */}
                <div className="relative flex-grow w-full h-full">
                    {projects.map((project, i) => {
                        const vhSafe = vh || 1;
                        const local = i === 0 ? 1 : Math.min(Math.max((progressPx - (i - 1) * vhSafe) / vhSafe, 0), 1);

                        const translateY = (1 - local) * 100;

                        return (
                            <div
                                key={project.title + i}
                                className="absolute inset-0 w-full h-full flex items-center justify-center will-change-transform"
                                style={{
                                    zIndex: i + 1,
                                    transform: `translateY(${translateY}%)`,
                                }}
                            >
                                {/* Main Card Container (Pure Image Display) */}
                                <div className="flex h-full w-full items-start justify-center px-0 sm:px-6 lg:px-10">
                                    <div className="relative w-full max-w-7xl overflow-hidden rounded-none sm:rounded-[2.5rem] border border-slate-200/80 bg-slate-100 shadow-xl h-[60vh] sm:h-[78vh]">

                                        {/* Next.js Optimized Image - 100% Original Clarity */}
                                        <Image
                                            src={project.src}
                                            alt={project.title}
                                            fill
                                            priority={i === 0}
                                            sizes="(max-width: 1280px) 100vw, 1280px"
                                            className="object-cover object-center antialiased"
                                            draggable={false}
                                        />

                                        {/* Minimal Corner Number Badge */}
                                        <div className="absolute right-5 top-5 sm:right-8 sm:top-8 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/50 bg-white/90 font-mono text-xs sm:text-sm font-black text-blue-600 backdrop-blur-md shadow-lg z-10">
                                            {String(i + 1).padStart(2, "0")}
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