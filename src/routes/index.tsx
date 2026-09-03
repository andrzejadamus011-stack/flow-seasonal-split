import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { FlowLogo } from "@/components/FlowLogo";
import chooseBike from "@/assets/choose-bike.jpg";
import chooseSki from "@/assets/choose-ski.jpg";
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
    }, 800);
  };

  const sizeOf = (side: Side) => {
    if (picked) return picked === side ? "100%" : "0%";
    if (hover === side) return "58%";
    if (hover) return "42%";
    return "50%";
  };

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <header
        className={`mx-auto w-full max-w-6xl px-6 pt-10 pb-8 text-center transition-opacity duration-500 ${
          picked ? "opacity-0" : "opacity-100"
        }`}
      >
        <FlowLogo
          variant="split"
          subtitle="Serwis narciarski i rowerowy"
          className="mx-auto h-[92px] w-auto text-ink"
        />
        <h1 className="sr-only">FLOW – serwis rowerowy i narciarski</h1>
        <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-ink-muted">
          Jeden warsztat, dwa sezony. Precyzyjne przygotowanie nart zimą i rowerów latem —
          Szczyglice pod Krakowem.
        </p>
        <p className="eyebrow mt-7">Wybierz sezon</p>
      </header>

      <div className="flex min-h-[62vh] flex-1 flex-col gap-px bg-hairline md:flex-row">
        <Half
          side="ski"
          theme="theme-ski"
          image={chooseSki}
          label="Serwis narciarski"
          note="Ostrzenie, smarowanie, wiązania"
          size={sizeOf("ski")}
          hidden={picked !== null && picked !== "ski"}
          onHover={setHover}
          onPick={choose}
        />
        <Half
          side="bike"
          theme="theme-bike"
          image={chooseBike}
          label="Serwis rowerowy"
          note="Przeglądy, naprawy, e-bike"
          size={sizeOf("bike")}
          hidden={picked !== null && picked !== "bike"}
          onHover={setHover}
          onPick={choose}
        />
      </div>

      <footer
        className={`mx-auto w-full max-w-6xl px-6 py-6 text-center text-[13px] text-ink-muted transition-opacity duration-500 ${
          picked ? "opacity-0" : "opacity-100"
        }`}
      >
        {contact.address} · {contact.phone} · {contact.hours}
      </footer>
    </main>
  );
}

function Half({
  side,
  theme,
  image,
  label,
  note,
  size,
  hidden,
  onHover,
  onPick,
}: {
  side: Side;
  theme: string;
  image: string;
  label: string;
  note: string;
  size: string;
  hidden: boolean;
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
      className={`${theme} group relative isolate min-h-[38vh] flex-none cursor-pointer overflow-hidden bg-white text-left transition-[flex-basis,opacity] duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] md:min-h-0 ${
        hidden ? "opacity-0" : "opacity-100"
      }`}
    >
      <img
        src={image}
        alt={label}
        width={1200}
        height={1504}
        className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-white/85 to-transparent" />

      <div className="absolute bottom-0 left-0 flex w-full items-end justify-between gap-4 p-6 sm:p-8">
        <div>
          <span className="brand-text block text-[11px] font-semibold tracking-[0.22em] uppercase">
            {side === "ski" ? "Zima" : "Lato"}
          </span>
          <span className="display mt-1 block text-2xl text-ink sm:text-3xl">{label}</span>
          <span className="mt-1 block text-[13px] text-ink-muted">{note}</span>
        </div>
        <span className="brand-bg flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </div>
    </button>
  );
}
