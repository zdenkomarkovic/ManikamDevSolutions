"use client";

export default function SoftwareCTA() {
  return (
    <div className="bg-gradient-to-br from-gray-400 to-white rounded-2xl p-6 text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-3">
        Spremni da Automatizujete Vaš Biznis?
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="md:space-y-8 md:px-20">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Dobijte besplatnu konsultaciju
            </h3>
            <ul className="space-y-1 md:space-y-3 mx-auto w-fit">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                </svg>
                Analiza vaših potreba
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                </svg>
                Procena troškova i vremena
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                </svg>
                Tehnološke preporuke
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                </svg>
                Detaljni projektni plan
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className="mb-4 text-2xl md:text-3xl opacity-90 font-bold">
            Kontaktirajte nas danas
          </p>

          <div className="flex flex-col gap-4 justify-center items-center">
            <a
              href="tel:+381641967267"
              className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 md:px-8 py-2 md:py-3 rounded-xl text-base md:text-3xl font-semibold hover:from-red-950 hover:to-red-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="block text-lg md:text-2xl font-normal opacity-90">
                +381641967267
              </span>
            </a>

            <a
              href="mailto:manikamwebsolutions@gmail.com"
              className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 md:px-8 py-2 md:py-3 rounded-xl text-base md:text-3xl font-semibold hover:from-red-950 hover:to-red-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="block text-lg md:text-2xl font-normal opacity-90">
                manikamwebsolutions@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
