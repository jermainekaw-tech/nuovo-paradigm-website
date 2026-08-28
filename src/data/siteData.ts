import {
  NavItem,
  Testimonial,
  CoreValue,
  ServiceDetail,
  OtherServiceItem,
  MilestoneItem,
  CDCPackage,
} from '../types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: 'index.html' },
  { id: 'milestone', label: 'Our Milestones', href: 'milestone.html' },
  { id: 'services', label: 'Products & Services', href: 'services.html' },
  { id: 'about-us', label: 'Our Leaders', href: 'about-us.html' },
  { id: 'elite-wealth-coach', label: 'Careers', href: 'elite-wealth-coach.html' },
  { id: 'cdc2', label: 'Dive Assist', href: 'cdc2.html' },
  { id: 'other-services', label: 'General Insurance', href: 'other-services.html' },
  { id: 'contact', label: 'Contact Us', href: 'contact.html' },
];

export const FOOTER_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about-us', label: 'About Us' },
  { id: 'services', label: 'Services' },
  { id: 'other-services', label: 'Other Services' },
  { id: 'elite-wealth-coach', label: 'Elite Wealth Coach' },
  { id: 'elite-wealth-manager', label: 'Elite Wealth Manager' },
  { id: 'milestone', label: 'Milestones' },
  { id: 'cdc2', label: 'CDC Dive & Travel' },
  { id: 'psp', label: 'Payment & Bank Info' },
  { id: 'clsc', label: 'Client Servicing (Change)' },
  { id: 'clse', label: 'Client Servicing (Existing)' },
  { id: 'eventregistration', label: 'Event Registration' },
  { id: 'agent-feedback', label: 'Agent Feedback' },
  { id: 'contact', label: 'Contact' },
];

import teamStudioImg from '../assets/images/hero-1536x1025.jpg';
import eastspringAchieversImg from '../assets/images/eastspring-achievers-club-2025.jpeg';
import fastAndFuriousTeamImg from '../assets/images/fast-and-furious-team.jpeg';
import cashflow2026Img from '../assets/images/cashflow-2026.jpeg';
import badmintonTeamOutingImg from '../assets/images/badminton-team-outing.jpeg';
import teamMeetingSelfieImg from '../assets/images/team-meeting-selfie.jpeg';
import prudentialConventionCrowdImg from '../assets/images/prudential-convention-crowd.jpeg';
import breakthroughStrongerGroupImg from '../assets/images/breakthrough-stronger-group.jpeg';
import conventionHallwaySelfieImg from '../assets/images/convention-hallway-selfie.jpeg';
import centralRecognition2025Img from '../assets/images/central-recognition-2025.jpeg';

export const HERO_ROTATING_IMAGES = [
  {
    id: 'team-studio',
    url: teamStudioImg,
    fallbackUrl: '/hero-1536x1025.jpg',
    alt: 'Nuovo Paradigm Advisory & Leadership Team',
    caption: 'Nuovo Paradigm Wealth Planners',
    subtitle: 'Helping our clients achieve financial independence'
  },
  {
    id: 'eastspring-achievers-club-2025',
    url: eastspringAchieversImg,
    alt: 'Eastspring Achievers Club 2025 - Egypt Trip Qualifiers, Central Region',
    caption: 'Eastspring Achievers Club 2025',
    subtitle: 'Egypt Trip Qualifiers - Central Region',
    objectPosition: 'bottom'
  },
  {
    id: 'fast-and-furious-team',
    url: fastAndFuriousTeamImg,
    alt: 'Fast & Furious - Kick Start with APW team',
    caption: 'Fast & Furious: Kick Start with APW',
    subtitle: 'Better Every Day 2026 - Transforming Actions into Excellence'
  },
  {
    id: 'cashflow-2026',
    url: cashflow2026Img,
    alt: 'Ca$hflow 2026 event with the team',
    caption: 'Ca$hflow 2026',
    subtitle: 'Building financial literacy together'
  },
  {
    id: 'badminton-team-outing',
    url: badmintonTeamOutingImg,
    alt: 'Nuovo Paradigm team badminton outing',
    caption: 'Team Bonding',
    subtitle: 'Building camaraderie on and off the court'
  },
  {
    id: 'team-meeting-selfie',
    url: teamMeetingSelfieImg,
    alt: 'Nuovo Paradigm team meeting selfie',
    caption: 'Growing Together',
    subtitle: 'Our team at a company meeting'
  },
  {
    id: 'prudential-convention-crowd',
    url: prudentialConventionCrowdImg,
    alt: 'Nuovo Paradigm team at Prudential convention',
    caption: 'Prudential Convention',
    subtitle: 'Celebrating breakthroughs with thousands of achievers'
  },
  {
    id: 'breakthrough-stronger-group',
    url: breakthroughStrongerGroupImg,
    alt: 'Nuovo Paradigm team at Breakthrough Stronger event',
    caption: 'Breakthrough Stronger',
    subtitle: 'Celebrating milestones as one team'
  },
  {
    id: 'convention-hallway-selfie',
    url: conventionHallwaySelfieImg,
    alt: 'Nuovo Paradigm team at convention',
    caption: 'Convention Highlights',
    subtitle: 'Recognizing our top achievers'
  },
  {
    id: 'central-recognition-2025',
    url: centralRecognition2025Img,
    alt: 'Nuovo Paradigm team at Central Recognition 2025',
    caption: 'Central Recognition 2025',
    subtitle: 'Honoring excellence and achievement'
  },
];

export const ASSETS = {
  logo: '/images/nuovo-logo-white.png',
  logoWhite: '/images/nuovo-logo-white.png',
  logoDark: 'https://nuovoparadigm.com/wp-content/uploads/2020/08/nuovo-logo-min.png',
  logoFinal: '/images/nuovo-logo-white.png',
  logoHorizontal: 'https://nuovoparadigm.com/wp-content/uploads/Nuovo-Paradigm-Logo-Final-horizontal-min.png',
  cimbQr: 'https://nuovoparadigm.com/wp-content/uploads/cimb-qr.png',
  internshipBanner: 'https://nuovoparadigm.com/wp-content/uploads/Green-and-White-Modern-Internship-Program-Instagram-Post-4-1.png',
  heroHome: 'https://nuovoparadigm.com/wp-content/uploads/2020/08/hero.jpg',
  heroCoach: 'https://nuovoparadigm.com/wp-content/uploads/NP_GRP_190-min-min-scaled.jpg',
  heroCoachTeam: 'https://nuovoparadigm.com/wp-content/uploads/2020/08/HERO-copy-min-copy-min-3-scaled.jpg',
  vision: 'https://nuovoparadigm.com/wp-content/uploads/Vision-min-1.png',
  mission1: 'https://nuovoparadigm.com/wp-content/uploads/1516-min-scaled.jpg',
  mission2: 'https://nuovoparadigm.com/wp-content/uploads/1091-min-scaled.jpg',
  mission3: 'https://nuovoparadigm.com/wp-content/uploads/421-min-scaled.jpg',
  managerHero: 'https://nuovoparadigm.com/wp-content/uploads/businessman-binoculars.png',
  pruventureVector: 'https://nuovoparadigm.com/wp-content/uploads/vector-03.png',
  milestone2009: 'https://nuovoparadigm.com/wp-content/uploads/vector-04-min.png',
  milestone2011: 'https://nuovoparadigm.com/wp-content/uploads/vector-05.png',
  milestone2016: 'https://nuovoparadigm.com/wp-content/uploads/vector-06-min.png',
  milestone2019Team: 'https://nuovoparadigm.com/wp-content/uploads/team-work.png',
  milestone2019Growth: 'https://nuovoparadigm.com/wp-content/uploads/business-profit-growth-min.png',
  diveBanner1: 'https://nuovoparadigm.com/wp-content/uploads/Upper-part-of-the-page_AffiliateProgram_Pro-Diver-Annual-Liability-EUR1000000-Limit.png',
  diveBanner2: 'https://nuovoparadigm.com/wp-content/uploads/Upper-part-of-the-page_2_PRO-DIVER-ANNUAL-LIABILITY-EUR3750000.jpg',
  diveBanner3: 'https://nuovoparadigm.com/wp-content/uploads/Upper-part-of-the-page_SCUBAMEDIC-CLASSIC-IDEC-INTERNATIONAL-DIVING-COVER.jpg',
};

export const HOME_TEAM_MEMBERS = [
  { id: '1', name: 'Jackie Tan', image: 'https://nuovoparadigm.com/wp-content/uploads/JT-HP.jpg', role: 'Managing Director' },
  { id: '2', name: 'Bobby Tan', image: 'https://nuovoparadigm.com/wp-content/uploads/BT-home-apge.jpg', role: 'Agency Leader' },
  { id: '3', name: 'Audrey', image: 'https://nuovoparadigm.com/wp-content/uploads/Audrey-HP.jpg', role: 'Elite Planner' },
  { id: '4', name: 'Ee Kah Teik', image: 'https://nuovoparadigm.com/wp-content/uploads/EE-HP.jpg', role: 'Wealth Planner' },
  { id: '5', name: 'Sue-Ann', image: 'https://nuovoparadigm.com/wp-content/uploads/Sue-Ann-HP.jpg', role: 'Wealth Planner' },
  { id: '6', name: 'KJ', image: 'https://nuovoparadigm.com/wp-content/uploads/KJ-HP.jpg', role: 'Wealth Planner' },
  { id: '7', name: 'QL', image: 'https://nuovoparadigm.com/wp-content/uploads/QL-HP.jpg', role: 'Wealth Planner' },
  { id: '8', name: 'Raj', image: 'https://nuovoparadigm.com/wp-content/uploads/Raj-HP.jpg', role: 'Wealth Planner' },
  { id: '9', name: 'JF', image: 'https://nuovoparadigm.com/wp-content/uploads/JF-HP.jpg', role: 'Wealth Planner' },
];

export const HOME_SLIDER_SECTIONS = [
  'https://nuovoparadigm.com/wp-content/uploads/1-1-1.png',
  'https://nuovoparadigm.com/wp-content/uploads/2-1.jpg',
  'https://nuovoparadigm.com/wp-content/uploads/3-1-1.png',
  'https://nuovoparadigm.com/wp-content/uploads/3-1.png',
  'https://nuovoparadigm.com/wp-content/uploads/5-1.png',
  'https://nuovoparadigm.com/wp-content/uploads/6-1.png',
  'https://nuovoparadigm.com/wp-content/uploads/7-1.png',
  'https://nuovoparadigm.com/wp-content/uploads/8-1.png',
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'sean-yap',
    name: 'Sean Yap',
    role: 'Former Deputy General Manager',
    avatarBg: 'bg-blue-600',
    image: 'https://nuovoparadigm.com/wp-content/uploads/Yap-Yik-Yee-Half-Body-min-scaled.jpg',
    fallbackImage: 'https://nuovoparadigm.com/wp-content/uploads/2020/08/1591640486652_72893700_2547812488643394_510958528194674688_o.jpg',
    quote: `I was deputy general manager in a company for almost 10 years and have a decent pay! But after 10 years, working day and night, I thought to myself "this is not going to be the way, otherwise my whole life will be working like a cow." That's when I joined this industry and this company.

Ever since I started, I’ve been qualifying for the company’s incentive trip every year. I believe these successes can only be achieved because of the guidance and coaching I received from the leaders throughout the years. The people here gives me a sense of belonging, I can always share my struggles and challenges with my leaders and able talk about anything. When we have set our goals, the leaders will share their experience on how to reach it faster and effectively. This is a young company and many things are done professionally unlike many 'older fashioned' and traditional companies out there.`,
  },
  {
    id: 'ee-kah-teik',
    name: 'Ee Kah Teik',
    role: 'Former Quality Manager / Engineer',
    avatarBg: 'bg-emerald-600',
    image: 'https://nuovoparadigm.com/wp-content/uploads/MADyXBC4mOQ-1580358389983-min.png',
    fallbackImage: 'https://nuovoparadigm.com/wp-content/uploads/EE-HP.jpg',
    quote: `I came to a bottleneck in my career in a company that I’ve worked with for 4 years. Got promoted from an engineer to a quality manager and enjoyed the extra amount of good salary only at 27 years old. But I remained the same pay check for 3 years and there wasn't any more room for growth. Although I was grateful for this job and the opportunity, but I had no work life balance and this wasn't the life I desired.

Because of the training structure and the leader’s guidance in this company, I was able to hit my first goal in 6 months even working here part-time, that is RM1,000 per month. I only had weekends to work on this career when I started, but the leaders were helpful and generous to accommodate to my time. I thought that if I focus on this full-time, I’d be able to triple my income. True enough, my production tripled in 6 months time after I turned full-time. Unlike other companies, who I feel are more aggressive and like to “show off” the materialistic things, this company has a culture of humility and work their way up to gain trusts with their clients.`,
  },
  {
    id: 'sivakumar',
    name: 'Sivakumar',
    role: '20-Year Corporate Veteran (Astro™ Credit Risk)',
    avatarBg: 'bg-indigo-600',
    image: 'https://nuovoparadigm.com/wp-content/uploads/siva.jpeg',
    quote: `Believed it or not, I’ve been working in Astro™ for almost 20 years in the credit risk management department. Every year, working 9 to 5, making sure KPIs are hit. And then the next year, it will reset. It’s like an ongoing thing that will go on forever. That’s when I thought that the wealth planning industry was appealing because of the work-time flexibility coupled together with the unlimited income to earn.

When I started out, my “Iron-Lady” leader almost never said no to me. At anytime when I had some questions or problems, I would call them and they’ll immediately assist me even meeting my clients together. As a result, in my third month in this company, I’ve actually hit my next 3 months’ target. All achieved within a month. The people here are very helpful and cooperative when it comes to sharing knowledge. Even the leaders who are busy, they will make time and will always share their experience.`,
  },
  {
    id: 'janice',
    name: 'Janice',
    role: 'Former Corporate Sales Executive',
    avatarBg: 'bg-rose-600',
    image: 'https://nuovoparadigm.com/wp-content/uploads/Janice-31-of-41-min-scaled.jpg',
    quote: `I was in sales, selling photocopier machines for close to 3 years.

Most of my appointments usually end late at night, yet I can be assured that even when I reach out to my leaders, they will attend to my queries. Because of their support, in my 2nd month I achieved the highest total production count among the year 1 and 2 planners. I really like how this company focused on the approach of ‘need-based’ selling. The whole process and culture of the way Nuovo Paradigm treats their clients really appealed and resonated with me. All of us will have the confidence of giving value to our clients and not just ‘being an agent’ for the sake of selling insurance.`,
  },
];

export const CORE_VALUES: CoreValue[] = [
  {
    letter: 'P',
    title: 'Professional Advice',
    description: 'Providing genuine, need-based professional advice with highest fiduciary standards to our clients.',
    iconName: 'ShieldCheck',
  },
  {
    letter: 'R',
    title: 'Responsible & Accountable',
    description: 'Holding ourselves completely responsible and accountable to our own actions, commitments, and client promises.',
    iconName: 'Award',
  },
  {
    letter: 'I',
    title: 'Improve Continuously',
    description: 'Adapting continuously to the new and ever-changing financial landscape and personal mastery.',
    iconName: 'TrendingUp',
  },
  {
    letter: 'D',
    title: 'Determined Attitude',
    description: 'Maintaining a persistent, determined mindset when striving to achieve personal and collective client goals.',
    iconName: 'Target',
  },
  {
    letter: 'E',
    title: 'Excellent Execution',
    description: 'Executing comprehensive plans flawlessly to ensure all financial dreams and family legacies materialize.',
    iconName: 'CheckCircle2',
  },
];

export const CORE_SERVICES: ServiceDetail[] = [
  {
    id: 'insurance-takaful',
    title: 'Insurance and Takaful',
    tagline: 'Comprehensive family protection & income safeguarding',
    bgTheme: 'from-blue-900 to-indigo-900',
    icon: 'Shield',
    iconImage: 'https://nuovoparadigm.com/wp-content/uploads/Insurance-and-takaful.png',
    sectionImage: 'https://nuovoparadigm.com/wp-content/uploads/service-section-1-img.png',
    description: [
      'Protect against the loss of an income source or primary income provider in the family.',
      'Accumulate capital strategically for key financial milestones like children’s tertiary education and property acquisition.',
      'Create an enduring financial legacy and multi-generational wealth buffer for your family.',
    ],
    features: [
      'Income Replacement Modeling',
      'Critical Illness & Medical Coverage',
      'Shariah-Compliant Takaful Options',
      'Multi-tier Disability Protection',
    ],
  },
  {
    id: 'retirement-planning',
    title: 'Retirement Planning',
    tagline: 'Build financial freedom with worry-free passive cashflows',
    bgTheme: 'from-slate-900 to-sky-950',
    icon: 'Palmtree',
    iconImage: 'https://nuovoparadigm.com/wp-content/uploads/Retirement.png',
    sectionImage: 'https://nuovoparadigm.com/wp-content/uploads/service-section-2-img.png',
    description: [
      'Identify the exact capital requirements, timelines, and inflation buffers needed to retire comfortably.',
      'Minimize the impact, consequences, and market risks that could disrupt your retirement trajectory.',
      'Structured wealth preservation strategies designed to ensure your retirement capital outlasts you.',
    ],
    features: [
      'Retirement Gap Analysis',
      'Post-Retirement Cash Flow Engineering',
      'Longevity & Inflation Hedging',
      'Passive Income Asset Allocation',
    ],
  },
  {
    id: 'education-planning',
    title: 'Education Planning',
    tagline: 'Securing quality education and bright futures for your children',
    bgTheme: 'from-cyan-900 to-blue-950',
    icon: 'GraduationCap',
    iconImage: 'https://nuovoparadigm.com/wp-content/uploads/Education.png',
    sectionImage: 'https://nuovoparadigm.com/wp-content/uploads/service-section-3-img-min.png',
    description: [
      'Securing your dream to provide top-tier local or overseas higher education for your children without financial strain.',
      'Safeguard and compound the necessary capital early through disciplined, high-performing savings vehicles.',
      'Ensure uninterrupted education funding even if unexpected life events or disability happen to parents.',
    ],
    features: [
      'University Tuition & Cost Forecasting',
      'Guaranteed Education Endowment Pools',
      'Payor Benefit Protection',
      'Global Currency & Tuition Inflation Buffers',
    ],
  },
  {
    id: 'estate-planning',
    title: 'Estate Planning',
    tagline: 'Preserving, distributing, and stewarding family wealth smoothly',
    bgTheme: 'from-slate-900 to-slate-800',
    icon: 'FileText',
    iconImage: 'https://nuovoparadigm.com/wp-content/uploads/Estate-planning.png',
    sectionImage: 'https://nuovoparadigm.com/wp-content/uploads/service-section-4-img-1-min-1.png',
    description: [
      'Plan towards the exact distribution of assets and properties you wish to pass to the next generation.',
      'Writing legally binding Wills and Trusts to prevent lengthy probate delays, frozen assets, or family disputes.',
      'Creating structured asset preservation vehicles so your wealth remains protected from external creditors.',
    ],
    features: [
      'Will Writing & Custodianship',
      'Revocable & Irrevocable Private Trusts',
      'Probate Acceleration Framework',
      'Cross-Border Asset Structuring',
    ],
  },
  {
    id: 'investment-planning',
    title: 'Investment Planning',
    tagline: 'Disciplined wealth accumulation tailored to your risk profile',
    bgTheme: 'from-blue-950 to-blue-800',
    icon: 'TrendingUp',
    iconImage: 'https://nuovoparadigm.com/wp-content/uploads/Investment.png',
    sectionImage: 'https://nuovoparadigm.com/wp-content/uploads/vector-02-1.png',
    description: [
      'Identify your customized financial goals and work systematically toward them together with seasoned advisors.',
      'Thoroughly assess your risk appetite, horizon, liquidity needs, and time allowance before prescribing any instrument.',
      'Advise and monitor an optimal mix of top-tier unit trusts, index funds, and diversified growth assets.',
    ],
    features: [
      'Risk Appetite & Horizon Profiling',
      'Diversified Asset Allocation',
      'Dollar-Cost Averaging Frameworks',
      'Periodic Portfolio Rebalancing',
    ],
  },
  {
    id: 'islamic-wealth-planning',
    title: 'Islamic Wealth Planning',
    tagline: 'Shariah-compliant financial harmony and estate stewardship',
    bgTheme: 'from-emerald-950 to-teal-900',
    icon: 'Compass',
    iconImage: 'https://nuovoparadigm.com/wp-content/uploads/Islamic-Wealth.png',
    sectionImage: 'https://nuovoparadigm.com/wp-content/uploads/service-section-5-img-min-1.png',
    description: [
      'Holistic Shariah-compliant advisory combining Family Takaful, ethical investments, and Islamic estate planning.',
      'Proactively advise Muslim individuals and business owners on structuring their wealth in adherence to Islamic jurisprudence.',
      'Implement "Hibah" (conditional gift) mechanisms to care for immediate loved ones and ensure debt clearance prior to estate execution.',
    ],
    features: [
      'Hibah Structuring & Execution',
      'Wasiyyah (Islamic Will Writing)',
      'Waqf & Zakat Optimization',
      'Faraid Consultation & As-Salihin Partnership',
    ],
  },
];

export const OTHER_SERVICES: OtherServiceItem[] = [
  {
    id: 'medical-life',
    title: 'MEDICAL & LIFE',
    shortDesc: 'Comprehensive life protection and private hospital coverage for you and family.',
    category: 'Protection',
    iconImg: 'Shield',
    iconWhite: 'https://nuovoparadigm.com/wp-content/uploads/Medical-Life-white.png',
    iconColor: 'https://nuovoparadigm.com/wp-content/uploads/Medical-and-Life.png',
    details: {
      heading: 'Medical & Life Insurance',
      subheading: 'Financial Security in Times of Hardship',
      body: [
        'Buying Life Insurance for you and your loved ones helps provide essential financial security in times of hardship. The lump-sum benefit from your policy is paid directly to your loved ones when you pass away or to you should you suffer total and permanent disability.',
        'Medical Insurance is designed to cover the escalating costs of private medical treatments, hospitalization, surgical procedures, and critical therapies. It ensures you have zero financial hesitation when seeking immediate medical attention during emergencies.',
      ],
      taxBenefit: 'You can claim income tax relief of up to RM6,000 to RM8,000 per year for life and medical policies (inclusive of EPF/PRS/pension scheme contributions).',
      highlights: [
        'High annual and lifetime medical limits',
        'Guaranteed hassle-free cashless hospital admission',
        'Comprehensive cancer & kidney dialysis outpatient coverage',
        'Worldwide emergency assistance',
      ],
      actionUrl: '#contact',
      actionLabel: 'Inquire About Medical & Life',
    },
  },
  {
    id: 'motor-insurance',
    title: 'MOTOR INSURANCE',
    shortDesc: 'Comprehensive coverage for cars, motorcycles, and commercial vehicles.',
    category: 'General Insurance',
    iconImg: 'Car',
    iconWhite: 'https://nuovoparadigm.com/wp-content/uploads/Motor-Insurance-white.png',
    iconColor: 'https://nuovoparadigm.com/wp-content/uploads/Motor-Insurance.png',
    details: {
      heading: 'Motor Vehicle Insurance',
      subheading: 'Total On-Road Peace of Mind',
      body: [
        'You need Motor Insurance when you own a private or commercial vehicle. Motor insurance shields your vehicle—whether a passenger car, motorcycle, or commercial fleet—against accidental damage, fire, loss, and third-party liabilities.',
        'We provide fast road tax renewal assistance, complimentary 24/7 nationwide breakdown towing, and fast-track claim liaison.',
      ],
      highlights: [
        'Comprehensive 1st Party & 3rd Party Fire/Theft options',
        'Windscreen, flood & special perils add-on riders',
        '24/7 unlimited distance emergency towing assistance',
        'Instant NCD transfer & digital renewal',
      ],
      actionUrl: '#contact',
      actionLabel: 'Get Instant Motor Quote',
    },
  },
  {
    id: 'fire-insurance',
    title: 'FIRE INSURANCE',
    shortDesc: 'Safeguard your most valuable properties, factories, and residential buildings.',
    category: 'Property Protection',
    iconImg: 'Flame',
    iconWhite: 'https://nuovoparadigm.com/wp-content/uploads/Fire-Insurance-3@2x.png',
    iconColor: 'https://nuovoparadigm.com/wp-content/uploads/Fire-insurance.png',
    details: {
      heading: 'Fire & Commercial Property Insurance',
      subheading: 'Protect Your Highest Value Tangible Assets',
      body: [
        'Fire Insurance (Homeowner & Commercial Property) is one of the most critical risk management policies. Your business premises, factories, and residential properties represent substantial capital investments.',
        'Our policies provide robust indemnification against loss or damage to buildings, renovations, stock-in-trade, and plant/machinery caused by fire, lightning, explosion, flood, burst pipes, and civil commotion.',
      ],
      highlights: [
        'Houseowner & Householder comprehensive packages',
        'Commercial fire & business interruption consequential loss',
        'Burst water tanks, flood, landslide, and impact damage coverage',
        'Accredited surveyor inspection support',
      ],
      actionUrl: '#contact',
      actionLabel: 'Request Property Assessment',
    },
  },
  {
    id: 'travel-insurance',
    title: 'TRAVEL INSURANCE',
    shortDesc: 'Worldwide medical, baggage delay, and cancellation cover for holidays and business.',
    category: 'Travel & Lifestyle',
    iconImg: 'Plane',
    iconWhite: 'https://nuovoparadigm.com/wp-content/uploads/Travel-white.png',
    iconColor: 'https://nuovoparadigm.com/wp-content/uploads/Travel-insurance.png',
    details: {
      heading: 'International & Domestic Travel Insurance',
      subheading: 'Worry-Free Global Exploration',
      body: [
        'Travel insurance provides comprehensive protection tailored to the exact duration of your domestic or worldwide journey. We offer single-trip policies as well as high-convenience annual multi-trip passes for frequent business travelers.',
        'Backed by Generali and premier worldwide assistance partners, travelers receive immediate guarantee of payment for emergency overseas medical care, flight cancellations, luggage theft, and repatriation.',
      ],
      highlights: [
        'Personal accident & overseas medical expense reimbursement',
        'Trip cancellation, curtailment, and flight delay allowance',
        'Lost luggage, travel documents & personal money indemnification',
        'COVID-19 pandemic medical extension option',
      ],
      actionUrl: '#contact',
      actionLabel: 'Buy Travel Coverage',
    },
  },
  {
    id: 'takaful-as-salihin',
    title: 'TAKAFUL & AS-SALIHIN',
    shortDesc: 'Islamic cooperative insurance and estate administration according to Syari’ah.',
    category: 'Islamic Wealth',
    iconImg: 'Moon',
    iconWhite: 'https://nuovoparadigm.com/wp-content/uploads/Takaful-white.png',
    iconColor: 'https://nuovoparadigm.com/wp-content/uploads/Takaful.png',
    details: {
      heading: 'Takaful & as-Salihin Islamic Estate Planning',
      subheading: 'Mutual Assistance (Ta’awun) & Syari’ah Compliance',
      body: [
        'Takaful is Islamic mutual insurance founded on principles of brotherhood, shared responsibility, and mutual protection (Ta’awun) in strict accordance with Islamic religious law.',
        'In partnership with as-Salihin Trustee Berhad, we provide Muslim clients with specialized estate planning, Wasiyyah (Islamic Will), Hibah declarations, and Harta Sepencarian agreements to prevent costly estate gridlocks.',
      ],
      highlights: [
        '100% Shariah Advisory Council endorsed plans',
        'Seamless Hibah declaration to shield vulnerable dependents',
        'Clear Faraid distribution and professional trustee appointment',
        'Wasiyyah drafting and secure central vault storage',
      ],
      actionUrl: '#contact',
      actionLabel: 'Schedule Islamic Estate Consultation',
    },
  },
  {
    id: 'will-trust',
    title: 'WILL & TRUST',
    shortDesc: 'Legal will writing, private trust setups, and seamless wealth transfer.',
    category: 'Estate Planning',
    iconImg: 'Scroll',
    iconWhite: 'https://nuovoparadigm.com/wp-content/uploads/Will-and-trust-white.png',
    iconColor: 'https://nuovoparadigm.com/wp-content/uploads/Will-and-trust.png',
    details: {
      heading: 'Will Writing & Private Trust Administration',
      subheading: 'Eliminate Disputes & Protect Beneficiaries',
      body: [
        'Without a valid Will, your estate can become a burden rather than a blessing. Intestate distribution in Malaysia follows the Distribution Act 1958, often requiring letters of administration, two sureties, and 2 to 5 years of legal bureaucracy.',
        'Setting up a private Living or Insurance Trust allows immediate liquidity release to your named family members within days, completely bypassing probate court procedures and creditor claims.',
      ],
      highlights: [
        'Custom Will drafting by licensed estate specialists',
        'Insurance & Education Trust setups for minor children',
        'Spendthrift protection and phased milestone distributions',
        'Asset shielding against bankruptcy and external claims',
      ],
      actionUrl: '#contact',
      actionLabel: 'Draft Your Will & Trust',
    },
  },
  {
    id: 'unit-trust',
    title: 'UNIT TRUST',
    shortDesc: 'Professionally managed fund portfolios across equity, fixed income, and global markets.',
    category: 'Investments',
    iconImg: 'TrendingUp',
    iconWhite: 'https://nuovoparadigm.com/wp-content/uploads/Unit-trust-white.png',
    iconColor: 'https://nuovoparadigm.com/wp-content/uploads/Unit-Trust.png',
    details: {
      heading: 'Unit Trust & Mutual Funds',
      subheading: 'Institutional Portfolio Growth for Everyday Investors',
      body: [
        'A Unit Trust is a collective investment scheme where funds from multiple investors are pooled and managed by licensed fund managers across a diversified basket of equities, bonds, sukuk, and money markets.',
        'We help investors align their capital with funds that match their risk tolerance, whether conservative capital preservation, steady dividend yield, or aggressive global tech growth.',
      ],
      highlights: [
        'Access to top Malaysian and global offshore investment funds',
        'EPF Members Investment Scheme (EPF-MIS) eligibility',
        'Automated monthly Dollar-Cost-Averaging (DCA)',
        'Quarterly portfolio reviews and active rebalancing',
      ],
      actionUrl: '#contact',
      actionLabel: 'Explore Investment Portfolios',
    },
  },
  {
    id: 'dive-insurance',
    title: 'DIVE INSURANCE (CDC)',
    shortDesc: 'Comprehensive Dive Coverage combining dive emergencies, chamber costs, and travel.',
    category: 'Specialized Risk',
    iconImg: 'Waves',
    iconWhite: 'https://nuovoparadigm.com/wp-content/uploads/Dive-Insurance-white.png',
    iconColor: 'https://nuovoparadigm.com/wp-content/uploads/Diving-Coverage.png',
    details: {
      heading: 'Comprehensive Dive Coverage (CDC)',
      subheading: 'World-Class Hyperbaric & Dive Accident Cover',
      body: [
        'Nuovo Paradigm brings you the Comprehensive Dive Coverage (CDC) program, bundling international travel protection with dedicated hyperbaric decompression chamber treatment and emergency medical air evacuation.',
        'CDC is underwritten by Generali and partnered with DiveAssist and Northcott Global Solutions (NGS) to ensure 24/7 medical evacuation and emergency support worldwide.',
      ],
      highlights: [
        'Unlimited or EUR 1,000,000+ hyperbaric chamber treatment limit',
        '24/7 NGS global search and medical air evacuation',
        'Combined travel delays, lost dive gear & emergency baggage',
        'Special Pro-Diver and Dive Instructor liability extensions',
      ],
      actionUrl: 'cdc2.html',
      actionLabel: 'View CDC Packages & Pricing',
    },
  },
];

export const MILESTONES: MilestoneItem[] = [
  {
    year: '2009',
    title: 'The Inception of Nuovo Paradigm',
    subtitle: 'Jackie Tan & Bobby Tan establish the foundational system',
    description:
      'Nuovo Paradigm was founded under the leadership of Managing Director Jackie Tan, bringing over 30 years of industry leadership and best practices. Together with Bobby Tan, they built an initial tight-knit team of 8 planners aiming for the 1 Million Sales Milestone.',
    icon: 'Sparkles',
    image: 'https://nuovoparadigm.com/wp-content/uploads/vector-04-min.png',
    stats: '8 Core Members • 1M Target',
  },
  {
    year: '2011',
    title: 'Official Corporate Agency Recognition',
    subtitle: 'Accredited by Prudential Assurance Malaysia',
    description:
      'Nuovo Paradigm was officially registered as an accredited corporate agency recognised by Prudential. That year, the team successfully hit and exceeded 1 Million in audited sales production.',
    icon: 'Building2',
    image: 'https://nuovoparadigm.com/wp-content/uploads/vector-05.png',
    stats: '1.0M+ Annual Production',
  },
  {
    year: '2016',
    title: 'The 2 Million Production Milestone',
    subtitle: 'Systematic scaling of elite financial planners',
    description:
      'With structured onboarding systems and mentorship frameworks, the agency surpassed the 2 Million sales target, establishing itself as a premier breeding ground for young leaders.',
    icon: 'TrendingUp',
    image: 'https://nuovoparadigm.com/wp-content/uploads/vector-06-min.png',
    stats: '2.0M+ Sales Volume',
  },
  {
    year: '2019',
    title: '3.7 Million Benchmark & Industry Acclaim',
    subtitle: 'Grew to 26 top quality producers and industry leadership awards',
    description:
      'The agency generated 3.7 Million in annual production, expanding to 26 full-time elite planners. Nuovo Paradigm was recognized by the industry to have established a proven system to build quality producers.',
    icon: 'Trophy',
    image: 'https://nuovoparadigm.com/wp-content/uploads/team-work.png',
    secondImage: 'https://nuovoparadigm.com/wp-content/uploads/business-profit-growth-min.png',
    stats: '3.7M Production • 26 Top Planners',
    highlight: true,
  },
];

export const CDC_PACKAGES: CDCPackage[] = [
  {
    id: 'dive-travel-int1',
    name: "Dive & Travel (Int'-1) + Pandemic Cover",
    annualMYR: 813,
    weeklyMYR: 238,
    description:
      'Covers Malaysia, Australia, Brunei, Cambodia, China, HK, Macau, India, Indonesia, Japan, South Korea, Laos, Myanmar, NZ, Pakistan, Philippines, Singapore, Sri Lanka, Taiwan, Thailand & Vietnam.',
    popular: true,
  },
  {
    id: 'dive-travel-int2',
    name: "Dive & Travel (Int'-2) + Pandemic Cover",
    annualMYR: 1027,
    weeklyMYR: 304,
    description:
      'Worldwide coverage (excluding USA, Canada, Iran, Syria, Cuba, North Korea, Russia, Ukraine). Covers full global dive destinations.',
  },
  {
    id: 'dive-only',
    name: 'Dive ONLY (No Travel)',
    annualMYR: 361,
    weeklyMYR: 149,
    description:
      'Dedicated hyperbaric chamber treatment, search & rescue, and dive accident medical evacuation worldwide.',
  },
  {
    id: 'domestic-dive-travel',
    name: 'Domestic Dive & Travel (5D Travel, 3D Dive)',
    annualMYR: 0,
    weeklyMYR: 171,
    description:
      'Ideal for local Malaysian dive trips (Sipadan, Tioman, Redang, Perhentian, Tenggol). Short-term domestic trip protection.',
  },
];

export const CONTACT_INFO = {
  companyName: 'Nuovo Paradigm Sdn Bhd',
  regNumber: '779914-D',
  addressLine1: 'Unit No: 1017, Block A, (Lobby 5), 10th Floor, Damansara Intan',
  addressLine2: 'No.1, Jln SS20/27, 47400 Petaling Jaya, Selangor Darul Ehsan, Malaysia',
  phone: '+60 12-792 8285',
  email: 'contact@nuovoparadigm.com',
  cdcEmail: 'cdc@nuovoparadigm.com',
  internshipEmail: 'Fiza@nuovoparadigm.com',
  hours: 'Monday - Friday, 9:00 AM to 6:00 PM (MYT)',
  bankName: 'CIMB BANK MALAYSIA',
  bankAccountName: '1 Stop Capital SDN BHD',
  bankAccountNumber: '8007222029',
  emergencyMedicalAssistance: {
    provider: 'Northcott Global Solutions Ltd (NGS)',
    phone: '+44 (0)207 183 8910',
    website: 'https://diveassist.org/contact/',
  },
  generaliHotline: '+603 2142 0399',
};
