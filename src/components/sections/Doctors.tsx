"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const doctors = [
  {
    name: "د. أحمد علي",
    role: "استشاري الطب النفسي",
    image: "/doctors/psychiatrist.png",
    description: "خبرة أكثر من 15 عاماً في علاج الاكتئاب والاضطرابات النفسية المعقدة.",
  },
  {
    name: "د. سارة محمود",
    role: "أخصائية علاج الإدمان",
    image: "/doctors/specialist.png",
    description: "متخصصة في برامج إعادة التأهيل السلوكي والتعافي من الإدمان.",
  },
  {
    name: "د. ليلى حسن",
    role: "معالجة أسرية",
    image: "/doctors/therapist.png",
    description: "تركيز خاص على تحسين الروابط الأسرية ودعم أهالي المتعافين.",
  },
];

export function Doctors() {
  return (
    <section className="py-24 bg-background overflow-hidden" id="doctors">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            نخبة من أفضل الأطباء
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            نحن نفخر بوجود فريق طبي متكامل يتميز بالخبرة العلمية والسمت الإنساني الرفيع.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="border-none shadow-none bg-transparent">
                <CardContent className="p-0">
                  <div className="relative aspect-4/5 rounded-[2.5rem] overflow-hidden mb-6 shadow-2xl transition-all duration-500 group-hover:shadow-primary/20">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="text-center px-4">
                    <h3 className="text-2xl font-bold mb-1 text-foreground">{doctor.name}</h3>
                    <p className="text-primary font-medium mb-3">{doctor.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {doctor.description}
                    </p>
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
