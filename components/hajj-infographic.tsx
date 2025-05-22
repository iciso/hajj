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
              fill={activeLocation === "makkah_ihram" ? "#4ade80" : "#94a3b8"}
              className="transition-colors duration-300"
            />

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
              fill={activeLocation === "mina_first" ? "#4ade80" : "#94a3b8"}
              className="transition-colors duration-300"
            />

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
              fill={activeLocation === "arafat" ? "#4ade80" : "#94a3b8"}
              className="transition-colors duration-300"
            />

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
              fill={activeLocation === "muzdalifah" ? "#4ade80" : "#94a3b8"}
              className="transition-colors duration-300"
            />

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
              fill={activeLocation === "jamarat_first" ? "#4ade80" : "#94a3b8"}
              className="transition-colors duration-300"
            />

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
              fill={activeLocation === "sacrifice" ? "#4ade80" : "#94a3b8"}
              className="transition-colors duration-300"
            />

            {/* Sheep icon for sacrifice */}
            <g transform="translate(220, 670)">
              {/* Sheep body - fluffy and rounded */}
              <ellipse cx="30" cy="40" rx="25" ry="15" fill="white" stroke="#64748b" strokeWidth="1.5" />

              {/* Wool texture */}
              <path
                d="M10,35 C15,30 20,32 25,30 C30,28 35,30 40,32 C45,34 50,32 55,35"
                fill="none"
                stroke="#64748b"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <path
                d="M10,40 C15,38 20,40 25,38 C30,36 35,38 40,40 C45,42 50,40 55,42"
                fill="none"
                stroke="#64748b"
                strokeWidth="1"
                strokeLinecap="round"
              />

              {/* Head */}
              <ellipse cx="55" cy="30" rx="8" ry="6" fill="white" stroke="#64748b" strokeWidth="1.5" />

              {/* Eye */}
              <circle cx="58" cy="28" r="1" fill="#64748b" />

              {/* Ear */}
              <ellipse cx="50" cy="26" rx="3" ry="2" fill="white" stroke="#64748b" strokeWidth="1" />

              {/* Legs */}
              <line x1="20" y1="55" x2="20" y2="65" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="40" y1="55" x2="40" y2="65" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />

              {/* Tail */}
              <path d="M10,35 C5,30 5,25 10,20" fill="none" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />
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
              fill={activeLocation === "shaving" ? "#4ade80" : "#94a3b8"}
              className="transition-colors duration-300"
            />

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
              fill={activeLocation === "tawaf_ifadah" ? "#4ade80" : "#94a3b8"}
              className="transition-colors duration-300"
            />

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
              fill={activeLocation === "mina_tashreeq" ? "#4ade80" : "#94a3b8"}
              className="transition-colors duration-300"
            />

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
              fill={activeLocation === "jamarat_final" ? "#4ade80" : "#94a3b8"}
              className="transition-colors duration-300"
            />

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
              fill={activeLocation === "tawaf_wida" ? "#4ade80" : "#94a3b8"}
              className="transition-colors duration-300"
            />

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

      <div className="w-full lg:w-1/3 bg-white rounded-xl shadow-md overflow-hidden">
        {activeLocation ? (
          <HajjInfoPanel locationData={hajjData[activeLocation]} />
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
              <p className="text-gray-700">
                Hajj Tamattu is where pilgrims perform Umrah first, then Hajj with a break in between. This is the most
                common type of Hajj performed today.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
