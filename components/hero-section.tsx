import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-pasta.jpg"
        alt="Pasta fresca artesanal"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1410]/60 via-[#1a1410]/30 to-[#1a1410]" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <p className="text-[#e8c99e] tracking-[0.5em] uppercase text-base lg:text-xl mb-6 lg:mb-8 font-semibold">
        Artesania y Sabor
      </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-[#f5efe6] font-light tracking-[0.15em] uppercase mb-6 lg:mb-8 leading-tight text-balance">
          Carta de Pastas
        </h1>
        <div className="w-24 h-px bg-[#c8a97e] mx-auto mb-6 lg:mb-8" />
        <p className="text-[#a89a8c] text-base lg:text-lg leading-relaxed max-w-2xl mx-auto font-light text-pretty">
          Nuestra cocina celebra la tradicion de la pasta fresca. Masas laminadas
          a diario con huevos de campo, rellenos de autor y materias primas
          seleccionadas para ofrecer una experiencia honesta y memorable en cada
          plato.
        </p>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#c8a97e"
          strokeWidth="1.5"
          className="opacity-60"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}
