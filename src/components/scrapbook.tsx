import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ACCENT_BG, type Accent } from "@/lib/resume-data";

export function Tag({ label, accent }: { label: string; accent: Accent }) {
  return (
    <span
      className={`rounded-full ${ACCENT_BG[accent]} px-2.5 py-1 font-mono text-xs text-ink ring-1 ring-ink/25`}
    >
      {label}
    </span>
  );
}

export function PaperCard({
  children,
  tilt = -0.6,
  tape = true,
  className = "",
}: {
  children: ReactNode;
  tilt?: number;
  tape?: boolean;
  className?: string;
}) {
  return (
    <div
      style={{ rotate: `${tilt}deg` }}
      className={`pshadow relative rounded-md bg-card p-6 ring-1 ring-ink/10 transition-transform duration-300 hover:rotate-0 sm:p-8 ${className}`}
    >
      {tape ? (
        <span
          aria-hidden
          className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 -rotate-3 rounded-[2px] bg-butter/70 shadow-sm"
        />
      ) : null}
      {children}
    </div>
  );
}

export function PageShell({
  title,
  crumb,
  children,
}: {
  title: string;
  crumb: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-paper font-display text-ink antialiased">
      <div className="mx-auto max-w-3xl px-5 pt-8 pb-20 sm:px-8">
        <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.18em] text-ink/60">
          <Link to="/" search={{ desk: true }} className="transition-colors hover:text-ink">
            ← back to the desk
          </Link>
          <span className="hidden sm:inline">{crumb}</span>
        </div>
        <h1 className="mt-10 font-hand text-6xl leading-none font-semibold text-balance sm:text-7xl">
          {title}
        </h1>
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-ink/60 sm:hidden">
          {crumb}
        </p>
        <div className="mt-12 grid gap-10">{children}</div>
        <p className="mt-16 text-center font-mono text-[11px] text-ink/40">
          tanya mahajan · marketing analytics · chicago
        </p>
      </div>
    </div>
  );
}
