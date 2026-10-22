import { createFileRoute } from "@tanstack/react-router";
import cameraAsset from "@/assets/pixel/camera-silhouette.png.asset.json";
import { DossierPage } from "@/components/dossier-layout";

export const Route = createFileRoute("/photography")({
  head: () => ({ meta: [
    { title: "Photography — Tanya Mahajan" },
    { name: "description", content: "Tanya Mahajan's personal photography archive and visual field notes." },
    { property: "og:title", content: "Photography — Tanya Mahajan" },
    { property: "og:description", content: "A personal archive of Tanya Mahajan's photography and visual field notes." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: PhotographyPage,
});

function PhotographyPage() {
  return (
    <DossierPage code="SECTION E / PERSONAL ARCHIVE" title="Photography: Visual Field Notes" intro="A contact sheet for the places, people, and small details I notice along the way.">
      <article className="photo-file mt-10 mx-auto">
        <div className="camera-viewfinder">
          <img src={cameraAsset.url} alt="Pink point-and-shoot camera, back view with blank display" className="camera-body image-pixelated" />
          {/* The camera display — rotating photo series will live here */}
          <div className="camera-screen" aria-label="Camera display">
            <div className="camera-screen-empty">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">no film loaded yet</p>
              <p className="mt-2 font-hand text-2xl text-ink/50">Shots coming soon</p>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center font-mono text-xs text-ink/60">This contact sheet is ready for the photographs Tanya selects for her archive.</p>
      </article>
    </DossierPage>
  );
}
