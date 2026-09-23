import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import avatarAsset from "@/assets/pixel/about_me.png.asset.json";
import cameraAsset from "@/assets/pixel/icon_pictures.png.asset.json";
import booksAsset from "@/assets/pixel/icon_research.png.asset.json";
import notepadAsset from "@/assets/pixel/portfolio_icon.png.asset.json";
import filesAsset from "@/assets/pixel/resume_icon.png.asset.json";
import laptopAsset from "@/assets/pixel/laptop_icon.png.asset.json";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): { desk?: boolean } => ({ desk: search.desk === true || search.desk === "true" ? true : undefined }),
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

function DesktopLink({ to, label, className, delayClass, children }: { to: "/experience" | "/projects" | "/memos" | "/about" | "/contact"; label: string; className: string; delayClass: string; children: ReactNode }) {
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
          <Button type="button" variant="ghost" onClick={dismissFolder} className="folder-file h-auto w-[min(88vw,900px)] whitespace-normal p-0 text-ink shadow-none hover:bg-transparent" aria-label="Open Tanya Mahajan's portfolio">
            <span className="folder-papers" aria-hidden />
            <span className="folder-tab" aria-hidden />
            <span className="folder-clip" aria-hidden />
            <span className="relative z-10 flex min-h-[390px] w-full flex-col items-center justify-center px-7 py-16 text-center sm:min-h-[500px] sm:px-14">
              <span className="font-hand text-5xl leading-none font-semibold text-file-red sm:text-7xl">Hi! I&apos;m Tanya!</span>
              <span className="mt-6 max-w-2xl font-mono text-sm leading-relaxed sm:text-lg">Welcome to my Website, find everything &quot;filed&quot; below :)</span>
              <span className="mt-10 border-b border-ink/40 pb-1 font-mono text-xs sm:text-sm">[click on the folder to learn more]</span>
            </span>
          </Button>
        </div>
      ) : null}

      <section className="flex min-h-dvh items-center px-4 py-10">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-center font-mono text-xs tracking-[0.12em] sm:text-sm">[click icons to learn more]</p>
          <div className="desktop-grid mx-auto mt-6 min-h-[650px] max-w-5xl sm:min-h-[720px]">
            <DesktopLink to="/memos" label="Substack Memos" delayClass="pixel-delay-1" className="desk-memos"><img src={assetUrl(notepadAsset)} alt="Pixel-art notepad and pen" /></DesktopLink>
            <DesktopLink to="/about" label="Personnel File" delayClass="pixel-delay-2" className="desk-about"><span className="flex items-end justify-center gap-1"><img src={assetUrl(cameraAsset)} alt="Pixel-art camera" className="w-[62%]" /><img src={assetUrl(booksAsset)} alt="Pixel-art book stack" className="w-[35%]" /></span></DesktopLink>
            <DesktopLink to="/experience" label="Experience" delayClass="pixel-delay-3" className="desk-experience"><img src={assetUrl(filesAsset)} alt="Pixel-art file stack" /></DesktopLink>
            <DesktopLink to="/projects" label="Projects" delayClass="pixel-delay-4" className="desk-projects"><img src={assetUrl(laptopAsset)} alt="Pixel-art laptop" /></DesktopLink>
            <DesktopLink to="/contact" label="Contact" delayClass="pixel-delay-5" className="desk-contact"><img src={assetUrl(avatarAsset)} alt="Pixel-art avatar of Tanya Mahajan" /></DesktopLink>
          </div>
        </div>
      </section>
    </main>
  );
}