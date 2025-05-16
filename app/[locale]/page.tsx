import { useTranslation } from "@/i18n";
import Hero from "@/app/components/Hero";

export default async function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { t } = await useTranslation(locale, "common");

  return (
    <main>
      <Hero t={t} />
    </main>
  );
}
