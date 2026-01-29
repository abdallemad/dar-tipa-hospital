"use client";

import { motion } from "motion/react";
import { Brain, Smile, Activity, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const items = [
  {
    title: "الاكتئاب",
    description: "نساعدك في الخروج من دائرة الحزن واستعادة بريق الحياة من جديد.",
    icon: Smile,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    title: "القلق والتوتر",
    description: "أدوات متخصصة لتهدئة العقل والتغلب على مخاوفك اليومية.",
    icon: Brain,
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    title: "علاج الإدمان",
    description: "برامج متكاملة للتعافي الجسدي والنفسي بمتابعة دقيقة وسرية.",
    icon: Activity,
    color: "text-teal-500",
    bg: "bg-teal-50",
  },
  {
    title: "العلاج الأسري",
    description: "إعادة بناء الروابط الأسرية وخلق بيئة داعمة لكل أفراد العائلة.",
    icon: Users,
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
];

export function WhoWeHelp() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            لمن نقدم خدماتنا؟
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            نحن متخصصون في التعامل مع مختلف التحديات النفسية بأسلوب إنساني يحترم خصوصية المريض.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="h-full border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <CardHeader className="pb-4">
                  <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
