"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

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
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

    const toggleCategory = (id: string) => {
        if (expandedCategory === id) {
            setExpandedCategory(null);
        } else {
            setExpandedCategory(id);
        }
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
                {CATEGORIES.map((category) => {
                    const isExpanded = expandedCategory === category.id;

                    return (
                        <div
                            key={category.id}
                            className={`group cursor-pointer flex flex-col transition-all duration-500 rounded-[2rem] border border-transparent ${isExpanded ? 'bg-white shadow-xl border-wood/5 p-4' : ''}`}
                            onClick={() => toggleCategory(category.id)}
                        >
                            <div className={`aspect-[4/3] w-full rounded-2xl overflow-hidden mb-4 relative shadow-md transition-all duration-500 ${isExpanded ? 'aspect-video' : ''}`}>
                                {/* Image Hover Effect */}
                                <div
                                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                                    style={{ backgroundImage: `url(${category.image})` }}
                                    role="img"
                                    aria-label={category.title}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                                {/* Overlay Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="text-xs font-light opacity-90 mb-1">החל מ-</div>
                                    <div className="text-xl font-bold font-sans">{category.priceLabel.replace("החל מ-", "")}</div>
                                </div>
                            </div>

                            <div className="px-1 text-center md:text-right">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-bold text-wood mb-2 font-serif group-hover:text-brand-green transition-colors leading-tight">
                                            {category.title}
                                        </h3>
                                        <p className="text-wood/60 text-sm font-sans leading-relaxed">
                                            {category.description}
                                        </p>
                                    </div>
                                    <div className="text-brand-green mt-1 transition-transform duration-300">
                                        {isExpanded ? <ChevronUp /> : <ChevronDown />}
                                    </div>
                                </div>
                            </div>

                            {/* Expanded Content (Dropdown) */}
                            <div
                                className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-6 pb-2' : 'grid-rows-[0fr] opacity-0'}`}
                            >
                                <div className="overflow-hidden">
                                    <div className="bg-cream/30 rounded-xl border-2 border-dashed border-wood/20 p-8 flex flex-col items-center justify-center gap-3 text-wood/40 min-h-[200px]">
                                        <div className="font-medium text-lg">תפריט {category.title}</div>
                                        <div className="text-xs opacity-70">(מקום זה שמור לתמונה)</div>
                                    </div>
                                    <div className="text-center mt-4">
                                        <button className="text-sm text-brand-green font-bold hover:underline">
                                            סגור
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
