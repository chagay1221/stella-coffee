import { ArrowLeft } from "lucide-react";

interface MenuItemProps {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
}

const MENU_ITEMS: MenuItemProps[] = [
    {
        id: "1",
        title: "קרואסון שקדים",
        description: "בצק חמאה דפדפי במילוי קרם שקדים עשיר",
        price: 18,
        image: "https://images.unsplash.com/photo-1555507036-ab1f40388085?q=80&w=2526&auto=format&fit=crop"
    },
    {
        id: "2",
        title: "פוקצ'ה קפרזה",
        description: "עגבניות שרי, מוצרלה טרייה, בזיליקום ושמן זית",
        price: 36,
        image: "https://images.unsplash.com/photo-1574484284008-81dcec18d301?q=80&w=2448&auto=format&fit=crop"
    },
    {
        id: "3",
        title: "לאטה ארטיזן",
        description: "תערובת הבית בקלייה בינונית עם חלב מוקצף",
        price: 16,
        image: "https://images.unsplash.com/photo-1551024601-569d6f8e2e71?q=80&w=2538&auto=format&fit=crop"
    },
    {
        id: "4",
        title: "מאפה שוקולד",
        description: "שוקולד מריר איכותי בתוך בצק פריך",
        price: 18,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476d?q=80&w=2574&auto=format&fit=crop"
    }
];

export default function MenuGrid() {
    return (
        <section id="menu" className="max-w-[1400px] mx-auto px-6 py-12 mb-20">
            <div className="flex justify-between items-end mb-12 border-b border-wood/10 pb-4">
                <h2 className="text-3xl md:text-4xl font-bold text-wood font-serif">
                    בתפריט <span className="text-brand-green/80">שלנו</span>
                </h2>
                <a href="#" className="text-wood/60 hover:text-brand-green font-medium flex items-center gap-2 transition-colors text-sm font-sans tracking-wide">
                    לכל התפריט <ArrowLeft className="w-4 h-4 rtl-flip" />
                </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 gap-y-8 md:gap-y-10">
                {MENU_ITEMS.map((item) => (
                    <div key={item.id} className="group cursor-pointer">
                        <div className="aspect-square w-full rounded-2xl md:rounded-[2rem] overflow-hidden mb-3 md:mb-6 relative shadow-md group-hover:shadow-xl transition-all duration-500">
                            {/* Image Hover Effect */}
                            <div
                                className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                                style={{ backgroundImage: `url(${item.image})` }}
                                role="img"
                                aria-label={item.title}
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                        </div>

                        <div className="px-1 md:px-2">
                            <h3 className="text-base md:text-xl font-bold text-wood mb-1 md:mb-2 font-serif group-hover:text-brand-green transition-colors leading-tight">{item.title}</h3>
                            <p className="text-wood/60 text-xs md:text-sm mb-2 md:mb-3 font-sans leading-relaxed italic line-clamp-2">{item.description}</p>
                            <div className="font-sans font-medium text-wood/80 text-sm md:text-lg">₪{item.price.toFixed(2)}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
