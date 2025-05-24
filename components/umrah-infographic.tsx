"use client"

import { useState, useRef } from "react"
import { ArrowLeft, Info } from "lucide-react"
import HajjInfoPanel from "./hajj-info-panel"
import { umrahData } from "@/lib/umrah-data"

export default function UmrahInfographic() {
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
    }, 100)
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
      <div ref={mapRef} className="w-full lg:w-2/3 bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl p-4 relative">
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
                <div className="w-4 h-4 rounded-full bg-blue-600"></div>
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

        <svg viewBox="0 0 500 900" className="w-full h-auto focus:outline-none" aria-label="Umrah locations map">
          {/* Background */}
          <rect x="0" y="0" width="500" height="900" fill="url(#blueGradient)" rx="10" />

          {/* Gradient definition */}
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#dbeafe" />
              <stop offset="100%" stopColor="#bfdbfe" />
            </linearGradient>
          </defs>

          {/* Timeline path - centered */}
          <path d="M250,80 L250,820" fill="none" stroke="#3b82f6" strokeWidth="4" strokeDasharray="8,8" />

          {/* 1. Historical Context - Now First */}
          <g
            onClick={() => handleLocationClick("historical_context")}
            className="cursor-pointer focus:outline-none"
            tabIndex={0}
            role="button"
            aria-label="Historical Foundation"
            onKeyDown={(e) => e.key === "Enter" && handleLocationClick("historical_context")}
          >
            <text x="170" y="80" textAnchor="end" fill="#1e40af" fontSize="14" fontWeight="bold">
              History
            </text>
            <line x1="175" y1="80" x2="205" y2="80" stroke="#3b82f6" strokeWidth="1.5" />

            <circle
              cx="250"
              cy="80"
              r="35"
              fill={activeLocation === "historical_context" ? "#f59e0b" : "#94a3b8"}
              className="transition-colors duration-300"
            />

            <circle cx="250" cy="45" r="6" fill="#f59e0b" />

            {/* Scroll/book icon for history */}
            <g transform="translate(225, 55)">
              <rect x="5" y="10" width="40" height="30" fill="white" stroke="#64748b" strokeWidth="1" rx="3" />
              <path d="M10,15 L40,15 M10,20 L35,20 M10,25 L40,25 M10,30 L30,30" stroke="#64748b" strokeWidth="1" />
              <circle cx="15" cy="35" r="3" fill="#d4af37" />
            </g>
          </g>

          {/* 2. Meeqat - Entering Ihram - Now Second */}
          <g
            onClick={() => handleLocationClick("meeqat_ihram")}
            className="cursor-pointer focus:outline-none"
            tabIndex={0}
            role="button"
            aria-label="Meeqat - Entering Ihram"
            onKeyDown={(e) => e.key === "Enter" && handleLocationClick("meeqat_ihram")}
          >
            <text x="170" y="200" textAnchor="end" fill="#1e40af" fontSize="14" fontWeight="bold">
              Meeqat
            </text>
            <line x1="175" y1="200" x2="205" y2="200" stroke="#3b82f6" strokeWidth="1.5" />

            <circle
              cx="250"
              cy="200"
              r="35"
              fill={activeLocation === "meeqat_ihram" ? "#2563eb" : "#94a3b8"}
              className="transition-colors duration-300"
            />

            <circle cx="250" cy="165" r="6" fill="#2563eb" />

            {/* Ihram icon using the provided SVG */}
            <g transform="translate(225, 175) scale(1.0)">
              <svg viewBox="-5.0 -10.0 110.0 135.0" width="50" height="50">
                <path
                  d="m17.969 93.75c-0.50781-7.3711 1.5703-27.164 2.9688-30.434 0.60938-1.4219 2.0078-2.5391 3.9023-3.4414 2.5781-1.2227 6.1055-2.0938 9.5195-3.1016 2.7305-0.80859 5.3828-1.707 7.3555-2.9922 1.7734-1.1562 2.9766-2.6328 3.0195-4.7109-5.5508-1.5547-10.105-5.5-12.48-10.652-0.53906 0.21484-1.1211 0.33594-1.7344 0.33594-2.5586 0-4.6367-2.0781-4.6367-4.6367 0-2.5508 2.0586-4.6172 4.6016-4.6367 0.0625-1.5859 0.3125-3.1172 0.73047-4.5859 0.039062-4.4609 2.4453-9.3047 5.9805-13.035 3.5781-3.7734 8.2969-6.3828 12.801-6.3828 4.5078 0 9.2266 2.6133 12.805 6.3828 3.5391 3.7305 5.9453 8.5742 5.9844 13.035 0.44141 1.5469 0.69531 3.1719 0.74219 4.8516 2.5391 0.023437 4.5938 2.0938 4.5938 4.6367 0 2.5586-2.0781 4.6367-4.6367 4.6367-0.65234 0-1.2734-0.13281-1.8359-0.37891-2.3828 5.0078-6.8398 8.8438-12.258 10.398 0.21875 1.8047 1.3633 3.1289 2.9844 4.1875 1.9727 1.2891 4.625 2.1836 7.3555 2.9922 3.4141 1.0078 6.9453 1.8789 9.5195 3.1016 1.8984 0.89844 3.293 2.0156 3.9023 3.4375 1.3984 3.2695 3.3945 23.621 2.8828 30.996 0 0.019532 0 0.039063-0.003906 0.054688-0.027344 0.40625-0.36719 0.72656-0.77734 0.72656h-0.054687-62.391-0.054688c-0.41016 0-0.75-0.32031-0.77734-0.72656-0.003906-0.019532-0.003906-0.039063-0.003906-0.054688zm28.316-44.32c-0.16406 2.4531-1.5742 4.2578-3.7148 5.6562-2.0859 1.3594-4.8828 2.3281-7.7656 3.1797-3.3281 0.98828-6.7773 1.8242-9.293 3.0195-1.4922 0.71094-2.6562 1.5234-3.1328 2.6445-1.3281 3.0977-3.2266 21.383-2.8867 29.039h10.98v-5.4844-12.484c0-0.42969 0.35156-0.78125 0.78125-0.78125 0.42969 0 0.78125 0.35156 0.78125 0.78125v8.0234c2.2227-4.832 5.8984-9.168 10.16-11.812 2.1797-1.3555 4.7734-2.0469 7.2773-2.8516 2.3164-0.74219 4.5547-1.5781 6.2227-3.2852 2.3984-2.457 3.0859-6.0312 3.7852-9.4688-0.70312-0.33594-1.3594-0.69141-1.9609-1.082-1.9844-1.293-3.3398-2.9414-3.6602-5.125-1.2461 0.25-2.5391 0.38281-3.8555 0.38281-1.2734 0-2.5117-0.12109-3.7148-0.35156zm-12.926-12.395c2.6797 6.5547 9.1211 11.184 16.641 11.184 1.5078 0 2.9766-0.1875 4.3789-0.53906 5.5078-1.3828 10.008-5.3047 12.18-10.445 0.86719-2.0547 1.3672-4.3047 1.4062-6.6641 0.003906-0.10547 0.003906-0.21484 0.003906-0.32031 0-1.1992-0.11719-2.3711-0.33984-3.5078-0.41016 0.25781-0.93359 0.49609-1.5664 0.71094-3.2617 1.0938-9.6641 1.6016-16.07 1.5586-6.3945-0.042969-12.789-0.63672-16.051-1.6875-0.625-0.20312-1.1484-0.42969-1.5547-0.66406-0.23438 1.1602-0.35938 2.3594-0.35938 3.5898v0.066406c0.007812 2.375 0.47656 4.6445 1.3281 6.7188zm-2.875-6.0039c-1.6797 0.019531-3.0391 1.3867-3.0391 3.0742 0 1.6953 1.3789 3.0742 3.0742 3.0742 0.39844 0 0.78516-0.078126 1.1367-0.21875-0.68359-1.8594-1.0898-3.8516-1.1719-5.9297zm36.738-6.0352c0-4.1328-2.2734-8.6133-5.5547-12.07-3.2695-3.4453-7.5508-5.8984-11.668-5.8984s-8.3984 2.4492-11.664 5.8984c-3.2734 3.4531-5.5469 7.9258-5.5547 12.055 0.007812 0.011719 0.039062 0.058593 0.066406 0.085937 0.050782 0.050782 0.11328 0.10156 0.17969 0.14844 0.32422 0.22656 0.80469 0.42969 1.3984 0.625 3.1641 1.0195 9.3711 1.5703 15.582 1.6133 6.1992 0.039063 12.398-0.41797 15.562-1.4766 0.58984-0.19531 1.0625-0.41016 1.3828-0.65625 0.14062-0.10547 0.26953-0.19141 0.26953-0.32031zm1.0391 12.195c0.375 0.16406 0.78906 0.25391 1.2227 0.25391 1.6953 0 3.0742-1.3789 3.0742-3.0742 0-1.6914-1.3672-3.0625-3.0547-3.0742-0.10938 2.0664-0.53906 4.0508-1.2422 5.8984zm12.254 55.773c0.34766-7.6914-1.4766-26.504-2.8047-29.602-0.47656-1.1211-1.6367-1.9297-3.1328-2.6445-2.5156-1.1953-5.9648-2.0312-9.293-3.0156-1.5-0.44531-2.9766-0.91797-4.3398-1.4648-0.75391 3.6289-1.6016 7.3359-4.1328 9.9297-1.8438 1.8828-4.3008 2.8555-6.8672 3.6797-2.3789 0.76172-4.8516 1.3984-6.9297 2.6875-5.1406 3.1953-9.3789 9.0078-10.984 15.062v5.3672zm-9.8945-24.883c0.09375-0.42188 0.50781-0.69141 0.92969-0.59766 0.42188 0.089844 0.6875 0.50781 0.59766 0.92969-0.60156 2.7461-1.1914 5.625-3.2305 7.5938-1.3789 1.332-3.2109 2.0234-5.125 2.6016-1.7344 0.52734-3.5391 0.96094-5.0547 1.8516-3.7461 2.1953-6.8359 6.207-7.9844 10.371-0.11719 0.41406-0.54297 0.66406-0.96094 0.54688-0.41406-0.11719-0.66406-0.54297-0.54688-0.96094 1.2539-4.543 4.6172-8.9141 8.6992-11.309 1.6172-0.94531 3.5391-1.4336 5.3906-1.9922 1.6719-0.50781 3.2891-1.0703 4.4922-2.2266 1.8164-1.7578 2.2539-4.3594 2.7891-6.8047z"
                  fill="#ffffff"
                  fillRule="nonzero"
                />
              </svg>
            </g>
          </g>

          {/* Rest of the Umrah timeline icons remain the same... */}
          {/* 3. Tawaf */}
          <g
            onClick={() => handleLocationClick("tawaf_umrah")}
            className="cursor-pointer focus:outline-none"
            tabIndex={0}
            role="button"
            aria-label="Tawaf - Circumambulation"
            onKeyDown={(e) => e.key === "Enter" && handleLocationClick("tawaf_umrah")}
          >
            <text x="170" y="320" textAnchor="end" fill="#1e40af" fontSize="14" fontWeight="bold">
              Tawaf
            </text>
            <line x1="175" y1="320" x2="205" y2="320" stroke="#3b82f6" strokeWidth="1.5" />

            <circle
              cx="250"
              cy="320"
              r="35"
              fill={activeLocation === "tawaf_umrah" ? "#2563eb" : "#94a3b8"}
              className="transition-colors duration-300"
            />

            <circle cx="250" cy="285" r="6" fill="#2563eb" />

            {/* Kaaba with circular path */}
            <g transform="translate(230, 300)">
              <circle cx="20" cy="20" r="25" fill="none" stroke="white" strokeWidth="2" />
              <rect x="10" y="10" width="20" height="20" fill="white" stroke="#64748b" strokeWidth="1" />
              <rect x="12" y="12" width="16" height="16" fill="#64748b" />
              <rect x="12" y="18" width="16" height="3" fill="#d4af37" />
            </g>
          </g>

          {/* 4. Sa'i */}
          <g
            onClick={() => handleLocationClick("sai")}
            className="cursor-pointer focus:outline-none"
            tabIndex={0}
            role="button"
            aria-label="Sa'i - Walking between Safa and Marwa"
            onKeyDown={(e) => e.key === "Enter" && handleLocationClick("sai")}
          >
            <text x="170" y="440" textAnchor="end" fill="#1e40af" fontSize="14" fontWeight="bold">
              Sa'i
            </text>
            <line x1="175" y1="440" x2="205" y2="440" stroke="#3b82f6" strokeWidth="1.5" />

            <circle
              cx="250"
              cy="440"
              r="35"
              fill={activeLocation === "sai" ? "#2563eb" : "#94a3b8"}
              className="transition-colors duration-300"
            />

            <circle cx="250" cy="405" r="6" fill="#2563eb" />

            {/* Two hills with path between them */}
            <g transform="translate(220, 415)">
              <path d="M5,35 L15,15 L25,35" fill="white" stroke="#64748b" strokeWidth="1" />
              <path d="M35,35 L45,15 L55,35" fill="white" stroke="#64748b" strokeWidth="1" />
              <path d="M25,25 L35,25" stroke="#64748b" strokeWidth="2" strokeDasharray="3,2" />
              <text x="15" y="45" textAnchor="middle" fontSize="8" fill="#64748b">
                Safa
              </text>
              <text x="45" y="45" textAnchor="middle" fontSize="8" fill="#64748b">
                Marwa
              </text>
            </g>
          </g>

          {/* 5. Zamzam */}
          <g
            onClick={() => handleLocationClick("zamzam")}
            className="cursor-pointer focus:outline-none"
            tabIndex={0}
            role="button"
            aria-label="Zamzam Water"
            onKeyDown={(e) => e.key === "Enter" && handleLocationClick("zamzam")}
          >
            <text x="170" y="560" textAnchor="end" fill="#1e40af" fontSize="14" fontWeight="bold">
              Zamzam
            </text>
            <line x1="175" y1="560" x2="205" y2="560" stroke="#3b82f6" strokeWidth="1.5" />

            <circle
              cx="250"
              cy="560"
              r="35"
              fill={activeLocation === "zamzam" ? "#f59e0b" : "#94a3b8"}
              className="transition-colors duration-300"
            />

            <circle cx="250" cy="525" r="6" fill="#f59e0b" />

            {/* Water well icon */}
            <g transform="translate(225, 535)">
              <circle cx="25" cy="25" r="20" fill="white" stroke="#64748b" strokeWidth="2" />
              <circle cx="25" cy="25" r="15" fill="#3b82f6" />
              <path d="M20,20 Q25,15 30,20 Q25,25 20,20" fill="white" opacity="0.7" />
              <rect x="20" y="5" width="10" height="15" fill="white" stroke="#64748b" strokeWidth="1" />
            </g>
          </g>

          {/* 6. Maqam Ibrahim */}
          <g
            onClick={() => handleLocationClick("maqam_ibrahim")}
            className="cursor-pointer focus:outline-none"
            tabIndex={0}
            role="button"
            aria-label="Maqam Ibrahim"
            onKeyDown={(e) => e.key === "Enter" && handleLocationClick("maqam_ibrahim")}
          >
            <text x="170" y="680" textAnchor="end" fill="#1e40af" fontSize="14" fontWeight="bold">
              Maqam
            </text>
            <line x1="175" y1="680" x2="205" y2="680" stroke="#3b82f6" strokeWidth="1.5" />

            <circle
              cx="250"
              cy="680"
              r="35"
              fill={activeLocation === "maqam_ibrahim" ? "#f59e0b" : "#94a3b8"}
              className="transition-colors duration-300"
            />

            <circle cx="250" cy="645" r="6" fill="#f59e0b" />

            {/* Prayer mat with footprint */}
            <g transform="translate(225, 655)">
              <rect x="5" y="15" width="40" height="25" fill="white" stroke="#64748b" strokeWidth="1" rx="3" />
              <rect x="8" y="18" width="34" height="19" fill="#d4af37" opacity="0.3" />
              <ellipse cx="20" cy="27" rx="4" ry="6" fill="#64748b" />
              <ellipse cx="30" cy="27" rx="4" ry="6" fill="#64748b" />
            </g>
          </g>

          {/* 7. Shaving */}
          <g
            onClick={() => handleLocationClick("hair_cutting")}
            className="cursor-pointer focus:outline-none"
            tabIndex={0}
            role="button"
            aria-label="Hair Cutting/Trimming"
            onKeyDown={(e) => e.key === "Enter" && handleLocationClick("hair_cutting")}
          >
            <text x="170" y="800" textAnchor="end" fill="#1e40af" fontSize="14" fontWeight="bold">
              Shaving
            </text>
            <line x1="175" y1="800" x2="205" y2="800" stroke="#3b82f6" strokeWidth="1.5" />

            <circle
              cx="250"
              cy="800"
              r="35"
              fill={activeLocation === "hair_cutting" ? "#2563eb" : "#94a3b8"}
              className="transition-colors duration-300"
            />

            <circle cx="250" cy="765" r="6" fill="#2563eb" />

            {/* Bald head icon for shaving - SAME AS HAJJ TIMELINE */}
            <g transform="translate(225, 775)">
              {/* Bald head - side profile */}
              <path
                d="M15,50 C5,50 0,40 0,30 C0,15 10,0 25,0 C40,0 50,10 50,25 C50,35 45,45 35,50 L15,50 Z"
                fill="white"
                stroke="#64748b"
                strokeWidth="1.5"
              />

              {/* Ear */}
              <path
                d="M15,30 C15,25 10,25 10,30 C10,35 15,40 20,35"
                fill="white"
                stroke="#64748b"
                strokeWidth="1.5"
                fillRule="evenodd"
              />

              {/* Eye */}
              <ellipse cx="35" cy="20" rx="3" ry="4" fill="#64748b" />

              {/* Eyebrow */}
              <path d="M30,15 C35,10 40,10 45,15" fill="none" stroke="#64748b" strokeWidth="1.5" />

              {/* Nose */}
              <path d="M45,20 L50,25 L45,30" fill="none" stroke="#64748b" strokeWidth="1.5" />

              {/* Mouth */}
              <path d="M40,35 C42,37 45,37 47,35" fill="none" stroke="#64748b" strokeWidth="1.5" />

              {/* Neck */}
              <path d="M15,50 L15,60 L30,60 L35,50" fill="white" stroke="#64748b" strokeWidth="1.5" />
            </g>
          </g>

          {/* Right side Arabic labels */}
          <text x="330" y="80" textAnchor="start" fill="#1e40af" fontSize="14" fontWeight="bold">
            التاريخ
          </text>
          <line x1="325" y1="80" x2="295" y2="80" stroke="#3b82f6" strokeWidth="1.5" />

          <text x="330" y="200" textAnchor="start" fill="#1e40af" fontSize="14" fontWeight="bold">
            الميقات
          </text>
          <line x1="325" y1="200" x2="295" y2="200" stroke="#3b82f6" strokeWidth="1.5" />

          <text x="330" y="320" textAnchor="start" fill="#1e40af" fontSize="14" fontWeight="bold">
            الطواف
          </text>
          <line x1="325" y1="320" x2="295" y2="320" stroke="#3b82f6" strokeWidth="1.5" />

          <text x="330" y="440" textAnchor="start" fill="#1e40af" fontSize="14" fontWeight="bold">
            السعي
          </text>
          <line x1="325" y1="440" x2="295" y2="440" stroke="#3b82f6" strokeWidth="1.5" />

          <text x="330" y="560" textAnchor="start" fill="#1e40af" fontSize="14" fontWeight="bold">
            زمزم
          </text>
          <line x1="325" y1="560" x2="295" y2="560" stroke="#3b82f6" strokeWidth="1.5" />

          <text x="330" y="680" textAnchor="start" fill="#1e40af" fontSize="14" fontWeight="bold">
            مقام إبراهيم
          </text>
          <line x1="325" y1="680" x2="295" y2="680" stroke="#3b82f6" strokeWidth="1.5" />

          <text x="330" y="800" textAnchor="start" fill="#1e40af" fontSize="14" fontWeight="bold">
            الحلق
          </text>
          <line x1="325" y1="800" x2="295" y2="800" stroke="#3b82f6" strokeWidth="1.5" />
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
          <HajjInfoPanel locationData={umrahData[activeLocation]} onBackToMap={handleBackToMap} />
        ) : (
          <div className="h-full overflow-y-auto">
            <div className="bg-blue-600 p-6 text-white">
              <h2 className="text-2xl font-bold">Umrah Guide</h2>
              <p className="text-blue-100 mt-2">The Lesser Pilgrimage - Part of Hajj Tamattu</p>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                Click on any location on the timeline to learn about the rituals performed during Umrah.
              </p>
              <p className="text-gray-700 mb-6">
                Start with the Historical Foundation to understand the sacred significance and strengthen your Niyyah
                (intention), then proceed through each step of Umrah. This is the first part of Hajj Tamattu.
              </p>

              {/* Ritual Type Legend */}
              <div className="mb-4 p-4 bg-gray-50 rounded-md">
                <h3 className="font-semibold text-lg mb-3">Ritual Types:</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-600"></div>
                    <span className="text-gray-700">
                      <strong>Obligatory (Fard/Wajib)</strong> - Essential for valid Umrah
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

              <div className="bg-blue-50 p-4 rounded-md">
                <h4 className="font-medium text-blue-800 mb-2">Important Note:</h4>
                <p className="text-blue-700 text-sm">
                  After completing Umrah, you exit Ihram and can resume normal activities until the 8th of Dhul-Hijjah,
                  when you re-enter Ihram for the Hajj portion.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
