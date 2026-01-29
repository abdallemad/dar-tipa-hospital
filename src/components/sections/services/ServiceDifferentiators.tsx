"use client";

import { motion } from "motion/react";
import { Lock, Fingerprint, Award, Heart } from "lucide-react";

const diffs = [
  {
    title: "سرية تامة",
    desc: "خصوصية المريض فوق كل اعتبار ولدينا أنظمة صارمة لحماية البيانات.",
    icon: Lock,
  },
  {
    title: "خطط فردية",
    desc: "لا نؤمن بالعلاجات النمطية؛ كل مريض يحصل على خطة حسب احتياجه.",
    icon: Fingerprint,
  },
  {
    title: "فريق متخصص",
    desc: "أطباء ومعالجون حاصلون على أعلى الشهادات الدولية في الطب النفسي.",
    icon: Award,
  },
  {
    title: "دعم إنساني",
    desc: "نعامل مرضانا بروح العائلة ونقدم دعماً يتخطى حدود الجلسات الطبية.",
    icon: Heart,
  },
];

export function ServiceDifferentiators() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">ما يميز خدماتنا</h2>
          <p className="text-lg text-muted-foreground">لماذا تعتبر دار طيبة الخيار الأول للباحثين عن جودة الرعاية.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {diffs.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[2rem] bg-background border border-border shadow-sm hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <d.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{d.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
