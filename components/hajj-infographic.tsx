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
        <svg viewBox="0 0 400 1400" className="w-full h-auto focus:outline-none" aria-label="Hajj locations map">
          {/* Background */}
          <rect x="0" y="0" width="400" height="1400" fill="#f8fafc" rx="10" />

          {/* Timeline path */}
          <path d="M200,50 L200,1350" fill="none" stroke="#94a3b8" strokeWidth="4" strokeDasharray="8,8" />

          {/* 1. Makkah - Ihram & Umrah */}
          <g
            onClick={() => handleLocationClick("makkah_ihram")}
            className="cursor-pointer focus:outline-none"
            tabIndex={0}
            role="button"
            aria-label="Makkah - Ihram & Umrah"
            onKeyDown={(e) => e.key === "Enter" && handleLocationClick("makkah_ihram")}
          >
            {/* Text label on the left - simplified */}
            <text x="120" y="120" textAnchor="end" fill="#334155" fontSize="14" fontWeight="bold">
              Ihram
            </text>

            <circle
              cx="200"
              cy="120"
              r="40"
              fill={activeLocation === "makkah_ihram" ? "#4ade80" : "#94a3b8"}
              className="transition-colors duration-300"
            />
            <rect x="180" y="100" width="40" height="40" fill="white" />
            <rect x="185" y="105" width="30" height="30" fill="#64748b" />
          </g>

          {/* 2. Mina - First Day */}
          <g
            onClick={() => handleLocationClick("mina_first")}
            className="cursor-pointer focus:outline-none"
            tabIndex={0}
            role="button"
            aria-label="Mina - First Day"
            onKeyDown={(e) => e.key === "Enter" && handleLocationClick("mina_first")}
          >
            {/* Text label on the left - simplified */}
            <text x="120" y="220" textAnchor="end" fill="#334155" fontSize="14" fontWeight="bold">
              Mina
            </text>

            <circle
              cx="200"
              cy="220"
              r="40"
              fill={activeLocation === "mina_first" ? "#4ade80" : "#94a3b8"}
              className="transition-colors duration-300"
            />
            <path d="M180,240 L200,200 L220,240 Z" fill="white" />
            <path d="M185,235 L200,205 L215,235 Z" fill="#64748b" />
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
            {/* Text label on the left - simplified */}
            <text x="120" y="340" textAnchor="end" fill="#334155" fontSize="14" fontWeight="bold">
              Arafat
            </text>

            <circle
              cx="200"
              cy="340"
              r="40"
              fill={activeLocation === "arafat" ? "#4ade80" : "#94a3b8"}
              className="transition-colors duration-300"
            />
            <path d="M180,360 L200,320 L220,360 Z" fill="white" />
            <path d="M185,355 L200,325 L215,355 Z" fill="#64748b" />
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
            {/* Text label on the left - simplified */}
            <text x="120" y="460" textAnchor="end" fill="#334155" fontSize="14" fontWeight="bold">
              Muzdalifah
            </text>

            <circle
              cx="200"
              cy="460"
              r="40"
              fill={activeLocation === "muzdalifah" ? "#4ade80" : "#94a3b8"}
              className="transition-colors duration-300"
            />
            <circle cx="200" cy="450" r="20" fill="white" />
            <circle cx="200" cy="450" r="15" fill="#64748b" />
            <circle cx="185" cy="470" r="6" fill="white" />
            <circle cx="215" cy="470" r="6" fill="white" />
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
            {/* Text label on the left - simplified */}
            <text x="120" y="580" textAnchor="end" fill="#334155" fontSize="14" fontWeight="bold">
              Jamarat
            </text>

            <circle
              cx="200"
              cy="580"
              r="40"
              fill={activeLocation === "jamarat_first" ? "#4ade80" : "#94a3b8"}
              className="transition-colors duration-300"
            />
            <rect x="190" y="550" width="20" height="60" fill="white" />
            <rect x="195" y="555" width="10" height="50" fill="#64748b" />
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
            {/* Text label on the left - already one word */}
            <text x="120" y="700" textAnchor="end" fill="#334155" fontSize="14" fontWeight="bold">
              Sacrifice
            </text>

            <circle
              cx="200"
              cy="700"
              r="40"
              fill={activeLocation === "sacrifice" ? "#4ade80" : "#94a3b8"}
              className="transition-colors duration-300"
            />
            <path d="M180,710 L220,710 L220,690 L210,680 L190,680 L180,690 Z" fill="white" />
            <path d="M185,705 L215,705 L215,690 L205,685 L195,685 L185,690 Z" fill="#64748b" />
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
            {/* Text label on the left - simplified */}
            <text x="120" y="820" textAnchor="end" fill="#334155" fontSize="14" fontWeight="bold">
              Shaving
            </text>

            <circle
              cx="200"
              cy="820"
              r="40"
              fill={activeLocation === "shaving" ? "#4ade80" : "#94a3b8"}
              className="transition-colors duration-300"
            />
            <path
              d="M180,820 C180,810 190,805 200,805 C210,805 220,810 220,820"
              stroke="white"
              strokeWidth="8"
              fill="none"
            />
            <path
              d="M180,820 C180,810 190,805 200,805 C210,805 220,810 220,820"
              stroke="#64748b"
              strokeWidth="4"
              fill="none"
            />
            <path d="M185,825 L195,815 M205,815 L215,825" stroke="white" strokeWidth="8" />
            <path d="M185,825 L195,815 M205,815 L215,825" stroke="#64748b" strokeWidth="4" />
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
            {/* Text label on the left - simplified */}
            <text x="120" y="940" textAnchor="end" fill="#334155" fontSize="14" fontWeight="bold">
              Tawaf
            </text>

            <circle
              cx="200"
              cy="940"
              r="40"
              fill={activeLocation === "tawaf_ifadah" ? "#4ade80" : "#94a3b8"}
              className="transition-colors duration-300"
            />
            <rect x="180" y="920" width="40" height="40" fill="white" />
            <rect x="185" y="925" width="30" height="30" fill="#64748b" />
            <path d="M200,940 m-12,0 a12,12 0 1,0 24,0 a12,12 0 1,0 -24,0" fill="none" stroke="white" strokeWidth="3" />
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
            {/* Text label on the left - simplified */}
            <text x="120" y="1060" textAnchor="end" fill="#334155" fontSize="14" fontWeight="bold">
              Tashreeq
            </text>

            <circle
              cx="200"
              cy="1060"
              r="40"
              fill={activeLocation === "mina_tashreeq" ? "#4ade80" : "#94a3b8"}
              className="transition-colors duration-300"
            />
            <path d="M180,1080 L200,1040 L220,1080 Z" fill="white" />
            <path d="M185,1075 L200,1045 L215,1075 Z" fill="#64748b" />
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
            {/* Text label on the left - simplified */}
            <text x="120" y="1180" textAnchor="end" fill="#334155" fontSize="14" fontWeight="bold">
              Stoning
            </text>

            <circle
              cx="200"
              cy="1180"
              r="40"
              fill={activeLocation === "jamarat_final" ? "#4ade80" : "#94a3b8"}
              className="transition-colors duration-300"
            />
            <rect x="180" y="1150" width="40" height="50" fill="white" />
            <rect x="185" y="1155" width="10" height="40" fill="#64748b" />
            <rect x="195" y="1160" width="10" height="35" fill="#64748b" />
            <rect x="205" y="1155" width="10" height="40" fill="#64748b" />
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
            {/* Text label on the left - simplified */}
            <text x="120" y="1300" textAnchor="end" fill="#334155" fontSize="14" fontWeight="bold">
              Farewell
            </text>

            <circle
              cx="200"
              cy="1300"
              r="40"
              fill={activeLocation === "tawaf_wida" ? "#4ade80" : "#94a3b8"}
              className="transition-colors duration-300"
            />
            <rect x="180" y="1280" width="40" height="40" fill="white" />
            <rect x="185" y="1285" width="30" height="30" fill="#64748b" />
            <path
              d="M200,1300 m-12,0 a12,12 0 1,0 24,0 a12,12 0 1,0 -24,0"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeDasharray="5,3"
            />
          </g>

          {/* Legend */}
          <rect x="20" y="1380" width="360" height="60" fill="white" rx="5" stroke="#e2e8f0" />
          <text x="30" y="1405" fontSize="14" fontWeight="bold">
            Hajj Tamattu
          </text>
          <text x="30" y="1425" fontSize="12">
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
