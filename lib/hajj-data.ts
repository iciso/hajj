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
  rationale?: string
  rukn?: string[]
  nullifiers?: string[]
  duas?: { text: string; translation?: string; source?: string }[]
  authenticSources?: string[]
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
    rationale:
      "Ihram represents equality before Allah, removing worldly distinctions and entering a state of purity and devotion. It symbolizes the pilgrim's intention to dedicate themselves solely to worship and leave behind worldly concerns.",
    rukn: [
      "Niyyah (intention) to enter the state of Ihram",
      "Wearing the proper Ihram garments for men (two white unsewn cloths)",
      "Reciting the Talbiyah after entering Ihram",
      "Abstaining from prohibited actions while in Ihram",
    ],
    nullifiers: [
      "Intentionally wearing sewn clothes (for men)",
      "Using perfume or scented products",
      "Cutting hair or nails",
      "Hunting or killing land animals",
      "Engaging in marital relations",
      "Covering the face (for women) or head (for men)",
    ],
    duas: [
      {
        text: "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ",
        translation:
          "Here I am, O Allah, here I am. Here I am, You have no partner, here I am. Verily all praise, grace and sovereignty belong to You. You have no partner.",
        source: "Sahih Bukhari 1549 and Sahih Muslim 1184",
      },
      {
        text: "اللَّهُمَّ إِنِّي أُرِيدُ الْعُمْرَةَ فَيَسِّرْهَا لِي وَتَقَبَّلْهَا مِنِّي",
        translation: "O Allah, I intend to perform Umrah, so make it easy for me and accept it from me.",
        source: "Based on the practice of the Prophet (PBUH)",
      },
    ],
    authenticSources: [
      "Sahih Bukhari 1549: The Prophet (PBUH) taught the Talbiyah for Hajj and Umrah",
      "Sahih Muslim 1177: Description of the Prophet's (PBUH) Ihram",
      "Sunan Abu Dawud 1774: The Prophet (PBUH) said, 'Whoever intends to perform Hajj or Umrah should start with Ihram'",
      "Quran 2:196: 'And complete the Hajj and Umrah for Allah'",
    ],
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
    rationale:
      "Staying in Mina on the 8th of Dhul-Hijjah (Yawm al-Tarwiyah) is a preparatory step for the standing at Arafat. It follows the Sunnah of Prophet Muhammad (PBUH) who stayed in Mina before proceeding to Arafat, allowing pilgrims to mentally and spiritually prepare for the most important day of Hajj.",
    rukn: [
      "Re-entering the state of Ihram with the intention for Hajj",
      "Reciting the Talbiyah for Hajj",
      "Staying in Mina (though this is Sunnah, not obligatory according to most scholars)",
    ],
    nullifiers: [
      "Leaving Mina before Fajr of the 9th without a valid reason",
      "Breaking the rules of Ihram (as the pilgrim is now in Ihram for Hajj)",
      "Not making the intention for Hajj when re-entering Ihram",
    ],
    duas: [
      {
        text: "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ",
        translation:
          "Here I am, O Allah, here I am. Here I am, You have no partner, here I am. Verily all praise, grace and sovereignty belong to You. You have no partner.",
        source: "Sahih Bukhari 1549 and Sahih Muslim 1184",
      },
      {
        text: "اللَّهُمَّ إِنِّي أُرِيدُ الْحَجَّ فَيَسِّرْهُ لِي وَتَقَبَّلْهُ مِنِّي",
        translation: "O Allah, I intend to perform Hajj, so make it easy for me and accept it from me.",
        source: "Based on the practice of the Prophet (PBUH)",
      },
      {
        text: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
        translation:
          "Our Lord, give us good in this world and good in the Hereafter, and save us from the punishment of the Fire.",
        source: "Quran 2:201 - A dua frequently recited by the Prophet (PBUH) during Hajj",
      },
    ],
    authenticSources: [
      "Sahih Bukhari 1653: The Prophet (PBUH) stayed at Mina on the day of Tarwiyah and prayed there",
      "Sahih Muslim 1218: Description of the Prophet's (PBUH) journey to Mina on the 8th of Dhul-Hijjah",
      "Sunan Abu Dawud 1911: The Prophet (PBUH) prayed five prayers in Mina: Dhuhr, Asr, Maghrib, Isha, and Fajr",
      "Musnad Ahmad 14334: The Prophet (PBUH) spent the night in Mina before proceeding to Arafat",
      "Ibn Majah 3074: The Prophet (PBUH) said, 'Hajj is Arafat', indicating that while staying in Mina is Sunnah, it is not a pillar of Hajj",
    ],
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
