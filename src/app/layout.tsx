import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScroll";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-plex-sans-arabic",
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "مستشفى دار طيبة | متخصصون في الصحة النفسية وعلاج الإدمان",
    template: "%s | مستشفى دار طيبة",
  },
  description: "دار طيبة هي وجهتكم الأولى للتعافي النفسي وعلاج الإدمان في بيئة آمنة تضمن السرية والخصوصية التامة تحت إشراف نخبة من الأطباء والمتخصصين.",
  keywords: ["صحة نفسية", "علاج إدمان", "مستشفى نفسي", "تعافي", "دار طيبة", "استشارات نفسية"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body
        className={`${ibmPlexSansArabic.variable} font-sans antialiased`}
      >
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
