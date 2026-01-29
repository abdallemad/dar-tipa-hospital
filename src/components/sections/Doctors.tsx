"use client";

import { motion } from "motion/react";
import { User, UserRoundIcon, Users2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const doctors = [
  {
    name: "د. أحمد علي",
    role: "استشاري الطب النفسي",
    experience: "15 عاماً",
    color: "bg-blue-50 text-blue-500",
  },
  {
    name: "د. سارة محمود",
    role: "أخصائية علاج الإدمان",
    experience: "10 أعوام",
    color: "bg-teal-50 text-teal-500",
  },
  {
    name: "د. ليلى حسن",
    role: "معالجة أسرية وسلوكية",
    experience: "8 أعوام",
    color: "bg-purple-50 text-purple-500",
  },
  {
    name: "د. محمد سامي",
    role: "أخصائي علم النفس الإكلينيكي",
    experience: "12 عاماً",
    color: "bg-orange-50 text-orange-500",
  },
];

export function Doctors() {
  return (
    <section className="py-24 bg-muted/30" id="doctors">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            نخبة من الأطباء والمتخصصين
          </motion.h2>
          <p className="text-lg text-muted-foreground">كفاءات علمية متميزة تعمل بروح الفريق لخدمتكم.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-none shadow-sm hover:shadow-xl transition-all duration-300 rounded-[2.5rem] bg-background text-center p-8">
                <CardContent className="p-0">
                  <div className={`w-24 h-24 ${doctor.color} rounded-3xl mx-auto mb-6 flex items-center justify-center`}>
                    <UserRoundIcon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{doctor.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{doctor.role}</p>
                  <div className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full inline-block">
                    خبرة {doctor.experience}
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
