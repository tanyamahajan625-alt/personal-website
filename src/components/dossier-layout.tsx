import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const NAV_ITEMS = [
  ["Experience", "/experience"],
  ["Projects", "/projects"],
  ["Substack Memos", "/memos"],
  ["Personnel File", "/about"],
  ["Photography", "/photography"],
  ["Contact", "/contact"],
] as const;

export function DossierHeader() {
  return (
    <header className="dossier-header">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link to="/" search={{}} className="shrink-0 font-mono text-xs font-semibold tracking-[0.08em] uppercase sm:text-sm">
          Tanya Mahajan
        </Link>
        <nav className="dossier-nav" aria-label="Portfolio pages">
          {NAV_ITEMS.map(([label, to]) => (
            <Link key={to} to={to} activeProps={{ className: "active" }}>
              {label}
            </Link>
          ))}
        </nav>
        <Link to="/" search={{ desk: true }} className="return-to-desk">
          [ RETURN TO DESK ↑ ]
        </Link>
      </div>
    </header>
  );
}

export function DossierPage({ code, title, intro, children }: { code: string; title: string; intro?: string; children: ReactNode }) {
  return (
    <main className="paper-texture min-h-dvh font-display text-ink antialiased">
      <DossierHeader />
      <section className="dossier-page">
        <div className="dossier-inner">
          <SectionHeading code={code} title={title} />
          {intro ? <p className="mt-5 max-w-3xl leading-relaxed text-ink/70">{intro}</p> : null}
          {children}
        </div>
      </section>
    </main>
  );
}

export function SectionHeading({ code, title }: { code: string; title: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] tracking-[0.16em] text-file-red uppercase">{code}</p>
      <h1 className="mt-3 max-w-4xl text-4xl leading-tight font-semibold text-balance sm:text-5xl">{title}</h1>
    </div>
  );
}