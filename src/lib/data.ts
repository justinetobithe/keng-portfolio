export const profile = {
  firstName: "Jesseca",
  lastName: "Gimo",
  fullName: "Jesseca C. Gimo",
  title: "Customer Service Team Leader",
  subtitle: "Customer Experience Specialist",
  location: "Davao City, Philippines",
  phone: "+63 916 538 5327",
  phoneHref: "tel:+639165385327",
  email: "jessecagimo@gmail.com",
  photo: "/ID.jpg",
  year: 2026,
  resume: "/Resume_Jesseca%20Gimo.pdf",
  resumeFileName: "Resume_Jesseca_Gimo.pdf",
  summary:
    "Results-driven customer service and operations professional with over 5 years of experience across fintech, banking, retail, and digital marketing.",
  about: [
    "I'm a customer experience professional from Davao City with more than five years across fintech, banking, retail, and digital marketing. I currently lead a call concierge team, keeping queues healthy, people coached, and KPIs on target.",
    "Before that, I supported customers moving money across borders, balanced cash drawers as a bank teller, ran my own small business, and grew brand communities on Facebook, Instagram, and TikTok. All of it taught me one thing: every interaction is a chance to build trust.",
  ],
  strengths: [
    "Communication",
    "Problem-solving",
    "Adaptability",
    "Attention to detail",
  ],
}

export const stats = [
  {
    value: 5,
    suffix: "+",
    label: "years of experience",
    caption: "across customer service, operations and marketing",
  },
  {
    value: 7,
    suffix: "",
    label: "roles held",
    caption: "from bank teller to team leader",
  },
  {
    value: 4,
    suffix: "",
    label: "industries",
    caption: "fintech, banking, retail and digital marketing",
  },
  {
    value: 3,
    suffix: "",
    label: "support channels",
    caption: "phone, email and live chat, handled with care",
  },
]

export type ExperienceCategory =
  | "leadership"
  | "customer-service"
  | "finance"
  | "marketing"

export type Experience = {
  id: string
  role: string
  company: string
  meta: string
  period: string
  category: ExperienceCategory
  highlights: string[]
}

export const experienceFilters: { value: "all" | ExperienceCategory; label: string }[] = [
  { value: "all", label: "All roles" },
  { value: "leadership", label: "Leadership" },
  { value: "customer-service", label: "Customer service" },
  { value: "finance", label: "Finance" },
  { value: "marketing", label: "Marketing" },
]

export const experiences: Experience[] = [
  {
    id: "q4",
    role: "Call Concierge Team Leader",
    company: "Q4 Inc.",
    meta: "Remote · Part-time",
    period: "Apr 2026 — Present",
    category: "leadership",
    highlights: [
      "Lead daily team operations by monitoring attendance, productivity, KPIs, and overall performance to meet operational targets.",
      "Manage team schedules and shift coverage to maintain adequate staffing and efficient queue operations.",
      "Conduct one-on-one coaching, performance reviews, and targeted training to lift individual and team performance.",
      "Monitor real-time call queues, spot staffing and performance gaps, and act quickly to protect service levels.",
      "Guide team members on process adherence, customer service standards, and productivity expectations.",
      "Escalate operational concerns to management and contribute to process improvement initiatives.",
    ],
  },
  {
    id: "social",
    role: "Marketing & Social Media Manager",
    company: "Direct Client",
    meta: "Remote · Part-time",
    period: "Jun 2024 — Jan 2026",
    category: "marketing",
    highlights: [
      "Managed Facebook, Instagram, and TikTok accounts, from content planning and scheduling to publishing and community management.",
      "Created and edited visual and video content for Reels, Stories, short-form videos, and campaigns using Canva and CapCut.",
      "Developed social strategies focused on brand awareness, engagement, follower growth, and conversions.",
      "Tracked social trends and adapted content to stay relevant and maximize engagement.",
      "Coordinated with influencers, collaborators, and partners to expand brand reach.",
      "Helped run promotional campaigns, giveaways, and paid advertising initiatives.",
    ],
  },
  {
    id: "fps",
    role: "Customer Service Associate",
    company: "Full Potential Solutions",
    meta: "Davao City, Philippines",
    period: "Oct 2024 — Nov 2025",
    category: "finance",
    highlights: [
      "Supported customers of fintech platforms specializing in international money transfers and financial transactions.",
      "Assisted with transaction status, fees, exchange rates, account verification, and compliance-related inquiries.",
      "Delivered support through phone, email, and live chat while keeping service professional and efficient.",
      "Protected sensitive financial information by following confidentiality and data-handling procedures.",
      "Applied AML and KYC requirements when addressing account and transaction concerns.",
    ],
  },
  {
    id: "iqor",
    role: "Customer Service Representative / SME",
    company: "iQor Philippines",
    meta: "Davao City, Philippines",
    period: "Feb 2023 — Feb 2024",
    category: "customer-service",
    highlights: [
      "Supported customers of a major U.S. retail brand with orders, shipping, tracking, returns, refunds, and availability.",
      "Processed order modifications, cancellations, backorder updates, and delivery-related requests.",
      "Promoted to Subject Matter Expert for strong performance and product knowledge.",
      "Provided floor support and helped team leaders mentor new agents and reinforce process adherence.",
      "Resolved complex concerns and ran knowledge refreshers to support service quality.",
    ],
  },
  {
    id: "pbb",
    role: "Bank Teller",
    company: "Philippine Business Bank",
    meta: "Davao City, Philippines",
    period: "Jul 2022 — Nov 2022",
    category: "finance",
    highlights: [
      "Processed deposits, withdrawals, loan payments, fund transfers, and check-cashing transactions accurately.",
      "Balanced cash drawers and followed banking policies, security procedures, and internal controls.",
      "Assisted customers with account inquiries, banking products, and transaction concerns.",
      "Maintained accuracy and confidentiality when handling sensitive financial information.",
    ],
  },
  {
    id: "business",
    role: "Business Owner / Sales & Customer Service",
    company: "Self-Employed",
    meta: "Philippines",
    period: "May 2021 — Mar 2022",
    category: "customer-service",
    highlights: [
      "Managed day-to-day operations, customer inquiries, sales transactions, and order fulfillment.",
      "Provided product information and supported customers through purchasing decisions.",
      "Coordinated orders, inventory monitoring, and product availability.",
      "Kept accurate sales records, payment transactions, and business documentation.",
    ],
  },
  {
    id: "awesome",
    role: "Customer Service Representative",
    company: "Awesome CX",
    meta: "Davao City, Philippines",
    period: "Oct 2019 — Apr 2021",
    category: "customer-service",
    highlights: [
      "Supported customers of an online store specializing in premium wine and beauty products.",
      "Recommended products based on preferences, skin types, ingredients, and product characteristics.",
      "Handled order placement, returns, shipping, and product inquiries.",
      "Coordinated with fulfillment and shipping teams to resolve delivery issues.",
    ],
  },
]

export const contentWork = [
  {
    title: "Reels",
    caption: "Short-form video / brand storytelling",
    tone: "from-[#e9cdb8] via-[#f4e3d5] to-[#fbf5ef]",
  },
  {
    title: "Stories",
    caption: "Daily engagement / behind the scenes",
    tone: "from-[#d9bfae] via-[#ecd8c9] to-[#f8eee6]",
  },
  {
    title: "Campaigns",
    caption: "Promos, giveaways / paid ads",
    tone: "from-[#c9ab98] via-[#e4cbb9] to-[#f5e9df]",
  },
  {
    title: "Community",
    caption: "Comments, DMs / partner outreach",
    tone: "from-[#e2c4b0] via-[#f0ddd0] to-[#fcf6f1]",
  },
]

export const skills = [
  {
    group: "Leadership & Operations",
    items: ["Coaching", "Scheduling", "Process adherence", "Operational improvement"],
  },
  {
    group: "Customer Support",
    items: [
      "Experience management",
      "Complaint & conflict resolution",
      "Multichannel support",
    ],
  },
  {
    group: "Compliance",
    items: ["Account verification", "KYC procedures", "AML procedures"],
  },
  {
    group: "Tools",
    items: [
      "Zendesk",
      "Salesforce",
      "Amazon Connect",
      "Canva",
      "CapCut",
      "Microsoft Office",
      "Google Workspace",
    ],
  },
  {
    group: "Social Platforms",
    items: ["Facebook", "Instagram", "TikTok", "Twitter (X)"],
  },
]

export const education = {
  degree: "Bachelor of Science in Accounting Technology",
  school: "The Holy Cross of Davao College, Inc.",
  period: "2015 — 2019",
}

export const approach = [
  {
    step: "01",
    title: "Listen first",
    text: "Every concern starts with understanding. I take time to hear the full story before offering a fix.",
  },
  {
    step: "02",
    title: "Resolve with care",
    text: "Accurate, compliant and kind. I follow process closely while keeping the human side of service.",
  },
  {
    step: "03",
    title: "Improve the system",
    text: "From coaching agents to flagging gaps, I look for the change that prevents the next issue.",
  },
]

export const services = [
  {
    title: "Content planning",
    text: "Monthly calendars, scheduling and publishing across Facebook, Instagram and TikTok.",
  },
  {
    title: "Video & visual editing",
    text: "Reels, Stories and short-form videos produced in Canva and CapCut.",
  },
  {
    title: "Community management",
    text: "Comments, DMs and inquiries handled with a warm, on-brand voice.",
  },
  {
    title: "Partnerships",
    text: "Outreach and coordination with influencers, collaborators and business partners.",
  },
  {
    title: "Campaigns & ads",
    text: "Promotions, giveaways and paid initiatives built to lift engagement and conversions.",
  },
  {
    title: "Trend monitoring",
    text: "Watching what moves the feed and adapting content so the brand stays relevant.",
  },
]

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
] as const
