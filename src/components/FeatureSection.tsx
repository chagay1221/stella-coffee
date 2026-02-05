import { TreeDeciduous, Baby, PawPrint } from "lucide-react";

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

                    {/* Pet Friendly / Stroller Access - Using Pet as per design image usually, user said "Stroller Access"? 
             User prompt: "Feature Section: ... "Playground", "Nature", and "Stroller Access.""
             I will use "Stroller Access" logic but maybe icon for accessibility or stroller.
             Lucide "Baby" is good for Stroller or generic baby. 
             Let's use "Baby" for Playground (kids) and maybe "Accessibility" or "Car" (Pram?) for Stroller?
             Wait, Lucide has "Stroller"? No. 
             I will use "Carrot" (Nature), "Gamepad" (Playground)? 
             Let's stick to the prompt text: "Nature", "Playground", "Stroller Access".
             I used Tree for Nature. Baby for Playground is fine. 
             For Stroller Access: Maybe "Waypoints" or "MapPin" or "CheckCircle"? 
             Actually, let's look at the image provided in prompt if possible?
             The image shows: Tree (Nature), Drop/Face (Playground?), Paw (Pet Friendly).
             The USER PROMPT says: "Playground," "Nature," and "Stroller Access."
             I will follow the PROMPT text, but maybe use the Pet Friendly visual style if it looks good, or stick to prompt. 
             I'll use "Baby" for Playground and "Armchair" or "Accessibility" for Stroller? 
             Let's use `Baby` for Stroller Access and `FerrisWheel` (or similar) for Playground.
             But Lucide `FerrisWheel`? `Castle`?
             
             Let's update:
             Nature: TreeDeciduous
             Playground: Smile (Fun/Play)
             Stroller Access: Baby (Stroller implies baby)
          */}
                    <div className="flex flex-col items-center">
                        <div className="bg-sage/20 p-4 rounded-2xl mb-4 text-wood">
                            <Baby className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-wood mb-2 font-serif">גישה לעגלות</h3>
                        <p className="text-wood/70 text-sm max-w-xs px-4">
                            שבילים נוחים ונגישים לכל סוגי העגלות, כדי שכולם יוכלו ליהנות.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
