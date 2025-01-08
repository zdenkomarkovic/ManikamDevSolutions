import Maintenance from "@/components/maintanace/page";
import Seo from "@/components/seo/page";
import WebShop from "@/components/webshop/page";
import WebSite from "@/components/website/page";
import React from "react";

const Services = () => {
  return (
    <div className="py-20  space-y-10">
      <div className="container px-20 mx-auto space-y-4">
        <h1 className="text-4xl text-center">web usluge</h1>
        <p className="text-lg">
          Nase tehnologije su{" "}
          <span className="font-bold">React.js Node.js Next.js</span>. Ne radimo
          u WordPress-u ili nekim drugim poznatim bilderima. Tako da Sajt koji
          dobijete od nas bice tehnicki bolje odradjen samim tim brzi sto je
          jedna od bitnijih stvari kada je u pitanju SEO. Sto podrazumeva bolju
          pretragu na internetu, cemu svi mi tezimo
        </p>
      </div>{" "}
      <WebSite />
      <WebShop />
      <Maintenance />
      <Seo />
    </div>
  );
};

export default Services;
