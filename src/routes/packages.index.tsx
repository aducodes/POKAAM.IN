import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { packages, type PackageType } from "@/data/packages";
import { PackageCard } from "@/components/site/PackageCard";

export const Route = createFileRoute("/packages/")({
  component: PackagesPage,
  head: () => ({
    meta: [
      { title: "Packages — Pokaam" },
      {
        name: "description",
        content:
          "All Pokaam trips: treks across Munnar and the Himalayas, fireside camps, and women-only retreats.",
      },
      { property: "og:title", content: "Packages — Pokaam" },
      {
        property: "og:description",
        content: "All Pokaam trips: treks, camps, and women-only retreats.",
      },
      { property: "og:url", content: "/packages" },
    ],
    links: [{ rel: "canonical", href: "/packages" }],
  }),
});

const filters: { key: "all" | PackageType; label: string }[] = [
  { key: "all", label: "All trips" },
  { key: "trek", label: "Treks" },
  { key: "camp", label: "Camps" },
  { key: "she-camp", label: "She Camps" },
];

function PackagesPage() {
  const [filter, setFilter] = useState<"all" | PackageType>("all");
  const list = useMemo(
    () =>
      filter === "all" ? packages : packages.filter((p) => p.type === filter),
    [filter],
  );

  return (
    <>
      {/* HEADER BANNER */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-20 md:pt-32 md:pb-24">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">
            All Packages
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] md:text-7xl">
            Choose your{" "}
            <span className="italic text-[var(--color-gold)]">elsewhere.</span>
          </h1>
          <p className="mt-6 max-w-xl text-primary-foreground/80">
            From a one-day sunrise climb to a five-day Himalayan crossing —
            every trip in small, warm groups.
          </p>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-12 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`rounded-full border px-5 py-2 text-xs uppercase tracking-widest transition-colors ${
                  filter === f.key
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-foreground hover:border-primary"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {list.length === 0 ? (
            <p className="py-20 text-center text-muted-foreground">
              No trips in this category yet.
            </p>
          ) : (
            <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
              {list.map((p, i) => (
                <PackageCard key={p.slug} pkg={p} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
