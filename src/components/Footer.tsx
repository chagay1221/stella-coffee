"use client";

import { Instagram, Phone, MapPin, Clock, X, Scale } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Footer() {
    const [isAccessibilityModalOpen, setIsAccessibilityModalOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const AccessibilityModal = () => {
        if (!isAccessibilityModalOpen) return null;

        return createPortal(
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" dir="rtl">
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                    onClick={() => setIsAccessibilityModalOpen(false)}
                />

                {/* Modal Content */}
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl max-w-2xl w-full animate-fade-in-down border border-wood/10 max-h-[90vh] overflow-y-auto">
                    <button
                        onClick={() => setIsAccessibilityModalOpen(false)}
                        className="absolute top-4 left-4 text-wood/50 hover:text-wood bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
                    >
                        <X size={20} />
                    </button>

                    <div className="mb-6">
                        <div className="bg-sage/10 p-3 rounded-full inline-block mb-4 text-brand-green">
                            <Scale size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-wood font-serif">הצהרת נגישות</h3>
                    </div>

                    <div className="space-y-4 text-wood/80 text-base font-sans leading-relaxed">
                        <p className="font-bold">הצהרת נגישות - קפה סטלה</p>
                        <p>
                            אנו בקפה סטלה רואים חשיבות רבה במתן שירות שוויוני לכלל הלקוחות ובשיפור הגלישה באתר לאנשים עם מוגבלות.
                        </p>
                        <p>
                            <strong>רכז נגישות:</strong><br />
                            פרטים ימולאו בהמשך.
                        </p>
                        <p>
                            <strong>הסדרי נגישות פיזיים:</strong><br />
                            פרטים ימולאו בהמשך (חניות נכים, דרכי גישה, שירותי נכים וכו').
                        </p>
                        <p>
                            <strong>נגישות האתר:</strong><br />
                            אתר זה נבנה בהתאם לתקנות השוויון לבעלי מוגבלויות. הממשק מותאם לניווט מקלדת, שימוש בקורא מסך, והתאמה ויזואלית.
                        </p>
                        <p className="text-sm text-wood/60 italic">
                            * תוכן משפטי מלא יעודכן בקרוב.
                        </p>
                    </div>

                    <div className="mt-8 text-center md:text-right">
                        <button
                            onClick={() => setIsAccessibilityModalOpen(false)}
                            className="bg-brand-green text-white font-bold py-2 px-8 rounded-xl hover:bg-sage transition-colors shadow-lg shadow-brand-green/20"
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
        <footer className="bg-wood text-cream py-12 md:py-16">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand & Social */}
                    <div className="flex flex-col gap-6">
                        <div className="text-3xl font-bold font-serif">Stella</div>
                        <p className="text-cream/70 text-sm leading-relaxed max-w-xs">
                            עגלת קפה בוטיק בלב המטעים. מקום של טבע, שקט וטעמים טובים.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="bg-cream/10 p-2 rounded-full hover:bg-sage hover:text-wood transition-all"><Instagram size={20} /></a>
                            <a href="#" className="bg-cream/10 p-2 rounded-full hover:bg-sage hover:text-wood transition-all"><Phone size={20} /></a>
                            <a href="https://waze.com/ul?ll=32.0478328,34.8979472&navigate=yes" target="_blank" rel="noopener noreferrer" className="bg-cream/10 p-2 rounded-full hover:bg-sage hover:text-wood transition-all"><MapPin size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links (optional, maybe not needed for single page?) -> Let's stick to Hours & Map */}

                    {/* Opening Hours */}
                    <div className="lg:col-span-1">
                        <h3 className="text-xl font-bold font-serif mb-6 flex items-center gap-2">
                            <Clock size={20} className="text-sage" /> שעות פתיחה
                        </h3>
                        <ul className="space-y-3 text-cream/80 text-sm">
                            <li className="flex justify-between border-b border-cream/10 pb-2">
                                <span>ראשון - חמישי</span>
                                <span dir="ltr">07:00 - 19:00</span>
                            </li>
                            <li className="flex justify-between border-b border-cream/10 pb-2">
                                <span>שישי</span>
                                <span dir="ltr">07:00 - 14:00</span>
                            </li>
                            <li className="flex justify-between border-b border-cream/10 pb-2">
                                <span>שבת</span>
                                <span>סגור</span>
                            </li>
                        </ul>
                    </div>

                    {/* Map Embed */}
                    <div className="md:col-span-2 h-64 rounded-2xl overflow-hidden bg-cream/5 shadow-inner border border-cream/10">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102146.4253018251!2d34.908006249999996!3d32.47120625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d0b30c33eb30b%3A0x6b87b20921471717!2sPardes%20Hanna-Karkur!5e0!3m2!1sen!2sil!4v1708960000000!5m2!1sen!2sil"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'grayscale(0.5) contrast(1.1)' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        />
                    </div>

                </div>

                <div className="border-t border-cream/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-cream/40 text-xs font-sans">
                    <div className="text-center md:text-right">
                        © {new Date().getFullYear()} קפה סטלה. כל הזכויות שמורות.
                    </div>

                    <button
                        onClick={() => setIsAccessibilityModalOpen(true)}
                        className="hover:text-white transition-colors underline decoration-cream/20 underline-offset-4"
                    >
                        הצהרת נגישות
                    </button>

                    <div className="text-center md:text-left ltr">
                        Designed and Built by <span className="text-sage/80 font-medium">Uply-Studios</span>
                    </div>
                </div>
            </div>

            {mounted && <AccessibilityModal />}
        </footer>
    );
}
