// Update these to route inquiries to your number / inbox.
export const POKAAM_WHATSAPP = "918590122540"; // country code + number, no + or spaces
export const POKAAM_EMAIL = "pokaam.inn@gmail.com";
export const POKAAM_INSTAGRAM = "https://instagram.com/pokaam.in";

export const buildWhatsAppUrl = (message: string) =>
  `https://wa.me/${POKAAM_WHATSAPP}?text=${encodeURIComponent(message)}`;

export const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
