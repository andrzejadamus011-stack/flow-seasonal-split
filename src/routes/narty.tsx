import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import heroSki from "@/assets/hero-ski.jpg";
import { ski } from "@/data/flow";

export const Route = createFileRoute("/narty")({
  head: () => ({
    meta: [
      { title: "FLOW Serwis Narciarski – ostrzenie i smarowanie | Szczyglice" },
      {
        name: "description",
        content:
          "Serwis narciarski FLOW: ostrzenie krawędzi, smarowanie ślizgu, regulacja wiązań, serwis desek snowboardowych. Cennik i kontakt: 664 993 492.",
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
  component: () => (
    <ServicePage
      theme="ski"
      hero={heroSki}
      name={ski.name}
      tagline={ski.tagline}
      lead={ski.lead}
      values={ski.values}
      sections={ski.sections}
      prices={ski.prices}
      otherLabel="Serwis rowerowy"
      otherHref="/rowery"
    />
  ),
});
