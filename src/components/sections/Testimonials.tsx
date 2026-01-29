"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "كانت تجربة غيرت حياتي تماماً. الفريق الطبي هنا ليس فقط محترفاً بل ودوداً جداً ويشعرك أنك في منزلك.",
    author: "أحد المتعافين",
    period: "منذ 6 أشهر",
  },
  {
    text: "لم أكن أتوقع أن أجد هذه المحبة والاهتمام. بفضل الله ثم دار طيبة، استعدت حياتي وأسرتي مرة أخرى.",
    author: "متعافٍ سابق",
    period: "منذ عام",
  },
  {
    text: "المكان مريح جداً والسرية تامة. شعرت بالأمان والاطمئنان منذ اليوم الأول.",
    author: "مريض سابق",
    period: "منذ 3 أشهر",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-muted/50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            قصص نجاح ملهمة
          </motion.h2>
          <p className="text-lg text-muted-foreground">كلمات من أشخاص استعادوا توازن حياتهم معنا.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background p-10 rounded-3xl shadow-lg border border-border relative group"
            >
              <Quote className="w-12 h-12 text-primary/10 absolute top-8 right-8 group-hover:text-primary/20 transition-colors" />
              <p className="text-lg leading-relaxed mb-8 italic relative z-10 text-foreground/90">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-bold text-secondary-foreground text-xl">
                  {t.author[0]}
                </div>
                <div>
                  <h4 className="font-bold">{t.author}</h4>
                  <p className="text-sm text-muted-foreground">{t.period}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
