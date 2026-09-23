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
            <p>Dear Reader,</p>
            <p>Welcome to my corner of the internet!</p>
            <p>If you strip away the growth strategy and analytics, at my core, I am someone powered by curiosity, movement, and a deep love for human connection.</p>
            <p>I'm incapable of sitting still for long. I'm a big believer in movement as fuel—whether that's running along the lakefront, playing pickleball, trying new outdoor activities, or exploring new places through travel. Yoga, in particular, has become a grounding anchor in my life; it's my ultimate mental reset, and my dream is to eventually complete my Yoga Teacher Training certificate. When I'm not outdoors or on the mat, you'll usually find me on a continuous mission to rank every espresso shot and coffee shop in the city.</p>
            <p>While my roots, my family, and my tiny furry soulmate—Little Snowy—are back home in India, Chicago is the city I associate with myself the most. There's an energy, grit, and warmth here that completely matches my wavelength. That same curiosity about people and places is what naturally led me to consumer psychology and writing my Substack—I just love understanding what makes people tick, whether in life, travel, or storytelling.</p>
            <p>Whether you're here to talk growth, swap travel stories, share your favorite yoga flow, or debate the best coffee in Chicago, I'm so glad you stopped by!</p>
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
