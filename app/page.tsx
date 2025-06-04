import Image from 'next/image';

export default function HomePage() {
  return (
    <section className="relative mx-auto w-full max-w-5xl px-2 pt-8 pb-16">
      {/* 🔥 TOP PROMO BAR – RSVP EVENT */}
      <div className="relative flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-gold/90 via-black/90 to-gold/40 border-4 border-gold rounded-2xl shadow-2xl p-6 sm:p-10 mb-12 overflow-hidden">
        {/* Flyer */}
        <div className="flex-shrink-0 w-full sm:w-56">
          <Image
            src="/open-house-flyer.jpg"
            alt="Bachata Open House June 10 Tampa"
            width={400}
            height={400}
            className="rounded-xl shadow-xl object-cover"
            priority
          />
        </div>
        {/* Main Event Info */}
        <div className="flex-1 text-left">
          <span className="block font-heading text-[2rem] sm:text-3xl font-extrabold text-gold drop-shadow mb-2 leading-tight">
            Join for FREE: Bachata Open House
          </span>
          <div className="mb-2 text-lg text-white font-bold">
            Tuesday, <span className="text-gold">June 10<sup>th</sup>, 2025</span>
          </div>
          <div className="mb-2">
            <span className="inline-block bg-gold px-3 py-1 rounded-lg font-bold text-black text-base shadow mr-3">7PM – 8PM</span>
            <span className="font-body text-white">Dance Factory Tampa Bay</span>
          </div>
          <div className="mb-1 text-white font-semibold text-sm">
            334 Westshore Plaza Unit A10, Tampa FL 33608<br />
            <span className="text-white/60">(Inside the mall next to Lids)</span>
          </div>
          <div className="mb-3 text-white text-base font-bold">
            Hosted by Daniel &amp; Angie · Dance Factory Tampa Bay
          </div>
          <a
            href="https://www.bachataexotica.com/register"
            className="inline-block mt-1 bg-gold text-black font-bold px-6 py-3 rounded-full text-lg shadow-lg tracking-wider hover:bg-yellow-400 hover:scale-105 transition"
          >
            RSVP / Register Free Now
          </a>
        </div>
        {/* Decorative Gold Swirl */}
        <div className="absolute right-0 bottom-0 w-44 h-32 opacity-40 pointer-events-none hidden sm:block"
          style={{
            background: "radial-gradient(circle at right bottom, #D4AF37BB 0%, transparent 80%)"
          }}
        ></div>
      </div>

      {/* ── HERO ───────────────────────────────────────────── */}
      <div className="relative mb-12 overflow-hidden rounded-3xl border-2 border-gold shadow-lg">
        <Image
          src="/banner1.webp"
          alt="Bachata Exotica dancers in gold light"
          width={1600}
          height={900}
          priority
          className="h-[320px] sm:h-[400px] w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-night/80 via-black/10 to-gold/10" />
      </div>

      <h1 className="font-heading text-5xl text-gold mb-2 drop-shadow-lg">
        Welcome to Bachata Exotica
      </h1>
      <p className="font-body text-xl text-white/90 mb-8">
        Bachata Sensual • Classes • Events • Workshops
      </p>

      {/* Event Grid or next sections here... */}
    </section>
  );
}