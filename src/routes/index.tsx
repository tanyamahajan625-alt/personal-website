import { createFileRoute, Link } from "@tanstack/react-router";
import filmstrip from "@/assets/desk/filmstrip.png";
import notebook from "@/assets/desk/notebook.png";
import phone from "@/assets/desk/phone.png";
import folder from "@/assets/desk/folder.png";
import polaroid from "@/assets/desk/polaroid.png";
import airplane from "@/assets/desk/airplane.png";
import coffee from "@/assets/desk/coffee.png";
import { RESUME_URL } from "@/lib/resume-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "hi! i'm tanya — marketing analytics & consumer curiosity" },
      {
        name: "description",
        content:
          "The desk of Tanya Mahajan — marketing analytics at TransUnion, UChicago Booth MiM, writer of the Clever Consumer Club. Click around to explore her experience, projects, writing and resume.",
      },
      { property: "og:title", content: "hi! i'm tanya — marketing analytics & consumer curiosity" },
      {
        property: "og:description",
        content:
          "Click around the desk to explore Tanya Mahajan's experience, case studies, writing and resume.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Desk,
});

interface DeskObject {
  src: string;
  alt: string;
  label: string;
  to?: string;
  href?: string;
  /** percentage positions on the desk */
  style: React.CSSProperties;
  tilt: number;
  delay: number;
  className: string;
}

const OBJECTS: DeskObject[] = [
  {
    src: filmstrip,
    alt: "Film strip of photographs",
    label: "experience",
    to: "/experience",
    style: { top: "2%", left: "1%" },
    tilt: -8,
    delay: 0,
    className: "w-[26%] max-w-[190px] sm:w-[20%]",
  },
  {
    src: notebook,
    alt: "Open notebook with handwritten notes",
    label: "writing",
    to: "/writing",
    style: { top: "0%", left: "33%" },
    tilt: 3,
    delay: 60,
    className: "w-[34%] max-w-[260px] sm:w-[26%]",
  },
  {
    src: phone,
    alt: "Pink keyboard phone",
    label: "contact",
    to: "/contact",
    style: { top: "1%", right: "2%" },
    tilt: 7,
    delay: 120,
    className: "w-[22%] max-w-[150px] sm:w-[15%]",
  },
  {
    src: folder,
    alt: "Blue file folder holding a resume",
    label: "resume",
    href: RESUME_URL,
    style: { bottom: "3%", left: "0%" },
    tilt: -5,
    delay: 180,
    className: "w-[28%] max-w-[200px] sm:w-[20%]",
  },
  {
    src: polaroid,
    alt: "Polaroid of the Chicago skyline",
    label: "about me",
    to: "/about",
    style: { bottom: "1%", left: "29%" },
    tilt: 5,
    delay: 240,
    className: "w-[24%] max-w-[175px] sm:w-[17%]",
  },
  {
    src: airplane,
    alt: "Paper airplane folded from lined paper",
    label: "projects",
    to: "/projects",
    style: { bottom: "4%", left: "53%" },
    tilt: -6,
    delay: 300,
    className: "w-[28%] max-w-[210px] sm:w-[21%]",
  },
  {
    src: coffee,
    alt: "Iced coffee",
    label: "toolkit",
    to: "/toolkit",
    style: { bottom: "6%", right: "3%" },
    tilt: 6,
    delay: 360,
    className: "w-[20%] max-w-[140px] sm:w-[14%]",
  },
];

function DeskItem({ object }: { object: DeskObject }) {
  const inner = (
    <>
      <img
        src={object.src}
        alt={object.alt}
        width={1024}
        height={1024}
        className="h-auto w-full drop-shadow-[0_14px_22px_rgba(60,45,35,0.18)]"
      />
      <span className="pointer-events-none absolute -bottom-5 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.18em] whitespace-nowrap text-ink/45 uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 sm:text-[11px]">
        {object.label}
      </span>
    </>
  );

  const classes = `group absolute block cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.06] focus-visible:scale-[1.06] focus-visible:outline-none ${object.className}`;

  const style: React.CSSProperties = {
    ...object.style,
    rotate: `${object.tilt}deg`,
    animation: `desk-in 600ms ${object.delay}ms cubic-bezier(0.22,1,0.36,1) both`,
  };

  if (object.href) {
    return (
      <a
        href={object.href}
        target="_blank"
        rel="noreferrer"
        aria-label={object.label}
        style={style}
        className={classes}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link to={object.to!} aria-label={object.label} style={style} className={classes}>
      {inner}
    </Link>
  );
}

function Desk() {
  return (
    <main className="min-h-dvh overflow-hidden bg-paper font-display text-ink antialiased lg:h-dvh">
      <div className="relative mx-auto flex h-full max-w-6xl flex-col px-4 py-6 sm:px-8">
        <div className="relative min-h-[560px] flex-1 sm:min-h-[620px]">
          {OBJECTS.map((object) => (
            <DeskItem key={object.label} object={object} />
          ))}

          <div className="absolute top-1/2 left-1/2 w-full max-w-[34rem] -translate-x-1/2 -translate-y-1/2 px-4 text-center">
            <h1 className="group font-hand text-5xl leading-[1.05] font-semibold text-balance transition-colors duration-300 hover:text-peach sm:text-6xl lg:text-7xl">
              hi! i'm tanya
              <span className="text-pink"> ♥</span>
            </h1>
            <p className="mt-4 font-mono text-[11px] tracking-[0.16em] text-ink/55 sm:text-xs">
              welcome! click around to learn about me :)
            </p>
          </div>
        </div>

        <footer className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-mono text-[10px] tracking-[0.14em] text-ink/35 uppercase sm:text-[11px]">
          <span>marketing analytics</span>
          <span aria-hidden>·</span>
          <span>chicago</span>
          <span aria-hidden>·</span>
          <span>booth mim</span>
        </footer>
      </div>
    </main>
  );
}
