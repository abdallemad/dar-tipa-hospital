"use client";

import { motion } from "motion/react";
import { UserRoundIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const doctors = [
  {
    name: "د. أحمد علي",
    role: "استشاري الطب النفسي",
    experience: "15 عاماً",
    color: "bg-blue-50 text-blue-500",
    supportLine: "يهتم بدعم المرضى نفسياً في بيئة آمنة تضمن الخصوصية والراحة.",
  },
  {
    name: "د. سارة محمود",
    role: "أخصائية علاج الإدمان",
    experience: "10 أعوام",
    color: "bg-teal-50 text-teal-500",
    supportLine: "تعمل بكل إنسانية لمرافقة المتعافين في كل خطوة نحو حياة جديدة.",
  },
  {
    name: "د. ليلى حسن",
    role: "معالجة أسرية وسلوكية",
    experience: "8 أعوام",
    color: "bg-purple-50 text-purple-500",
    supportLine: "تؤمن بأن الدعم الأسري هو حجر الزاوية في استقرار الصحة النفسية.",
  },
  {
    name: "د. محمد سامي",
    role: "أخصائي علم النفس الإكلينيكي",
    experience: "12 عاماً",
    color: "bg-orange-50 text-orange-500",
    supportLine: "يقدم تقييمات دقيقة وخطط علاجية مخصصة لتحسين جودة الحياة.",
  },
  {
    name: "أ. خالد يوسف",
    role: "أخصائي علاج وظيفي",
    experience: "7 أعوام",
    color: "bg-indigo-50 text-indigo-500",
    supportLine: "يساعد المرضى على استعادة استقلاليتهم ومهاراتهم الحياتية اليومية.",
  },
  {
    name: "د. مريم نصر",
    role: "أخصائية العلاج بالفن",
    experience: "9 أعوام",
    color: "bg-pink-50 text-pink-500",
    supportLine: "تستخدم الإبداع كأداة قوية للتعبير عن المشاعر وتفريغ الضغوط النفسية.",
  },
];

export function DoctorsList() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Card className="border-none shadow-sm hover:shadow-xl transition-all duration-500 rounded-[2.5rem] overflow-hidden bg-muted/20">
                <CardContent className="p-8 text-center flex flex-col items-center">
                  <div className={`w-32 h-32 ${doctor.color} rounded-[2rem] mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                    <UserRoundIcon className="w-16 h-16" />
                  </div>

                  <h3 className="text-2xl font-bold mb-1">{doctor.name}</h3>
                  <p className="text-primary font-medium mb-4">{doctor.role}</p>

                  <div className="inline-block px-4 py-1 bg-primary/5 rounded-full text-sm text-primary mb-6 font-medium">
                    خبرة {doctor.experience}
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed italic border-t border-border pt-6 w-full">
                    "{doctor.supportLine}"
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
