"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-lg border-b shadow-sm py-2" : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform">
            ط
          </div>
          <span className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
            دار طيبة
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="font-medium hover:text-primary transition-colors">الرئيسية</Link>
          <Link href="/about" className="font-medium hover:text-primary transition-colors">من نحن</Link>
          <Link href="/services" className="font-medium hover:text-primary transition-colors">الخدمات</Link>
          <Link href="#doctors" className="font-medium hover:text-primary transition-colors">أطباؤنا</Link>
          <Link href="/contact" className="font-medium hover:text-primary transition-colors">تواصل معنا</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="tel:01234567890" className="flex items-center gap-2 text-primary font-bold hover:scale-105 transition-transform">
            <Phone className="w-5 h-5" />
            <span>01234567890</span>
          </Link>
          <Button className="rounded-full px-6 shadow-md hover:shadow-primary/20">ابدأ التعافي</Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b"
          >
            <div className="flex flex-col gap-4 p-6">
              <Link href="/" className="text-xl font-medium" onClick={() => setMobileMenuOpen(false)}>الرئيسية</Link>
              <Link href="/about" className="text-xl font-medium" onClick={() => setMobileMenuOpen(false)}>من نحن</Link>
              <Link href="/services" className="text-xl font-medium" onClick={() => setMobileMenuOpen(false)}>الخدمات</Link>
              <Link href="#doctors" className="text-xl font-medium" onClick={() => setMobileMenuOpen(false)}>أطباؤنا</Link>
              <Link href="/contact" className="text-xl font-medium" onClick={() => setMobileMenuOpen(false)}>تواصل معنا</Link>
              <hr />
              <div className="flex items-center justify-between">
                <Link href="tel:01234567890" className="flex items-center gap-2 text-primary font-bold">
                  <Phone className="w-5 h-5" />
                  <span>01234567890</span>
                </Link>
                <Button className="rounded-full">ابدأ التعافي</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
