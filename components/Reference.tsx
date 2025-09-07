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

  // Generišemo brojeve stranica za prikaz
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div
      id="reference"
      className="container px-2 md:px-4 mx-auto py-10 border-t"
    >
      <h3 className="text-4xl md:text-6xl text-center pb-10 md:py-10">
        {title}
      </h3>
      
      {/* Reference grid */}
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
              <Link href={item.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={item.image}
                  width={2000}
                  height={2000}
                  alt={`${item.title} - manikam web solutions`}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <p className="absolute bottom-5 left-8 text-xl text-black group-hover:scale-110 transition-transform duration-300">
                  {refLink}...
                </p>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Paginacija */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 mt-8">
          {/* Prethodna stranica */}
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
              currentPage === 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-gray-700 to-red-700 text-white border border-gray-700 hover:from-gray-800 hover:to-red-800 hover:scale-105'
            }`}
          >
            ← Prethodna
          </button>

          {/* Brojevi stranica */}
          <div className="flex space-x-1">
            {getPageNumbers().map((page, index) => (
              <button
                key={index}
                onClick={() => typeof page === 'number' && goToPage(page)}
                disabled={page === '...'}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  page === '...'
                    ? 'bg-transparent text-gray-500 cursor-default'
                    : page === currentPage
                    ? 'bg-gradient-to-r from-gray-700 to-red-700 text-white border border-gray-700   scale-110'
                    : 'bg-gray-200 text-gray-700 hover:bg-gradient-to-r hover:from-gray-800 hover:to-red-800 hover:text-white hover:scale-105'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Sledeća stranica */}
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
              currentPage === totalPages
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-red-700 text-white hover:bg-red-800 hover:scale-105'
            }`}
          >
            Sledeća →
          </button>
        </div>
      )}

      {/* Info o trenutnoj stranici */}

    </div>
  );
};

export default Reference;