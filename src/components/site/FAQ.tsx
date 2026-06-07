import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  if (!items?.length) return null;
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">Common doubts</p>
      <h2 className="mt-2 font-display text-3xl text-primary">Frequently asked</h2>
      <Accordion type="single" collapsible className="mt-6 border-t border-border">
        {items.map((it, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
            <AccordionTrigger className="text-left font-display text-lg text-foreground hover:text-primary">
              {it.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {it.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
