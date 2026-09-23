import { createFileRoute } from "@tanstack/react-router";
import avatarAsset from "@/assets/pixel/about_me.png.asset.json";
import { DossierPage } from "@/components/dossier-layout";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "Personnel File — Tanya Mahajan" },
    { name: "description", content: "Meet Tanya Mahajan beyond work: her path from Ashoka and UChicago Booth to growth marketing, life in Chicago, writing, family, and photography." },
    { property: "og:title", content: "Personnel File — Tanya Mahajan" },
    { property: "og:description", content: "Off-the-clock notes from Tanya Mahajan's personnel file." },
    { property: "og:type", content: "profile" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: AboutPage,
});

const assetUrl = (asset: { url: string }) => asset.url;

function AboutPage() {
  return (
    <DossierPage code="SECTION D / APPROVED FOR RELEASE" title="Personnel File: Off-the-Clock Data">
      <article className="personnel-letter mt-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_220px]">
          <div className="space-y-5 text-lg leading-relaxed text-ink/80">
            <p>My path started with Economics and Finance at Ashoka University, then moved through UChicago Booth&apos;s Master in Management program into growth marketing, product positioning, and consumer psychology.</p>
            <p>Chicago is the city I associate most with myself now: part classroom, part running route, part never-ending coffee shop ranking. My obsession with why consumers choose what they choose eventually became the Clever Consumer Club, where I write about brands, behavior, and the aspiration economy.</p>
            <p>Back home in India are my family and Little Snowy, our dog. Off the clock, I reset through yoga, running, pickleball, photography, and the serious business of deciding which Chicago café deserves the next top spot.</p>
          </div>
          <div className="flex flex-col items-center justify-center border-t border-dashed border-ink/25 pt-7 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
            <img src={assetUrl(avatarAsset)} alt="Pixel-art portrait of Tanya" className="w-40 image-pixelated" />
            <p className="mt-4 text-center font-mono text-[10px] tracking-[0.12em]">SUBJECT: T. MAHAJAN<br />LOCATION: CHICAGO, IL</p>
          </div>
        </div>
        <div className="mt-10 border-t border-ink/20 pt-6">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.1em]">Approved for external release. Powered by coffee, movement, and consumer psychology.</p>
        </div>
      </article>
    </DossierPage>
  );
}