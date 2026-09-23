import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { DossierPage } from "@/components/dossier-layout";
import { Button } from "@/components/ui/button";
import { RESUME_URL } from "@/lib/resume-data";

type RoleFilter = "all" | "b2b" | "consumer";

const FILTERS: { label: string; value: RoleFilter }[] = [
  { label: "All Roles", value: "all" },
  { label: "B2B / SaaS", value: "b2b" },
  { label: "Consumer & Analytics", value: "consumer" },
];

const ROLES = [
  {
    id: "transunion",
    filter: "consumer" as const,
    title: "Marketing Consulting Analyst",
    company: "TransUnion",
    metadata: "Chicago, IL | Jun 2025 – Present",
    focus: "Growth Analytics & Attribution",
    stats: [
      { value: "6 HRS/WK", label: "SAVED VIA QA AUTOMATION" },
      { value: "3+", label: "FORTUNE 500 CLIENT WORKSTREAMS MANAGEMENT" },
    ],
    summary:
      "Architecting SQL/GCP data pipelines and multi-channel attribution models to help enterprise clients measure true incremental marketing ROI.",
    bullets: [
      "Executed SQL & GCP data pipelines integrating Nielsen panels to optimize multi-channel performance across 3+ Fortune 500 clients.",
      "Automated Power BI QA workflows, saving 6 hrs/week in operational reporting.",
      "Aligned cross-functional MarTech and Data Science teams to deploy full-funnel attribution models, driving account expansions.",
    ],
    breakdown:
      "The work connects campaign execution to measurement strategy: translating fragmented media and consumer-panel data into reliable reporting infrastructure, then turning attribution findings into channel-mix recommendations for client leadership.",
  },
  {
    id: "kindworks",
    filter: "b2b" as const,
    title: "Product Marketing Intern",
    company: "Kindworks AI",
    metadata: "Pre-seed Tech · Chicago, IL | Jan 2025 – Apr 2025",
    focus: "Enterprise SaaS GTM",
    stats: [
      { value: "+25%", label: "Projected Enterprise Adoption" },
      { value: "+30%", label: "Projected Revenue Lift" },
    ],
    summary:
      "Spearheaded 0-to-1 product positioning, enterprise pitch decks (Bain, Chanel, Audi US), and HubSpot CRM lead scoring for an MS Teams integration.",
    bullets: [
      "Led competitor positioning and user research for MS Teams SaaS launch, projecting a 25% increase in enterprise adoption.",
      "Rebuilt HubSpot CRM lead scoring and automated nurture workflows, lifting pipeline engagement by 10% and improving MQL-to-SQL rates.",
      "Created tailored sales pitch decks that secured enterprise clients (Bain, Chanel, Audi US), driving a 30% increase in projected quarterly revenue.",
    ],
    breakdown:
      "This 0-to-1 mandate covered the full PMM loop—from market intelligence and positioning to sales enablement and lifecycle operations—giving a pre-seed team a clearer enterprise narrative and a more measurable path from lead to opportunity.",
  },
  {
    id: "mcaffeine",
    filter: "consumer" as const,
    title: "Brand Management Intern",
    company: "mCaffeine",
    metadata: "Personal Care Startup · Mumbai, India | May 2024 – Aug 2024",
    focus: "Acquisition Growth",
    stats: [
      { value: "50K+", label: "Customers Acquired (90 Days)" },
      { value: "$300K", label: "Quarterly Sales Generated" },
    ],
    summary:
      "Architected digital launch strategies and multi-channel performance campaigns for new personal care product lines.",
    bullets: [
      "Led 0-to-1 GTM activation for mCaffeine Shades, acquiring 50K+ customers in the first 3 months.",
      "Scaled 3 product launch campaigns, boosting CTR by 18% and generating $300K in quarterly sales revenue.",
    ],
    breakdown:
      "The launch strategy paired performance creative with rapid campaign iteration, connecting brand storytelling to acquisition signals and commercial outcomes across a high-velocity D2C portfolio.",
  },
];

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
  const [activeFilter, setActiveFilter] = useState<RoleFilter>("all");
  const [expandedRoles, setExpandedRoles] = useState<string[]>([]);
  const visibleRoles = ROLES.filter((role) => activeFilter === "all" || role.filter === activeFilter);

  function toggleRole(id: string) {
    setExpandedRoles((current) =>
      current.includes(id) ? current.filter((roleId) => roleId !== id) : [...current, id],
    );
  }

  return (
    <DossierPage code="SECTION A / ROLE LOGS" title="Filed Under: Work History & Role Logs">
      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-4xl font-mono text-sm leading-relaxed text-ink/70">
          Inside the logs: Strategic execution across B2B SaaS GTM, enterprise analytics infrastructure, and high-velocity consumer acquisition.
        </p>
        <Button asChild variant="link" className="h-auto shrink-0 font-mono text-xs text-file-red">
          <a href={RESUME_URL} download="Tanya-Mahajan-Resume.pdf">[ DOWNLOAD_OFFICIAL_RESUME.PDF ]</a>
        </Button>
      </div>

      <div className="role-filter-bar mt-7" role="group" aria-label="Filter work history">
        {FILTERS.map((filter) => (
          <Button
            key={filter.value}
            type="button"
            variant="ghost"
            size="sm"
            aria-pressed={activeFilter === filter.value}
            className="role-filter-button"
            onClick={() => setActiveFilter(filter.value)}
          >
            [ {filter.label} ]
          </Button>
        ))}
      </div>

      <div className="mt-12 flex flex-col gap-8">
        {visibleRoles.map((role) => {
          const isExpanded = expandedRoles.includes(role.id);
          const roleNumber = ROLES.findIndex((item) => item.id === role.id) + 1;

          return (
          <article key={role.id} className="dossier-card p-6 sm:p-10">
            <div className="flex flex-col gap-8 md:flex-row md:gap-12">
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/60">
                  <span>ROLE 0{roleNumber}</span>
                  <span className="role-focus-stamp">[ {role.focus} ]</span>
                </div>
                <h2 className="mt-6 text-2xl leading-tight font-semibold sm:text-3xl">
                  {role.title} <span className="text-ink/60">@ {role.company}</span>
                </h2>
                <p className="mt-2 font-mono text-xs leading-relaxed text-file-red">{role.metadata}</p>
                <p className="mt-6 max-w-2xl leading-relaxed text-ink/75">{role.summary}</p>
                <div className="mt-8">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="rounded-none border-ink/30 bg-paper font-mono text-[10px] uppercase hover:bg-butter"
                    aria-expanded={isExpanded}
                    aria-controls={`${role.id}-breakdown`}
                    onClick={() => toggleRole(role.id)}
                  >
                    [ {isExpanded ? "− Close Brief" : "+ Expand Brief"} ]
                  </Button>
                </div>
              </div>

              <div className="grid shrink-0 grid-cols-2 gap-4 md:w-72 md:grid-cols-1">
                {role.stats.map((stat) => (
                  <div
                    key={stat.value + stat.label}
                    className="flex flex-col items-center justify-center gap-2 border-2 border-ink/70 bg-butter/60 px-4 py-6 text-center shadow-[4px_4px_0_0_var(--ink)]"
                  >
                    <span className="font-mono text-2xl font-bold tracking-tight sm:text-3xl">{stat.value}</span>
                    <span className="font-mono text-[10px] uppercase leading-snug tracking-wide text-ink/70">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {isExpanded ? (
              <div id={`${role.id}-breakdown`} className="role-breakdown mt-8 border-t border-ink/15 pt-6">
                <p className="font-mono text-[10px] uppercase text-file-red">Detailed brief</p>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink/75">
                  {role.bullets.map((point) => <li key={point} className="flex gap-3"><span aria-hidden>-&gt;</span><span>{point}</span></li>)}
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-ink/75">{role.breakdown}</p>
              </div>
            ) : null}
          </article>
          );
        })}
      </div>

    </DossierPage>
  );
}
