import { createFileRoute } from "@tanstack/react-router";
import { DossierPage } from "@/components/dossier-layout";
import { PROJECT_CASES } from "@/lib/portfolio-content";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [
    { title: "Strategic Projects — Tanya Mahajan" },
    { name: "description", content: "Growth case studies by Tanya Mahajan spanning Durex, HYPHEN, and a TelcoX causal-inference retargeting model." },
    { property: "og:title", content: "Strategic Projects — Tanya Mahajan" },
    { property: "og:description", content: "Durex GTM strategy, HYPHEN brand growth, and TelcoX personalized retargeting." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <DossierPage code="SECTION B / CASE FILES" title="Filed Under: Strategic Projects & Growth Case Studies">
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {PROJECT_CASES.map((project) => (
          <article key={project.title} className="dossier-card">
            <p className="font-mono text-[10px] tracking-[0.14em] text-file-red">{project.code}</p>
            <h2 className="mt-5 text-2xl leading-tight font-semibold">{project.title}</h2>
            <p className="mt-2 font-mono text-xs text-ink/55">{project.client}</p>
            <p className="mt-5 leading-relaxed text-ink/75">{project.description}</p>
            <div className="mt-7 flex flex-wrap gap-2">{project.metrics.map((metric) => <span key={metric} className="file-chip">{metric}</span>)}</div>
          </article>
        ))}
      </div>
    </DossierPage>
  );
}