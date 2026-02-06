import { TreeDeciduous, Baby, Accessibility } from "lucide-react";

export default function FeatureSection() {
    return (
        <section className="bg-cream/50 py-16 mb-16 border-y border-wood/5">
            <div className="max-w-[1400px] mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-wood font-serif mb-2">החוויה בסטלה</h2>
                <p className="text-wood/60 mb-12 max-w-lg mx-auto">יותר מרק קפה: זהו רגע של שקט ביום שלך.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {/* Nature */}
                    <div className="flex flex-col items-center">
                        <div className="bg-sage/20 p-4 rounded-2xl mb-4 text-wood">
                            <TreeDeciduous className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-wood mb-2 font-serif">חיבור לטבע</h3>
                        <p className="text-wood/70 text-sm max-w-xs px-4">
                            ממוקם תחת עצי אלון עתיקים, מוקף בצמחייה ים-תיכונית אוצרת.
                        </p>
                    </div>

                    {/* Playground */}
                    <div className="flex flex-col items-center">
                        <div className="bg-sage/20 p-4 rounded-2xl mb-4 text-wood">
                            <Baby className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-wood mb-2 font-serif">קרוב לגן המשחקים</h3>
                        <p className="text-wood/70 text-sm max-w-xs px-4">
                            צמוד למתחם המשחקים הבטוח, מאפשר להורים להירגע בזמן שהילדים משחקים.
                        </p>
                    </div>

                    {/* Accessibility */}
                    <div className="flex flex-col items-center">
                        <div className="bg-sage/20 p-4 rounded-2xl mb-4 text-wood">
                            <Accessibility className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-wood mb-2 font-serif">נגיש לכולם</h3>
                        <p className="text-wood/70 text-sm max-w-xs px-4">
                            סטלה קפה מתאים לכל מי שאוהב את הטבע ונגיש לכולם, עם גישה נוחה ושבילים מותאמים כדי שכולם ירגישו כאן בבית
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
