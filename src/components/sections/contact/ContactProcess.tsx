"use client";

import { motion } from "motion/react";
import { PhoneForwarded, ClipboardList, Handshake } from "lucide-react";

const steps = [
  {
    title: "تواصل خلال 24 ساعة",
    desc: "سيقوم أحد أعضاء فريقنا المتخصص بمراجعة طلبك والتواصل معك بهدوء.",
    icon: PhoneForwarded,
  },
  {
    title: "جلسة تقييم",
    desc: "لقاء ودي أولي لفهم الاحتياجات وتحديد أفضل مسار للدعم.",
    icon: ClipboardList,
  },
  {
    title: "اقتراح خطة علاج",
    desc: "بناء خطة علاجية مخصصة وعلمية تبدأ فور استعدادك.",
    icon: Handshake,
  },
];

export function ContactProcess() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">ماذا يحدث بعد التواصل؟</h2>
          <p className="text-lg text-muted-foreground">خطوات بسيطة تضمن لك الوضوح والراحة منذ البداية.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto relative">
          {/* Decorative dashed lines (desktop) */}
          <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-px border-t-2 border-dashed border-muted -z-1" />

          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center relative z-10"
            >
              <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center mb-6 shadow-xl ring-8 ring-background">
                <s.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
