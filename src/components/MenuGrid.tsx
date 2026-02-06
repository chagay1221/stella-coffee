"use client";

import { ArrowLeft, X } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface MenuCategory {
    id: string;
    title: string;
    description: string;
    priceLabel: string;
    image: string;
    menuImagePlaceholder: string; // The "real menu" image placeholder
}

const CATEGORIES: MenuCategory[] = [
    {
        id: "pastries",
        title: "המאפים שלנו",
        description: "מאפים פריכים וטריים הנאפים במקום מדי בוקר",
        priceLabel: "החל מ-18 ₪",
        image: "https://images.unsplash.com/photo-1555507036-ab1f40388085?q=80&w=2526&auto=format&fit=crop",
        menuImagePlaceholder: "/menu-placeholder-pastries.jpg"
    },
    {
        id: "drinks",
        title: "המשקאות שלנו",
        description: "קפה משובח מתערובת הבית, סיידרים וחליטות תה",
        priceLabel: "החל מ-10 ₪",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2670&auto=format&fit=crop",
        menuImagePlaceholder: "/menu-placeholder-drinks.jpg"
    },
    {
        id: "breakfast",
        title: "ארוחות הבוקר שלנו",
        description: "בוקר ישראלי עשיר מול נוף המטעים",
        priceLabel: "החל מ-48 ₪",
        image: "https://images.unsplash.com/photo-1496042169905-5f969d240751?q=80&w=2620&auto=format&fit=crop",
        menuImagePlaceholder: "/menu-placeholder-breakfast.jpg"
    },
    {
        id: "treats",
        title: "הפינוקים שלנו",
        description: "קינוחים אישיים ומתוקים קטנים ליד הקפה",
        priceLabel: "החל מ-5 ₪",
        image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=2574&auto=format&fit=crop",
        menuImagePlaceholder: "/menu-placeholder-treats.jpg"
    }
];

export default function MenuGrid() {
    const [selectedCategory, setSelectedCategory] = useState<MenuCategory | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const MenuModal = () => {
        if (!selectedCategory) return null;

        return createPortal(
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 text-center" dir="rtl">
                <div
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                    onClick={() => setSelectedCategory(null)}
                />

                <div className="relative bg-white rounded-3xl p-6 md:p-8 shadow-2xl max-w-2xl w-full animate-fade-in-down border border-wood/10 max-h-[90vh] overflow-y-auto flex flex-col">
                    <button
                        onClick={() => setSelectedCategory(null)}
                        className="absolute top-4 left-4 text-wood/50 hover:text-wood bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors z-10"
                        aria-label="סגור תפריט"
                    >
                        <X size={20} />
                    </button>

                    <h3 className="text-3xl font-bold text-wood font-serif mb-2">{selectedCategory.title}</h3>
                    <p className="text-wood/60 mb-8">{selectedCategory.description}</p>

                    {/* Placeholder for the real menu image */}
                    <div className="bg-cream/30 rounded-2xl border-2 border-dashed border-wood/20 p-12 flex flex-col items-center justify-center gap-4 min-h-[300px] text-wood/40">
                        <div className="text-xl font-medium">כאן תופיע תמונה של התפריט</div>
                        <div className="text-sm opacity-70">(מקום זה שמור להעלאת קובץ תמונה של התפריט המלא)</div>
                    </div>

                    <div className="mt-8 text-center">
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className="bg-brand-green text-white font-bold py-2 px-8 rounded-xl hover:bg-sage transition-colors shadow-lg"
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
        <section id="menu" className="max-w-[1400px] mx-auto px-6 py-12 mb-20">
            <div className="flex justify-between items-end mb-12 border-b border-wood/10 pb-4">
                <h2 className="text-3xl md:text-4xl font-bold text-wood font-serif">
                    הקטגוריות <span className="text-brand-green/80">שלנו</span>
                </h2>
                <span className="text-wood/60 text-sm font-sans tracking-wide hidden md:inline-block">
                    לחצו על קטגוריה לצפייה בתפריט המלא
                </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 gap-y-8 md:gap-y-12">
                {CATEGORIES.map((category) => (
                    <div
                        key={category.id}
                        className="group cursor-pointer flex flex-col h-full"
                        onClick={() => setSelectedCategory(category)}
                    >
                        <div className="aspect-[4/5] w-full rounded-2xl md:rounded-[2rem] overflow-hidden mb-4 relative shadow-md group-hover:shadow-xl transition-all duration-500">
                            {/* Image Hover Effect */}
                            <div
                                className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                                style={{ backgroundImage: `url(${category.image})` }}
                                role="img"
                                aria-label={category.title}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                            {/* Overlay Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="text-xs md:text-sm font-light opacity-90 mb-1">החל מ-</div>
                                <div className="text-lg md:text-2xl font-bold font-sans">{category.priceLabel.replace("החל מ-", "")}</div>
                            </div>
                        </div>

                        <div className="px-1 text-center md:text-right flex-grow">
                            <h3 className="text-xl md:text-2xl font-bold text-wood mb-2 font-serif group-hover:text-brand-green transition-colors leading-tight">
                                {category.title}
                            </h3>
                            <p className="text-wood/60 text-sm md:text-base font-sans leading-relaxed line-clamp-2">
                                {category.description}
                            </p>
                        </div>

                        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 flex items-center gap-2 text-brand-green text-sm font-bold md:hidden">
                            <span>צפה בתפריט</span>
                            <ArrowLeft size={16} className="rtl-flip" />
                        </div>
                    </div>
                ))}
            </div>

            {mounted && <MenuModal />}
        </section>
    );
}
