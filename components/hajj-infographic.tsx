"use client"

import { useState, useRef } from "react"
import { ArrowLeft, Info } from "lucide-react"
import HajjInfoPanel from "./hajj-info-panel"
import { hajjData } from "@/lib/hajj-data"

export default function HajjInfographic() {
  const [activeLocation, setActiveLocation] = useState<string | null>(null)
  const [showLegend, setShowLegend] = useState(false)

  const mapRef = useRef<HTMLDivElement>(null)
  const infoPanelRef = useRef<HTMLDivElement>(null)

  const handleLocationClick = (locationId: string) => {
    setActiveLocation(locationId)

    // Auto-scroll to info panel on mobile/tablet
    setTimeout(() => {
      if (infoPanelRef.current) {
        infoPanelRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }, 100) // Small delay to ensure state update
  }

  const handleBackToMap = () => {
    if (mapRef.current) {
      mapRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const handleClose = () => {
    setActiveLocation(null)
  }

  const toggleLegend = () => {
    setShowLegend(!showLegend)
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8 relative">
      <div ref={mapRef} className="w-full lg:w-2/3 bg-gray-50 rounded-xl p-4 relative">
        {/* Legend toggle button */}
        <button
          onClick={toggleLegend}
          className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
          aria-label="Show ritual type legend"
        >
          <Info size={20} />
        </button>

        {/* Floating legend */}
        {showLegend && (
          <div className="absolute top-16 right-4 bg-white p-4 rounded-lg shadow-lg z-10 w-64">
            <h4 className="font-medium text-gray-800 mb-2">Ritual Types:</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-emerald-600"></div>
                <span className="text-sm">Obligatory (Fard/Wajib)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-amber-500"></div>
                <span className="text-sm">Sunnah (Recommended)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-gray-400"></div>
                <span className="text-sm">Inactive/Unselected</span>
              </div>
            </div>
            <button onClick={toggleLegend} className="mt-3 text-sm text-gray-600 hover:text-gray-900">
              Close
            </button>
          </div>
        )}

        <svg viewBox="0 0 500 1420" className="w-full h-auto focus:outline-none" aria-label="Hajj locations map">
          {/* Background */}
          <rect x="0" y="0" width="500" height="1420" fill="#f8fafc" rx="10" />

          {/* Timeline path - centered */}
          <path d="M250,120 L250,1300" fill="none" stroke="#94a3b8" strokeWidth="4" strokeDasharray="8,8" />

          {/* 1. Makkah - Ihram & Umrah */}
          <g
            onClick={() => handleLocationClick("makkah_ihram")}
            className="cursor-pointer focus:outline-none"
            tabIndex={0}
            role="button"
            aria-label="Makkah - Ihram & Umrah"
            onKeyDown={(e) => e.key === "Enter" && handleLocationClick("makkah_ihram")}
          >
            {/* Text label with connecting line */}
            <text x="170" y="120" textAnchor="end" fill="#334155" fontSize="14" fontWeight="bold">
              Ihram
            </text>
            <line x1="175" y1="120" x2="205" y2="120" stroke="#94a3b8" strokeWidth="1.5" />

            <circle
              cx="250"
              cy="120"
              r="40"
              fill={activeLocation === "makkah_ihram" ? "#10b981" : "#94a3b8"}
              className="transition-colors duration-300"
            />

            {/* Obligatory indicator */}
            <circle cx="250" cy="80" r="8" fill="#10b981" />

            {/* Ihram icon using the provided SVG */}
            <g transform="translate(225, 95) scale(1.0)">
              <svg viewBox="-5.0 -10.0 110.0 135.0" width="50" height="50">
                <path
                  d="m17.969 93.75c-0.50781-7.3711 1.5703-27.164 2.9688-30.434 0.60938-1.4219 2.0078-2.5391 3.9023-3.4414 2.5781-1.2227 6.1055-2.0938 9.5195-3.1016 2.7305-0.80859 5.3828-1.707 7.3555-2.9922 1.7734-1.1562 2.9766-2.6328 3.0195-4.7109-5.5508-1.5547-10.105-5.5-12.48-10.652-0.53906 0.21484-1.1211 0.33594-1.7344 0.33594-2.5586 0-4.6367-2.0781-4.6367-4.6367 0-2.5508 2.0586-4.6172 4.6016-4.6367 0.0625-1.5859 0.3125-3.1172 0.73047-4.5859 0.039062-4.4609 2.4453-9.3047 5.9805-13.035 3.5781-3.7734 8.2969-6.3828 12.801-6.3828 4.5078 0 9.2266 2.6133 12.805 6.3828 3.5391 3.7305 5.9453 8.5742 5.9844 13.035 0.44141 1.5469 0.69531 3.1719 0.74219 4.8516 2.5391 0.023437 4.5938 2.0938 4.5938 4.6367 0 2.5586-2.0781 4.6367-4.6367 4.6367-0.65234 0-1.2734-0.13281-1.8359-0.37891-2.3828 5.0078-6.8398 8.8438-12.258 10.398 0.21875 1.8047 1.3633 3.1289 2.9844 4.1875 1.9727 1.2891 4.625 2.1836 7.3555 2.9922 3.4141 1.0078 6.9453 1.8789 9.5195 3.1016 1.8984 0.89844 3.293 2.0156 3.9023 3.4375 1.3984 3.2695 3.3945 23.621 2.8828 30.996 0 0.019532 0 0.039063-0.003906 0.054688-0.027344 0.40625-0.36719 0.72656-0.77734 0.72656h-0.054687-62.391-0.054688c-0.41016 0-0.75-0.32031-0.77734-0.72656-0.003906-0.019532-0.003906-0.039063-0.003906-0.054688zm28.316-44.32c-0.16406 2.4531-1.5742 4.2578-3.7148 5.6562-2.0859 1.3594-4.8828 2.3281-7.7656 3.1797-3.3281 0.98828-6.7773 1.8242-9.293 3.0195-1.4922 0.71094-2.6562 1.5234-3.1328 2.6445-1.3281 3.0977-3.2266 21.383-2.8867 29.039h10.98v-5.4844-12.484c0-0.42969 0.35156-0.78125 0.78125-0.78125 0.42969 0 0.78125 0.35156 0.78125 0.78125v8.0234c2.2227-4.832 5.8984-9.168 10.16-11.812 2.1797-1.3555 4.7734-2.0469 7.2773-2.8516 2.3164-0.74219 4.5547-1.5781 6.2227-3.2852 2.3984-2.457 3.0859-6.0312 3.7852-9.4688-0.70312-0.33594-1.3594-0.69141-1.9609-1.082-1.9844-1.293-3.3398-2.9414-3.6602-5.125-1.2461 0.25-2.5391 0.38281-3.8555 0.38281-1.2734 0-2.5117-0.12109-3.7148-0.35156zm-12.926-12.395c2.6797 6.5547 9.1211 11.184 16.641 11.184 1.5078 0 2.9766-0.1875 4.3789-0.53906 5.5078-1.3828 10.008-5.3047 12.18-10.445 0.86719-2.0547 1.3672-4.3047 1.4062-6.6641 0.003906-0.10547 0.003906-0.21484 0.003906-0.32031 0-1.1992-0.11719-2.3711-0.33984-3.5078-0.41016 0.25781-0.93359 0.49609-1.5664 0.71094-3.2617 1.0938-9.6641 1.6016-16.07 1.5586-6.3945-0.042969-12.789-0.63672-16.051-1.6875-0.625-0.20312-1.1484-0.42969-1.5547-0.66406-0.23438 1.1602-0.35938 2.3594-0.35938 3.5898v0.066406c0.007812 2.375 0.47656 4.6445 1.3281 6.7188zm-2.875-6.0039c-1.6797 0.019531-3.0391 1.3867-3.0391 3.0742 0 1.6953 1.3789 3.0742 3.0742 3.0742 0.39844 0 0.78516-0.078126 1.1367-0.21875-0.68359-1.8594-1.0898-3.8516-1.1719-5.9297zm36.738-6.0352c0-4.1328-2.2734-8.6133-5.5547-12.07-3.2695-3.4453-7.5508-5.8984-11.668-5.8984s-8.3984 2.4492-11.664 5.8984c-3.2734 3.4531-5.5469 7.9258-5.5547 12.055 0.007812 0.011719 0.039062 0.058593 0.066406 0.085937 0.050782 0.050782 0.11328 0.10156 0.17969 0.14844 0.32422 0.22656 0.80469 0.42969 1.3984 0.625 3.1641 1.0195 9.3711 1.5703 15.582 1.6133 6.1992 0.039063 12.398-0.41797 15.562-1.4766 0.58984-0.19531 1.0625-0.41016 1.3828-0.65625 0.14062-0.10547 0.26953-0.19141 0.26953-0.32031zm1.0391 12.195c0.375 0.16406 0.78906 0.25391 1.2227 0.25391 1.6953 0 3.0742-1.3789 3.0742-3.0742 0-1.6914-1.3672-3.0625-3.0547-3.0742-0.10938 2.0664-0.53906 4.0508-1.2422 5.8984zm12.254 55.773c0.34766-7.6914-1.4766-26.504-2.8047-29.602-0.47656-1.1211-1.6367-1.9297-3.1328-2.6445-2.5156-1.1953-5.9648-2.0312-9.293-3.0156-1.5-0.44531-2.9766-0.91797-4.3398-1.4648-0.75391 3.6289-1.6016 7.3359-4.1328 9.9297-1.8438 1.8828-4.3008 2.8555-6.8672 3.6797-2.3789 0.76172-4.8516 1.3984-6.9297 2.6875-5.1406 3.1953-9.3789 9.0078-10.984 15.062v5.3672zm-9.8945-24.883c0.09375-0.42188 0.50781-0.69141 0.92969-0.59766 0.42188 0.089844 0.6875 0.50781 0.59766 0.92969-0.60156 2.7461-1.1914 5.625-3.2305 7.5938-1.3789 1.332-3.2109 2.0234-5.125 2.6016-1.7344 0.52734-3.5391 0.96094-5.0547 1.8516-3.7461 2.1953-6.8359 6.207-7.9844 10.371-0.11719 0.41406-0.54297 0.66406-0.96094 0.54688-0.41406-0.11719-0.66406-0.54297-0.54688-0.96094 1.2539-4.543 4.6172-8.9141 8.6992-11.309 1.6172-0.94531 3.5391-1.4336 5.3906-1.9922 1.6719-0.50781 3.2891-1.0703 4.4922-2.2266 1.8164-1.7578 2.2539-4.3594 2.7891-6.8047z"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="3"
                />
              </svg>
            </g>
          </g>

          {/* Rest of the SVG content remains the same... */}
          {/* 2. Mina - First Day */}
          <g
            onClick={() => handleLocationClick("mina_first")}
            className="cursor-pointer focus:outline-none"
            tabIndex={0}
            role="button"
            aria-label="Mina - First Day"
            onKeyDown={(e) => e.key === "Enter" && handleLocationClick("mina_first")}
          >
            {/* Text label with connecting line */}
            <text x="170" y="220" textAnchor="end" fill="#334155" fontSize="14" fontWeight="bold">
              Mina
            </text>
            <line x1="175" y1="220" x2="205" y2="220" stroke="#94a3b8" strokeWidth="1.5" />

            <circle
              cx="250"
              cy="220"
              r="40"
              fill={activeLocation === "mina_first" ? "#f59e0b" : "#94a3b8"}
              className="transition-colors duration-300"
            />

            {/* Sunnah indicator */}
            <circle cx="250" cy="180" r="8" fill="#f59e0b" />

            {/* Mina-style tent encampment */}
            <g transform="translate(220, 190)">
              {/* Large central tent */}
              {/* Rectangular base */}
              <rect x="15" y="35" width="30" height="20" fill="white" stroke="#64748b" strokeWidth="1" />
              {/* Triangular roof */}
              <path d="M15,35 L30,15 L45,35 Z" fill="white" stroke="#64748b" strokeWidth="1" />

              {/* Tent entrance */}
              <rect x="25" y="45" width="10" height="10" fill="#64748b" />

              {/* Smaller tent on left */}
              <rect x="0" y="40" width="20" height="15" fill="white" stroke="#64748b" strokeWidth="1" />
              <path d="M0,40 L10,25 L20,40 Z" fill="white" stroke="#64748b" strokeWidth="1" />

              {/* Smaller tent on right */}
              <rect x="40" y="40" width="20" height="15" fill="white" stroke="#64748b" strokeWidth="1" />
              <path d="M40,40 L50,25 L60,40 Z" fill="white" stroke="#64748b" strokeWidth="1" />
            </g>
          </g>

          {/* 3. Arafat */}
          <g
            onClick={() => handleLocationClick("arafat")}
            className="cursor-pointer focus:outline-none"
            tabIndex={0}
            role="button"
            aria-label="Arafat - Day of Standing"
            onKeyDown={(e) => e.key === "Enter" && handleLocationClick("arafat")}
          >
            {/* Text label with connecting line */}
            <text x="170" y="340" textAnchor="end" fill="#334155" fontSize="14" fontWeight="bold">
              Arafat
            </text>
            <line x1="175" y1="340" x2="205" y2="340" stroke="#94a3b8" strokeWidth="1.5" />

            <circle
              cx="250"
              cy="340"
              r="40"
              fill={activeLocation === "arafat" ? "#10b981" : "#94a3b8"}
              className="transition-colors duration-300"
            />

            {/* Obligatory indicator */}
            <circle cx="250" cy="300" r="8" fill="#10b981" />

            {/* Arafat - Prayer hands in supplication */}
            <g transform="translate(220, 310) scale(2.5)">
              {/* Left Hand */}
              <path
                d="M7 2C5.5 2 4 3.5 4 5c0 1.5 1 2.8 2.4 3.4l-.9 6.6c-.2 1.5.8 2.9 2.3 3.1h.2c1.5 0 2.8-1.2 3-2.7l.6-4.3"
                fill="white"
                stroke="#64748b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Right Hand */}
              <path
                d="M17 2c1.5 0 3 1.5 3 3c0 1.5-1 2.8-2.4 3.4l.9 6.6c.2 1.5-.8 2.9-2.3 3.1h-.2c-1.5 0-2.8-1.2-3-2.7l-.6-4.3"
                fill="white"
                stroke="#64748b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Palm Curves */}
              <path
                d="M6 8c1-1.5 3-1.5 4 0"
                fill="none"
                stroke="#64748b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 8c-1-1.5-3-1.5-4 0"
                fill="none"
                stroke="#64748b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>

          {/* 4. Muzdalifah */}
          <g
            onClick={() => handleLocationClick("muzdalifah")}
            className="cursor-pointer focus:outline-none"
            tabIndex={0}
            role="button"
            aria-label="Muzdalifah - Overnight Stay"
            onKeyDown={(e) => e.key === "Enter" && handleLocationClick("muzdalifah")}
          >
            {/* Text label with connecting line */}
            <text x="170" y="460" textAnchor="end" fill="#334155" fontSize="14" fontWeight="bold">
              Muzdalifah
            </text>
            <line x1="175" y1="460" x2="205" y2="460" stroke="#94a3b8" strokeWidth="1.5" />

            <circle
              cx="250"
              cy="460"
              r="40"
              fill={activeLocation === "muzdalifah" ? "#10b981" : "#94a3b8"}
              className="transition-colors duration-300"
            />

            {/* Obligatory indicator */}
            <circle cx="250" cy="420" r="8" fill="#10b981" />

            {/* Hand holding pebbles for Muzdalifah */}
            <g transform="translate(230, 440)">
              {/* Palm of hand */}
              <path
                d="M10,50 C5,45 5,35 5,30 C5,20 15,10 25,10 C35,10 45,20 45,30 C45,35 45,45 40,50 C35,55 15,55 10,50 Z"
                fill="white"
                stroke="#64748b"
                strokeWidth="1.5"
              />

              {/* Thumb */}
              <path
                d="M5,30 C5,25 0,20 0,15 C0,10 5,5 10,5 C15,5 15,10 15,15 L15,25"
                fill="white"
                stroke="#64748b"
                strokeWidth="1.5"
              />

              {/* Fingers */}
              <path d="M15,10 L15,25 M25,5 L25,25 M35,5 L35,25 M45,15 L45,30" stroke="#64748b" strokeWidth="1.5" />

              {/* Pebbles in hand */}
              <circle cx="15" cy="35" r="4" fill="#64748b" />
              <circle cx="25" cy="32" r="5" fill="#64748b" />
              <circle cx="35" cy="35" r="4" fill="#64748b" />
              <circle cx="22" cy="42" r="3" fill="#64748b" />
              <circle cx="32" cy="42" r="3" fill="#64748b" />
            </g>
          </g>

          {/* 5. Mina - Jamarat (First Stoning) */}
          <g
            onClick={() => handleLocationClick("jamarat_first")}
            className="cursor-pointer focus:outline-none"
            tabIndex={0}
            role="button"
            aria-label="Jamarat - First Stoning"
            onKeyDown={(e) => e.key === "Enter" && handleLocationClick("jamarat_first")}
          >
            {/* Text label with connecting line */}
            <text x="170" y="580" textAnchor="end" fill="#334155" fontSize="14" fontWeight="bold">
              Jamarat
            </text>
            <line x1="175" y1="580" x2="205" y2="580" stroke="#94a3b8" strokeWidth="1.5" />

            <circle
              cx="250"
              cy="580"
              r="40"
              fill={activeLocation === "jamarat_first" ? "#10b981" : "#94a3b8"}
              className="transition-colors duration-300"
            />

            {/* Obligatory indicator */}
            <circle cx="250" cy="540" r="8" fill="#10b981" />

            {/* Three Jamarat pillars of different sizes */}
            <g transform="translate(220, 550)">
              {/* Small pillar (Jamarat al-Sughra) */}
              <rect x="0" y="10" width="12" height="40" fill="white" stroke="#64748b" strokeWidth="1" />
              <rect x="2" y="12" width="8" height="36" fill="#64748b" />

              {/* Medium pillar (Jamarat al-Wusta) */}
              <rect x="24" y="5" width="12" height="50" fill="white" stroke="#64748b" strokeWidth="1" />
              <rect x="26" y="7" width="8" height="46" fill="#64748b" />

              {/* Large pillar (Jamarat al-Aqabah) */}
              <rect x="48" y="0" width="12" height="60" fill="white" stroke="#64748b" strokeWidth="1" />
              <rect x="50" y="2" width="8" height="56" fill="#64748b" />
            </g>
          </g>

          {/* 6. Sacrifice */}
          <g
            onClick={() => handleLocationClick("sacrifice")}
            className="cursor-pointer focus:outline-none"
            tabIndex={0}
            role="button"
            aria-label="Sacrifice"
            onKeyDown={(e) => e.key === "Enter" && handleLocationClick("sacrifice")}
          >
            {/* Text label with connecting line */}
            <text x="170" y="700" textAnchor="end" fill="#334155" fontSize="14" fontWeight="bold">
              Sacrifice
            </text>
            <line x1="175" y1="700" x2="205" y2="700" stroke="#94a3b8" strokeWidth="1.5" />

            <circle
              cx="250"
              cy="700"
              r="40"
              fill={activeLocation === "sacrifice" ? "#10b981" : "#94a3b8"}
              className="transition-colors duration-300"
            />

            {/* Obligatory indicator */}
            <circle cx="250" cy="660" r="8" fill="#10b981" />

            {/* Camel icon for sacrifice */}
            <g transform="translate(215, 670) scale(0.8)">
              {/* Camel SVG */}
              <g viewBox="15.0 20.0 110.0 135.0">
                <path
                  d="m38.301 32.926c2.447-3.53 3.738-7.644 3.738-11.926 0-11.58-9.42-21-21-21s-21 9.42-21 21 9.42 21 21 21c3.68 0 7.304-.981 10.51-2.842l7.248 1.812c.341.088.701-.015.95-.263s.348-.608.263-.949zm-36.262-11.926c0-10.477 8.523-19 19-19 8.824 0 16.24 6.055 18.368 14.222-.558.432-1.67.672-2.749.903-1.131.242-2.3.492-3.152 1.029-.895.564-1.742 1.713-2.64 2.93-.804 1.091-2.151 2.916-2.827 2.916h-3c-2.987 0-4.863-4.875-4.993-8.593l2.7-2.7c.228-.227.332-.55.28-.867s-.252-.59-.54-.734c-.09-.045-2.237-1.106-4.447-1.106-1.707 0-2.822.614-3.355 1h-5.645c-1.654 0-3 1.346-3 3v3c0 1.654 1.346 3 3 3 1.667 0 5 1.729 5 4 0 7.727 5.322 12 9 12 3.082 0 4.975.521 6.331 1.743.071.063.13.141.197.21-2.651 1.339-5.569 2.047-8.528 2.047-10.477 0-19-8.523-19-19zm29.596 16.118c-.054-.014-.109-.004-.164-.008-.231-.31-.479-.599-.762-.854-1.756-1.581-4.049-2.256-7.67-2.256-2.512 0-7-3.342-7-10 0-3.664-4.597-6-7-6-.551 0-1-.449-1-1v-1.612l1.684.561c.105.035.212.051.316.051.419 0 .809-.265.949-.684.175-.524-.108-1.09-.632-1.265l-2.069-.69c.183-.216.447-.361.752-.361h6c.253 0 .51-.108.696-.282.031-.029.785-.718 2.304-.718.777 0 1.57.179 2.209.377l-1.916 1.916c-.188.188-.293.442-.293.707 0 4.436 2.225 11 7 11h3c1.686 0 3.022-1.811 4.436-3.729.748-1.014 1.522-2.063 2.097-2.425.551-.348 1.544-.56 2.504-.766.955-.205 1.929-.418 2.746-.798.128.89.217 1.792.217 2.717 0 4.014-1.255 7.864-3.628 11.135-.174.239-.233.543-.161.83l1.415 5.661z"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="1"
                />
                <path
                  d="m61.234 46.636-5.076-1.224c-.617-.124-1.158-.784-1.158-1.412v-1.11c1.235-1.263 2-2.988 2-4.89v-6c0-3.86-3.14-7-7-7s-7 3.14-7 7v6c0 1.901.765 3.627 2 4.89v1.11c0 .628-.541 1.288-1.195 1.421l-5.002 1.206c-1.55.312-2.764 1.793-2.764 3.373v13c0 .553.448 1 1 1h25.922c.552 0 1-.447 1-1v-13c0-1.58-1.214-3.062-2.727-3.364zm-11.234-3.636c-2.417 0-4.438-1.726-4.9-4.01 1.264 1.241 2.993 2.01 4.9 2.01s3.636-.769 4.9-2.01c-.462 2.284-2.483 4.01-4.9 4.01zm-3 1.314c.911.435 1.925.686 3 .686s2.089-.251 3-.686v3.271l-2.414 2.415h-1.172l-2.414-2.414zm-2-12.314c0-2.757 2.243-5 5-5s5 2.243 5 5v2c0 2.757-2.243 5-5 5s-5-2.243-5-5zm16.961 30h-23.922v-12c0-.628.541-1.288 1.195-1.421l5.002-1.206c.268-.054.521-.153.764-.271v.898c0 .266.105.52.293.707l3 3c.187.188.442.293.707.293h2c.265 0 .52-.105.707-.293l3-3c.188-.187.293-.441.293-.707v-.893c.233.111.473.206.727.257l5.076 1.224c.617.124 1.158.784 1.158 1.412z"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="1"
                />
              </g>

              {/* Number 7 to indicate one camel equals seven goats */}
              <circle cx="70" cy="30" r="12" fill="#10b981" stroke="#64748b" strokeWidth="0.8" />
              <text x="70" y="34" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
                7
              </text>
            </g>
          </g>

          {/* 7. Shaving/Trimming Hair */}
          <g
            onClick={() => handleLocationClick("shaving")}
            className="cursor-pointer focus:outline-none"
            tabIndex={0}
            role="button"
            aria-label="Shaving or Trimming Hair"
            onKeyDown={(e) => e.key === "Enter" && handleLocationClick("shaving")}
          >
            {/* Text label with connecting line */}
            <text x="170" y="820" textAnchor="end" fill="#334155" fontSize="14" fontWeight="bold">
              Shaving
            </text>
            <line x1="175" y1="820" x2="205" y2="820" stroke="#94a3b8" strokeWidth="1.5" />

            <circle
              cx="250"
              cy="820"
              r="40"
              fill={activeLocation === "shaving" ? "#10b981" : "#94a3b8"}
              className="transition-colors duration-300"
            />

            {/* Obligatory indicator */}
            <circle cx="250" cy="780" r="8" fill="#10b981" />

            {/* Bald head icon for shaving */}
            <g transform="translate(225, 790)">
              {/* Bald head - side profile */}
              <path
                d="M15,60 C5,60 0,50 0,40 C0,25 10,10 25,10 C40,10 50,20 50,35 C50,45 45,55 35,60 L15,60 Z"
                fill="white"
                stroke="#64748b"
                strokeWidth="1.5"
              />

              {/* Ear */}
              <path
                d="M15,40 C15,35 10,35 10,40 C10,45 15,50 20,45"
                fill="white"
                stroke="#64748b"
                strokeWidth="1.5"
                fillRule="evenodd"
              />

              {/* Eye */}
              <ellipse cx="35" cy="30" rx="3" ry="4" fill="#64748b" />

              {/* Eyebrow */}
              <path d="M30,25 C35,20 40,20 45,25" fill="none" stroke="#64748b" strokeWidth="1.5" />

              {/* Nose */}
              <path d="M45,30 L50,35 L45,40" fill="none" stroke="#64748b" strokeWidth="1.5" />

              {/* Mouth */}
              <path d="M40,45 C42,47 45,47 47,45" fill="none" stroke="#64748b" strokeWidth="1.5" />

              {/* Neck */}
              <path d="M15,60 L15,70 L30,70 L35,60" fill="white" stroke="#64748b" strokeWidth="1.5" />
            </g>
          </g>

          {/* 8. Makkah - Tawaf Al-Ifadah */}
          <g
            onClick={() => handleLocationClick("tawaf_ifadah")}
            className="cursor-pointer focus:outline-none"
            tabIndex={0}
            role="button"
            aria-label="Makkah - Tawaf Al-Ifadah"
            onKeyDown={(e) => e.key === "Enter" && handleLocationClick("tawaf_ifadah")}
          >
            {/* Text label with connecting line */}
            <text x="170" y="940" textAnchor="end" fill="#334155" fontSize="14" fontWeight="bold">
              Tawaf
            </text>
            <line x1="175" y1="940" x2="205" y2="940" stroke="#94a3b8" strokeWidth="1.5" />

            <circle
              cx="250"
              cy="940"
              r="40"
              fill={activeLocation === "tawaf_ifadah" ? "#10b981" : "#94a3b8"}
              className="transition-colors duration-300"
            />

            {/* Obligatory indicator */}
            <circle cx="250" cy="900" r="8" fill="#10b981" />

            {/* Kaaba cube with circular path */}
            <g transform="translate(230, 920)">
              {/* Circular path around Kaaba */}
              <circle cx="20" cy="20" r="30" fill="none" stroke="white" strokeWidth="3" />

              {/* Base cube - white outline */}
              <rect x="0" y="0" width="40" height="40" fill="white" stroke="#64748b" strokeWidth="1" />

              {/* Black cloth (Kiswah) */}
              <rect x="5" y="5" width="30" height="30" fill="#64748b" />

              {/* Gold band (Hizam) */}
              <rect x="5" y="15" width="30" height="5" fill="#d4af37" />

              {/* Door */}
              <rect x="15" y="20" width="10" height="15" fill="#d4af37" />
            </g>
          </g>

          {/* 9. Mina - Days of Tashreeq */}
          <g
            onClick={() => handleLocationClick("mina_tashreeq")}
            className="cursor-pointer focus:outline-none"
            tabIndex={0}
            role="button"
            aria-label="Mina - Days of Tashreeq"
            onKeyDown={(e) => e.key === "Enter" && handleLocationClick("mina_tashreeq")}
          >
            {/* Text label with connecting line */}
            <text x="170" y="1060" textAnchor="end" fill="#334155" fontSize="14" fontWeight="bold">
              Tashreeq
            </text>
            <line x1="175" y1="1060" x2="205" y2="1060" stroke="#94a3b8" strokeWidth="1.5" />

            <circle
              cx="250"
              cy="1060"
              r="40"
              fill={activeLocation === "mina_tashreeq" ? "#10b981" : "#94a3b8"}
              className="transition-colors duration-300"
            />

            {/* Obligatory indicator */}
            <circle cx="250" cy="1020" r="8" fill="#10b981" />

            {/* Mina-style tent encampment */}
            <g transform="translate(220, 1030)">
              {/* Large central tent */}
              {/* Rectangular base */}
              <rect x="15" y="35" width="30" height="20" fill="white" stroke="#64748b" strokeWidth="1" />
              {/* Triangular roof */}
              <path d="M15,35 L30,15 L45,35 Z" fill="white" stroke="#64748b" strokeWidth="1" />

              {/* Tent entrance */}
              <rect x="25" y="45" width="10" height="10" fill="#64748b" />

              {/* Smaller tent on left */}
              <rect x="0" y="40" width="20" height="15" fill="white" stroke="#64748b" strokeWidth="1" />
              <path d="M0,40 L10,25 L20,40 Z" fill="white" stroke="#64748b" strokeWidth="1" />

              {/* Smaller tent on right */}
              <rect x="40" y="40" width="20" height="15" fill="white" stroke="#64748b" strokeWidth="1" />
              <path d="M40,40 L50,25 L60,40 Z" fill="white" stroke="#64748b" strokeWidth="1" />
            </g>
          </g>

          {/* 10. Jamarat - Final Stoning */}
          <g
            onClick={() => handleLocationClick("jamarat_final")}
            className="cursor-pointer focus:outline-none"
            tabIndex={0}
            role="button"
            aria-label="Jamarat - Final Stoning"
            onKeyDown={(e) => e.key === "Enter" && handleLocationClick("jamarat_final")}
          >
            {/* Text label with connecting line */}
            <text x="170" y="1180" textAnchor="end" fill="#334155" fontSize="14" fontWeight="bold">
              Stoning
            </text>
            <line x1="175" y1="1180" x2="205" y2="1180" stroke="#94a3b8" strokeWidth="1.5" />

            <circle
              cx="250"
              cy="1180"
              r="40"
              fill={activeLocation === "jamarat_final" ? "#10b981" : "#94a3b8"}
              className="transition-colors duration-300"
            />

            {/* Obligatory indicator */}
            <circle cx="250" cy="1140" r="8" fill="#10b981" />

            {/* Three Jamarat pillars with pebbles being thrown */}
            <g transform="translate(220, 1150)">
              {/* Small pillar (Jamarat al-Sughra) */}
              <rect x="0" y="10" width="12" height="40" fill="white" stroke="#64748b" strokeWidth="1" />
              <rect x="2" y="12" width="8" height="36" fill="#64748b" />

              {/* Medium pillar (Jamarat al-Wusta) */}
              <rect x="24" y="5" width="12" height="50" fill="white" stroke="#64748b" strokeWidth="1" />
              <rect x="26" y="7" width="8" height="46" fill="#64748b" />

              {/* Large pillar (Jamarat al-Aqabah) */}
              <rect x="48" y="0" width="12" height="60" fill="white" stroke="#64748b" strokeWidth="1" />
              <rect x="50" y="2" width="8" height="56" fill="#64748b" />

              {/* Flying pebbles */}
              <circle cx="20" cy="25" r="2" fill="#64748b" />
              <circle cx="30" cy="15" r="2" fill="#64748b" />
              <circle cx="40" cy="30" r="2" fill="#64748b" />
            </g>
          </g>

          {/* 11. Makkah - Tawaf Al-Wida (Farewell) */}
          <g
            onClick={() => handleLocationClick("tawaf_wida")}
            className="cursor-pointer focus:outline-none"
            tabIndex={0}
            role="button"
            aria-label="Makkah - Tawaf Al-Wida (Farewell)"
            onKeyDown={(e) => e.key === "Enter" && handleLocationClick("tawaf_wida")}
          >
            {/* Text label with connecting line */}
            <text x="170" y="1300" textAnchor="end" fill="#334155" fontSize="14" fontWeight="bold">
              Farewell
            </text>
            <line x1="175" y1="1300" x2="205" y2="1300" stroke="#94a3b8" strokeWidth="1.5" />

            <circle
              cx="250"
              cy="1300"
              r="40"
              fill={activeLocation === "tawaf_wida" ? "#10b981" : "#94a3b8"}
              className="transition-colors duration-300"
            />

            {/* Obligatory indicator */}
            <circle cx="250" cy="1260" r="8" fill="#10b981" />

            {/* Kaaba cube with dashed circular path */}
            <g transform="translate(230, 1280)">
              {/* Dashed circular path around Kaaba */}
              <circle cx="20" cy="20" r="30" fill="none" stroke="white" strokeWidth="3" strokeDasharray="5,3" />

              {/* Base cube - white outline */}
              <rect x="0" y="0" width="40" height="40" fill="white" stroke="#64748b" strokeWidth="1" />

              {/* Black cloth (Kiswah) */}
              <rect x="5" y="5" width="30" height="30" fill="#64748b" />

              {/* Gold band (Hizam) */}
              <rect x="5" y="15" width="30" height="5" fill="#d4af37" />

              {/* Door */}
              <rect x="15" y="20" width="10" height="15" fill="#d4af37" />
            </g>
          </g>

          {/* Right side labels for balance */}
          <text x="330" y="120" textAnchor="start" fill="#334155" fontSize="14" fontWeight="bold">
            مكة - الإحرام
          </text>
          <line x1="325" y1="120" x2="295" y2="120" stroke="#94a3b8" strokeWidth="1.5" />

          <text x="330" y="220" textAnchor="start" fill="#334155" fontSize="14" fontWeight="bold">
            منى
          </text>
          <line x1="325" y1="220" x2="295" y2="220" stroke="#94a3b8" strokeWidth="1.5" />

          <text x="330" y="340" textAnchor="start" fill="#334155" fontSize="14" fontWeight="bold">
            عرفات
          </text>
          <line x1="325" y1="340" x2="295" y2="340" stroke="#94a3b8" strokeWidth="1.5" />

          <text x="330" y="460" textAnchor="start" fill="#334155" fontSize="14" fontWeight="bold">
            مزدلفة
          </text>
          <line x1="325" y1="460" x2="295" y2="460" stroke="#94a3b8" strokeWidth="1.5" />

          <text x="330" y="580" textAnchor="start" fill="#334155" fontSize="14" fontWeight="bold">
            الجمرات
          </text>
          <line x1="325" y1="580" x2="295" y2="580" stroke="#94a3b8" strokeWidth="1.5" />

          <text x="330" y="700" textAnchor="start" fill="#334155" fontSize="14" fontWeight="bold">
            الذبح
          </text>
          <line x1="325" y1="700" x2="295" y2="700" stroke="#94a3b8" strokeWidth="1.5" />

          <text x="330" y="820" textAnchor="start" fill="#334155" fontSize="14" fontWeight="bold">
            الحلق
          </text>
          <line x1="325" y1="820" x2="295" y2="820" stroke="#94a3b8" strokeWidth="1.5" />

          <text x="330" y="940" textAnchor="start" fill="#334155" fontSize="14" fontWeight="bold">
            طواف الإفاضة
          </text>
          <line x1="325" y1="940" x2="295" y2="940" stroke="#94a3b8" strokeWidth="1.5" />

          <text x="330" y="1060" textAnchor="start" fill="#334155" fontSize="14" fontWeight="bold">
            أيام التشريق
          </text>
          <line x1="325" y1="1060" x2="295" y2="1060" stroke="#94a3b8" strokeWidth="1.5" />

          <text x="330" y="1180" textAnchor="start" fill="#334155" fontSize="14" fontWeight="bold">
            الرمي
          </text>
          <line x1="325" y1="1180" x2="295" y2="1180" stroke="#94a3b8" strokeWidth="1.5" />

          <text x="330" y="1300" textAnchor="start" fill="#334155" fontSize="14" fontWeight="bold">
            طواف الوداع
          </text>
          <line x1="325" y1="1300" x2="295" y2="1300" stroke="#94a3b8" strokeWidth="1.5" />
        </svg>

        {activeLocation && (
          <button
            onClick={handleClose}
            className="absolute top-6 left-6 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Return to map"
          >
            <ArrowLeft size={20} />
          </button>
        )}
      </div>

      <div ref={infoPanelRef} className="w-full lg:w-1/3 bg-white rounded-xl shadow-md overflow-hidden">
        {activeLocation ? (
          <HajjInfoPanel locationData={hajjData[activeLocation]} onBackToMap={handleBackToMap} />
        ) : (
          <div className="h-full overflow-y-auto">
            <div className="bg-emerald-600 p-6 text-white">
              <h2 className="text-2xl font-bold">Hajj Tamattu Guide</h2>
              <p className="text-emerald-100 mt-2">The most common type of Hajj</p>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                Click on any location on the map to learn about the rituals performed during Hajj.
              </p>
              <p className="text-gray-700 mb-6">
                Hajj Tamattu is where pilgrims enter into the state of Ihram, at the respective Meekat, perform Umrah
                first observing all its Rukns, come out of Ihram, and wait till 8th of Dhul Hijja; and then enter again
                in to the state of Ihram and move to Mina then perform the Hajj. Thus. there is a break in between the
                Umrah and Hajj in the Hajj Tamattu type.This is the most common type of Hajj performed today.
              </p>

              {/* Ritual Type Legend */}
              <div className="mb-4 p-4 bg-gray-50 rounded-md">
                <h3 className="font-semibold text-lg mb-3">Ritual Types:</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-600"></div>
                    <span className="text-gray-700">
                      <strong>Obligatory (Fard/Wajib)</strong> - Essential for valid Hajj
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-500"></div>
                    <span className="text-gray-700">
                      <strong>Sunnah (Recommended)</strong> - Following the Prophet's example but not mandatory
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
