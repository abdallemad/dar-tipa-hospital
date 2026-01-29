"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section ref={containerRef} className="relative min-h-[110vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background blobs with parallax */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          style={{ opacity, scale }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight"
          >
            بوابة التعافي والسكينة في <span className="text-primary">مستشفى دار طيبة</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            نحن هنا لنقف بجانبك في كل خطوة نحو حياة أفضل، بخصوصية تامة واحترافية عالية في علاج الصحة النفسية والإدمان.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="text-lg px-10 py-8 rounded-full shadow-lg hover:shadow-primary/20 transition-all gap-2 group">
              اطلب مساعدة الآن
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform rtl:-rotate-180 rtl:group-hover:-translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-8 rounded-full border-2">
              اكتشف خدماتنا
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative indicator for scroll */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-sm font-medium uppercase tracking-widest">اسحب للأسفل</span>
        <div className="w-px h-12 bg-linear-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
