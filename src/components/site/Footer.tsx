import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import logo from "@/assets/pokaam-logo.png";
import { POKAAM_EMAIL, POKAAM_INSTAGRAM, buildWhatsAppUrl } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo} alt="Pokaam" className="h-14 w-auto" />
          <p className="mt-6 max-w-sm font-display text-2xl leading-tight">
            Nature. Travel. Healing.
          </p>
          <p className="mt-4 max-w-sm text-sm text-primary-foreground/70">
            Pokaam creates unforgettable trekking, camping, and outdoor experiences that bring people closer to nature and meaningful connections.
          </p>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-widest text-[var(--color-gold)]">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/packages" className="hover:text-[var(--color-gold)]">All Packages</Link></li>
            <li><Link to="/about" className="hover:text-[var(--color-gold)]">About</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--color-gold)]">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-widest text-[var(--color-gold)]">Reach us</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={buildWhatsAppUrl("Hi Pokaam, I'd like to know more.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[var(--color-gold)]">
                <MessageCircle size={14} /> WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${POKAAM_EMAIL}`} className="inline-flex items-center gap-2 hover:text-[var(--color-gold)]">
                <Mail size={14} /> {POKAAM_EMAIL}
              </a>
            </li>
            <li>
              <a href={POKAAM_INSTAGRAM} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[var(--color-gold)]">
                <Instagram size={14} /> @pokaam.in
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-primary-foreground/60 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Pokaam. All rights reserved.</p>
          <p>Crafted by Adnan from webzlore.</p>
        </div>
      </div>
    </footer>
  );
}
