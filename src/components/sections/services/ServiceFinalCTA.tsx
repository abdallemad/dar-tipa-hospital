"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

export function ServiceFinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <PhoneCall className="w-10 h-10 text-primary animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            طلب المساعدة هو <span className="text-primary underline decoration-wavy underline-offset-8">أول خطوة</span> نحو التعافي
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            تذكر أنك لست وحدك. فريقنا متاح للرد على استفساراتك بسرية تامة على مدار الساعة.
          </p>
          <Button size="lg" className="rounded-full px-12 py-8 text-xl font-bold shadow-xl hover:scale-105 transition-transform">
            تواصل معنا الآن
          </Button>
          <p className="mt-8 text-muted-foreground">أو تواصل معنا عبر الهاتف: <strong>01234567890</strong></p>
        </motion.div>
      </div>
    </section>
  );
}
