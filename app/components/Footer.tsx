"use client";

import { motion } from "framer-motion";

interface FooterLink {
    label: string;
    href: string;
}

interface FooterArea {
    name: string;
}

interface RoofingFooterProps {
    logoText?: string;
    logoImg?: string;
    description?: string;
    phone?: string;
    phoneSmall?: string;
    email?: string;
    address?: string;
    quickLinks?: FooterLink[];
    serviceAreas?: FooterArea[];
    copyrightText?: string;
    bgImage?: string;
}

const defaultLinks: FooterLink[] = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Our Services', href: '/services' },
    { label: 'Project Gallery', href: '#gallery' },
    { label: 'Contact Us', href: '/contact' },
];

const defaultAreas: FooterArea[] = [
    { name: 'Dallas, TX' },
    { name: 'Fort Worth, TX' },
    { name: 'DFW' },
];

export default function RoofingFooter({
    logoText = 'EXPERTS ROOFING',
    logoImg = 'https://i.ibb.co/0jyqw7Kr/image.png',
    description = "With years of experience serving Dallas TX, we're ready to be your trusted choice for a professional and high-quality project. Contact us today for your free estimate.",
    phone = '347-ROOF-NOW',
    phoneSmall = '347-7663-669',
    email = 'contact@expertsroofing.us',
    address = 'Dallas, TX',
    quickLinks = defaultLinks,
    serviceAreas = defaultAreas,
    copyrightText = `Copyright © Experts Roofing ${new Date().getFullYear()}. All Rights Reserved. Privacy Policy. Terms & Conditions`,
    bgImage = "https://i.ibb.co/rfRkBfNC/image.png",
}: RoofingFooterProps) {
    return (
        <footer
            className="relative w-full text-white font-sans bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#0B0C0F]/90" />

            {/* Hairline blue accent at the top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

            <div className="relative z-10 max-w-6xl mx-auto pt-20 pb-12 px-6">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-12 mb-16 items-start">

                    {/* Col 1: Logo, Bio & Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col gap-6"
                    >
                        {logoImg ? (
                            <img src={logoImg} alt={logoText} className="h-12 w-auto object-contain" />
                        ) : (
                            <h2 className="text-2xl font-black tracking-wider uppercase text-white">
                                {logoText}
                            </h2>
                        )}

                        <p className="text-white text-sm leading-relaxed opacity-90">
                            {description}
                        </p>

                        <div>
                            <h3 className="text-sm font-extrabold uppercase tracking-wider mb-4 text-blue-500 border-b border-blue-500/20 pb-2">
                                Contact Us
                            </h3>
                            <ul className="flex flex-col gap-3 text-sm text-white opacity-90">
                                <li>
                                    <a href={`tel:${phoneSmall}`} className="flex items-center gap-3 hover:text-blue-400 transition-colors duration-300">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                        <div className="flex flex-col">
                                            <span className="font-bold text-[13.5px] leading-tight">{phone}</span>
                                            <span className="text-[11px] opacity-75 font-medium tracking-wide">{phoneSmall}</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href={`mailto:${email}`} className="flex items-center gap-3 hover:text-blue-400 transition-colors duration-300">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> {email}
                                    </a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> {address}
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Col 2: Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex flex-col gap-4"
                    >
                        <h3 className="text-sm font-extrabold uppercase tracking-wider text-blue-500 border-b border-blue-500/20 pb-2">
                            Quick Links
                        </h3>
                        <ul className="flex flex-col gap-3 text-sm text-white opacity-90">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="flex items-center gap-2.5 hover:text-blue-400 transition-colors duration-300">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Col 3: Areas We Serve */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col gap-4"
                    >
                        <h3 className="text-sm font-extrabold uppercase tracking-wider text-blue-500 border-b border-blue-500/20 pb-2">
                            Areas We Serve
                        </h3>
                        <ul className="flex flex-col gap-3 text-sm text-white opacity-90">
                            {serviceAreas.map((area, index) => (
                                <li key={index} className="flex items-center gap-2.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                    {area.name}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-blue-500/20 pt-8 text-center">
                    <p className="text-xs text-white opacity-70">
                        {copyrightText}
                    </p>
                </div>
            </div>
        </footer>
    );
}
