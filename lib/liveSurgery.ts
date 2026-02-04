export interface LiveSurgerySiteSettings {
  brandName: string
  seoTitle: string
  seoDescription: string
  whatsapp: string
  contactEmail: string
}

export interface LiveSurgerySession {
  id: string
  slug: string
  title: string
  startDate: string
  endDate: string
  city: string
  clinicName: string
  surgeons: string[]
  level: string
  description: string
  highlights: string[]
  pricingText: string
  coverImageUrl: string
  ctaUrl: string
}

export interface LiveSurgeryFaq {
  id: string
  question: string
  answer: string
}

export const LIVE_SURGERY_SETTINGS: LiveSurgerySiteSettings = {
  brandName: "Implantaly",
  seoTitle: "Live Surgery | Implantaly",
  seoDescription:
    "Hands-on implant surgery sessions led by experts with real-time clinical insight.",
  whatsapp: "+213555123456",
  contactEmail: "contact@implantaly.com",
}

export const LIVE_SURGERY_SESSIONS: LiveSurgerySession[] = [
  {
    id: "ls-2026-01",
    slug: "algier-full-arch-may-2026",
    title: "Full-Arch Immediate Load Masterclass",
    startDate: "2026-05-14",
    endDate: "2026-05-15",
    city: "Algiers",
    clinicName: "Implantaly Surgical Center",
    surgeons: ["Dr. Samir Hamimed", "Dr. Chaouki Selmania"],
    level: "Advanced",
    description:
      "Two-day immersive session covering advanced full-arch workflows with live cases.",
    highlights: [
      "Digital planning and guided surgery",
      "Immediate load protocol walk-through",
      "Live Q&A and clinical debrief",
    ],
    pricingText: "Pricing on request",
    coverImageUrl: "/images/live-surgery/full-arch-session.jpg",
    ctaUrl: "/en/contact",
  },
  {
    id: "ls-2026-02",
    slug: "oran-sinus-lift-june-2026",
    title: "Sinus Lift & Grafting Intensive",
    startDate: "2026-06-20",
    endDate: "2026-06-20",
    city: "Oran",
    clinicName: "Implantaly Clinic Oran",
    surgeons: ["Dr. Samir Amarouche"],
    level: "Intermediate",
    description:
      "Live surgery session focused on lateral and crestal sinus elevation techniques.",
    highlights: [
      "Case selection criteria",
      "Membrane management tips",
      "Post-op protocol checklist",
    ],
    pricingText: "EUR 1,250 per seat",
    coverImageUrl: "/images/live-surgery/sinus-lift-session.jpg",
    ctaUrl: "/en/contact",
  },
  {
    id: "ls-2026-03",
    slug: "constantine-implant-basics-july-2026",
    title: "Implant Placement Essentials",
    startDate: "2026-07-09",
    endDate: "2026-07-10",
    city: "Constantine",
    clinicName: "Implantaly Education Hub",
    surgeons: ["Dr. Lina Bekkouche", "Dr. Karim Lounis"],
    level: "Beginner",
    description:
      "Foundational two-day session for predictable implant placement and soft tissue care.",
    highlights: [
      "Step-by-step surgical workflow",
      "Hands-on instrumentation tips",
      "Immediate next-case planning",
    ],
    pricingText: "EUR 900 per seat",
    coverImageUrl: "/images/live-surgery/implant-basics-session.jpg",
    ctaUrl: "/en/contact",
  },
]

export const LIVE_SURGERY_FAQ: LiveSurgeryFaq[] = [
  {
    id: "faq-1",
    question: "Where do the live surgery sessions take place?",
    answer:
      "Sessions are hosted in Implantaly clinics equipped with surgical training suites and live-streaming support.",
  },
  {
    id: "faq-2",
    question: "Do I need previous implant experience to attend?",
    answer:
      "We run sessions for all levels. Each event clearly states whether it is beginner, intermediate, or advanced.",
  },
  {
    id: "faq-3",
    question: "How do I reserve a seat?",
    answer:
      "Contact the Implantaly team through WhatsApp or the contact form to secure availability and pricing.",
  },
]

export function getLiveSurgerySiteSettings(): LiveSurgerySiteSettings {
  return LIVE_SURGERY_SETTINGS
}

export function getLiveSurgerySessions(): LiveSurgerySession[] {
  return LIVE_SURGERY_SESSIONS
}

export function getLiveSurgeryFaq(): LiveSurgeryFaq[] {
  return LIVE_SURGERY_FAQ
}
