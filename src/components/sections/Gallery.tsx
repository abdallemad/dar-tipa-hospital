"use client";

import { motion } from "motion/react";
import { Bed, Bath, Coffee, Tv } from "lucide-react";

const accommodationItems = [
  {
    title: "أجنحة فندقية فاخرة",
    description: "أجنحة خاصة مجهزة بأرقى الأثاث لضمان بيئة هادئة ومريحة.",
    icon: Bed,
    placeholderColor: "bg-primary/10",
  },
  {
    title: "غرف إقامة مزدوجة",
    description: "غرف واسعة توفر الخصوصية والراحة مع إطلالات مهدئة للأعصاب.",
    icon: Coffee,
    placeholderColor: "bg-secondary/10",
  },
  {
    title: "مرافق طبية متطورة",
    description: "أماكن مخصصة للرعاية المكثفة والمتابعة الدقيقة على مدار الساعة.",
    icon: Tv,
    placeholderColor: "bg-teal-50",
  },
  {
    title: "خدمات فندقية متكاملة",
    description: "نظام غذائي متوازن ونظافة دورية تليق بمستشفى دار طيبة.",
    icon: Bath,
    placeholderColor: "bg-purple-50",
  },
];

export function Gallery() {
  return (
    <section className="py-24 bg-background overflow-hidden" id="accommodation">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm block mb-4"
          >
            راحتك تهمنا
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            الإقـــامــة في دار طيبة
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            نوفر بيئة استشفائية متكاملة تجمع بين الرعاية الطبية الفائقة والراحة الفندقية المتميزة.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {accommodationItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-[2.5rem] bg-muted/30 border border-border/50"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className={`aspect-square lg:aspect-auto h-full min-h-[300px] ${item.placeholderColor} flex items-center justify-center relative overflow-hidden`}>
                  <item.icon className="w-20 h-20 text-foreground/10 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-linear-to-br from-white/20 to-transparent" />

                  {/* Visual placeholder pattern */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }}
                  />

                  <div className="absolute bottom-6 right-6">
                    <span className="text-xs font-medium px-4 py-2 bg-white/80 backdrop-blur-md rounded-full shadow-sm text-foreground">معاينة الإقامة</span>
                  </div>
                </div>

                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground/80">
                    <li className="flex items-center gap-2">• تكييف مركزي</li>
                    <li className="flex items-center gap-2">• إنترنت لاسلكي سريع</li>
                    <li className="flex items-center gap-2">• خصوصية تامة</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
