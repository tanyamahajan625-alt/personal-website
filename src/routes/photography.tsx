import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import cameraAsset from "@/assets/pixel/camera-silhouette.png.asset.json";
import shotGopr8459 from "@/assets/photography/GOPR8459.jpg.asset.json";
import shotImg3652 from "@/assets/photography/IMG_3652.jpg.asset.json";
import shotImg3662 from "@/assets/photography/IMG_3662.jpg.asset.json";
import shotImg4562 from "@/assets/photography/IMG_4562.jpg.asset.json";
import shotImg5088 from "@/assets/photography/IMG_5088.jpg.asset.json";
import shotImg5505 from "@/assets/photography/IMG_5505.jpg.asset.json";
import shotImg5635 from "@/assets/photography/IMG_5635.jpg.asset.json";
import { DossierPage } from "@/components/dossier-layout";

const SHOTS = [
  { src: shotGopr8459, alt: "Kayakers paddling beneath a sea-cave rock arch along the coast" },
  { src: shotImg3652, alt: "Flamingos preening beside a zoo pond under leafy trees" },
  { src: shotImg3662, alt: "Swans resting on the bank of a quiet green pond" },
  { src: shotImg4562, alt: "Barcelona's city lights from a rooftop pool at night" },
  { src: shotImg5088, alt: "A shaggy black dog resting on a cobblestone street" },
  { src: shotImg5505, alt: "A Portuguese flag waving from the bow of a boat at sunset" },
  { src: shotImg5635, alt: "The Chicago skyline glowing at sunset from a rooftop lounge" },
] as const;

const ROTATE_MS = 3200;

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
  const [reel, setReel] = useState({ index: 0, prev: 0 });

  useEffect(() => {
    const timer = setInterval(
      () => setReel(({ index }) => ({ index: (index + 1) % SHOTS.length, prev: index })),
      ROTATE_MS,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <DossierPage code="SECTION E / PERSONAL ARCHIVE" title="Photography: Visual Field Notes" intro="A contact sheet for the places, people, and small details I notice along the way.">
      <article className="photo-file mt-10 mx-auto">
        <div className="camera-viewfinder">
          <img src={cameraAsset.url} alt="Pink point-and-shoot camera, back view showing the display" className="camera-body image-pixelated" />
          {/* The camera display — a rotating reel of Tanya's shots */}
          <div className="camera-screen" aria-label="Camera display showing a rotating photo reel">
            {SHOTS.map((shot, i) => {
              const state = i === reel.index ? " camera-shot-active" : i === reel.prev ? " camera-shot-fading" : "";
              return (
                <img
                  key={shot.src.url}
                  src={shot.src.url}
                  alt={shot.alt}
                  className={`camera-shot${state}`}
                  loading={i === 0 ? "eager" : "lazy"}
                />
              );
            })}
            <span className="camera-frame-counter font-mono" aria-hidden>
              {String(reel.index + 1).padStart(2, "0")}/{String(SHOTS.length).padStart(2, "0")}
            </span>
          </div>
        </div>
        <p className="mt-6 text-center font-mono text-xs text-ink/60">Fresh from the film roll — shots rotate on their own, straight out of the camera.</p>
      </article>
    </DossierPage>
  );
}
