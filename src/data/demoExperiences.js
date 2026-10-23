/**
 * EVERWISH STUDIOS — DEMONSTRATION EXPERIENCES DATA
 * Separate customer/experience data from presentation logic.
 * These are fictional, illustrative demonstration experiences created to showcase
 * Everwish's 3 signature aesthetic directions.
 */

export const DEMO_EXPERIENCES = {
  romantic: {
    id: "romantic",
    theme: "romantic",
    recipientName: "Ananya",
    senderName: "Aarav",
    occasion: "24th Birthday Midnight Surprise",
    targetAudience: "Romantic Partners (Dating, Married, Long-Distance)",
    vibe: "Cinematic, intimate, candlelit, deeply emotional.",
    colors: {
      bg: "#100D14",
      surface: "#18131E",
      border: "rgba(216, 143, 154, 0.25)",
      primary: "#D88F9A",
      accent: "#E8B2BA",
      text: "#FFF0F2",
      gold: "#D9BD88",
    },
    audioTrack: {
      title: "Kasoor (Acoustic)",
      artist: "Prateek Kuhad",
      duration: "3:18",
      initialPlaying: false,
    },
    opening: {
      tag: "A Midnight Love Letter For You",
      headline: "Happy 24th Birthday, My Love.",
      subheadline:
        "Every song, midnight rain drive, and quiet cup of chai reminds me of how extraordinary you are. This little corner of the internet belongs only to you.",
      openingPrompt: "Tap to unseal your midnight letter",
    },
    personalLetter: {
      salutation: "Dearest Ananya,",
      bodyParagraphs: [
        "I still remember the first night we stayed up talking until 3:00 AM at the seaside café. We were both nervous, laughing at terrible jokes, and pretending we weren't falling head over heels.",
        "Over the last three years, you have taught me how to find wonder in the simplest ordinary moments — cooking burnt pasta together on rainy Tuesdays, getting lost in Old Goa, and holding my hand whenever life got noisy.",
        "Thank you for being my anchor, my confidante, and my favorite reason to smile. May this 24th year bring you as much boundless joy, warmth, and peace as you bring to everyone who loves you.",
      ],
      signoff: "Forever & always yours,",
      author: "Aarav",
      waxSealNumber: "Wax Seal #24",
    },
    photoCollection: [
      {
        id: "p1",
        caption: "Marine Drive, 11:45 PM",
        date: "Dec 14, 2021",
        story: "Two cups of cutting chai and four straight hours of conversation about our craziest dreams.",
        category: "Where It All Began",
      },
      {
        id: "p2",
        caption: "The Unplanned Goa Road Trip",
        date: "July 22, 2022",
        story: "We got drenched in a sudden July monsoon downpour and laughed till our ribs hurt.",
        category: "Monsoon Memories",
      },
      {
        id: "p3",
        caption: "Sunrise at Chapora Fort",
        date: "July 24, 2022",
        story: "Watching the sun rise over the Arabian Sea while sharing half an apple and complete silence.",
        category: "Golden Horizons",
      },
      {
        id: "p4",
        caption: "Our First Diwali Together",
        date: "Nov 12, 2023",
        story: "You spent three hours helping me light diyas on the terrace. The prettiest light in the room was you.",
        category: "Festivals of Light",
      },
      {
        id: "p5",
        caption: "Moving Into Our First Place",
        date: "Jan 18, 2024",
        story: "Sitting on unpacked cardboard boxes at midnight, eating spicy pizza with paper cups.",
        category: "Milestones",
      },
      {
        id: "p6",
        caption: "Sunday Morning in the Balcony",
        date: "Just Last Week",
        story: "Reading books, listening to acoustic vinyl, and realizing I never want to be anywhere else.",
        category: "Ordinary Magic",
      },
    ],
    timeline: [
      {
        year: "2021",
        title: "The First Nervous Coffee",
        description: "Met at 7 PM. Ended at midnight. Neither of us wanted to leave.",
      },
      {
        year: "2022",
        title: "The Midnight Highway Drive",
        description: "Singing off-key to 2000s Bollywood playlists with the windows rolled down.",
      },
      {
        year: "2023",
        title: "Meeting The Families",
        description: "Nervous smiles turned into laughter across the dinner table.",
      },
      {
        year: "2024",
        title: "Our First Shared Keys",
        description: "Turning four plain walls into a sanctuary full of warmth and plants.",
      },
      {
        year: "2026",
        title: "Celebrating 24 Beautiful Years of You",
        description: "And a lifetime of undiscovered adventures waiting ahead.",
      },
    ],
    interactiveMoment: {
      type: "waxEnvelope",
      title: "A Secret Midnight Promise",
      sealedLabel: "Tap to break the wax seal",
      unsealedNote:
        "My promise to you this year: To always listen first, to make you laugh when you're overwhelmed, and to never let a single day pass without reminding you how loved you are.",
    },
    closing: {
      title: "Happy 24th Birthday, Ananya.",
      message: "Here is to another 365 days of laughter, road trips, and growing together.",
      authorSignature: "All my love, Aarav ♡",
    },
  },

  playful: {
    id: "playful",
    theme: "playful",
    recipientName: "Kabir",
    senderName: "Rohan & The Squad",
    occasion: "26th Birthday Roast & Toast",
    targetAudience: "Best Friends, Soulmates & College Gangs",
    vibe: "Energetic, hilarious, affectionate, laugh-out-loud fun.",
    colors: {
      bg: "#0D131F",
      surface: "#141D2E",
      border: "rgba(217, 189, 136, 0.3)",
      primary: "#D9BD88",
      accent: "#FFD166",
      text: "#FFF8EB",
      gold: "#D9BD88",
    },
    audioTrack: {
      title: "Dil Chahta Hai (Remastered)",
      artist: "Shankar-Ehsaan-Loy",
      duration: "4:05",
      initialPlaying: false,
    },
    opening: {
      tag: "Certified Best Friend Tribute",
      headline: "Happy 26th Birthday To The Absolute Legend, Kabir!",
      subheadline:
        "Another year older, yet somehow not a single day wiser. Here is the official digital evidence of 8 years of friendship, chaos, and brotherhood.",
      openingPrompt: "Tap to trigger the friendship roast",
    },
    personalLetter: {
      salutation: "Yo Kabir,",
      bodyParagraphs: [
        "Eight years ago you walked into our hostel room asking if anyone had an extra phone charger, and somehow you never left. From surviving third-year engineering exams on 45 minutes of sleep to your legendary 'expert' cooking disasters, we've seen it all.",
        "You're the first person to offer a ride when someone's stranded at 2 AM, the undisputed king of terrible puns, and the truest friend anyone could ever ask for.",
        "Stop stressing about turning 26. You're entering your prime. May this year bring you massive career wins, endless road trips, and maybe — just maybe — an on-time arrival for once.",
      ],
      signoff: "Your lifelong partners in crime,",
      author: "Rohan, Varun & Sid",
      waxSealNumber: "Squad Stamp #26",
    },
    photoCollection: [
      {
        id: "b1",
        caption: "The 2:00 AM Hostel Maggi Session",
        date: "October 2018",
        story: "Burned the pan, set off the dorm alarm, and still ate the whole thing like kings.",
        category: "College Classics",
      },
      {
        id: "b2",
        caption: "Sleeping Through The 8 AM Viva",
        date: "April 2019",
        story: "Ran into the exam hall with your shirt inside out. Still scored an A. Pure witchcraft.",
        category: "Academic Legends",
      },
      {
        id: "b3",
        caption: "The Goa Scooter Mishap",
        date: "January 2021",
        story: "Ran out of petrol on an empty hill. Pushed the scooty 4 kilometers while singing 90s songs.",
        category: "Survival Stories",
      },
      {
        id: "b4",
        caption: "First Salary Celebration",
        date: "August 2022",
        story: "Spent 80% of our paycheck on tandoori platters and swore we were financial geniuses.",
        category: "Growing Up",
      },
      {
        id: "b5",
        caption: "Lonavala Monsoon Trek",
        date: "July 2024",
        story: "You slipped in the mud 30 seconds into the hike. Best profile picture ever taken.",
        category: "Peak Chaos",
      },
      {
        id: "b6",
        caption: "Last Weekend's Reunion",
        date: "October 2026",
        story: "Older, busier, but still laughing at the exact same jokes from 2018.",
        category: "Brothers Forever",
      },
    ],
    timeline: [
      {
        year: "2018",
        title: "Day 1 at the Dorms",
        description: "Bonded over shared hatred of 8 AM math lectures and love for cheap street food.",
      },
      {
        year: "2020",
        title: "Lockdown Gaming Marathons",
        description: "14 straight hours of Discord, gaming tournaments, and imaginary startup ideas.",
      },
      {
        year: "2022",
        title: "First Jobs & City Moves",
        description: "Different apartments, same group chat pinging 200 memes a day.",
      },
      {
        year: "2024",
        title: "The Himalayan Road Trip",
        description: "High altitude, zero phone signal, and the best conversations of our 20s.",
      },
      {
        year: "2026",
        title: "The 26th Birthday Milestone",
        description: "Officially closer to 30 than 20. But forever young at heart.",
      },
    ],
    interactiveMoment: {
      type: "scratchCard",
      title: "The Friendship Roast & Trivia Card",
      sealedLabel: "Tap to scratch & reveal the truth",
      question: "What is Kabir's most iconic real-life superpower?",
      answer: "Saying 'Bro I'm 5 mins away' when he is literally still wrapped in his blanket asleep.",
      statHighlight: "Friendship Rating: 100% Unbreakable",
    },
    closing: {
      title: "Happy Birthday, Brother!",
      message: "Here is to another year of legendary stories and zero boring days.",
      authorSignature: "— The Squad (Rohan, Varun, Sid)",
    },
  },

  family: {
    id: "family",
    theme: "family",
    recipientName: "Papa (Rajesh Sharma)",
    senderName: "The Sharma Family",
    occasion: "50th Golden Jubilee Milestone",
    targetAudience: "Parents, Mentors, Siblings & Grandparents",
    vibe: "Warm, nostalgic, deeply grateful, generational keepsake.",
    colors: {
      bg: "#121110",
      surface: "#1A1815",
      border: "rgba(217, 189, 136, 0.35)",
      primary: "#D9BD88",
      accent: "#C2A370",
      text: "#FBF7EF",
      gold: "#D9BD88",
    },
    audioTrack: {
      title: "Papa Kehte Hain (Acoustic Strings)",
      artist: "Instrumental Retrospective",
      duration: "3:45",
      initialPlaying: false,
    },
    opening: {
      tag: "50th Golden Jubilee Celebration",
      headline: "Celebrating 50 Years Of Wisdom, Sacrifice & Love.",
      subheadline:
        "To the rock and guiding light of our family: thank you for every sacrifice, every lesson in patience, and every quiet act of unconditional devotion.",
      openingPrompt: "Tap to explore Papa's Golden Milestone",
    },
    personalLetter: {
      salutation: "Dearest Papa,",
      bodyParagraphs: [
        "Fifty years is an extraordinary milestone. Looking back across the albums, what stands out isn't just the big promotions or new homes, but the steady, quiet presence of a father who never let his children doubt they were protected.",
        "You worked twelve-hour shifts without ever complaining, saved for our college fees while wearing the same watch for twenty years, and taught us that integrity and kindness are the only real wealth a person possesses.",
        "Today, as your children stand on their own feet, everything good in us is a reflection of you. Thank you for being our mentor, our hero, and our greatest blessing.",
      ],
      signoff: "With endless love and folded hands,",
      author: "Neha, Aditya & Mom (Sunita)",
      waxSealNumber: "Family Seal 1974",
    },
    voiceMessage: {
      speaker: "Voice Note from Neha & Grandkids (London)",
      duration: "1:18",
      transcript:
        "\"Happy 50th Birthday Dad! Kabir and Ananya made a drawing for you today and we can't wait to see you next month. We love you so, so much!\"",
    },
    photoCollection: [
      {
        id: "f1",
        caption: "Jaipur, 1976",
        date: "Circa 1976",
        story: "Papa at two years old in his grandfather's courtyard. The same gentle smile.",
        category: "The Early Years",
      },
      {
        id: "f2",
        caption: "Engineering Graduation Day",
        date: "May 1996",
        story: "The first person in the family to earn an engineering degree. A day of immense pride.",
        category: "Milestones",
      },
      {
        id: "f3",
        caption: "The Wedding Day with Ma",
        date: "December 1998",
        story: "Twenty-eight years of partnership, compromise, and unwavering companionship.",
        category: "Together Forever",
      },
      {
        id: "f4",
        caption: "Holding Neha For The First Time",
        date: "March 2001",
        story: "Tears in your eyes at the hospital nursery. The day you became a father.",
        category: "Fatherhood",
      },
      {
        id: "f5",
        caption: "Aditya's First Bike Ride",
        date: "November 2008",
        story: "Running alongside the bicycle for two hours on Sunday morning so he wouldn't fall.",
        category: "Quiet Love",
      },
      {
        id: "f6",
        caption: "Last Year's Family Gathering",
        date: "Diwali 2025",
        story: "Surrounded by your children, grandchildren, and three generations of love.",
        category: "The Golden Legacy",
      },
    ],
    timeline: [
      {
        year: "1974",
        title: "A Humble Beginning",
        description: "Born in Jaipur to teacher parents. Taught the values of discipline and humility.",
      },
      {
        year: "1996",
        title: "First Job & Relocation",
        description: "Moving to Mumbai with a single suitcase and a heart full of determination.",
      },
      {
        year: "1998",
        title: "Marriage to Sunita",
        description: "The foundation of a loving home that has sheltered our family ever since.",
      },
      {
        year: "2001–2005",
        title: "Fatherhood & Sacrifices",
        description: "Raising Neha and Aditya with endless bedtime stories and unconditional warmth.",
      },
      {
        year: "2026",
        title: "The Golden 50th Jubilee",
        description: "Honored by your children, respected by your peers, and cherished by your family.",
      },
    ],
    interactiveMoment: {
      type: "audioBlessings",
      title: "Audio Greetings from Family Across The World",
      note: "Relatives in Delhi, London, and Bangalore sent their warmest voice notes for Papa's 50th.",
    },
    closing: {
      title: "Happy 50th Birthday, Papa!",
      message: "May God bless you with abundant health, peace, and long life.",
      authorSignature: "With gratitude & devotion, The Sharma Family",
    },
  },
};
