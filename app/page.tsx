'use client';

import Gallery from '../components/Gallery';
import ChatbotWidget from '../components/ChatbotWidget';

export default function Home() {
  return (
    <>
      {/* ─── HERO VIDEO BANNER ───────────────────────────── */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* ► REPLACE `/hero.mp4` with your video in /public */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight gold-gradient">
            Bachata&nbsp;Exotica
          </h1>
          <p className="mt-4 max-w-xl text-lg md:text-xl text-white/80">
            Minimal. Cinematic. Unapologetically elite.
          </p>
          <a
            href="#classes"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-[#111] font-semibold hover:scale-105 transition-transform"
          >
            Join the Movement
          </a>
        </div>
      </section>

      {/* ─── ABOUT SECTION ──────────────────────────────── */}
      <section
        id="about"
        className="py-24 px-4 max-w-4xl mx-auto text-center space-y-6"
      >
        <h2 className="section-heading">About the Movement</h2>
        <p className="text-lg md:text-xl text-white/80">
          <span className="gold-text">Luxury meets rhythm.</span> Founded by
          Daniel Castillo, Bachata&nbsp;Exotica fuses elite technique with
          high-impact visuals, creating a dance experience as refined as it is
          powerful.
        </p>
      </section>

      {/* ─── CLASSES / WORKSHOPS ────────────────────────── */}
      <section
        id="classes"
        className="py-24 px-4 max-w-5xl mx-auto text-center"
      >
        <h2 className="section-heading">Classes · Workshops · Events</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Weekly Classes',
              desc: 'Elite training every Wed & Fri in Orlando.',
              cta: 'Reserve Spot',
              link: 'mailto:info@bachataexotica.com',
            },
            {
              title: 'VIP Workshops',
              desc: 'Intimate intensives designed for rapid mastery.',
              cta: 'Request Invite',
              link: '#contact',
            },
            {
              title: 'Festival Performances',
              desc: 'Cinematic shows & exclusive choreos worldwide.',
              cta: 'See Schedule',
              link: '#contact',
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-white/10 bg-[#111]/60 backdrop-blur p-8 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold gold-gradient-text mb-2">
                  {card.title}
                </h3>
                <p className="text-white/70">{card.desc}</p>
              </div>
              <a
                href={card.link}
                className="mt-6 self-start rounded-full bg-white px-6 py-2 text-[#111] font-semibold hover:scale-105 transition-transform"
              >
                {card.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ─── GALLERY ─────────────────────────────────────── */}
      <Gallery />

      {/* ─── TESTIMONIALS (optional, toggle display) ────── */}
      {/* <section id="reviews" className="py-24 px-4 max-w-4xl mx-auto text-center">
        <h2 className="section-heading">What Dancers Say</h2>
        <p className="text-white/70">★ ★ ★ ★ ★ “A transformative experience.”</p>
      </section> */}

      {/* ─── CONTACT FORM ───────────────────────────────── */}
      <section
        id="contact"
        className="py-24 px-4 max-w-2xl mx-auto text-center"
      >
        <h2 className="section-heading">Contact & Sign-Up</h2>
        <form className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="form-input"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="form-input"
            required
          />
          <textarea
            placeholder="Tell us what you need"
            className="form-input h-28"
          />
          <button
            type="submit"
            className="w-full rounded-full bg-white py-3 text-[#111] font-bold hover:scale-[1.03] transition-transform"
          >
            Send
          </button>
        </form>
      </section>

      {/* ─── FOOTER ─────────────────────────────────────── */}
      <footer className="py-8 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} Bachata Exotica. All rights reserved.
      </footer>

      {/* ─── CHATBOT WIDGET (placeholder) ──────────────── */}
      <ChatbotWidget />
    </>
  );
}