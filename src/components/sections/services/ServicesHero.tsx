"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export function ServicesHero() {
  return (
    <section className="relative py-24 bg-muted/30 overflow-hidden pt-32">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          خدمات علاجية متكاملة <br /> <span className="text-primary">باحترام وخصوصية</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          برامج مصممة لمساعدتك على التعافي خطوة بخطوة، في بيئة آمنة تدعم رحلتك نحو التوازن النفسي.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="rounded-full px-8 gap-2 shadow-lg">
            اطلب مساعدة
            <ArrowRight className="w-5 h-5 rtl:-rotate-180" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 gap-2">
            <MessageCircle className="w-5 h-5" />
            احجز استشارة
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
