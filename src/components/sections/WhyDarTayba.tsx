"use client";

import { motion } from "motion/react";
import { ShieldAlert, Users2, Home, HeartHandshake } from "lucide-react";

const features = [
  {
    title: "السرية التامة",
    description: "نحن نضمن حماية هويتك وخصوصيتك في جميع مراحل العلاج، نؤمن أن الثقة هي أساس التعافي.",
    icon: ShieldAlert,
  },
  {
    title: "فريق متخصص",
    description: "نخبة من الأطباء والاستشاريين النفسيين ذوي الخبرة الواسعة في علاج الإدمان والاضطرابات النفسية.",
    icon: Users2,
  },
  {
    title: "بيئة آمنة",
    description: "مرافق مجهزة توفر الراحة والسكينة، مما يساعد في التركيز الكامل على رحلة التحسن.",
    icon: Home,
  },
  {
    title: "دعم ممتد",
    description: "لا ينتهي عملنا بانتهاء العلاج، بل نستمر في تقديم الدعم لمنع الانتكاس وضمان استمرار التعافي.",
    icon: HeartHandshake,
  },
];

export function WhyDarTayba() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
            >
              لماذا يختار المرضى وعائلاتهم <br />
              <span className="text-secondary-foreground underline decoration-wavy underline-offset-8">مستشفى دار طيبة؟</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl opacity-90 mb-12"
            >
              نحن نقدم أكثر من مجرد علاج طبي؛ نحن نقدم بيئة إنسانية متكاملة تعيد بناء الإنسان من الداخل.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-colors"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="opacity-80 leading-relaxed font-light">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
