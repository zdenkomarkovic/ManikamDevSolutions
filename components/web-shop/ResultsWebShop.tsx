"use client";

import React from "react";
import { useMessages } from "@/lib/MessagesContext";

const ResultsWebShop = () => {
  const intl = useMessages();

  return (
    <div className="space-y-8">
      {" "}
      <div className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 text-center md:text-left rounded-2xl p-3 md:p-8 shadow-lg border border-gray-100">
        <div className="flex justify-center mb-6">
          <h3 className="text-xl md:text-3xl font-extrabold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            {intl.formatMessage({ id: "webshopDevelopment.whatMakesSpecial.title" })}
          </h3>
        </div>
        <div className="space-y-4">
          <p>
            <strong>{intl.formatMessage({ id: "webshopDevelopment.whatMakesSpecial.mobile.label" })}</strong> {intl.formatMessage({ id: "webshopDevelopment.whatMakesSpecial.mobile.text" })}
          </p>
          <p>
            <strong>{intl.formatMessage({ id: "webshopDevelopment.whatMakesSpecial.speed.label" })}</strong> {intl.formatMessage({ id: "webshopDevelopment.whatMakesSpecial.speed.text" })}
          </p>
          <p>
            <strong>{intl.formatMessage({ id: "webshopDevelopment.whatMakesSpecial.seo.label" })}</strong> {intl.formatMessage({ id: "webshopDevelopment.whatMakesSpecial.seo.text" })}
          </p>
          <p>
            <strong>{intl.formatMessage({ id: "webshopDevelopment.whatMakesSpecial.security.label" })}</strong> {intl.formatMessage({ id: "webshopDevelopment.whatMakesSpecial.security.text" })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultsWebShop;
