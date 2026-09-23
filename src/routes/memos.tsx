import { createFileRoute } from "@tanstack/react-router";
import { DossierPage } from "@/components/dossier-layout";
import { Button } from "@/components/ui/button";
import { MEMOS } from "@/lib/portfolio-content";
import { SUBSTACK_URL } from "@/lib/resume-data";

export const Route = createFileRoute("/memos")({
  head: () => ({ meta: [
    { title: "Substack Memos — Tanya Mahajan" },
    { name: "description", content: "Field notes from Tanya Mahajan on growth marketing, product positioning, consumer psychology, and data-driven strategy." },
    { property: "og:title", content: "Substack Memos — Tanya Mahajan" },
    { property: "og:description", content: "Fresh-off-the-typewriter notes on consumers, brands, and growth." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: MemosPage,
});

function MemosPage() {
  return (
    <DossierPage code="SECTION C / CLEVER CONSUMER CLUB" title="Out of Office Memos & Field Notes" intro="Thoughts on growth marketing, product positioning, consumer psychology, and data-driven strategy—fresh off the typewriter.">
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {MEMOS.map((memo) => (
          <a key={memo.number} href={SUBSTACK_URL} target="_blank" rel="noreferrer" className="dossier-card group block transition-transform duration-200 hover:-translate-y-1">
            <p className="font-mono text-[10px] tracking-[0.14em] text-file-red">{memo.number}</p>
            <h2 className="mt-5 text-xl font-semibold group-hover:underline">{memo.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/70">{memo.summary}</p>
            <span className="mt-8 inline-block font-mono text-xs">[ READ ON SUBSTACK → ]</span>
          </a>
        ))}
      </div>
      <form action={SUBSTACK_URL} target="_blank" className="memo-form mt-8">
        <div><p className="font-mono text-[10px] tracking-[0.16em] text-file-red uppercase">Inter-office circulation list</p><h2 className="mt-2 text-xl font-semibold">Get the next field note in your inbox.</h2></div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:min-w-[420px] sm:flex-row"><label className="sr-only" htmlFor="memo-email">Email address</label><input id="memo-email" name="email" type="email" required placeholder="you@company.com" className="h-11 min-w-0 flex-1 border border-ink/30 bg-cream/70 px-4 font-mono text-sm outline-none focus:border-file-red" /><Button type="submit" className="h-11 rounded-none bg-ink px-5 font-mono text-xs text-cream hover:bg-file-red">[ SUBSCRIBE ]</Button></div>
      </form>
    </DossierPage>
  );
}