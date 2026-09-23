import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PaperCard } from "@/components/scrapbook";
import { ACCENT_BG, PROJECTS } from "@/lib/resume-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "projects — tanya mahajan" },
      {
        name: "description",
        content:
          "Case studies by Tanya Mahajan: a causal-inference retargeting policy for TelcoX and a Gen Z brand growth strategy for Durex at Reckitt.",
      },
      { property: "og:title", content: "projects — tanya mahajan" },
      {
        property: "og:description",
        content:
          "Causal inference for TelcoX retargeting and a Gen Z growth strategy for Durex — two case studies in full.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <PageShell title="things i've built" crumb="projects · case studies">
      {PROJECTS.map((project, i) => (
        <PaperCard key={project.title} tilt={i % 2 === 0 ? 0.8 : -0.8}>
          <span
            className={`inline-block rounded-full ${ACCENT_BG[project.accent]} px-3 py-1 font-mono text-[11px] tracking-[0.14em] uppercase`}
          >
            {project.category}
          </span>
          <h2 className="mt-4 text-2xl leading-tight font-semibold text-balance sm:text-3xl">
            {project.title}
          </h2>
          <p className="mt-3 max-w-[54ch] leading-relaxed text-pretty text-ink/80">
            {project.teaser}
          </p>
          <ul className="mt-5 space-y-2.5 text-sm leading-relaxed sm:text-base">
            {project.story.map((line) => (
              <li key={line} className="flex gap-3">
                <span
                  className={`mt-2 inline-block size-1.5 shrink-0 rounded-full ${ACCENT_BG[project.accent]}`}
                />
                <span className="text-pretty">{line}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.metrics.map((metric) => (
              <span
                key={metric}
                className="rounded-full bg-ink px-3 py-1 font-mono text-[11px] text-cream"
              >
                {metric}
              </span>
            ))}
          </div>
        </PaperCard>
      ))}
    </PageShell>
  );
}
