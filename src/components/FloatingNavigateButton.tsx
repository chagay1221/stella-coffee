"use client";

import { Navigation2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingNavigateButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroBtn = document.getElementById("hero-navigate-btn");
            if (!heroBtn) return;

            const rect = heroBtn.getBoundingClientRect();
            // Show button when the hero button is scrolled out of view (above the viewport)
            // rect.bottom < 0 means it's fully above the viewport
            // We can also add a small buffer if we want
            if (rect.bottom < 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Check initial state
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <a
            href="https://waze.com/ul?ll=32.0478328,34.8979472&navigate=yes"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 left-6 right-6 md:left-8 md:right-auto md:w-auto z-40 bg-brand-green text-white px-6 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 shadow-2xl animate-fade-in-up hover:bg-sage transition-colors border border-white/20"
            style={{ animationDuration: '0.3s' }}
        >
            <Navigation2 size={24} className="rtl-flip" />
            <span>נווט לסטלה</span>
        </a>
    );
}
