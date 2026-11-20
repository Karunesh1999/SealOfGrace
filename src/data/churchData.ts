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
  category: 'events' | 'service' | 'children' | 'choir' | 'baptism' | 'media'
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
  logo: "/images/church/logo/logo-1.png",
  logoAlt: "/images/church/logo/logo-2.png",
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
    image: "/images/church/Website_Photos/Ariel_Photos/service.jpg",
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
    image: "/images/church/Website_Photos/About/abt_w.jpg",
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
    image: "/images/church/Website_Photos/Ariel_Photos/prayer2.jpg",
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
    image: "/images/church/Website_Photos/photos/radio2.png",
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
    image: "/images/church/Website_Photos/baptism/bapA.jpeg",
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
    image: "/images/church/Website_Photos/CHILDREN/cm.jpg",
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
    image: "/images/church/Website_Photos/Ariel_Photos/service.jpg",
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
    image: "/images/church/Website_Photos/photos/radio2.png",
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
    image: "/images/church/Website_Photos/Ariel_Photos/prayer2.jpg",
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
    image: "/images/church/Website_Photos/CHILDREN/cm.jpg",
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
    image: "/images/church/Website_Photos/CHOIR/cw.jpg",
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
    image: "/images/church/Website_Photos/MEDIA/m6.jpg",
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
    image: "/images/church/Website_Photos/CHURCH_SERVICE_&_MEMBERS/s4.jpg",
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
    image: "/images/church/Website_Photos/PASTORS_EXCLUSIVE/main_pastor.jpg"
  },
  {
    id: "sampson-cudjoe",
    name: "Sampson Cudjoe",
    role: "Pastor",
    bio: "Pastor Sampson Cudjoe oversees pastoral care and evangelism coordination. He is passionate about soul winning, biblical discipleship, and grounding new believers in grace.",
    image: "/images/church/Website_Photos/PASTORS_EXCLUSIVE/pst-sampson.jpg"
  },
  {
    id: "peter-andoh",
    name: "Peter Andoh",
    role: "Pastor",
    bio: "Pastor Peter Andoh is dedicated to prayer mobilization, counseling, and youth mentorship. He ministers extensively during Covenant Prayers and midweek services.",
    image: "/images/church/Website_Photos/PASTORS_EXCLUSIVE/pst-peter.jpg"
  },
  {
    id: "charles-obeng-kwarteng",
    name: "Charles Obeng Kwarteng",
    role: "Pastor",
    bio: "Pastor Charles Obeng Kwarteng serves in family life counseling, church administration, and teaching scripture truth with clarity and pastoral warmth.",
    image: "/images/church/Website_Photos/PASTORS_EXCLUSIVE/pst-charles2.jpg"
  },
  {
    id: "henry-kwofie-nyanzu",
    name: "Henry Kwofie Nyanzu",
    role: "Pastor",
    bio: "Pastor Henry Kwofie Nyanzu directs outreach and discipleship tracks, fostering spiritual growth and brotherly unity across the congregations.",
    image: "/images/church/Website_Photos/PASTORS_EXCLUSIVE/pst-henry.jpg"
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
    image: "/images/church/Website_Photos/SERMONS/walkingin.jpg",
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
    image: "/images/church/Website_Photos/SERMONS/overcomingthedevil.jpg",
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
    image: "/images/church/Website_Photos/SERMONS/freedomfromlust.jpg",
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
    image: "/images/church/Website_Photos/SERMONS/happyandholy.jpg",
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
    id: "gal-events-1",
    title: "Special Church Celebration Service",
    category: "events",
    caption: "Fellowship & Community Assembly",
    image: "/images/church/Website_Photos/EVENT/e1.jpg"
  },
  {
    id: "gal-events-2",
    title: "Annual Harvest & Thanksgiving Meeting",
    category: "events",
    caption: "Joyful Celebration of God's Goodness",
    image: "/images/church/Website_Photos/EVENT/e2.jpg"
  },
  {
    id: "gal-events-3",
    title: "Church Outreach & Community Ministry",
    category: "events",
    caption: "Sharing Christ in Tarkwa",
    image: "/images/church/Website_Photos/EVENT/e3.jpg"
  },
  {
    id: "gal-events-4",
    title: "Congregational Evangelism Day",
    category: "events",
    caption: "Ministering the Word of Grace",
    image: "/images/church/Website_Photos/EVENT/e4.jpg"
  },
  {
    id: "gal-events-5",
    title: "Youth & Young Adults Conference",
    category: "events",
    caption: "Empowering the Next Generation",
    image: "/images/church/Website_Photos/EVENT/e5.jpg"
  },
  {
    id: "gal-events-6",
    title: "Leadership & Ministry Workshop",
    category: "events",
    caption: "Equipping Church Workers",
    image: "/images/church/Website_Photos/EVENT/e6.jpg"
  },
  {
    id: "gal-events-7",
    title: "Church Marriage Covenant Blessings",
    category: "events",
    caption: "Celebrating Godly Families in Grace",
    image: "/images/church/Website_Photos/EVENT/e7.jpg"
  },
  {
    id: "gal-events-8",
    title: "Open-Air Community Gospel Mission",
    category: "events",
    caption: "Taking the Good News to All",
    image: "/images/church/Website_Photos/EVENT/e8.jpg"
  },
  {
    id: "gal-events-9",
    title: "Annual Praise & Worship Festivity",
    category: "events",
    caption: "Praising the Lord with One Voice",
    image: "/images/church/Website_Photos/EVENT/e9.jpg"
  },
  {
    id: "gal-events-10",
    title: "Church Consecration & Prayer Summit",
    category: "events",
    caption: "Seeking Divine Direction & Speed",
    image: "/images/church/Website_Photos/EVENT/e10.jpg"
  },
  {
    id: "gal-service-1",
    title: "Sunday Morning Sanctuary Assembly",
    category: "service",
    caption: "Congregation in Holy Reverence",
    image: "/images/church/Website_Photos/CHURCH_SERVICE_&_MEMBERS/s1.jpg"
  },
  {
    id: "gal-service-2",
    title: "Worship & Praises in Sanctuary",
    category: "service",
    caption: "Entering His Gates with Thanksgiving",
    image: "/images/church/Website_Photos/CHURCH_SERVICE_&_MEMBERS/s2.jpg"
  },
  {
    id: "gal-service-3",
    title: "Congregational Praise & Fellowship",
    category: "service",
    caption: "Rejoicing Together in the Lord",
    image: "/images/church/Website_Photos/CHURCH_SERVICE_&_MEMBERS/s3.jpg"
  },
  {
    id: "gal-service-4",
    title: "Ministry of the Word Exposition",
    category: "service",
    caption: "Hearing Biblical Truth with Power",
    image: "/images/church/Website_Photos/CHURCH_SERVICE_&_MEMBERS/s4.jpg"
  },
  {
    id: "gal-service-5",
    title: "Brothers & Sisters in Fellowship",
    category: "service",
    caption: "Love and Unity in Christ",
    image: "/images/church/Website_Photos/CHURCH_SERVICE_&_MEMBERS/s5.jpg"
  },
  {
    id: "gal-service-6",
    title: "Reverent Devotion & Supplication",
    category: "service",
    caption: "Pastoral Prayer at the Sanctuary",
    image: "/images/church/Website_Photos/CHURCH_SERVICE_&_MEMBERS/s6.jpg"
  },
  {
    id: "gal-service-7",
    title: "Sunday Service & Members in Worship",
    category: "service",
    caption: "Main Auditorium Congregation",
    image: "/images/church/Website_Photos/CHURCH_SERVICE_&_MEMBERS/s7.jpg"
  },
  {
    id: "gal-service-8",
    title: "Sunday Worship & Word Gathering",
    category: "service",
    caption: "Faithful Saints Lifting Holy Hands",
    image: "/images/church/Website_Photos/CHURCH_SERVICE_&_MEMBERS/s8.jpg"
  },
  {
    id: "gal-service-9",
    title: "Church Elders & Ministry Presbytery",
    category: "service",
    caption: "Shepherding the Flock of God",
    image: "/images/church/Website_Photos/CHURCH_SERVICE_&_MEMBERS/s9.jpg"
  },
  {
    id: "gal-service-10",
    title: "Sanctuary Intercessory Assembly",
    category: "service",
    caption: "Standing in the Gap for the Nations",
    image: "/images/church/Website_Photos/CHURCH_SERVICE_&_MEMBERS/s10.jpg"
  },
  {
    id: "gal-service-11",
    title: "Bible Study & Discipleship Class",
    category: "service",
    caption: "Growing in the Knowledge of Christ",
    image: "/images/church/Website_Photos/CHURCH_SERVICE_&_MEMBERS/s11.jpg"
  },
  {
    id: "gal-service-12",
    title: "Sunday Divine Praise Celebration",
    category: "service",
    caption: "Exalting the King of Kings",
    image: "/images/church/Website_Photos/CHURCH_SERVICE_&_MEMBERS/s12.jpg"
  },
  {
    id: "gal-service-13",
    title: "Joyful Congregation in Thanksgiving",
    category: "service",
    caption: "Giving Glory to God for His Faithfulness",
    image: "/images/church/Website_Photos/CHURCH_SERVICE_&_MEMBERS/s13.jpg"
  },
  {
    id: "gal-service-14",
    title: "Pastoral Blessing for Congregation",
    category: "service",
    caption: "Anointing & Grace upon All Members",
    image: "/images/church/Website_Photos/CHURCH_SERVICE_&_MEMBERS/s14.jpg"
  },
  {
    id: "gal-service-15",
    title: "Close of Sunday Divine Service",
    category: "service",
    caption: "Going Forth to Serve and Disciple",
    image: "/images/church/Website_Photos/CHURCH_SERVICE_&_MEMBERS/s15.jpg"
  },
  {
    id: "gal-children-1",
    title: "Sunday School Bible Stories",
    category: "children",
    caption: "Teaching Biblical Truths Early",
    image: "/images/church/Website_Photos/CHILDREN/cm.jpg"
  },
  {
    id: "gal-children-2",
    title: "Children Praise & Song Worship",
    category: "children",
    caption: "Joyful Young Believers Singing",
    image: "/images/church/Website_Photos/CHILDREN/c1.jpg"
  },
  {
    id: "gal-children-3",
    title: "Scripture Memory Verse Training",
    category: "children",
    caption: "Hiding the Word in Young Hearts",
    image: "/images/church/Website_Photos/CHILDREN/c2.jpg"
  },
  {
    id: "gal-children-4",
    title: "Joyful Sunday School Children",
    category: "children",
    caption: "Raising Godly Seed for the Kingdom",
    image: "/images/church/Website_Photos/CHILDREN/c3.jpg"
  },
  {
    id: "gal-children-5",
    title: "Children's Biblical Drama & Crafts",
    category: "children",
    caption: "Creative Learning in the House of God",
    image: "/images/church/Website_Photos/CHILDREN/c4.jpg"
  },
  {
    id: "gal-children-6",
    title: "Sunday School Young Disciples",
    category: "children",
    caption: "Nurturing Future Christian Leaders",
    image: "/images/church/Website_Photos/CHILDREN/c5.jpg"
  },
  {
    id: "gal-children-7",
    title: "Children Fellowship & Bible Class",
    category: "children",
    caption: "Growing in Love, Faith and Obedience",
    image: "/images/church/Website_Photos/CHILDREN/c6.jpg"
  },
  {
    id: "gal-children-8",
    title: "Children's Choir Vocal Ensemble",
    category: "children",
    caption: "Young Praisers Exalting Jesus",
    image: "/images/church/Website_Photos/CHILDREN/c7.jpg"
  },
  {
    id: "gal-children-9",
    title: "Sunday School Teachers & Students",
    category: "children",
    caption: "Dedicated Mentorship and Guidance",
    image: "/images/church/Website_Photos/CHILDREN/c8.jpg"
  },
  {
    id: "gal-children-10",
    title: "Young Believers Morning Assembly",
    category: "children",
    caption: "A Foundation Built on Christ the Rock",
    image: "/images/church/Website_Photos/CHILDREN/c9.jpg"
  },
  {
    id: "gal-children-11",
    title: "Joyful Classroom Learning Time",
    category: "children",
    caption: "Understanding the Love of Jesus",
    image: "/images/church/Website_Photos/CHILDREN/c10.jpg"
  },
  {
    id: "gal-children-12",
    title: "Creative Arts & Biblical Coloring",
    category: "children",
    caption: "Interactive Faith Formation",
    image: "/images/church/Website_Photos/CHILDREN/c11.jpg"
  },
  {
    id: "gal-children-13",
    title: "Children Ministry Scripture Recital",
    category: "children",
    caption: "Speaking God's Truth with Confidence",
    image: "/images/church/Website_Photos/CHILDREN/c12.jpg"
  },
  {
    id: "gal-children-14",
    title: "Young Christians Prayer Time",
    category: "children",
    caption: "Learning to Pray to God Daily",
    image: "/images/church/Website_Photos/CHILDREN/c13.jpg"
  },
  {
    id: "gal-children-15",
    title: "Children Sunday School Graduation",
    category: "children",
    caption: "Advancing in Faith & Knowledge",
    image: "/images/church/Website_Photos/CHILDREN/c14.jpg"
  },
  {
    id: "gal-children-16",
    title: "Children Ministry Team & Teachers",
    category: "children",
    caption: "Loving Guardians of the Kingdom",
    image: "/images/church/Website_Photos/CHILDREN/c15.jpg"
  },
  {
    id: "gal-choir-1",
    title: "Sacred Choral Harmonies in Glory",
    category: "choir",
    caption: "Robed Singers in Reverent Praise",
    image: "/images/church/Website_Photos/CHOIR/cw.jpg"
  },
  {
    id: "gal-choir-2",
    title: "Spiritual Worship Leaders & Ensemble",
    category: "choir",
    caption: "Leading the Congregation to God",
    image: "/images/church/Website_Photos/CHOIR/c1.jpg"
  },
  {
    id: "gal-choir-3",
    title: "Choral Anthems & Traditional Hymns",
    category: "choir",
    caption: "Sacred Harmony in the Sanctuary",
    image: "/images/church/Website_Photos/CHOIR/c2.jpg"
  },
  {
    id: "gal-choir-4",
    title: "Worship Team Instrumentalists",
    category: "choir",
    caption: "Lifting Praises on Keyboards & Guitars",
    image: "/images/church/Website_Photos/CHOIR/c3.jpg"
  },
  {
    id: "gal-choir-5",
    title: "Choir Rehearsal & Vocal Training",
    category: "choir",
    caption: "Striving for Excellence in God's Praise",
    image: "/images/church/Website_Photos/CHOIR/c4.jpg"
  },
  {
    id: "gal-choir-6",
    title: "Sunday Choral Ministration",
    category: "choir",
    caption: "Spiritual Songs and Heavenly Melody",
    image: "/images/church/Website_Photos/CHOIR/c5.jpg"
  },
  {
    id: "gal-choir-7",
    title: "Choir Robed in Sacred Blue & White",
    category: "choir",
    caption: "Dedicated Vocalists in Ministry",
    image: "/images/church/Website_Photos/CHOIR/c6.jpg"
  },
  {
    id: "gal-choir-8",
    title: "Anointed Praise Ministration",
    category: "choir",
    caption: "Breaking Barriers Through Worship",
    image: "/images/church/Website_Photos/CHOIR/c7.jpg"
  },
  {
    id: "gal-choir-9",
    title: "Hymn Presentation & Choral Solos",
    category: "choir",
    caption: "Glorifying God with Heart and Voice",
    image: "/images/church/Website_Photos/CHOIR/c8.jpg"
  },
  {
    id: "gal-choir-10",
    title: "Choir Festival in the Sanctuary",
    category: "choir",
    caption: "Annual Sacred Music Celebration",
    image: "/images/church/Website_Photos/CHOIR/c9.jpg"
  },
  {
    id: "gal-choir-11",
    title: "Choir in Holy Worship Encounter",
    category: "choir",
    caption: "Atmosphere of Heaven on Earth",
    image: "/images/church/Website_Photos/CHOIR/c10.jpg"
  },
  {
    id: "gal-choir-12",
    title: "Voices of Grace Choral Ensemble",
    category: "choir",
    caption: "United in Purpose and Melody",
    image: "/images/church/Website_Photos/CHOIR/c11.jpg"
  },
  {
    id: "gal-choir-13",
    title: "Youth Choir Vocal Presentation",
    category: "choir",
    caption: "Inspiring Worship and Youth Ministry",
    image: "/images/church/Website_Photos/CHOIR/c12.jpg"
  },
  {
    id: "gal-choir-14",
    title: "Consecrated Choir Praise Service",
    category: "choir",
    caption: "Offering a Sacrifice of Praise",
    image: "/images/church/Website_Photos/CHOIR/c13.jpg"
  },
  {
    id: "gal-choir-15",
    title: "Worship Leaders Intercessory Team",
    category: "choir",
    caption: "Praying Before Sunday Ministration",
    image: "/images/church/Website_Photos/CHOIR/c14.jpg"
  },
  {
    id: "gal-choir-16",
    title: "Adekese Robed Choral Celebration",
    category: "choir",
    caption: "Triumphant Music Ministry of SGBC",
    image: "/images/church/Website_Photos/CHOIR/adekese.png"
  },
  {
    id: "gal-baptism-1",
    title: "Water Baptism Celebration",
    category: "baptism",
    caption: "Public Declaration of Faith in Jesus Christ",
    image: "/images/church/Website_Photos/baptism/bapA.jpeg"
  },
  {
    id: "gal-baptism-2",
    title: "New Believers Immersion Service",
    category: "baptism",
    caption: "Buried with Christ in Baptism",
    image: "/images/church/Website_Photos/baptism/bap1.jpeg"
  },
  {
    id: "gal-baptism-3",
    title: "Baptismal Vows & Prayer of Blessing",
    category: "baptism",
    caption: "Pastoral Consecration at the Waters",
    image: "/images/church/Website_Photos/baptism/bap2.jpeg"
  },
  {
    id: "gal-baptism-4",
    title: "Baptism Ceremony in the Waters",
    category: "baptism",
    caption: "Raised to Walk in Newness of Life",
    image: "/images/church/Website_Photos/baptism/bap3.jpeg"
  },
  {
    id: "gal-baptism-5",
    title: "Baptized Believers Fellowship",
    category: "baptism",
    caption: "Welcoming New Converts into Church Family",
    image: "/images/church/Website_Photos/baptism/bap4.jpeg"
  },
  {
    id: "gal-baptism-6",
    title: "Consecration of Baptism Candidates",
    category: "baptism",
    caption: "Declaring Jesus as Lord and Savior",
    image: "/images/church/Website_Photos/baptism/bap5.jpeg"
  },
  {
    id: "gal-baptism-7",
    title: "Sacramental River Immersion",
    category: "baptism",
    caption: "Symbolizing Washing and Rebirth in Christ",
    image: "/images/church/Website_Photos/baptism/bap6.jpeg"
  },
  {
    id: "gal-baptism-8",
    title: "Baptism Discipleship Gathering",
    category: "baptism",
    caption: "Foundations of the Christian Walk",
    image: "/images/church/Website_Photos/baptism/bap7.jpeg"
  },
  {
    id: "gal-baptism-9",
    title: "Pastoral Blessing for New Believers",
    category: "baptism",
    caption: "Sealed by Grace for God's Kingdom",
    image: "/images/church/Website_Photos/baptism/bap8.jpeg"
  },
  {
    id: "gal-baptism-10",
    title: "New Convert Baptism Certificate Day",
    category: "baptism",
    caption: "Milestone of Faith in Tarkwa",
    image: "/images/church/Website_Photos/baptism/bap9.jpeg"
  },
  {
    id: "gal-baptism-11",
    title: "Baptismal Service Congregation",
    category: "baptism",
    caption: "Rejoicing Over Every Soul Won to Christ",
    image: "/images/church/Website_Photos/baptism/bap10.jpeg"
  },
  {
    id: "gal-baptism-12",
    title: "Holy Water Baptism Ceremony",
    category: "baptism",
    caption: "Dead to Sin and Alive in Jesus Christ",
    image: "/images/church/Website_Photos/baptism/bap11.jpeg"
  },
  {
    id: "gal-media-1",
    title: "Media Production & Sound Board",
    category: "media",
    caption: "Audio Engineering for the Sanctuary",
    image: "/images/church/Website_Photos/MEDIA/m1.jpg"
  },
  {
    id: "gal-media-2",
    title: "Sanctuary Live Streaming Setup",
    category: "media",
    caption: "Taking the Word to Online Viewers",
    image: "/images/church/Website_Photos/MEDIA/m2.jpg"
  },
  {
    id: "gal-media-3",
    title: "Audio Visual Technical Control",
    category: "media",
    caption: "Acoustic Balance & Clear Sound",
    image: "/images/church/Website_Photos/MEDIA/m3.jpg"
  },
  {
    id: "gal-media-4",
    title: "Camera Feeds & Video Recording",
    category: "media",
    caption: "Capturing Every Sermon & Song",
    image: "/images/church/Website_Photos/MEDIA/m4.jpg"
  },
  {
    id: "gal-media-5",
    title: "Projection & Scripture Display",
    category: "media",
    caption: "Displaying Hymns and Bible Verses",
    image: "/images/church/Website_Photos/MEDIA/m5.jpg"
  },
  {
    id: "gal-media-6",
    title: "Sound Engineering Desk in Service",
    category: "media",
    caption: "Professional Audio for God's House",
    image: "/images/church/Website_Photos/MEDIA/m6.jpg"
  },
  {
    id: "gal-media-7",
    title: "Sunday Broadcast Recording Unit",
    category: "media",
    caption: "Preparing Radio & Online Archives",
    image: "/images/church/Website_Photos/MEDIA/m7.jpg"
  },
  {
    id: "gal-media-8",
    title: "Media Team Technical Support",
    category: "media",
    caption: "Serving Faithfully Behind the Scenes",
    image: "/images/church/Website_Photos/MEDIA/m8.jpg"
  },
  {
    id: "gal-media-9",
    title: "Acoustic Monitoring & Levels Control",
    category: "media",
    caption: "Clear Sound Across All Speakers",
    image: "/images/church/Website_Photos/MEDIA/m9.jpg"
  },
  {
    id: "gal-media-10",
    title: "Live Media Transmission Hub",
    category: "media",
    caption: "Broadcasting Sunday Glory Across Ghana",
    image: "/images/church/Website_Photos/MEDIA/m10.jpg"
  },
]
