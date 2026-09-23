import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PaperCard, Tag } from "@/components/scrapbook";
import { ACCENT_BG, EXPERIENCE, TAG_ROTATION } from "@/lib/resume-data";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "experience — tanya mahajan" },
      {
        name: "description",
        content:
          "Tanya Mahajan's roles: Marketing Consulting Analyst at TransUnion, Product Marketing at Kindworks AI, and Brand Management at mCaffeine.",
      },
      { property: "og:title", content: "experience — tanya mahajan" },
      {
        property: "og:description",
        content:
          "TransUnion, Kindworks AI and mCaffeine — the analytics, go-to-market and brand work behind Tanya Mahajan's resume.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <PageShell title="where i've worked" crumb="experience · 3 roles">
      {EXPERIENCE.map((item, i) => (
        <PaperCard key={item.company} tilt={i % 2 === 0 ? -0.7 : 0.7}>
          <span
            className={`inline-block rounded-full ${ACCENT_BG[item.accent]} px-3 py-1 font-mono text-[11px] tracking-[0.14em] uppercase`}
          >
            {item.period}
          </span>
          <h2 className="mt-4 text-2xl leading-tight font-semibold sm:text-3xl">{item.role}</h2>
          <p className="mt-1 font-mono text-sm text-ink/70">
            {item.company} · {item.location}
          </p>
          <p className="mt-4 max-w-[58ch] leading-relaxed font-medium text-pretty">{item.summary}</p>
          <ul className="mt-5 space-y-2.5 text-sm leading-relaxed sm:text-base">
            {item.points.map((point) => (
              <li key={point} className="flex gap-3">
                <span
                  className={`mt-2 inline-block size-1.5 shrink-0 rounded-full ${ACCENT_BG[item.accent]}`}
                />
                <span className="text-pretty">{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {item.tags.map((tag, t) => (
              <Tag key={tag} label={tag} accent={TAG_ROTATION[t % TAG_ROTATION.length] ?? "peach"} />
            ))}
          </div>
        </PaperCard>
      ))}
    </PageShell>
  );
}
