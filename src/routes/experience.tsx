import { createFileRoute } from "@tanstack/react-router";
import { DossierPage } from "@/components/dossier-layout";
import { EXPERIENCE } from "@/lib/resume-data";

export const Route = createFileRoute("/experience")({
  head: () => ({ meta: [
    { title: "Work Experience — Tanya Mahajan" },
    { name: "description", content: "Tanya Mahajan's work across marketing analytics at TransUnion, product marketing at Kindworks AI, and brand management at mCaffeine." },
    { property: "og:title", content: "Work Experience — Tanya Mahajan" },
    { property: "og:description", content: "Role logs spanning marketing analytics, product marketing, and brand management." },
    { property: "og:type", content: "profile" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <DossierPage code="SECTION A / ROLE LOGS" title="Filed Under: Work History & Role Logs">
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {EXPERIENCE.map((role, index) => (
          <article key={role.company} className="dossier-card flex flex-col">
            <div className="flex items-start justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/60"><span>ROLE 0{index + 1}</span><span>{role.period}</span></div>
            <h2 className="mt-7 text-2xl leading-tight font-semibold">{role.role}</h2>
            <p className="mt-1 font-mono text-xs text-file-red">{role.company} · {role.location}</p>
            <p className="mt-5 leading-relaxed text-ink/75">{role.summary}</p>
            <ul className="mt-6 space-y-3 border-t border-ink/15 pt-5 text-sm leading-relaxed text-ink/75">
              {role.points.slice(0, 3).map((point) => <li key={point} className="flex gap-3"><span aria-hidden>→</span><span>{point}</span></li>)}
            </ul>
          </article>
        ))}
      </div>
    </DossierPage>
  );
}