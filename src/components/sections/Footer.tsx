"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 bg-background relative overflow-hidden text-center">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-linear-to-br from-primary to-primary/80 text-primary-foreground p-12 md:p-20 rounded-[3rem] shadow-2xl relative"
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <h2 className="text-3xl md:text-5xl font-bold mb-6">هل أنت جاهز لبدء حياة جديدة؟</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            لا تتردد في طلب المساعدة، نحن هنا من أجلك وبانتظار تواصلك معنا بكل سرية وتفهم.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" variant="secondary" className="text-lg px-12 py-8 rounded-full shadow-xl hover:scale-105 transition-transform bg-white text-primary hover:bg-white/90">
              احجز استشارة الآن
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-8 rounded-full border-2 border-white/30 text-white hover:bg-white/10 flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              موقعنا الجغرافي
            </Button>
            <div className="flex items-center gap-3 text-2xl font-bold">
              <Phone className="w-6 h-6" />
              <span>01234567890</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-muted py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-center md:text-right">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-6">مستشفى دار طيبة</h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md mx-auto md:mx-0">
              صرح طبي رائد متخصص في علاج الإدمان والطب النفسي، نجمع بين الخبرة العلمية والمعاملة الإنسانية الراقية.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">روابط سريعة</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">من نحن</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">خدماتنا</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">قصص التعافي</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">تواصل معنا</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">معلومات التواصل</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>القاهرة، جمهورية مصر العربية</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 text-right">
                <Mail className="w-5 h-5 text-primary" />
                <span>info@dartiba.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 text-center text-muted-foreground text-sm font-light">
          <p>© {new Date().getFullYear()} جميع الحقوق محفوظة لمستشفى دار طيبة لعلاج الإدمان والطب النفسي.</p>
        </div>
      </div>
    </footer>
  );
}
