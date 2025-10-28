import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: "Contact - Manikam Web Solutions",
    alternates: {
      canonical: `https://manikamwebsolutions.com/${locale}/contact`,
      languages: {
        sr: "https://manikamwebsolutions.com/sr/contact",
        en: "https://manikamwebsolutions.com/en/contact",
      },
    },
  };
}

export default function ContactPage() {
  return (
    <div className="bg-gray-900/90">
      <ContactForm />
    </div>
  );
}
