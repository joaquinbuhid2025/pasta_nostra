"use client"

import { useState, useEffect } from "react"

const sections = [
  { id: "inicio", label: "Focaccias" },
  { id: "clasicos", label: "Clasicos" },
  { id: "huerta", label: "Huerta" },
  { id: "carnes", label: "Carnes" },
  { id: "mar", label: "Mar" },
  { id: "cintas", label: "Cintas" },
  { id: "salsas", label: "Salsas" },
  { id: "quesos", label: "Quesos" },
  { id: "gratinados", label: "Gratinados" },
  { id: "infantil", label: "Infantil" },
  { id: "sintacc", label: "Sin TACC" },
]

export function MenuNav() {
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)

      const sectionElements = sections.map((s) => ({
        id: s.id,
        el: document.getElementById(s.id),
      }))

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i].el
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(sectionElements[i].id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#1a1410]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[#c8a97e] tracking-[0.3em] text-sm lg:text-base font-semibold uppercase"
          >
            Carta de Pastas
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-[#f5efe6] p-2"
            aria-label="Abrir menu de navegacion"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {isMenuOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M3 8h18M3 16h18" />
              )}
            </svg>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className={`px-3 py-1.5 text-xs tracking-[0.15em] uppercase transition-all duration-300 rounded-sm ${
                  activeSection === section.id
                    ? "text-[#c8a97e] bg-[#c8a97e]/10"
                    : "text-[#a89a8c] hover:text-[#f5efe6]"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-[500px] pb-4" : "max-h-0"
          }`}
        >
          <div className="grid grid-cols-2 gap-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className={`px-3 py-2.5 text-xs tracking-[0.15em] uppercase transition-all duration-300 text-left rounded-sm ${
                  activeSection === section.id
                    ? "text-[#c8a97e] bg-[#c8a97e]/10"
                    : "text-[#a89a8c] hover:text-[#f5efe6]"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
