"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Sparkles, ArrowUpRight } from "lucide-react";

const GALLERY_PROJECTS = [
    {
        title: "Modern Shingle Replacement",
        category: "Residential Roofing",
        location: "Dallas, TX",
        image: "https://i.ibb.co/JjHB6dDW/image.png",
        description: "Complete architectural shingle upgrade with advanced weatherproofing and sleek ridge venting.",
    },
    {
        title: "Commercial Flat Roof System",
        category: "Commercial Waterproofing",
        location: "Fort Worth, TX",
        image: "https://i.ibb.co/TDM1zyFs/image.png",
        description: "High-durability TPO membrane installation designed to withstand heavy thermal shifts and pooling.",
    },
    {
        title: "Luxury Slate Tile Restoration",
        category: "Custom Restoration",
        location: "Plano, TX",
        image: "https://i.ibb.co/bjm1dBR9/image.png",
        description: "Meticulous hand-laid slate tile restoration bringing historic elegance back to a premier estate.",
    },
    {
        title: "Storm Damage Metal Roofing",
        category: "Emergency Repair",
        location: "Frisco, TX",
        image: "https://i.ibb.co/1tQKbzt8/image.png",
        description: "Impact-resistant standing seam metal installation engineered for superior hail protection.",
    },
    {
        title: "Architectural Asphalt Shingles",
        category: "Residential Roofing",
        location: "Arlington, TX",
        image: "https://i.ibb.co/FfHGwTd/image.png",
        description: "Vibrant dimensional shingle installation offering enhanced wind resistance and stunning curb appeal.",
    },
    {
        title: "Industrial Standing Seam Roof",
        category: "Commercial Roofing",
        location: "Garland, TX",
        image: "https://i.ibb.co/jmfkN9r/image.png",
        description: "Heavy-duty commercial metal panel framework tailored for maximum weather shielding and longevity.",
    },
    {
        title: "Custom Skylight Integration",
        category: "Roofing Upgrades",
        location: "Irving, TX",
        image: "https://i.ibb.co/jmfkN9r/image.png",
        description: "Precision-sealed daylighting solutions paired with energy-efficient low-E glass components.",
    },
    {
        title: "Historic Tile Roof Rebuild",
        category: "Custom Restoration",
        location: "McKinney, TX",
        image: "https://i.ibb.co/twcQMYCk/image.png",
        description: "Specialized clay tile reinforcement matching original architectural guidelines and codes.",
    },
    {
        title: "Suburban Eco-Roof Retrofit",
        category: "Energy Efficient",
        location: "Denton, TX",
        image: "https://i.ibb.co/36Tkvk5/image.png",
        description: "Cool-roof technology installation designed to drastically reduce attic temperatures and cooling bills.",
    },
    {
        title: "Complete Estate Overhaul",
        category: "Full Replacement",
        location: "Southlake, TX",
        image: "https://i.ibb.co/TMCZk9GJ/image.png",
        description: "Comprehensive multi-structure roofing revitalization featuring premium architectural grade materials.",
    },
];

export default function GallerySection() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section ref={containerRef} className="relative bg-[#0B0C0F] pt-44 pb-28 lg:pt-52 lg:pb-36 overflow-hidden">
            {/* Background ambiance */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#3b82f6]/[0.04] blur-[150px] pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 mb-16 lg:mb-24 text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#3b82f6]/30 bg-[#3b82f6]/5 px-4 py-1.5 text-[11px] font-semibold tracking-[0.28em] uppercase text-[#3b82f6] mb-5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Our Recent Masterpieces
                </span>
                <h2 className="text-[#ffffff] font-extrabold text-3xl sm:text-[2.6rem] lg:text-5xl leading-[1.12] tracking-tight mb-5">
                    Featured Project Gallery
                </h2>
                <p className="text-[#9ca3af] text-sm sm:text-base max-w-xl mx-auto leading-relaxed px-4">
                    Explore our high-end residential and commercial roofing transformations across the DFW metroplex.
                </p>
            </div>

            {/* Container with responsive sticky stacking on desktop */}
            <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-10 pb-16 lg:pb-32">
                <div className="flex flex-col gap-6 sm:gap-8 lg:gap-12">
                    {GALLERY_PROJECTS.map((project, index) => {
                        const topPosition = 110 + index * 18;

                        return (
                            <div
                                key={project.title}
                                className="lg:sticky transition-all duration-300"
                                style={{
                                    top: `${topPosition}px`,
                                    zIndex: index + 1,
                                }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-30px" }}
                                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                    className="relative rounded-3xl lg:rounded-[2.5rem] border border-[#3b82f6]/25 bg-[#141519]/95 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.9)] overflow-hidden group"
                                >
                                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b82f6]/60 to-transparent" />

                                    <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                                        {/* Project Details */}
                                        <div className="lg:col-span-5 flex flex-col justify-between order-2 lg:order-1">
                                            <div>
                                                <div className="flex items-center justify-between mb-3 lg:mb-4">
                                                    <span className="inline-block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#60a5fa] bg-[#3b82f6]/10 px-3 py-1 rounded-full border border-[#3b82f6]/20">
                                                        {project.category}
                                                    </span>
                                                    <span className="text-[#9ca3af] text-xs font-medium">
                                                        {project.location}
                                                    </span>
                                                </div>

                                                <h3 className="text-white font-extrabold text-xl sm:text-2xl lg:text-3xl tracking-tight mb-2 sm:mb-3 group-hover:text-[#60a5fa] transition-colors duration-300">
                                                    {project.title}
                                                </h3>

                                                <p className="text-[#9ca3af] text-xs sm:text-sm lg:text-base leading-relaxed mb-4 lg:mb-6">
                                                    {project.description}
                                                </p>
                                            </div>

                                            <div className="pt-3 lg:pt-4 border-t border-[#3b82f6]/15 flex items-center justify-between">
                                                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#9ca3af]">
                                                    Project {index + 1 < 10 ? `0${index + 1}` : index + 1} / {GALLERY_PROJECTS.length < 10 ? `0${GALLERY_PROJECTS.length}` : GALLERY_PROJECTS.length}
                                                </span>
                                                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/30 flex items-center justify-center text-[#60a5fa] group-hover:bg-[#3b82f6] group-hover:text-white transition-all duration-300">
                                                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Image Container with zoom effect */}
                                        <div className="lg:col-span-7 relative h-[220px] sm:h-[300px] lg:h-[360px] rounded-2xl lg:rounded-3xl overflow-hidden border border-[#3b82f6]/20 shadow-inner order-1 lg:order-2">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0F]/60 via-transparent to-transparent opacity-60" />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}