"use client"

import { useEffect, useRef } from "react"
import type { LocationData } from "@/lib/hajj-data"
import { Calendar, Clock, MapPin } from "lucide-react"

interface HajjInfoPanelProps {
  locationData: LocationData
}

export default function HajjInfoPanel({ locationData }: HajjInfoPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null)

  // Reset scroll position when location changes
  useEffect(() => {
    if (panelRef.current) {
      panelRef.current.scrollTop = 0
    }
  }, [locationData])

  return (
    <div ref={panelRef} className="h-full overflow-y-auto">
      <div className="bg-emerald-600 p-6 text-white">
        <h2 className="text-2xl font-bold">{locationData.name}</h2>
        <p className="text-emerald-100">{locationData.arabicName}</p>
        {locationData.timing && (
          <p className="text-emerald-100 mt-2 flex items-center gap-2">
            <Calendar size={16} />
            <span>{locationData.timing}</span>
          </p>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <MapPin size={18} />
          <span>{locationData.description}</span>
        </div>

        {locationData.duration && (
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <Clock size={18} />
            <span>{locationData.duration}</span>
          </div>
        )}

        {locationData.significance && (
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Significance</h3>
            <p className="text-gray-700">{locationData.significance}</p>
          </div>
        )}

        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Rituals Performed</h3>
          <ul className="list-disc pl-5 space-y-2">
            {locationData.rituals.map((ritual, index) => (
              <li key={index} className="text-gray-700">
                {ritual}
              </li>
            ))}
          </ul>
        </div>

        {locationData.rationale && (
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Rationale for the Ritual</h3>
            <p className="text-gray-700">{locationData.rationale}</p>
          </div>
        )}

        {locationData.rukn && locationData.rukn.length > 0 && (
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Rukn for the Ritual's Acceptance</h3>
            <ul className="list-disc pl-5 space-y-2">
              {locationData.rukn.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {locationData.nullifiers && locationData.nullifiers.length > 0 && (
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Nullifiers of the Ritual</h3>
            <ul className="list-disc pl-5 space-y-2">
              {locationData.nullifiers.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {locationData.duas && locationData.duas.length > 0 && (
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Duas or Ayats that Must Be Said</h3>
            <div className="space-y-4">
              {locationData.duas.map((dua, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded-md">
                  <p className="text-right font-arabic text-lg mb-2">{dua.text}</p>
                  {dua.translation && <p className="text-gray-700 italic mb-1">{dua.translation}</p>}
                  {dua.source && <p className="text-gray-500 text-sm">{dua.source}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {locationData.historicalContext && (
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Historical Context</h3>
            <p className="text-gray-700">{locationData.historicalContext}</p>
          </div>
        )}

        {locationData.authenticSources && locationData.authenticSources.length > 0 && (
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Authentic Sources and Evidence</h3>
            <ul className="list-disc pl-5 space-y-2">
              {locationData.authenticSources.map((source, index) => (
                <li key={index} className="text-gray-700">
                  {source}
                </li>
              ))}
            </ul>
          </div>
        )}

        {locationData.tips && (
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Tips</h3>
            <ul className="list-disc pl-5 space-y-2">
              {locationData.tips.map((tip, index) => (
                <li key={index} className="text-gray-700">
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
