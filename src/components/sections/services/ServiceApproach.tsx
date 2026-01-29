"use client";

import { motion } from "motion/react";
import { ClipboardCheck, Route, Users, ShieldCheck } from "lucide-react";

const steps = [
  {
    title: "تقييم شامل",
    desc: "دراسة الحالة من الجوانب الطبية والنفسية.",
    icon: ClipboardCheck,
  },
  {
    title: "خطة شخصية",
    desc: "بناء مسار علاجي فريد لكل مريض.",
    icon: Route,
  },
  {
    title: "جلسات منتظمة",
    desc: "دعم علاجي مستمر بإشراف متخصصين.",
    icon: Users,
  },
  {
    title: "دعم مستمر",
    desc: "متابعة ما بعد العلاج لضمان الثبات.",
    icon: ShieldCheck,
  },
];

export function ServiceApproach() {
  return (
    <section className="py-24 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">منهجنا في الشفاء</h2>
          <p className="text-lg opacity-80">خطوات واضحة نتبعها لضمان أفضل النتائج.</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-24 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[40px] left-[15%] right-[15%] h-px bg-white/20 z-0" />

          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center max-w-[200px] relative z-10"
            >
              <div className="w-20 h-20 rounded-full bg-white text-primary flex items-center justify-center mb-6 shadow-xl ring-8 ring-primary">
                <s.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-sm opacity-80 leading-relaxed font-light">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
