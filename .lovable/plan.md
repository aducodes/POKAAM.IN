## Goal

Replace the blank Lovable template with the full uploaded Pokaam site, then make sure every interaction (navigation, package detail page, filters, inquiry form, contact links) actually works.

The uploaded zip already contains a complete TanStack Start site — including a working slide → detail flow. Each `PackageCard` on the home page and `/packages` list links to `/packages/$slug`, which renders a full hero, overview, highlights, day-by-day itinerary, inclusions/exclusions, sticky price + inquiry form, and related trips. So the "click a slide → show full details" behavior is built; it just isn't in your current project yet.

## What I'll do

### 1. Import the codebase
Copy from the zip into the current project:
- `src/routes/`: `__root.tsx`, `index.tsx`, `about.tsx`, `contact.tsx`, `packages.tsx`, `packages.$slug.tsx`
- `src/components/site/`: `Header.tsx`, `Footer.tsx`, `PackageCard.tsx`, `InquiryForm.tsx`
- `src/data/packages.ts` (6 trips: Meesapulimala, Yellapetty, Sar Pass, She Camp Munnar, She Camp Kodaikanal, Munnar Misty Camp)
- `src/lib/contact.ts` (WhatsApp / email / INR helpers)
- `src/assets/`: hero + 6 package images + logo
- Updated `src/styles.css` with the Pokaam design tokens (cream / gold / forest palette, Outfit + Figtree fonts)

I will NOT touch `routeTree.gen.ts` (auto-generated), `router.tsx` (already correct), `package.json`, or config files.

### 2. Install missing dependencies
The uploaded code uses `framer-motion`, which is not in the current project — I'll add it.

### 3. Replace the placeholder home page
Delete the blank-app placeholder in `src/routes/index.tsx` and replace with the Pokaam landing (hero, intro, 3 featured packages, value props, testimonial, CTA).

### 4. Make it fully functional
- **Package detail page**: already complete — every card on `/` and `/packages` opens its full detail at `/packages/<slug>`.
- **Filters on `/packages`**: All / Treks / Camps / She Camps — already wired with `useState`.
- **Inquiry form** (on each package page + contact page): currently calls placeholder logic. I'll wire submit to:
  - Open  with a prefilled message (name, package, dates, group size, message) using `buildWhatsAppUrl`, and
  - Show a `sonner` toast confirming submission.
- **Contact page**: ensure WhatsApp / email / Instagram links use the real values from `src/lib/contact.ts` and open correctly (`mailto:`, `wa.me`, external Instagram).
- **Header nav**: Home / Packages / About / Contact all use typed `<Link>` to existing routes.
- **404 + error boundaries**: already defined in `__root.tsx`.
- **Per-page SEO**: every route already has its own `head()` with title, description, og:title/description; package detail also sets `og:image`.

### 5. Configurable contact details
`src/lib/contact.ts` currently has placeholder values:
```
POKAAM_WHATSAPP = "919999999999"
POKAAM_EMAIL    = "hello@pokaam.in.com"
POKAAM_INSTAGRAM = "https://instagram.com/pokaam"
```
I'll leave a clear comment so you can swap in your real number / email / handle. If you give them to me now, I'll drop them in directly.

### 6. Verify
After import I'll:
- Open the preview and click through Home → a package card → detail page, then Packages → filter → another detail page.
- Confirm the inquiry form opens WhatsApp with the right prefilled text.
- Confirm 404 and refresh on `/packages/sar-pass-trek` both work.

## Out of scope (ask if you want these)
- No database / Lovable Cloud — inquiries go via WhatsApp, not stored.
- No booking / payments.
- No CMS — packages stay in `src/data/packages.ts`.
- No new package content beyond the 6 already in the zip.

## Technical notes
- TanStack Start file-based routing under `src/routes/` only.
- Detail route uses `packages.$slug.tsx` with `loader` + `notFound()`; uses `Route.useLoaderData()` (Query-less, fine for static data).
- `PackageCard` uses `<Link to="/packages/$slug" params={{ slug: pkg.slug }}>` — type-safe, no string interpolation.
- Toaster is mounted once in `__root.tsx`; `toast()` from `sonner`.
- Design tokens (`--color-gold`, `--color-cream`, primary forest green) live in `src/styles.css`; no hardcoded colors in components.
