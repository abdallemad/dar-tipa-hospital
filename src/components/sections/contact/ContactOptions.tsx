"use client";

import { motion } from "motion/react";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const options = [
  {
    title: "مكالمة هاتفية",
    value: "01234567890",
    desc: "تحدث مع فريقنا مباشرة في أي وقت.",
    icon: Phone,
    href: "tel:01234567890",
    color: "bg-blue-50 text-blue-500",
  },
  {
    title: "واتساب",
    value: "01234567890",
    desc: "تواصل معنا عبر رسائل سريعة وخاصة.",
    icon: MessageCircle,
    href: "https://wa.me/01234567890",
    color: "bg-green-50 text-green-500",
  },
  {
    title: "زيارة المركز",
    value: "القاهرة، مصر",
    desc: "بيئة مريحة ومهيأة لاستقبالك.",
    icon: MapPin,
    href: "#",
    color: "bg-orange-50 text-orange-500",
  },
];

export function ContactOptions() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">طرق التواصل المتاحة</h2>
          <p className="text-lg text-muted-foreground">اختر الوسيلة التي تجعلك تشعر براحة أكبر.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {options.map((opt, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <a href={opt.href}>
                <Card className="h-full border border-border shadow-sm hover:shadow-lg transition-all text-center p-8 rounded-[2.5rem] group">
                  <CardContent className="p-0">
                    <div className={`w-16 h-16 rounded-2xl ${opt.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                      <opt.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{opt.title}</h3>
                    <p className="text-primary font-bold mb-2">{opt.value}</p>
                    <p className="text-muted-foreground text-sm">{opt.desc}</p>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
