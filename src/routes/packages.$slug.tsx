import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, X, MapPin, Clock, Mountain } from "lucide-react";
import { getPackage, packages, type Package } from "@/data/packages";
import { formatINR } from "@/lib/contact";
import { InquiryForm } from "@/components/site/InquiryForm";
import { PackageCard } from "@/components/site/PackageCard";
import { FAQ } from "@/components/site/FAQ";

export const Route = createFileRoute("/packages/$slug")({
  loader: ({ params }) => {
    const pkg = getPackage(params.slug);
    if (!pkg) throw notFound();
    return { pkg };
  },
  head: ({ loaderData }) => {
    const pkg = loaderData?.pkg;
    if (!pkg) return { meta: [{ title: "Package — Pokaam" }] };
    return {
      meta: [
        { title: `${pkg.title} — Pokaam` },
        { name: "description", content: pkg.tagline },
        { property: "og:title", content: `${pkg.title} — Pokaam` },
        { property: "og:description", content: pkg.tagline },
        { property: "og:image", content: pkg.image },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/packages/${pkg.slug}` },
      ],
      links: [{ rel: "canonical", href: `/packages/${pkg.slug}` }],
    };
  },
  component: PackageDetail,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <h1 className="font-display text-5xl text-primary">Trip not found.</h1>
      <p className="mt-4 text-muted-foreground">
        It may have been renamed or retired.
      </p>
      <Link
        to="/packages"
        className="mt-8 inline-block rounded-sm bg-primary px-6 py-3 text-xs uppercase tracking-widest text-primary-foreground"
      >
        See all trips
      </Link>
    </div>
  ),
});

function PackageDetail() {
  const { pkg } = Route.useLoaderData() as { pkg: Package };
  const related = packages.filter((p) => p.slug !== pkg.slug).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative isolate h-[80vh] min-h-[520px] w-full overflow-hidden bg-primary text-primary-foreground">
        <img
          src={pkg.image}
          alt={pkg.title}
          width={1280}
          height={960}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary/95" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">
            {pkg.region}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl">
            {pkg.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/85">
            {pkg.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-6 text-xs uppercase tracking-widest text-primary-foreground/80">
            <span className="inline-flex items-center gap-2">
              <Clock size={14} /> {pkg.duration}
            </span>
            <span className="inline-flex items-center gap-2">
              <Mountain size={14} /> {pkg.difficulty}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin size={14} /> {pkg.region}
            </span>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-12 lg:py-28">
          {/* LEFT COLUMN */}
          <div className="space-y-16 lg:col-span-8">
            {/* Overview */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">
                Overview
              </p>
              <p className="mt-6 font-display text-2xl leading-snug text-foreground md:text-3xl">
                {pkg.overview}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="font-display text-3xl text-primary">Highlights</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {pkg.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm text-foreground/80">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-gold)]" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Itinerary */}
            <div>
              <h2 className="font-display text-3xl text-primary">Itinerary</h2>
              <ol className="mt-8 space-y-8 border-l border-border pl-6">
                {pkg.itinerary.map((it) => (
                  <li key={it.day} className="relative">
                    <span className="absolute -left-[31px] mt-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                    <p className="text-xs uppercase tracking-widest text-[var(--color-gold)]">
                      {it.day}
                    </p>
                    <h3 className="mt-1 font-display text-2xl text-foreground">
                      {it.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {it.details}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Inclusions / Exclusions */}
            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <h3 className="font-display text-2xl text-primary">
                  What's included
                </h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {pkg.inclusions.map((i) => (
                    <li key={i} className="flex gap-2 text-foreground/80">
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-[var(--color-gold)]"
                      />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display text-2xl text-primary">
                  Not included
                </h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {pkg.exclusions.map((i) => (
                    <li key={i} className="flex gap-2 text-muted-foreground">
                      <X size={16} className="mt-0.5 shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FAQ */}
            <FAQ items={pkg.faqs} />
          </div>

          {/* STICKY BOOKING CARD */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 rounded-sm border border-border bg-[var(--color-cream)] p-8">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Starting from
              </p>
              <p className="mt-2 font-display text-4xl text-primary">
                {formatINR(pkg.price)}
              </p>
              <p className="text-xs text-muted-foreground">
                per person · taxes extra
              </p>
              <div className="my-6 h-px bg-border" />
              <h3 className="font-display text-xl text-primary">
                Enquire about this trip
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                We'll reply within a few hours.
              </p>
              <div className="mt-5">
                <InquiryForm defaultPackage={pkg.slug} />
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* RELATED TRIPS */}
      <section className="bg-[var(--color-cream)]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="font-display text-3xl text-primary md:text-4xl">
            More trips you might love
          </h2>
          <div className="mt-12 grid gap-x-8 gap-y-16 md:grid-cols-3">
            {related.map((p, i) => (
              <PackageCard key={p.slug} pkg={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
