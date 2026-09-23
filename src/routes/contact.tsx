import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PaperCard } from "@/components/scrapbook";
import {
  EMAIL,
  LINKEDIN_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  RESUME_URL,
  SUBSTACK_URL,
} from "@/lib/resume-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "say hi — tanya mahajan" },
      {
        name: "description",
        content:
          "Get in touch with Tanya Mahajan — email, LinkedIn, phone, Substack, and a downloadable resume.",
      },
      { property: "og:title", content: "say hi — tanya mahajan" },
      {
        property: "og:description",
        content: "Email, LinkedIn, phone and Substack — all the ways to reach Tanya Mahajan.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ContactPage,
});

const LINKS = [
  { label: "email", value: EMAIL, href: `mailto:${EMAIL}` },
  { label: "linkedin", value: "tanya-mahajan", href: LINKEDIN_URL },
  { label: "phone", value: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` },
  { label: "substack", value: "clever consumer club", href: SUBSTACK_URL },
  { label: "resume", value: "download the pdf", href: RESUME_URL },
];

function ContactPage() {
  return (
    <PageShell title="say hi!" crumb="contact · chicago, il">
      <PaperCard tilt={-0.6}>
        <p className="font-hand text-2xl leading-snug text-pretty sm:text-3xl">
          Always up for a conversation about consumers, campaigns, or coffee.
        </p>
        <ul className="mt-7 divide-y divide-ink/10">
          {LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 py-4 transition-colors hover:text-peach"
              >
                <span className="font-mono text-[11px] tracking-[0.18em] text-ink/55 uppercase">
                  {link.label}
                </span>
                <span className="text-right font-medium break-all">
                  {link.value}
                  <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </PaperCard>
    </PageShell>
  );
}
