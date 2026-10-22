import { BikeFooter, BikeHeader, ContactMapSection } from "@/components/BikeChrome";
import { ChevronRight, Footprints, Mountain, Scissors, Snowflake, Sun, Wrench } from "lucide-react";
import heroSki from "@/assets/hero-ski.jpg";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ski } from "@/data/flow";

const services = [
  { number: "01", title: "Ostrzenie krawędzi", price: "od 45 zł", description: "Precyzyjne ostrzenie krawędzi bocznych i dolnych pod Twój styl jazdy — pewny chwyt na twardym i oblodzonym stoku.", Icon: Scissors },
  { number: "02", title: "Smarowanie ślizgu", price: "od 40 zł", description: "Smarowanie na gorąco dobranym do warunków smarem. Lepszy poślizg i ochrona ślizgu przed wysychaniem.", Icon: Snowflake },
  { number: "03", title: "Naprawa i szlif ślizgu", price: "od 30 zł", description: "Uzupełnianie ubytków, szlif i nadanie struktury ślizgu. Sprzęt jedzie równo i przewidywalnie.", Icon: Mountain },
  { number: "04", title: "Wiązania", price: "od 35 zł", description: "Regulacja, kontrola, ustawienie pod but oraz wymiana i montaż wiązań — dla bezpieczeństwa na stoku.", Icon: Wrench },
  { number: "05", title: "Snowboard i biegówki", price: "od 90 zł", description: "Serwis desek snowboardowych i nart biegowych, dopasowanie butów narciarskich, diagnostyka i doradztwo.", Icon: Footprints },
  { number: "06", title: "Konserwacja na lato", price: "od 60 zł", description: "Zabezpieczenie sprzętu po sezonie, żeby jesienią był gotowy do jazdy bez niespodzianek.", Icon: Sun },
] as const;

const packages = [
  { name: "Podstawowy", price: "od 70 zł", items: ["Ostrzenie krawędzi", "Smarowanie ślizgu", "Kontrola sprzętu"] },
  { name: "Pełny", price: "od 130 zł", items: ["Szlif i struktura ślizgu", "Naprawa ubytków", "Ostrzenie krawędzi", "Smarowanie na gorąco"] },
  { name: "Startowy", price: "od 200 zł", items: ["Przygotowanie zawodnicze", "Precyzyjne kąty krawędzi", "Smary dobrane do warunków"] },
  { name: "Snowboard", price: "od 90 zł", items: ["Ostrzenie krawędzi", "Smarowanie ślizgu", "Kontrola wiązań"] },
] as const;

export function SkiServicePage() {
  return (
    <div className="bike-pro ski-pro theme-ski min-h-screen scroll-smooth bg-pro-bg text-pro-text">
      <BikeHeader cta={{ label: "Serwis rowerowy", to: "/rowery" }} />

      <section className="relative min-h-[620px] overflow-hidden border-b border-pro-line md:min-h-[720px]">
        <img src={heroSki} alt="Serwis narciarski FLOW" width={1600} height={1104} className="absolute inset-0 h-full w-full object-cover object-[62%_center] transition-transform duration-700 hover:scale-[1.025]" />
        <div className="absolute inset-0 bg-gradient-to-r from-pro-bg via-pro-bg/90 to-pro-bg/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-pro-bg/70 via-transparent to-transparent" />
        <div className="relative mx-auto flex min-h-[620px] max-w-6xl items-center px-6 py-16 md:min-h-[720px]">
          <div className="flow-in max-w-2xl">
            <p className="eyebrow brand-text flex items-center gap-3 before:h-px before:w-10 before:bg-pro-accent">Sezon zimowy</p>
            <h1 className="mt-5 max-w-xl text-6xl leading-[0.92] sm:text-7xl md:text-8xl">Profesjonalny serwis Twoich nart</h1>
            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-pro-muted">{ski.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="brand-bg h-auto rounded-sm border border-pro-accent px-6 py-3 text-primary-foreground shadow-none hover:brightness-110">
                <a href="#kontakt">Zleć serwis</a>
              </Button>
              <Button asChild variant="outline" className="h-auto rounded-sm border-pro-line bg-pro-bg/60 px-6 py-3 text-pro-text shadow-none hover:border-pro-accent hover:bg-pro-panel hover:text-pro-text">
                <a href="#cennik">Zobacz cennik</a>
              </Button>
            </div>
            <dl className="mt-10 grid gap-x-8 gap-y-3 border-t border-pro-line pt-6 sm:grid-cols-3">
              {ski.values.map((value) => (
                <div key={value} className="border-t-2 border-pro-accent pt-3">
                  <dt className="sr-only">Wyróżnik</dt>
                  <dd className="text-[13px] leading-snug text-pro-muted">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section id="o-nas" className="scroll-mt-32 border-y border-pro-line bg-pro-panel text-pro-text">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 md:grid-cols-[0.8fr_1.2fr] md:py-18">
          <h2 className="text-3xl sm:text-4xl">O nas</h2>
          <div className="space-y-4 text-[15px] leading-relaxed text-pro-muted">
            <p>FLOW to warsztat prowadzony przez ludzi, którzy sami jeżdżą — zimą na nartach, latem na rowerze. Każdy sprzęt traktujemy tak, jakby był nasz: dokładnie, bez pośpiechu i z pełną informacją o tym, co i dlaczego wymaga serwisu.</p>
            <p>Pracujemy na profesjonalnych narzędziach i sprawdzonych materiałach. Przed rozpoczęciem pracy zawsze przedstawiamy zakres i koszt — bez niespodzianek na odbiorze.</p>
          </div>
        </div>
      </section>

      <section id="uslugi" className="pro-grid mx-auto max-w-6xl scroll-mt-32 px-6 py-14 md:py-18">
        <p className="eyebrow brand-text">Usługi</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">Zakres usług</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ number, title, description, price, Icon }) => (
            <a key={number} href="#kontakt" className="pro-card-glow group flex flex-col border border-pro-line bg-pro-panel p-6 text-left">
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
                <span className="flex items-center gap-1 text-sm text-pro-muted transition group-hover:text-pro-accent">Zleć <ChevronRight className="size-4" aria-hidden="true" /></span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16">
          <p className="eyebrow brand-text">Pakiety</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Pakiety serwisowe</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg) => (
              <a href="#kontakt" key={pkg.name} className="pro-card-glow group flex flex-col border border-pro-line bg-pro-panel p-6 text-left">
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
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="cennik" className="scroll-mt-32 border-y border-pro-line bg-pro-panel">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-18">
          <p className="eyebrow">Cennik</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Cennik</h2>
          <Accordion type="multiple" defaultValue={["Pakiety serwisowe"]} className="mt-10 border-t border-pro-line">
            {ski.prices.map((group) => (
              <AccordionItem key={group.title} value={group.title} className="border-pro-line">
                <AccordionTrigger className="py-5 text-base hover:no-underline">{group.title}</AccordionTrigger>
                <AccordionContent>
                  <ul className="divide-y divide-hairline border-t border-hairline">
                    {group.rows.map((row) => (
                      <li key={row.name} className="flex items-baseline justify-between gap-6 py-3">
                        <span className="text-[14px] text-pro-muted">{row.name}</span>
                        <span className="display shrink-0 text-right text-[15px]">{row.price}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="mt-6 max-w-3xl text-[12px] leading-relaxed text-pro-muted">
            Ceny orientacyjne, obejmują robociznę. Części i materiały doliczane są osobno. Dokładną wycenę podajemy po obejrzeniu sprzętu.
          </p>
        </div>
      </section>

      <ContactMapSection />
      <BikeFooter />
    </div>
  );
}
