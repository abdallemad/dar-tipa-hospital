"use client";

import { motion } from "motion/react";
import { Target, Eye } from "lucide-react";

export function MissionVision() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[3rem] bg-primary/5 border border-primary/10"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white mb-8">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-primary">رسالتنا</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              تقديم رعاية طبية ونفسية متميزة تعتمد على أحدث المعايير العلمية، وتوفير بيئة آمنة للمرضى تعزز من فرص التعافي المستدام والعودة للمجتمع بقوة وثقة.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[3rem] bg-secondary/5 border border-secondary/10"
          >
            <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center text-secondary-foreground mb-8">
              <Eye className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-secondary-foreground">رؤيتنا</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              أن نكون المركز الرائد والأكثر ثقة في منطقة الشرق الأوسط في مجالات الطب النفسي وعلاج الإدمان، من خلال الالتزام بالخصوصية والمهنية العالية.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
