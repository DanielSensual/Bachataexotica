'use client';

export default function Gallery() {
  return (
    <section className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="font-heading text-4xl text-center text-[var(--gold)] mb-10">
        Gallery
      </h1>

      <div className="flex flex-col items-center gap-8">
        {/* Video Showcase */}
        <div className="w-full max-w-xs">
          <video
            src="/videos/Danielangie.MOV"
            autoPlay
            muted
            loop
            playsInline
            controls
            style={{
              aspectRatio: '9 / 16',
              width: '100%',
              borderRadius: '1rem',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)'
            }}
          >
            Your browser does not support the video tag.
          </video>
          <p className="mt-2 text-center text-white/80 text-sm font-body">
            Bachata Exotica – 2025 Sizzle Reel
          </p>
        </div>

        {/* Image Example */}
        {/* 
        <img
          src="/images/gallery1.jpg"
          alt="Bachata Exotica"
          className="aspect-square object-cover rounded-xl border-4 border-white/10 hover:border-[var(--gold)] transition"
          style={{ width: 240, height: 240 }}
        />
        */}
      </div>
    </section>
  );
}