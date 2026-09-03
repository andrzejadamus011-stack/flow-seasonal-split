import { Link } from "@tanstack/react-router";
import { contact, type PriceGroup, type Section } from "@/data/flow";

type Props = {
  theme: "bike" | "ski";
  logo: string;
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

  return (
    <div className={`${themeClass} min-h-screen bg-black text-steel`}>
      {/* HERO */}
      <header className="relative isolate overflow-hidden">
        <img
          src={props.hero}
          alt={props.name}
          width={1536}
          height={1024}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, color-mix(in oklab, var(--brand-dark) 85%, transparent), color-mix(in oklab, var(--brand-dark) 96%, black))",
          }}
        />

        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 text-xs tracking-widest uppercase">
          <Link to="/" className="opacity-80 transition hover:opacity-100">
            ← Wybór serwisu
          </Link>
          <Link
            to={props.otherHref}
            className="rounded-full border border-white/25 px-4 py-2 transition hover:border-white/60"
          >
            {props.otherLabel}
          </Link>
        </nav>

        <div className="mx-auto max-w-6xl px-5 pt-10 pb-20 text-center">
          <img
            src={props.logo}
            alt={`FLOW ${props.name}`}
            className="mx-auto w-[min(520px,88vw)] drop-shadow-2xl flow-in"
          />
          <h1 className="mt-8 text-4xl leading-[0.95] sm:text-6xl flow-in">{props.tagline}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base/relaxed opacity-85 flow-in">{props.lead}</p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={contact.phoneHref}
              className="brand-bg brand-glow rounded-full px-7 py-3 text-sm font-semibold tracking-widest uppercase transition hover:brightness-115"
            >
              Zadzwoń {contact.phone}
            </a>
            <a
              href="#cennik"
              className="rounded-full border border-white/30 px-7 py-3 text-sm font-semibold tracking-widest uppercase transition hover:bg-white/10"
            >
              Cennik
            </a>
          </div>

          <ul className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-3">
            {props.values.map((v) => (
              <li
                key={v}
                className="brand-panel rounded-xl px-4 py-4 text-sm tracking-wide uppercase backdrop-blur"
              >
                {v}
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* O FIRMIE */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-3xl sm:text-4xl">O nas</h2>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <p className="text-base/relaxed opacity-85">
            FLOW to serwis rowerowo-narciarski prowadzony przez ludzi, którzy sami jeżdżą — latem po
            leśnych szlakach, zimą po stoku. Jeden warsztat obsługuje Cię przez cały rok: gdy kończy
            się sezon rowerowy, zaczyna się narciarski.
          </p>
          <p className="text-base/relaxed opacity-85">
            Każde zlecenie kończymy dopiero wtedy, gdy sprzęt działa tak, jak byśmy chcieli w swoim
            własnym. Profesjonalnie, szybko i solidnie — bez ukrytych kosztów i z jasną informacją,
            co i dlaczego zostało zrobione.
          </p>
        </div>
      </section>

      {/* ZAKRES USŁUG */}
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <h2 className="text-3xl sm:text-4xl">Zakres usług</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {props.sections.map((s) => (
            <div key={s.title} className="brand-panel rounded-2xl p-7">
              <h3 className="brand-text text-xl">{s.title}</h3>
              <ul className="mt-5 space-y-3">
                {s.items.map((i) => (
                  <li key={i} className="flex gap-3 text-sm opacity-90">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: "var(--brand-light)" }}
                    />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CENNIK */}
      <section id="cennik" className="mx-auto max-w-6xl scroll-mt-10 px-5 pb-20">
        <h2 className="text-3xl sm:text-4xl">Cennik</h2>
        <p className="mt-3 text-sm opacity-70">
          Ceny orientacyjne. Ostateczna wycena po oględzinach sprzętu — zawsze przed rozpoczęciem
          pracy.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {props.prices.map((g) => (
            <div key={g.title} className="brand-panel rounded-2xl p-7">
              <h3 className="brand-text text-xl">{g.title}</h3>
              <dl className="mt-5 divide-y divide-white/10">
                {g.rows.map((r) => (
                  <div key={r.name} className="flex items-baseline justify-between gap-4 py-3">
                    <dt className="text-sm opacity-90">{r.name}</dt>
                    <dd className="display text-base whitespace-nowrap">{r.price}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="mx-auto max-w-6xl px-5 pb-24">
        <div className="brand-panel brand-glow rounded-3xl p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl">Kontakt</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <a href={contact.phoneHref} className="display block text-4xl sm:text-5xl">
                {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="mt-3 block text-sm opacity-85">
                {contact.email}
              </a>
              <p className="mt-1 text-sm opacity-85">{contact.www}</p>
            </div>
            <div className="text-sm opacity-85">
              <p className="brand-text display text-base">Godziny otwarcia</p>
              <p className="mt-2">{contact.hours}</p>
              <p className="opacity-70">{contact.hoursNote}</p>
              <p className="brand-text display mt-6 text-base">Lokalizacja</p>
              <p className="mt-2">{contact.address}</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-xs tracking-widest uppercase opacity-60">
        FLOW — {props.name} · Zadbaj o swój sprzęt, ciesz się każdą chwilą
      </footer>
    </div>
  );
}
