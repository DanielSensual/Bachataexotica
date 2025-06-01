export default function HomePage() {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-24 pt-14 text-center">
      {/* Banner */}
      <div className="relative mb-14 overflow-hidden rounded-3xl border-4 border-gold shadow-2xl">
        <Image
          src="/banner1.webp"
          alt="Bachata Exotica dancers in gold light"
          width={1600}
          height={900}
          priority
          className="h-[340px] w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-night/70 via-night/30 to-gold/10" />
      </div>

      <h1 className="font-heading text-5xl text-gold drop-shadow-md">
        Welcome to Bachata Exotica
      </h1>
      <p className="mt-4 font-body text-xl text-white/90">
        Bachata Sensual • Classes • Events • Workshops
      </p>
    </section>
  );
}