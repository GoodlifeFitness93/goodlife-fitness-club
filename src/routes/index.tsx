import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { EquipmentLightbox } from "@/components/EquipmentLightbox";
import {
  Phone,
  MessageCircle,
  Star,
  Clock,
  Car,
  Baby,
  Heart,
  CreditCard,
  MonitorPlay,
  MapPin,
  Dumbbell,
} from "lucide-react";

import heroImg from "@/assets/hero-athlete.jpg";
import chestPressAsset from "@/assets/gym_machines_2.png.asset.json";
import seatedPressAsset from "@/assets/gym_machines.png.asset.json";
import plateLoadedAsset from "@/assets/advanced_machines.png.asset.json";
import strengthZoneAsset from "@/assets/first_section.png.asset.json";
import cardioAsset from "@/assets/cardio.png.asset.json";
import functionalRigAsset from "@/assets/cardio_entrance.png.asset.json";
import dumbbellsAsset from "@/assets/Dumbells.png.asset.json";
import terraceAsset from "@/assets/terrace_section.png.asset.json";

import { AnimatedCounter } from "@/components/AnimatedCounter";
import { StickyMobileBar } from "@/components/StickyMobileBar";
import {
  BUSINESS_NAME,
  ADDRESS,
  PLUS_CODE,
  PHONE_DISPLAY,
  TEL_LINK,
  WHATSAPP_LINK,
  RATING,
  REVIEW_COUNT,
  MAPS_EMBED_SRC,
  MAPS_LINK,
} from "@/lib/business";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Goodlife Fitness Club | 24 Hour Gym in Solapur" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HealthClub",
          name: "Goodlife Fitness Club",
          telephone: "+919325342686",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Sai Trade Center, 4th Floor, near BSNL Office",
            addressLocality: "Solapur",
            addressRegion: "Maharashtra",
            postalCode: "413002",
            addressCountry: "IN",
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "00:00",
            closes: "23:59",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "274",
            bestRating: "5",
          },
        }),
      },
    ],
  }),
});

/* ---------- Data ---------- */

const equipment = [
  {
    src: chestPressAsset.url,
    name: "Seated Chest Press Station",
    caption: "Build pressing power and upper-body size",
    tag: "Chest",
  },
  {
    src: seatedPressAsset.url,
    name: "Dual-Stack Seated Press Machine",
    caption: "Controlled resistance for safe, heavy pressing",
    tag: "Chest",
  },
  {
    src: plateLoadedAsset.url,
    name: "Plate-Loaded Strength Machines",
    caption: "Heavy leg and chest pressing with Olympic plates",
    tag: "Legs",
  },
  {
    src: strengthZoneAsset.url,
    name: "Selectorized Strength Zone",
    caption: "Row, pull and press through full machine circuits",
    tag: "Back",
  },
  {
    src: cardioAsset.url,
    name: "Treadmills & Spin Bikes",
    caption: "Torch calories and build engine on modern cardio",
    tag: "Cardio",
  },
  {
    src: functionalRigAsset.url,
    name: "Functional Training Rig & Cable Stations",
    caption: "Cables, kettlebells and bodyweight work in one rig",
    tag: "Full Body",
  },
  {
    src: dumbbellsAsset.url,
    name: "Dumbbell Rack",
    caption: "Full range of fixed dumbbells for free-weight training",
    tag: "Full Body",
  },
  {
    src: terraceAsset.url,
    name: "Outdoor Terrace Training Zone",
    caption: "Benches and racks under the open sky",
    tag: "Full Body",
  },
];

const whyItems = [
  { icon: Clock, label: "24/7 Access" },
  { icon: Car, label: "Free Parking" },
  { icon: Baby, label: "Kid Friendly" },
  { icon: Heart, label: "LGBTQ+ Friendly" },
  { icon: CreditCard, label: "Contactless Payments" },
  { icon: MonitorPlay, label: "Online Classes Available" },
];

const testimonials = [
  {
    name: "Shiva Chadchankar",
    role: "Member for 10+ years",
    text: "I have a good experience in good life gym. Raghunath sir and Amol sir All time help to workout and any doubt about workout. I know him from last 10 years.",
  },
  {
    name: "Anurag Chavan",
    role: "Local Guide",
    text: "Just started out. Inviting and welcome ambience. Well equipped with various workouts. Glad to join…",
  },
  {
    name: "Satish Waghmare",
    role: "Member",
    text: "Solapur best gym best equipment best experience Best training and trainers all staffs cooperative and best service.",
  },
];

/* ---------- Sections ---------- */

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 glass">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <Dumbbell className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
          <span className="truncate font-display text-xl tracking-wider">
            GOODLIFE <span className="text-primary">FITNESS CLUB</span>
          </span>
        </a>
        <a href={TEL_LINK} className="hidden items-center gap-2 font-display text-lg tracking-widest text-foreground transition-colors hover:text-primary md:flex">
          <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
          {PHONE_DISPLAY}
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100vh] min-h-svh items-end overflow-hidden"
    >
      <img
        src={heroImg}
        alt="Athlete performing a heavy deadlift in dramatic red and black gym lighting at Goodlife Fitness Club"
        width={1536}
        height={1024}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover [object-position:center_top] md:[object-position:center]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-6xl px-4 pb-24 pt-32 md:pb-28">
        <p className="eyebrow mb-3">Goodlife Fitness Club — Solapur</p>
        <h1 className="max-w-3xl text-5xl leading-none sm:text-6xl md:text-8xl">
          SOLAPUR'S <span className="text-primary">24-HOUR</span> FITNESS DESTINATION
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground md:text-xl">
          Train Anytime. Train Hard. Transform With Goodlife.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta">
            <MessageCircle className="h-5 w-5" aria-hidden="true" /> JOIN NOW
          </a>
          <a href={TEL_LINK} className="btn-cta-outline">
            <Phone className="h-5 w-5" aria-hidden="true" /> CALL NOW
          </a>
        </div>
        {/* Stat strip */}
        <dl className="mt-12 grid grid-cols-2 gap-4 border-t border-border pt-6 md:grid-cols-4">
          <div>
            <dt className="text-xs uppercase tracking-widest text-muted-foreground">Verified Reviews</dt>
            <dd className="font-display text-3xl text-foreground md:text-4xl">
              <AnimatedCounter end={274} suffix="+" />
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-muted-foreground">Google Rating</dt>
            <dd className="font-display text-3xl text-foreground md:text-4xl">
              <AnimatedCounter end={4.9} decimals={1} />
              <span className="text-primary">★</span>
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-muted-foreground">Open</dt>
            <dd className="font-display text-3xl text-foreground md:text-4xl">
              <AnimatedCounter end={24} /> HOURS
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-muted-foreground">Expert Trainers</dt>
            <dd className="font-display text-3xl text-foreground md:text-4xl">
              <AnimatedCounter end={2} />
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <p className="eyebrow mb-3">About Us</p>
      <h2 className="text-4xl md:text-6xl">
        THE GOODLIFE <span className="text-primary">DIFFERENCE</span>
      </h2>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <p className="text-lg leading-relaxed text-muted-foreground">
          Goodlife Fitness Club is a serious weights-and-cardio gym on the 4th floor of Sai Trade
          Center, Solapur — open 24 hours, every single day. Whether you lift at 5 AM or midnight,
          the door is open and the plates are loaded. Inside you'll find advanced gym equipment,
          modern cardio machines, a full free-weight setup and a dedicated strength training zone.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Coaching comes from Raghunath Sir and Amol Sir — trainers with a decade-plus of coaching
          history in Solapur who members have trusted for years. The environment is inclusive and
          welcoming: kid-friendly, LGBTQ+ friendly, with free parking (garage, lot and street),
          online classes, and outdoor and on-site training services. Booking is easy — appointment
          and membership required, with debit cards, Google Pay and contactless payments accepted.
        </p>
      </div>
    </section>
  );
}

function Equipment() {
  const [lbIndex, setLbIndex] = useState(-1);
  return (
    <section id="equipment" className="bg-card/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <p className="eyebrow mb-3">The Floor</p>
        <h2 className="text-4xl md:text-6xl">
          BUILT FOR <span className="text-primary">SERIOUS TRAINING</span>
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Real photos from our floor — strength machines, free weights, cardio and an outdoor
          terrace zone. Tap any image to view fullscreen.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {equipment.map((item, i) => (
            <button
              type="button"
              key={item.name}
              onClick={() => setLbIndex(i)}
              aria-label={`View ${item.name} fullscreen`}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg border border-border glow-hover text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <img
                src={item.src}
                alt={`${item.name} at Goodlife Fitness Club Solapur`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90 transition-opacity duration-300"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
                <span className="mb-2 inline-block rounded-sm bg-primary px-2 py-0.5 font-display text-xs tracking-widest text-primary-foreground">
                  {item.tag.toUpperCase()}
                </span>
                <h3 className="font-display text-lg leading-tight md:text-xl">{item.name}</h3>
                <p className="mt-1 hidden text-xs text-muted-foreground transition-all duration-300 group-hover:block md:block">
                  {item.caption}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
      <EquipmentLightbox
        slides={equipment}
        index={lbIndex}
        onClose={() => setLbIndex(-1)}
      />
    </section>
  );
}

function Trainers() {
  return (
    <section id="trainers" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <p className="eyebrow mb-3">Coaching</p>
      <h2 className="text-4xl md:text-6xl">
        MEET YOUR <span className="text-primary">COACHES</span>
      </h2>
      <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-6">
        <article className="glass glow-hover rounded-lg p-6 md:p-8">
          <div className="mb-4 grid h-14 w-14 place-items-center rounded-full bg-primary/15">
            <Dumbbell className="h-7 w-7 text-primary" aria-hidden="true" />
          </div>
          <h3 className="font-display text-3xl">RAGHUNATH SIR</h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            The coach members have known for over a decade. Longtime members say they've trained
            with Raghunath Sir for 10+ years — always ready to help with your workout and clear
            every doubt on the floor, any time you train.
          </p>
        </article>
        <article className="glass glow-hover rounded-lg p-6 md:p-8">
          <div className="mb-4 grid h-14 w-14 place-items-center rounded-full bg-primary/15">
            <Dumbbell className="h-7 w-7 text-primary" aria-hidden="true" />
          </div>
          <h3 className="font-display text-3xl">AMOL SIR</h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Consistently named in member reviews for hands-on workout guidance. Amol Sir keeps the
            floor disciplined and every member progressing — from first session to long-term
            transformation.
          </p>
        </article>
      </div>
    </section>
  );
}

function WhyGoodlife() {
  return (
    <section id="why" className="bg-card/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <p className="eyebrow mb-3">Trust</p>
        <h2 className="text-4xl md:text-6xl">
          WHY <span className="text-primary">GOODLIFE</span>
        </h2>
        <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {whyItems.map(({ icon: Icon, label }) => (
            <li key={label} className="glass glow-hover flex min-h-24 flex-col items-center justify-center gap-2 rounded-lg p-4 text-center">
              <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <span className="font-display text-lg leading-tight tracking-wide">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="reviews" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <p className="eyebrow mb-3">Real Reviews</p>
      <h2 className="text-4xl md:text-6xl">
        MEMBERS <span className="text-primary">SPEAK</span>
      </h2>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 font-display text-xl tracking-wider text-primary-foreground">
          <Star className="h-5 w-5 fill-current" aria-hidden="true" />
          {RATING} / 5 · {REVIEW_COUNT} REVIEWS
        </span>
        <a
          href={MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-primary"
        >
          Read more on Google
        </a>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.name} className="glass glow-hover flex flex-col rounded-lg p-6">
            <div className="mb-3 flex gap-0.5" aria-label="5 star review">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
              ))}
            </div>
            <blockquote className="flex-1 leading-relaxed text-muted-foreground">
              "{t.text}"
            </blockquote>
            <figcaption className="mt-4">
              <span className="font-display text-lg tracking-wide">{t.name}</span>
              <span className="block text-xs uppercase tracking-widest text-muted-foreground">{t.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="location" className="bg-card/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <p className="eyebrow mb-3">Find Us</p>
        <h2 className="text-4xl md:text-6xl">
          TRAIN IN THE HEART OF <span className="text-primary">SOLAPUR</span>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <address className="not-italic leading-relaxed text-muted-foreground">
                <span className="block font-display text-xl tracking-wide text-foreground">{BUSINESS_NAME}</span>
                {ADDRESS}
                <span className="mt-1 block text-sm">Plus Code: {PLUS_CODE}</span>
              </address>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <a href={TEL_LINK} className="text-lg transition-colors hover:text-primary">
                {PHONE_DISPLAY}
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-md border border-primary/50 bg-primary/10 px-3 py-2 font-display tracking-widest">
                <Clock className="h-4 w-4 text-primary" aria-hidden="true" /> OPEN 24 HOURS
              </span>
              <span className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary px-3 py-2 font-display tracking-widest">
                <Car className="h-4 w-4 text-primary" aria-hidden="true" /> FREE PARKING — GARAGE, LOT & STREET
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Appointment required · Membership required · Debit cards, Google Pay & NFC/contactless accepted
            </p>
          </div>
          <div className="overflow-hidden rounded-lg border border-border">
            <iframe
              src={MAPS_EMBED_SRC}
              title="Goodlife Fitness Club location on Google Maps"
              className="h-72 w-full md:h-full md:min-h-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden px-4 py-20 text-center md:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_65%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl">
        <h2 className="text-5xl leading-none md:text-7xl">
          YOUR TRANSFORMATION STARTS <span className="text-primary">TODAY</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Join Solapur's 24-hour fitness destination — anytime you're ready, we're open.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta">
            <MessageCircle className="h-5 w-5" aria-hidden="true" /> JOIN VIA WHATSAPP
          </a>
          <a href={TEL_LINK} className="btn-cta-outline">
            <Phone className="h-5 w-5" aria-hidden="true" /> CALL NOW
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border pb-20 pt-8 md:pb-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 text-center text-sm text-muted-foreground">
        <span className="font-display text-lg tracking-wider text-foreground">
          GOODLIFE <span className="text-primary">FITNESS CLUB</span>
        </span>
        <p>{ADDRESS}</p>
        <p>
          {PHONE_DISPLAY} · Open 24 Hours · {RATING}★ ({REVIEW_COUNT} reviews)
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Equipment />
      <Trainers />
      <WhyGoodlife />
      <Testimonials />
      <Location />
      <FinalCta />
      <Footer />
      <StickyMobileBar />
    </main>
  );
}
