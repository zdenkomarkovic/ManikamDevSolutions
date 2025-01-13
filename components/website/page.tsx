import React from "react";

const WebSite = () => {
  const h3Class = "text-xl py-3";
  const cardClass = " border-2 p-6 rounded-xl text-lg space-y-2";
  return (
    <div className="container px-4 py-4  mx-auto space-y-8">
      <h2 className="text-center text-2xl">Izrada web sajta</h2>
      <div className="grid grid-cols-3 gap-6">
        <div className={cardClass}>
          <h3 className={h3Class}>Sajt do 10 stranica - 32,000rsd</h3>

          <p>
            responsive - prilagodjeno pregledu na mobilnim uredjajima i desktop
            racunarima
          </p>
          <p>Moderan dizajn uskladjen sa zeljama stranke</p>

          <p>Kontakt forma sa mapom vase lokacije</p>
          <p>povezivanje drustvenih mreza</p>
          <p>SSL sertifikat i zastita sajta</p>
          <p>Hosting prve godine uracunat u cenu</p>
          <p>Domeni .RS ili .COM uracunati u cenu</p>
          <p>Besplatne izmene nakon 60 dana</p>
          <p>izrada u za 2-7 dana</p>
          <p>Mesečni izveštaj o posetama</p>
          <p>osnovna google optimizacija SEO</p>
        </div>
        {/* <div className={cardClass}>
          <h3 className={h3Class}>Sajt sa CMS - 89,000rsd</h3>
          <p>
            {" "}
            CMS(Content Management System) omogućava korisnicima, da upravljaju
            sajtom preko jednostavnog korisničkog interfejsa (princip
            objavljivanja na drustvenim mrezama).
          </p>

          <p>Korisnik dodaje ili ažurira sadržaj koristeći jednostavne forme</p>
          <p>Korisnici mogu lako dodavati tekstove, slike i video zapise.</p>
          <p>pogodno za blogove i portale</p>
          <p>Pristup sadržaju i upravljanje moguće sa bilo kog uređaja</p>
          <p>sve sa osnovnog paketa</p>
        </div>
        <div className={cardClass}>
          <h3 className={h3Class}>E - Commerce - 189,000rsd</h3>

          <p>Osnovni paket - 189,000rsd</p>
          <p>Do 10 000 proizvoda</p>
          <p>Integrisano placanje karticom</p>
          <p>Upravljanje zalihama</p>
          <p>Pretrage proizvoda po vise kriterijuma</p>
          <p>Automatske email poruke</p>
          <p>Podesavaje za rad sa kurirskim sluzbama</p>
          <p>Sistem za akcije i popuste</p>
          <p>Sigurnosni SSL sertifikat</p>
        </div> */}
      </div>
      <div>
        <p>
          Ovaj paket pruza sve neophodno za jedan izvanredan sajt, ali ako
          stranka zahteva vise spremni smo da napravimo jedinstveni paket
          uskladjen za zeljama stranke
        </p>
        <p>Poseban dizajn po narudzbini</p>
        <p>Napredni SEO</p>
      </div>
    </div>
  );
};

export default WebSite;
