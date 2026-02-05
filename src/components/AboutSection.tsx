export default function AboutSection() {
    return (
        <section className="max-w-[1400px] mx-auto px-6 mb-20">
            <div className="flex flex-col md:flex-row items-center gap-12 bg-white p-6 md:p-12 rounded-3xl shadow-sm border border-wood/5">

                <div className="w-full md:w-1/2">
                    <div className="relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden shadow-lg rotate-1 hover:rotate-0 transition-transform duration-500">
                        {/* Text for screen readers */}
                        <div className="sr-only">תמונה משפחתית בשחור לבן</div>
                        <div className="absolute inset-0 bg-wood/10 z-10 mix-blend-multiply pointer-events-none" />
                        <div
                            className="w-full h-full bg-cover bg-center sepia-[.1]"
                            style={{ backgroundImage: "url('/stella-cover.jpeg')" }}
                        />
                    </div>
                    {/* Decorative element */}
                    <div className="hidden md:block absolute -bottom-6 -left-6 w-24 h-24 bg-sage/20 rounded-full z-0 blur-2xl"></div>
                </div>

                <div className="w-full md:w-1/2 text-right">
                    <div className="w-16 h-1 bg-sage mb-6"></div>
                    <h2 className="text-4xl font-bold text-wood font-serif mb-6">הסיפור שלנו</h2>

                    <div className="space-y-4 text-wood/80 font-sans leading-relaxed text-lg">
                        <p>את עגלת הקפה שלהם החליטו להקים בני הזוג זהר ואיילת, בני מושב מגשימים, בעקבות אהבתו של זהר לתחום הקולינריה. "הוא התעסק בעבר בתחום המסעדנות ויש לו יד ומשיכה גדולה לתחום", מספרת איילת, "הוא אנין טעם והכל חשוב לו: האוכל, האסתטיקה, הניקיון, השירות. הוא רואה את הדברים כמכלול".</p>

<p>לעגלה החליטו זהר ואיילת לקרוא "סטלה", על שם אמו של זהר. "סטלה ניצולת שואה מיוגוסלביה ויש לה סיפור חיים מאוד מיוחד ומרגש", הם מספרים. "כשהייתה בת שנה המלחמה פרצה. ההורים שלה נאלצו למסור אותה לצוענייה שהכירו, והיא גדלה מבלי לדעת שהיא יהודייה. לקראת סוף המלחמה, מישהו איים על הצוענייה שילשין עליה, סטלה הועברה לבית יתומים ובמקרה הסתבר שאמא שלה עובדת בו. כשסטלה מבקרת בעגלה היא מספרת לכל מי שמגיע שהיא סטלה ושהעגלה קרויה על שמה".</p>

<p>זהר ואיילת מיקמו את העגלה במרכז מגשימים, בחלקה גבוהה שמשקיפה לנוף עוצר נשימה ולמטעי סברס ונקטרינות. מסביב לעגלה גני משחקים, מגרש ספורט, דשא ועצים. "זה מיקום ממש אסטרטגי, פתוח לנוף, עם המון צל ואוויר, חנייה מסודרת וגישה נוחה", מסביר זהר. "פינינו פה שיחים, גזמנו את העצים, בנינו שבילים יפים מעץ והבאנו עציצים, שמשיות, כסאות, שולחנות וספסלים. יש לנו תפריט מגוון וטרי מאוד, עם מנות גם לטבעוניים וגם לנמנעים מגלוטן. אנשים מהמושב הגיעו אלינו עם מתנות, פרגנו לנו והרעיפו עלינו המון אהבה. שמה של העגלה עבר מפה לאוזן והיא נהפכה למקום מפגש למשפחות וחברים, ואפילו לפגישות עסקיות. זה מאוד מרגש".</p>
                    </div>

                    <div className="mt-8 flex gap-4">
                        {/* Signature or small playful element could go here */}
                        <div className="font-serif italic text-wood opacity-60 text-xl">זהר ואיילת</div>
                    </div>
                </div>

            </div>
        </section>
    );
}
