export default function HomePage() {
  return (
    <section className="text-center py-12">
      {/* Luxury Banner */}
      <div className="relative w-full max-w-4xl mx-auto mb-12 rounded-3xl overflow-hidden shadow-2xl border-4 border-gold">
        <img
          src="/Banner1.jpg"
          alt="Bachata Exotica Banner"
          className="w-full h-[300px] object-cover object-center opacity-90"
        />
        {/* Gold-Black Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/10 to-gold/40 pointer-events-none" />
      </div>

      {/* Headline, Description, CTA */}
      <h1 className="font-heading text-5xl text-gold mb-4 drop-shadow-lg">
        Welcome to Bachata Exotica
      </h1>
      <p className="font-body text-xl text-white/90 mb-8">
        Bachata Sensual • Classes • Events • Workshops
      </p>
      <a
        href="#events"
        className="inline-block bg-gold text-black font-bold text-lg px-8 py-3 rounded-full shadow-xl hover:scale-105 transition mb-16"
      >
        View Upcoming Events
      </a>

      {/* Event Grid */}
      <div id="events" className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-8 mb-16">
        {/* Event Card 1 */}
        <div className="bg-[#181818] rounded-2xl shadow-lg border border-gold/30 px-6 py-8 text-left flex flex-col items-start">
          <h2 className="font-heading text-2xl text-gold mb-2">Miami Sensual Week</h2>
          <div className="text-white/80 mb-1">June 17, 2025</div>
          <div className="text-white/70 mb-2">Tampa, FL</div>
          <p className="text-white/80 mb-4 text-sm">Experience the ultimate Bachata weekend with world-class instructors and socials.</p>
          <a
            href="#"
            className="bg-gold text-black font-bold px-4 py-2 rounded shadow hover:scale-105 transition"
          >Buy Ticket</a>
        </div>
        {/* Event Card 2 */}
        <div className="bg-[#181818] rounded-2xl shadow-lg border border-gold/30 px-6 py-8 text-left flex flex-col items-start">
          <h2 className="font-heading text-2xl text-gold mb-2">Orlando Class Series</h2>
          <div className="text-white/80 mb-1">June 10, 2025</div>
          <div className="text-white/70 mb-2">Tampa, FL</div>
          <p className="text-white/80 mb-4 text-sm">Join our six-week Bachata program for all levels—improve your fundamentals fast.</p>
          <a
            href="#"
            className="bg-gold text-black font-bold px-4 py-2 rounded shadow hover:scale-105 transition"
          >Book Spot</a>
        </div>
        {/* Add more event cards as needed */}
      </div>

      {/* Testimonial Bar */}
      <div className="bg-black/80 rounded-xl shadow-inner max-w-4xl mx-auto px-6 py-8">
        <h3 className="font-heading text-2xl text-gold mb-4">What Dancers Are Saying</h3>
        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          <div className="flex-1">
            <p className="text-white/80 text-lg italic mb-1">
              “The best Bachata training and community in Florida. Every class is 🔥!”
            </p>
            <div className="text-gold font-bold text-sm">— Jessica R.</div>
          </div>
          <div className="flex-1">
            <p className="text-white/80 text-lg italic mb-1">
              “Incredible instructors, real connection, and the parties are legendary.”
            </p>
            <div className="text-gold font-bold text-sm">— Andre L.</div>
          </div>
        </div>
      </div>
    </section>
  );
}<div className="bg-[#181818] rounded-2xl shadow-lg border border-gold/30 px-6 py-8 text-left flex flex-col items-start">
  <h2 className="font-heading text-2xl text-gold mb-2">Bachata Open House – FREE</h2>
  <div className="text-white/80 mb-1">Tuesday, June 10, 2025</div>
  <div className="text-white/70 mb-2">7PM – 8PM</div>
  <div className="text-gold font-bold mb-2">Dance Factory Tampa Bay</div>
  <div className="text-white/80 mb-2 text-sm">
    334 Westshore Plaza, Unit A10, Tampa, FL 33608<br />
    <span className="text-white/50">(Inside of the mall next to Lids)</span>
  </div>
  <div className="text-white/90 mb-4 text-sm">Hosted by <span className="text-gold font-bold">Daniel & Angie</span> and Dance Factory Tampa Bay.</div>
  <a
    href="https://www.BachataExotica.com"
    className="bg-gold text-black font-bold px-4 py-2 rounded shadow hover:scale-105 transition"
    target="_blank" rel="noopener noreferrer"
  >Learn More</a>
</div>