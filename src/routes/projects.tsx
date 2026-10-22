import { createFileRoute } from "@tanstack/react-router";
import { ChevronRight, Download, FileText, Maximize2, Pause, Play, X } from "lucide-react";
import { useEffect, useState } from "react";
import { DossierPage } from "@/components/dossier-layout";
import { Button } from "@/components/ui/button";
import campaignImage from "@/assets/projects/hyphen-cobranding-campaign.png.asset.json";
import creativeTestingImage from "@/assets/projects/creative-testing-performance.jpg.asset.json";
import retailActivationImage from "@/assets/projects/omnichannel-retail-activation.jpg.asset.json";
import tennisCampaignVideo from "@/assets/projects/dewy-prep-tennis-court.mp4.asset.json";
import campaignRecordingVideo from "@/assets/projects/hyphen-campaign-screen-recording.mov.asset.json";
import telcoxAnalysis from "@/assets/projects/tanya-mahajan-final-submission.Rmd.asset.json";

type ProjectId = "durex" | "telcox" | "hyphen";
type GalleryMode = "visual" | "video";

const PROJECTS = [
  {
    id: "durex" as const,
    number: "01",
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
    action: "Open Full Strategy Deck",
    download: null,
  },
  {
    id: "telcox" as const,
    number: "02",
    shortTitle: "TelcoX Retargeting",
    subtitle: "Personalized causal model",
    category: "Growth Analytics & Experimentation",
    title: "TelcoX Personalized Retargeting Model",
    institution: "UChicago Booth",
    metrics: [
      { value: "~600K", label: "A/B Test Participants" },
      { value: "CATE", label: "Effect Model" },
      { value: "MAX ROI", label: "Targeting Policy" },
    ],
    brief: "Engineered a profit-maximizing retargeting model in R using CATE causal machine learning to prevent ad spend cannibalization and outperform blanket targeting.",
    tags: ["Causal Inference", "R / Econometrics", "A/B Testing"],
    action: "View Causal Analysis & Code",
    download: {
      href: telcoxAnalysis.url,
      filename: "Tanya_Mahajan_Final_Submission.Rmd",
      label: "Analysis source & write-up",
      meta: "R Markdown · 18 KB · CATE analysis, code & policy",
    },
  },
  {
    id: "hyphen" as const,
    number: "03",
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
    action: "View Partnership Blueprint",
    download: null,
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
  const [activeId, setActiveId] = useState<ProjectId>("durex");
  const [galleryMode, setGalleryMode] = useState<GalleryMode>("visual");
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const [artifactOpen, setArtifactOpen] = useState(false);
  const activeProject = PROJECTS.find((project) => project.id === activeId) ?? PROJECTS[0];

  useEffect(() => {
    if (!lightbox) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [lightbox]);

  if (!activeProject) return null;

  function selectProject(id: ProjectId) {
    setActiveId(id);
    setArtifactOpen(false);
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
              <Button
                type="button"
                variant="outline"
                className="project-action mt-7"
                aria-expanded={artifactOpen}
                onClick={() => setArtifactOpen((current) => !current)}
              >
                [ {artifactOpen ? "Close File" : activeProject.action} {artifactOpen ? "×" : "->"} ]
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
    <div className={`artifact-preview artifact-hyphen ${expanded ? "artifact-expanded" : ""}`} aria-label="HYPHEN partnership blueprint preview">
      <div className="artifact-toolbar"><span>PARTNERSHIP MAP</span><span>5 BRANDS</span></div>
      <div className="artifact-network" aria-hidden>
        <span>HYPHEN</span><i /><b>CONTENT</b><i /><b>RETAIL</b><i /><b>CRM</b>
      </div>
      <p>CO-BRANDING SYSTEM → ACTIVATION → COMMERCIAL GROWTH</p>
    </div>
  );
}

function HyphenGallery({ mode, onModeChange, onOpenImage }: { mode: GalleryMode; onModeChange: (mode: GalleryMode) => void; onOpenImage: (src: string, alt: string) => void }) {
  const imageSlots: [
    { src: string; alt: string; tag: string; text: string },
    { src: string; alt: string; tag: string; text: string },
    { src: string; alt: string; tag: string; text: string },
  ] = [
    { src: campaignImage.url, alt: "mCaffeine campaign and co-branding profile", tag: "01 // D2C Partnership Architecture & Co-Branding Visuals", text: "Cross-brand positioning across mCaffeine's ecosystem and Hyphen's D2C launch assets." },
    { src: creativeTestingImage.url, alt: "HYPHEN creative campaign frame", tag: "02 // High-Converting Ad Creatives & Creative Testing", text: "A/B creative variations supporting performance-led launch campaigns." },
    { src: retailActivationImage.url, alt: "HYPHEN mobile campaign and retail activation", tag: "04 // Retail Touchpoints & Partnership Growth Blueprint", text: "Mobile-first campaign touchpoints connecting storytelling to omnichannel activation." },
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
          {imageSlots.slice(0, 2).map((slot) => <ImageArtifact key={slot.tag} {...slot} onOpen={onOpenImage} />)}
          <VideoArtifact src={tennisCampaignVideo.url} tag="03 // Digital Launch Activation Video / Campaign Teaser" />
          <ImageArtifact {...imageSlots[2]} onOpen={onOpenImage} />
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
      <Button type="button" variant="ghost" className="campaign-image-button" onClick={() => onOpen(src, alt)} aria-label={`Open ${tag}`}>
        <img src={src} alt={alt} />
        <span><Maximize2 aria-hidden className="size-4" /> Inspect</span>
      </Button>
      <figcaption><strong>{tag}</strong><span>{text}</span></figcaption>
    </figure>
  );
}

function VideoArtifact({ src, tag }: { src: string; tag: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <figure className="campaign-media-card campaign-video-card">
      <div className="campaign-video-wrap">
        <video src={src} playsInline preload="metadata" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} />
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