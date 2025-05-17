import WebSite from "@/components/website/page";
import React from "react";

const Services = () => {
  return (
    <div className="pt-20 md:py-20  space-y-10">
      <div className="container px-2 md:px-4 mx-auto space-y-5 md:space-y-20">
        <h1 className=" text-4xl md:text-7xl mt-4 md:mt-10 md:pl-20">
          Web usluge
        </h1>

        <WebSite />
      </div>{" "}
    </div>
  );
};

export default Services;
