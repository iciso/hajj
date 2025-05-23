"use client"

import { useEffect, useRef } from "react"
import type { LocationData, RitualType } from "@/lib/hajj-data"
import { Calendar, Clock, MapPin, Star, CheckCircle2, ArrowLeft } from "lucide-react"

interface HajjInfoPanelProps {
  locationData: LocationData
  onBackToMap?: () => void
}

export default function HajjInfoPanel({ locationData, onBackToMap }: HajjInfoPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null)

  // Reset scroll position when location changes
  useEffect(() => {
    if (panelRef.current) {
      panelRef.current.scrollTop = 0
    }
  }, [locationData])

  // Function to render ritual with appropriate icon based on type
  const renderRitual = (ritual: { text: string; type: RitualType }, index: number) => {
    return (
      <li key={index} className="text-gray-700 flex items-start gap-2">
        {ritual.type === "obligatory" ? (
          <CheckCircle2 size={18} className="text-emerald-600 mt-0.5 flex-shrink-0" />
        ) : (
          <Star size={18} className="text-amber-500 mt-0.5 flex-shrink-0" />
        )}
        <span>{ritual.text}</span>
      </li>
    )
  }

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

        {/* Ritual Type Legend */}
        <div className="mb-4 p-3 bg-gray-50 rounded-md">
          <h4 className="font-medium text-gray-700 mb-2">Ritual Types:</h4>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-600" />
              <span className="text-sm text-gray-700">Obligatory (Fard/Wajib) - Essential for valid Hajj</span>
            </div>
            <div className="flex items-center gap-2">
              <Star size={16} className="text-amber-500" />
              <span className="text-sm text-gray-700">Sunnah - Recommended but not mandatory</span>
            </div>
          </div>
        </div>

        {locationData.significance && (
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Significance</h3>
            <p className="text-gray-700">{locationData.significance}</p>
          </div>
        )}

        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Rituals Performed</h3>
          <ul className="pl-5 space-y-2">{locationData.rituals.map((ritual, index) => renderRitual(ritual, index))}</ul>
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

        {locationData.compensation && locationData.compensation.length > 0 && (
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Compensation</h3>
            <ul className="list-disc pl-5 space-y-2">
              {locationData.compensation.map((item, index) => (
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

        {/* Back to Map Button - Mobile/Tablet only */}
        <div className="lg:hidden p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onBackToMap}
            className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 px-4 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Timeline</span>
          </button>
        </div>
      </div>
    </div>
  )
}
