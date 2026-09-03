import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import bikeLogo from "@/assets/flow-bike.png.asset.json";
import heroBike from "@/assets/hero-bike.jpg";
import { bike } from "@/data/flow";

export const Route = createFileRoute("/rowery")({
  head: () => ({
    meta: [
      { title: "FLOW Serwis Rowerowy – przeglądy i naprawy | Szczyglice" },
      {
        name: "description",
        content:
          "Profesjonalny serwis rowerowy FLOW: przeglądy, regulacje, centrowanie kół, serwis amortyzatorów i e-bike. Cennik i kontakt: 664 993 492.",
      },
      { property: "og:title", content: "FLOW Serwis Rowerowy" },
      {
        property: "og:description",
        content: "Przeglądy, naprawy i pełne przygotowanie roweru do sezonu.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <ServicePage
      theme="bike"
      logo={bikeLogo.url}
      hero={heroBike}
      name={bike.name}
      tagline={bike.tagline}
      lead={bike.lead}
      values={bike.values}
      sections={bike.sections}
      prices={bike.prices}
      otherLabel="Serwis narciarski"
      otherHref="/narty"
    />
  ),
});
