import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import bikeLogo from "@/assets/flow-bike.png.asset.json";
import skiLogo from "@/assets/flow-ski.png.asset.json";
import heroBike from "@/assets/hero-bike.jpg";
import heroSki from "@/assets/hero-ski.jpg";
import { contact } from "@/data/flow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FLOW – Serwis rowerowy i narciarski | Szczyglice k. Krakowa" },
      {
        name: "description",
        content:
          "FLOW – jeden serwis przez cały rok. Profesjonalny serwis rowerowy latem i serwis narciarski zimą. Szczyglice, ul. Krakowska 50. Tel. 664 993 492.",
      },
      { property: "og:title", content: "FLOW – Serwis rowerowy i narciarski" },
      {
        property: "og:description",
        content: "Dwa sezony, jedna pasja. Serwis rowerów i nart w jednym miejscu.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Chooser,
});

type Side = "bike" | "ski";

function Chooser() {
  const navigate = useNavigate();
  const [hover, setHover] = useState<Side | null>(null);
  const [picked, setPicked] = useState<Side | null>(null);

  const choose = (side: Side) => {
    if (picked) return;
    setPicked(side);
    setTimeout(() => {
      navigate({ to: side === "bike" ? "/rowery" : "/narty" });
    }, 850);
  };

  const widthOf = (side: Side) => {
    if (picked) return picked === side ? "100%" : "0%";
    if (hover === side) return "62%";
    if (hover) return "38%";
    return "50%";
  };

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black text-steel">
      <div className="flex h-full w-full flex-col md:flex-row">
        <Half
          side="bike"
          themeClass="theme-bike"
          hero={heroBike}
          logo={bikeLogo.url}
          title="Serwis rowerowy"
          subtitle="Jeden serwis przez cały rok"
          size={widthOf("bike")}
          dimmed={picked !== null && picked !== "bike"}
          onHover={setHover}
          onPick={choose}
        />
        <Half
          side="ski"
          themeClass="theme-ski"
          hero={heroSki}
          logo={skiLogo.url}
          title="Serwis narciarski"
          subtitle="Dwa sezony, jedna pasja"
          size={widthOf("ski")}
          dimmed={picked !== null && picked !== "ski"}
          onHover={setHover}
          onPick={choose}
        />
      </div>

      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 z-20 pb-6 text-center transition-opacity duration-500 ${
          picked ? "opacity-0" : "opacity-100"
        }`}
      >
        <p className="display text-xs tracking-[0.35em] sm:text-sm">Wybierz swój sezon</p>
        <p className="mt-2 text-xs opacity-70">
          {contact.phone} · {contact.address}
        </p>
      </div>

      <h1 className="sr-only">FLOW – serwis rowerowy i narciarski</h1>
    </main>
  );
}

function Half({
  side,
  themeClass,
  hero,
  logo,
  title,
  subtitle,
  size,
  dimmed,
  onHover,
  onPick,
}: {
  side: Side;
  themeClass: string;
  hero: string;
  logo: string;
  title: string;
  subtitle: string;
  size: string;
  dimmed: boolean;
  onHover: (s: Side | null) => void;
  onPick: (s: Side) => void;
}) {
  return (
    <button
      type="button"
      onMouseEnter={() => onHover(side)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onPick(side)}
      style={{ flexBasis: size }}
      className={`${themeClass} group relative isolate h-1/2 min-h-0 flex-none cursor-pointer overflow-hidden transition-[flex-basis,opacity] duration-[850ms] ease-[cubic-bezier(0.76,0,0.24,1)] md:h-full ${
        dimmed ? "opacity-0" : "opacity-100"
      }`}
    >
      <img
        src={hero}
        alt={title}
        width={1536}
        height={1024}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-55 transition-transform duration-[1200ms] group-hover:scale-105"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--brand-dark) 60%, transparent), color-mix(in oklab, var(--brand-dark) 92%, black))",
        }}
      />
      <div className="flex h-full flex-col items-center justify-center gap-6 px-6">
        <img
          src={logo}
          alt={`FLOW ${title}`}
          className="w-[min(420px,72vw)] drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
        />
        <div className="text-center">
          <p className="display text-2xl sm:text-3xl">{title}</p>
          <p className="mt-1 text-sm tracking-widest uppercase opacity-75">{subtitle}</p>
        </div>
        <span
          className="brand-bg rounded-full px-6 py-2 text-xs font-semibold tracking-widest uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          Wejdź
        </span>
      </div>
    </button>
  );
}
