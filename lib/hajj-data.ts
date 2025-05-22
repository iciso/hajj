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
  compensation?: string[]
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
      "Ihram represents equality before Allah, removing worldly distinctions and entering a state of purity and devotion. Apart from universal brotherhood, Ihram, symbolizes the pilgrim's intention to dedicate themselves solely to worship and leave behind worldly concerns. Accordingly, ihram brings to the fore that before Allah, their Creator, all mankind are equal except in piety or God-conciousness.",
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
    compensation: [
      "For wearing sewn clothes: Sacrifice an animal (fidyah) or feed six poor people or fast for three days",
      "For using perfume: Same as above (fidyah)",
      "For cutting hair/nails unintentionally: Feed a poor person for each violation",
      "For covering head/face: Same as for wearing sewn clothes",
      "For major violations: The ritual may need to be repeated in the following year",
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
    compensation: [
      "For not staying in Mina: No compensation required as this is a Sunnah, not an obligatory act",
      "For breaking Ihram rules: Same compensation as for violations during initial Ihram",
      "For not making proper intention: Make the intention as soon as remembered, if not done before Arafat then consult a scholar",
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
    rationale:
      "Standing at Arafat represents the ultimate submission to Allah and symbolizes the Day of Judgment when all of humanity will stand before their Creator. It is a time for seeking forgiveness, making supplications, and reflecting on one's life. The Prophet Muhammad (PBUH) emphasized its importance by stating, 'Hajj is Arafat,' indicating that this standing is the most essential pillar of Hajj.",
    rukn: [
      "Being physically present within the boundaries of Arafat at any time between noon on the 9th of Dhul-Hijjah and dawn on the 10th",
      "Having the intention (niyyah) to perform Wuquf at Arafat as part of Hajj",
      "Being in a state of Ihram while at Arafat",
    ],
    nullifiers: [
      "Leaving Arafat before sunset without a valid excuse",
      "Not being present at Arafat at all during the specified time",
      "Being unconscious or unaware during the entire time at Arafat",
      "Breaking the state of Ihram while at Arafat",
    ],
    compensation: [
      "For missing Wuquf at Arafat entirely: The Hajj is invalid and must be repeated the following year, along with offering a sacrifice",
      "For leaving Arafat before sunset without excuse: A sacrifice (dam) must be offered, though the Hajj remains valid",
      "For arriving at Arafat after sunset but before Fajr of 10th Dhul-Hijjah: The Hajj is valid but a sacrifice (dam) is required",
      "For breaking Ihram rules while at Arafat: Same compensation as for violations during initial Ihram",
    ],
    duas: [
      {
        text: "لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        translation:
          "There is no deity but Allah alone, Who has no partner. His is the dominion and His is the praise, and He is able to do all things.",
        source: "Reported by Tirmidhi, who said it was the best supplication for the Day of Arafat",
      },
      {
        text: "اللَّهُمَّ اغْفِرْ لِي ذَنْبِي، وَوَسِّعْ لِي فِي دَارِي، وَبَارِكْ لِي فِي رِزْقِي",
        translation: "O Allah, forgive my sins, make my home spacious, and bless my provision.",
        source: "Collected by Tabarani",
      },
      {
        text: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
        translation:
          "Our Lord, give us good in this world and good in the Hereafter, and save us from the punishment of the Fire.",
        source: "Quran 2:201 - Frequently recited by the Prophet (PBUH) during Hajj",
      },
    ],
    authenticSources: [
      "Sahih Muslim 1218: The Prophet (PBUH) said, 'Hajj is Arafat'",
      "Sahih Bukhari 1660: Description of the Prophet's (PBUH) standing at Arafat during his Farewell Hajj",
      "Sunan Abu Dawud 1919: The Prophet (PBUH) combined Dhuhr and Asr prayers at Arafat",
      "Quran 2:198: 'Then when you depart from Arafat, remember Allah at the Sacred Monument (Muzdalifah)'",
      "Sahih Muslim 1377: The Prophet (PBUH) said, 'The best supplication is the supplication on the day of Arafat'",
    ],
  },
  muzdalifah: {
    name: "Muzdalifah - Overnight Stay",
    arabicName: "مزدلفة - المبيت",
    description: "An open area between Mina and Arafat",
    timing: "Evening of 9th Dhul-Hijjah until dawn of 10th Dhul-Hijjah",
    duration: "One night",
    significance: "A place of rest and preparation between the standing at Arafat and the rituals of the 10th day.",
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
    rationale:
      "Staying at Muzdalifah serves as a transitional period between the spiritual intensity of Arafat and the physical rituals that follow. It represents the journey of life, where periods of spiritual elevation are followed by practical implementation. The collection of pebbles symbolizes preparation for confronting evil, represented by the stoning of the pillars at Jamarat.",
    rukn: [
      "Being present at Muzdalifah for at least a portion of the night between sunset on the 9th and dawn on the 10th of Dhul-Hijjah",
      "Combining and shortening Maghrib and Isha prayers (according to most scholars)",
      "Remaining in the state of Ihram",
    ],
    nullifiers: [
      "Not stopping at Muzdalifah at all (though exceptions exist for the weak, elderly, women, and their caregivers)",
      "Breaking the rules of Ihram",
      "Leaving Muzdalifah before midnight without a valid excuse (according to some scholars)",
    ],
    compensation: [
      "For missing Muzdalifah entirely without excuse: A sacrifice (dam) is required",
      "For the weak, elderly, women, and their caregivers who leave early: No compensation is required",
      "For leaving after midnight but before Fajr: No compensation according to most scholars",
      "For breaking Ihram rules: Same compensation as for violations during initial Ihram",
    ],
    duas: [
      {
        text: "اللَّهُمَّ كَمَا أَوْقَفْتَنَا فِيهِ وَأَرَيْتَنَا إِيَّاهُ فَوَفِّقْنَا لِذِكْرِكَ كَمَا هَدَيْتَنَا",
        translation:
          "O Allah, as You have made us stand here and shown us this place, so enable us to remember You as You have guided us.",
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
      "Quran 2:198: 'Then when you depart from Arafat, remember Allah at the Sacred Monument (Muzdalifah)'",
      "Sahih Bukhari 1673: The Prophet (PBUH) combined Maghrib and Isha prayers at Muzdalifah",
      "Sahih Muslim 1218: Description of the Prophet's (PBUH) stay at Muzdalifah",
      "Sunan Abu Dawud 1938: The Prophet (PBUH) allowed the weak to leave Muzdalifah early",
      "Sahih Bukhari 1676: The Prophet (PBUH) sent his family members ahead from Muzdalifah before dawn",
    ],
  },
  jamarat_first: {
    name: "Jamarat - First Stoning",
    arabicName: "الجمرات - الرمي الأول",
    description: "Three stone pillars representing Satan",
    timing: "Morning of 10th Dhul-Hijjah",
    duration: "Brief ritual, typically performed before noon",
    significance:
      "Symbolizes the rejection of evil and temptation, following the example of Prophet Ibrahim (Abraham).",
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
    rationale:
      "The stoning of Jamarat symbolizes the rejection of evil and temptation in one's life. It represents the pilgrim's commitment to resist the whispers of Satan and to follow the path of righteousness. The ritual also commemorates Prophet Ibrahim's steadfastness when Satan tried to dissuade him from obeying Allah's command to sacrifice his son.",
    rukn: [
      "Stoning Jamarat al-Aqabah (the large pillar) with seven pebbles on the 10th of Dhul-Hijjah",
      "Being in the state of Ihram while performing the ritual",
      "Using proper pebbles (small stones) collected from Muzdalifah or Mina",
      "Throwing the pebbles one by one",
    ],
    nullifiers: [
      "Not performing the stoning at all",
      "Using improper objects instead of pebbles",
      "Throwing all seven pebbles at once",
      "Throwing fewer than seven pebbles",
      "Not hitting the pillar or its base with the pebbles",
    ],
    compensation: [
      "For missing the stoning entirely: A sacrifice (dam) is required",
      "For throwing fewer than seven pebbles: One poor person must be fed for each missing pebble",
      "For throwing after sunset of the 10th: A sacrifice (dam) is required according to some scholars",
      "For the elderly or sick who cannot perform the ritual: They can appoint someone to stone on their behalf",
    ],
    duas: [
      {
        text: "اللَّهُ أَكْبَرُ، اللَّهُمَّ اجْعَلْهُ حَجًّا مَبْرُورًا وَذَنْبًا مَغْفُورًا",
        translation: "Allah is the Greatest. O Allah, make this an accepted Hajj and forgive my sins.",
        source: "Based on the practice of the Prophet (PBUH)",
      },
      {
        text: "اللَّهُمَّ إِيمَانًا بِكَ وَتَصْدِيقًا بِكِتَابِكَ وَاتِّبَاعًا لِسُنَّةِ نَبِيِّكَ مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ",
        translation:
          "O Allah, (I do this) believing in You, affirming the truth of Your Book, and following the Sunnah of Your Prophet Muhammad (peace be upon him).",
        source: "Narrated in various collections of Hajj rituals",
      },
    ],
    authenticSources: [
      "Sahih Bukhari 1750: The Prophet (PBUH) stoned Jamarat al-Aqabah on the Day of Sacrifice (10th Dhul-Hijjah)",
      "Sahih Muslim 1296: The Prophet (PBUH) said, 'Take from me your rituals of Hajj'",
      "Sunan Abu Dawud 1970: Description of the Prophet's (PBUH) stoning of Jamarat",
      "Sahih Bukhari 1753: The Prophet (PBUH) said, 'The stoning of the Jamarat and Sa'i between Safa and Marwa have been established for the remembrance of Allah'",
      "Sahih Muslim 1305: The Prophet (PBUH) permitted the weak to stone after leaving Muzdalifah early",
    ],
  },
  sacrifice: {
    name: "Sacrifice",
    arabicName: "الذبح",
    description: "Sacrificing an animal in remembrance of Prophet Ibrahim's willingness to sacrifice his son",
    timing: "10th of Dhul-Hijjah (after first stoning)",
    duration: "Can be performed anytime during the 10th, 11th, 12th, or 13th of Dhul-Hijjah",
    significance: "Commemorates Prophet Ibrahim's willingness to sacrifice his son in obedience to Allah's command.",
    rituals: [
      "Sacrificing an animal (sheep, goat, cow, or camel)",
      "Distributing the meat to the poor and needy",
      "Can be done by proxy through authorized agencies",
    ],
    tips: [
      "Most pilgrims now use vouchers to have the sacrifice performed on their behalf",
      "Ensure your sacrifice is done through an authorized agency",
      "Keep the receipt as proof of sacrifice",
      "The meat should be divided into three parts: one for the poor, one for relatives and friends, and one for your family",
    ],
    historicalContext:
      "This ritual commemorates Allah's mercy in replacing Prophet Ibrahim's son with a ram for sacrifice, after Ibrahim demonstrated his willingness to obey Allah's command.",
    rationale:
      "The sacrifice symbolizes the willingness to give up what is dear to us for the sake of Allah. It represents the ultimate submission to Allah's will, following the example of Prophet Ibrahim who was willing to sacrifice his beloved son Ismail when commanded by Allah. The ritual also emphasizes the importance of charity and sharing with those less fortunate.",
    rukn: [
      "Sacrificing an animal that meets the criteria (age, health, species)",
      "Performing the sacrifice after the stoning of Jamarat al-Aqabah",
      "Having the intention (niyyah) that the sacrifice is for Hajj",
      "Ensuring the sacrifice is performed within the days of Eid (10th-13th of Dhul-Hijjah)",
    ],
    nullifiers: [
      "Not performing the sacrifice at all",
      "Sacrificing an animal that does not meet the criteria (too young, unhealthy, wrong species)",
      "Performing the sacrifice before the stoning of Jamarat al-Aqabah",
      "Not distributing the meat as prescribed",
    ],
    compensation: [
      "For not performing the sacrifice: It is a wajib (obligatory) act in Tamattu and Qiran Hajj, so a sacrifice must be made",
      "If unable to afford a sacrifice: Fast for ten days (three during Hajj and seven after returning home)",
      "For performing the sacrifice before stoning: The sacrifice should be repeated if possible",
      "For sacrificing an unsuitable animal: The sacrifice must be repeated with a suitable animal",
    ],
    duas: [
      {
        text: "بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ، اللَّهُمَّ إِنَّ هَذَا مِنْكَ وَلَكَ، اللَّهُمَّ تَقَبَّلْ مِنِّي",
        translation:
          "In the name of Allah, and Allah is the Greatest. O Allah, this is from You and for You. O Allah, accept it from me.",
        source: "Sahih Muslim 1967",
      },
      {
        text: "اللَّهُمَّ هَذَا عَنِّي وَعَنْ أُمَّتِي",
        translation: "O Allah, this is on behalf of me and my Ummah (nation).",
        source: "Based on the practice of the Prophet (PBUH) during sacrifice",
      },
    ],
    authenticSources: [
      "Quran 22:36-37: 'And the camels and cattle We have appointed for you as among the symbols of Allah... It is not their meat nor their blood that reaches Allah, but it is piety from you that reaches Him'",
      "Sahih Bukhari 1719: The Prophet (PBUH) sacrificed two horned rams on the Day of Sacrifice",
      "Sahih Muslim 1317: Description of the Prophet's (PBUH) sacrifice during Hajj",
      "Sunan Abu Dawud 2810: The Prophet (PBUH) said, 'Whoever has the means but does not sacrifice, let him not approach our prayer place'",
      "Quran 2:196: 'And complete the Hajj and Umrah for Allah. But if you are prevented, then [offer] what can be obtained with ease of sacrificial animals'",
    ],
  },
  shaving: {
    name: "Shaving or Trimming Hair",
    arabicName: "الحلق أو التقصير",
    description: "Shaving or trimming hair after sacrifice",
    timing: "10th of Dhul-Hijjah (after sacrifice)",
    duration: "Brief ritual, performed once during Hajj",
    significance: "Marks the partial completion of Hajj and the end of most Ihram restrictions.",
    rituals: [
      "Men: Completely shaving the head (preferred) or trimming hair equally from all parts of the head",
      "Women: Trimming a fingertip length of hair",
    ],
    tips: [
      "Men should consider shaving completely as it carries more reward",
      "Women should only trim their hair, not shave it",
      "Use clean, hygienic tools to avoid infections",
      "After this ritual, most Ihram restrictions are lifted except for marital relations",
    ],
    historicalContext:
      "This ritual symbolizes humility and detachment from physical appearances, focusing instead on spiritual purification.",
    rationale:
      "Shaving or trimming the hair symbolizes humility, cleanliness, and the completion of a major portion of the Hajj rituals. It represents the pilgrim's willingness to submit to Allah's commands and to shed worldly attachments. The Prophet Muhammad (PBUH) gave special blessings to those who shave their heads completely, indicating the virtue of complete submission rather than partial adherence.",
    rukn: [
      "Removing hair from the head (shaving or trimming)",
      "Performing this ritual after the sacrifice (though the order can be changed if necessary)",
      "For men: Either shaving the entire head or trimming hair from all parts of the head equally",
      "For women: Trimming approximately a fingertip length of hair",
    ],
    nullifiers: [
      "Not removing any hair at all",
      "For men who choose to trim: Not trimming from all parts of the head",
      "For women: Shaving the head completely (which is prohibited)",
      "Performing this ritual before stoning Jamarat al-Aqabah without a valid reason",
    ],
    compensation: [
      "For not performing this ritual at all: A sacrifice (dam) is required",
      "For performing it before stoning without a valid reason: A sacrifice (dam) is required according to some scholars",
      "For women who shave their heads: Seeking repentance and possibly a sacrifice (dam)",
      "For improper trimming: Correction of the ritual if possible, otherwise a sacrifice (dam) may be required",
    ],
    duas: [
      {
        text: "اللَّهُمَّ اغْفِرْ لِلْمُحَلِّقِينَ",
        translation: "O Allah, forgive those who shave their heads.",
        source: "Sahih Muslim 1302 - The Prophet (PBUH) said this three times",
      },
      {
        text: "اللَّهُمَّ اغْفِرْ لِلْمُقَصِّرِينَ",
        translation: "O Allah, forgive those who trim their hair.",
        source: "Sahih Muslim 1302 - The Prophet (PBUH) said this once after being asked about those who trim",
      },
    ],
    authenticSources: [
      "Sahih Bukhari 1727: The Prophet (PBUH) shaved his head during his Hajj",
      "Sahih Muslim 1302: The Prophet (PBUH) prayed three times for those who shaved their heads and once for those who trimmed",
      "Sahih Bukhari 1728: The Prophet (PBUH) said, 'May Allah have mercy on those who shave their heads'",
      "Sunan Abu Dawud 1979: Description of how women should trim their hair during Hajj",
      "Quran 48:27: 'You will surely enter the Sacred Mosque, if Allah wills, in safety, with heads shaved and [hair] shortened, not fearing [anyone]'",
    ],
  },
  tawaf_ifadah: {
    name: "Tawaf Al-Ifadah",
    arabicName: "طواف الإفاضة",
    description: "The obligatory circumambulation of the Kaaba after Arafat",
    timing: "10th of Dhul-Hijjah (after shaving/trimming)",
    duration: "Approximately one hour, but can take longer during crowded periods",
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
      "If possible, try to touch or kiss the Black Stone (Hajar al-Aswad), but if crowded, simply point to it and say 'Allahu Akbar'",
      "Women experiencing menstruation should delay this Tawaf until they are pure, as it cannot be omitted",
    ],
    historicalContext:
      "Tawaf Al-Ifadah is also known as Tawaf Az-Ziyarah (the visit) because pilgrims 'visit' the Kaaba after standing at Arafat. It is one of the most ancient rituals of Hajj, dating back to Prophet Ibrahim's time.",
    rationale:
      "Tawaf Al-Ifadah represents the pilgrim's return to the House of Allah after the spiritual journey at Arafat and Muzdalifah. It symbolizes the centrality of Allah in the believer's life, as all movements revolve around His House. The seven circuits represent the completeness of devotion, while the counterclockwise direction aligns with the cosmic order of the universe. This Tawaf marks the transition from the state of Ihram to normal life, though some restrictions remain until all rituals are completed.",
    rukn: [
      "Performing seven complete circuits around the Kaaba",
      "Starting each circuit from the Black Stone (or its alignment)",
      "Having the Kaaba on one's left throughout the Tawaf",
      "Being in a state of ritual purity (wudu)",
      "Covering the awrah (parts of the body that must be covered in Islam)",
      "Performing the Tawaf within the boundaries of the Masjid al-Haram",
    ],
    nullifiers: [
      "Breaking wudu during Tawaf (must restart from where wudu was broken after performing ablution)",
      "Skipping any part of a circuit or performing fewer than seven circuits",
      "Performing Tawaf while in a state of major impurity (janabah) or menstruation",
      "Walking inside the Hijr Ismail area (the semi-circular wall near the Kaaba) during Tawaf",
      "Not completing all seven circuits",
    ],
    compensation: [
      "For not performing Tawaf Al-Ifadah at all: The Hajj is invalid and must be repeated",
      "For performing fewer than seven circuits: The missing circuits must be completed",
      "For performing Tawaf without wudu: The Tawaf must be repeated",
      "For women who cannot perform Tawaf due to menstruation: They must wait until they are pure, as this Tawaf cannot be compensated for",
    ],
    duas: [
      {
        text: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
        translation:
          "Our Lord, give us good in this world and good in the Hereafter, and save us from the punishment of the Fire.",
        source: "Quran 2:201 - Recited between the Yemeni Corner and the Black Stone",
      },
      {
        text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ",
        translation: "O Allah, I ask You for forgiveness and well-being in this world and the Hereafter.",
        source: "Based on the practice of the Prophet (PBUH)",
      },
      {
        text: "سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
        translation:
          "Glory be to Allah, and praise be to Allah, and there is no deity except Allah, and Allah is the Greatest, and there is no power and no strength except with Allah.",
        source: "Commonly recited during Tawaf",
      },
    ],
    authenticSources: [
      "Quran 22:29: 'Then let them complete the prescribed duties for them, and perform their vows, and circumambulate the Ancient House'",
      "Sahih Bukhari 1644: The Prophet (PBUH) performed Tawaf Al-Ifadah on the Day of Sacrifice",
      "Sahih Muslim 1211: Description of the Prophet's (PBUH) Tawaf during Hajj",
      "Sahih Bukhari 1755: The Prophet (PBUH) said, 'The circumambulation around the House is like prayer, except that you are allowed to speak during it'",
      "Sahih Muslim 1218: The Prophet (PBUH) said, 'Take from me your rituals of Hajj'",
    ],
  },
  mina_tashreeq: {
    name: "Mina - Days of Tashreeq",
    arabicName: "منى - أيام التشريق",
    description: "Staying in Mina for the final days of Hajj",
    timing: "11th, 12th, and optionally 13th of Dhul-Hijjah",
    duration: "Two or three days",
    significance: "These days complete the Hajj rituals and commemorate the final days of Prophet Ibrahim's trial.",
    rituals: [
      "Staying in Mina",
      "Stoning all three Jamarat pillars each day after Dhuhr prayer",
      "Performing daily prayers",
      "Remembering Allah (dhikr) and making supplications",
    ],
    tips: [
      "Stone the pillars in order: small, medium, then large",
      "Those in a hurry can leave after stoning on the 12th before sunset (Nafr Awwal)",
      "Those staying for the 13th must stone all pillars again on that day (Nafr Thani)",
      "Conserve energy as these days involve multiple trips to the Jamarat",
      "Stay hydrated and protect yourself from the sun",
      "Use the time in Mina for reflection, reading Quran, and making dua",
    ],
    historicalContext:
      "These days are called Tashreeq because in pre-Islamic times, the Arabs would dry strips of sacrificial meat in the sun during these days. The word 'Tashreeq' comes from 'sharq' meaning 'east' or 'sunrise', as the meat was dried in the eastern sun.",
    rationale:
      "The Days of Tashreeq represent the culmination of the Hajj journey. They provide time for reflection on the spiritual experiences of Hajj and for gradually transitioning back to normal life. Staying in Mina during these days allows pilgrims to continue their spiritual focus away from worldly distractions. The repeated stoning of all three pillars symbolizes the ongoing struggle against evil and temptation in one's life, emphasizing that resisting Satan is not a one-time event but a continuous process.",
    rukn: [
      "Staying in Mina during the nights of the 11th and 12th (and 13th for those who choose to stay)",
      "Stoning all three Jamarat pillars on each day after Dhuhr prayer",
      "Maintaining the remaining restrictions of Ihram until completion of all rituals",
      "For those choosing early departure (Nafr Awwal): Leaving Mina before sunset on the 12th",
    ],
    nullifiers: [
      "Not stoning the Jamarat pillars on any of the required days",
      "Leaving Mina before stoning on the 12th",
      "For those who stay past sunset on the 12th: Not completing the stoning on the 13th",
      "Stoning before Dhuhr prayer without a valid excuse",
    ],
    compensation: [
      "For missing the stoning of any pillar: A sacrifice (dam) is required for each day missed",
      "For throwing fewer than seven pebbles at any pillar: One poor person must be fed for each missing pebble",
      "For leaving Mina without stoning on the 12th: A sacrifice (dam) is required",
      "For the elderly or sick who cannot perform the ritual: They can appoint someone to stone on their behalf",
    ],
    duas: [
      {
        text: "اللَّهُ أَكْبَرُ، اللَّهُمَّ اجْعَلْهُ حَجًّا مَبْرُورًا وَذَنْبًا مَغْفُورًا",
        translation: "Allah is the Greatest. O Allah, make this an accepted Hajj and forgive my sins.",
        source: "Based on the practice of the Prophet (PBUH)",
      },
      {
        text: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
        translation:
          "Our Lord, give us good in this world and good in the Hereafter, and save us from the punishment of the Fire.",
        source: "Quran 2:201 - A dua frequently recited by the Prophet (PBUH) during Hajj",
      },
      {
        text: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الشَّيْطَانِ الرَّجِيمِ وَمِنْ شَرِّ كُلِّ سُوءٍ",
        translation: "O Allah, I seek refuge in You from Satan the accursed and from every evil.",
        source: "Based on various authentic supplications",
      },
    ],
    authenticSources: [
      "Quran 2:203: 'And remember Allah during the appointed days. But whoever hastens to leave in two days, there is no sin upon him; and whoever delays, there is no sin upon him - for him who fears Allah'",
      "Sahih Bukhari 1751: The Prophet (PBUH) stoned the Jamarat after the sun had passed its zenith",
      "Sahih Muslim 1306: Description of the Prophet's (PBUH) stoning during the Days of Tashreeq",
      "Sunan Abu Dawud 1973: The Prophet (PBUH) permitted shepherds to stone one day and leave the next",
      "Sahih Bukhari 1742: The Prophet (PBUH) said, 'The days of Tashreeq are days of eating, drinking, and remembrance of Allah'",
    ],
  },
  jamarat_final: {
    name: "Jamarat - Final Stoning",
    arabicName: "الجمرات - الرمي الأخير",
    description: "Stoning all three pillars on the 11th, 12th, and optionally 13th days",
    timing: "11th, 12th, and optionally 13th of Dhul-Hijjah (after Dhuhr prayer)",
    duration: "Approximately 1-2 hours each day, depending on crowds",
    significance:
      "Represents the continued rejection of evil and temptation, and the commitment to follow the path of righteousness.",
    rituals: [
      "Stoning the small pillar (Jamarat al-Sughra) with seven pebbles",
      "Stoning the medium pillar (Jamarat al-Wusta) with seven pebbles",
      "Stoning the large pillar (Jamarat al-Aqabah) with seven pebbles",
      "Reciting takbir (Allahu Akbar) with each throw",
      "Making dua after stoning the small and medium pillars",
    ],
    tips: [
      "Start after Dhuhr prayer (midday) and before Maghrib (sunset)",
      "Stone in the correct order: small, medium, then large",
      "Make dua after stoning the small and medium pillars, but not after the large one",
      "Those leaving on the 12th (Nafr Awwal) must depart Mina before sunset",
      "Try to avoid peak times to reduce crowding",
      "Carry your pebbles in a small bag or container",
      "The elderly, sick, or weak can appoint someone to stone on their behalf",
    ],
    historicalContext:
      "The three pillars represent the three locations where Satan tried to tempt Prophet Ibrahim to disobey Allah's command to sacrifice his son. Each day of stoning reinforces the rejection of Satan and evil, symbolizing the ongoing spiritual struggle (jihad) against temptation.",
    rationale:
      "The final stoning ritual differs from the first day's stoning in that all three pillars are stoned, not just the large one. This represents a more comprehensive rejection of evil in all its forms. The repetition over multiple days emphasizes that the struggle against evil is continuous throughout life. Making dua after the first two pillars but not the third symbolizes that after completely rejecting Satan (at the third pillar), one should move forward rather than lingering in conversation with or about evil.",
    rukn: [
      "Stoning all three Jamarat pillars on each day (11th, 12th, and 13th if staying)",
      "Throwing seven pebbles at each pillar",
      "Stoning after Dhuhr prayer (midday)",
      "Stoning in the correct order: small, medium, then large",
      "Using proper pebbles (small stones) collected from Muzdalifah or Mina",
      "Throwing the pebbles one by one",
    ],
    nullifiers: [
      "Not performing the stoning on any required day",
      "Stoning before Dhuhr prayer without a valid excuse",
      "Stoning in the incorrect order",
      "Using improper objects instead of pebbles",
      "Throwing all seven pebbles at once",
      "Throwing fewer than seven pebbles at any pillar",
      "Not hitting the pillar or its base with the pebbles",
    ],
    compensation: [
      "For missing the stoning of any pillar: A sacrifice (dam) is required for each day missed",
      "For throwing fewer than seven pebbles at any pillar: One poor person must be fed for each missing pebble",
      "For stoning before Dhuhr without valid excuse: A sacrifice (dam) is required according to some scholars",
      "For stoning in the incorrect order: The stoning should be repeated in the correct order if possible",
      "For the elderly or sick who cannot perform the ritual: They can appoint someone to stone on their behalf",
    ],
    duas: [
      {
        text: "اللَّهُ أَكْبَرُ، اللَّهُمَّ اجْعَلْهُ حَجًّا مَبْرُورًا وَذَنْبًا مَغْفُورًا",
        translation: "Allah is the Greatest. O Allah, make this an accepted Hajj and forgive my sins.",
        source: "Based on the practice of the Prophet (PBUH)",
      },
      {
        text: "اللَّهُمَّ إِيمَانًا بِكَ وَتَصْدِيقًا بِكِتَابِكَ وَاتِّبَاعًا لِسُنَّةِ نَبِيِّكَ مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ",
        translation:
          "O Allah, (I do this) believing in You, affirming the truth of Your Book, and following the Sunnah of Your Prophet Muhammad (peace be upon him).",
        source: "Narrated in various collections of Hajj rituals",
      },
      {
        text: "اللَّهُمَّ اجْعَلْهُ حَجًّا مَبْرُورًا وَسَعْيًا مَشْكُورًا وَذَنْبًا مَغْفُورًا",
        translation: "O Allah, make this an accepted Hajj, an appreciated effort, and a forgiven sin.",
        source: "Based on authentic supplications during Hajj",
      },
    ],
    authenticSources: [
      "Quran 2:203: 'And remember Allah during the appointed days. But whoever hastens to leave in two days, there is no sin upon him; and whoever delays, there is no sin upon him - for him who fears Allah'",
      "Sahih Bukhari 1751: The Prophet (PBUH) stoned the Jamarat after the sun had passed its zenith",
      "Sahih Muslim 1306: Description of the Prophet's (PBUH) stoning during the Days of Tashreeq",
      "Sunan Abu Dawud 1975: The Prophet (PBUH) made dua after stoning the first and second Jamarat but not after the third",
      "Sahih Bukhari 1753: The Prophet (PBUH) said, 'The stoning of the Jamarat and Sa'i between Safa and Marwa have been established for the remembrance of Allah'",
    ],
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
