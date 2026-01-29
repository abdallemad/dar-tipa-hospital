"use client";

import { motion } from "motion/react";
import { Heart, ShieldCheck, Lock } from "lucide-react";

const values = [
  {
    title: "الرحمة",
    description: "نتعامل مع كل مريض كإنسان يستحق كل الدعم والرعاية والتقدير.",
    icon: Heart,
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    title: "الخصوصية",
    description: "سرية بيانات وحالة مرضانا هي أولوية قصوى لا نقبل فيها التهاون.",
    icon: Lock,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    title: "الأمان",
    description: "نوفر بيئة طبية ونفسية آمنة تضمن للمريض التركيز الكامل على التعافي.",
    icon: ShieldCheck,
    color: "text-green-500",
    bg: "bg-green-50",
  },
];

export function Values() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">قيمنا الجوهرية</h2>
          <p className="text-lg text-muted-foreground">المبادئ التي تحكم كل ما نقوم به في دار طيبة.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background p-10 rounded-[2.5rem] text-center border border-border shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className={`w-16 h-16 rounded-2xl ${v.bg} flex items-center justify-center ${v.color} mx-auto mb-6`}>
                <v.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
