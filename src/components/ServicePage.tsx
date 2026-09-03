import { Link } from "@tanstack/react-router";
import logo from "@/assets/flow-logo.png";
import { contact, type PriceGroup, type Section } from "@/data/flow";

type Props = {
  theme: "bike" | "ski";
  hero: string;
  name: string;
  tagline: string;
  lead: string;
  values: string[];
  sections: Section[];
  prices: PriceGroup[];
  otherLabel: string;
  otherHref: "/rowery" | "/narty";
};

export function ServicePage(props: Props) {
  const themeClass = props.theme === "bike" ? "theme-bike" : "theme-ski";
  const season = props.theme === "bike" ? "Sezon letni" : "Sezon zimowy";

  return (
    <div className={`${themeClass} min-h-screen bg-white text-ink`}>
      <header className="sticky top-0 z-30 border-b border-hairline bg-white/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <Link to="/" aria-label="FLOW – strona główna">
            <img src={logo} alt="FLOW" width={1389} height={784} className="h-10 w-auto" />
          </Link>
          <div className="flex items-center gap-5 text-[13px]">
            <a href="#zakres" className="hidden text-ink-muted transition hover:text-ink sm:block">
              Zakres
            </a>
            <a href="#cennik" className="hidden text-ink-muted transition hover:text-ink sm:block">
              Cennik
            </a>
            <Link to={props.otherHref} className="text-ink-muted transition hover:text-ink">
              {props.otherLabel}
            </Link>
            <a
              href={contact.phoneHref}
              className="brand-bg rounded-full px-4 py-2 text-[13px] font-medium text-white transition hover:opacity-90"
            >
              {contact.phone}
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2 md:items-center md:py-20">
        <div className="flow-in">
          <p className="eyebrow brand-text">{season}</p>
          <h1 className="mt-4 text-4xl leading-[1.05] sm:text-5xl">{props.tagline}</h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-muted">{props.lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={contact.phoneHref}
              className="brand-bg rounded-full px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Zadzwoń {contact.phone}
            </a>
            <a
              href="#cennik"
              className="rounded-full border border-hairline px-6 py-3 text-sm font-medium transition hover:border-ink"
            >
              Zobacz cennik
            </a>
          </div>
          <dl className="mt-10 grid gap-x-8 gap-y-3 border-t border-hairline pt-6 sm:grid-cols-3">
            {props.values.map((v) => (
              <div key={v} className="border-t-2 brand-border pt-3">
                <dt className="sr-only">Wyróżnik</dt>
                <dd className="text-[13px] leading-snug text-ink-muted">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flow-in overflow-hidden rounded-2xl border border-hairline">
          <img
            src={props.hero}
            alt={props.name}
            width={1600}
            height={1104}
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </section>

      {/* O NAS */}
      <section className="border-y border-hairline bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 md:grid-cols-[0.8fr_1.2fr] md:py-18">
          <h2 className="text-2xl sm:text-3xl">O nas</h2>
          <div className="space-y-4 text-[15px] leading-relaxed text-ink-muted">
            <p>
              FLOW to warsztat prowadzony przez ludzi, którzy sami jeżdżą — zimą na nartach, latem
              na rowerze. Każdy sprzęt traktujemy tak, jakby był nasz: dokładnie, bez pośpiechu i z
              pełną informacją o tym, co i dlaczego wymaga serwisu.
            </p>
            <p>
              Pracujemy na profesjonalnych narzędziach i sprawdzonych materiałach. Przed
              rozpoczęciem pracy zawsze przedstawiamy zakres i koszt — bez niespodzianek na
              odbiorze.
            </p>
          </div>
        </div>
      </section>

      {/* ZAKRES */}
      <section id="zakres" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-14 md:py-18">
        <p className="eyebrow">Zakres usług</p>
        <h2 className="mt-3 text-2xl sm:text-3xl">Co dokładnie robimy</h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {props.sections.map((s) => (
            <div key={s.title}>
              <h3 className="text-lg">{s.title}</h3>
              <ul className="mt-4 divide-y divide-hairline border-t border-hairline">
                {s.items.map((i) => (
                  <li key={i} className="flex gap-3 py-2.5 text-[14px] text-ink-muted">
                    <span className="brand-text">—</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CENNIK */}
      <section id="cennik" className="border-t border-hairline bg-surface">
        <div className="mx-auto max-w-6xl scroll-mt-20 px-6 py-14 md:py-18">
          <p className="eyebrow">Cennik</p>
          <h2 className="mt-3 text-2xl sm:text-3xl">Ceny orientacyjne</h2>
          <p className="mt-3 max-w-xl text-[14px] text-ink-muted">
            Ostateczną wycenę ustalamy po oględzinach sprzętu — zawsze przed rozpoczęciem pracy.
            Ceny nie obejmują części zamiennych.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {props.prices.map((g) => (
              <div key={g.title} className="rounded-2xl border border-hairline bg-white p-6">
                <h3 className="text-base">{g.title}</h3>
                <ul className="mt-4 divide-y divide-hairline">
                  {g.rows.map((r) => (
                    <li key={r.name} className="flex items-baseline justify-between gap-6 py-3">
                      <span className="text-[14px] text-ink-muted">{r.name}</span>
                      <span className="display shrink-0 text-[15px]">{r.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-14 md:py-18">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Kontakt</p>
            <h2 className="mt-3 text-2xl sm:text-3xl">Przyjedź lub zadzwoń</h2>
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-ink-muted">
              Najlepiej ustalić termin telefonicznie — dzięki temu odbierzesz sprzęt szybciej.
            </p>
          </div>
          <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <dt className="eyebrow">Telefon</dt>
              <dd className="mt-1">
                <a href={contact.phoneHref} className="brand-text text-lg font-medium">
                  {contact.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">E-mail</dt>
              <dd className="mt-1 text-[15px]">
                <a href={`mailto:${contact.email}`} className="hover:underline">
                  {contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Adres</dt>
              <dd className="mt-1 text-[15px] text-ink-muted">{contact.address}</dd>
            </div>
            <div>
              <dt className="eyebrow">Godziny</dt>
              <dd className="mt-1 text-[15px] text-ink-muted">
                {contact.hours}
                <span className="mt-1 block text-[13px]">{contact.hoursNote}</span>
              </dd>
            </div>
          </dl>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-hairline">
          <iframe
            title="Mapa – FLOW Szczyglice"
            src="https://www.google.com/maps?q=ul.%20Krakowska%2050,%2032-083%20Szczyglice&output=embed"
            className="h-[320px] w-full border-0"
            loading="lazy"
          />
        </div>
      </section>

      <footer className="border-t border-hairline">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-[13px] text-ink-muted sm:flex-row">
          <img src={logo} alt="FLOW" width={1389} height={784} className="h-9 w-auto" loading="lazy" />
          <p>
            FLOW · {contact.www} · {contact.phone}
          </p>
        </div>
      </footer>
    </div>
  );
}
