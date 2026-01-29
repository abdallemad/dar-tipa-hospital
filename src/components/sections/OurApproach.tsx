"use client";

import { motion } from "motion/react";
import { Search, ClipboardList, CheckCircle2, Trophy } from "lucide-react";

const steps = [
  {
    title: "تقييم شامل",
    description: "نبدأ بفهم حالتك بدقة من خلال فريق طبي ونفسي متخصص.",
    icon: Search,
  },
  {
    title: "خطة علاج مخصصة",
    description: "تصميم برنامج علاجي يتناسب مع احتياجاتك الشخصية.",
    icon: ClipboardList,
  },
  {
    title: "متابعة مستمرة",
    description: "دعم على مدار الساعة لضمان تقدمك وثباتك في رحلة العلاج.",
    icon: CheckCircle2,
  },
  {
    title: "تعافي مستدام",
    description: "تمكينك من العودة للحياة بقوة وبناء مستقبل خالٍ من المعاناة.",
    icon: Trophy,
  },
];

export function OurApproach() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            رحلتك نحو التعافي
          </motion.h2>
          <p className="text-lg text-muted-foreground">خطوات بسيطة ومدروسة نرافقك فيها من البداية حتى النهاية.</p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-xl mb-6 ring-8 ring-background">
                  <step.icon className="w-10 h-10" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-sm font-bold border-2 border-background">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
