import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import avatarAsset from "@/assets/pixel/about_me.png.asset.json";
import cameraAsset from "@/assets/pixel/icon_pictures-2.png.asset.json";
import booksAsset from "@/assets/pixel/icon_research-2.png.asset.json";
import notepadAsset from "@/assets/pixel/portfolio_icon.png.asset.json";
import filesAsset from "@/assets/pixel/resume_icon.png.asset.json";
import laptopAsset from "@/assets/pixel/laptop_icon.png.asset.json";
import linkedinAsset from "@/assets/pixel/pixel_linkedin.png.asset.json";
import substackAsset from "@/assets/pixel/pixel_substack.png.asset.json";
import folderGraphic from "@/assets/pixel/folder-graphic.png";
import { Button } from "@/components/ui/button";
import { LINKEDIN_URL, SUBSTACK_URL } from "@/lib/resume-data";

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): { desk?: boolean } =>
    search["desk"] === true || search["desk"] === "true" ? { desk: true } : {},
  head: () => ({
    meta: [
      { title: "Tanya Mahajan — Interactive Marketing Portfolio" },
      { name: "description", content: "Open Tanya Mahajan's interactive office dossier to explore her marketing experience, growth projects, writing, and personnel file." },
      { property: "og:title", content: "Tanya Mahajan — Interactive Marketing Portfolio" },
      { property: "og:description", content: "A pixel-art desktop for exploring Tanya Mahajan's experience, strategic projects, Substack memos, and resume." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioDesk,
});

const assetUrl = (asset: { url: string }) => asset.url;

function DesktopLink({ to, label, className, delayClass, children }: { to: "/experience" | "/projects" | "/memos" | "/about" | "/photography" | "/contact"; label: string; className: string; delayClass: string; children: ReactNode }) {
  return (
    <Link to={to} preload="intent" className={`pixel-link ${delayClass} ${className}`} aria-label={`Open ${label}`}>
      <span className="pixel-art">{children}</span>
      <span className="pixel-label">[ {label} ]</span>
    </Link>
  );
}

function PortfolioDesk() {
  const { desk } = Route.useSearch();
  const navigate = useNavigate({ from: "/" });
  const [folderOpen, setFolderOpen] = useState(!desk);
  const [folderLeaving, setFolderLeaving] = useState(false);

  useEffect(() => {
    document.body.style.overflow = folderOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [folderOpen]);

  useEffect(() => {
    if (!desk) {
      setFolderOpen(true);
      setFolderLeaving(false);
    }
  }, [desk]);

  const dismissFolder = () => {
    if (folderLeaving) return;
    setFolderLeaving(true);
    window.setTimeout(() => {
      setFolderOpen(false);
      setFolderLeaving(false);
      void navigate({ search: { desk: true }, replace: true });
    }, 600);
  };

  return (
    <main className="paper-texture min-h-dvh overflow-hidden font-display text-ink antialiased">
      {folderOpen ? (
        <div className={`folder-overlay ${folderLeaving ? "folder-overlay-leaving" : ""}`}>
          <Button type="button" variant="ghost" onClick={dismissFolder} className="folder-file h-auto w-[min(86vw,680px)] whitespace-normal p-0 text-ink shadow-none hover:bg-transparent" aria-label="Open Tanya Mahajan's portfolio">
            <img src={folderGraphic} alt="Manila file folder" className="folder-graphic-img" />
            <span className="folder-content relative z-10 flex flex-col items-center justify-center px-7 py-12 text-center sm:px-14 sm:py-16">
              <span className="font-hand text-4xl leading-none font-semibold text-file-red sm:text-6xl">Hi! I'm Tanya!</span>
              <span className="mt-5 max-w-[22rem] font-mono text-sm leading-relaxed sm:max-w-sm sm:text-lg"> Welcome to my Website, find everything "filed" below :)</span>
              <span className="mt-8 border-b border-ink/30 pb-1 font-mono text-[0.65rem] sm:text-xs text-ink/85">[click on the folder to learn more]</span>
              <span className="mt-9 flex items-center justify-center gap-5 sm:gap-7">
                <a href={LINKEDIN_URL} onClick={(e) => e.stopPropagation()} className="folder-social-link" aria-label="Visit Tanya Mahajan's LinkedIn">
                  <img src={assetUrl(linkedinAsset)} alt="Pixel-art LinkedIn logo" className="folder-social-img" />
                </a>
                <a href={SUBSTACK_URL} onClick={(e) => e.stopPropagation()} className="folder-social-link" aria-label="Visit Tanya Mahajan's Substack">
                  <img src={assetUrl(substackAsset)} alt="Pixel-art Substack logo" className="folder-social-img" />
                </a>
              </span>
            </span>
          </Button>
        </div>
      ) : null}

      <section className="flex min-h-dvh items-center px-4 py-10">
        <Link to="/" search={{}} className="desk-return-sign">[ RETURN TO DESK ↑ ]</Link>
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-center font-mono text-xs tracking-[0.12em] sm:text-sm">[click icons to learn more]</p>
          <div className="desktop-grid mx-auto mt-6 min-h-[650px] max-w-5xl sm:min-h-[720px]">
            <DesktopLink to="/memos" label="Substack Memos" delayClass="pixel-delay-1" className="desk-memos"><img src={assetUrl(notepadAsset)} alt="Pixel-art notepad and pen" /></DesktopLink>
            <DesktopLink to="/about" label="Personnel File" delayClass="pixel-delay-2" className="desk-about"><img src={assetUrl(booksAsset)} alt="Pixel-art book stack" /></DesktopLink>
            <DesktopLink to="/photography" label="Photography" delayClass="pixel-delay-6" className="desk-photography"><img src={assetUrl(cameraAsset)} alt="Pixel-art camera" /></DesktopLink>
            <DesktopLink to="/experience" label="Experience" delayClass="pixel-delay-3" className="desk-experience"><img src={assetUrl(filesAsset)} alt="Pixel-art file stack" /></DesktopLink>
            <DesktopLink to="/projects" label="Projects" delayClass="pixel-delay-4" className="desk-projects"><img src={assetUrl(laptopAsset)} alt="Pixel-art laptop" /></DesktopLink>
            <DesktopLink to="/contact" label="Contact" delayClass="pixel-delay-5" className="desk-contact"><img src={assetUrl(avatarAsset)} alt="Pixel-art avatar of Tanya Mahajan" /></DesktopLink>
          </div>
        </div>
      </section>
    </main>
  );
}
