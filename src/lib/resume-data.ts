import resumeAsset from "@/assets/tanya-mahajan-resume.pdf.asset.json";

export const EMAIL = "tanyamahajan625@gmail.com";
export const PHONE_DISPLAY = "+1 (872) 357-1825";
export const PHONE_TEL = "+18723571825";
export const LINKEDIN_URL = "https://www.linkedin.com/in/tanya-mahajan-344854218/";
export const SUBSTACK_URL = "https://substack.com/@tanyamahajan";
export const RESUME_URL = (resumeAsset as { url: string }).url;

export type Accent = "peach" | "pink" | "sage" | "butter" | "blue";

export const ACCENT_BG: Record<Accent, string> = {
  peach: "bg-peach",
  pink: "bg-pink",
  sage: "bg-sage",
  butter: "bg-butter",
  blue: "bg-blue",
};

export const TAG_ROTATION: Accent[] = ["butter", "sage", "pink", "blue", "peach"];

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  accent: Accent;
  summary: string;
  points: string[];
  tags: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: "Jun 2025 — Now",
    role: "Marketing Consulting Analyst",
    company: "TransUnion",
    location: "Chicago, IL",
    accent: "peach",
    summary:
      "Running analytics workstreams for Fortune 500 brands — measuring what campaigns actually moved, not just what they reported.",
    points: [
      "Led analytics workstreams for 3+ Fortune 500 clients using SQL and Google Cloud Platform, integrating Nielsen consumer panels and media measurement data to optimize multi-channel campaign performance.",
      "Built Power BI dashboards and automated QA processes across 5+ media channels, saving 6 hours/week on manual checks.",
      "Managed end-to-end campaign execution across clients, agency teams, and media partners with 100% on-time weekly reporting and SLA compliance.",
      "Aligned Data Science and MarTech teams to deploy marketing attribution models, optimizing full-funnel channel mix against client targets.",
      "Delivered quarterly media performance reviews to client leadership, identifying expansion opportunities that grew account investment and measurement scope.",
    ],
    tags: ["SQL", "Google Cloud", "Power BI", "Attribution", "Client leadership"],
  },
  {
    period: "Jan 2025 — Apr 2025",
    role: "Product Marketing Intern",
    company: "Kindworks AI",
    location: "Chicago, IL · Pre-seed tech",
    accent: "sage",
    summary:
      "Drove go-to-market for a pre-seed AI startup — from competitor analysis to pitch decks that landed household-name clients.",
    points: [
      "Drove launch strategy for the MS Teams extension by leading competitor analysis, enabling product-market fit improvements projected to lift enterprise adoption by 25%.",
      "Boosted B2B lead engagement by 10% and improved conversion rates through optimized HubSpot campaigns and CRM workflow redesign.",
      "Developed pitch decks that secured 5+ high-value B2B clients — including Bain, Chanel, and Audi US — contributing to a 30% increase in projected quarterly revenue.",
    ],
    tags: ["Go-to-market", "HubSpot", "B2B", "Competitor analysis"],
  },
  {
    period: "May 2024 — Aug 2024",
    role: "Brand Management Intern",
    company: "mCaffeine",
    location: "Mumbai, India · Personal care startup",
    accent: "blue",
    summary:
      "First taste of the craft: led the 0→1 digital launch of mCaffeine Shades and turned CTRs into revenue.",
    points: [
      "Led end-to-end digital strategy for the launch of mCaffeine Shades, driving 0→1 brand activation and 50K+ customer acquisitions in the first 3 months.",
      "Drove 3 product launches through targeted digital campaigns, boosting click-through rates by 18% and contributing to $300K in quarterly sales revenue.",
    ],
    tags: ["0→1 launch", "Digital strategy", "D2C", "Brand activation"],
  },
];

export interface ProjectItem {
  category: string;
  accent: Accent;
  title: string;
  teaser: string;
  story: string[];
  metrics: string[];
}

export const PROJECTS: ProjectItem[] = [
  {
    category: "Causal inference",
    accent: "butter",
    title: "Personalized retargeting strategy for TelcoX",
    teaser:
      "Isolating the true incremental lift of a retargeting campaign from the noise of organic demand — then pricing the policy against it.",
    story: [
      "Analyzed customer-level data from an A/B test with ~600,000 participants to estimate the incremental effect of a retargeting ad campaign.",
      "Used CATE (Conditional Average Treatment Effects) estimation in R to identify which customers the ads actually moved — and which would have converted anyway.",
      "Designed a profit-maximizing personalized retargeting policy and benchmarked its out-of-sample ROI against blanket and no-targeting strategies with advanced causal inference techniques.",
    ],
    metrics: ["~600K participants", "CATE in R", "Out-of-sample ROI"],
  },
  {
    category: "Brand growth",
    accent: "pink",
    title: "Brand growth strategy for Durex, Reckitt",
    teaser:
      "Mapping unmet Gen Z needs in intimacy and wellness — and pricing the growth bet before a single ad ran.",
    story: [
      "Led comprehensive landscape mapping and 150+ primary consumer interviews to identify unmet Gen Z needs in intimacy and wellness.",
      "Proposed a new intimacy-tech product with $20M+ TAM and a projected 15% lift in category revenue over 3 years.",
      "Developed a full-funnel go-to-market strategy with omnichannel retail activations and a risk-mitigation plan for market entry.",
    ],
    metrics: ["150+ interviews", "$20M+ TAM", "+15% category lift"],
  },
];

export const SKILLS: { name: string; label: string; accent: Accent }[] = [
  { name: "SQL", label: "querying", accent: "sage" },
  { name: "Python", label: "analysis", accent: "blue" },
  { name: "Power BI", label: "dashboards", accent: "butter" },
  { name: "Tableau", label: "viz", accent: "pink" },
  { name: "HubSpot", label: "CRM", accent: "peach" },
  { name: "Causal", label: "inference", accent: "sage" },
];

export const GROUNDING: { title: string; detail: string; accent: Accent }[] = [
  {
    title: "University of Chicago Booth",
    detail: "Master in Management, Marketing · GPA 3.86 · Dean's List · Cum Laude",
    accent: "peach",
  },
  {
    title: "Ashoka University",
    detail: "BS Economics & Finance · GPA 3.64 · Cum Laude",
    accent: "blue",
  },
  {
    title: "Founding President, AWIFS",
    detail:
      "Ashoka Women in Finance Society · 50+ member team · inaugural Finance Symposium with 5+ sponsors and 10+ industry leaders",
    accent: "sage",
  },
];
