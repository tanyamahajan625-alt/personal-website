import { createFileRoute } from "@tanstack/react-router";
import { DossierPage } from "@/components/dossier-layout";
import { Button } from "@/components/ui/button";
import { EMAIL, LINKEDIN_URL, RESUME_URL, SUBSTACK_URL } from "@/lib/resume-data";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact — Tanya Mahajan" },
    { name: "description", content: "Email Tanya Mahajan, find her on LinkedIn or Substack, and download her full resume." },
    { property: "og:title", content: "Contact — Tanya Mahajan" },
    { property: "og:description", content: "Open a channel with Tanya Mahajan in Chicago." },
    { property: "og:type", content: "profile" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: ContactPage,
});

const LINKS = [
  { label: "Email Tanya", href: `mailto:${EMAIL}`, external: false, primary: false },
  { label: "LinkedIn", href: LINKEDIN_URL, external: true, primary: false },
  { label: "Substack", href: SUBSTACK_URL, external: true, primary: false },
  { label: "Download Full Resume PDF ↓", href: RESUME_URL, external: true, primary: true },
];

function ContactPage() {
  return (
    <DossierPage code="SECTION E / OPEN CHANNEL" title="Transmission Channel // Drop a Note in My Inbox" intro="Always up for a conversation about consumers, campaigns, or coffee.">
      <article className="contact-file mt-10">
        <p className="font-hand text-3xl leading-snug sm:text-4xl">Let&apos;s make something people remember.</p>
        <p className="mt-5 font-mono text-sm text-ink/65">{EMAIL}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {LINKS.map((link) => (
            <Button key={link.label} asChild variant={link.primary ? "default" : "outline"} size="lg" className={`h-12 rounded-none font-mono text-xs ${link.primary ? "bg-file-red text-cream hover:bg-ink" : "bg-cream/70 text-ink hover:bg-butter"}`}>
              <a href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined}>[ {link.label} ]</a>
            </Button>
          ))}
        </div>
        <p className="mt-16 border-t border-ink/20 pt-5 font-mono text-[11px] text-ink/55">© 2026 Tanya Mahajan. Stationed in Chicago, IL.</p>
      </article>
    </DossierPage>
  );
}