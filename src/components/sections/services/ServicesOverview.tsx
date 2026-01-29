"use client";

import { motion } from "motion/react";
import { Brain, Smile, Activity, Users, HeartPulse } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "علاج الاكتئاب",
    description: "نأخذ بيدك لاستعادة شغفك بالحياة وتجاوز لحظات الحزن.",
    icon: Smile,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    title: "اضطرابات القلق",
    description: "أدوات عملية لتهدئة عقلك والتغلب على مخاوفك اليومية.",
    icon: Brain,
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    title: "علاج الإدمان",
    description: "برامج تعافي شاملة تضمن لك العودة لحياتك بقوة.",
    icon: Activity,
    color: "text-teal-500",
    bg: "bg-teal-50",
  },
  {
    title: "العلاج الأسري",
    description: "إصلاح الروابط العائلية وبناء بيئة داعمة للجميع.",
    icon: Users,
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    title: "جلسات الدعم النفسي",
    description: "مساحة آمنة للتعبير عن مشاعرك والحصول على التوجيه.",
    icon: HeartPulse,
    color: "text-red-500",
    bg: "bg-red-50",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">خدماتنا التخصصية</h2>
          <p className="text-lg text-muted-foreground">نظرة سريعة على ما نقدمه لك من رعاية واهتمام.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full border-none shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center p-6">
                <div className={`w-14 h-14 rounded-2xl ${s.bg} flex items-center justify-center mb-6`}>
                  <s.icon className={`w-8 h-8 ${s.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 grow">{s.description}</p>
                <Button variant="link" className="text-primary font-bold p-0">اعرف أكتر</Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
