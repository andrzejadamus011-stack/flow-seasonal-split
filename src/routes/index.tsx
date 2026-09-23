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
          "FLOW – jeden serwis przez cały rok. Profesjonalny serwis rowerowy latem i serwis narciarski zimą. Szczyglice, ul. Krakowska 50.",
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

// Path flowing across the screen like the trail/river in the logo
const TRAIL =
  "M -80 820 C 220 760, 380 560, 640 600 S 1060 820, 1300 520 S 1560 160, 1700 120";

function Chooser() {
  const navigate = useNavigate();
  const [picked, setPicked] = useState<Side | null>(null);

  const choose = (side: Side) => {
    if (picked) return;
    setPicked(side);
    setTimeout(() => navigate({ to: side === "bike" ? "/rowery" : "/narty" }), 1500);
  };

  return (
    <main className="flow-chooser relative h-screen w-screen overflow-hidden bg-background">
      <h1 className="sr-only">FLOW – serwis rowerowy i narciarski</h1>

      <div className="flex h-full w-full">
        <Half side="bike" image={chooseBike} label="Serwis rowerowy" picked={picked} onPick={choose} />
        <Half side="ski" image={chooseSki} label="Serwis narciarski" picked={picked} onPick={choose} />
      </div>

      {/* Divider of the logo sits at ~48.3% of the image width – shift so it matches the split */}
      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
        <img
          src={logo}
          alt="FLOW – serwis rowerowy i narciarski"
          className={`w-[min(680px,92vw)] translate-x-[1.7%] drop-shadow-[0_24px_60px_rgba(0,0,0,0.5)] transition-opacity duration-500 ${
            picked ? "opacity-0 delay-700" : "opacity-100"
          }`}
        />
      </div>

      {picked && (
        <div className={`pointer-events-none absolute inset-0 z-30 trail-${picked}`}>
          <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
            <path d={TRAIL} className="trail-glow" />
            <path d={TRAIL} className="trail-line" />
          </svg>
          <div className="trail-fill absolute inset-0" />
        </div>
      )}
    </main>
  );
}

function Half({
  side,
  image,
  label,
  picked,
  onPick,
}: {
  side: Side;
  image: string;
  label: string;
  picked: Side | null;
  onPick: (s: Side) => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => onPick(side)}
      className="group relative isolate h-full w-1/2 cursor-pointer overflow-hidden"
    >
      <img
        src={image}
        alt={label}
        width={1080}
        height={1600}
        className={`absolute inset-0 -z-10 h-full w-full object-cover brightness-[0.8] transition duration-700 ease-out group-hover:scale-[1.04] group-hover:brightness-100 ${
          picked && picked !== side ? "brightness-[0.35]" : ""
        }`}
      />
    </button>
  );
}
