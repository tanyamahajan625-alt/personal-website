import { createFileRoute } from "@tanstack/react-router";
import cameraAsset from "@/assets/pixel/icon_pictures-2.png.asset.json";
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
        <div className="photo-placeholder">
          <img src={cameraAsset.url} alt="Pixel-art camera" className="w-40 image-pixelated" />
          <p className="mt-5 font-hand text-3xl">Personal shots coming soon.</p>
          <p className="mt-2 max-w-md text-center font-mono text-xs leading-relaxed text-ink/60">This contact sheet is ready for the photographs Tanya selects for her archive.</p>
        </div>
      </article>
    </DossierPage>
  );
}