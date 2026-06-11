import hamptapass from "@/assets/pkg-hamptapass.jpg";
import yella from "@/assets/pkg-yellapetty.jpg";
import sarpass from "@/assets/pkg-sarpass.jpg";
import shecamp from "@/assets/pkg-shecamp.jpg";
import valleyOfFlowers from "@/assets/pkg-valleyofflowers.jpg";
import netravathiPeak from "@/assets/pkg-netravathi.jpg";

export type PackageType = "trek" | "camp" | "she-camp";

export type Package = {
  slug: string;
  title: string;
  region: string;
  type: PackageType;
  duration: string;
  difficulty: string;
  price: number;
  image: string;
  tagline: string;
  overview: string;
  highlights: string[];
  itinerary: { day: string; title: string; details: string }[];
  inclusions: string[];
  exclusions: string[];
  faqs: { q: string; a: string }[];
  dates: string[];
};

const commonTrekFaqs = [
  { q: "What fitness level do I need?", a: "You should be able to walk 5–8 km comfortably and climb a few flights of stairs without strain. Start a 2–3 week prep with daily walks/jogs before the trip." },
  { q: "What should I pack?", a: "Trekking shoes with grip, warm layers (fleece + jacket), rain poncho, headlamp, 1L water bottle, personal medication, sunscreen, and a small daypack (20–30L)." },
  { q: "Is it safe for solo travellers?", a: "Yes. Most of our trekkers come solo and leave with friends. Groups are mixed, led by a certified trek leader, and we keep a strict code of conduct." },
  { q: "What if the weather turns bad?", a: "Safety first — our trek leader may alter the route or reschedule the summit push. In rare cases of a full cancellation, you'll get a credit for any future Pokaam trip." },
  { q: "How do I confirm my booking?", a: "Share your details over WhatsApp and pay a 30% advance to confirm. Balance is due 3 days before the trip start date." },
];

const commonCampFaqs = [
  { q: "What's the tent setup like?", a: "All-weather twin/triple-share tents with mattresses, pillows and blankets. Separate clean washrooms with running water are a short walk away." },
  { q: "Is there mobile network?", a: "Patchy. Jio and Airtel work in spots around the camp. We recommend treating it as a switch-off — that's half the magic." },
  { q: "Can I bring my kids?", a: "Kids 8+ are welcome with a guardian. Let us know ages when booking so we can plan tent allocation and meals." },
  { q: "What food is served?", a: "Hot vegetarian meals (Indian + a few continental items), BBQ snacks at the bonfire, and unlimited chai/coffee. Tell us about allergies or jain/vegan needs in advance." },
  { q: "How do I confirm my booking?", a: "Share your details over WhatsApp and pay a 30% advance to confirm. Balance is due 3 days before check-in." },
];

const sheCampFaqs = [
  { q: "Is this really women-only?", a: "Yes — every guest, the lead facilitator, and the on-ground crew are women. Male staff are present only for kitchen/logistics at a distance and never in the camp circle." },
  { q: "Is it safe at night?", a: "The camp is fenced, lit, and watched by our crew through the night. Tents lock from inside. Pokaam runs She Camps since 2021 with a zero-incident record." },
  { q: "I'm an introvert — will I feel pressured?", a: "Never. Every session is opt-in. You can journal alone, skip the music circle, or just sit by the fire. We protect quiet as much as we hold space for sharing." },
  { q: "What about periods?", a: "Fully prepared. Pads/tampons, hot water bottles, and a rest tent are available. Tell the facilitator if you'd like to skip the trek — a slow morning is always an option." },
  { q: "How do I confirm my booking?", a: "Share your details over WhatsApp and pay a 30% advance to confirm. Balance is due 3 days before check-in." },
];

export const packages: Package[] = [
  {
    slug: "hamptapass-trek",
    title: "Hampta Pass Trek",
    region: "Manali, Himachal Pradesh",
    type: "trek",
    duration: "5 Days / 4 Nights",
    difficulty: "Moderate",
    price: 5999,
    image: hamptapass,
    tagline: "Cross from lush Kullu valleys into the stark landscapes of Lahaul.",
    overview:
      "The Hampta Pass Trek is one of the most dramatic crossover treks in the Himalayas. Walk through dense forests, alpine meadows, river crossings, and high mountain passes before entering the barren beauty of Lahaul. An optional visit to Chandratal Lake adds a magical finish to the adventure.",
    highlights: [
      "Cross the scenic Hampta Pass at 14,100 ft",
      "Camp amidst alpine meadows and rivers",
      "Experience the contrast between Kullu and Lahaul valleys",
      "Visit Chandratal Lake (weather permitting)",
      "Stunning Himalayan landscapes throughout the trek",
    ],
    itinerary: [
      { day: "Day 1", title: "Manali to Jobra, Trek to Chika (10,100 ft)", details: "Drive from Manali to Jobra and begin the trek to Chika through forests, streams, and beautiful mountain scenery. Overnight camp at Chika." },
      { day: "Day 2", title: "Chika to Balu Ka Ghera (11,900 ft)", details: "Trek through flower-filled meadows and river crossings to reach Balu Ka Ghera, the base camp for the Hampta Pass ascent." },
      { day: "Day 3", title: "Balu Ka Ghera to Hampta Pass (14,100 ft) to Shea Goru (12,800 ft)", details: "Begin early and climb to Hampta Pass. Enjoy panoramic Himalayan views before descending into the rugged Lahaul valley and camping at Shea Goru." },
      { day: "Day 4", title: "Shea Goru to Chhatru, Drive to Chandratal (if accessible) and back", details: "Descend to Chhatru and, weather and road conditions permitting, drive to the stunning Chandratal Lake before returning to Chhatru for the night." },
      { day: "Day 5", title: "Drive from Chhatru to Manali", details: "Travel back to Manali through the scenic mountain roads, marking the end of the trek." },
    ],
    inclusions: ["Accommodation", "Meals", "Trek Guide", "Permits", "Transportation"],
    exclusions: ["Travel to Manali", "Personal gear", "Insurance"],
    faqs: commonTrekFaqs,
    dates: ["June 20-24, 2026", "June,July 28-2, 2026"],
  },
  {
    slug: "valley-of-flowers-hemkund",
    title: "Valley of Flowers",
    region: "Uttarakhand",
    type: "trek",
    duration: "6 Days / 5 Nights",
    difficulty: "Moderate",
    price: 8500,
    image: valleyOfFlowers,
    tagline: "Walk through a UNESCO World Heritage valley bursting with Himalayan blooms.",
    overview:
      "Experience the magical Valley of Flowers and the sacred Hemkund Sahib on this 6-day Himalayan adventure. Trek through alpine meadows, waterfalls, and colorful flower-filled landscapes while soaking in breathtaking views of the Garhwal Himalayas.",
    highlights: [
      "Explore the UNESCO-listed Valley of Flowers",
      "Visit the sacred Hemkund Sahib at 15,200 ft",
      "Witness rare Himalayan flora and alpine meadows",
      "Scenic drive through the Garhwal Himalayas",
      "Guided trek with accommodation and meals included",
    ],
    itinerary: [
      { day: "Day 1", title: "Rishikesh to Joshimath (6,300 ft)", details: "Begin the journey with a scenic drive from Rishikesh to Joshimath through Devprayag, Rudraprayag, and Karnaprayag." },
      { day: "Day 2", title: "Joshimath to Ghangaria (10,000 ft)", details: "Drive to Govindghat and trek to Ghangaria through beautiful mountain trails and river valleys." },
      { day: "Day 3", title: "Ghangaria to Valley of Flowers (12,000 ft) and back", details: "Explore the breathtaking Valley of Flowers, home to hundreds of Himalayan flower species, before returning to Ghangaria." },
      { day: "Day 4", title: "Ghangaria to Hemkund Sahib (15,200 ft) and back", details: "Ascend to the sacred Hemkund Sahib Gurudwara and glacial lake, then return to Ghangaria for the night." },
      { day: "Day 5", title: "Ghangaria to Joshimath", details: "Descend to Govindghat and drive back to Joshimath. Relax and enjoy the mountain views." },
      { day: "Day 6", title: "Joshimath to Rishikesh", details: "Drive back to Rishikesh, concluding the trek with unforgettable memories of the Himalayas." },
    ],
    inclusions: ["Accommodation", "Meals", "Trek Guide", "Permits", "Transportation"],
    exclusions: ["Personal expenses", "Travel insurance", "Porter services", "Anything not mentioned in inclusions"],
    faqs: commonTrekFaqs,
    dates: ["July 15-20, 2026", "July 26-31, 2026"],
  },
  {
    slug: "netravathi-peak-trek",
    title: "Netravathi Peak Trek",
    region: "Samse, Karnataka",
    type: "trek",
    duration: "1 Day",
    difficulty: "Moderate",
    price: 2500,
    image: netravathiPeak,
    tagline: "Netravathi Peak is one of Karnataka's most scenic monsoon treks, offering breathtaking views of rolling grasslands.",
    overview:
      "Netravathi Peak is a stunning monsoon trek located about 110 km from Mangalore. Surrounded by rolling grasslands, mist-covered hills, and breathtaking Western Ghats scenery, this trek offers an unforgettable day of adventure and nature exploration.",
    highlights: [
      "Scenic off-road jeep ride",
      "14 km trek through lush Western Ghats",
      "Panoramic views from Netravathi Peak",
      "Monsoon landscapes and misty mountains",
      "Perfect one-day adventure from Mangalore",
    ],
    itinerary: [
      { day: "Day 1", title: "Mangalore → Netravathi Peak → Mangalore", details: "Pickup from Mangalore Railway Station at 1:00 AM and drive to Samse. Freshen up and enjoy breakfast before an off-road jeep ride to the trek base. Begin the 7 km ascent to Netravathi Peak, enjoy packed lunch at the summit, group activities amidst the mountains, descend back to base camp, freshen up, have evening tea and snacks, and return to Mangalore by around 9:00 PM." },
    ],
    inclusions: ["Pickup and drop from Mangalore Railway Station", "Breakfast", "Packed lunch", "Evening tea and snacks", "Off-road jeep ride", "Trek guide", "Trekking fee"],
    exclusions: ["Personal expenses", "Travel insurance", "Anything not mentioned in inclusions"],
    faqs: commonTrekFaqs,
    dates: ["July 9, 2026", "July 13, 2026", "July 20, 2026", "July 30, 2026"],
  },
  {
    slug: "yellapetty-sunrise",
    title: "Yellapetty Sunrise Trek",
    region: "Munnar, Kerala",
    type: "trek",
    duration: "1 Day",
    difficulty: "Easy",
    price: 2899,
    image: yella,
    tagline: "A short climb to a vast sea of clouds.",
    overview:
      "Begin in the dark, finish above the world. A gentle dawn trek to one of Munnar's most cinematic viewpoints, ideal for first-timers and families.",
    highlights: ["Sunrise at the cloud line", "Short, beginner-friendly climb", "Hot chai at the top", "Back in town for breakfast"],
    itinerary: [
      { day: "Day 1", title: "Pre-dawn to sunrise", details: "Pickup from Munnar town at 4:30 AM, 45-min drive, 1-hour gentle climb. Sunrise viewing, return by 9 AM." },
    ],
    inclusions: ["Pickup & drop", "Local guide", "Permits", "Light refreshments"],
    exclusions: ["Travel to Munnar", "Meals"],
    faqs: commonTrekFaqs,
    dates: ["September only"],
  },
];

export const getPackage = (slug: string) => packages.find((p) => p.slug === slug);