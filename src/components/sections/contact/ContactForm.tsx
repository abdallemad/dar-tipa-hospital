"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Lock, Send } from "lucide-react";

export function ContactForm() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-background rounded-[3rem] p-8 md:p-16 shadow-xl border border-border/50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">أرسل لنا طلبك</h2>
            <p className="text-muted-foreground italic">"اكتب بالقدر اللي تحبه، نحن هنا لنسمعك"</p>
          </div>

          <form className="space-y-8" dir="rtl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <Label htmlFor="name" className="text-lg font-bold">الاسم (اختياري)</Label>
                <Input
                  id="name"
                  placeholder="كيف نحب أن نناديك؟"
                  className="rounded-2xl py-6 bg-muted/20 border-border/50 focus:ring-primary"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="contact" className="text-lg font-bold">وسيلة التواصل (مطلوب)</Label>
                <Input
                  id="contact"
                  placeholder="رقم الهاتف أو البريد الإلكتروني"
                  className="rounded-2xl py-6 bg-muted/20 border-border/50 focus:ring-primary"
                  required
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="type" className="text-lg font-bold">نوع المشكلة</Label>
              <Select dir="rtl">
                <SelectTrigger className="rounded-2xl py-6 bg-muted/20 border-border/50 focus:ring-primary h-auto">
                  <SelectValue placeholder="اختر نوع الخدمة أو المشكلة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="anxiety">قلق</SelectItem>
                  <SelectItem value="depression">اكتئاب</SelectItem>
                  <SelectItem value="addiction">إدمان</SelectItem>
                  <SelectItem value="general">استشارة عامة</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label htmlFor="message" className="text-lg font-bold">رسالة (اختياري)</Label>
              <Textarea
                id="message"
                placeholder="صف لنا ما تشعر به بإيجاز..."
                className="rounded-2xl min-h-[150px] bg-muted/20 border-border/50 focus:ring-primary p-6"
              />
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2 p-4 rounded-2xl bg-primary/5 text-primary text-sm">
                <Lock className="w-5 h-5 shrink-0" />
                <p>لن يتم مشاركة بياناتك مع أي طرف، ويتم التعامل معها بسرية تامة.</p>
              </div>

              <Button size="lg" className="rounded-full py-8 text-xl font-bold shadow-xl gap-3">
                أرسل الطلب
                <Send className="w-6 h-6 rtl:-rotate-90" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
