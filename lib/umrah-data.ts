export type RitualType = "obligatory" | "sunnah"

export interface LocationData {
  name: string
  arabicName: string
  description: string
  timing?: string
  duration?: string
  significance?: string
  rituals: { text: string; type: RitualType }[]
  tips?: string[]
  historicalContext?: string
  rationale?: string
  rukn?: string[]
  nullifiers?: string[]
  compensation?: string[]
  duas?: { text: string; translation?: string; source?: string }[]
  authenticSources?: string[]
}

export interface UmrahData {
  [key: string]: LocationData
}

export const umrahData: UmrahData = {
  meeqat_ihram: {
    name: "Meeqat - Entering Ihram",
    arabicName: "الميقات - الإحرام",
    description: "Sacred boundaries where pilgrims must enter the state of Ihram before proceeding to Makkah",
    timing: "Before entering the Haram boundaries",
    significance:
      "The Meeqat represents the spiritual gateway to the sacred precincts of Makkah, where pilgrims transition from the mundane world to a state of sacred devotion.",
    rituals: [
      { text: "Performing Ghusl (ritual bath) before wearing Ihram", type: "sunnah" },
      { text: "Wearing the two white unsewn cloths (for men)", type: "obligatory" },
      { text: "Making the intention (Niyyah) for Umrah", type: "obligatory" },
      { text: "Reciting the Talbiyah", type: "obligatory" },
      { text: "Avoiding prohibited acts of Ihram", type: "obligatory" },
    ],
    tips: [
      "The five main Meeqat points are: Dhul-Hulayfah (for Madinah), Al-Juhfah (for Syria/Egypt), Qarn al-Manazil (for Najd), Yalamlam (for Yemen), and Dhat Irq (for Iraq)",
      "Air travelers should wear Ihram before crossing the Meeqat boundary from the air",
      "Trim nails and remove unwanted hair before entering Ihram",
      "Use unscented soap and avoid perfumes after entering Ihram",
      "Keep extra safety pins for the Ihram garments",
    ],
    historicalContext:
      "The Meeqat boundaries were established by Prophet Muhammad (PBUH) during his lifetime, defining the sacred limits beyond which no one may enter Makkah without being in the state of Ihram.",
    rationale:
      "Entering Ihram at the Meeqat symbolizes leaving behind worldly concerns and entering a state of spiritual purity and equality before Allah. The uniform white garments represent the equality of all believers, regardless of social status or wealth.",
    rukn: [
      "Making the intention (Niyyah) for Umrah at or before the Meeqat",
      "Wearing the prescribed Ihram garments (for men)",
      "Reciting the Talbiyah after entering Ihram",
      "Avoiding all prohibited acts while in Ihram",
    ],
    nullifiers: [
      "Crossing the Meeqat boundary without entering Ihram",
      "Wearing sewn clothes (for men) or covering the head (for men) or face (for women)",
      "Using perfume or scented products",
      "Cutting hair or nails",
      "Hunting or killing land animals",
      "Engaging in marital relations",
    ],
    compensation: [
      "For crossing Meeqat without Ihram: Return to Meeqat if possible, otherwise sacrifice a sheep",
      "For wearing prohibited clothing: Remove immediately and sacrifice a sheep or feed six poor people or fast three days",
      "For using perfume: Same compensation as wearing prohibited clothing",
      "For cutting hair/nails: Feed one poor person for each violation",
    ],
    duas: [
      {
        text: "لَبَّيْكَ اللَّهُمَّ عُمْرَةً",
        translation: "Here I am, O Allah, for Umrah",
        source: "Intention for Umrah",
      },
      {
        text: "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ",
        translation:
          "Here I am, O Allah, here I am. Here I am, You have no partner, here I am. Verily all praise, grace and sovereignty belong to You. You have no partner.",
        source: "Sahih Bukhari 1549 and Sahih Muslim 1184",
      },
    ],
    authenticSources: [
      "Sahih Bukhari 1845: The Prophet (PBUH) established the Meeqat boundaries",
      "Sahih Muslim 1181: Description of entering Ihram at the Meeqat",
      "Sunan Abu Dawud 1774: The obligation of entering Ihram at the Meeqat",
      "Quran 2:196: 'And complete the Hajj and Umrah for Allah'",
    ],
  },
  historical_context: {
    name: "Historical Foundation & Spiritual Preparation",
    arabicName: "الأساس التاريخي والإعداد الروحي",
    description:
      "Understanding the sacred history from Adam to Ibrahim - Essential for proper Niyyah (intention) before entering Ihram",
    timing: "Before reaching the Meeqat - Part of spiritual preparation",
    significance:
      "Reflecting on this sacred history purifies the heart and strengthens the intention (Niyyah) for Umrah, connecting us to the continuous chain of worship from Adam through all the prophets.",
    rituals: [
      { text: "Reflecting on Adam (AS) and the first house of worship", type: "sunnah" },
      { text: "Contemplating Ibrahim and Ismail's (AS) rebuilding of the Kaaba", type: "sunnah" },
      { text: "Understanding Hajar's trial and the origin of Sa'i", type: "sunnah" },
      { text: "Strengthening your Niyyah (intention) for Umrah", type: "obligatory" },
      { text: "Preparing mentally and spiritually for the sacred journey", type: "sunnah" },
    ],
    tips: [
      "Study this history before your journey to enhance spiritual connection",
      "Reflect on how your Umrah connects you to all previous believers",
      "Use this knowledge to strengthen your intention (Niyyah) when entering Ihram",
      "Remember that you are following the footsteps of all the prophets",
      "Let this history humble you and increase your devotion",
    ],
    historicalContext:
      "According to Islamic tradition, the first house of worship was built by Prophet Adam (AS) at the site of the current Kaaba. After the flood during Prophet Nuh's time, the location was lost until Allah commanded Prophet Ibrahim (AS) and his son Ismail (AS) to rebuild it. The Quran states: 'And when We designated for Ibrahim the site of the House, [saying], Do not associate anything with Me and purify My House for those who perform Tawaf and those who stand [in prayer] and those who bow and prostrate.' (22:26). This same house has been the center of worship for over 4000 years.",
    rationale:
      "Understanding this history is crucial for proper Niyyah because it connects your personal journey to the universal story of monotheism. When you know that Adam, Ibrahim, Ismail, and Muhammad (peace be upon them all) all worshipped at this same location, your intention becomes deeper and more meaningful. This knowledge transforms your Umrah from a mere ritual into a profound spiritual connection with the entire history of faith.",
    authenticSources: [
      "Quran 22:26: Allah's command to Ibrahim about the House",
      "Quran 2:127: 'And [mention, O Muhammad], when Ibrahim was raising the foundations of the House and [with him] Ismail, [saying], Our Lord, accept [this] from us'",
      "Sahih Bukhari 3364: The story of Ibrahim and Ismail building the Kaaba",
      "Quran 3:96: 'Indeed, the first House [of worship] established for mankind was that at Makkah - blessed and a guidance for the worlds'",
      "Quran 2:125: 'And [mention, O Muhammad], when We made the House a place of return for the people and [a place of] security. And take, [O believers], from the standing place of Ibrahim a place of prayer'",
    ],
  },
  tawaf_umrah: {
    name: "Tawaf - Circumambulation",
    arabicName: "طواف العمرة",
    description: "Seven circuits around the Kaaba, the most sacred act of Umrah",
    timing: "Upon entering Masjid al-Haram",
    duration: "Approximately 30-60 minutes depending on crowds",
    significance:
      "Tawaf represents the unity of believers in worshipping Allah, as they move in harmony around His House.",
    rituals: [
      { text: "Performing seven complete circuits around the Kaaba", type: "obligatory" },
      { text: "Starting and ending each circuit at the Black Stone", type: "obligatory" },
      { text: "Keeping the Kaaba on your left throughout", type: "obligatory" },
      { text: "Touching or kissing the Black Stone if possible", type: "sunnah" },
      { text: "Reciting specific duas during Tawaf", type: "sunnah" },
      { text: "Walking normally (not running) during Tawaf", type: "obligatory" },
      { text: "Praying two Rakats behind Maqam Ibrahim after Tawaf", type: "sunnah" },
    ],
    tips: [
      "If you cannot touch the Black Stone due to crowds, simply point to it and say 'Allahu Akbar'",
      "Stay hydrated and take breaks if needed, especially during hot weather",
      "Be patient and courteous with other pilgrims",
      "Wear comfortable shoes as you'll be walking on marble floors",
      "Keep your belongings secure in a small bag",
      "If you lose count of circuits, assume the lesser number and continue",
    ],
    historicalContext:
      "The practice of Tawaf dates back to Prophet Ibrahim (AS) and was continued by his descendants. Even during the pre-Islamic period, Arabs would perform Tawaf, though they had corrupted its pure monotheistic meaning. Prophet Muhammad (PBUH) purified and restored this practice to its original form.",
    rationale:
      "Tawaf symbolizes the believer's life revolving around the worship of Allah. The counterclockwise movement mirrors the motion of celestial bodies, representing harmony with the cosmic order created by Allah.",
    rukn: [
      "Performing exactly seven circuits",
      "Starting each circuit from the Black Stone line",
      "Keeping the Kaaba on the left side",
      "Being in a state of ritual purity (Wudu)",
      "Covering the Awrah (parts of the body that must be covered)",
    ],
    nullifiers: [
      "Breaking Wudu during Tawaf (must renew and continue from where you stopped)",
      "Performing fewer than seven circuits",
      "Going inside the Hijr Ismail area during Tawaf",
      "Turning the wrong direction around the Kaaba",
    ],
    compensation: [
      "For incomplete Tawaf: Complete the remaining circuits",
      "For breaking Wudu: Renew Wudu and continue from where you stopped",
      "For going inside Hijr Ismail: That circuit doesn't count, must repeat it",
    ],
    duas: [
      {
        text: "بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ",
        translation: "In the name of Allah, and Allah is the Greatest",
        source: "Said when starting each circuit at the Black Stone",
      },
      {
        text: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
        translation:
          "Our Lord, give us good in this world and good in the Hereafter, and save us from the punishment of the Fire.",
        source: "Quran 2:201 - Recited between the Yemeni Corner and Black Stone",
      },
    ],
    authenticSources: [
      "Sahih Bukhari 1644: The Prophet's (PBUH) method of performing Tawaf",
      "Sahih Muslim 1211: Description of the Prophet's Tawaf during Umrah",
      "Quran 22:29: 'Then let them complete the prescribed duties for them, and perform their vows, and circumambulate the Ancient House'",
      "Sahih Bukhari 1755: 'The circumambulation around the House is like prayer, except that you are allowed to speak during it'",
    ],
  },
  sai: {
    name: "Sa'i - Walking between Safa and Marwa",
    arabicName: "السعي بين الصفا والمروة",
    description: "Seven trips between the hills of Safa and Marwa, commemorating Hajar's search for water",
    timing: "After completing Tawaf",
    duration: "Approximately 30-45 minutes",
    significance:
      "Sa'i commemorates the struggle of Hajar (mother of Ismail) and demonstrates trust in Allah during times of hardship.",
    rituals: [
      { text: "Starting at Safa hill", type: "obligatory" },
      { text: "Walking seven trips between Safa and Marwa", type: "obligatory" },
      { text: "Ending at Marwa hill", type: "obligatory" },
      { text: "Men should run between the green lights (Raml)", type: "sunnah" },
      { text: "Reciting specific duas at Safa and Marwa", type: "sunnah" },
      { text: "Making dua while walking between the hills", type: "sunnah" },
    ],
    tips: [
      "One trip is from Safa to Marwa OR from Marwa to Safa",
      "Start at Safa and end at Marwa (7 trips total)",
      "Use the upper level if the ground floor is crowded",
      "Elderly and disabled can use wheelchairs",
      "Stay hydrated and rest if needed",
      "The green lights indicate where men should run (between the two sets of lights)",
    ],
    historicalContext:
      "When Prophet Ibrahim (AS) left Hajar and baby Ismail in the desert of Makkah by Allah's command, their water ran out. Hajar ran between the hills of Safa and Marwa seven times searching for water or help. Allah then caused the spring of Zamzam to flow near baby Ismail's feet.",
    rationale:
      "Sa'i teaches us about perseverance, trust in Allah, and the importance of taking action while relying on Allah. Hajar's example shows that we must make effort while having complete faith that Allah will provide.",
    rukn: [
      "Walking seven trips between Safa and Marwa",
      "Starting from Safa",
      "Ending at Marwa",
      "Covering the entire distance between the two hills",
    ],
    nullifiers: [
      "Not completing all seven trips",
      "Starting from Marwa instead of Safa",
      "Not walking the complete distance between the hills",
    ],
    compensation: [
      "For incomplete Sa'i: Complete the remaining trips",
      "For starting from wrong hill: Start over from Safa",
    ],
    duas: [
      {
        text: "إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ اللَّهِ فَمَنْ حَجَّ الْبَيْتَ أَوِ اعْتَمَرَ فَلَا جُنَاحَ عَلَيْهِ أَنْ يَطَّوَّفَ بِهِمَا وَمَنْ تَطَوَّعَ خَيْرًا فَإِنَّ اللَّهَ شَاكِرٌ عَلِيمٌ",
        translation:
          "Indeed, Safa and Marwa are among the symbols of Allah. So whoever makes Hajj to the House or performs Umrah - there is no blame upon him for walking between them. And whoever volunteers good - then indeed, Allah is appreciative and Knowing.",
        source: "Quran 2:158 - Recited when starting Sa'i at Safa",
      },
      {
        text: "رَبِّ اغْفِرْ وَارْحَمْ وَأَنْتَ الْأَعَزُّ الْأَكْرَمُ",
        translation: "My Lord, forgive and have mercy, and You are the Most Mighty, the Most Generous.",
        source: "Commonly recited during Sa'i",
      },
    ],
    authenticSources: [
      "Quran 2:158: The verse about Safa and Marwa being symbols of Allah",
      "Sahih Bukhari 1643: The Prophet (PBUH) performed Sa'i during his Umrah",
      "Sahih Muslim 1277: Description of the Prophet's Sa'i",
      "Sahih Bukhari 3364: The story of Hajar and the origin of Sa'i",
    ],
  },
  zamzam: {
    name: "Zamzam Water",
    arabicName: "ماء زمزم",
    description: "The blessed water that springs near the Kaaba, a gift from Allah to Hajar and Ismail",
    significance:
      "Zamzam water is considered blessed and has been flowing for over 4000 years since the time of Prophet Ismail (AS).",
    rituals: [
      { text: "Drinking Zamzam water after Tawaf and Sa'i", type: "sunnah" },
      { text: "Making dua while drinking", type: "sunnah" },
      { text: "Drinking while standing and facing the Qibla", type: "sunnah" },
      { text: "Drinking in three breaths", type: "sunnah" },
      { text: "Pouring some on the head and body", type: "sunnah" },
    ],
    tips: [
      "Zamzam is available throughout the Haram in coolers and fountains",
      "You can take Zamzam water home in special containers",
      "Make specific duas for yourself and your family while drinking",
      "The water is safe to drink and has unique mineral properties",
      "Don't waste the water - it's considered blessed",
    ],
    historicalContext:
      "When baby Ismail was crying from thirst in the desert, the angel Jibril (Gabriel) struck the ground with his wing, and the spring of Zamzam began to flow. Hajar contained the water by saying 'Zam Zam' (stop, stop), giving the well its name.",
    rationale:
      "Drinking Zamzam water connects us to the miracle that saved Ismail and Hajar, reminding us of Allah's mercy and provision. The Prophet (PBUH) said that Zamzam water is for whatever purpose it is drunk.",
    duas: [
      {
        text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا وَاسِعًا وَشِفَاءً مِنْ كُلِّ دَاءٍ",
        translation: "O Allah, I ask You for beneficial knowledge, abundant provision, and healing from every disease.",
        source: "Common dua when drinking Zamzam",
      },
    ],
    authenticSources: [
      "Sahih Bukhari 3364: The story of Zamzam's origin",
      "Sunan Ibn Majah 3062: 'Zamzam water is for whatever purpose it is drunk'",
      "Sahih Muslim 2473: The Prophet (PBUH) drank Zamzam water",
      "Musnad Ahmad 7435: The blessed nature of Zamzam water",
    ],
  },
  maqam_ibrahim: {
    name: "Maqam Ibrahim",
    arabicName: "مقام إبراهيم",
    description: "The stone bearing the footprint of Prophet Ibrahim, where pilgrims pray after Tawaf",
    significance:
      "This stone contains the miraculous footprint of Prophet Ibrahim (AS) from when he was building the Kaaba.",
    rituals: [
      { text: "Praying two Rakats behind Maqam Ibrahim after Tawaf", type: "sunnah" },
      { text: "Reciting specific surahs during the prayer", type: "sunnah" },
      { text: "Making dua after the prayer", type: "sunnah" },
    ],
    tips: [
      "If the area behind Maqam Ibrahim is crowded, you can pray anywhere in the Haram",
      "The two Rakats are Sunnah but highly recommended",
      "Recite Surah Al-Kafirun in the first Rakat and Surah Al-Ikhlas in the second",
      "Be mindful of other pilgrims performing Tawaf nearby",
    ],
    historicalContext:
      "When Prophet Ibrahim (AS) was building the Kaaba with his son Ismail (AS), he stood on this stone to reach the higher parts of the structure. Allah miraculously preserved his footprint in the stone as a sign for future generations.",
    rationale:
      "Praying at Maqam Ibrahim connects us directly to Prophet Ibrahim's legacy and his role in establishing the pilgrimage. It's a place where duas are especially likely to be accepted.",
    rukn: [
      "The prayer itself is Sunnah, not obligatory",
      "Should be performed after completing Tawaf",
      "Two Rakats are sufficient",
    ],
    duas: [
      {
        text: "وَاتَّخِذُوا مِنْ مَقَامِ إِبْرَاهِيمَ مُصَلًّى",
        translation: "And take, [O believers], from the standing place of Ibrahim a place of prayer.",
        source: "Quran 2:125",
      },
    ],
    authenticSources: [
      "Quran 2:125: The command to take Maqam Ibrahim as a place of prayer",
      "Sahih Bukhari 393: The Prophet (PBUH) prayed behind Maqam Ibrahim",
      "Sahih Muslim 1218: Description of prayer at Maqam Ibrahim after Tawaf",
    ],
  },
  hair_cutting: {
    name: "Hair Cutting/Trimming",
    arabicName: "الحلق أو التقصير",
    description: "Cutting or trimming hair to complete Umrah and exit Ihram",
    timing: "After completing Sa'i",
    significance: "This act symbolizes spiritual rebirth and the completion of Umrah rituals.",
    rituals: [
      { text: "Men: Shaving the entire head (preferred) or trimming hair equally", type: "obligatory" },
      { text: "Women: Trimming a fingertip length of hair", type: "obligatory" },
      { text: "Using clean, sharp instruments", type: "obligatory" },
    ],
    tips: [
      "Men get more reward for shaving completely rather than just trimming",
      "Women should only trim, not shave their hair",
      "Use the barber shops available in the Haram area",
      "Keep some hair as a memento if desired",
      "After this, all Ihram restrictions are lifted",
    ],
    historicalContext:
      "This practice was established by Prophet Muhammad (PBUH) who shaved his head after completing his Umrah, and prayed for those who shaved their heads.",
    rationale:
      "Hair cutting represents humility, renewal, and the completion of the spiritual journey. It symbolizes leaving behind the old self and emerging spiritually cleansed.",
    rukn: [
      "Cutting or trimming hair from the head",
      "For men: either complete shaving or trimming from all parts of the head",
      "For women: trimming approximately a fingertip length",
    ],
    nullifiers: [
      "Not cutting any hair at all",
      "For men: trimming only from some parts of the head",
      "For women: shaving the head completely",
    ],
    compensation: [
      "For not cutting hair: Umrah is not complete until this is done",
      "Must be corrected to complete the Umrah properly",
    ],
    duas: [
      {
        text: "اللَّهُمَّ اغْفِرْ لِلْمُحَلِّقِينَ",
        translation: "O Allah, forgive those who shave their heads.",
        source: "Sahih Muslim 1302 - The Prophet's prayer for those who shave",
      },
    ],
    authenticSources: [
      "Sahih Bukhari 1727: The Prophet (PBUH) shaved his head after Umrah",
      "Sahih Muslim 1302: The Prophet prayed three times for those who shaved",
      "Sunan Abu Dawud 1979: Instructions for women's hair trimming",
    ],
  },
}
