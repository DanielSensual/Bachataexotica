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

      {/* Headline & Description */}
      <h1 className="font-heading text-5xl text-gold mb-4 drop-shadow-lg">
        Welcome to Bachata Exotica
      </h1>
      <p className="font-body text-xl text-white/90 mb-8">
        Bachata Sensual • Classes • Events • Workshops
      </p>
      
      {/* Video or additional content can go here */}
    </section>
  );
}