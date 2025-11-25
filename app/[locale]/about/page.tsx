import { useLocale, useTranslations } from "next-intl";

import { Card } from "@/components/ui/card";

export default function AboutPage() {
  const t = useTranslations("about");
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1
            className={`text-5xl font-bold text-primary mb-8 text-center ${
              isArabic ? "font-arabic-title" : "font-serif"
            }`}
          >
            {t("title")}
          </h1>

          <Card className="p-8 mb-8 bg-card border-border">
            <h2
              className={`text-2xl font-bold text-accent mb-4 ${
                isArabic ? "font-arabic-title" : "font-serif"
              }`}
            >
              {t("story")}
            </h2>
            <p
              className={`text-foreground/80 leading-relaxed mb-6 ${
                isArabic ? "font-arabic-body" : ""
              }`}
            >
              {t("storyText")}
            </p>
          </Card>

          <Card className="p-8 mb-8 bg-card border-border">
            <h2
              className={`text-2xl font-bold text-accent mb-4 ${
                isArabic ? "font-arabic-title" : "font-serif"
              }`}
            >
              {t("philosophy")}
            </h2>
            <p
              className={`text-foreground/80 leading-relaxed mb-6 ${
                isArabic ? "font-arabic-body" : ""
              }`}
            >
              {t("philosophyText")}
            </p>
          </Card>

          <Card className="p-8 bg-card border-border">
            <h2
              className={`text-2xl font-bold text-accent mb-4 ${
                isArabic ? "font-arabic-title" : "font-serif"
              }`}
            >
              {t("whyChooseUs")}
            </h2>
            <ul className="space-y-3 text-foreground/80">
              {t.raw("reasons").map((reason: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className={isArabic ? "font-arabic-body" : ""}>
                    {reason}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </main>
  );
}
