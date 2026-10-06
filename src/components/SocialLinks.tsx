import { Facebook, Instagram } from "lucide-react";
import { contact } from "@/data/flow";

export function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      <a href={contact.facebook} target="_blank" rel="noopener noreferrer" aria-label="FLOW na Facebooku" title="Facebook" className="brand-text inline-flex items-center gap-2 text-sm transition hover:opacity-80">
        <Facebook className="size-5" aria-hidden="true" /> Facebook
      </a>
      <a href={contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="FLOW na Instagramie" title="Instagram" className="brand-text inline-flex items-center gap-2 text-sm transition hover:opacity-80">
        <Instagram className="size-5" aria-hidden="true" /> Instagram
      </a>
    </div>
  );
}