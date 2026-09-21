import {
  NavItem,
  Testimonial,
  CoreValue,
  ServiceDetail,
  OtherServiceItem,
  MilestoneItem,
  CDCPackage,
} from '../types';
import jackieTanHeadshotImg from '../assets/images/jackie-tan-headshot.png';
import bobbyTanHeadshotImg from '../assets/images/bobby-tan-headshot.png';
import janiceFoonHeadshotImg from '../assets/images/janice-foon-headshot.jpg';
import audreyLohHeadshotImg from '../assets/images/audrey-loh-headshot.jpg';
import rajHeadshotImg from '../assets/images/raj-headshot.jpg';
import eeKahTeikHeadshotImg from '../assets/images/ee-kah-teik-headshot.webp';

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
import coachHeroKaraokeGroupImg from '../assets/images/coach-hero-karaoke-group.jpg';
import coachHeroOfficeGroupImg from '../assets/images/coach-hero-office-group.jpg';
import coachHeroInternshipBatchImg from '../assets/images/coach-hero-internship-batch.jpg';
import coachHeroYearKickoffImg from '../assets/images/coach-hero-year-kickoff.jpg';
import coachHeroOfficeSelfieImg from '../assets/images/coach-hero-office-selfie.jpg';
import coachHeroCardgameDuoImg from '../assets/images/coach-hero-cardgame-duo.jpg';
import coachHeroCashflowGameImg from '../assets/images/coach-hero-cashflow-game.jpg';

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

export const COACH_HERO_ROTATING_IMAGES = [
  {
    id: 'coach-hero-karaoke-group',
    url: coachHeroKaraokeGroupImg,
    alt: 'Nuovo Paradigm team celebrating together',
    caption: 'Celebrating Together',
    subtitle: 'Our team knows how to celebrate every win'
  },
  {
    id: 'coach-hero-office-group',
    url: coachHeroOfficeGroupImg,
    alt: 'Nuovo Paradigm team at the office',
    caption: 'One Big Family',
    subtitle: 'A close-knit team at our Damansara Intan office'
  },
  {
    id: 'coach-hero-internship-batch',
    url: coachHeroInternshipBatchImg,
    alt: 'Nuovo Paradigm interns and associates group photo',
    caption: 'Growing Talent',
    subtitle: 'Welcoming our newest associates and interns'
  },
  {
    id: 'coach-hero-year-kickoff',
    url: coachHeroYearKickoffImg,
    alt: 'Nuovo Paradigm team at Prudential year business kick-off 2026',
    caption: 'Business Kick-Off 2026',
    subtitle: 'Kicking off the new year stronger, together'
  },
  {
    id: 'coach-hero-office-selfie',
    url: coachHeroOfficeSelfieImg,
    alt: 'Nuovo Paradigm team office selfie around a table',
    caption: 'Office Moments',
    subtitle: 'A fun, close-knit team at the office'
  },
  {
    id: 'coach-hero-cardgame-duo',
    url: coachHeroCardgameDuoImg,
    alt: 'Nuovo Paradigm associates playing a training card game',
    caption: 'Learning by Doing',
    subtitle: 'Hands-on training that makes wealth planning fun'
  },
  {
    id: 'coach-hero-cashflow-game',
    url: coachHeroCashflowGameImg,
    alt: 'Nuovo Paradigm associates playing the Cashflow board game',
    caption: 'Mastering Cashflow',
    subtitle: 'Practical financial literacy training in action'
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

export const OUR_LEADERS = [
  { id: 'jackie-tan', name: 'Jackie Tan', image: jackieTanHeadshotImg, role: 'Founder & Wealth Director', imageObjectPosition: 'center 8%' },
  { id: 'bobby-tan', name: 'Bobby Tan', image: bobbyTanHeadshotImg, role: 'Wealth Director', imageObjectPosition: 'center 3%' },
  { id: 'janice-foon', name: 'Janice Foon', image: janiceFoonHeadshotImg, role: 'Wealth Director', imageObjectPosition: 'center 10%' },
  { id: 'audrey-loh', name: 'Audrey Loh', image: audreyLohHeadshotImg, role: '', imageObjectPosition: 'center 10%' },
  { id: 'raj', name: 'Raj Paneerselvan', image: rajHeadshotImg, role: '', imageObjectPosition: 'center 10%' },
  { id: 'ee-kah-teik', name: 'Ee Kah Teik', image: eeKahTeikHeadshotImg, role: '', imageObjectPosition: 'center 8%' },
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
    id: 'jackie-tan',
    name: 'Jackie Tan',
    role: 'Founder & Wealth Director, Nuovo Paradigm',
    avatarBg: 'bg-blue-600',
    image: jackieTanHeadshotImg,
    imageObjectPosition: 'center 8%',
    quote: `Jackie holds a Master of Science in Chemistry from the USA and began her career in technical sales, including roles with Roche and Mettler Toledo, before entering the wealth planning industry.

With 27 years of Starclub recognition and 8 years of MDRT, Jackie is a CHFP, CMFA and RFP, and has also been a speaker for MDRT Day Malaysia and BB conference.

As the Founder of Nuovo Paradigm and 1 Stop Capitals, her passion is to build a professional platform where entrepreneurs can grow, collaborate and help more people achieve their financial goals.

Today, Jackie’s focus is on building a sustainable organisation, developing future leaders and creating greater freedom through wealth and travel.

“Whatever you experience, this shall pass too. Be bold and just do it!”`,
  },
  {
    id: 'bobby-tan',
    name: 'Bobby Tan',
    role: 'Wealth Director, Nuovo Paradigm',
    avatarBg: 'bg-emerald-600',
    image: bobbyTanHeadshotImg,
    imageObjectPosition: 'center 3%',
    quote: `Bobby Tan holds a Bachelor of Mechatronic Engineering from Monash University and began his career as a Project Engineer before moving into the wealth industry, where he has built 17 years of experience.

A Certified Financial Planner, Bobby has achieved Starclub recognition throughout his journey and became the first TOT Unit Manager in Malaysia. His achievements include 1 MDRT, 4 COT and 1 TOT, as well as a single case with an annual premium of RM1.147 million.

Today, Bobby is passionate about building and coaching a strong team of wealth planners to help more individuals and families plan their finances correctly.

His vision is to build a team that can reach 10,000 people a year, making a meaningful difference in their financial lives.

“Our vision is to build a team that helps more people build their financial shield, so they are better prepared for whatever life brings.”`,
  },
  {
    id: 'janice-foon',
    name: 'Janice Foon',
    role: 'Wealth Director, Nuovo Paradigm',
    avatarBg: 'bg-indigo-600',
    image: janiceFoonHeadshotImg,
    quote: `Janice Foon holds a Bachelor of Commerce in Marketing & Public Relations from the University of Wollongong, Australia. She joined Nuovo Paradigm in 2020 after a successful corporate career with a Japanese company.

Within just 6 months, Janice achieved MDRT and Starclub, and was recognised as Top Rookie 2020. She was promoted to Unit Manager 1 in 2022 and has since grown into a passionate wealth leader and coach.

Once an anti-insurance advocate, Janice’s own journey changed her perspective and strengthened her belief in the importance of proper financial planning.

Today, her focus is on building a strong team, developing people to reach their potential and creating greater financial freedom, while giving back to the community.

“I want to help people plan better, grow stronger and achieve their biggest potential.”`,
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
  {
    id: 'general-insurance',
    title: 'General Insurance',
    tagline: 'Complete protection for your vehicles, property, and travels',
    bgTheme: 'from-slate-900 to-blue-950',
    icon: 'Car',
    iconImage: 'https://nuovoparadigm.com/wp-content/uploads/Motor-Insurance.png',
    description: [
      'Shield your vehicles, homes, and business premises against accidents, fire, and unforeseen disasters.',
      'Comprehensive worldwide travel protection for holidays, business trips, and frequent travelers.',
      'Fast, hassle-free claims support backed by trusted underwriters including Generali and other insurers.',
    ],
    features: [
      'Motor Insurance (1st & 3rd Party)',
      'Fire & Property Insurance',
      'International Travel Insurance',
      'Takaful & Shariah-Compliant Options',
    ],
  },
  {
    id: 'will-and-trust',
    title: 'Will & Trust',
    tagline: 'Legally secure your legacy and protect your loved ones from disputes',
    bgTheme: 'from-slate-800 to-slate-950',
    icon: 'Scroll',
    iconImage: 'https://nuovoparadigm.com/wp-content/uploads/Will-and-trust.png',
    description: [
      'Draft a legally binding Will to ensure your estate is distributed exactly as you intend, avoiding lengthy probate.',
      'Set up Private and Insurance Trusts for immediate liquidity to your family, bypassing frozen asset delays.',
      'Protect vulnerable beneficiaries such as minor children and elderly parents with structured, phased distributions.',
    ],
    features: [
      'Will Writing & Custodianship',
      'Private & Insurance Trust Setup',
      'Guardian & Trustee Appointment',
      'Asset Protection from Creditors',
    ],
  },
  {
    id: 'dive-coverage',
    title: 'Dive Insurance',
    tagline: 'World-class hyperbaric and dive accident coverage for divers',
    bgTheme: 'from-cyan-950 to-blue-900',
    icon: 'Waves',
    iconImage: 'https://nuovoparadigm.com/wp-content/uploads/Diving-Coverage.png',
    description: [
      'Comprehensive Dive Coverage (CDC) combining international travel protection with dedicated hyperbaric chamber treatment.',
      '24/7 emergency medical air evacuation for diving accidents, underwritten by Generali and DiveAssist.',
      'Specialized protection for recreational divers, Pro-Divers, and Dive Instructors alike.',
    ],
    features: [
      'Hyperbaric Chamber Treatment',
      '24/7 Medical Air Evacuation',
      'Travel & Dive Gear Protection',
      'Pro-Diver & Instructor Liability',
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
    year: '2007',
    title: 'The Inception of Nuovo Paradigm',
    subtitle: 'Founded by Jackie Tan',
    description:
      'Nuovo Paradigm was founded under the leadership of Jackie Tan, laying the initial vision and groundwork for a need-based, corporate wealth advisory agency in Malaysia.',
    icon: 'Sparkles',
    stats: 'Founder: Jackie Tan',
  },
  {
    year: '2009',
    title: 'Bobby Tan Joins as Co-Founder',
    subtitle: 'Building the foundation, process, system & training',
    description:
      'Bobby Tan came on board as Co-Founder, and together with Jackie Tan built the foundational systems, processes, and training frameworks with an initial team of 8 financial planners — achieving the agency’s first 1 Million Dollar production milestone.',
    icon: 'Users',
    stats: '8 Planners • RM1M Agency',
  },
  {
    year: '2011',
    title: 'Official Corporate Agency Recognition',
    subtitle: 'Accredited by Prudential Assurance Malaysia',
    description:
      'Nuovo Paradigm was officially accredited as a Corporate Agency under Prudential Assurance Malaysia, marking a major step forward in institutional credibility and structure.',
    icon: 'Building2',
    stats: 'Prudential Accredited',
  },
  {
    year: '2013',
    title: 'Strengthening Systems & Training',
    subtitle: 'Continued investment in agency process and development',
    description:
      'The agency continued refining its systems, processes, and training frameworks, reinforcing the foundation needed to scale sustainably in the years ahead.',
    icon: 'Layers',
  },
  {
    year: '2015',
    title: '15 Quality Financial Planners',
    subtitle: 'Growing a team of proven, high-caliber producers',
    description:
      'Nuovo Paradigm’s disciplined mentorship and training system matured, growing the agency to 15 quality financial planners recognized for consistent production and client service excellence.',
    icon: 'Users',
    stats: '15 Quality Planners',
  },
  {
    year: '2017',
    title: 'The 2 Million Dollar Agency',
    subtitle: 'Scaling production through structured systems',
    description:
      'With a proven onboarding and mentorship system in place, the agency surpassed the 2 Million Dollar production mark, reinforcing its position as a premier training ground for wealth planners.',
    icon: 'TrendingUp',
    stats: 'RM2M Agency',
  },
  {
    year: '2019',
    title: 'The 3 Million Dollar Agency & President’s Award',
    subtitle: 'Recognized with the Top MDRT Builder Award',
    description:
      'The agency achieved 3 Million in production and was honored with the President’s Award for Top MDRT Builder Award, cementing Nuovo Paradigm’s reputation for developing MDRT-caliber talent.',
    icon: 'Trophy',
    stats: 'RM3M Agency • President’s Award',
    highlight: true,
  },
  {
    year: '2021',
    title: 'First TOT Achiever',
    subtitle: 'Producing our first Top of Table (TOT) MDRT qualifier',
    description:
      'Nuovo Paradigm produced its first Top of Table (TOT) achiever — the highest tier of MDRT recognition — a testament to the depth of the agency’s mentorship and technical planning capability.',
    icon: 'Crown',
    stats: '1st TOT Achiever',
  },
  {
    year: '2023',
    title: 'Consistent COT Achievers',
    subtitle: 'Producing Court of Table (COT) MDRT qualifiers year after year',
    description:
      'From 2023 onwards, the agency has consistently produced Court of Table (COT) MDRT achievers annually, reflecting the sustained quality and discipline of its planners.',
    icon: 'Medal',
    stats: 'Yearly COT Achievers',
  },
  {
    year: '2024',
    title: 'The 4 Million Dollar Agency',
    subtitle: 'Over 30 financial planners strong',
    description:
      'Nuovo Paradigm reached 4 Million in annual production with a growing bench of over 30 financial planners, one of the strongest and most established agencies of its kind in Malaysia.',
    icon: 'TrendingUp',
    stats: 'RM4M Agency • 30+ Planners',
  },
  {
    year: '2026',
    title: '40+ Financial Planners Strong',
    subtitle: 'Our largest, most experienced team yet',
    description:
      'Nuovo Paradigm’s total number of financial planners has grown to exceed 40, representing our largest and most capable team since inception in 2007.',
    icon: 'Users',
    stats: '40+ Planners',
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

// Free access key from web3forms.com, tied to CONTACT_INFO.email (contact@nuovoparadigm.com).
// Sign up at https://web3forms.com/ with that address to get a real key, then paste it here.
export const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY';
