import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { buildWhatsAppUrl } from "@/lib/contact";
import { packages } from "@/data/packages";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  email: z.string().trim().email("Enter a valid email").max(200),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  packageSlug: z.string().max(80).optional(),
  date: z.string().max(40).optional(),
  groupSize: z.string().max(10).optional(),
  message: z.string().trim().max(800).optional(),
});

const SELECT_CLASS =
  "flex h-10 w-full rounded-sm border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50";

export function InquiryForm({ defaultPackage }: { defaultPackage?: string }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [selectedSlug, setSelectedSlug] = useState(defaultPackage ?? "");
  const [selectedDate, setSelectedDate] = useState("");

  const selectedPackage = packages.find((p) => p.slug === selectedSlug);
  const availableDates = selectedPackage?.dates ?? [];

  const handlePackageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSlug(e.target.value);
    setSelectedDate("");
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const k = String(issue.path[0] ?? "form");
        if (!errs[k]) errs[k] = issue.message;
      }
      setErrors(errs);
      setSubmitting(false);
      toast.error("Please check the highlighted fields.");
      return;
    }

    setErrors({});
    const d = parsed.data;
    const pkg = d.packageSlug
      ? packages.find((p) => p.slug === d.packageSlug)
      : undefined;

    const msg = [
      "Hi Pokaam! I'd like to enquire about a trip.",
      "",
      `Name: ${d.name}`,
      `Email: ${d.email}`,
      `Phone: ${d.phone}`,
      pkg ? `Package: ${pkg.title}` : "",
      d.date ? `Preferred date: ${d.date}` : "",
      d.groupSize ? `Group size: ${d.groupSize}` : "",
      d.message ? `\n${d.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(buildWhatsAppUrl(msg), "_blank", "noopener");
    toast.success("Opening WhatsApp — we'll get back within a few hours.");
    (e.target as HTMLFormElement).reset();
    setSelectedSlug(defaultPackage ?? "");
    setSelectedDate("");
    setSubmitting(false);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {/* Row 1 — Name, Email, Phone, Group size */}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" name="name" error={errors.name}>
          <Input name="name" required maxLength={80} placeholder="Name" />
        </Field>
        <Field label="Email" name="email" error={errors.email}>
          <Input
            name="email"
            type="email"
            required
            maxLength={200}
            placeholder="Email"
          />
        </Field>
        <Field label="Phone / WhatsApp" name="phone" error={errors.phone}>
          <Input
            name="phone"
            required
            maxLength={20}
            placeholder="Phone / WhatsApp"
          />
        </Field>
        <Field label="Group size" name="groupSize" error={errors.groupSize}>
          <select name="groupSize" defaultValue="" className={SELECT_CLASS}>
            <option value="" disabled>
              Select
            </option>
            {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={String(n)}>
                {n}
              </option>
            ))}
          </select>
        </Field>
      </div>

      {/* Row 2 — Package, then Date (unlocks after package selected) */}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Package" name="packageSlug" error={errors.packageSlug}>
          <select
            name="packageSlug"
            value={selectedSlug}
            onChange={handlePackageChange}
            className={SELECT_CLASS}
          >
            <option value="" disabled>
              Select a package
            </option>
            {packages.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.title}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Preferred date" name="date" error={errors.date}>
          <select
            name="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            disabled={!selectedSlug}
            className={SELECT_CLASS}
          >
            <option value="" disabled>
              {!selectedSlug ? "Select a package first" : "Select a date"}
            </option>
            {availableDates.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </Field>
      </div>

      {/* Message */}
      <Field label="Anything else?" name="message" error={errors.message}>
        <Textarea
          name="message"
          rows={4}
          maxLength={800}
          placeholder="Dietary needs, fitness level, questions…"
        />
      </Field>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Send enquiry"}
      </button>
      <p className="text-xs text-muted-foreground">
        We open WhatsApp with your enquiry pre-filled. No spam, ever.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label
        htmlFor={name}
        className="text-xs uppercase tracking-wider text-muted-foreground"
      >
        {label}
      </Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}