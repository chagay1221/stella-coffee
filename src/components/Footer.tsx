import { Instagram, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
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
                            <a href="#" className="bg-cream/10 p-2 rounded-full hover:bg-sage hover:text-wood transition-all"><MapPin size={20} /></a>
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
                                <span>07:00 - 19:00</span>
                            </li>
                            <li className="flex justify-between border-b border-cream/10 pb-2">
                                <span>שישי</span>
                                <span>07:00 - 14:00</span>
                            </li>
                            <li className="flex justify-between border-b border-cream/10 pb-2">
                                <span>שבת</span>
                                <span>סגור</span>
                            </li>
                        </ul>
                    </div>

                    {/* Map Embed */}
                    <div className="md:col-span-2 h-64 rounded-2xl overflow-hidden bg-cream/5 shadow-inner border border-cream/10">
                        {/* Placeholder Map */}
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

                <div className="border-t border-cream/10 mt-12 pt-8 text-center text-cream/40 text-xs">
                    © {new Date().getFullYear()} קפה סטלה. כל הזכויות שמורות.
                </div>
            </div>
        </footer>
    );
}
