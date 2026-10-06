import { Link } from "@tanstack/react-router";
import { ChevronRight, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/flow-logo.png";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/SocialLinks";
import { contact } from "@/data/flow";

const navigation = [
  { label: "Usługi", href: "#uslugi" },
  { label: "Cennik", href: "#cennik" },
  { label: "Oklejanie PPF", href: "/oklejanie-ppf", cta: true },
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
                <Link to="/oklejanie-ppf">{item.label}</Link>
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
            {navigation.map((item) =>
              "cta" in item ? (
                <Button key={item.href} asChild className="brand-bg mt-2 rounded-sm text-primary-foreground">
                  <Link to="/oklejanie-ppf" onClick={() => setMenuOpen(false)}>{item.label}</Link>
                </Button>
              ) : (
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
        <div className="mt-8 flex flex-wrap items-center justify-between gap-5">
          <SocialLinks />
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
        <p>FLOW · {contact.www} · <a href={contact.phoneHref} className="hover:text-pro-accent">{contact.phone}</a></p>
        <SocialLinks />
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
