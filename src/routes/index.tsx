import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Heart, Users } from "lucide-react";
import hero from "@/assets/hero-mountains.jpg";
import { packages } from "@/data/packages";
import { PackageCard } from "@/components/site/PackageCard";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Pokaam — Nature. Travel. Healing." },
      { name: "description", content: "Curated treks, camps and women-only retreats across Munnar, Kodaikanal and the Himalayas. Small groups. Real places." },
      { property: "og:title", content: "Pokaam — Nature. Travel. Healing." },
      { property: "og:description", content: "Curated treks, camps and women-only retreats across Munnar, Kodaikanal and the Himalayas." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Home() {
  const featured = packages.slice(0, 3);
  return (
    <>
      {/* HERO */}
      <section className="relative isolate h-[92vh] min-h-[600px] w-full overflow-hidden bg-primary text-primary-foreground">
        <img
          src={hero}
          alt="Misty mountain ridge at dawn"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/20 to-primary/90" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 md:pb-28">
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-[0.4em] text-[var(--color-gold)]"
          >
            Nature · Travel · Healing
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl lg:text-8xl"
          >
            Walk slower.<br />
            <span className="italic text-[var(--color-gold)]">See farther.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-6 max-w-xl text-base text-primary-foreground/80"
          >
            Pokaam creates unforgettable trekking, camping, and outdoor experiences that bring people closer to nature and meaningful connections.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Link to="/packages" className="inline-flex items-center gap-2 rounded-sm bg-[var(--color-gold)] px-6 py-3 text-xs uppercase tracking-widest text-primary hover:opacity-90">
              Browse packages <ArrowRight size={14} />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/40 px-6 py-3 text-xs uppercase tracking-widest text-primary-foreground hover:bg-primary-foreground/10">
              Plan with us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[var(--color-cream)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">— A travel studio</p>
            <h2 className="mt-6 font-display text-4xl leading-tight text-primary md:text-5xl">
              Trips designed like rituals, not itineraries.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-foreground/80 md:col-span-6 md:col-start-7">
            <p>
              Pokaam runs small, thoughtfully-led trips into mountains, forests and quiet lakes. We keep groups
              small (8–14), cook real food, and leave room for the kind of conversations only firelight makes possible.
            </p>
            <p>
              Whether it's a sunrise climb above Munnar, a five-day Himalayan crossing, or a women-only weekend by a misty lake — every trip is built to slow you down.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED PACKAGES */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">Featured</p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-primary md:text-5xl">This season's trips.</h2>
            </div>
            <Link to="/packages" className="text-xs uppercase tracking-widest text-primary underline-offset-4 hover:underline">
              See all →
            </Link>
          </div>
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-3">
            {featured.map((p, i) => (
              <PackageCard key={p.slug} pkg={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <h2 className="max-w-3xl font-display text-4xl leading-tight md:text-5xl">
            Why travel with Pokaam.
          </h2>
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {[
              { icon: Users, t: "Small groups, real people", d: "Between 8 and 14 travellers. Enough for warmth, never a crowd." },
              { icon: Compass, t: "Locally led, deeply rooted", d: "Trips designed with people who actually live in these hills." },
              { icon: Heart, t: "Built for slow joy", d: "Long meals, slow mornings, room to read a book and mean it." },
            ].map((v) => (
              <div key={v.t} className="border-t border-primary-foreground/20 pt-8">
                <v.icon size={28} className="text-[var(--color-gold)]" />
                <h3 className="mt-6 font-display text-2xl">{v.t}</h3>
                <p className="mt-3 text-sm text-primary-foreground/70">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-[var(--color-cream)]">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">From a traveller</p>
          <blockquote className="mt-8 font-display text-3xl leading-snug text-primary md:text-4xl">
            “I came back quieter. That's the only review I have. Pokaam made me forget my phone existed for three days, and I didn't know I needed that.”
          </blockquote>
          <p className="mt-8 text-xs uppercase tracking-widest text-muted-foreground">
            Anjali · She Camp Munnar
          </p>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-20 md:flex-row md:items-center">
          <h2 className="max-w-xl font-display text-4xl leading-tight">
            Not sure where to begin? <span className="italic text-[var(--color-gold)]">We'll plan it with you.</span>
          </h2>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-sm bg-[var(--color-gold)] px-6 py-3 text-xs uppercase tracking-widest text-primary hover:opacity-90">
            Start a conversation <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
