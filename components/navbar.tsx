"use client";

import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname || `/${newLocale}`);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="shrink-0">
            <span
              className={`text-3xl font-serif font-bold tracking-tighter text-primary ${
                locale === "ar" ? "font-arabic-title" : ""
              }`}
            >
              FUAR
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href={`/${locale}/about`}
              className="text-sm font-light hover:text-primary transition-colors"
            >
              {t("about")}
            </Link>
            <Link
              href={`/${locale}/services`}
              className="text-sm font-light hover:text-primary transition-colors"
            >
              {t("services")}
            </Link>
            <Link
              href={`/${locale}/gift-cards`}
              className="text-sm font-light hover:text-primary transition-colors"
            >
              {t("giftCards")}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="text-sm font-light hover:text-primary transition-colors"
            >
              {t("contact")}
            </Link>
          </div>

          {/* CTA Button and Language Switcher - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 text-sm font-light hover:text-primary transition-colors border border-border rounded-full"
            >
              {locale === "en" ? "العربية" : "English"}
            </button>
            <Link href={`/${locale}/booking`}>
              <button className="px-6 py-2.5 bg-primary text-primary-foreground font-medium text-sm rounded-full hover:bg-opacity-90 transition-colors">
                {t("bookAppointment")}
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link
              href={`/${locale}/about`}
              className="block text-sm font-light py-2 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t("about")}
            </Link>
            <Link
              href={`/${locale}/services`}
              className="block text-sm font-light py-2 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t("services")}
            </Link>
            <Link
              href={`/${locale}/gift-cards`}
              className="block text-sm font-light py-2 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t("giftCards")}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="block text-sm font-light py-2 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t("contact")}
            </Link>
            <button
              onClick={() => {
                toggleLanguage();
                setIsOpen(false);
              }}
              className="w-full text-left text-sm font-light py-2 hover:text-primary transition-colors"
            >
              {locale === "en" ? "العربية" : "English"}
            </button>
            <Link href={`/${locale}/booking`} onClick={() => setIsOpen(false)}>
              <button className="w-full px-6 py-2.5 bg-primary text-primary-foreground font-medium text-sm rounded-full hover:bg-opacity-90 transition-colors">
                {t("bookAppointment")}
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
