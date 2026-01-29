"use client";

import { motion } from "motion/react";
import { User } from "lucide-react";

export function TeamPreview() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">فريق العمل</h2>
          <p className="text-lg text-muted-foreground">نخبة من الكفاءات العلمية في خدمتك.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 p-8 rounded-3xl bg-background border border-border shadow-sm"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <User className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">طبيب استشاري</h3>
              <p className="text-muted-foreground italic">متخصص في الطب النفسي</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-6 p-8 rounded-3xl bg-background border border-border shadow-sm"
          >
            <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center text-secondary-foreground">
              <User className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">معالج سلوكي</h3>
              <p className="text-muted-foreground italic">خبير في علاج الإدمان</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
