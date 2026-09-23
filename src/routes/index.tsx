import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import avatarAsset from "@/assets/pixel/about_me.png.asset.json";
import cameraAsset from "@/assets/pixel/icon_pictures.png.asset.json";
import booksAsset from "@/assets/pixel/icon_research.png.asset.json";
import notepadAsset from "@/assets/pixel/portfolio_icon.png.asset.json";
import filesAsset from "@/assets/pixel/resume_icon.png.asset.json";
import laptopAsset from "@/assets/pixel/laptop_icon.png.asset.json";
import { Button } from "@/components/ui/button";
import {
  EXPERIENCE,
  LINKEDIN_URL,
  RESUME_URL,
  SUBSTACK_URL,
} from "@/lib/resume-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tanya Mahajan — Marketing Analytics & Growth Strategy" },
      {
        name: "description",
        content:
          "Explore Tanya Mahajan's interactive portfolio: marketing analytics, growth strategy, consumer psychology, and field notes from Chicago.",
      },
      { property: "og:title", content: "Tanya Mahajan — Marketing Analytics & Growth Strategy" },
      {
        property: "og:description",
        content:
          "An interactive office dossier featuring Tanya Mahajan's experience, strategic projects, writing, and resume.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const assetUrl = (asset: { url: string }) => asset.url;

const PROJECTS = [
  {
    code: "CASE 01 / BRAND GROWTH",
    title: "Durex GTM & Intimacy Tech Strategy",
    client: "Reckitt Benckiser · UChicago Booth",
    description:
      "Mapped unmet Gen Z needs through 150+ consumer interviews, then translated the insight into an intimacy-tech concept and full-funnel launch roadmap.",
    metrics: ["$20M+ TAM", "150+ interviews", "15% projected category lift"],
  },
  {
    code: "CASE 02 / D2C LAUNCH",
    title: "HYPHEN Brand Launch & Partnerships",
    client: "mCaffeine ecosystem",
    description:
      "Built a co-branding and partnership growth plan across five D2C brands, connecting launch storytelling with commercial expansion.",
    metrics: ["5 D2C brands", "$11M+ subsidiary revenue", "Partnership growth"],
  },
  {
    code: "CASE 03 / CAUSAL INFERENCE",
    title: "TelcoX Personalized Retargeting Model",
    client: "UChicago Booth",
    description:
      "Used CATE modeling in R to identify which customers ads actually moved, then designed and tested a profit-maximizing targeting policy.",
    metrics: ["~600K users", "A/B test", "Out-of-sample ROI"],
  },
];

const MEMOS = [
  {
    number: "MEMO 001",
    title: "Why we fill our carts the way we do",
    summary: "Consumer psychology, decoded through the choices hiding in an ordinary shopping cart.",
  },
  {
    number: "MEMO 002",
    title: "Beauty, fashion & the aspiration economy",
    summary: "Field notes on taste, identity, and the commercial power of who we hope to become.",
  },
  {
    number: "MEMO 003",
    title: "The stories brands tell",
    summary: "A marketer's look at positioning, belief, and why some brand narratives stay with us.",
  },
];

const NAV_ITEMS = [
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Substack Memos", "#memos"],
  ["Personnel File", "#about"],
  ["Contact", "#contact"],
] as const;

function scrollToSection(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function DesktopLink({
  href,
  label,
  className,
  delayClass,
  children,
}: {
  href: string;
  label: string;
  className: string;
  delayClass: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className={`pixel-link ${delayClass} ${className}`} aria-label={label}>
      <span className="pixel-art">{children}</span>
      <span className="pixel-label">[ {label} ]</span>
    </a>
  );
}

function Portfolio() {
  const [folderOpen, setFolderOpen] = useState(true);
  const [folderLeaving, setFolderLeaving] = useState(false);

  useEffect(() => {
    document.body.style.overflow = folderOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [folderOpen]);

  const dismissFolder = () => {
    if (folderLeaving) return;
    setFolderLeaving(true);
    window.setTimeout(() => {
      setFolderOpen(false);
      setFolderLeaving(false);
    }, 600);
  };

  const returnToDesk = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setFolderOpen(true);
  };

  return (
    <main className="min-h-dvh bg-paper font-display text-ink antialiased">
      {folderOpen && (
        <div className={`folder-overlay ${folderLeaving ? "folder-overlay-leaving" : ""}`}>
          <Button
            type="button"
            variant="ghost"
            onClick={dismissFolder}
            className="folder-file h-auto w-[min(88vw,900px)] whitespace-normal p-0 text-ink shadow-none hover:bg-transparent"
            aria-label="Open Tanya Mahajan's portfolio"
          >
            <span className="folder-papers" aria-hidden />
            <span className="folder-tab" aria-hidden />
            <span className="folder-clip" aria-hidden />
            <span className="relative z-10 flex min-h-[390px] w-full flex-col items-center justify-center px-7 py-16 text-center sm:min-h-[500px] sm:px-14">
              <span className="font-hand text-5xl leading-none font-semibold text-file-red sm:text-7xl">
                Hi! I&apos;m Tanya!
              </span>
              <span className="mt-6 max-w-2xl font-mono text-sm leading-relaxed sm:text-lg">
                Welcome to my Website, find everything &quot;filed&quot; below :)
              </span>
              <span className="mt-10 border-b border-ink/40 pb-1 font-mono text-xs sm:text-sm">
                [click on the folder to learn more]
              </span>
            </span>
          </Button>
        </div>
      )}

      {!folderOpen && (
        <header className="fixed inset-x-0 top-0 z-[100] border-b border-ink/20 bg-paper/95 font-mono backdrop-blur-sm">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
            <a href="#desk" className="shrink-0 font-semibold tracking-[0.08em] uppercase">
              Tanya Mahajan
            </a>
            <nav className="hidden items-center gap-5 text-xs lg:flex" aria-label="Portfolio sections">
              {NAV_ITEMS.map(([label, href]) => (
                <a key={href} href={href} className="transition-colors hover:text-file-red">
                  {label}
                </a>
              ))}
            </nav>
            <Button type="button" variant="ghost" onClick={returnToDesk} className="h-9 px-2 font-mono text-[10px] sm:text-xs">
              [ RETURN TO DESK ↑ ]
            </Button>
          </div>
        </header>
      )}

      <section id="desk" className="paper-texture flex min-h-dvh scroll-mt-16 items-center overflow-hidden px-4 pb-10 pt-24">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-center font-mono text-xs tracking-[0.12em] sm:text-sm">[click icons to learn more]</p>
          <div className="desktop-grid mx-auto mt-6 min-h-[650px] max-w-5xl sm:min-h-[720px]">
            <DesktopLink href="#memos" label="Substack Memos" delayClass="pixel-delay-1" className="desk-memos">
              <img src={assetUrl(notepadAsset)} alt="Pixel-art notepad and pen" />
            </DesktopLink>
            <DesktopLink href="#about" label="Personnel File" delayClass="pixel-delay-2" className="desk-about">
              <span className="flex items-end justify-center gap-1">
                <img src={assetUrl(cameraAsset)} alt="Pixel-art camera" className="w-[62%]" />
                <img src={assetUrl(booksAsset)} alt="Pixel-art book stack" className="w-[35%]" />
              </span>
            </DesktopLink>
            <DesktopLink href="#experience" label="Experience" delayClass="pixel-delay-3" className="desk-experience">
              <img src={assetUrl(filesAsset)} alt="Pixel-art file stack" />
            </DesktopLink>
            <DesktopLink href="#projects" label="Projects" delayClass="pixel-delay-4" className="desk-projects">
              <img src={assetUrl(laptopAsset)} alt="Pixel-art laptop" />
            </DesktopLink>
            <DesktopLink href="#contact" label="Contact" delayClass="pixel-delay-5" className="desk-contact">
              <img src={assetUrl(avatarAsset)} alt="Pixel-art avatar of Tanya Mahajan" />
            </DesktopLink>
          </div>
        </div>
      </section>

      <section id="experience" className="dossier-section scroll-mt-16">
        <div className="dossier-inner">
          <SectionHeading code="SECTION A / ROLE LOGS" title="Filed Under: Work History & Role Logs" />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {EXPERIENCE.map((role, index) => (
              <article key={role.company} className="dossier-card flex flex-col">
                <div className="flex items-start justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/60">
                  <span>ROLE 0{index + 1}</span>
                  <span>{role.period}</span>
                </div>
                <h3 className="mt-7 text-2xl leading-tight font-semibold">{role.role}</h3>
                <p className="mt-1 font-mono text-xs text-file-red">{role.company} · {role.location}</p>
                <p className="mt-5 leading-relaxed text-ink/75">{role.summary}</p>
                <ul className="mt-6 space-y-3 border-t border-ink/15 pt-5 text-sm leading-relaxed text-ink/75">
                  {role.points.slice(0, 3).map((point) => (
                    <li key={point} className="flex gap-3"><span aria-hidden>→</span><span>{point}</span></li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="dossier-section dossier-section-alt scroll-mt-16">
        <div className="dossier-inner">
          <SectionHeading code="SECTION B / CASE FILES" title="Filed Under: Strategic Projects & Growth Case Studies" />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <article key={project.title} className="dossier-card">
                <p className="font-mono text-[10px] tracking-[0.14em] text-file-red">{project.code}</p>
                <h3 className="mt-5 text-2xl leading-tight font-semibold">{project.title}</h3>
                <p className="mt-2 font-mono text-xs text-ink/55">{project.client}</p>
                <p className="mt-5 leading-relaxed text-ink/75">{project.description}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.metrics.map((metric) => <span key={metric} className="file-chip">{metric}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="memos" className="dossier-section scroll-mt-16">
        <div className="dossier-inner">
          <SectionHeading code="SECTION C / CLEVER CONSUMER CLUB" title="Out of Office Memos & Field Notes" />
          <p className="mt-5 max-w-3xl leading-relaxed text-ink/70">
            Thoughts on growth marketing, product positioning, consumer psychology, and data-driven strategy—fresh off the typewriter.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {MEMOS.map((memo) => (
              <a key={memo.number} href={SUBSTACK_URL} target="_blank" rel="noreferrer" className="dossier-card group block transition-transform duration-200 hover:-translate-y-1">
                <p className="font-mono text-[10px] tracking-[0.14em] text-file-red">{memo.number}</p>
                <h3 className="mt-5 text-xl font-semibold group-hover:underline">{memo.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink/70">{memo.summary}</p>
                <span className="mt-8 inline-block font-mono text-xs">[ READ ON SUBSTACK → ]</span>
              </a>
            ))}
          </div>
          <form action={SUBSTACK_URL} target="_blank" className="memo-form mt-8">
            <div>
              <p className="font-mono text-[10px] tracking-[0.16em] text-file-red uppercase">Inter-office circulation list</p>
              <h3 className="mt-2 text-xl font-semibold">Get the next field note in your inbox.</h3>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:min-w-[420px] sm:flex-row">
              <label className="sr-only" htmlFor="memo-email">Email address</label>
              <input id="memo-email" name="email" type="email" required placeholder="you@company.com" className="h-11 min-w-0 flex-1 border border-ink/30 bg-cream px-4 font-mono text-sm outline-none focus:border-file-red" />
              <Button type="submit" className="h-11 rounded-none bg-ink px-5 font-mono text-xs text-cream hover:bg-file-red">[ SUBSCRIBE ]</Button>
            </div>
          </form>
        </div>
      </section>

      <section id="about" className="dossier-section dossier-section-alt scroll-mt-16">
        <div className="dossier-inner">
          <SectionHeading code="SECTION D / APPROVED FOR RELEASE" title="Personnel File: Off-the-Clock Data" />
          <article className="personnel-letter mt-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_220px]">
              <div className="space-y-5 text-lg leading-relaxed text-ink/80">
                <p>My path started with Economics and Finance at Ashoka University, then moved through UChicago Booth&apos;s Master in Management program into growth marketing, product positioning, and consumer psychology.</p>
                <p>Chicago is the city I associate most with myself now: part classroom, part running route, part never-ending coffee shop ranking. My obsession with why consumers choose what they choose eventually became the Clever Consumer Club, where I write about brands, behavior, and the aspiration economy.</p>
                <p>Back home in India are my family and Little Snowy, our dog. Off the clock, I reset through yoga, running, pickleball, and the serious business of deciding which Chicago café deserves the next top spot.</p>
              </div>
              <div className="flex flex-col items-center justify-center border-t border-dashed border-ink/25 pt-7 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
                <img src={assetUrl(avatarAsset)} alt="Pixel-art portrait of Tanya" className="w-40 image-pixelated" />
                <p className="mt-4 text-center font-mono text-[10px] tracking-[0.12em]">SUBJECT: T. MAHAJAN<br />LOCATION: CHICAGO, IL</p>
              </div>
            </div>
            <p className="mt-10 border-t border-ink/20 pt-5 font-mono text-xs font-medium uppercase tracking-[0.1em]">Approved for external release. Powered by coffee, movement, and consumer psychology.</p>
          </article>
        </div>
      </section>

      <footer id="contact" className="scroll-mt-16 bg-ink px-4 py-20 text-cream sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs tracking-[0.16em] text-peach">SECTION E / OPEN CHANNEL</p>
          <h2 className="mt-4 max-w-4xl text-4xl leading-tight font-semibold text-balance sm:text-6xl">Transmission Channel // Drop a Note in My Inbox</h2>
          <div className="mt-10 flex flex-wrap gap-3">
            <ContactButton href="mailto:tanyamahajan625@gmail.com" label="Email Tanya" />
            <ContactButton href={LINKEDIN_URL} label="LinkedIn" external />
            <ContactButton href={SUBSTACK_URL} label="Substack" external />
            <ContactButton href={RESUME_URL} label="Download Full Resume PDF ↓" external primary />
          </div>
          <div className="mt-16 flex flex-col gap-3 border-t border-cream/20 pt-6 font-mono text-[11px] text-cream/60 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Tanya Mahajan. Stationed in Chicago, IL.</p>
            <button type="button" onClick={() => scrollToSection("#desk")} className="w-fit cursor-pointer hover:text-cream">[ BACK TO TOP ↑ ]</button>
          </div>
        </div>
      </footer>
    </main>
  );
}

function SectionHeading({ code, title }: { code: string; title: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] tracking-[0.16em] text-file-red uppercase">{code}</p>
      <h2 className="mt-3 max-w-4xl text-4xl leading-tight font-semibold text-balance sm:text-5xl">{title}</h2>
    </div>
  );
}

function ContactButton({ href, label, external = false, primary = false }: { href: string; label: string; external?: boolean; primary?: boolean }) {
  return (
    <Button asChild variant={primary ? "secondary" : "outline"} size="lg" className={`h-12 rounded-none border-cream/40 font-mono text-xs ${primary ? "bg-peach text-ink hover:bg-butter" : "bg-transparent text-cream hover:bg-cream hover:text-ink"}`}>
      <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>[ {label} ]</a>
    </Button>
  );
}
