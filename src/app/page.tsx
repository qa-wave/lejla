import Image from "next/image";

const photos = [
  { src: "/gallery/photo-1.jpg", alt: "Lejla 1", span: "row-span-2" },
  { src: "/gallery/photo-2.jpg", alt: "Lejla 2", span: "" },
  { src: "/gallery/photo-3.jpg", alt: "Lejla 3", span: "" },
  { src: "/gallery/photo-4.jpg", alt: "Lejla 4", span: "row-span-2" },
  { src: "/gallery/photo-5.jpg", alt: "Lejla 5", span: "" },
  { src: "/gallery/photo-6.jpg", alt: "Lejla 6", span: "" },
  { src: "/gallery/photo-7.jpg", alt: "Lejla 7", span: "" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-serif text-2xl font-semibold tracking-wide text-purple-300">
            Lejla
          </span>
          <div className="hidden sm:flex gap-8 text-sm text-zinc-400">
            <a href="#home" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#gallery" className="hover:text-white transition-colors">
              Gallery
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-[#0a0a0a] to-fuchsia-950/30" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />

        <div className="relative z-10 text-center px-6 animate-fade-up">
          <p className="text-purple-400 text-sm tracking-[0.3em] uppercase mb-6">
            Personal Portfolio
          </p>
          <h1 className="font-serif text-7xl sm:text-8xl md:text-9xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              Lejla
            </span>
          </h1>
          <p className="text-zinc-400 text-lg sm:text-xl max-w-md mx-auto mb-10 leading-relaxed">
            Confidence is the best outfit. Own it.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#gallery"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-full text-sm font-medium transition-all hover:shadow-lg hover:shadow-purple-600/25"
            >
              View Gallery
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-white/20 hover:border-white/40 text-white rounded-full text-sm font-medium transition-all hover:bg-white/5"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in delay-500">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-purple-400 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <p className="text-purple-400 text-sm tracking-[0.3em] uppercase mb-4">
              Portfolio
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold">
              Gallery
            </h2>
          </div>

          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {photos.map((photo, i) => (
              <div
                key={photo.src}
                className="break-inside-avoid group relative overflow-hidden rounded-2xl animate-scale-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-sm font-medium">
                    Photo {i + 1}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative animate-fade-up">
              <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600/20 to-fuchsia-600/20 rounded-3xl blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/gallery/photo-1.jpg"
                  alt="Lejla"
                  width={500}
                  height={700}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="animate-fade-up delay-200">
              <p className="text-purple-400 text-sm tracking-[0.3em] uppercase mb-4">
                About Me
              </p>
              <h2 className="font-serif text-4xl font-bold mb-6">Lejla</h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Bold, confident, and unapologetically herself. With a passion
                for self-expression and an eye for aesthetics, Lejla brings
                energy and attitude to everything she does.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-8">
                Inked stories on skin, fierce spirit within. Every photo
                captures a moment of authentic confidence.
              </p>
              <div className="flex gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-400">7+</p>
                  <p className="text-zinc-500 text-sm mt-1">Photos</p>
                </div>
                <div className="w-px bg-white/10" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-400">100%</p>
                  <p className="text-zinc-500 text-sm mt-1">Authentic</p>
                </div>
                <div className="w-px bg-white/10" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-400">24/7</p>
                  <p className="text-zinc-500 text-sm mt-1">Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-r from-purple-600/10 via-fuchsia-600/10 to-purple-600/10 rounded-3xl blur-3xl" />
            <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-3xl p-12 animate-fade-up">
              <p className="text-purple-400 text-sm tracking-[0.3em] uppercase mb-4">
                Contact
              </p>
              <h2 className="font-serif text-4xl font-bold mb-4">
                Let&apos;s Connect
              </h2>
              <p className="text-zinc-400 mb-10 leading-relaxed">
                Interested in booking or collaboration? Reach out directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-full font-medium transition-all hover:shadow-lg hover:shadow-purple-600/25"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="mailto:"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 text-white rounded-full font-medium transition-all hover:bg-white/5"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-serif text-lg text-purple-300">Lejla</span>
          <p className="text-zinc-600 text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
