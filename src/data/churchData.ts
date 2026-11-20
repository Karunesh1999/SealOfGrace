export interface EventItem {
  id: string
  title: string
  tag: string
  date: string
  time: string
  location: string
  description: string
  image: string
  type: 'weekly' | 'special'
}

export interface SermonItem {
  id: string
  title: string
  preacher: string
  year: string
  duration: string
  category: string
  image: string
  youtubeUrl: string
  audioUrl?: string
  verses?: string
  description: string
  keyPoints?: string[]
}

export interface PastorItem {
  id: string
  name: string
  role: string
  image: string
  bio?: string
  isLead?: boolean
  phone?: string
  email?: string
}

export interface MinistryItem {
  id: string
  title: string
  tagline: string
  description: string
  leader?: string
  meetingTime: string
  image: string
  responsibilities?: string[]
}

export interface ChurchServiceItem {
  id: string
  title: string
  category: 'worship' | 'counseling' | 'sacrament' | 'prayer' | 'broadcast'
  tagline: string
  schedule: string
  location: string
  leader: string
  description: string
  fullDetails: string
  scripture: string
  image: string
  bookable: boolean
}

export interface GalleryPhoto {
  id: string
  title: string
  category: 'events' | 'choir' | 'children' | 'baptism'
  image: string
  caption: string
}

export const CHURCH_INFO = {
  name: "Seal of Grace Bible Church",
  shortName: "Seal of Grace",
  slogan: "SHOW THEM CHRIST! GROW THEIR FAITH!!",
  annualTheme: "Our Year of Divine Speed and Overflow",
  year: "2026",
  address: "Effuanta Rd. Tarkwa, Ghana",
  phone: "+233 24 312 7438",
  phoneRaw: "+233243127438",
  email: "info-tarkwa@sealofgracebiblechurch.com",
  radioStation: "Medeama FM 92.9",
  radioTime: "Sundays 07:00 AM - 08:00 AM",
  sundayServiceTime: "08:30 AM - 11:00 AM",
  covenantPrayersTime: "07:00 AM - 08:00 AM",
  youtubeChannel: "https://www.youtube.com/@sealofgraceinternationalch4314",
  facebookPage: "https://www.facebook.com/sealofgracebiblechurch",
}

export const ANNUAL_THEME_DETAILS = {
  title: "Our Year of Divine Speed and Overflow",
  values: "Our church is committed to evangelism, reaching out to share the good news, fostering a deep life of prayer, teaching biblical truths, building fellowship through meaningful relationships, and upholding purity in both heart and actions.",
  mission: "To make disciples of all nations. (Matthew 28:19-20 — Matthew 24:14)",
  vision: "To be a place of worship where people are created anew through the power of the gospel of God's kingdom."
}

export const MONTHLY_THEMES = [
  {
    month: "JAN",
    year: "2026",
    title: "Divine Speed and Overflow (31 days Fasting and Prayers)",
    scripture: "Isaiah 40:31; Psalm 23:5"
  },
  {
    month: "NOV",
    year: "2026",
    title: "Understanding Biblical Forgiveness",
    scripture: "Luke 6:37 NKJV || Mark 11:25 NKJV"
  },
  {
    month: "DEC",
    year: "2026",
    title: "Why Jesus? The Uniqueness of Christ",
    scripture: "Acts 4:12 NKJV || 1 Timothy 2:5 NKJV || John 1:14 NKJV"
  }
]

export const PILLARS = [
  {
    id: "spirit",
    title: "Holy Spirit-Filled and Empowered Life",
    verse: "Ephesians 4:30-32; Galatians 5:22-23",
    description: "We believe it is God's will that believers walk in the Spirit moment by moment, bearing the fruit of the Spirit."
  },
  {
    id: "christ",
    title: "Christ-Exalting",
    verse: "John 5:39-40",
    description: "Scripture is all about Jesus. Every sermon and ministry at SGBC points people continually to Jesus Christ."
  },
  {
    id: "living",
    title: "Practical Christian Living",
    verse: "2 Corinthians 7:1",
    description: "Those born again grow in sanctification, holiness, faith, power, prayer, love, and sacrificial Christian service."
  },
  {
    id: "finance",
    title: "Financial Prudence",
    verse: "2 Corinthians 9:7",
    description: "People must give voluntarily, not under compulsion. We discourage coercive giving and uphold integrity."
  },
  {
    id: "word",
    title: "Word-Centered",
    verse: "2 Timothy 3:16; Acts 6:4",
    description: "The Bible is our all-sufficient and inspired guide for life, faith, worship, and church practice."
  },
  {
    id: "prayer",
    title: "Prayer-Based",
    verse: "Mark 11:17; 1 Thessalonians 5:17",
    description: "The house of God is a house of prayer—the essential spiritual lifeline and weapon of every believer."
  },
  {
    id: "grace",
    title: "Grace-Filled",
    verse: "Ephesians 2:8",
    description: "Salvation is wholly through sovereign grace; no human merit earns God's everlasting favor and love."
  }
]

export const CHURCH_SERVICES: ChurchServiceItem[] = [
  {
    id: "sunday-worship",
    title: "Sunday Divine Worship Service",
    category: "worship",
    tagline: "Exalting Christ in Praise, Word & Holy Fellowship",
    schedule: "Every Sunday 08:30 AM - 11:00 AM",
    location: "Main Church Auditorium, Effuanta Rd.",
    leader: "Pastor Samuel Koffie & Presbytery Team",
    description: "Our primary weekly assembly where the congregation gathers for reverent worship, in-depth Scripture exposition, and fellowship.",
    fullDetails: "Join the SGBC family every Sunday morning for an uplifting encounter with God. Each service features choral praise, heartfelt prayer, Holy Communion on designated Sundays, and verse-by-verse biblical teaching designed to strengthen your faith and daily walk with God.",
    scripture: "Hebrews 10:25, Psalm 100:1-5",
    image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1000&q=80",
    bookable: true
  },
  {
    id: "pastoral-counseling",
    title: "Pastoral Counseling & Spiritual Guidance",
    category: "counseling",
    tagline: "Confidential Biblical Guidance, Healing & Prayer",
    schedule: "Tuesdays & Thursdays (By Appointment)",
    location: "Pastoral Office / Virtual Call",
    leader: "Pastoral Team",
    description: "One-on-one confidential counseling for marriage, emotional healing, spiritual deliverance, and life direction grounded in God's Word.",
    fullDetails: "Whether you are navigating marital challenges, grief, addiction, career choices, or spiritual dry seasons, our pastors provide compassionate, confidential, and prayerful biblical counsel to help you find clarity and restoration in Jesus Christ.",
    scripture: "Proverbs 11:14, Galatians 6:2",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80",
    bookable: true
  },
  {
    id: "covenant-prayers",
    title: "Covenant Prayers Intercession",
    category: "prayer",
    tagline: "Breaking Barriers & Birthing Breakthroughs",
    schedule: "Every Monday 07:00 AM - 08:00 AM",
    location: "Main Church Sanctuary",
    leader: "Intercessory Ministry",
    description: "Start your week in victory through targeted warfare and supplication to align your days with God's prophetic purpose.",
    fullDetails: "Covenant Prayers gather faithful intercessors to bring families, church ministries, Tarkwa community, and Ghana before God's throne of grace. Experience supernatural breakthroughs as we pray according to biblical covenant promises.",
    scripture: "1 Thessalonians 5:17, James 5:16",
    image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1000&q=80",
    bookable: true
  },
  {
    id: "radio-broadcast",
    title: "Medeama FM 92.9 Live Radio Ministry",
    category: "broadcast",
    tagline: "Taking the Gospel Across the Airwaves",
    schedule: "Every Sunday 07:00 AM - 08:00 AM",
    location: "Medeama 92.9 FM Studio & Church Live Audio",
    leader: "Pastor Samuel Koffie",
    description: "Broadcasting uncompromised Christ-centered teachings across Tarkwa, Prestea, and surrounding Western Region towns.",
    fullDetails: "Our weekly radio ministry reaches thousands of listeners in homes, hospitals, and transit. Tune in each Sunday morning before service for profound theological exposition, practical Christian living truths, and special listener prayer lines.",
    scripture: "Mark 16:15, Romans 10:14",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1000&q=80",
    bookable: false
  },
  {
    id: "water-baptism",
    title: "Water Baptism & New Believers Discipleship",
    category: "sacrament",
    tagline: "Public Declaration of Faith in Jesus Christ",
    schedule: "Quarterly Services (Upcoming: End of Month)",
    location: "Baptismal Font / River Gathering",
    leader: "Discipleship Council",
    description: "Immersion baptism symbolizing death to sin and resurrection to new life in Christ for born-again believers.",
    fullDetails: "Following in the footsteps of Christ, our baptism services are accompanied by foundational discipleship classes covering salvation, the Holy Spirit, prayer, church fellowship, and holy living.",
    scripture: "Matthew 28:19, Romans 6:3-4",
    image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1000&q=80",
    bookable: true
  },
  {
    id: "child-dedication",
    title: "Child Dedication & Family Blessing",
    category: "sacrament",
    tagline: "Presenting Children to God in Covenant Prayer",
    schedule: "1st Sunday of Each Month",
    location: "Main Church Altar",
    leader: "Lead Pastor Samuel Koffie",
    description: "Covenant prayer dedicating newborns and infants to God, committing parents to raise them in the nurture of the Lord.",
    fullDetails: "We partner with parents in praying blessing, protection, and salvation over their children before the congregation, honoring biblical parental responsibility.",
    scripture: "1 Samuel 1:27-28, Luke 2:22",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1000&q=80",
    bookable: true
  }
]

export const EVENTS: EventItem[] = [
  {
    id: "event-sunday",
    title: "Sunday Divine Worship Service",
    tag: "Every Sunday",
    date: "22 Nov 2026",
    time: "08:30 AM - 11:00 AM",
    location: "Main Church, Effuanta Rd.",
    description: "Join us as we minister the Word of God, share His truth, and transform lives through His grace and supernatural power.",
    image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1000&q=80",
    type: "weekly"
  },
  {
    id: "event-radio",
    title: "This Sunday: Medeama FM 92.9 Live",
    tag: "Listen Live",
    date: "22 Nov 2026",
    time: "07:00 AM - 08:00 AM",
    location: "Medeama Radio 92.9 FM",
    description: "Tune in live every Sunday morning across Tarkwa and Western Region for life-transforming biblical expositions.",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1000&q=80",
    type: "weekly"
  },
  {
    id: "event-covenant",
    title: "Covenant Prayers Intercession",
    tag: "Every Monday",
    date: "23 Nov 2026",
    time: "07:00 AM - 08:00 AM",
    location: "Main Church Sanctuary",
    description: "Join us in fervent prayer as we seek His power to break down every barrier and usher in divine breakthroughs.",
    image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1000&q=80",
    type: "weekly"
  }
]

export const ANNUAL_CALENDAR = [
  { id: "cal-1", title: "31 Days Fasting & Consecration", period: "1st Jan – 31st Jan 2026", badge: "Annual Theme Launch" },
  { id: "cal-2", title: "21 Days Fasting: Mid-Year Empowerment", period: "11th May – 31st May 2026", badge: "Spiritual Renewal" },
  { id: "cal-3", title: "31 Days Fasting: Divine Speed Season", period: "1st Jul – 31st Jul 2026", badge: "Breakthrough" },
  { id: "cal-4", title: "5 Days Fasting: End of Year Preparation", period: "23rd Nov – 27th Nov 2026", badge: "Thanksgiving" },
  { id: "cal-5", title: "Grand Christmas Celebration", period: "21st Dec – 25th Dec 2026", badge: "Nativity of Christ" }
]

export const MINISTRIES: MinistryItem[] = [
  {
    id: "children",
    title: "Children's Ministry",
    tagline: "Raising Godly Seed for the Kingdom",
    description: "Guiding children to know Christ, memorize Scripture, and grow in love and godly character in a joyful, nurturing environment every Sunday.",
    meetingTime: "Sundays during main service (09:00 AM)",
    leader: "Ministry Teachers & Guardians",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80",
    responsibilities: [
      "Sunday School Bible curriculum teaching",
      "Scripture memory verse training",
      "Children praise and worship songs",
      "Creative crafts and biblical drama"
    ]
  },
  {
    id: "choir",
    title: "Choir Ministry",
    tagline: "Sacred Harmonies & Spirit-Filled Worship",
    description: "Leading the congregation in Spirit-filled praise and worship, exalting the name of Jesus Christ through choral harmony, hymns, and sacred contemporary songs.",
    meetingTime: "Saturdays 04:30 PM & Sundays 07:30 AM",
    leader: "Music Director & Worship Team",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80",
    responsibilities: [
      "Vocal and instrumental rehearsals",
      "Leading congregational worship",
      "Annual sacred music celebrations",
      "Spiritual devotion and team prayer"
    ]
  },
  {
    id: "youth",
    title: "Youth of Grace",
    tagline: "Empowered Young Disciples for Christ",
    description: "Equipping young people and university students with sound doctrine, moral excellence, and leadership training to impact their campuses and communities.",
    meetingTime: "Bi-weekly Saturdays 03:00 PM",
    leader: "Youth Council",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80",
    responsibilities: [
      "Campus evangelism and outreach",
      "Youth Bible discussions and symposiums",
      "Mentorship and career guidance",
      "Media and technical audio support"
    ]
  },
  {
    id: "evangelism",
    title: "Evangelism & Outreach",
    tagline: "Reaching Tarkwa & Prestea with Good News",
    description: "Taking the gospel out into streets, hospitals, schools, and villages, carrying the message of salvation through faith in Jesus Christ.",
    meetingTime: "Monthly Outreaches",
    leader: "Outreach Committee",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=80",
    responsibilities: [
      "Tracts distribution and open-air meetings",
      "Hospital and prison visitation",
      "New convert follow-up and visitation",
      "Community benevolence projects"
    ]
  }
]

export const PASTORS: PastorItem[] = [
  {
    id: "samuel-koffie",
    name: "Samuel Koffie",
    role: "Lead Pastor & Founder",
    isLead: true,
    phone: "+233 24 312 7438",
    email: "pastor.samuel@sealofgracebiblechurch.com",
    bio: "Meet our lead pastor, Samuel Koffie, a visionary leader born on the 4th of July. Raised as a Christian and embracing the ministry of the Holy Spirit, he serves faithfully as a minister and a Senior Manager in AAIL. Under his spiritual leadership, SGBC continues to point believers to the supremacy of Christ and biblical transformation.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "sampson-cudjoe",
    name: "Sampson Cudjoe",
    role: "Pastor",
    bio: "Pastor Sampson Cudjoe oversees pastoral care and evangelism coordination. He is passionate about soul winning, biblical discipleship, and grounding new believers in grace.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "peter-andoh",
    name: "Peter Andoh",
    role: "Pastor",
    bio: "Pastor Peter Andoh is dedicated to prayer mobilization, counseling, and youth mentorship. He ministers extensively during Covenant Prayers and midweek services.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "charles-obeng-kwarteng",
    name: "Charles Obeng Kwarteng",
    role: "Pastor",
    bio: "Pastor Charles Obeng Kwarteng serves in family life counseling, church administration, and teaching scripture truth with clarity and pastoral warmth.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "henry-kwofie-nyanzu",
    name: "Henry Kwofie Nyanzu",
    role: "Pastor",
    bio: "Pastor Henry Kwofie Nyanzu directs outreach and discipleship tracks, fostering spiritual growth and brotherly unity across the congregations.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80"
  }
]

export const SERMONS: SermonItem[] = [
  {
    id: "walking-in-gods-favour",
    title: "Walking in God's Favour",
    preacher: "Pastor Samuel Koffie",
    year: "2022",
    duration: "48 mins",
    category: "Faith & Favor",
    image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1000&q=80",
    youtubeUrl: "https://www.youtube.com/@sealofgraceinternationalch4314",
    verses: "Psalm 5:12, Luke 2:52, Proverbs 3:3-4",
    description: "Discover what it truly means to experience supernatural divine endorsement and open doors through God's unmerited favor.",
    keyPoints: [
      "The nature of God's unmerited favor in the life of Joseph and Jesus",
      "How humility and biblical obedience activate open doors",
      "Favor as a shield in seasons of adversity"
    ]
  },
  {
    id: "overcoming-the-devil",
    title: "Overcoming the Devil",
    preacher: "Pastor Samuel Koffie",
    year: "2024",
    duration: "54 mins",
    category: "Spiritual Warfare",
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1000&q=80",
    youtubeUrl: "https://www.youtube.com/@sealofgraceinternationalch4314",
    verses: "James 4:7, Ephesians 6:11-18, Revelation 12:11",
    description: "A profound breakdown of Christ's victory over the enemy and how believers wield the shield of faith and the sword of the Spirit.",
    keyPoints: [
      "Submitting to God as the first principle of spiritual authority",
      "Putting on the whole armor of God daily",
      "Overcoming by the blood of the Lamb and word of our testimony"
    ]
  },
  {
    id: "freedom-from-lust",
    title: "Freedom from Lust",
    preacher: "Pastor Samuel Koffie",
    year: "2022",
    duration: "42 mins",
    category: "Holy Living",
    image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1000&q=80",
    youtubeUrl: "https://www.youtube.com/@sealofgraceinternationalch4314",
    verses: "Galatians 5:16, 1 John 2:16, 2 Timothy 2:22",
    description: "Biblical strategies and spiritual illumination to walk in purity, break soul ties, and live victoriously in the power of the Spirit.",
    keyPoints: [
      "Understanding the deceitfulness of the flesh",
      "Walking by the Spirit to deny carnal appetites",
      "Fleeing youthful lusts and pursuing righteousness with fellow believers"
    ]
  },
  {
    id: "happy-and-holy-marriage",
    title: "Happy and Holy Marriage",
    preacher: "Pastor Samuel Koffie",
    year: "2024",
    duration: "61 mins",
    category: "Family & Relationships",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1000&q=80",
    youtubeUrl: "https://www.youtube.com/@sealofgraceinternationalch4314",
    verses: "Ephesians 5:22-33, Hebrews 13:4, 1 Peter 3:7",
    description: "Guiding couples into covenant joy, mutual sacrifice, deep communication, and Christ-centered marital unity.",
    keyPoints: [
      "Marriage as a living picture of Christ and the Church",
      "Sacrificial love from husbands and biblical honor from wives",
      "Resolving conflict with grace, prayer, and mutual forgiveness"
    ]
  }
]

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "gal-1",
    title: "Sunday Worship Service",
    category: "events",
    caption: "Service & Members",
    image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "gal-2",
    title: "Choir Ministry",
    category: "choir",
    caption: "Choir in Worship",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "gal-3",
    title: "Children Ministry",
    category: "children",
    caption: "Joyful Sunday School",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "gal-4",
    title: "Water Baptism",
    category: "baptism",
    caption: "Baptism Service",
    image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "gal-5",
    title: "Covenant Prayers Gathering",
    category: "events",
    caption: "Covenant Prayers Intercession",
    image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "gal-6",
    title: "Medeama FM 92.9 Live Recording",
    category: "events",
    caption: "Radio Broadcast",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1000&q=80"
  }
]
