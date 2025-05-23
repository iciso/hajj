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

            {/* Kaaba cube */}
            <g transform="translate(230, 100)">
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
              <g>
                <path
                  d="m38.301 32.926c2.447-3.53 3.738-7.644 3.738-11.926 0-11.58-9.42-21-21-21s-21 9.42-21 21 9.42 21 21 21c3.68 0 7.304-.981 10.51-2.842l7.248 1.812c.341.088.701-.015.95-.263s.348-.608.263-.949zm-36.262-11.926c0-10.477 8.523-19 19-19 8.824 0 16.24 6.055 18.368 14.222-.558.432-1.67.672-2.749.903-1.131.242-2.3.492-3.152 1.029-.895.564-1.742 1.713-2.64 2.93-.804 1.091-2.151 2.916-2.827 2.916h-3c-2.987 0-4.863-4.875-4.993-8.593l2.7-2.7c.228-.227.332-.55.28-.867s-.252-.59-.54-.734c-.09-.045-2.237-1.106-4.447-1.106-1.707 0-2.822.614-3.355 1h-5.645c-1.654 0-3 1.346-3 3v3c0 1.654 1.346 3 3 3 1.667 0 5 1.729 5 4 0 7.727 5.322 12 9 12 3.082 0 4.975.521 6.331 1.743.071.063.13.141.197.21-2.651 1.339-5.569 2.047-8.528 2.047-10.477 0-19-8.523-19-19zm29.596 16.118c-.054-.014-.109-.004-.164-.008-.231-.31-.479-.599-.762-.854-1.756-1.581-4.049-2.256-7.67-2.256-2.512 0-7-3.342-7-10 0-3.664-4.597-6-7-6-.551 0-1-.449-1-1v-1.612l1.684.561c.105.035.212.051.316.051.419 0 .809-.265.949-.684.175-.524-.108-1.09-.632-1.265l-2.069-.69c.183-.216.447-.361.752-.361h6c.253 0 .51-.108.696-.282.031-.029.785-.718 2.304-.718.777 0 1.57.179 2.209.377l-1.916 1.916c-.188.188-.293.442-.293.707 0 4.436 2.225 11 7 11h3c1.686 0 3.022-1.811 4.436-3.729.748-1.014 1.522-2.063 2.097-2.425.551-.348 1.544-.56 2.504-.766.955-.205 1.929-.418 2.746-.798.128.89.217 1.792.217 2.717 0 4.014-1.255 7.864-3.628 11.135-.174.239-.233.543-.161.83l1.415 5.661z"
                  fill="white"
                  stroke="#64748b"
                  strokeWidth="0.8"
                />
                <path
                  d="m61.234 46.636-5.076-1.224c-.617-.124-1.158-.784-1.158-1.412v-1.11c1.235-1.263 2-2.988 2-4.89v-6c0-3.86-3.14-7-7-7s-7 3.14-7 7v6c0 1.901.765 3.627 2 4.89v1.11c0 .628-.541 1.288-1.195 1.421l-5.002 1.206c-1.55.312-2.764 1.793-2.764 3.373v13c0 .553.448 1 1 1h25.922c.552 0 1-.447 1-1v-13c0-1.58-1.214-3.062-2.727-3.364zm-11.234-3.636c-2.417 0-4.438-1.726-4.9-4.01 1.264 1.241 2.993 2.01 4.9 2.01s3.636-.769 4.9-2.01c-.462 2.284-2.483 4.01-4.9 4.01zm-3 1.314c.911.435 1.925.686 3 .686s2.089-.251 3-.686v3.271l-2.414 2.415h-1.172l-2.414-2.414zm-2-12.314c0-2.757 2.243-5 5-5s5 2.243 5 5v2c0 2.757-2.243 5-5 5s-5-2.243-5-5zm16.961 30h-23.922v-12c0-.628.541-1.288 1.195-1.421l5.002-1.206c.268-.054.521-.153.764-.271v.898c0 .266.105.52.293.707l3 3c.187.188.442.293.707.293h2c.265 0 .52-.105.707-.293l3-3c.188-.187.293-.441.293-.707v-.893c.233.111.473.206.727.257l5.076 1.224c.617.124 1.158.784 1.158 1.412z"
                  fill="white"
                  stroke="#64748b"
                  strokeWidth="0.8"
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
                Hajj Tamattu is where pilgrims perform Umrah first, then Hajj with a break in between. This is the most
                common type of Hajj performed today.
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
