import { Link } from "@tanstack/react-router";
import { ChevronRight, Menu, Phone, X } from "lucide-react";
import { useState, type FormEvent } from "react";
import logo from "@/assets/flow-logo.png";
import { Button } from "@/components/ui/button";
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

/** prefix: "" on the bike page, "/rowery" on subpages so links reach main-page sections. */
export function BikeHeader({ prefix = "" }: { prefix?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 border-b border-pro-line bg-pro-bg/95 backdrop-blur-xl">
      <div className="h-1 brand-bg" />
      <nav className="mx-auto flex min-h-22 max-w-6xl items-center justify-between gap-5 px-6 py-2 md:min-h-30 md:py-3">
        <Link to="/" aria-label="FLOW – strona główna" className="shrink-0">
          <img src={logo} alt="FLOW" width={1389} height={784} className="h-16 w-auto drop-shadow-lg md:h-24" />
        </Link>

        <div className="hidden items-center gap-7 text-[13px] font-semibold uppercase lg:flex">
          {navigation.map((item) =>
            "cta" in item && item.cta ? (
              <Button key={item.href} asChild className="brand-bg rounded-sm border border-pro-accent px-5 text-primary-foreground shadow-none hover:brightness-110">
                <a href={prefix + item.href}>{item.label}</a>
              </Button>
            ) : (
              <a
                key={item.href}
                href={prefix + item.href}
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
                href={prefix + item.href}
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
  );
}

export function ServiceRequestSection({
  serviceText,
  setServiceText,
  eyebrow = "Zleć serwis",
  title = "Opowiedz nam o swoim rowerze",
}: {
  serviceText: string;
  setServiceText: (v: string) => void;
  eyebrow?: string;
  title?: string;
}) {
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
  const field = "h-11 rounded-sm border-pro-line bg-pro-panel text-pro-text focus-visible:ring-pro-accent";

  return (
    <section id="zlec-serwis" className="pro-grid mx-auto max-w-6xl scroll-mt-32 px-6 py-14 md:py-18">
      <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">{title}</h2>
          <form onSubmit={submitRequest} className="mt-8 grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium">
              Imię
              <Input name="name" required maxLength={80} autoComplete="name" className={field} />
            </label>
            <label className="grid gap-2 text-sm font-medium">
              Telefon
              <Input name="phone" type="tel" required maxLength={30} autoComplete="tel" className={field} />
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
                {["MTB", "enduro", "gravel", "szosa", "e-bike", "miejski", "inny"].map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-medium">
              Preferowany termin
              <Input name="preferredDate" type="date" required className={field} />
            </label>
            <label className="grid gap-2 text-sm font-medium sm:col-span-2">
              Opis usterki / zakres usługi
              <Textarea
                id="service-description"
                name="description"
                required
                maxLength={1200}
                rows={6}
                value={serviceText}
                onChange={(e) => setServiceText(e.target.value)}
                className="rounded-sm border-pro-line bg-pro-panel text-pro-text focus-visible:ring-pro-accent"
              />
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
  );
}

export function ContactMapSection() {
  return (
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
            <a href="https://www.google.com/maps/dir/?api=1&destination=ul.+Krakowska+50,+Szczyglice" target="_blank" rel="noreferrer">
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
  );
}

export function BikeFooter() {
  return (
    <footer className="border-t border-pro-line bg-pro-bg text-pro-text">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2 px-6 py-8 text-[13px] text-pro-muted sm:flex-row sm:justify-between">
        <p>FLOW · {contact.www} · {contact.phones.map((p) => p.label).join(" · ")}</p>
        <a
          href="https://www.instagram.com/patandmat.corp/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-pro-accent"
        >
          Creat by Pat&amp;Mat.corp
        </a>
      </div>
    </footer>
  );
}
