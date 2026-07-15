import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroAsset from "@/assets/hero-dress.png.asset.json";
import logoAsset from "@/assets/logo.png.asset.json";
import sareeOrange from "@/assets/saree-orange.png.asset.json";
import suitBlue from "@/assets/suit-blue.png.asset.json";
import sareePink from "@/assets/saree-pink.png.asset.json";
import suitCoral from "@/assets/suit-coral.png.asset.json";
import coordBlue from "@/assets/coord-blue.png.asset.json";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { property: "og:image", content: `https://mera-saubhagya.lovable.app${heroAsset.url}` },
      { name: "twitter:image", content: `https://mera-saubhagya.lovable.app${heroAsset.url}` },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const LOGO = logoAsset.url;
const HERO_IMG = heroAsset.url;
const IMAGES = [sareePink.url, suitBlue.url, sareeOrange.url, suitCoral.url, coordBlue.url, heroAsset.url];
const pick = (i: number) => IMAGES[i % IMAGES.length];
const WHATSAPP = "https://wa.me/919999999999";
const INSTAGRAM = "https://instagram.com/merasaubhagya";

const NAV = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Collections", "#collections"],
  ["Why Us", "#why"],
  ["Gallery", "#gallery"],
  ["Testimonials", "#testimonials"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
];

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#home" className={`flex items-center gap-2 ${className}`}>
      <span className="grid h-10 w-10 place-items-center rounded-full gold-gradient text-white font-display text-lg shadow-[var(--shadow-soft)]">
        M
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg tracking-wide">Mera Saubhagya</span>
        <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Ethnic Couture</span>
      </span>
    </a>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-[var(--shadow-soft)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-10">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="relative text-sm font-medium text-charcoal/80 transition hover:text-gold after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full gold-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition hover:scale-105"
          >
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="lg:hidden grid h-10 w-10 place-items-center rounded-full glass"
          >
            <span className="text-xl">{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden glass border-t border-gold/20">
          <nav className="flex flex-col p-4">
            {NAV.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="py-3 text-charcoal hover:text-gold">
                {l}
              </a>
            ))}
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-2 rounded-full gold-gradient px-5 py-3 text-center text-white font-semibold">
              WhatsApp Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-20">
      {/* Palace backdrop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f6efe1] via-ivory to-[#f0e2d4]" />
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: "radial-gradient(circle at 20% 20%, rgba(200,169,106,0.25), transparent 40%), radial-gradient(circle at 80% 80%, rgba(232,199,200,0.3), transparent 45%)",
        }} />
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M30 5 L35 25 L55 30 L35 35 L30 55 L25 35 L5 30 L25 25 Z' fill='%23C8A96A'/%3E%3C/svg%3E\")",
        }} />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-20">
        <div className="animate-fade-up order-2 lg:order-1">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full glass px-4 py-2 text-xs uppercase tracking-[0.3em] text-gold-deep">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Premium Ethnic Couture
          </div>
          <h1 className="font-display text-4xl leading-[1.05] sm:text-5xl lg:text-7xl">
            Where Tradition Meets <span className="text-gradient-gold italic">Timeless Elegance</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-charcoal/75">
            Celebrate every occasion with premium ethnic fashion crafted for modern women.
          </p>
          <p className="mt-3 font-display italic text-gold-deep">
            "Parampara ki khoobsurti, naye andaaz ke saath."
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#collections" className="group inline-flex items-center gap-2 rounded-full gold-gradient px-8 py-4 text-sm font-semibold text-white shadow-[var(--shadow-luxe)] transition hover:scale-105">
              Explore Collection <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-charcoal/20 bg-white/60 px-8 py-4 text-sm font-semibold text-charcoal transition hover:border-gold hover:bg-white">
              Contact Us
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-8 text-sm text-muted-foreground">
            <div><span className="font-display text-2xl text-charcoal">1000+</span> Happy Clients</div>
            <div className="h-8 w-px bg-gold/40" />
            <div><span className="font-display text-2xl text-charcoal">4.9★</span> Rating</div>
            <div className="h-8 w-px bg-gold/40" />
            <div><span className="font-display text-2xl text-charcoal">50+</span> Cities</div>
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          <div className="absolute -inset-6 rounded-[3rem] gold-gradient opacity-30 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-luxe)] ring-1 ring-gold/30">
            <img
              src={IMG}
              alt="Mera Saubhagya premium navy ethnic gown"
              className="h-[480px] w-full object-cover object-top sm:h-[600px] lg:h-[720px]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 glass rounded-2xl p-4">
              <p className="font-display text-sm text-charcoal">Royal Heirloom Gown</p>
              <p className="text-xs text-muted-foreground">Hand-embroidered · Signature Collection</p>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 hidden md:block animate-floaty glass rounded-2xl px-5 py-3 shadow-[var(--shadow-soft)]">
            <p className="text-xs uppercase tracking-widest text-gold-deep">Since 2015</p>
            <p className="font-display text-lg">Crafted with love</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center reveal">
      <div className="mb-3 text-xs uppercase tracking-[0.4em] text-gold-deep">{eyebrow}</div>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl">{title}</h2>
      <div className="mx-auto mt-4 h-px w-24 hairline" />
      {subtitle && <p className="mt-5 text-charcoal/70">{subtitle}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading eyebrow="Our Story" title={<>The House of <span className="text-gradient-gold italic">Mera Saubhagya</span></>} />
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="reveal relative">
            <div className="overflow-hidden rounded-[2rem] shadow-[var(--shadow-luxe)] ring-1 ring-gold/20">
              <img src={IMG} alt="Craftsmanship" className="h-[520px] w-full object-cover object-top" loading="lazy" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block glass rounded-2xl p-5 shadow-[var(--shadow-soft)]">
              <p className="font-display text-3xl text-gradient-gold">10+</p>
              <p className="text-sm text-muted-foreground">Years of craft</p>
            </div>
          </div>
          <div className="reveal space-y-5">
            <p className="text-lg leading-relaxed text-charcoal/80">
              Born from a love for India's timeless textile heritage, <b>Mera Saubhagya</b> is a couture house
              devoted to bringing you affordable luxury without compromise.
            </p>
            <p className="leading-relaxed text-charcoal/70">
              Every piece is the result of weeks of thoughtful design, hand-selected fabrics, and the skilled
              hands of master karigars. From the softest chiffons to hand-woven silks, we craft ethnic wear
              that feels as extraordinary as the woman who wears it.
            </p>
            <p className="leading-relaxed text-charcoal/70">
              Our promise is simple — thoughtfully designed, meticulously crafted, and priced so you can
              celebrate every moment in the elegance you deserve.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                ["Handcrafted", "By master karigars"],
                ["Premium Fabrics", "Sourced globally"],
                ["Signature Fit", "Made for you"],
                ["Timeless Design", "Never out of season"],
              ].map(([t, s]) => (
                <div key={t} className="rounded-2xl border border-gold/20 bg-white/60 p-4">
                  <p className="font-display text-charcoal">{t}</p>
                  <p className="text-sm text-muted-foreground">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const COLLECTIONS = [
  { title: "Sarees", desc: "Hand-woven silks, chiffons and organzas that flow with grace." },
  { title: "Suit Sets", desc: "Elegant three-piece ensembles for every celebration." },
  { title: "Kurtis", desc: "Everyday sophistication with heirloom craftsmanship." },
  { title: "Lehengas", desc: "Statement lehengas designed for the modern muse." },
  { title: "Gowns", desc: "Indo-western couture for red carpet moments." },
  { title: "Festive", desc: "Curated pieces for weddings, festivals and rituals." },
];

function Collections() {
  return (
    <section id="collections" className="relative py-24 lg:py-32 bg-gradient-to-b from-transparent via-[#faf3e5]/40 to-transparent">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading eyebrow="Signature Collections" title={<>Curated for the <span className="text-gradient-gold italic">Modern Muse</span></>} subtitle="From heirloom sarees to contemporary gowns — six edits, endless occasions." />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COLLECTIONS.map((c, i) => (
            <article key={c.title} className="reveal group relative overflow-hidden rounded-[1.75rem] bg-white shadow-[var(--shadow-soft)] ring-1 ring-gold/15 transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-luxe)]" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="relative h-80 overflow-hidden">
                <img src={IMG} alt={c.title} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-[1.4s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent opacity-80" />
                <div className="absolute top-4 left-4 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-widest text-white">
                  0{i + 1}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-deep transition hover:gap-3">
                  View Collection <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const WHY = [
  { icon: "◈", t: "Premium Fabric", d: "Hand-sourced silks, chiffons and organzas." },
  { icon: "✦", t: "Elegant Designs", d: "Timeless silhouettes with a modern touch." },
  { icon: "❈", t: "Affordable Luxury", d: "Couture quality, thoughtful pricing." },
  { icon: "✿", t: "Perfect Fit", d: "Made-to-measure tailoring for every woman." },
  { icon: "➤", t: "Fast Delivery", d: "Pan-India shipping in 5–7 days." },
  { icon: "★", t: "Trusted Quality", d: "Loved by 1000+ women across India." },
];

function Why() {
  return (
    <section id="why" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading eyebrow="Why Mera Saubhagya" title={<>Six promises. <span className="text-gradient-gold italic">One heirloom</span> experience.</>} />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w, i) => (
            <div key={w.t} className="reveal group rounded-[1.5rem] border border-gold/20 bg-white/70 p-8 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-[var(--shadow-luxe)]" style={{ transitionDelay: `${i * 50}ms` }}>
              <div className="grid h-14 w-14 place-items-center rounded-full gold-gradient text-2xl text-white shadow-[var(--shadow-soft)] transition-transform group-hover:rotate-12">
                {w.icon}
              </div>
              <h3 className="mt-5 font-display text-xl">{w.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const items = Array.from({ length: 8 });
  return (
    <section id="gallery" className="relative py-24 lg:py-32 bg-gradient-to-b from-[#faf3e5]/40 via-transparent to-transparent">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading eyebrow="Featured Gallery" title={<>Moments of <span className="text-gradient-gold italic">Grace</span></>} subtitle="A glimpse into the world of Mera Saubhagya." />
        <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {items.map((_, i) => (
            <div
              key={i}
              className={`reveal group relative overflow-hidden rounded-2xl ring-1 ring-gold/20 ${
                i === 0 || i === 5 ? "col-span-2 row-span-2 aspect-square" : "aspect-[3/4]"
              }`}
            >
              <img src={IMG} loading="lazy" alt={`Gallery ${i + 1}`} className="h-full w-full object-cover object-top transition-transform duration-[1.4s] group-hover:scale-125" />
              <div className="absolute inset-0 bg-charcoal/0 transition-colors group-hover:bg-charcoal/25" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  { n: "Aanya Kapoor", r: "Bride, Delhi", q: "My bridal lehenga was pure poetry. Every guest asked where I got it — Mera Saubhagya made me feel like royalty." },
  { n: "Priya Sharma", r: "Working Professional, Mumbai", q: "The fit, the fabric, the finish — everything felt truly couture. It's now my go-to for every occasion." },
  { n: "Meera Iyer", r: "Homemaker, Bangalore", q: "I've never received so many compliments on an outfit. Absolutely worth every rupee. Highly recommended!" },
];

function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading eyebrow="Testimonials" title={<>Loved by <span className="text-gradient-gold italic">women like you</span></>} />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure key={t.n} className="reveal relative rounded-[1.75rem] bg-white p-8 shadow-[var(--shadow-soft)] ring-1 ring-gold/15" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="absolute -top-4 left-8 grid h-10 w-10 place-items-center rounded-full gold-gradient text-xl text-white shadow">"</div>
              <div className="flex gap-1 text-gold">{"★★★★★".split("").map((s, k) => <span key={k}>{s}</span>)}</div>
              <blockquote className="mt-4 text-charcoal/80 leading-relaxed">{t.q}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-gold/20 pt-4">
                <img src={IMG} alt={t.n} loading="lazy" className="h-12 w-12 rounded-full object-cover object-top ring-2 ring-gold/40" />
                <div>
                  <p className="font-display">{t.n}</p>
                  <p className="text-xs text-muted-foreground">{t.r}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    ["1000+", "Happy Customers"],
    ["500+", "Signature Designs"],
    ["50+", "Cities Served"],
    ["4.9", "Customer Rating"],
  ];
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="reveal grid gap-8 rounded-[2rem] gold-gradient p-10 text-white shadow-[var(--shadow-luxe)] sm:grid-cols-2 lg:grid-cols-4">
          {items.map(([v, l]) => (
            <div key={l} className="text-center">
              <p className="font-display text-5xl">{v}</p>
              <p className="mt-2 text-sm uppercase tracking-widest opacity-90">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  ["What sizes are available?", "We offer sizes XS to XXL, and every piece can be tailored to your exact measurements at no additional cost."],
  ["How long does delivery take?", "Ready pieces ship within 3–5 business days across India. Made-to-measure orders take 10–14 days."],
  ["What is your exchange policy?", "We offer easy exchanges within 7 days of delivery for unworn, unaltered pieces with original tags."],
  ["How do you ensure quality?", "Every piece is inspected by our master karigars and undergoes a three-stage quality check before dispatch."],
  ["What payment options do you accept?", "UPI, all major credit and debit cards, net banking, and cash on delivery in select cities."],
  ["Do you offer customization?", "Yes. Bespoke designs, colour changes and made-to-measure services are available on request via WhatsApp."],
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-gradient-to-b from-transparent via-[#faf3e5]/40 to-transparent">
      <div className="mx-auto max-w-4xl px-5 lg:px-10">
        <SectionHeading eyebrow="Questions" title={<>Frequently <span className="text-gradient-gold italic">Asked</span></>} />
        <div className="mt-14 space-y-4">
          {FAQS.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={q} className="reveal overflow-hidden rounded-2xl border border-gold/25 bg-white/70 transition-all">
                <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                  <span className="font-display text-lg">{q}</span>
                  <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full gold-gradient text-white transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
                <div className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-charcoal/75">{a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Instagram() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading eyebrow="@merasaubhagya" title={<>Follow the <span className="text-gradient-gold italic">Journey</span></>} subtitle="A daily dose of ethnic inspiration on Instagram." />
        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <a key={i} href={INSTAGRAM} target="_blank" rel="noreferrer" className="reveal group relative aspect-square overflow-hidden rounded-2xl ring-1 ring-gold/25">
              <img src={IMG} loading="lazy" alt={`Instagram ${i + 1}`} className="h-full w-full object-cover object-top transition-transform duration-[1.4s] group-hover:scale-110" />
              <div className="absolute inset-0 grid place-items-center bg-charcoal/0 transition-all group-hover:bg-charcoal/50">
                <InstagramIcon className="h-8 w-8 text-white opacity-0 transition group-hover:opacity-100" />
              </div>
            </a>
          ))}
        </div>
        <div className="mt-10 text-center reveal">
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full gold-gradient px-8 py-4 text-sm font-semibold text-white shadow-[var(--shadow-luxe)] transition hover:scale-105">
            <InstagramIcon className="h-4 w-4" /> Follow @merasaubhagya
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-gradient-to-b from-[#faf3e5]/50 to-transparent">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading eyebrow="Get in Touch" title={<>Let's create something <span className="text-gradient-gold italic">unforgettable</span></>} />
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <form
            onSubmit={(e) => { e.preventDefault(); window.open(WHATSAPP, "_blank"); }}
            className="reveal rounded-[2rem] bg-white p-8 shadow-[var(--shadow-soft)] ring-1 ring-gold/20 lg:p-10"
          >
            <h3 className="font-display text-2xl">Send us a message</h3>
            <p className="mt-1 text-sm text-muted-foreground">We reply within a few hours.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Phone" name="phone" placeholder="+91 · · · · · · · ·" />
              <div className="sm:col-span-2"><Field label="Email" name="email" type="email" placeholder="you@email.com" /></div>
              <div className="sm:col-span-2">
                <label className="mb-2 block text-xs uppercase tracking-widest text-gold-deep">Message</label>
                <textarea rows={4} name="message" placeholder="Tell us about your occasion..." className="w-full rounded-2xl border border-gold/30 bg-ivory/50 px-4 py-3 outline-none transition focus:border-gold focus:bg-white" />
              </div>
            </div>
            <button type="submit" className="mt-6 w-full rounded-full gold-gradient px-8 py-4 font-semibold text-white shadow-[var(--shadow-soft)] transition hover:scale-[1.02]">
              Send Message
            </button>
          </form>

          <div className="reveal space-y-4">
            <ContactCard icon={<WhatsAppIcon className="h-5 w-5" />} title="WhatsApp" value="+91 99999 99999" href={WHATSAPP} />
            <ContactCard icon={<InstagramIcon className="h-5 w-5" />} title="Instagram" value="@merasaubhagya" href={INSTAGRAM} />
            <ContactCard icon={<span>✉</span>} title="Email" value="hello@merasaubhagya.com" href="mailto:hello@merasaubhagya.com" />
            <ContactCard icon={<span>◉</span>} title="Studio" value="42 Heritage Lane, Jaipur, Rajasthan 302001" />
            <div className="overflow-hidden rounded-[1.5rem] ring-1 ring-gold/25 shadow-[var(--shadow-soft)]">
              <iframe
                title="Studio location"
                src="https://www.google.com/maps?q=Jaipur&output=embed"
                className="h-64 w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-widest text-gold-deep">{label}</label>
      <input {...props} className="w-full rounded-2xl border border-gold/30 bg-ivory/50 px-4 py-3 outline-none transition focus:border-gold focus:bg-white" />
    </div>
  );
}

function ContactCard({ icon, title, value, href }: { icon: React.ReactNode; title: string; value: string; href?: string }) {
  const inner = (
    <div className="group flex items-center gap-4 rounded-2xl border border-gold/25 bg-white/70 p-5 transition hover:border-gold hover:shadow-[var(--shadow-soft)]">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full gold-gradient text-white">{icon}</div>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-widest text-gold-deep">{title}</p>
        <p className="truncate font-display text-lg">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer">{inner}</a> : inner;
}

function Footer() {
  return (
    <footer className="relative border-t border-gold/20 bg-[#faf3e5]/50 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Mera Saubhagya — where heirloom craftsmanship meets contemporary elegance. Handcrafted for the modern Indian woman.
            </p>
            <div className="mt-5 flex gap-3">
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full gold-gradient text-white shadow-[var(--shadow-soft)] transition hover:scale-110"><WhatsAppIcon className="h-4 w-4" /></a>
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full gold-gradient text-white shadow-[var(--shadow-soft)] transition hover:scale-110"><InstagramIcon className="h-4 w-4" /></a>
              <a href="mailto:hello@merasaubhagya.com" className="grid h-11 w-11 place-items-center rounded-full gold-gradient text-white shadow-[var(--shadow-soft)] transition hover:scale-110">✉</a>
            </div>
          </div>
          <div>
            <p className="mb-4 font-display">Quick Links</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {NAV.map(([l, h]) => <li key={h}><a href={h} className="transition hover:text-gold">{l}</a></li>)}
            </ul>
          </div>
          <div>
            <p className="mb-4 font-display">Collections</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {COLLECTIONS.map((c) => <li key={c.title}><a href="#collections" className="transition hover:text-gold">{c.title}</a></li>)}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gold/20 pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Mera Saubhagya. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-gold">Privacy Policy</a>
            <a href="#" className="transition hover:text-gold">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FloatingButtons() {
  const [top, setTop] = useState(false);
  useEffect(() => {
    const on = () => setTop(window.scrollY > 500);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      {top && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" className="grid h-12 w-12 place-items-center rounded-full glass shadow-[var(--shadow-soft)] transition hover:scale-110">
          ↑
        </button>
      )}
      <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-luxe)] transition hover:scale-110 animate-floaty">
        <WhatsAppIcon className="h-6 w-6" />
      </a>
    </div>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.52 3.48A11.86 11.86 0 0012 0C5.37 0 0 5.37 0 12a11.9 11.9 0 001.64 6.06L0 24l6.13-1.6A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52zM12 21.82a9.8 9.8 0 01-5-1.37l-.36-.22-3.63.95.97-3.54-.24-.37A9.83 9.83 0 1121.82 12 9.84 9.84 0 0112 21.82zm5.4-7.36c-.3-.15-1.75-.86-2.02-.96s-.47-.15-.67.15-.77.96-.94 1.15-.35.22-.65.07a8 8 0 01-2.36-1.46 8.9 8.9 0 01-1.63-2.03c-.17-.3 0-.46.13-.6s.3-.35.45-.52a2 2 0 00.3-.5.55.55 0 00-.03-.52c-.07-.15-.67-1.6-.92-2.2s-.49-.5-.67-.51h-.57a1.1 1.1 0 00-.8.37 3.33 3.33 0 00-1.04 2.48c0 1.46 1.06 2.87 1.21 3.07s2.09 3.19 5.07 4.47a17.2 17.2 0 001.69.62 4.06 4.06 0 001.87.12 3.06 3.06 0 002-1.42 2.5 2.5 0 00.17-1.42c-.07-.12-.27-.2-.57-.35z"/>
    </svg>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
    </svg>
  );
}

function Landing() {
  useReveal();
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Collections />
      <Why />
      <Gallery />
      <Testimonials />
      <Stats />
      <FAQ />
      <Instagram />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
