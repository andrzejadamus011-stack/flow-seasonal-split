export const contact = {
  phone: "664 993 492",
  phoneHref: "tel:+48664993492",
  email: "kontakt@flowserwis.pl",
  www: "flowserwis.pl",
  address: "ul. Krakowska 50, 32-083 Szczyglice",
  hours: "Poniedziałek – Piątek, 17:00 – 20:00",
  hoursNote: "Poza godzinami – kontakt telefoniczny",
};

export type Section = { title: string; items: string[] };
export type PriceGroup = { title: string; rows: { name: string; price: string }[] };

export const bike = {
  slug: "/rowery" as const,
  name: "Serwis rowerowy",
  tagline: "Profesjonalny serwis Twojego roweru",
  lead: "Regulacja, naprawa i przygotowanie roweru do sezonu. Pracujemy dokładnie, bez pośpiechu i z pasją do jazdy — od miejskich jednośladów po zaawansowane MTB i e-bike.",
  values: ["Doświadczenie i pasja", "Profesjonalny sprzęt", "Dokładność w każdym detalu"],
  sections: [
    {
      title: "Przegląd i serwis",
      items: [
        "Regulacja przerzutek i hamulców",
        "Sprawdzenie napędu",
        "Kontrola ciśnienia i stanu opon",
        "Dokręcenie śrub",
        "Czyszczenie roweru",
        "Smarowanie łańcucha",
        "Centrowanie kół",
        "Kontrola luzów w sterach i suporcie",
      ],
    },
    {
      title: "Wybrane usługi",
      items: [
        "Wymiana łańcucha",
        "Wymiana klocków / okładzin",
        "Centrowanie kół",
        "Czyszczenie napędu",
        "Serwis amortyzatora",
        "Diagnostyka rowerowa",
        "Montaż akcesoriów",
        "E-BIKE – diagnostyka i serwis",
        "Zabezpieczenie ramy folią PPF",
      ],
    },
  ] as Section[],
  prices: [
    {
      title: "Pakiety serwisowe",
      rows: [
        { name: "Przegląd podstawowy", price: "od 90 zł" },
        { name: "Przegląd rozszerzony", price: "od 160 zł" },
        { name: "Serwis kompleksowy (pełny rozbiór)", price: "od 320 zł" },
        { name: "Diagnostyka e-bike", price: "od 120 zł" },
      ],
    },
    {
      title: "Usługi pojedyncze",
      rows: [
        { name: "Regulacja przerzutki", price: "od 30 zł" },
        { name: "Regulacja / odpowietrzenie hamulca", price: "od 45 zł" },
        { name: "Wymiana łańcucha", price: "od 35 zł" },
        { name: "Wymiana klocków hamulcowych", price: "od 30 zł" },
        { name: "Centrowanie koła", price: "od 50 zł" },
        { name: "Czyszczenie napędu", price: "od 60 zł" },
        { name: "Serwis amortyzatora", price: "od 180 zł" },
        { name: "Zabezpieczenie ramy folią PPF", price: "wycena indywidualna" },
      ],
    },
  ] as PriceGroup[],
};

export const ski = {
  slug: "/narty" as const,
  name: "Serwis narciarski",
  tagline: "Twój sprzęt gotowy na każdy zjazd",
  lead: "Ostrzenie krawędzi, smarowanie ślizgu i pełne przygotowanie nart oraz deski. Dbamy o precyzję, dzięki której sprzęt trzyma się stoku tak, jak powinien.",
  values: ["Precyzja przygotowania", "Sprawdzone technologie", "Krótkie terminy realizacji"],
  sections: [
    {
      title: "Przygotowanie sprzętu",
      items: [
        "Przeglądy narciarskie",
        "Ostrzenie krawędzi",
        "Smarowanie ślizgu na gorąco",
        "Naprawa ubytków ślizgu",
        "Struktura i szlif ślizgu",
        "Regulacja i kontrola wiązań",
        "Ustawienie wiązań pod but",
        "Przygotowanie sprzętu do sezonu",
      ],
    },
    {
      title: "Wybrane usługi",
      items: [
        "Serwis desek snowboardowych",
        "Serwis nart biegowych",
        "Dopasowanie butów narciarskich",
        "Wymiana i montaż wiązań",
        "Konserwacja sprzętu na lato",
        "Diagnostyka i doradztwo",
      ],
    },
  ] as Section[],
  prices: [
    {
      title: "Pakiety serwisowe",
      rows: [
        { name: "Serwis podstawowy (ostrzenie + smar)", price: "od 70 zł" },
        { name: "Serwis pełny (szlif, krawędzie, smar)", price: "od 130 zł" },
        { name: "Serwis startowy / zawodniczy", price: "od 200 zł" },
        { name: "Przygotowanie deski snowboardowej", price: "od 90 zł" },
      ],
    },
    {
      title: "Usługi pojedyncze",
      rows: [
        { name: "Ostrzenie krawędzi", price: "od 45 zł" },
        { name: "Smarowanie ślizgu na gorąco", price: "od 40 zł" },
        { name: "Naprawa ubytków ślizgu", price: "od 30 zł" },
        { name: "Regulacja wiązań", price: "od 35 zł" },
        { name: "Montaż wiązań", price: "od 80 zł" },
        { name: "Konserwacja sprzętu na lato", price: "od 60 zł" },
      ],
    },
  ] as PriceGroup[],
};
