import { Navigation, Menu, Phone, Instagram } from "lucide-react";

const utilities = [
    { icon: Menu, label: "תפריט", href: "#menu" },
    { icon: Navigation, label: "מיקום", href: "https://waze.com/ul?ll=32.0478328,34.8979472&navigate=yes" },
    { icon: Instagram, label: "אינסטגרם", href: "#" },
    { icon: Phone, label: "חייג", href: "tel:*" },
];

export default function UtilityBar() {
    return (
        <div className="max-w-[1400px] mx-auto px-6 mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full">
                {utilities.map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        className="flex flex-col items-center justify-center bg-white p-6 md:p-8 rounded-[2rem] shadow-sm hover:shadow-md border border-wood/5 transition-all duration-300 group"
                    >
                        <div className="bg-brand-green/10 p-4 rounded-full group-hover:bg-brand-green group-hover:text-white transition-all duration-300 mb-4 text-wood-dark">
                            <item.icon className="w-6 h-6 md:w-8 md:h-8" />
                        </div>
                        <span className="text-sm md:text-base font-bold text-wood font-sans tracking-wide uppercase">{item.label}</span>
                    </a>
                ))}
            </div>
        </div>
    );
}
