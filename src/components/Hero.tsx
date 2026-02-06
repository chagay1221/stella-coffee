import { Navigation2 } from "lucide-react";

export default function Hero() {
    return (
        <section className="px-4 md:px-8 max-w-[1400px] mx-auto mb-12">
            <div className="relative w-full h-[60vh] md:h-[70vh] rounded-[2.5rem] overflow-hidden flex flex-col items-center justify-center text-center shadow-2xl">
                {/* Background with Overlay */}
                <div className="absolute inset-0 bg-wood/20 z-0">
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1595928642581-f50f4f3453a5?q=80&w=2609&auto=format&fit=crop')] bg-cover bg-center opacity-95" />
                    {/* Gradient Overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>

                <div className="relative z-10 flex flex-col items-center max-w-3xl px-4 animate-fade-in-up">
                    <h1 className="text-5xl md:text-7xl font-bold text-white font-serif drop-shadow-lg mb-6 leading-[1.1]">
                        ברוכים הבאים
                        <br />
                        <span className="text-brand-green/90">לסטלה קפה מגשימים</span>
                    </h1>

                    <p className="text-white/90 text-lg md:text-2xl font-sans max-w-xl drop-shadow-md mb-10 font-light">
                       קפה שמכבד את השקט של הבוקר
                    </p>

                    <a
                        href="https://waze.com/ul?ll=32.0478328,34.8979472&navigate=yes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white hover:bg-gray-100 text-wood px-8 py-3.5 rounded-full font-bold text-base md:text-lg flex items-center gap-3 transition-colors shadow-lg hover:shadow-xl transform active:scale-95 group"
                    >
                        <Navigation2 size={20} className="rtl-flip group-hover:-translate-x-1 transition-transform" />
                        <span>נווט לסטלה</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
