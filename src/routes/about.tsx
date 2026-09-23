import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PaperCard } from "@/components/scrapbook";
import { RESUME_URL } from "@/lib/resume-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "about me — tanya mahajan" },
      {
        name: "description",
        content:
          "Tanya Mahajan is a marketing analytics consultant in Chicago and a UChicago Booth MiM grad who turns messy consumer behavior into decisions brands trust.",
      },
      { property: "og:title", content: "about me — tanya mahajan" },
      {
        property: "og:description",
        content:
          "Marketing analytics in Chicago, Booth MiM, and a lifelong habit of asking why people buy what they buy.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AboutPage,
});

const OFF_THE_CLOCK = [
  "hiking",
  "pickleball",
  "bollywood movies",
  "coffee (iced, always)",
  "dogs",
  "yoga",
];

function AboutPage() {
  return (
    <PageShell title="a little about me" crumb="about · chicago, il">
      <PaperCard tilt={-0.8}>
        <p className="font-hand text-2xl leading-snug text-pretty sm:text-3xl">
          I'm a data-minded storyteller who genuinely can't stop asking why people buy what they
          buy.
        </p>
        <div className="mt-5 grid gap-4 leading-relaxed text-pretty text-ink/85">
          <p>
            By day I'm a Marketing Consulting Analyst at TransUnion in Chicago, running analytics
            workstreams for Fortune 500 brands — measuring what campaigns actually moved rather than
            what they reported.
          </p>
          <p>
            Before that: go-to-market at a pre-seed AI startup, brand management at an Indian D2C
            personal care company, a Master in Management from UChicago Booth, and an economics and
            finance degree from Ashoka University, where I founded the Women in Finance Society.
          </p>
          <p>
            The thread running through all of it is consumer curiosity — which is also why I write
            the Clever Consumer Club on the side.
          </p>
        </div>
      </PaperCard>

      <PaperCard tilt={0.7}>
        <h2 className="font-mono text-xs tracking-[0.18em] text-ink/60 uppercase">off the clock</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {OFF_THE_CLOCK.map((thing) => (
            <span
              key={thing}
              className="rounded-full bg-paper px-3 py-1.5 font-mono text-xs ring-1 ring-ink/15"
            >
              {thing}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="pshadow inline-flex items-center gap-2 rounded-md bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition-transform duration-200 hover:-translate-y-0.5"
          >
            download my resume
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-card px-5 py-2.5 text-sm font-semibold ring-1 ring-ink/20 transition-transform duration-200 hover:-translate-y-0.5"
          >
            get in touch
          </Link>
        </div>
      </PaperCard>
    </PageShell>
  );
}
