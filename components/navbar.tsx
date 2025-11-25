"use client";

import {
  AnimatePresence,
  Variants,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname || `/${newLocale}`);
  };

  // 1. CHECK IF WE ARE ON THE HOME PAGE
  // The path is usually "/en" or "/ar". If it matches exactly, we are home.
  const isHomePage = pathname === `/${locale}`;

  // 2. LOGIC UPDATE:
  // The Navbar is "Solid" (White BG, Dark Text) if:
  // - We have scrolled down (isScrolled)
  // - The mobile menu is open (isOpen)
  // - OR... We are NOT on the homepage (!isHomePage).
  //   (This forces inner pages to always be readable).
  const isSolid = isScrolled || isOpen || !isHomePage;

  const textColorClass = isSolid
    ? "text-foreground/80 hover:text-primary"
    : "text-white/90 hover:text-white";
  const logoColorClass = isSolid ? "text-primary" : "text-white";
  const underlineClass = isSolid ? "bg-primary" : "bg-white";
  const langButtonClass = isSolid
    ? "text-foreground/80 hover:text-primary border-border hover:border-primary bg-card"
    : "text-white hover:text-white border-white/30 hover:border-white bg-transparent hover:bg-white/10";
  const menuIconClass = isSolid ? "text-foreground" : "text-white";

  const navLinks = [
    { href: `/${locale}/about`, label: t("about") },
    { href: `/${locale}/services`, label: t("services") },
    { href: `/${locale}/gift-cards`, label: t("giftCards") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    open: {
      opacity: 1,
      height: "100vh",
      transition: { duration: 0.3, ease: "easeInOut", staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isSolid
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent border-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href={`/${locale}`} className="shrink-0 relative z-50">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`block text-3xl font-serif font-bold tracking-tighter transition-colors duration-300 ${logoColorClass} ${
                locale === "ar" ? "font-arabic-title" : ""
              }`}
            >
              FUAR
            </motion.span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const activeTextClass = isSolid
                ? "text-primary font-medium"
                : "text-white font-medium";

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative group text-sm font-light transition-colors"
                >
                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      isActive ? activeTextClass : textColorClass
                    }`}
                  >
                    {link.label}
                  </span>
                  <span
                    className={`absolute left-0 bottom-0 h-px transition-all duration-300 ${underlineClass} ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className={`cursor-pointer px-4 py-2 text-sm font-medium transition-colors border focus:outline-none rounded-full shadow-sm ${langButtonClass}`}
            >
              {locale === "en" ? "العربية" : "English"}
            </motion.button>
            <Link href={`/${locale}/booking`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer px-6 py-2.5 bg-primary text-primary-foreground font-medium text-sm rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                {t("bookAppointment")}
              </motion.button>
            </Link>
          </div>

          <motion.button
            className={`md:hidden p-2 z-50 relative transition-colors duration-300 ${menuIconClass}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden fixed top-20 left-0 w-full bg-background border-t border-border overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div key={link.href} variants={itemVariants}>
                    <Link
                      href={link.href}
                      className={`block text-lg font-light py-2 pl-2 border-l-2 transition-colors ${
                        isActive
                          ? "text-primary border-primary bg-muted/30 font-medium"
                          : "text-foreground hover:text-primary border-transparent hover:border-primary hover:bg-muted/30"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                variants={itemVariants}
                className="pt-4 space-y-4 border-t border-border mt-4"
              >
                <button
                  onClick={() => {
                    toggleLanguage();
                    setIsOpen(false);
                  }}
                  className="w-full text-left text-lg font-light py-2 text-foreground hover:text-primary transition-colors pl-2"
                >
                  {locale === "en" ? "العربية" : "English"}
                </button>
                <Link
                  href={`/${locale}/booking`}
                  onClick={() => setIsOpen(false)}
                  className="block"
                >
                  <button className="w-full px-6 py-4 bg-primary text-primary-foreground font-medium text-lg rounded-xl hover:bg-primary/90 transition-colors shadow-md">
                    {t("bookAppointment")}
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
