import type { LocationData } from "@/lib/hajj-data"
import { Calendar, Clock, MapPin } from "lucide-react"

interface HajjInfoPanelProps {
  locationData: LocationData
}

export default function HajjInfoPanel({ locationData }: HajjInfoPanelProps) {
  return (
    <div className="h-full overflow-y-auto">
      <div className="bg-emerald-600 p-6 text-white">
        <h2 className="text-2xl font-bold">{locationData.name}</h2>
        <p className="text-emerald-100">{locationData.arabicName}</p>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <MapPin size={18} />
          <span>{locationData.description}</span>
        </div>

        {locationData.timing && (
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <Calendar size={18} />
            <span>{locationData.timing}</span>
          </div>
        )}

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

        {locationData.historicalContext && (
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Historical Context</h3>
            <p className="text-gray-700">{locationData.historicalContext}</p>
          </div>
        )}
      </div>
    </div>
  )
}
