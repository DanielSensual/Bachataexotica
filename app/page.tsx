export default function HomePage() {
  return (
    <section className="text-center py-12">
      {/* Luxury Banner */}
      <div className="w-full max-w-4xl mx-auto mb-12 rounded-3xl overflow-hidden shadow-2xl border-4 border-[var(--gold)]">
        <img
          src="/Banner1.jpg"
          alt="Bachata Exotica Banner"
          className="w-full h-[300px] object-cover object-center"
          style={{
            background: 'linear-gradient(90deg, #0B0B0B 0%, #D4AF37 100%)'
          }}
        />
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
}<section className="max-w-2xl mx-auto py-10 px-4">
  <h2 className="font-heading text-3xl text-gold mb-6">Performance Videos</h2>
