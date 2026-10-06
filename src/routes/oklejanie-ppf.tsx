import { createFileRoute } from "@tanstack/react-router";
import {
  Bike,
  Check,
  ChevronRight,
  Mountain,
  Ruler,
  Scissors,
  ShieldCheck,
  Sparkles,
  Truck,
  Zap,
  Route as RouteIcon,
  Droplets,
  Paintbrush,
  Layers,
} from "lucide-react";
import heroPpf from "@/assets/hero-ppf.jpg";
import { Button } from "@/components/ui/button";
import { BikeFooter, BikeHeader, ContactMapSection } from "@/components/BikeChrome";

export const Route = createFileRoute("/oklejanie-ppf")({
  head: () => ({
    meta: [
      { title: "Oklejanie roweru folią PPF – FLOW Szczyglice" },
      {
        name: "description",
        content:
          "Zabezpieczenie roweru folią PPF: ochrona ramy i komponentów przed zarysowaniami i otarciami. Pakiet Basic od 300 zł i Full Bike. MTB, gravel, e-bike.",
      },
      { property: "og:title", content: "Oklejanie roweru folią PPF – FLOW" },
      {
        property: "og:description",
        content: "Folia dopasowana do konkretnego roweru. Ochrona lakieru bez kompromisów w wyglądzie.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PpfPage,
});

const benefits = [
  { title: "Ochrona przed zarysowaniami", text: "Folia przejmuje wiele drobnych uszkodzeń powstających podczas normalnej jazdy.", Icon: ShieldCheck },
  { title: "Ochrona przed otarciami", text: "Szczególnie istotna w rowerach MTB i gravel, gdzie kontakt z piaskiem, błotem, kamieniami czy roślinnością jest częścią jazdy.", Icon: Layers },
  { title: "Zachowanie oryginalnego lakieru", text: "Zamiast pozwalać, aby kolejne rysy pojawiały się bezpośrednio na ramie, zabezpieczamy ją dodatkową warstwą ochronną.", Icon: Paintbrush },
  { title: "Ochrona podczas transportu", text: "Rower często trafia do samochodu, na bagażnik lub do stojaka. To właśnie podczas transportu najczęściej powstają niepotrzebne otarcia.", Icon: Truck },
  { title: "Estetyka", text: "Dobrze wykonane zabezpieczenie jest dyskretne i nie powinno odbierać rowerowi jego fabrycznego wyglądu.", Icon: Sparkles },
  { title: "Dopasowanie do konkretnego roweru", text: "Nie stosujemy jednego schematu dla wszystkich modeli. Zakres i sposób aplikacji dobieramy indywidualnie.", Icon: Ruler },
] as const;

const basicItems = [
  "dolną część ramy",
  "okolice suportu",
  "dolne i wewnętrzne partie ramy",
  "miejsca kontaktu z linkami i przewodami",
  "górną rurę ramy",
  "amortyzator / widełki",
  "okolice łańcucha i napędu",
  "elementy szczególnie narażone podczas transportu",
  "inne newralgiczne miejsca wskazane podczas oględzin roweru",
];

const audiences = [
  { title: "MTB", text: "Ochrona przed kamieniami, piaskiem, błotem i gałęziami oraz zarysowaniami podczas transportu lub przechowywania.", Icon: Mountain },
  { title: "Gravel", text: "Ochrona przed kamieniami wyrzucanymi spod przedniego koła oraz piaskiem i zabrudzeniami podczas jazdy poza asfaltem, a także zarysowaniami podczas transportu lub przechowywania.", Icon: RouteIcon },
  { title: "E-bike", text: "Dodatkowa ochrona ramy podczas codziennego użytkowania, transportu oraz jazdy w terenie.", Icon: Zap },
] as const;

const steps = [
  { title: "Dokładne przygotowanie roweru", text: "Przed aplikacją rower jest dokładnie czyszczony i przygotowywany. Powierzchnia musi być odpowiednio oczyszczona, aby folia mogła prawidłowo przylegać do zabezpieczanych elementów.", Icon: Droplets },
  { title: "Analiza i pomiar", text: "Każdy rower ma inną konstrukcję, geometrię i kształt ramy. Dlatego przed aplikacją dokładnie analizujemy powierzchnie przeznaczone do zabezpieczenia i wykonujemy odpowiednie pomiary.", Icon: Ruler },
  { title: "Indywidualne docinanie folii", text: "Fragmenty folii są przygotowywane pod konkretny rower i konkretną powierzchnię. Nie chodzi o samo „naklejenie folii”. Chodzi o jej precyzyjne dopasowanie do kształtu roweru.", Icon: Scissors },
  { title: "Precyzyjna aplikacja", text: "Folia jest nakładana starannie, element po elemencie, tak aby dokładnie przylegała do powierzchni i pozostała praktycznie niewidoczna.", Icon: Bike },
] as const;

function PpfPage() {
  const primary = "brand-bg h-auto rounded-sm border border-pro-accent px-6 py-3 text-primary-foreground shadow-none hover:brightness-110";

  return (
    <div className="bike-pro theme-bike min-h-screen scroll-smooth bg-pro-bg text-pro-text">
      <BikeHeader prefix="/rowery" />

      {/* HERO */}
      <section className="relative min-h-[620px] overflow-hidden border-b border-pro-line md:min-h-[720px]">
        <img
          src={heroPpf}
          alt="Aplikacja przezroczystej folii PPF na ramę roweru górskiego"
          width={1600}
          height={1056}
          className="absolute inset-0 h-full w-full object-cover object-[60%_center] transition-transform duration-700 hover:scale-[1.025]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pro-bg via-pro-bg/85 to-pro-bg/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-pro-bg/70 via-transparent to-transparent" />
        <div className="relative mx-auto flex min-h-[620px] max-w-6xl items-center px-6 py-16 md:min-h-[720px]">
          <div className="flow-in max-w-2xl">
            <p className="eyebrow brand-text flex items-center gap-3 before:h-px before:w-10 before:bg-bike">Oklejanie folią PPF</p>
            <h1 className="mt-5 max-w-xl text-5xl leading-[0.95] sm:text-6xl md:text-7xl">Zabezpieczenie roweru folią PPF</h1>
            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-pro-muted">
              Ochrona ramy i komponentów przed zarysowaniami, otarciami i śladami codziennej jazdy
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className={primary}>
                <a href="#kontakt">Zapytaj o wycenę</a>
              </Button>
              <Button asChild variant="outline" className="h-auto rounded-sm border-pro-line bg-pro-bg/60 px-6 py-3 text-pro-text shadow-none hover:border-pro-accent hover:bg-pro-panel hover:text-pro-text">
                <a href="#pakiety">Zobacz pakiety</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WSTĘP */}
      <section className="border-b border-pro-line bg-pro-panel">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 md:grid-cols-[0.8fr_1.2fr] md:py-18">
          <h2 className="text-3xl sm:text-4xl">Więcej niż zwykłe zużycie</h2>
          <div className="space-y-4 text-[15px] leading-relaxed text-pro-muted">
            <p>
              Rower, szczególnie MTB, gravel czy e-bike, podczas użytkowania jest narażony na znacznie więcej niż tylko zwykłe zużycie. Kamienie wyrzucane spod kół, piasek, błoto, gałęzie, transport, stojaki czy kontakt z innymi elementami roweru mogą szybko pozostawić ślady na lakierze i powierzchni ramy.
            </p>
            <p className="text-pro-text">Dlatego stworzyliśmy usługę profesjonalnego zabezpieczenia rowerów folią ochronną PPF.</p>
            <p>
              Folia tworzy na powierzchni roweru dodatkową warstwę ochronną, która przejmuje drobne zarysowania i otarcia, pomagając zachować oryginalny wygląd ramy na znacznie dłużej.
            </p>
            <p>
              Zabezpieczamy e-bike'i, rowery MTB, gravel, szosowe oraz inne modele, niezależnie od tego, czy rower służy do codziennej jazdy, weekendowych wycieczek czy wymagających tras terenowych.
            </p>
          </div>
        </div>
      </section>

      {/* DLACZEGO WARTO */}
      <section className="pro-grid mx-auto max-w-6xl px-6 py-14 md:py-18">
        <p className="eyebrow brand-text">Korzyści</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">Dlaczego warto zabezpieczyć rower folią PPF?</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ title, text, Icon }, i) => (
            <div key={title} className="pro-card-glow group flex flex-col border border-pro-line bg-pro-panel p-6">
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-sm border border-pro-line bg-pro-raised text-pro-accent transition group-hover:border-pro-accent group-hover:bg-pro-accent group-hover:text-primary-foreground">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="display text-xl text-pro-accent">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-6 text-lg">{title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-pro-muted">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BANER */}
      <section className="brand-bg text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-18">
          <h2 className="max-w-3xl text-3xl sm:text-5xl">Zabezpiecz swój rower zanim pojawią się pierwsze ślady</h2>
          <p className="mt-5 max-w-3xl text-[15px] leading-relaxed opacity-90">
            Nowy rower najlepiej zabezpieczyć od początku – zanim pierwsze kamienie, piasek, transport czy zwykła eksploatacja pozostawią ślady na lakierze. Ale folia PPF sprawdzi się również w przypadku używanego roweru. Przed rozpoczęciem pracy oceniamy stan powierzchni i dobieramy odpowiedni sposób przygotowania oraz zakres zabezpieczenia.
          </p>
        </div>
      </section>

      {/* PAKIETY */}
      <section id="pakiety" className="mx-auto max-w-6xl scroll-mt-32 px-6 py-14 md:py-18">
        <p className="eyebrow brand-text">Pakiety</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">Wybierz poziom ochrony dopasowany do siebie</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="pro-card-glow flex flex-col border border-pro-line bg-pro-panel p-7 md:p-9">
            <p className="display text-lg text-pro-accent">01. Pakiet Basic</p>
            <p className="display mt-3 text-4xl text-pro-text">od 300 zł</p>
            <p className="mt-1 text-[12px] text-pro-muted">cena zależy od modelu roweru (szosa, gravel, e-bike, MTB)</p>
            <h3 className="mt-6 text-xl">Ochrona najbardziej narażonych miejsc</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-pro-muted">
              Idealny wybór dla osób, które chcą zabezpieczyć rower tam, gdzie podczas jazdy najczęściej pojawiają się zarysowania i otarcia. W tym wariancie skupiamy się na najbardziej narażonych elementach ramy i komponentów, dobierając zakres zabezpieczenia do konkretnego modelu oraz sposobu jego użytkowania.
            </p>
            <p className="mt-5 text-[14px] font-medium">W zależności od konstrukcji roweru możemy zabezpieczyć między innymi:</p>
            <ul className="mt-3 space-y-2 text-[14px]">
              {basicItems.map((item) => (
                <li key={item} className="flex gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-pro-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 flex-1 text-[14px] leading-relaxed text-pro-muted">
              To rozsądny wybór, jeśli chcesz zabezpieczyć rower przed najczęściej występującymi uszkodzeniami, jednocześnie zachowując atrakcyjną cenę usługi.
            </p>
            <Button asChild className={`${primary} mt-7 w-full sm:w-fit`}>
              <a href="#kontakt">Zapytaj o wycenę <ChevronRight aria-hidden="true" /></a>
            </Button>
          </article>

          <article className="pro-card-glow relative flex flex-col border-2 border-pro-accent bg-pro-raised p-7 shadow-[0_24px_60px_-30px_var(--pro-accent)] md:p-9">
            <span className="brand-bg absolute -top-3 right-6 rounded-sm px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground">Premium</span>
            <p className="display text-lg text-pro-accent">02. Pakiet Full Bike</p>
            <p className="display mt-3 text-4xl text-pro-text">wycena indywidualna</p>
            <p className="mt-1 text-[12px] text-pro-muted">cena zależy od modelu roweru (szosa, gravel, e-bike, MTB)</p>
            <h3 className="mt-6 text-xl">Kompleksowe zabezpieczenie całego roweru</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-pro-muted">
              Jeżeli chcesz zachować swój rower w możliwie najlepszym stanie przez lata, najlepszym rozwiązaniem jest kompleksowe oklejenie całego roweru folią PPF. Zabezpieczamy wszystkie powierzchnie, które można skutecznie zabezpieczyć folią, dobierając sposób aplikacji indywidualnie do konstrukcji konkretnego roweru. Nie korzystamy z podejścia „jeden zestaw pasuje do każdego”.
            </p>
            <blockquote className="display mt-7 border-l-4 border-pro-accent pl-5 text-2xl leading-tight text-pro-text sm:text-3xl">
              Rower ma wyglądać tak, jakby folii w ogóle na nim nie było.
            </blockquote>
            <p className="mt-5 flex-1 text-[14px] leading-relaxed text-pro-muted">
              Bez przypadkowych krawędzi, nieestetycznych nadmiarów czy uniwersalnych naklejek niedopasowanych do konstrukcji. Liczy się zarówno ochrona, jak i estetyka wykonania.
            </p>
            <Button asChild className={`${primary} mt-7 w-full sm:w-fit`}>
              <a href="#kontakt">Zapytaj o wycenę <ChevronRight aria-hidden="true" /></a>
            </Button>
          </article>
        </div>
      </section>

      {/* DLA KOGO */}
      <section className="border-y border-pro-line bg-pro-panel">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-18">
          <p className="eyebrow brand-text">Dla kogo?</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Dla kogo?</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {audiences.map(({ title, text, Icon }) => (
              <div key={title} className="pro-card-glow group border border-pro-line bg-pro-bg p-6">
                <span className="flex size-11 items-center justify-center rounded-sm border border-pro-line bg-pro-raised text-pro-accent transition group-hover:border-pro-accent group-hover:bg-pro-accent group-hover:text-primary-foreground">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl">{title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-pro-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCES */}
      <section className="pro-grid mx-auto max-w-6xl px-6 py-14 md:py-18">
        <p className="eyebrow brand-text">Proces</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">Jak wygląda proces?</h2>
        <ol className="relative mt-10 grid gap-8 lg:grid-cols-4 lg:gap-6">
          <div className="absolute bottom-0 left-5 top-0 w-px bg-pro-line lg:bottom-auto lg:left-0 lg:right-0 lg:top-5 lg:h-px lg:w-auto" aria-hidden="true" />
          {steps.map(({ title, text }, i) => (
            <li key={title} className="relative pl-16 lg:pl-0 lg:pt-16">
              <span className="brand-bg display absolute left-0 top-0 flex size-10 items-center justify-center rounded-sm text-lg text-primary-foreground">
                {i + 1}
              </span>
              <h3 className="text-lg">{title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-pro-muted">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <ContactMapSection />

      <BikeFooter />
    </div>
  );
}
