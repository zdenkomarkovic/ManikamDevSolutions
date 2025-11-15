"use client";
import { reference1, reference2 } from "@/constants/index";
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import { motion } from "framer-motion";
import React, { useState, useMemo } from "react";

const Reference = ({ refLink, title }: { refLink: string; title: string }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // 6 referenci po stranici

  // Kombinujemo oba niza referenci
  const allReferences = useMemo(() => {
    return [...reference2, ...reference1];
  }, []);

  // Funkcija za kreiranje naizmeničnog teksta sa custom tekstom
  const createAlternatingTextWithCustomTitle = (
    text: string,
    count: number
  ) => {
    const items = [];
    for (let i = 0; i < count; i++) {
      const isOrange = i % 2 === 0;
      items.push(
        <span
          key={i}
          className={
            isOrange
              ? "bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
              : "text-black"
          }
          style={
            !isOrange
              ? {
                  WebkitTextStroke: "6px white",
                  paintOrder: "stroke fill",
                }
              : undefined
          }
        >
          {text}
        </span>
      );
      items.push(<span className="text-white"> • </span>);
    }
    items.push(<span key="nbsp">&nbsp;</span>);
    return items;
  };

  // Kalkulišemo paginaciju
  const totalPages = Math.ceil(allReferences.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentReferences = allReferences.slice(startIndex, endIndex);

  // Funkcije za navigaciju
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Generišemo 3 stranice za prikaz
  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 3) {
      // Ako imamo 3 ili manje stranica, prikaži sve
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Uvek prikaži 3 stranice
      if (currentPage === 1) {
        pages.push(1, 2, 3);
      } else if (currentPage === totalPages) {
        pages.push(totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(currentPage - 1, currentPage, currentPage + 1);
      }
    }

    return pages;
  };

  return (
    <div id="reference" className="pb-10">
      {/* Animated text naslov - puna širina ekrana */}
      <div className="w-full pb-10 md:py-16 overflow-hidden">
        {/* Gornji red - ide DESNO */}
        <div className="mb-4 overflow-hidden">
          <div
            className="flex animate-scroll-right"
            style={{
              willChange: "transform",
            }}
          >
            <h3 className="text-4xl md:text-8xl font-extrabold whitespace-nowrap">
              {createAlternatingTextWithCustomTitle(title, 8)}
            </h3>
            <h3 className="text-4xl md:text-8xl font-extrabold whitespace-nowrap">
              {createAlternatingTextWithCustomTitle(title, 8)}
            </h3>
          </div>
        </div>

        {/* Donji red - ide LEVO */}
        <div className="overflow-hidden">
          <div
            className="flex animate-scroll-left"
            style={{
              willChange: "transform",
            }}
          >
            <h3 className="text-4xl md:text-8xl font-extrabold whitespace-nowrap">
              {createAlternatingTextWithCustomTitle(title, 8)}
            </h3>
            <h3 className="text-4xl md:text-8xl font-extrabold whitespace-nowrap">
              {createAlternatingTextWithCustomTitle(title, 8)}
            </h3>
          </div>
        </div>
      </div>

      {/* Reference grid - zadržava container */}
      <div className="container px-2 md:px-16 mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {currentReferences.map((item, i) => {
            return (
              <motion.div
                key={`${item.title}-${i}`}
                className="relative z-20 rounded-xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={item.image}
                    width={2000}
                    height={2000}
                    alt={`${item.title} - manikam web solutions`}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <p className="absolute bottom-5 left-8 text-xl text-black group-hover:scale-110 transition-transform duration-300">
                    <span className="flex flex-col">
                      {refLink} <span>{item.title}</span>
                    </span>
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Paginacija - strelice + 3 dugmića */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8 px-4 relative z-20">
            {/* Prethodna stranica */}
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-orange-600 to-orange-400 text-white hover:scale-105"
              }`}
            >
              ←
            </button>
            {/* 3 dugmića za stranice */}
            {getPageNumbers().map((page, index) => (
              <button
                key={index}
                onClick={() => goToPage(page)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  page === currentPage
                    ? "bg-gradient-to-r from-orange-600 to-orange-400 text-white scale-110"
                    : "bg-gray-200 text-gray-700  hover:text-white hover:scale-105"
                }`}
              >
                {page}
              </button>
            ))}
            {/* Sledeća stranica */}
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-orange-600 to-orange-400 text-white  hover:scale-105"
              }`}
            >
              →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reference;
