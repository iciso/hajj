"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import HajjInfoPanel from "./hajj-info-panel"
import { hajjData } from "@/lib/hajj-data"

export default function HajjInfographic() {
  const [activeLocation, setActiveLocation] = useState<string | null>(null)

  const handleLocationClick = (locationId: string) => {
    setActiveLocation(locationId)
  }

  const handleClose = () => {
    setActiveLocation(null)
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8 relative">
      <div className="w-full lg:w-2/3 bg-gray-50 rounded-xl p-4 relative">
        <svg viewBox="0 0 400 1200" className="w-full h-auto" aria-label="Hajj locations map">
          {/* Background */}
          <rect x="0" y="0" width="400" height="1200" fill="#f8fafc" rx="10" />

          {/* Timeline path */}
          <path d="M200,50 L200,1150" fill="none" stroke="#94a3b8" strokeWidth="4" strokeDasharray="8,8" />

          {/* Day labels */}
          <text x="50" y="30" fontSize="16" fontWeight="bold" fill="#334155">
            8th Dhul-Hijjah
          </text>
          <text x="50" y="230" fontSize="16" fontWeight="bold" fill="#334155">
            9th Dhul-Hijjah
          </text>
          <text x="50" y="530" fontSize="16" fontWeight="bold" fill="#334155">
            10th Dhul-Hijjah
          </text>
          <text x="50" y="830" fontSize="16" fontWeight="bold" fill="#334155">
            11th-13th Dhul-Hijjah
          </text>

          {/* 1. Makkah - Ihram & Umrah */}
          <g
            onClick={() => handleLocationClick("makkah_ihram")}
            className={`cursor-pointer transition-transform hover:scale-105 ${
              activeLocation === "makkah_ihram" ? "scale-105" : ""
            }`}
            tabIndex={0}
            role="button"
            aria-label="Makkah - Ihram & Umrah"
            onKeyDown={(e) => e.key === "Enter" && handleLocationClick("makkah_ihram")}
          >
            <circle cx="200" cy="100" r="40" fill={activeLocation === "makkah_ihram" ? "#10b981" : "#334155"} />
            <rect x="180" y="80" width="40" height="40" fill="#1e293b" />
            <text x="260" y="105" textAnchor="start" fill="#1e293b" fontSize="14" fontWeight="bold">
              Ihram & Umrah
            </text>
            <line x1="240" y1="100" x2="255" y2="100" stroke="#1e293b" strokeWidth="2" />
          </g>

          {/* 2. Mina - First Day */}
          <g
            onClick={() => handleLocationClick("mina_first")}
            className={`cursor-pointer transition-transform hover:scale-105 ${
              activeLocation === "mina_first" ? "scale-105" : ""
            }`}
            tabIndex={0}
            role="button"
            aria-label="Mina - First Day"
            onKeyDown={(e) => e.key === "Enter" && handleLocationClick("mina_first")}
          >
            <circle cx="200" cy="180" r="40" fill={activeLocation === "mina_first" ? "#10b981" : "#334155"} />
            <path d="M180,200 L200,160 L220,200 Z" fill="#1e293b" />
            <text x="260" y="185" textAnchor="start" fill="#1e293b" fontSize="14" fontWeight="bold">
              Mina - First Day
            </text>
            <line x1="240" y1="180" x2="255" y2="180" stroke="#1e293b" strokeWidth="2" />
          </g>

          {/* 3. Arafat */}
          <g
            onClick={() => handleLocationClick("arafat")}
            className={`cursor-pointer transition-transform hover:scale-105 ${
              activeLocation === "arafat" ? "scale-105" : ""
            }`}
            tabIndex={0}
            role="button"
            aria-label="Arafat - Day of Standing"
            onKeyDown={(e) => e.key === "Enter" && handleLocationClick("arafat")}
          >
            <circle cx="200" cy="280" r="40" fill={activeLocation === "arafat" ? "#10b981" : "#334155"} />
            <path d="M180,300 L200,260 L220,300 Z" fill="#1e293b" />
            <path d="M190,300 L200,270 L210,300 Z" fill="#1e293b" />
            <text x="260" y="285" textAnchor="start" fill="#1e293b" fontSize="14" fontWeight="bold">
              Arafat - Standing
            </text>
            <line x1="240" y1="280" x2="255" y2="280" stroke="#1e293b" strokeWidth="2" />
          </g>

          {/* 4. Muzdalifah */}
          <g
            onClick={() => handleLocationClick("muzdalifah")}
            className={`cursor-pointer transition-transform hover:scale-105 ${
              activeLocation === "muzdalifah" ? "scale-105" : ""
            }`}
            tabIndex={0}
            role="button"
            aria-label="Muzdalifah - Overnight Stay"
            onKeyDown={(e) => e.key === "Enter" && handleLocationClick("muzdalifah")}
          >
            <circle cx="200" cy="380" r="40" fill={activeLocation === "muzdalifah" ? "#10b981" : "#334155"} />
            <circle cx="200" cy="370" r="15" fill="#1e293b" />
            <circle cx="185" cy="390" r="6" fill="#1e293b" />
            <circle cx="215" cy="390" r="6" fill="#1e293b" />
            <text x="260" y="385" textAnchor="start" fill="#1e293b" fontSize="14" fontWeight="bold">
              Muzdalifah - Night
            </text>
            <line x1="240" y1="380" x2="255" y2="380" stroke="#1e293b" strokeWidth="2" />
          </g>

          {/* 5. Mina - Jamarat (First Stoning) */}
          <g
            onClick={() => handleLocationClick("jamarat_first")}
            className={`cursor-pointer transition-transform hover:scale-105 ${
              activeLocation === "jamarat_first" ? "scale-105" : ""
            }`}
            tabIndex={0}
            role="button"
            aria-label="Jamarat - First Stoning"
            onKeyDown={(e) => e.key === "Enter" && handleLocationClick("jamarat_first")}
          >
            <circle cx="200" cy="480" r="40" fill={activeLocation === "jamarat_first" ? "#10b981" : "#334155"} />
            <rect x="195" y="450" width="10" height="60" fill="#1e293b" />
            <text x="260" y="485" textAnchor="start" fill="#1e293b" fontSize="14" fontWeight="bold">
              Jamarat - Stoning
            </text>
            <line x1="240" y1="480" x2="255" y2="480" stroke="#1e293b" strokeWidth="2" />
          </g>

          {/* 6. Sacrifice */}
          <g
            onClick={() => handleLocationClick("sacrifice")}
            className={`cursor-pointer transition-transform hover:scale-105 ${
              activeLocation === "sacrifice" ? "scale-105" : ""
            }`}
            tabIndex={0}
            role="button"
            aria-label="Sacrifice"
            onKeyDown={(e) => e.key === "Enter" && handleLocationClick("sacrifice")}
          >
            <circle cx="200" cy="580" r="40" fill={activeLocation === "sacrifice" ? "#10b981" : "#334155"} />
            <path d="M180,590 L220,590 L220,570 L210,560 L190,560 L180,570 Z" fill="#1e293b" />
            <text x="260" y="585" textAnchor="start" fill="#1e293b" fontSize="14" fontWeight="bold">
              Sacrifice
            </text>
            <line x1="240" y1="580" x2="255" y2="580" stroke="#1e293b" strokeWidth="2" />
          </g>

          {/* 7. Shaving/Trimming Hair */}
          <g
            onClick={() => handleLocationClick("shaving")}
            className={`cursor-pointer transition-transform hover:scale-105 ${
              activeLocation === "shaving" ? "scale-105" : ""
            }`}
            tabIndex={0}
            role="button"
            aria-label="Shaving or Trimming Hair"
            onKeyDown={(e) => e.key === "Enter" && handleLocationClick("shaving")}
          >
            <circle cx="200" cy="680" r="40" fill={activeLocation === "shaving" ? "#10b981" : "#334155"} />
            <path
              d="M180,680 C180,670 190,665 200,665 C210,665 220,670 220,680"
              stroke="#1e293b"
              strokeWidth="4"
              fill="none"
            />
            <path d="M185,685 L195,675 M205,675 L215,685" stroke="#1e293b" strokeWidth="4" />
            <text x="260" y="685" textAnchor="start" fill="#1e293b" fontSize="14" fontWeight="bold">
              Shaving/Trimming
            </text>
            <line x1="240" y1="680" x2="255" y2="680" stroke="#1e293b" strokeWidth="2" />
          </g>

          {/* 8. Makkah - Tawaf Al-Ifadah */}
          <g
            onClick={() => handleLocationClick("tawaf_ifadah")}
            className={`cursor-pointer transition-transform hover:scale-105 ${
              activeLocation === "tawaf_ifadah" ? "scale-105" : ""
            }`}
            tabIndex={0}
            role="button"
            aria-label="Makkah - Tawaf Al-Ifadah"
            onKeyDown={(e) => e.key === "Enter" && handleLocationClick("tawaf_ifadah")}
          >
            <circle cx="200" cy="780" r="40" fill={activeLocation === "tawaf_ifadah" ? "#10b981" : "#334155"} />
            <rect x="180" y="760" width="40" height="40" fill="#1e293b" />
            <path d="M200,780 m-15,0 a15,15 0 1,0 30,0 a15,15 0 1,0 -30,0" fill="none" stroke="white" strokeWidth="3" />
            <text x="260" y="785" textAnchor="start" fill="#1e293b" fontSize="14" fontWeight="bold">
              Tawaf Al-Ifadah
            </text>
            <line x1="240" y1="780" x2="255" y2="780" stroke="#1e293b" strokeWidth="2" />
          </g>

          {/* 9. Mina - Days of Tashreeq */}
          <g
            onClick={() => handleLocationClick("mina_tashreeq")}
            className={`cursor-pointer transition-transform hover:scale-105 ${
              activeLocation === "mina_tashreeq" ? "scale-105" : ""
            }`}
            tabIndex={0}
            role="button"
            aria-label="Mina - Days of Tashreeq"
            onKeyDown={(e) => e.key === "Enter" && handleLocationClick("mina_tashreeq")}
          >
            <circle cx="200" cy="880" r="40" fill={activeLocation === "mina_tashreeq" ? "#10b981" : "#334155"} />
            <path d="M180,900 L200,860 L220,900 Z" fill="#1e293b" />
            <text x="260" y="885" textAnchor="start" fill="#1e293b" fontSize="14" fontWeight="bold">
              Mina - Tashreeq Days
            </text>
            <line x1="240" y1="880" x2="255" y2="880" stroke="#1e293b" strokeWidth="2" />
          </g>

          {/* 10. Jamarat - Final Stoning */}
          <g
            onClick={() => handleLocationClick("jamarat_final")}
            className={`cursor-pointer transition-transform hover:scale-105 ${
              activeLocation === "jamarat_final" ? "scale-105" : ""
            }`}
            tabIndex={0}
            role="button"
            aria-label="Jamarat - Final Stoning"
            onKeyDown={(e) => e.key === "Enter" && handleLocationClick("jamarat_final")}
          >
            <circle cx="200" cy="980" r="40" fill={activeLocation === "jamarat_final" ? "#10b981" : "#334155"} />
            <rect x="185" y="950" width="10" height="40" fill="#1e293b" />
            <rect x="205" y="950" width="10" height="40" fill="#1e293b" />
            <rect x="195" y="960" width="10" height="30" fill="#1e293b" />
            <text x="260" y="985" textAnchor="start" fill="#1e293b" fontSize="14" fontWeight="bold">
              Jamarat - All Pillars
            </text>
            <line x1="240" y1="980" x2="255" y2="980" stroke="#1e293b" strokeWidth="2" />
          </g>

          {/* 11. Makkah - Tawaf Al-Wida (Farewell) */}
          <g
            onClick={() => handleLocationClick("tawaf_wida")}
            className={`cursor-pointer transition-transform hover:scale-105 ${
              activeLocation === "tawaf_wida" ? "scale-105" : ""
            }`}
            tabIndex={0}
            role="button"
            aria-label="Makkah - Tawaf Al-Wida (Farewell)"
            onKeyDown={(e) => e.key === "Enter" && handleLocationClick("tawaf_wida")}
          >
            <circle cx="200" cy="1080" r="40" fill={activeLocation === "tawaf_wida" ? "#10b981" : "#334155"} />
            <rect x="180" y="1060" width="40" height="40" fill="#1e293b" />
            <path
              d="M200,1080 m-15,0 a15,15 0 1,0 30,0 a15,15 0 1,0 -30,0"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeDasharray="5,3"
            />
            <text x="260" y="1085" textAnchor="start" fill="#1e293b" fontSize="14" fontWeight="bold">
              Tawaf Al-Wida
            </text>
            <line x1="240" y1="1080" x2="255" y2="1080" stroke="#1e293b" strokeWidth="2" />
          </g>

          {/* Legend */}
          <rect x="20" y="1120" width="360" height="60" fill="white" rx="5" stroke="#e2e8f0" />
          <text x="30" y="1145" fontSize="14" fontWeight="bold">
            Hajj Tamattu
          </text>
          <text x="30" y="1165" fontSize="12">
            The most common type of Hajj - Umrah then Hajj with a break in between
          </text>
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

      <div className="w-full lg:w-1/3 bg-white rounded-xl shadow-md overflow-hidden">
        {activeLocation ? (
          <HajjInfoPanel locationData={hajjData[activeLocation]} />
        ) : (
          <div className="p-6 h-full flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl font-bold mb-4">Hajj Tamattu Guide</h2>
            <p className="text-gray-600 mb-4">
              Click on any location on the map to learn about the rituals performed there during Hajj.
            </p>
            <p className="text-gray-600">
              Hajj Tamattu is the most common type of Hajj, where pilgrims perform Umrah first, then Hajj.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
