import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PaperCard } from "@/components/scrapbook";
import { ACCENT_BG, GROUNDING, SKILLS } from "@/lib/resume-data";

export const Route = createFileRoute("/toolkit")({
  head: () => ({
    meta: [
      { title: "toolkit & education — tanya mahajan" },
      {
        name: "description",
        content:
          "The tools Tanya Mahajan works in — SQL, Python, Power BI, Tableau, HubSpot, causal inference — plus Booth MiM, Ashoka University and AWIFS leadership.",
      },
      { property: "og:title", content: "toolkit & education — tanya mahajan" },
      {
        property: "og:description",
        content:
          "SQL, Python, Power BI, Tableau, HubSpot and causal inference, plus UChicago Booth, Ashoka University and founding AWIFS.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ToolkitPage,
});

function ToolkitPage() {
  return (
    <PageShell title="my toolkit" crumb="skills · education · leadership">
      <PaperCard tilt={-0.7}>
        <h2 className="font-mono text-xs tracking-[0.18em] text-ink/60 uppercase">what i work in</h2>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {SKILLS.map((skill) => (
            <div
              key={skill.name}
              className={`rounded-md ${ACCENT_BG[skill.accent]} px-4 py-4 transition-transform duration-200 hover:-translate-y-0.5`}
            >
              <div className="font-semibold">{skill.name}</div>
              <div className="mt-0.5 font-mono text-[11px] tracking-[0.1em] text-ink/70 uppercase">
                {skill.label}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 font-mono text-xs text-ink/55">
          also fluent in: Salesforce · Looker Studio · VBA · G-Suite · Microsoft Office
        </p>
      </PaperCard>

      <PaperCard tilt={0.7}>
        <h2 className="font-mono text-xs tracking-[0.18em] text-ink/60 uppercase">
          education &amp; leadership
        </h2>
        <div className="mt-5 grid gap-5">
          {GROUNDING.map((item) => (
            <div key={item.title} className="flex gap-4">
              <span
                className={`mt-2 inline-block size-2.5 shrink-0 rounded-full ${ACCENT_BG[item.accent]}`}
              />
              <div>
                <div className="leading-tight font-semibold">{item.title}</div>
                <div className="mt-1 font-mono text-xs leading-relaxed text-ink/70">
                  {item.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </PaperCard>
    </PageShell>
  );
}
