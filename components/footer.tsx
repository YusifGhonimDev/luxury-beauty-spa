"use client";

import { Instagram, Linkedin, MapPin } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import Image from "next/image";
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
            <div className="mb-8">
              <Image
                src="/logo-white.svg"
                alt="FUAR"
                width={280}
                height={100}
                className="h-28 w-auto object-contain"
              />
            </div>
            <p className="font-light text-primary-foreground/80 leading-relaxed">
              {t("tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-primary-foreground uppercase tracking-wider text-sm">
              {t("quickLinks")}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`/${locale}/services`}
                  className="font-light text-primary-foreground/80 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  {useTranslations("nav")("services")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/gift-cards`}
                  className="font-light text-primary-foreground/80 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  {useTranslations("nav")("giftCards")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="font-light text-primary-foreground/80 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  {useTranslations("nav")("about")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6 text-primary-foreground uppercase tracking-wider text-sm">
              {t("contact")}
            </h4>
            <div className="space-y-4">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-primary-foreground/80 hover:text-white transition-colors group"
              >
                <MapPin
                  size={20}
                  className="mt-1 flex-shrink-0 group-hover:text-white transition-colors"
                />
                <span className="font-light text-sm leading-relaxed">
                  123 Wellness Ave, Luxury City
                </span>
              </a>
              <p className="font-light text-primary-foreground/80 text-sm pl-8">
                +966 50 123 4567
              </p>
              <p className="font-light text-primary-foreground/80 text-sm pl-8">
                hello@fuar-spa.com
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-6 text-primary-foreground uppercase tracking-wider text-sm">
              {t("follow")}
            </h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 p-3 rounded-full text-primary-foreground/80 hover:text-white hover:bg-primary-foreground/20 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 p-3 rounded-full text-primary-foreground/80 hover:text-white hover:bg-primary-foreground/20 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center font-light text-primary-foreground/50 text-sm">
            {t("copyright")}
          </p>
          <div className="flex gap-6 text-sm font-light text-primary-foreground/50">
            <Link
              href="#"
              className="hover:text-primary-foreground/80 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="hover:text-primary-foreground/80 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
