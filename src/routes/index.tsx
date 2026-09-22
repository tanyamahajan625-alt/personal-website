import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tanya Mahajan — Marketing Analytics & Brand Strategy" },
      {
        name: "description",
        content:
          "Interactive resume of Tanya Mahajan: Marketing Consulting Analyst at TransUnion, UChicago Booth MiM, builder of the Clever Consumer Club. Explore her experience, case studies, writing, and toolkit.",
      },
      { property: "og:title", content: "Tanya Mahajan — Marketing Analytics & Brand Strategy" },
      {
        property: "og:description",
        content:
          "Interactive resume of Tanya Mahajan: Marketing Consulting Analyst at TransUnion, UChicago Booth MiM, builder of the Clever Consumer Club. Explore her experience, case studies, writing, and toolkit.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const EMAIL = "iamtanyamahajan@gmail.com";
const PHONE_DISPLAY = "+1 (872) 357-1825";
const PHONE_TEL = "+18723571825";
const LINKEDIN_URL = "https://www.linkedin.com/in/tanyamahajan";
const SUBSTACK_URL = "https://substack.com/@tanyamahajan";

type Accent = "peach" | "pink" | "sage" | "butter" | "blue";

const TAG_ROTATION: Accent[] = ["butter", "sage", "pink", "blue", "peach"];

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  accent: Accent;
  summary: string;
  points: string[];
  tags: string[];
}

const EXPERIENCE: ExperienceItem[] = [
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

interface ProjectItem {
  category: string;
  accent: Accent;
  title: string;
  teaser: string;
  story: string[];
  metrics: string[];
}

const PROJECTS: ProjectItem[] = [
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

const SKILLS: { name: string; label: string; accent: Accent }[] = [
  { name: "SQL", label: "querying", accent: "sage" },
  { name: "Python", label: "analysis", accent: "blue" },
  { name: "Power BI", label: "dashboards", accent: "butter" },
  { name: "Tableau", label: "viz", accent: "pink" },
  { name: "HubSpot", label: "CRM", accent: "peach" },
  { name: "Causal", label: "inference", accent: "sage" },
];

const GROUNDING: { title: string; detail: string; accent: Accent }[] = [
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

function Tag({ label, accent }: { label: string; accent: Accent }) {
  return (
    <span
      className={`rounded-full bg-${accent} px-2.5 py-1 font-mono text-xs ring-2 ring-ink`}
    >
      {label}
    </span>
  );
}

function ExperienceCard({ item, defaultOpen }: { item: ExperienceItem; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);

  return (
    <div
      className={`overflow-hidden rounded-[min(1.5vw,16px)] bg-cream ring-2 ring-ink bshadow-${item.accent} transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5`}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <span
            className={`w-fit rounded-[min(1vw,8px)] bg-${item.accent} px-2.5 py-1 font-mono text-xs uppercase tracking-[0.15em] ring-2 ring-ink sm:text-sm`}
          >
            {item.period}
          </span>
          <div>
            <div className="text-lg leading-tight font-semibold sm:text-2xl">{item.role}</div>
            <div className="font-mono text-sm">
              {item.company} · {item.location}
            </div>
          </div>
        </div>
        <span
          className={`shrink-0 font-mono text-xl transition-transform duration-300 ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="max-w-[62ch] px-6 pb-6 text-sm leading-relaxed text-pretty sm:text-base">
            <p className="mb-4 font-medium">{item.summary}</p>
            <ul className="space-y-2">
              {item.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className={`mt-2 inline-block size-2 shrink-0 rounded-full bg-${item.accent} ring-1 ring-ink`} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag, i) => (
                <Tag key={tag} label={tag} accent={TAG_ROTATION[i % TAG_ROTATION.length]} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: ProjectItem }) {
  const [open, setOpen] = useState(false);

  return (
    <article
      className={`overflow-hidden rounded-[min(1.5vw,16px)] bg-cream ring-2 ring-ink bshadow-${project.accent} transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5`}
    >
      <div className="p-6">
        <span
          className={`rounded-full bg-${project.accent} px-2.5 py-1 font-mono text-xs uppercase tracking-[0.15em] ring-2 ring-ink`}
        >
          {project.category}
        </span>
        <h3 className="mt-4 text-xl leading-tight font-semibold text-balance sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-3 max-w-[46ch] text-sm leading-relaxed text-pretty sm:text-base">
          {project.teaser}
        </p>
        <div
          className={`grid transition-all duration-300 ease-out ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="pt-4">
              <ul className="space-y-2 text-sm leading-relaxed sm:text-base">
                {project.story.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span
                      className={`mt-2 inline-block size-2 shrink-0 rounded-full bg-${project.accent} ring-1 ring-ink`}
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="rounded-full bg-ink px-2.5 py-1 font-mono text-xs text-cream"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-5 inline-flex cursor-pointer items-center gap-2 font-mono text-sm font-semibold underline decoration-2 underline-offset-4"
        >
          {open ? "Close case study ↑" : "Open case study →"}
        </button>
      </div>
    </article>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-paper font-display text-ink antialiased">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <header className="flex items-center justify-between border-b-2 border-ink py-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="bshadow-sm grid size-10 place-items-center rounded-[min(1.5vw,12px)] bg-ink text-sm font-semibold text-cream">
              TM
            </div>
            <div className="font-mono text-xs uppercase tracking-[0.15em] sm:text-sm">
              Tanya Mahajan
            </div>
          </a>
          <div className="flex items-center gap-2 font-mono text-xs sm:text-sm">
            <span className="hidden rounded-[min(1vw,10px)] bg-cream px-3 py-1.5 ring-2 ring-ink sm:inline">
              Casebook
            </span>
            <span className="rounded-[min(1vw,10px)] bg-butter px-3 py-1.5 ring-2 ring-ink">
              Available
            </span>
          </div>
        </header>

        <section id="top" className="py-16 sm:py-24">
          <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] sm:text-sm">
            <span className="inline-block size-3 rounded-full bg-peach ring-2 ring-ink" />
            Marketing Analytics · Chicago
          </div>
          <h1 className="max-w-[20ch] text-5xl leading-none font-semibold tracking-tight text-balance sm:text-7xl lg:text-8xl">
            Tanya Mahajan
          </h1>
          <p className="mt-8 max-w-[52ch] text-base leading-relaxed font-medium text-pretty sm:text-xl">
            A data-minded storyteller translating messy consumer behavior into decisions brands
            actually trust. Booth MiM. Builder of the Clever Consumer Club.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#experience"
              className="bshadow-peach inline-flex items-center gap-2 rounded-[min(1vw,12px)] bg-ink py-2 pr-4 pl-4 text-sm font-semibold text-cream transition-transform duration-200 hover:-translate-y-0.5 sm:text-base"
            >
              See the casebook
            </a>
            <a
              href={SUBSTACK_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-[min(1vw,12px)] bg-cream py-2 pr-4 pl-4 text-sm font-semibold text-ink ring-2 ring-ink transition-transform duration-200 hover:-translate-y-0.5 sm:text-base"
            >
              Read the Substack
            </a>
          </div>
        </section>

        <section id="experience" className="scroll-mt-8 py-16">
          <div className="mb-8 flex items-end justify-between border-b-2 border-ink pb-4">
            <h2 className="text-2xl font-semibold text-balance sm:text-4xl">Experience</h2>
            <span className="font-mono text-xs uppercase tracking-[0.15em]">
              3 roles · pull a tab
            </span>
          </div>
          <div className="grid gap-8">
            {EXPERIENCE.map((item, i) => (
              <ExperienceCard key={item.company} item={item} defaultOpen={i === 0} />
            ))}
          </div>
        </section>

        <section id="projects" className="scroll-mt-8 py-16">
          <div className="mb-8 flex items-end justify-between border-b-2 border-ink pb-4">
            <h2 className="text-2xl font-semibold text-balance sm:text-4xl">Selected projects</h2>
            <span className="font-mono text-xs uppercase tracking-[0.15em]">case studies</span>
          </div>
          <div className="grid items-start gap-8 sm:grid-cols-2">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section id="writing" className="scroll-mt-8 py-16">
          <div className="bshadow-peach rounded-[min(1.5vw,20px)] bg-ink p-6 text-cream ring-2 ring-ink sm:p-10">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div className="max-w-[48ch]">
                <span className="rounded-full bg-peach px-2.5 py-1 font-mono text-xs uppercase tracking-[0.2em] text-ink ring-2 ring-ink">
                  Featured writing
                </span>
                <h2 className="mt-5 text-3xl leading-tight font-semibold text-balance sm:text-5xl">
                  Clever Consumer Club
                </h2>
                <p className="mt-4 text-base leading-relaxed text-pretty text-cream/80 sm:text-lg">
                  A girl in her 20s trying to understand why we fill our carts the way we do.
                  Consumer psychology, beauty, fashion, and the stories brands tell — one sharp
                  essay at a time.
                </p>
              </div>
              <a
                href={SUBSTACK_URL}
                target="_blank"
                rel="noreferrer"
                className="bshadow-ink inline-flex items-center gap-2 rounded-[min(1vw,12px)] bg-cream py-2 pr-4 pl-4 text-sm font-semibold text-ink transition-transform duration-200 hover:-translate-y-0.5 sm:text-base"
              >
                Read on Substack →
              </a>
            </div>
          </div>
        </section>

        <section id="toolkit" className="scroll-mt-8 py-16">
          <div className="mb-8 flex items-end justify-between border-b-2 border-ink pb-4">
            <h2 className="text-2xl font-semibold text-balance sm:text-4xl">Toolkit</h2>
            <span className="font-mono text-xs uppercase tracking-[0.15em]">the kit</span>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {SKILLS.map((skill) => (
              <div
                key={skill.name}
                className={`rounded-[min(1vw,12px)] bg-cream px-4 py-5 ring-2 ring-ink bshadow-${skill.accent} transition-transform duration-200 hover:-translate-y-0.5`}
              >
                <div className="text-lg font-semibold">{skill.name}</div>
                <div className="mt-1 font-mono text-xs uppercase tracking-[0.1em]">
                  {skill.label}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 font-mono text-xs text-ink/60 sm:text-sm">
            Also fluent in: Salesforce · Looker Studio · VBA · G-Suite · Microsoft Office
          </p>
        </section>

        <section id="grounding" className="scroll-mt-8 py-16">
          <div className="mb-8 flex items-end justify-between border-b-2 border-ink pb-4">
            <h2 className="text-2xl font-semibold text-balance sm:text-4xl">Education &amp; leadership</h2>
            <span className="font-mono text-xs uppercase tracking-[0.15em]">the grounding</span>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {GROUNDING.map((item) => (
              <div
                key={item.title}
                className={`rounded-[min(1vw,12px)] bg-cream px-5 py-6 ring-2 ring-ink bshadow-${item.accent} transition-transform duration-200 hover:-translate-y-0.5`}
              >
                <div className="text-lg leading-tight font-semibold">{item.title}</div>
                <div className="mt-2 font-mono text-xs leading-relaxed tracking-[0.02em] text-ink/70">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer id="contact" className="scroll-mt-8 border-t-2 border-ink py-16">
          <div className="max-w-[46ch]">
            <h2 className="text-3xl leading-tight font-semibold text-balance sm:text-5xl">
              Let's build something brands trust.
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="bshadow-peach inline-flex items-center gap-2 rounded-[min(1vw,12px)] bg-ink py-2 pr-4 pl-4 text-sm font-semibold text-cream transition-transform duration-200 hover:-translate-y-0.5 sm:text-base"
              >
                {EMAIL}
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-[min(1vw,12px)] bg-cream py-2 pr-4 pl-4 text-sm font-semibold text-ink ring-2 ring-ink transition-transform duration-200 hover:-translate-y-0.5 sm:text-base"
              >
                LinkedIn
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 rounded-[min(1vw,12px)] bg-cream py-2 pr-4 pl-4 text-sm font-semibold text-ink ring-2 ring-ink transition-transform duration-200 hover:-translate-y-0.5 sm:text-base"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
            <p className="mt-8 font-mono text-xs text-ink/60 sm:text-sm">
              Booth MiM · Ashoka University · Founding President, Ashoka Women in Finance Society
            </p>
            <p className="mt-3 font-mono text-xs text-ink/40">
              Off the clock: hiking, pickleball, Bollywood movies, coffee, dogs, yoga.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
