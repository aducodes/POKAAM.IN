import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, Instagram } from "lucide-react";
import { InquiryForm } from "@/components/site/InquiryForm";
import { POKAAM_EMAIL, POKAAM_INSTAGRAM, buildWhatsAppUrl } from "@/lib/contact";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — Pokaam" },
      { name: "description", content: "Tell us about the trip you have in mind — we'll plan it with you." },
      { property: "og:title", content: "Contact — Pokaam" },
      { property: "og:description", content: "Tell us about the trip you have in mind — we'll plan it with you." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function Contact() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-20 md:pt-32">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">Contact</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl">
            Let's plan <span className="italic text-[var(--color-gold)]">your elsewhere.</span>
          </h1>
          <p className="mt-6 max-w-xl text-primary-foreground/80">
            Tell us a little about you — group size, dates, what you're hoping for. We'll come back with a trip that fits.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-5">
            <h2 className="font-display text-3xl text-primary">Other ways to reach us</h2>
            <ul className="mt-8 space-y-5 text-sm">
              <li>
                <a href={buildWhatsAppUrl("Hi Pokaam!")} target="_blank" rel="noreferrer" className="group flex items-start gap-4">
                  <MessageCircle size={20} className="mt-1 text-[var(--color-gold)]" />
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-muted-foreground">WhatsApp</span>
                    <span className="block text-base text-primary group-hover:underline">Chat with us</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${POKAAM_EMAIL}`} className="group flex items-start gap-4">
                  <Mail size={20} className="mt-1 text-[var(--color-gold)]" />
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-muted-foreground">Email</span>
                    <span className="block text-base text-primary group-hover:underline">{POKAAM_EMAIL}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={POKAAM_INSTAGRAM} target="_blank" rel="noreferrer" className="group flex items-start gap-4">
                  <Instagram size={20} className="mt-1 text-[var(--color-gold)]" />
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-muted-foreground">Instagram</span>
                    <span className="block text-base text-primary group-hover:underline">@pokaam.in</span>
                  </span>
                </a>
              </li>
            </ul>
            <div className="mt-12 rounded-sm border border-border bg-[var(--color-cream)] p-6">
              <h3 className="font-display text-xl text-primary">Bringing a group?</h3>
              <p className="mt-2 text-sm text-foreground/70">
                We design private trips for friends, families, offices and women's circles. Mention group size in the form and we'll send a custom plan.
              </p>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="rounded-sm border border-border bg-[var(--color-cream)] p-8 md:p-10">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
