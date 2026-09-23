import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PaperCard } from "@/components/scrapbook";
import { SUBSTACK_URL } from "@/lib/resume-data";

export const Route = createFileRoute("/writing")({
  head: () => ({
    meta: [
      { title: "clever consumer club — tanya mahajan" },
      {
        name: "description",
        content:
          "The Clever Consumer Club: Tanya Mahajan's Substack on consumer psychology, beauty, fashion and the stories brands tell.",
      },
      { property: "og:title", content: "clever consumer club — tanya mahajan" },
      {
        property: "og:description",
        content:
          "A girl in her 20s trying to understand why we fill our carts the way we do — consumer psychology, beauty, fashion and brand storytelling.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: WritingPage,
});

const THEMES = [
  "why we fill our carts the way we do",
  "beauty, fashion and the aspiration economy",
  "the stories brands tell — and the ones we believe",
  "consumer psychology, unpacked for normal people",
];

function WritingPage() {
  return (
    <PageShell title="clever consumer club" crumb="writing · substack">
      <PaperCard tilt={-0.8}>
        <p className="font-hand text-2xl leading-snug text-pretty sm:text-3xl">
          A girl in her 20s trying to understand why we fill our carts the way we do.
        </p>
        <p className="mt-5 max-w-[56ch] leading-relaxed text-pretty text-ink/80">
          The Clever Consumer Club is my Substack — part consumer psychology, part cultural
          criticism, part diary of a marketer who can't stop analyzing her own shopping habits. It's
          where the analytics day job meets the part of me that just finds people fascinating.
        </p>
        <ul className="mt-6 space-y-2 font-mono text-sm text-ink/75">
          {THEMES.map((theme) => (
            <li key={theme} className="flex gap-3">
              <span className="text-pink">♥</span>
              <span>{theme}</span>
            </li>
          ))}
        </ul>
        <a
          href={SUBSTACK_URL}
          target="_blank"
          rel="noreferrer"
          className="pshadow mt-8 inline-flex items-center gap-2 rounded-md bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition-transform duration-200 hover:-translate-y-0.5"
        >
          read on substack →
        </a>
      </PaperCard>
    </PageShell>
  );
}
