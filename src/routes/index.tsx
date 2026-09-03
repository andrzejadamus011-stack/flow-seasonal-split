import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/flow-logo.png";
import chooseBike from "@/assets/choose-bike.jpg";
import chooseSki from "@/assets/choose-ski.jpg";

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
    }, 900);
  };

  const sizeOf = (side: Side) => {
    if (picked) return picked === side ? "100%" : "0%";
    if (hover === side) return "60%";
    if (hover) return "40%";
    return "50%";
  };

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-white">
      <h1 className="sr-only">FLOW – serwis rowerowy i narciarski</h1>

      <div className="flex h-full w-full flex-col md:flex-row">
        <Half
          side="bike"
          image={chooseBike}
          label="Serwis rowerowy"
          size={sizeOf("bike")}
          gone={picked !== null && picked !== "bike"}
          onHover={setHover}
          onPick={choose}
        />
        <Half
          side="ski"
          image={chooseSki}
          label="Serwis narciarski"
          size={sizeOf("ski")}
          gone={picked !== null && picked !== "ski"}
          onHover={setHover}
          onPick={choose}
        />
      </div>

      <img
        src={logo}
        alt="FLOW – serwis rowerowy i narciarski"
        className={`pointer-events-none absolute top-1/2 left-1/2 z-20 w-[min(680px,84vw)] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_24px_60px_rgba(0,0,0,0.45)] transition-all duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          picked ? "scale-[1.35] opacity-0" : "logo-float scale-100 opacity-100"
        }`}
      />
    </main>
  );
}

function Half({
  side,
  image,
  label,
  size,
  gone,
  onHover,
  onPick,
}: {
  side: Side;
  image: string;
  label: string;
  size: string;
  gone: boolean;
  onHover: (s: Side | null) => void;
  onPick: (s: Side) => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onMouseEnter={() => onHover(side)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onPick(side)}
      style={{ flexBasis: size }}
      className={`group relative isolate h-1/2 min-h-0 flex-none cursor-pointer overflow-hidden transition-[flex-basis,opacity] duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)] md:h-full ${
        gone ? "opacity-0" : "opacity-100"
      }`}
    >
      <img
        src={image}
        alt={label}
        width={848}
        height={1272}
        className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
      />
    </button>
  );
}
