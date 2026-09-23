import { Link } from "@tanstack/react-router";
import {
  Bike,
  CalendarDays,
  ChevronRight,
  CircleDot,
  Gauge,
  Menu,
  Phone,
  Settings,
  Wrench,
  X,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import logo from "@/assets/flow-logo.png";
import heroBike from "@/assets/hero-bike-pro.jpg";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contact } from "@/data/flow";

const navigation = [
  { label: "Usługi", href: "#uslugi" },
  { label: "Cennik", href: "#cennik" },
  { label: "Zleć serwis", href: "#zlec-serwis", cta: true },
  { label: "O nas", href: "#o-nas" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

const services = [
  {
    number: "01",
    title: "OKLEJANIE FOLIĄ PPF",
    price: "od 200 zł",
    description:
      "Przezroczysta folia chroni ramę przed odpryskami, rysami i przetarciami. Jest niewidoczna, drobne rysy same się na niej wygładzają, a przy sprzedaży roweru zdejmiesz ją bez śladu. Oklejamy całą ramę albo tylko najbardziej narażone miejsca.",
    Icon: Bike,
  },
  {
    number: "02",
    title: "Serwis amortyzacji",
    price: "od 150 zł",
    description:
      "Serwis widelców, damperów i sztyc regulowanych — FOX, RockShox i inne marki. Wymiana olejów, uszczelek i przywrócenie płynnej pracy zawieszenia.",
    Icon: Gauge,
  },
  {
    number: "03",
    title: "Napęd i hamulce",
    price: "od 50 zł",
    description:
      "Diagnostyka i naprawa napędu oraz hamulców mechanicznych i hydraulicznych. Cicha, precyzyjna zmiana biegów i pewne hamowanie.",
    Icon: Settings,
  },
  {
    number: "04",
    title: "Koła",
    price: "od 50 zł",
    description:
      "Centrowanie, zaplatanie, serwis piast i montaż systemu tubeless. Koła, które kręcą się równo i bez luzów.",
    Icon: CircleDot,
  },
  {
    number: "05",
    title: "Części i montaż",
    price: "od 20 zł",
    description: "Pomagamy dobrać komponenty do Twojego stylu jazdy, zamawiamy je i montujemy.",
    Icon: Wrench,
  },
  {
    number: "06",
    title: "Przygotowanie do sezonu",
    price: "od 199 zł",
    description: "Kompleksowe przygotowanie roweru przed sezonem, zawodami lub wyjazdem.",
    Icon: CalendarDays,
  },
] as const;

const priceGroups = [
  {
    title: "Koła",
    rows: [
      ["Wymiana koła przedniego / tylnego", "50 zł / 70 zł"],
      ["Wymiana szprychy", "60–120 zł"],
      ["Zaplatanie koła", "200 zł"],
      ["Serwis piasty przedniej", "70 zł"],
      ["Serwis piasty tylnej", "120 zł"],
      ["Serwis bębenka piasty", "60 zł"],
      ["Montaż tubeless – 1 koło", "90 zł"],
    ],
  },
  {
    title: "Napęd",
    rows: [
      ["Wymiana kasety / łańcucha / blatu + regulacja napędu", "150–200 zł"],
      ["Wymiana suportu", "80 zł"],
      ["Wymiana korby / koronki", "60 zł"],
      ["Czyszczenie / serwis napędu", "120–150 zł"],
      ["Wymiana manetki przerzutki", "50 zł"],
      ["Wymiana przerzutki / kółka", "50 zł"],
      ["Prostowanie haka przerzutki", "30 zł"],
    ],
  },
  {
    title: "Stery i kokpit",
    rows: [
      ["Regulacja sterów", "30 zł"],
      ["Serwis / remont sterów", "80 zł"],
      ["Wymiana kierownicy / mostka", "50 zł"],
      ["Wymiana owijki", "50 zł"],
      ["Wymiana sztycy / siodła", "20 zł"],
    ],
  },
  {
    title: "Hamulce",
    rows: [["Wymiana hamulca / przewodu hydraulicznego", "100–200 zł"]],
  },
  {
    title: "Zawieszenie",
    rows: [
      ["Serwis zawieszenia – łożysko", "40 zł / szt."],
      ["Serwis sztycy regulowanej – podstawowy", "120 zł"],
      ["Serwis widelca – podstawowy", "180 zł"],
      ["Serwis widelca – pełny", "od 350 zł"],
      ["Serwis dampera – podstawowy", "150 zł"],
      ["Serwis dampera – pełny", "od 350 zł"],
    ],
  },
  {
    title: "Inne",
    rows: [
      ["Diagnostyka / aktualizacja e-bike", "100 zł"],
      ["Mycie / konserwacja roweru", "80–120 zł"],
    ],
  },
] as const;

const packages = [
  {
    name: "Regulacyjny",
    price: "od 199 PLN",
    items: ["Centrowanie kół", "Regulacja hamulców", "Regulacja przerzutek", "Kasowanie luzów", "Sprawdzenie całego roweru"],
  },
  {
    name: "Kompleksowy",
    price: "od 349 PLN",
    items: ["Centrowanie kół", "Regulacja hamulców", "Regulacja przerzutek", "Kasowanie luzów", "Wymiana pancerzy i linek", "Smarowanie łożysk suportu, sterów i piast", "Wymiana zużytych komponentów w cenie"],
  },
  {
    name: "Kompleksowy plus",
    price: "od 500 PLN",
    items: ["Centrowanie kół", "Regulacja hamulców", "Regulacja przerzutek", "Kasowanie luzów", "Wymiana pancerzy i linek", "Smarowanie łożysk suportu, sterów i piast", "Przelewanie hamulców hydraulicznych", "Wymiana zużytych komponentów w cenie"],
  },
  {
    name: "Full suspension",
    price: "od 700 PLN",
    items: ["Wycena indywidualna"],
  },
] as const;

export function BikeServicePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceText, setServiceText] = useState("");

  const pickService = (label: string) => {
    setServiceText(`Usługa: ${label}\n\n`);
    document.getElementById("zlec-serwis")?.scrollIntoView({ behavior: "smooth" });
    window.setTimeout(() => document.getElementById("service-description")?.focus({ preventScroll: true }), 600);
  };


  const submitRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim().slice(0, 80);
    const phone = String(form.get("phone") ?? "").trim().slice(0, 30);
    const bikeType = String(form.get("bikeType") ?? "").trim().slice(0, 30);
    const description = String(form.get("description") ?? "").trim().slice(0, 1200);
    const preferredDate = String(form.get("preferredDate") ?? "").trim().slice(0, 30);

    if (!name || !phone || !bikeType || !description || !preferredDate) return;

    const subject = encodeURIComponent(`Zgłoszenie serwisowe – ${name}`);
    const body = encodeURIComponent(
      `Imię: ${name}\nTelefon: ${phone}\nTyp roweru: ${bikeType}\nPreferowany termin: ${preferredDate}\n\nOpis usterki / zakres usługi:\n${description}`,
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bike-pro theme-bike min-h-screen scroll-smooth bg-pro-bg text-pro-text">
      <header className="sticky top-0 z-30 border-b border-pro-line bg-pro-bg/95 backdrop-blur-xl">
        <div className="h-1 brand-bg" />
        <nav className="mx-auto flex min-h-22 max-w-6xl items-center justify-between gap-5 px-6 py-2 md:min-h-30 md:py-3">
          <Link to="/" aria-label="FLOW – strona główna" className="shrink-0">
            <img
              src={logo}
              alt="FLOW"
              width={1389}
              height={784}
              className="h-16 w-auto drop-shadow-lg md:h-24"
            />
          </Link>

          <div className="hidden items-center gap-7 text-[13px] font-semibold uppercase lg:flex">
            {navigation.map((item) =>
              "cta" in item && item.cta ? (
                <Button key={item.href} asChild className="brand-bg rounded-sm border border-pro-accent px-5 text-primary-foreground shadow-none hover:brightness-110">
                  <a href={item.href}>{item.label}</a>
                </Button>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="border-b border-transparent py-2 text-pro-muted transition hover:border-pro-accent hover:text-pro-text"
                >
                  {item.label}
                </a>
              ),
            )}
          </div>

          <Button
            type="button"
            variant="outline"
            size="icon"
            className="rounded-sm border-pro-line bg-pro-panel text-pro-text lg:hidden"
            aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </nav>

        {menuOpen && (
          <div className="border-t border-pro-line bg-pro-bg px-6 py-4 lg:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-1">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={
                    "cta" in item && item.cta
                      ? "brand-bg mt-2 rounded-sm border border-pro-accent px-4 py-3 text-center text-sm font-semibold uppercase text-primary-foreground"
                      : "border-b border-pro-line px-3 py-3 text-sm font-semibold uppercase text-pro-muted transition hover:text-pro-text"
                  }
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <section className="relative min-h-[620px] overflow-hidden border-b border-pro-line md:min-h-[720px]">
        <img
          src={heroBike}
          alt="Mechanik FLOW reguluje napęd roweru górskiego"
          width={1600}
          height={1100}
          className="absolute inset-0 h-full w-full object-cover object-[62%_center] transition-transform duration-700 hover:scale-[1.025]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pro-bg via-pro-bg/90 to-pro-bg/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-pro-bg/70 via-transparent to-transparent" />
        <div className="relative mx-auto flex min-h-[620px] max-w-6xl items-center px-6 py-16 md:min-h-[720px]">
        <div className="flow-in max-w-2xl">
          <p className="eyebrow brand-text flex items-center gap-3 before:h-px before:w-10 before:bg-bike">Sezon letni</p>
          <h1 className="mt-5 max-w-xl text-6xl leading-[0.92] sm:text-7xl md:text-8xl">Profesjonalny serwis Twojego roweru</h1>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-pro-muted">
            Regulacja, naprawa i przygotowanie roweru do sezonu. Pracujemy dokładnie, bez pośpiechu
            i z pasją do jazdy — od miejskich jednośladów po zaawansowane MTB i e-bike.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="brand-bg h-auto rounded-sm border border-pro-accent px-6 py-3 text-primary-foreground shadow-none hover:brightness-110">
              <a href="#zlec-serwis">Zleć serwis</a>
            </Button>
            <Button asChild variant="outline" className="h-auto rounded-sm border-pro-line bg-pro-bg/60 px-6 py-3 text-pro-text shadow-none hover:border-pro-accent hover:bg-pro-panel hover:text-pro-text">
              <a href="#cennik">Zobacz cennik</a>
            </Button>
          </div>
           <dl className="mt-10 grid gap-x-8 gap-y-3 border-t border-pro-line pt-6 sm:grid-cols-3">
            {["Doświadczenie i pasja", "Profesjonalny sprzęt", "Dokładność w każdym detalu"].map(
              (value) => (
                 <div key={value} className="border-t-2 border-pro-accent pt-3">
                  <dt className="sr-only">Wyróżnik</dt>
                   <dd className="text-[13px] leading-snug text-pro-muted">{value}</dd>
                </div>
              ),
            )}
          </dl>
        </div>
        </div>
      </section>

      <section id="o-nas" className="scroll-mt-32 border-y border-pro-line bg-pro-panel text-pro-text">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 md:grid-cols-[0.8fr_1.2fr] md:py-18">
          <h2 className="text-3xl sm:text-4xl">O nas</h2>
          <div className="space-y-4 text-[15px] leading-relaxed text-pro-muted">
            <p>
              FLOW to warsztat prowadzony przez ludzi, którzy sami jeżdżą — zimą na nartach, latem
              na rowerze. Każdy sprzęt traktujemy tak, jakby był nasz: dokładnie, bez pośpiechu i z
              pełną informacją o tym, co i dlaczego wymaga serwisu.
            </p>
            <p>
              Pracujemy na profesjonalnych narzędziach i sprawdzonych materiałach. Przed
              rozpoczęciem pracy zawsze przedstawiamy zakres i koszt — bez niespodzianek na odbiorze.
            </p>
          </div>
        </div>
      </section>

      <section id="uslugi" className="pro-grid mx-auto max-w-6xl scroll-mt-32 px-6 py-14 md:py-18">
        <p className="eyebrow brand-text">Usługi</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">Zakres usług</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ number, title, description, price, Icon }) => (
            <button
              type="button"
              key={number}
              onClick={() => pickService(`${title} (${price})`)}
              className="pro-card-glow group flex flex-col border border-pro-line bg-pro-panel p-6 text-left"
            >
              <div className="flex w-full items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-sm border border-pro-line bg-pro-raised text-pro-accent transition group-hover:border-pro-accent group-hover:bg-pro-accent group-hover:text-primary-foreground">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="display text-xl text-pro-accent">{number}</span>
              </div>
              <h3 className="mt-6 text-lg">{title}</h3>
              <p className="mt-3 flex-1 text-[14px] leading-relaxed text-pro-muted">{description}</p>
              <div className="mt-5 flex w-full items-center justify-between border-t border-pro-line pt-4">
                <span className="display text-xl text-pro-accent">{price}</span>
                <span className="flex items-center gap-1 text-sm text-pro-muted transition group-hover:text-pro-accent">
                  Zleć <ChevronRight className="size-4" aria-hidden="true" />
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-16">
          <p className="eyebrow brand-text">Przeglądy</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Pakiety przeglądów</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg) => (
              <button
                type="button"
                key={pkg.name}
                onClick={() => pickService(`Przegląd: ${pkg.name} (${pkg.price})`)}
                className="pro-card-glow group flex flex-col border border-pro-line bg-pro-panel p-6 text-left"
              >
                <h3 className="text-xl">{pkg.name}</h3>
                <p className="display mt-2 text-3xl text-pro-accent">{pkg.price}</p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-pro-muted">Zawiera</p>
                <ul className="mt-3 flex-1 space-y-2 text-[14px] text-pro-text">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-pro-accent" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 flex h-11 w-full items-center justify-center gap-1 rounded-sm border border-pro-accent text-sm font-semibold text-pro-accent transition group-hover:bg-pro-accent group-hover:text-primary-foreground">
                  Wybierz pakiet <ChevronRight className="size-4" aria-hidden="true" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="cennik" className="scroll-mt-32 border-y border-pro-line bg-pro-panel">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-18">
          <p className="eyebrow">Cennik</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Cennik</h2>
          <Accordion type="multiple" defaultValue={["Koła"]} className="mt-10 border-t border-pro-line">
            {priceGroups.map((group) => (
              <AccordionItem key={group.title} value={group.title} className="border-pro-line">
                <AccordionTrigger className="py-5 text-base hover:no-underline">
                  {group.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="divide-y divide-hairline border-t border-hairline">
                    {group.rows.map(([name, price]) => (
                      <li key={name} className="flex items-baseline justify-between gap-6 py-3">
                        <span className="text-[14px] text-pro-muted">{name}</span>
                        <span className="display shrink-0 text-right text-[15px]">{price}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
           <p className="mt-6 max-w-3xl text-[12px] leading-relaxed text-pro-muted">
            Ceny obejmują robociznę. Części i materiały doliczane są osobno. Dokładną wycenę
            podajemy po obejrzeniu roweru.
          </p>
        </div>
      </section>

      <section id="zlec-serwis" className="pro-grid mx-auto max-w-6xl scroll-mt-32 px-6 py-14 md:py-18">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <p className="eyebrow">Zleć serwis</p>
             <h2 className="mt-3 text-3xl sm:text-4xl">Opowiedz nam o swoim rowerze</h2>
            <form onSubmit={submitRequest} className="mt-8 grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium">
                Imię
                 <Input name="name" required maxLength={80} autoComplete="name" className="h-11 rounded-sm border-pro-line bg-pro-panel text-pro-text focus-visible:ring-pro-accent" />
              </label>
              <label className="grid gap-2 text-sm font-medium">
                Telefon
                <Input
                  name="phone"
                  type="tel"
                  required
                  maxLength={30}
                  autoComplete="tel"
                   className="h-11 rounded-sm border-pro-line bg-pro-panel text-pro-text focus-visible:ring-pro-accent"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium">
                Typ roweru
                <select
                  name="bikeType"
                  required
                  defaultValue=""
                   className="h-11 w-full rounded-sm border border-pro-line bg-pro-panel px-3 text-sm text-pro-text outline-none focus:ring-1 focus:ring-pro-accent"
                >
                  <option value="" disabled>Wybierz typ roweru</option>
                  {['MTB', 'enduro', 'gravel', 'szosa', 'e-bike', 'miejski', 'inny'].map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-medium">
                Preferowany termin
                 <Input name="preferredDate" type="date" required className="h-11 rounded-sm border-pro-line bg-pro-panel text-pro-text focus-visible:ring-pro-accent" />
              </label>
              <label className="grid gap-2 text-sm font-medium sm:col-span-2">
                Opis usterki / zakres usługi
                 <Textarea id="service-description" name="description" required maxLength={1200} rows={6} value={serviceText} onChange={(e) => setServiceText(e.target.value)} className="rounded-sm border-pro-line bg-pro-panel text-pro-text focus-visible:ring-pro-accent" />
              </label>
               <Button type="submit" className="brand-bg h-11 rounded-sm border border-pro-accent px-6 text-primary-foreground shadow-none hover:brightness-110 sm:w-fit">
                Wyślij zgłoszenie
                <ChevronRight aria-hidden="true" />
              </Button>
            </form>
          </div>

          <aside className="border-l-4 border-pro-accent pl-7 lg:mt-20">
            <p className="eyebrow">Wolisz porozmawiać?</p>
             <p className="mt-4 text-[14px] leading-relaxed text-pro-muted">
              Zadzwoń i ustal zakres prac oraz dogodny termin bezpośrednio z serwisem.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              {contact.phones.map((phone) => (
                <a key={phone.href} href={phone.href} className="brand-text inline-flex items-center gap-3 text-2xl font-bold transition hover:brightness-110">
                  <Phone className="size-6" aria-hidden="true" />
                  {phone.label}
                </a>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="kontakt" className="scroll-mt-32 border-t border-pro-line bg-pro-panel">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-18">
          <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-end">
            <div>
              <p className="eyebrow">Kontakt</p>
               <h2 className="mt-3 text-3xl sm:text-4xl">Znajdziesz nas w Szczyglicach</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <p className="eyebrow">Adres</p>
                 <p className="mt-2 text-[14px] text-pro-muted">{contact.address}</p>
              </div>
              <div>
                <p className="eyebrow">Telefon</p>
                <div className="mt-2 flex flex-col gap-1">
                  {contact.phones.map((phone) => (
                    <a key={phone.href} href={phone.href} className="brand-text text-[15px] font-medium transition hover:brightness-110">
                      {phone.label}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <p className="eyebrow">Godziny</p>
                 <p className="mt-2 text-[14px] text-pro-muted">
                  {contact.hours}
                  <span className="mt-1 block text-[12px]">{contact.hoursNote}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-end">
             <Button asChild variant="outline" className="rounded-sm border-pro-line bg-pro-raised text-pro-text shadow-none hover:border-pro-accent hover:bg-pro-accent hover:text-primary-foreground">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=ul.+Krakowska+50,+Szczyglice"
                target="_blank"
                rel="noreferrer"
              >
                Wyznacz trasę
                <ChevronRight aria-hidden="true" />
              </a>
            </Button>
          </div>
           <div className="mt-5 overflow-hidden rounded-sm border border-pro-line bg-pro-bg p-1 transition hover:border-pro-accent">
            <iframe
              title="Mapa – FLOW Szczyglice"
              src="https://www.google.com/maps?q=ul.+Krakowska+50,+Szczyglice&output=embed"
              className="h-[400px] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-pro-line bg-pro-bg text-pro-text">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2 px-6 py-8 text-[13px] text-pro-muted sm:flex-row sm:justify-between">
          <p>FLOW · {contact.www} · {contact.phones.map((p) => p.label).join(" · ")}</p>
          <p>Creat by Pat&amp;Mat.corp</p>
        </div>
      </footer>
    </div>
  );
}