"use client";

export default function SoftwareBenefits() {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
      <h2 className="text-xl md:text-3xl font-bold mb-6 text-gray-800 text-center md:text-left">
        Prednosti Custom Softvera nad Gotovim Rešenjima
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-green-500 text-2xl">✓</span>
            Custom Softver
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold mt-1">•</span>
              <span><strong>Tačno ono što vam treba</strong> - bez nepotrebnih funkcija</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold mt-1">•</span>
              <span><strong>Jednokratna investicija</strong> - vaše je zauvek, bez mesečnih pretplata</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold mt-1">•</span>
              <span><strong>Puna kontrola i vlasništvo</strong> - source code je vaš</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold mt-1">•</span>
              <span><strong>Integracija sa postojećim sistemima</strong> - bez ograničenja</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold mt-1">•</span>
              <span><strong>Skalabilnost</strong> - raste sa vašim biznisom</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold mt-1">•</span>
              <span><strong>Konkurentska prednost</strong> - unique funkcionalnosti</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold mt-1">•</span>
              <span><strong>Brži procesi</strong> - automatizirano prema vašim workflow-ima</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold mt-1">•</span>
              <span><strong>Bolja sigurnost</strong> - prilagođena vašim security zahtevima</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-red-500 text-2xl">✗</span>
            Gotova Rešenja (SaaS)
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold mt-1">•</span>
              <span><strong>Generičke funkcije</strong> - mnogo toga vam ne treba</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold mt-1">•</span>
              <span><strong>Mesečne pretplate</strong> - troškovi se gomilaju godinama</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold mt-1">•</span>
              <span><strong>Nema vlasništva</strong> - zavisnost od provajdera</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold mt-1">•</span>
              <span><strong>Ograničene integracije</strong> - samo ono što oni podržavaju</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold mt-1">•</span>
              <span><strong>Naplaćuje se po broju korisnika</strong> - skuplji sa rastom</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold mt-1">•</span>
              <span><strong>Isti alat kao konkurencija</strong> - nema differentiation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold mt-1">•</span>
              <span><strong>Spori procesi</strong> - prilagođavate se njihovom workflow-u</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold mt-1">•</span>
              <span><strong>Vaši podaci na njihovim serverima</strong> - privacy concerns</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-xl p-6 text-white">
        <h3 className="text-xl font-bold mb-3">Konkretni Primer: CRM Sistem</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <p className="font-semibold mb-2">Salesforce (SaaS rešenje):</p>
            <ul className="space-y-1 opacity-90">
              <li>• $150/korisnik/mesečno = $1,800/godišnje za 10 korisnika</li>
              <li>• Nakon 5 godina: $9,000 potrošeno</li>
              <li>• Ograničene customizacije, plaćate za funkcije koje ne koristite</li>
              <li>• Dodatne integracije se plaćaju posebno</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Custom CRM (naše rešenje):</p>
            <ul className="space-y-1 opacity-90">
              <li>• Jednokratna investicija: $8,000-12,000</li>
              <li>• Održavanje: ~$500/godišnje</li>
              <li>• Nakon 5 godina: ~$10,500 ukupno</li>
              <li>• Sve funkcije prilagođene vama, neograničen broj korisnika</li>
            </ul>
          </div>
        </div>
        <p className="mt-4 font-semibold">
          ROI: Custom softver se isplati već nakon 2 godine i štedi vam desetine hiljada evra dugoročno!
        </p>
      </div>
    </div>
  );
}
