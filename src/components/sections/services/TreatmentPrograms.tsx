"use client";

import { motion } from "motion/react";
import { CalendarDays, Trophy, History } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const programs = [
  {
    title: "برنامج 30 يوم",
    who: "مناسب للتركيز المكثف وسحب السموم الأولي.",
    goal: "الاستقرار البدني والنفسي البدائي وبناء خريطة طريق للتعافي.",
    followUp: "جلسات متابعة أسبوعية بعد الانتهاء.",
    icon: CalendarDays,
    color: "text-blue-500",
  },
  {
    title: "برنامج 90 يوم",
    who: "للتعافي العميق وتغيير العادات السلوكية المتأصلة.",
    goal: "إعادة بناء الشخصية والقدرة على مواجهة التحديات بدون انتكاس.",
    followUp: "دعم ممتد لمرحلة ما بعد الإقامة.",
    icon: History,
    color: "text-primary",
  },
  {
    title: "المتابعة بعد التعافي",
    who: "للمتعافين الذين يرغبون في الحفاظ على استقرارهم.",
    goal: "الوقاية من الانتكاس والاندماج الكامل في المجتمع بنجاح.",
    followUp: "مجموعات دعم مستمرة واستشارات عند الطلب.",
    icon: Trophy,
    color: "text-secondary-foreground",
  },
];

export function TreatmentPrograms() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">البرامج العلاجية</h2>
          <p className="text-lg text-muted-foreground">خيارات منظمة لتناسب رحلتك الخاصة نحو الشفاء.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-full"
            >
              <Card className="h-full border-none shadow-xl rounded-[2.5rem] overflow-hidden group hover:shadow-2xl transition-all">
                <CardHeader className="p-8 pb-4">
                  <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <p.icon className={`w-8 h-8 ${p.color}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold">{p.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0 space-y-6">
                  <div>
                    <h4 className="font-bold text-primary mb-2">لمن هذا البرنامج؟</h4>
                    <p className="text-muted-foreground">{p.who}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-2">الهدف الرئيسي:</h4>
                    <p className="text-muted-foreground">{p.goal}</p>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm italic text-muted-foreground"><strong>شكل المتابعة:</strong> {p.followUp}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
