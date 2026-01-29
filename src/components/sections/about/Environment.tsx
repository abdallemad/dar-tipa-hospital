"use client";

import { motion } from "motion/react";
import { Trees, Coffee, Waves } from "lucide-react";

export function Environment() {
  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">بيئة تساعد على الشفاء</h2>
          <p className="text-lg text-muted-foreground">مرافقنا مصممة لتوفر لك الراحة والسكينة طوال فترة إقامتك.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-square rounded-[3rem] bg-background border border-border flex flex-col items-center justify-center p-8 gap-6 shadow-sm hover:shadow-lg transition-all"
          >
            <Trees className="w-16 h-16 text-primary/40" />
            <h3 className="text-xl font-bold">مساحات خضراء</h3>
            <p className="text-center text-muted-foreground">أماكن مخصصة للمشي والتأمل في الهواء الطلق.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="aspect-square rounded-[3rem] bg-background border border-border flex flex-col items-center justify-center p-8 gap-6 shadow-sm hover:shadow-lg transition-all"
          >
            <Coffee className="w-16 h-16 text-primary/40" />
            <h3 className="text-xl font-bold">أماكن للاستراحة</h3>
            <p className="text-center text-muted-foreground">بيئة هادئة ومريحة تشعرك بأنك في منزلك.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="aspect-square rounded-[3rem] bg-background border border-border flex flex-col items-center justify-center p-8 gap-6 shadow-sm hover:shadow-lg transition-all"
          >
            <Waves className="w-16 h-16 text-primary/40" />
            <h3 className="text-xl font-bold">جلسات علاجية</h3>
            <p className="text-center text-muted-foreground">غرف مجهزة بأحدث الوسائل لراحة المرضى.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
