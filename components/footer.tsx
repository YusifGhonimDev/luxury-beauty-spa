"use client";

import { Instagram, Linkedin, MapPin } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <footer
      id="contact"
      className={`bg-accent relative z-10 text-primary-foreground py-12 md:py-16 px-4 ${
        isArabic ? "font-arabic-body" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3
              className={`text-2xl font-bold mb-4 ${
                isArabic ? "font-arabic-title" : "font-serif"
              }`}
            >
              {t("brand")}
            </h3>
            <p className="font-light text-primary-foreground/80">
              {t("tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">
              {t("quickLinks")}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${locale}/services`}
                  className="font-light text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {useTranslations("nav")("services")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/gift-cards`}
                  className="font-light text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {useTranslations("nav")("giftCards")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="font-light text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {useTranslations("nav")("about")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">
              {t("contact")}
            </h4>
            <div className="space-y-2">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="font-light text-sm">
                  123 Luxury Lane, Wellness City, WC 12345
                </span>
              </a>
              <p className="font-light text-primary-foreground/80 text-sm">
                +1 (555) 123-4567
              </p>
              <p className="font-light text-primary-foreground/80 text-sm">
                hello@fuar.com
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">
              {t("follow")}
            </h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center font-light text-primary-foreground/60 text-sm">
            {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
