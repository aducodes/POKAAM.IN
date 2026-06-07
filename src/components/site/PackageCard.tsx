import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { Package } from "@/data/packages";
import { formatINR } from "@/lib/contact";

const typeLabel: Record<Package["type"], string> = {
  trek: "Trek",
  camp: "Camp",
  "she-camp": "She Camp",
};

export function PackageCard({ pkg, index = 0 }: { pkg: Package; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: "easeOut" }}
    >
      <Link
        to="/packages/$slug"
        params={{ slug: pkg.slug }}
        className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <article className="flex flex-col">
          <div className="aspect-[4/5] overflow-hidden bg-muted">
            <img
              src={pkg.image}
              alt={pkg.title}
              loading="lazy"
              width={1280}
              height={960}
              className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />
          </div>
          <div className="mt-5 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            <span>{typeLabel[pkg.type]} · {pkg.region}</span>
            <span className="text-[var(--color-gold)]">{pkg.duration}</span>
          </div>
          <h3 className="mt-2 font-display text-2xl leading-tight text-foreground transition-colors group-hover:text-primary md:text-3xl">
            {pkg.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">{pkg.tagline}</p>
          <div className="mt-4 flex items-end justify-between">
            <span className="font-display text-xl text-primary">{formatINR(pkg.price)}</span>
            <span className="text-xs uppercase tracking-widest text-primary underline-offset-4 group-hover:underline">
              View trip →
            </span>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
