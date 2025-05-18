export interface LocationData {
  name: string
  arabicName: string
  description: string
  timing?: string
  duration?: string
  significance?: string
  rituals: string[]
  tips?: string[]
  historicalContext?: string
}

export interface HajjData {
  [key: string]: LocationData
}

export const hajjData: HajjData = {
  makkah_ihram: {
    name: "Makkah - Ihram & Umrah",
    arabicName: "مكة المكرمة - الإحرام والعمرة",
    description: "The holiest city in Islam and the birthplace of Prophet Muhammad (PBUH)",
    timing: "Before 8th of Dhul-Hijjah",
    significance:
      "Entering the sacred state of Ihram is the first step of Hajj, signifying purity and devotion to Allah.",
    rituals: [
      "Entering Ihram (sacred state) by wearing special white garments",
      "Reciting the Talbiyah prayer",
      "Performing Umrah (Tawaf around the Kaaba seven times)",
      "Sa'i (walking between Safa and Marwa hills seven times)",
      "Trimming hair to complete Umrah",
      "Coming out of Ihram temporarily until 8th Dhul-Hijjah",
    ],
    tips: [
      "Men should wear two pieces of white unsewn cloth",
      "Women can wear any modest clothing but should not cover their faces",
      "Avoid using scented products, cutting nails, or trimming hair while in Ihram",
      "Prepare mentally and spiritually for the journey ahead",
    ],
    historicalContext:
      "The ritual of Ihram dates back to Prophet Ibrahim (Abraham) and was revived by Prophet Muhammad (PBUH) during his farewell pilgrimage.",
  },
  mina_first: {
    name: "Mina - First Day",
    arabicName: "منى - اليوم الأول",
    description: "A valley near Makkah where pilgrims stay in tents",
    timing: "8th of Dhul-Hijjah",
    duration: "One day and night",
    rituals: [
      "Re-entering Ihram for Hajj",
      "Moving from Makkah to Mina",
      "Praying Dhuhr, Asr, Maghrib, Isha, and Fajr in Mina",
      "Spending the night in Mina",
    ],
    tips: [
      "Pack light but essential items for your stay in Mina",
      "Bring a prayer mat, water bottle, and some snacks",
      "Stay with your group to avoid getting lost",
      "Rest well as the next day (Arafat) is physically and spiritually demanding",
    ],
    historicalContext:
      "Mina is where Prophet Ibrahim (Abraham) was tempted by Satan and stoned him. It has been a gathering place for pilgrims since the time of Prophet Muhammad (PBUH).",
  },
  arafat: {
    name: "Arafat - Day of Standing",
    arabicName: "عرفات - يوم الوقوف",
    description: "A plain about 20 kilometers east of Makkah",
    timing: "9th of Dhul-Hijjah",
    duration: "From dawn until sunset",
    significance:
      "The most important day of Hajj. Standing on Arafat is the essence of Hajj, and without it, the Hajj is considered invalid.",
    rituals: [
      "Standing (Wuquf) at Arafat and making supplications",
      "Listening to the sermon at Masjid Namirah",
      "Combining Dhuhr and Asr prayers",
      "Making dua (supplication) until sunset",
    ],
    tips: [
      "Bring an umbrella for shade as there are few natural shelters",
      "Stay hydrated throughout the day",
      "Focus on making dua as this is the most spiritually significant time",
      "Conserve energy as the day can be physically demanding",
    ],
    historicalContext:
      "It is believed that on Arafat, Adam and Eve were reunited after being expelled from Paradise. It is also where Prophet Muhammad (PBUH) delivered his Farewell Sermon.",
  },
  muzdalifah: {
    name: "Muzdalifah - Overnight Stay",
    arabicName: "مزدلفة - المبيت",
    description: "An open area between Mina and Arafat",
    timing: "Evening of 9th Dhul-Hijjah until dawn of 10th Dhul-Hijjah",
    duration: "One night",
    rituals: [
      "Moving from Arafat to Muzdalifah after sunset",
      "Combining Maghrib and Isha prayers",
      "Spending the night under the open sky",
      "Collecting pebbles for the stoning ritual at Jamarat",
    ],
    tips: [
      "Collect 49 pebbles (or at least 21 if performing shortened Hajj)",
      "Rest as much as possible as the next day is physically demanding",
      "Be prepared to sleep outdoors with minimal facilities",
      "Stay with your group to avoid getting lost in the darkness",
    ],
    historicalContext:
      "Muzdalifah is mentioned in the Quran as Al-Mash'ar Al-Haram (the Sacred Monument). It is where pilgrims gather after standing at Arafat.",
  },
  jamarat_first: {
    name: "Jamarat - First Stoning",
    arabicName: "الجمرات - الرمي الأول",
    description: "Three stone pillars representing Satan",
    timing: "Morning of 10th Dhul-Hijjah",
    rituals: [
      "Moving from Muzdalifah to Mina at dawn",
      "Stoning the large pillar (Jamarat al-Aqabah) with seven pebbles",
      "Reciting takbir (Allahu Akbar) with each throw",
    ],
    tips: [
      "Aim carefully but don't worry if you miss",
      "Be gentle with throws to avoid hurting others",
      "Try to avoid peak times to reduce crowding",
      "The elderly and weak can appoint someone to perform the ritual on their behalf",
    ],
    historicalContext:
      "The stoning ritual commemorates Prophet Ibrahim's rejection of Satan's temptations to disobey Allah's command to sacrifice his son.",
  },
  sacrifice: {
    name: "Sacrifice",
    arabicName: "الذبح",
    description: "Sacrificing an animal in remembrance of Prophet Ibrahim's willingness to sacrifice his son",
    timing: "10th of Dhul-Hijjah (after first stoning)",
    rituals: [
      "Sacrificing an animal (sheep, goat, cow, or camel)",
      "Distributing the meat to the poor and needy",
      "Can be done by proxy through authorized agencies",
    ],
    tips: [
      "Most pilgrims now use vouchers to have the sacrifice performed on their behalf",
      "Ensure your sacrifice is done through an authorized agency",
      "Keep the receipt as proof of sacrifice",
    ],
    historicalContext:
      "This ritual commemorates Allah's mercy in replacing Prophet Ibrahim's son with a ram for sacrifice, after Ibrahim demonstrated his willingness to obey Allah's command.",
  },
  shaving: {
    name: "Shaving or Trimming Hair",
    arabicName: "الحلق أو التقصير",
    description: "Shaving or trimming hair after sacrifice",
    timing: "10th of Dhul-Hijjah (after sacrifice)",
    rituals: [
      "Men: Completely shaving the head (preferred) or trimming hair equally from all parts of the head",
      "Women: Trimming a fingertip length of hair",
    ],
    tips: [
      "Men should consider shaving completely as it carries more reward",
      "Women should only trim their hair, not shave it",
      "Use clean, hygienic tools to avoid infections",
    ],
    historicalContext:
      "This ritual symbolizes humility and detachment from physical appearances, focusing instead on spiritual purification.",
  },
  tawaf_ifadah: {
    name: "Tawaf Al-Ifadah",
    arabicName: "طواف الإفاضة",
    description: "The obligatory circumambulation of the Kaaba after Arafat",
    timing: "10th of Dhul-Hijjah (after shaving/trimming)",
    significance: "This is an essential pillar of Hajj without which the Hajj is invalid.",
    rituals: [
      "Circumambulating the Kaaba seven times",
      "Praying two rakats behind Maqam Ibrahim",
      "Drinking Zamzam water",
      "Performing Sa'i between Safa and Marwa (if not done with Umrah in Tamattu Hajj)",
    ],
    tips: [
      "The 10th day is very busy, so you may delay this Tawaf until the 11th or 12th if needed",
      "Wear comfortable shoes as you'll be walking on marble floors",
      "Stay hydrated with Zamzam water available throughout the Haram",
    ],
    historicalContext:
      "Tawaf Al-Ifadah is also known as Tawaf Az-Ziyarah (the visit) because pilgrims 'visit' the Kaaba after standing at Arafat.",
  },
  mina_tashreeq: {
    name: "Mina - Days of Tashreeq",
    arabicName: "منى - أيام التشريق",
    description: "Staying in Mina for the final days of Hajj",
    timing: "11th, 12th, and optionally 13th of Dhul-Hijjah",
    duration: "Two or three days",
    rituals: [
      "Staying in Mina",
      "Stoning all three Jamarat pillars each day after Dhuhr prayer",
      "Performing daily prayers",
    ],
    tips: [
      "Stone the pillars in order: small, medium, then large",
      "Those in a hurry can leave after stoning on the 12th before sunset",
      "Those staying for the 13th must stone all pillars again on that day",
    ],
    historicalContext:
      "These days are called Tashreeq because in pre-Islamic times, the Arabs would dry strips of sacrificial meat in the sun during these days.",
  },
  jamarat_final: {
    name: "Jamarat - Final Stoning",
    arabicName: "الجمرات - الرمي الأخير",
    description: "Stoning all three pillars on the 11th, 12th, and optionally 13th days",
    timing: "11th, 12th, and optionally 13th of Dhul-Hijjah (after Dhuhr prayer)",
    rituals: [
      "Stoning the small pillar (Jamarat al-Sughra) with seven pebbles",
      "Stoning the medium pillar (Jamarat al-Wusta) with seven pebbles",
      "Stoning the large pillar (Jamarat al-Aqabah) with seven pebbles",
      "Reciting takbir (Allahu Akbar) with each throw",
    ],
    tips: [
      "Start after Dhuhr prayer and before Maghrib",
      "Stone in the correct order: small, medium, then large",
      "Make dua after stoning the small and medium pillars, but not after the large one",
      "Those leaving on the 12th must depart Mina before sunset",
    ],
    historicalContext:
      "The three pillars represent the three locations where Satan tried to tempt Prophet Ibrahim to disobey Allah's command.",
  },
  tawaf_wida: {
    name: "Tawaf Al-Wida (Farewell Tawaf)",
    arabicName: "طواف الوداع",
    description: "The final circumambulation of the Kaaba before leaving Makkah",
    timing: "Before departing from Makkah (after completing all Hajj rituals)",
    significance: "This is the final act of Hajj, bidding farewell to the Kaaba.",
    rituals: [
      "Circumambulating the Kaaba seven times",
      "Making final supplications",
      "Departing from Makkah with the Kaaba as the last thing visited",
    ],
    tips: [
      "Perform this Tawaf just before leaving Makkah",
      "Women in menstruation are exempted from this Tawaf",
      "Try to leave Makkah directly after this Tawaf without delay",
      "Make heartfelt dua as this may be your last visit to the Kaaba",
    ],
    historicalContext:
      "Prophet Muhammad (PBUH) instructed that the last act a pilgrim should perform in Makkah is Tawaf around the Kaaba, emphasizing its importance as a farewell ritual.",
  },
}
