"use client";

import { motion } from "motion/react";

export function DoctorsHero() {
  return (
    <section className="relative py-24 bg-muted/30 overflow-hidden pt-32">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          فريق علاجي متخصص <br /> <span className="text-primary">لدعمك في رحلتك</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          نخبة من الأطباء والأخصائيين الذين يجمعون بين الخبرة العلمية الواسعة والسمت الإنساني الرفيع، لتأمين أفضل رعاية ممكنة.
        </motion.p>
      </div>
    </section>
  );
}
