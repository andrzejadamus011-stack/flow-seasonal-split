import { createFileRoute } from "@tanstack/react-router";
import { SkiServicePage } from "@/components/SkiServicePage";

export const Route = createFileRoute("/narty")({
  head: () => ({
    meta: [
      { title: "FLOW Serwis Narciarski – ostrzenie i smarowanie | Szczyglice" },
      {
        name: "description",
        content:
          "Serwis narciarski FLOW: ostrzenie krawędzi, smarowanie ślizgu, regulacja wiązań, serwis desek snowboardowych. Cennik i kontakt: 798 180 747.",
      },
      { property: "og:title", content: "FLOW Serwis Narciarski" },
      {
        property: "og:description",
        content: "Ostrzenie, smarowanie i pełne przygotowanie nart oraz deski na sezon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SkiServicePage,
});
