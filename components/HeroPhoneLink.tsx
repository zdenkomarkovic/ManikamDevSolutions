"use client";

export default function HeroPhoneLink({
  phone,
  span4,
  span2,
}: {
  phone: string;
  span4: string;
  span2: string;
}) {
  return (
    <a
      href={`tel:${phone}`}
      onClick={() => window.gtag_report_conversion?.(`tel:${phone}`)}
      className="mx-auto inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-orange-600 to-orange-400 text-white px-4 md:px-8 py-2 md:py-4 rounded-xl text-sm md:text-[36px] font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
    >
      <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
      {span4}
      <span className="text-white text-sm md:text-3xl font-normal block">
        {span2}
      </span>
    </a>
  );
}
