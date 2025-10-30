"use client";

import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useMessages } from "@/lib/MessagesContext";

export default function SocialMediaPlatforms() {
  const intl = useMessages();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Facebook */}
        <div className="bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <FaFacebook className="text-5xl text-blue-600" />

            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              {intl.formatMessage({ id: "socialMedia.platforms.facebook.title" })}
            </h3>
          </div>

          <div className="space-y-4">
            <p className="" dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "socialMedia.platforms.facebook.description" })
            }} />

            <h4 className="font-bold text-gray-900">
              {intl.formatMessage({ id: "socialMedia.platforms.facebook.whatWeDoTitle" })}
            </h4>
            <ul className="space-y-2 ">
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <li key={num} className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>{intl.formatMessage({ id: `socialMedia.platforms.facebook.item${num}` })}</span>
                </li>
              ))}
            </ul>

            <div className="bg-gradient-to-r from-orange-600 to-orange-400 rounded-xl p-4 mt-4">
              <p className="font-semibold text-white">
                {intl.formatMessage({ id: "socialMedia.platforms.facebook.idealForTitle" })}
              </p>
              <p className="text-white text-sm mt-2">
                {intl.formatMessage({ id: "socialMedia.platforms.facebook.idealForDescription" })}
              </p>
            </div>
          </div>
        </div>

        {/* Instagram */}
        <div className="bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-full flex items-center justify-center">
              <FaInstagram className="text-4xl text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              {intl.formatMessage({ id: "socialMedia.platforms.instagram.title" })}
            </h3>
          </div>

          <div className="space-y-4">
            <p className="" dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "socialMedia.platforms.instagram.description" })
            }} />

            <h4 className="font-bold text-gray-900">
              {intl.formatMessage({ id: "socialMedia.platforms.instagram.whatWeDoTitle" })}
            </h4>
            <ul className="space-y-2 ">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <li key={num} className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>{intl.formatMessage({ id: `socialMedia.platforms.instagram.item${num}` })}</span>
                </li>
              ))}
            </ul>

            <div className="bg-gradient-to-l from-orange-600 to-orange-400 rounded-xl p-4 mt-4">
              <p className="font-semibold text-white">
                {intl.formatMessage({ id: "socialMedia.platforms.instagram.idealForTitle" })}
              </p>
              <p className="text-white text-sm mt-2">
                {intl.formatMessage({ id: "socialMedia.platforms.instagram.idealForDescription" })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
