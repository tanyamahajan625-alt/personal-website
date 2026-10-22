import type React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronRight, Download, FileText, Pause, Play, X } from "lucide-react";
import { useEffect, useState } from "react";
import { DossierPage } from "@/components/dossier-layout";
import { Button } from "@/components/ui/button";
import campaignImage from "@/assets/projects/hyphen-cobranding-campaign.png.asset.json";
import tennisCampaignVideo from "@/assets/projects/dewy-prep-tennis-court.mp4.asset.json";
import campaignRecordingVideo from "@/assets/projects/hyphen-campaign-screen-recording.mov.asset.json";
import telcoxAnalysis from "@/assets/projects/tanya-mahajan-final-submission.Rmd.asset.json";
import durexStrategyDeck from "@/assets/projects/brand-management-final-project.pdf.asset.json";

type ProjectId = "durex" | "telcox" | "hyphen";
type GalleryMode = "visual" | "video";

const PROJECTS = [
  {
    id: "hyphen" as const,
    number: "01",
    shortTitle: "HYPHEN Brand Launch",
    subtitle: "Partnership growth system",
    category: "Commercial Growth & Partnerships",
    title: "HYPHEN Brand Launch & Partnerships",
    institution: "mCaffeine Ecosystem",
    metrics: [
      { value: "5 D2C", label: "Brand Ecosystem" },
      { value: "$11M+", label: "Revenue Impact" },
    ],
    brief: "Architected a multi-brand partnership framework and launch story connecting D2C co-branding initiatives directly to commercial revenue expansion.",
    tags: ["Partnership Growth", "D2C Activation", "Brand Storytelling"],
    pointers: [
      "Mapped the 5-brand D2C co-branding ecosystem and built the partnership-fit framework used to prioritize collaborations.",
      "Wrote HYPHEN's 0-to-1 launch story and positioning narrative for the D2C debut.",
      "Built the partnership pitch assets and co-branding concepts taken to brand stakeholders.",
      "Ran creative A/B testing across launch campaigns, lifting CTR by 18%.",
      "Connected activation touchpoints — reels, retail collateral, omnichannel rollout — back to $11M+ subsidiary revenue impact.",
    ],
    action: "View Partnership Blueprint",
    download: null,
  },
  {
    id: "telcox" as const,
    number: "02",
    shortTitle: "TelcoX Retargeting",
    subtitle: "Personalized causal model",
    category: "GROWTH ANALYTICS & EXPERIMENTATION",
    title: "TelcoX Personalized Retargeting Model",
    institution: "UChicago Booth",
    metrics: [
      { value: "~600K", label: "A/B Test Participants" },
      { value: "CATE", label: "Effect Model" },
      { value: "MAX ROI", label: "Targeting Policy" },
    ],
    brief: "Engineered a profit-maximizing retargeting model in R using CATE causal machine learning to prevent ad spend cannibalization and outperform blanket targeting.",
    tags: ["Causal Inference", "R / Econometrics", "A/B Testing"],
    pointers: [] as string[],
    action: "View Causal Analysis & Code",
    download: {
      href: telcoxAnalysis.url,
      filename: "Tanya_Mahajan_Final_Submission.Rmd",
      label: "Analysis source & write-up",
      meta: "R Markdown · 18 KB · CATE analysis, code & policy",
    },
  },
  {
    id: "durex" as const,
    number: "03",
    shortTitle: "Durex GTM Strategy",
    subtitle: "Intimacy tech concept & launch",
    category: "Product Marketing & GTM",
    title: "Durex GTM & Intimacy Tech Strategy",
    institution: "Reckitt Benckiser · University of Chicago Booth School of Business",
    metrics: [
      { value: "$20M+", label: "TAM Identified" },
      { value: "150+", label: "Gen Z Interviews" },
      { value: "+15%", label: "Projected 3-Yr Lift" },
    ],
    brief: "Uncovered unmet Gen Z wellness needs through qualitative research to architect a 0-to-1 intimacy tech product concept and full-funnel GTM retail strategy.",
    tags: ["User Research", "TAM Modeling", "Full-Funnel Strategy"],
    pointers: [] as string[],
    action: "Open Full Strategy Deck",
    download: {
      href: durexStrategyDeck.url,
      filename: "Brand_Management_final_project.pdf",
      label: "Full strategy deck",
      meta: "PDF · 23 pages · Gen Z research, positioning & GTM plan",
    },
  },
];

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [
    { title: "Strategic Projects — Tanya Mahajan" },
    { name: "description", content: "Growth case studies by Tanya Mahajan spanning Durex, HYPHEN, and a TelcoX causal-inference retargeting model." },
    { property: "og:title", content: "Strategic Projects — Tanya Mahajan" },
    { property: "og:description", content: "Durex GTM strategy, HYPHEN brand growth, and TelcoX personalized retargeting." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [activeId, setActiveId] = useState<ProjectId>("hyphen");
  const [galleryMode, setGalleryMode] = useState<GalleryMode>("visual");
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const [artifactOpen, setArtifactOpen] = useState(false);
  const [blueprintOpen, setBlueprintOpen] = useState(false);
  const activeProject = PROJECTS.find((project) => project.id === activeId) ?? PROJECTS[0];

  useEffect(() => {
    if (!lightbox && !blueprintOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setLightbox(null);
      setBlueprintOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [lightbox, blueprintOpen]);

  if (!activeProject) return null;

  const isHyphen = activeProject.id === "hyphen";
  const actionLabel = activeProject.action;

  function selectProject(id: ProjectId) {
    setActiveId(id);
    setArtifactOpen(false);
    setBlueprintOpen(false);
  }

  return (
    <DossierPage code="SECTION B / CASE FILES" title="Filed Under: Strategic Projects & Growth Case Studies">
      <p className="mt-5 max-w-3xl font-mono text-sm leading-relaxed text-ink/65">
        Select a case file to scan the strategy, evidence, and commercial impact.
      </p>

      <div className="project-file-system mt-10">
        <div className="project-file-nav" role="tablist" aria-label="Strategic project files">
          <p className="mb-3 font-mono text-[10px] tracking-[0.16em] text-ink/50 uppercase">Case index / 03 files</p>
          {PROJECTS.map((project) => (
            <Button
              key={project.id}
              type="button"
              role="tab"
              variant="ghost"
              aria-selected={activeId === project.id}
              aria-controls="active-project-file"
              className="project-file-tab"
              onClick={() => selectProject(project.id)}
            >
              <span className="project-tab-number">{project.number}</span>
              <span className="min-w-0 flex-1 text-left">
                <span className="block text-sm font-semibold">{project.shortTitle}</span>
                <span className="mt-1 block font-mono text-[10px] text-ink/55">{project.subtitle}</span>
                <span className="project-category-stamp mt-3">[ {project.category} ]</span>
              </span>
              <ChevronRight aria-hidden className="size-4 shrink-0" />
            </Button>
          ))}
        </div>

        <article id="active-project-file" role="tabpanel" className="active-project-file">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] tracking-[0.16em] text-file-red uppercase">Case file {activeProject.number} / Active</p>
              <h2 className="mt-3 max-w-3xl text-3xl leading-tight font-semibold sm:text-4xl">{activeProject.title}</h2>
              <p className="mt-2 font-mono text-xs text-ink/55">{activeProject.institution}</p>
            </div>
            <span className="project-category-stamp project-category-stamp-large">[ {activeProject.category} ]</span>
          </div>

          <div className={`project-metrics mt-8 ${activeProject.metrics.length === 2 ? "project-metrics-two" : ""}`}>
            {activeProject.metrics.map((metric) => (
              <div key={metric.value + metric.label} className="project-metric-badge">
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>

          <div className="project-brief-grid mt-9">
            <div>
              <p className="project-label">Executive brief</p>
              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-ink/80">{activeProject.brief}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {activeProject.tags.map((tag) => <span key={tag} className="file-chip">[ {tag} ]</span>)}
              </div>
              {activeProject.pointers.length ? (
                <div className="project-pointers mt-7">
                  <p className="project-label">What I did</p>
                  <ul className="mt-3 grid gap-2.5">
                    {activeProject.pointers.map((item) => (
                      <li key={item} className="project-pointer">
                        <span aria-hidden className="project-pointer-mark">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <Button
                type="button"
                variant="outline"
                className="project-action mt-7"
                aria-expanded={blueprintOpen}
                onClick={() => setBlueprintOpen(true)}
              >
                [ {actionLabel} -> ]
              </Button>
              {activeProject.download ? (
                <a
                  className="project-file-download mt-6"
                  href={activeProject.download.href}
                  download={activeProject.download.filename}
                >
                  <FileText aria-hidden className="size-4 shrink-0 text-file-red" />
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-xs font-semibold">{activeProject.download.filename}</span>
                    <span className="mt-1 block font-mono text-[0.6rem] leading-relaxed text-ink/55">{activeProject.download.meta}</span>
                  </span>
                  <span className="project-download-cta">
                    [ Download <Download aria-hidden className="inline size-3" /> ]
                  </span>
                </a>
              ) : null}
            </div>
            <ProjectArtifact id={activeProject.id} expanded={artifactOpen} />
          </div>

          {activeProject.id === "hyphen" ? (
            <HyphenGallery
              mode={galleryMode}
              onModeChange={setGalleryMode}
              onOpenImage={(src, alt) => setLightbox({ src, alt })}
            />
          ) : null}
        </article>
      </div>

      {lightbox ? (
        <div className="project-lightbox" role="dialog" aria-modal="true" aria-label="Campaign image inspection" onClick={() => setLightbox(null)}>
          <div className="project-lightbox-file" onClick={(event) => event.stopPropagation()}>
            <Button type="button" variant="ghost" size="icon" className="project-lightbox-close" aria-label="Close image" onClick={() => setLightbox(null)}>
              <X aria-hidden className="size-5" />
            </Button>
            <img src={lightbox.src} alt={lightbox.alt} />
            <p className="mt-4 font-mono text-xs text-ink/65">[ FULL-SIZE CAMPAIGN ARTIFACT ]</p>
          </div>
        </div>
      ) : null}

      {blueprintOpen ? (
        <div className="project-lightbox" role="dialog" aria-modal="true" aria-label={`${activeProject.shortTitle} exhibit`} onClick={() => setBlueprintOpen(false)}>
          <div className="project-lightbox-file project-blueprint-file" onClick={(event) => event.stopPropagation()}>
            <Button type="button" variant="ghost" size="icon" className="project-lightbox-close" aria-label="Close blueprint" onClick={() => setBlueprintOpen(false)}>
              <X aria-hidden className="size-5" />
            </Button>
            {isHyphen ? <PartnershipBlueprint /> : activeProject.id === "telcox" ? <TelcoxExhibit /> : <DurexExhibit />}
          </div>
        </div>
      ) : null}
    </DossierPage>
  );
}

function ProjectArtifact({ id, expanded }: { id: ProjectId; expanded: boolean }) {
  if (id === "durex") {
    return (
      <div className={`artifact-preview artifact-durex ${expanded ? "artifact-expanded" : ""}`} aria-label="Durex interview synthesis matrix preview">
        <div className="artifact-toolbar"><span>INSIGHT MATRIX</span><span>150 RESPONSES</span></div>
        <div className="artifact-matrix">
          {["TRUST", "DISCRETION", "WELLNESS", "ACCESS"].map((label, index) => (
            <div key={label}><span>{label}</span><i style={{ width: `${48 + index * 13}%` }} /></div>
          ))}
        </div>
        <p>GEN Z NEED STATES → PRODUCT CONCEPT → RETAIL GTM</p>
      </div>
    );
  }
  if (id === "telcox") {
    return (
      <div className={`artifact-preview artifact-telcox ${expanded ? "artifact-expanded" : ""}`} aria-label="TelcoX causal model graph preview">
        <div className="artifact-toolbar"><span>CATE DISTRIBUTION</span><span>R MODEL</span></div>
        <div className="artifact-chart" aria-hidden>
          {[36, 58, 43, 78, 54, 88, 68, 94, 72, 84].map((height, index) => <i key={`${height}-${index}`} style={{ height: `${height}%` }} />)}
        </div>
        <p>TREAT HIGH-INCREMENTALITY USERS / SUPPRESS CANNIBALIZATION</p>
      </div>
    );
  }
  return (
    <div className={`artifact-preview artifact-hyphen-video ${expanded ? "artifact-expanded" : ""}`} aria-label="HYPHEN campaign video">
      <video src={campaignRecordingVideo.url} autoPlay muted loop playsInline preload="auto" />
    </div>
  );
}

function HyphenGallery({ mode, onModeChange, onOpenImage }: { mode: GalleryMode; onModeChange: (mode: GalleryMode) => void; onOpenImage: (src: string, alt: string) => void }) {
  const imageSlots = [
    { src: campaignImage.url, alt: "mCaffeine campaign and co-branding profile", tag: "01 // D2C Partnership Architecture & Co-Branding Visuals", text: "Cross-brand positioning across mCaffeine's ecosystem and Hyphen's D2C launch assets." },
  ];

  return (
    <section className="campaign-gallery mt-12" aria-labelledby="campaign-gallery-title">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="project-label">Campaign evidence / HYPHEN</p>
          <h3 id="campaign-gallery-title" className="mt-2 text-2xl font-semibold">Campaign & Creative Media Gallery</h3>
        </div>
        <div className="gallery-toggle" role="group" aria-label="Choose gallery view">
          <Button type="button" variant="ghost" size="sm" aria-pressed={mode === "visual"} onClick={() => onModeChange("visual")}>[ View Visual Deck ]</Button>
          <Button type="button" variant="ghost" size="sm" aria-pressed={mode === "video"} onClick={() => onModeChange("video")}>[ View Video Campaign ]</Button>
        </div>
      </div>

      {mode === "visual" ? (
        <div className="campaign-media-grid mt-6">
          {imageSlots.map((slot) => <ImageArtifact key={slot.tag} {...slot} onOpen={onOpenImage} />)}
          <VideoArtifact src={tennisCampaignVideo.url} tag="03 // Digital Launch Activation Video / Campaign Teaser" />
        </div>
      ) : (
        <div className="campaign-video-grid mt-6">
          <VideoArtifact src={tennisCampaignVideo.url} tag="03A // Dewy Prep Tennis Court Campaign" />
          <VideoArtifact src={campaignRecordingVideo.url} tag="03B // Digital Launch Campaign Showcase" />
        </div>
      )}
    </section>
  );
}

function ImageArtifact({ src, alt, tag, text, onOpen }: { src: string; alt: string; tag: string; text: string; onOpen: (src: string, alt: string) => void }) {
  return (
    <figure className="campaign-media-card">
      <div className="campaign-image-button" onClick={() => onOpen(src, alt)}>
        <img src={src} alt={alt} />
      </div>
      <figcaption><strong>{tag}</strong><span>{text}</span></figcaption>
    </figure>
  );
}

function VideoArtifact({ src, tag }: { src: string; tag: string }) {
  const [playing, setPlaying] = useState(true);
  return (
    <figure className="campaign-media-card campaign-video-card">
      <div className="campaign-video-wrap">
        <video src={src} autoPlay muted loop playsInline preload="auto" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} />
        <Button
          type="button"
          variant="secondary"
          size="icon"
          className="campaign-play"
          aria-label={playing ? "Pause campaign video" : "Play campaign video"}
          onClick={(event) => {
            const video = event.currentTarget.parentElement?.querySelector("video");
            if (!video) return;
            if (video.paused) void video.play(); else video.pause();
          }}
        >
          {playing ? <Pause aria-hidden className="size-5" /> : <Play aria-hidden className="size-5" />}
        </Button>
      </div>
      <figcaption><strong>{tag}</strong><span>Campaign motion, pacing, and mobile-first creative execution.</span></figcaption>
    </figure>
  );
}

function PartnershipBlueprint() {
  const stages = [
    { n: "01", title: "Partnership Audit", did: ["Mapped the D2C brand ecosystem across the mCaffeine portfolio", "Scored each brand on audience overlap and commercial upside"], output: "Brand-fit shortlist" },
    { n: "02", title: "Ecosystem Architecture", did: ["Designed the 5-brand co-branding structure and value exchange", "Defined offer pairings, partner roles, and rollout sequencing"], output: "Partnership framework" },
    { n: "03", title: "Positioning & Story", did: ["Wrote the HYPHEN 0-to-1 launch narrative", "Built messaging for the D2C debut and every partner touchpoint"], output: "Launch story + pitch" },
    { n: "04", title: "Activation", did: ["Ran creative A/B testing across launch campaigns (+18% CTR)", "Produced reels, retail collateral, and omnichannel assets"], output: "Campaign kit" },
    { n: "05", title: "Revenue Linkage", did: ["Tracked partnership activity back to subsidiary P&L", "Reported $11M+ revenue impact to commercial leadership"], output: "Impact report" },
  ];

  return (
    <div className="blueprint-sheet">
      <div className="blueprint-head">
        <div>
          <p className="project-label">Exhibit A / Partnership Architecture</p>
          <h3 className="blueprint-title">HYPHEN // Partnership Blueprint</h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/70">
            The multi-brand D2C co-branding system I built end to end — from ecosystem audit through to commercial revenue.
          </p>
        </div>
        <span className="project-category-stamp project-category-stamp-large">[ DRAFT 01 ]</span>
      </div>

      <div className="blueprint-impact">
        {[
          { v: "5", l: "D2C Brands" },
          { v: "$11M+", l: "Revenue Impact" },
          { v: "+18%", l: "Creative CTR Lift" },
          { v: "0→1", l: "Brand Launch" },
        ].map((item) => (
          <div key={item.l} className="blueprint-impact-cell"><strong>{item.v}</strong><span>{item.l}</span></div>
        ))}
      </div>

      <div className="blueprint-stages">
        {stages.map((stage) => (
          <article key={stage.n} className="blueprint-stage">
            <span className="blueprint-stage-number">{stage.n}</span>
            <h4>{stage.title}</h4>
            <ul>{stage.did.map((line) => <li key={line}>{line}</li>)}</ul>
            <span className="blueprint-deliverable">[ {stage.output} ]</span>
          </article>
        ))}
      </div>

      <div className="blueprint-flow" aria-hidden>
        <span>AUDIT</span><i>→</i><span>ARCHITECT</span><i>→</i><span>POSITION</span><i>→</i><span>ACTIVATE</span><i>→</i><span>MEASURE</span>
      </div>

      <div className="blueprint-foot">
        <span>PREPARED BY TANYA MAHAJAN</span>
        <span>mCAFFEINE ECOSYSTEM / COMMERCIAL GROWTH</span>
      </div>
    </div>
  );
}
function ExhibitShell({ label, title, intro, stamp, impact, children, foot }: { label: string; title: string; intro: string; stamp: string; impact: { v: string; l: string }[]; children: React.ReactNode; foot: [string, string] }) {
  return (
    <div className="blueprint-sheet">
      <div className="blueprint-head">
        <div>
          <p className="project-label">{label}</p>
          <h3 className="blueprint-title">{title}</h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/70">{intro}</p>
        </div>
        <span className="project-category-stamp project-category-stamp-large">[ {stamp} ]</span>
      </div>
      <div className="blueprint-impact">
        {impact.map((item) => (
          <div key={item.l} className="blueprint-impact-cell"><strong>{item.v}</strong><span>{item.l}</span></div>
        ))}
      </div>
      {children}
      <div className="blueprint-foot"><span>{foot[0]}</span><span>{foot[1]}</span></div>
    </div>
  );
}

function StageGrid({ stages }: { stages: { n: string; title: string; did: string[]; output: string }[] }) {
  return (
    <div className="blueprint-stages">
      {stages.map((stage) => (
        <article key={stage.n} className="blueprint-stage">
          <span className="blueprint-stage-number">{stage.n}</span>
          <h4>{stage.title}</h4>
          <ul>{stage.did.map((line) => <li key={line}>{line}</li>)}</ul>
          <span className="blueprint-deliverable">[ {stage.output} ]</span>
        </article>
      ))}
    </div>
  );
}

const TELCOX_CODE = `# 1. Two-in-one interaction model -> customer-level CATE
fit_cate <- lm(spend ~ . * treatment_group, data = train_df)
test_df <- test_df %>%
  mutate(y_1  = predict(fit_cate, mutate(., treatment_group = 1)),
         y_0  = predict(fit_cate, mutate(., treatment_group = 0)),
         cate = y_1 - y_0)

# 2. Target only when incremental profit beats ad cost
margin <- 0.37; cost <- 0.10
test_df$policy_optimal <- as.integer(margin * test_df$cate > cost)

# 3. Inverse-probability-weighted profit evaluation
profit_i <- ((1 - T) / (1 - p)) * (1 - policy) * margin * spend +
            (T / p) * policy * (margin * spend - cost)`;

function TelcoxExhibit() {
  return (
    <ExhibitShell
      label="Exhibit B / Causal Analysis & Code"
      title="TelcoX // Personalized Retargeting Engine"
      intro="Blanket retargeting lost money on average. I used the randomized A/B test to estimate each customer's incremental spend (CATE) in R, then built a policy that only retargets customers who are profitable to reach."
      stamp="R MARKDOWN"
      impact={[
        { v: "-$0.055", l: "Profit / Customer (Blanket)" },
        { v: "CATE", l: "Per-Customer Uplift" },
        { v: "23.7%", l: "Customers Targeted" },
        { v: "$974K", l: "Optimal Profit / 1M" },
      ]}
      foot={["PREPARED BY TANYA MAHAJAN", "UCHICAGO BOOTH / R · TIDYVERSE · LM"]}
    >
      <StageGrid
        stages={[
          { n: "01", title: "Validate the Test", did: ["Checked randomization balance across treatment & control", "Confirmed groups were comparable before estimating lift"], output: "Clean experiment" },
          { n: "02", title: "Average Effect", did: ["Estimated average incremental effect (AIE) of retargeting", "margin × AIE − cost = −$0.055 → blanket targeting loses money"], output: "Business case" },
          { n: "03", title: "Predict CATE", did: ["Fit an lm() with treatment interactions on every feature", "CATE = ŷ(treated) − ŷ(control); range −120 to 1,575"], output: "Uplift scores" },
          { n: "04", title: "Validate with Lift", did: ["Ranked customers into CATE score groups", "Lift chart confirmed high-score groups truly respond more"], output: "Model check" },
          { n: "05", title: "Optimal Policy", did: ["Target only if margin × CATE > cost", "Compared vs. 0% & 100% targeting with IPW profit"], output: "$974K / 1M users" },
        ]}
      />
      <div className="blueprint-flow" aria-hidden>
        <span>A/B DATA</span><i>→</i><span>AIE</span><i>→</i><span>CATE MODEL</span><i>→</i><span>LIFT TEST</span><i>→</i><span>TARGET POLICY</span>
      </div>
      <div className="exhibit-code">
        <p className="project-label">[ CODE EXCERPT // Tanya_Mahajan_Final_Submission.Rmd ]</p>
        <pre><code>{TELCOX_CODE}</code></pre>
      </div>
      <div className="exhibit-compare">
        {[
          { l: "Target nobody", d: "Leaves incremental spend on the table" },
          { l: "Target everyone", d: "Pays for ads on customers with negative uplift" },
          { l: "Optimal (top 23.7%)", d: "Highest profit — $974,318 per 1M customers", win: true },
        ].map((row) => (
          <div key={row.l} className={row.win ? "exhibit-compare-row exhibit-compare-win" : "exhibit-compare-row"}>
            <strong>{row.l}</strong><span>{row.d}</span>
          </div>
        ))}
      </div>
    </ExhibitShell>
  );
}

function DurexExhibit() {
  return (
    <ExhibitShell
      label="Exhibit C / Strategy Deck Summary"
      title="Durex // IntiMate GTM Strategy"
      intro="A 0-to-1 app concept for India's growing long-distance couples — taking Durex from purely sexual wellness into emotional intimacy, with a full monetization, marketing, and rollout plan."
      stamp="23-PAGE DECK"
      impact={[
        { v: "66%", l: "LDR Couples Miss Intimacy" },
        { v: "3 Tiers", l: "₹169 / ₹239 / ₹299" },
        { v: "40%", l: "Durex India Share" },
        { v: "Metro → T3", l: "Phased Launch" },
      ]}
      foot={["PREPARED BY TANYA MAHAJAN & TEAM", "RECKITT · UCHICAGO BOOTH / BRAND MANAGEMENT"]}
    >
      <StageGrid
        stages={[
          { n: "01", title: "Landscape", did: ["Mapped condom market share (Manforce 32%, Durex 14%)", "Shift from health-focused to pleasure & inclusivity"], output: "Market map" },
          { n: "02", title: "Gen Z Insight", did: ["Surveyed long-distance couples aged 18–24", "Top pains: no physical intimacy, scheduling, shared activities"], output: "Unmet need" },
          { n: "03", title: "Product: IntiMate", did: ["Date planner, co-streaming, games, shared diary", "Gifting with Durex discounts; end-to-end encryption"], output: "App concept" },
          { n: "04", title: "Monetize", did: ["Standard / Premium / Premium+ subscriptions", "Ads, gift partners, paid wellness-expert sessions"], output: "Revenue model" },
          { n: "05", title: "Go to Market", did: ["Wellness influencers, celebrity ads, telco data bundles", "Metro launch → rural pilot; regulatory workarounds"], output: "Rollout plan" },
        ]}
      />
      <div className="blueprint-flow" aria-hidden>
        <span>AWARENESS</span><i>→</i><span>CONSIDERATION</span><i>→</i><span>TRIAL</span><i>→</i><span>LOYALTY</span><i>→</i><span>ADVOCACY</span>
      </div>
      <div className="exhibit-compare">
        {[
          { l: "Brand pyramid", d: "Safe, private platform → closer couples → human connection → trusted intimacy partner" },
          { l: "Why Durex can win", d: "Young online audience, no one-stop rival (Between, Couply), Reckitt scale & Indian manufacturing" },
          { l: "Brand stretch precedent", d: "Dove → Dove Men+Care: new audience, same core DNA", win: true },
        ].map((row) => (
          <div key={row.l} className={row.win ? "exhibit-compare-row exhibit-compare-win" : "exhibit-compare-row"}>
            <strong>{row.l}</strong><span>{row.d}</span>
          </div>
        ))}
      </div>
    </ExhibitShell>
  );
}
