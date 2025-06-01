// app/page.tsx
import Image from 'next/image';

export default function HomePage() {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-24 pt-14 text-center">

      {/* ─── Luxury Banner ───────────────────────────────────────────── */}
      <div className="relative mb-14 overflow-hidden rounded-3xl border-4 border-gold shadow-2xl">
        <Image
          src="/banner1.webp"               /* put file in /public */
          alt="Bachata Exotica dancers in gold light"
          width={1600}
          height={900}
          priority
          className="h-[340px] w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-night/70 via-night/30 to-gold/10" />
      </div>

      {/* ─── Headline & Subtitle ─────────────────────────────────────── */}
      <h1 className="font-heading text-5xl text-gold drop-shadow-md">
        Welcome to Bachata&nbsp;Exotica
      </h1>
      <p className="mt-4 font-body text-xl text-white/90">
        Bachata Sensual • Classes • Events • Workshops
      </p>

      {/* ─── CTA Button ──────────────────────────────────────────────── */}
      <a
        href="#events"
        className="mt-10 inline-block rounded-full bg-gold px-8 py-3 text-lg font-bold text-black shadow-xl transition-transform hover:scale-105"
      >
        View Upcoming Events
      </a>

      {/* ─── Event Grid ──────────────────────────────────────────────── */}
      <div
        id="events"
        className="mt-20 grid gap-8 sm:grid-cols-2"
      >
        {/* Card 1 – Tampa Open House */}
        <div className="flex flex-col items-start rounded-2xl border border-gold/30 bg-[#181818] px-6 py-8 shadow-lg">
          <h2 className="mb-2 font-heading text-2xl text-gold">
            Bachata Open House – FREE
          </h2>
          <div className="mb-1 text-white/80">Tuesday, June 10, 2025</div>
          <div className="mb-2 text-white/70">7 PM – 8 PM</div>
          <div className="mb-2 font-bold text-gold">
            Dance Factory Tampa Bay
          </div>
          <div className="mb-2 text-sm text-white/80">
            334 Westshore Plaza Unit A10, Tampa FL 33608
            <br />
            <span className="text-white/50">(inside the mall next to Lids)</span>
          </div>
          <p className="mb-4 text-sm text-white/90">
            Hosted by <span className="font-bold text-gold">Daniel &amp; Angie</span>
            &nbsp;and Dance Factory Tampa Bay.
          </p>
          <a
            href="https://www.bachataexotica.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-gold px-4 py-2 font-bold text-black shadow transition-transform hover:scale-105"
          >
            Learn More
          </a>
        </div>

        {/* Card 2 – Miami Sensual Week (placeholder) */}
        <div className="flex flex-col items-start rounded-2xl border border-gold/30 bg-[#181818] px-6 py-8 shadow-lg">
          <h2 className="mb-2 font-heading text-2xl text-gold">
            Miami Sensual Week
          </h2>
          <div className="mb-1 text-white/80">July 12, 2025</div>
          <div className="mb-2 text-white/70">Miami, FL</div>
          <p className="mb-4 text-sm text-white/80">
            A weekend packed with masterclasses &amp; socials.
          </p>
          <a
            href="#"
            className="rounded bg-gold px-4 py-2 font-bold text-black shadow transition-transform hover:scale-105"
          >
            Buy Ticket
          </a>
        </div>
      </div>

      {/* ─── Testimonial Bar ─────────────────────────────────────────── */}
      <div className="mx-auto mt-24 rounded-xl bg-black/80 px-6 py-10 shadow-inner">
        <h3 className="mb-6 font-heading text-2xl text-gold">
          What Dancers Are Saying
        </h3>
        <div className="flex flex-col gap-8 sm:flex-row sm:gap-12">
          <blockquote className="flex-1 text-lg italic text-white/80">
            “The best Bachata training and community in Florida.
            Every class is <span className="not-italic">🔥</span>!”
            <footer className="mt-2 text-sm font-bold text-gold">
              — Jessica R.
            </footer>
          </blockquote>
          <blockquote className="flex-1 text-lg italic text-white/80">
            “Incredible instructors, real connection, and the
            parties are legendary.”
            <footer className="mt-2 text-sm font-bold text-gold">
              — Andre L.
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}