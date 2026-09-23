import { createFileRoute } from "@tanstack/react-router";
import { BikeServicePage } from "@/components/BikeServicePage";

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
  component: BikeServicePage,
});
