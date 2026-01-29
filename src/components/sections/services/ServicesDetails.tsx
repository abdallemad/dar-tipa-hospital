"use client";

import { motion } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, Clock, Users2, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const detailedServices = [
  {
    id: "depression",
    title: "علاج الاكتئاب",
    who: "الأفراد الذين يشعرون بفقدان الشغف، التعب المستمر، أو الانعزال الاجتماعي.",
    how: [
      "تقييم دقيق للحالة وتحديد مسببات الاكتئاب.",
      "جلسات علاج سلوكي معرفي (CBT) فردية.",
      "متابعة دورية لتحسن الحالة المزاجية."
    ],
    duration: "6 - 12 أسبوع",
  },
  {
    id: "addiction",
    title: "علاج الإدمان",
    who: "من يعانون من الاعتماد على المواد المخدرة أو العادات السلوكية الضارة.",
    how: [
      "برامج سحب السموم بإشراف طبي متكامل.",
      "تأهيل نفسي وسلوكي لمنع الانتكاس.",
      "مجموعات دعم للمتعافين (Support Groups)."
    ],
    duration: "12 - 24 أسبوع",
  },
  {
    id: "anxiety",
    title: "اضطرابات القلق",
    who: "الأشخاص الذين يواجهون نوبات هلع، قلق اجتماعي، أو توتر دائم.",
    how: [
      "تمارين الاسترخاء والتحكم في التنفس.",
      "مواجهة المخاوف بأسلوب تدريجي وعلمي.",
      "دعم نفسي لزيادة الثقة بالنفس والهدوء."
    ],
    duration: "4 - 8 أسابيع",
  },
];

export function ServicesDetails() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">تفاصيل الخدمات</h2>
          <p className="text-lg text-muted-foreground">تعرف أكثر على رحلتنا العلاجية لكل حالة.</p>
        </div>

        <Tabs defaultValue="depression" className="w-full max-w-5xl mx-auto" dir="rtl">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-background/50 p-2 rounded-full border border-border h-8">
            {detailedServices.map((s) => (
              <TabsTrigger
                key={s.id}
                value={s.id}
                className="rounded-full py-4 text-lg data-[state=active]:bg-primary data-[state=active]:text-white transition-all h-4"
              >
                {s.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {detailedServices.map((s) => (
            <TabsContent key={s.id} value={s.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-background rounded-[3rem] border border-border p-8 md:p-12 shadow-xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center gap-3 text-primary mb-4">
                        <Users2 className="w-6 h-6" />
                        <h3 className="text-xl font-bold">لمن هذه الخدمة؟</h3>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">{s.who}</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 text-primary mb-4">
                        <Clock className="w-6 h-6" />
                        <h3 className="text-xl font-bold">مدة البرنامج (تقريبية)</h3>
                      </div>
                      <p className="text-lg font-bold text-foreground">{s.duration}</p>
                    </div>

                    <Button size="lg" className="rounded-full px-10 shadow-md">تواصل معنا بسرية</Button>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-3 text-primary mb-4">
                      <HelpCircle className="w-6 h-6" />
                      <h3 className="text-xl font-bold">كيف نساعدك؟</h3>
                    </div>
                    {s.how.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-muted/50 border border-border/50">
                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                        <p className="text-lg text-foreground/90">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
