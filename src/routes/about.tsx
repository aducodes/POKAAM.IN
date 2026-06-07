import { createFileRoute, Link } from "@tanstack/react-router";
import about from "@/assets/about-team.jpg";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — Pokaam" },
      { name: "description", content: "Pokaam is a small travel studio designing slow, locally-led trips into the mountains of South India and the Himalayas." },
      { property: "og:title", content: "About — Pokaam" },
      { property: "og:description", content: "A small travel studio designing slow, locally-led trips." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function About() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-20 md:pt-32">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">About</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl">
            We make space <span className="italic text-[var(--color-gold)]">to be outside.</span>
          </h1>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <img src={about} alt="Pokaam travellers" width={1600} height={1000} loading="lazy" className="aspect-[16/9] w-full rounded-sm object-cover" />
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">Our story</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-primary md:text-5xl">
              Started in the hills of Munnar, with one trek and a small group of friends.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-foreground/80 md:col-span-6 md:col-start-7">
            <p>
              Pokaam was born from a simple frustration — most trips were too rushed, too packed, too transactional.
              We wanted slower. We wanted trips that felt like a long exhale.
            </p>
            <p>
              Today we run small-group treks, fireside camps and women-only She Camps across the Western Ghats and
              the Indian Himalayas. Every trip is locally led, every group is small, every meal is shared.
            </p>
            <p>
              The name <em>Pokaam</em> means <em>let's go</em>. That's still the whole idea.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="max-w-3xl font-display text-4xl leading-tight text-primary md:text-5xl">What we believe.</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {[
              { n: "01", t: "Small over big", d: "We cap group sizes so trips feel like a circle, not a tour." },
              { n: "02", t: "Local over polished", d: "We hire and pay local guides fairly. Their hills, their knowledge." },
              { n: "03", t: "Slow over scripted", d: "We leave gaps in the day. The best moments don't fit on a schedule." },
            ].map((v) => (
              <div key={v.n} className="border-t border-primary/20 pt-6">
                <p className="text-xs uppercase tracking-widest text-[var(--color-gold)]">{v.n}</p>
                <h3 className="mt-3 font-display text-2xl text-primary">{v.t}</h3>
                <p className="mt-2 text-sm text-foreground/70">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-20 md:flex-row md:items-center">
          <h2 className="max-w-xl font-display text-4xl leading-tight">Come walk with us.</h2>
          <Link to="/packages" className="rounded-sm bg-[var(--color-gold)] px-6 py-3 text-xs uppercase tracking-widest text-primary hover:opacity-90">
            See all packages
          </Link>
        </div>
      </section>
    </>
  );
}
