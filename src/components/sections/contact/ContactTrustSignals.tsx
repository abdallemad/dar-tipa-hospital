"use client";

import { motion } from "motion/react";
import { Lock, Heart, ShieldCheck } from "lucide-react";

const signals = [
  {
    title: "سرية كاملة",
    icon: Lock,
    color: "text-blue-500",
  },
  {
    title: "فريق متخصص",
    icon: ShieldCheck,
    color: "text-primary",
  },
  {
    title: "تعامل إنساني",
    icon: Heart,
    color: "text-red-500",
  },
];

export function ContactTrustSignals() {
  return (
    <section className="py-12 bg-background border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-12 md:gap-24">
          {signals.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className={`w-12 h-12 rounded-full bg-muted flex items-center justify-center ${s.color}`}>
                <s.icon className="w-6 h-6" />
              </div>
              <span className="text-lg font-bold">{s.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
