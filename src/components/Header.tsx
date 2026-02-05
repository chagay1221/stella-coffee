"use client";

import { Menu, Clock, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState<boolean | null>(null);
    const [isHoursModalOpen, setIsHoursModalOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const checkOpenStatus = () => {
            const now = new Date();
            const day = now.getDay(); // 0 is Sunday, 6 is Saturday
            const hour = now.getHours();
            const minute = now.getMinutes();
            // Current time in decimal for easier comparison
            const time = hour + minute / 60;

            // Hours: Sun-Thu (0-4): 07:00 - 19:00
            // Fri (5): 07:00 - 14:00
            // Sat (6): Closed

            let isOpenNow = false;

            if (day >= 0 && day <= 4) {
                // Sunday to Thursday
                if (time >= 7 && time < 19) isOpenNow = true;
            } else if (day === 5) {
                // Friday
                if (time >= 7 && time < 14) isOpenNow = true;
            }
            // Saturday is false by default

            setIsOpen(isOpenNow);
        };

        checkOpenStatus();
        const interval = setInterval(checkOpenStatus, 60000); // Update every minute
        return () => clearInterval(interval);
    }, []);

    const HoursModal = () => {
        if (!isHoursModalOpen) return null;

        return createPortal(
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                    onClick={() => setIsHoursModalOpen(false)}
                />

                {/* Modal Content */}
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl max-w-sm w-full animate-fade-in-down border border-wood/10">
                    <button
                        onClick={() => setIsHoursModalOpen(false)}
                        className="absolute top-4 left-4 text-wood/50 hover:text-wood bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
                        aria-label="סגור חלונית שעות פתיחה"
                    >
                        <X size={20} />
                    </button>

                    <div className="text-center mb-6">
                        <div className="bg-sage/10 p-4 rounded-full inline-block mb-4 text-brand-green">
                            <Clock size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-wood font-serif">שעות פתיחה</h3>
                    </div>

                    <ul className="space-y-4 text-wood/80 text-base font-sans">
                        <li className="flex justify-between border-b border-wood/5 pb-3">
                            <span className="font-medium">ראשון - חמישי</span>
                            <span className="text-brand-green font-bold text-lg" dir="ltr">07:00 - 19:00</span>
                        </li>
                        <li className="flex justify-between border-b border-wood/5 pb-3">
                            <span className="font-medium">שישי</span>
                            <span className="text-brand-green font-bold text-lg" dir="ltr">07:00 - 14:00</span>
                        </li>
                        <li className="flex justify-between items-center pt-1">
                            <span className="font-medium">שבת</span>
                            <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-sm font-bold">סגור</span>
                        </li>
                    </ul>

                    <div className="mt-8 text-center">
                        <button
                            onClick={() => setIsHoursModalOpen(false)}
                            className="w-full bg-brand-green text-white font-bold py-3 rounded-xl hover:bg-sage transition-colors shadow-lg shadow-brand-green/20"
                        >
                            סגור
                        </button>
                    </div>
                </div>
            </div>,
            document.body
        );
    };

    return (
        <>
            <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-md transition-all duration-300">
                <div className="max-w-[1400px] mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border border-wood/10 shadow-sm group-hover:rotate-6 transition-transform">
                            <img src="/stella-profile.jpeg" alt="Stella Logo" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-2xl font-bold text-wood font-serif tracking-tight">Stella</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8 text-wood font-medium font-sans">
                        <Link href="#menu" className="hover:text-brand-green transition-colors">תפריט</Link>
                        <Link href="#location" className="hover:text-brand-green transition-colors">מיקום</Link>
                        <Link href="#story" className="hover:text-brand-green transition-colors">הסיפור שלנו</Link>
                    </nav>

                    {/* Status Indicator (Client Only) - Clickable */}
                    <button
                        onClick={() => setIsHoursModalOpen(true)}
                        className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer focus:outline-none"
                        aria-label="View opening hours"
                    >
                        {isOpen === null ? (
                            // Loading state
                            <div className="w-24 h-8 bg-wood/5 rounded-full animate-pulse"></div>
                        ) : isOpen ? (
                            <div className="bg-green-100 text-green-700 font-bold px-4 py-1.5 rounded-full font-sans text-sm flex items-center gap-2 shadow-sm border border-green-200">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                                </span>
                                <span>פתוח עכשיו</span>
                            </div>
                        ) : (
                            <div className="bg-gray-100 text-gray-500 font-bold px-4 py-1.5 rounded-full font-sans text-sm flex items-center gap-2 shadow-sm border border-gray-200">
                                <Clock size={14} />
                                <span>סגור כרגע</span>
                            </div>
                        )}
                    </button>

                    {/* Mobile Menu Toggle (Simplified) */}
                    <button
                        className="md:hidden text-wood"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "סגור תפריט" : "פתח תפריט"}
                    >
                        <Menu />
                    </button>
                </div>

                {/* Mobile Nav Dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-cream border-t border-wood/5 py-4 px-6 flex flex-col gap-4 shadow-lg">
                        <Link href="#menu" className="text-wood font-medium" onClick={() => setIsMenuOpen(false)}>תפריט</Link>
                        <Link href="#location" className="text-wood font-medium" onClick={() => setIsMenuOpen(false)}>מיקום</Link>
                        <Link href="#story" className="text-wood font-medium" onClick={() => setIsMenuOpen(false)}>הסיפור שלנו</Link>
                    </div>
                )}
            </header>

            {/* Render Portal only on client */}
            {mounted && <HoursModal />}
        </>
    );
}
