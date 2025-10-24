import Link from "next/link";

export default function GoogleAdsCTA() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-300 via-gray-50 to-white rounded-2xl">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Spremni da Povećate Svoju Online Prodaju?
        </h2>
        <p className="text-xl mb-8 text-gray-700">
          Kontaktirajte nas danas i dobijte besplatnu analizu i procenu potencijala vaše
          Google Ads kampanje
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-950 hover:to-red-800 transition-colors"
          >
            Zatražite Besplatnu Konsultaciju
          </Link>
          <a
            href="tel:+381641967267"
            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors border-2 border-gray-300"
          >
            Pozovite Nas Odmah
          </a>
        </div>
      </div>
    </section>
  );
}
