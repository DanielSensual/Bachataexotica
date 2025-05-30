'use client';

export default function Gallery() {
  const images = [
    '/gallery1.jpg',
    '/gallery2.jpg',
    '/gallery3.jpg',
    '/gallery4.jpg'
  ]; // Replace with your images

  return (
    <section id="gallery" className="py-24 px-4 max-w-6xl mx-auto text-center">
      <h2 className="section-heading mb-12">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src) => (
          <img
            key={src}
            src={src}
            alt="Bachata Exotica"
            className="aspect-square object-cover rounded-xl border-4 border-white/10 hover:scale-105 transition-transform"
          />
        ))}
      </div>
    </section>
  );
}