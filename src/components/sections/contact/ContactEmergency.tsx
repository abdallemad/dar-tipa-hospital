"use client";

import { motion } from "motion/react";
import { AlertCircle } from "lucide-react";

export function ContactEmergency() {
  return (
    <section className="py-12 bg-muted/20 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 text-muted-foreground text-sm max-w-3xl mx-auto"
        >
          <AlertCircle className="w-6 h-6 text-primary shrink-0" />
          <p className="leading-relaxed">
            ملاحظة هامة: في حالات الطوارئ النفسية الحرجة التي تطلب تدخلاً فورياً، يُرجى التواصل فوراً مع خدمات الطوارئ المحلية أو التوجه لأقرب مركز طوارئ. نحن هنا لدعمك في أي وقت آخر تشعر فيه بالحاجة.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
