"use client"

import { useState, useEffect, useRef } from "react"

interface NavItem {
  id: string
  label: string
  children?: { id: string; label: string }[]
}

const navItems: NavItem[] = [
  {
    id: "pasta-rellena",
    label: "Pasta Rellena",
    children: [
      { id: "clasicos", label: "Clasicos" },
      { id: "huerta", label: "Huerta" },
      { id: "carnes", label: "Carnes" },
      { id: "mar", label: "Mar" },
    ],
  },
  { id: "cintas", label: "Cintas" },
  { id: "focaccias", label: "Focaccias" },
  { id: "gratinados", label: "Gratinados" },
  { id: "sintacc", label: "Sin TACC" },
  { id: "infantil", label: "Infantil" },
  {
    id: "salsas",
    label: "Salsas",
    children: [
      { id: "salsas-rojas", label: "Rojas" },
      { id: "salsas-blancas", label: "Blancas" },
      { id: "salsas-especiales", label: "Especiales y Fundentes" },
    ],
  },
  { id: "quesos", label: "Quesos" },
]

// Flat list for scroll tracking
const allSections = navItems.flatMap((item) =>
  item.children
    ? [{ id: item.id, label: item.label }, ...item.children]
    : [{ id: item.id, label: item.label }]
)

export function MenuNav() {
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const [mobileOpenGroup, setMobileOpenGroup] = useState<string | null>(null)
  const groupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)

      for (let i = allSections.length - 1; i >= 0; i--) {
        const el = document.getElementById(allSections[i].id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(allSections[i].id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = () => setOpenGroup(null)
    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsMenuOpen(false)
      setOpenGroup(null)
    }
  }

  const getParentGroupId = (sectionId: string) => {
    for (const item of navItems) {
      if (item.children) {
        if (item.id === sectionId) return item.id
        for (const child of item.children) {
          if (child.id === sectionId) return item.id
        }
      }
    }
    return null
  }

  const activeParentGroup = getParentGroupId(activeSection)

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
            {navItems.map((item) =>
              item.children ? (
                <div key={item.id} className="relative" ref={groupRef}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setOpenGroup(openGroup === item.id ? null : item.id)
                    }}
                    className={`flex items-center gap-1 px-3 py-1.5 text-xs tracking-[0.15em] uppercase transition-all duration-300 rounded-sm ${
                      activeParentGroup === item.id
                        ? "text-[#c8a97e] bg-[#c8a97e]/10"
                        : "text-[#a89a8c] hover:text-[#f5efe6]"
                    }`}
                  >
                    {item.label}
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className={`transition-transform duration-300 ${
                        openGroup === item.id ? "rotate-180" : ""
                      }`}
                    >
                      <path d="M2 4l3 3 3-3" />
                    </svg>
                  </button>
                  {openGroup === item.id && (
                    <div className="absolute top-full left-0 min-w-[180px] bg-[#1a1410]/97 backdrop-blur-md border border-[#3d3229] rounded-md p-1.5 mt-1 shadow-lg shadow-black/40">
                      <button
                        onClick={() => scrollTo(item.id)}
                        className="block w-full text-left px-4 py-2 text-[0.7rem] tracking-[0.12em] uppercase text-[#c8a97e] font-medium border-b border-[#3d3229] mb-1 hover:bg-[#c8a97e]/5 transition-colors rounded-sm"
                      >
                        Ver Todo
                      </button>
                      {item.children.map((child) => (
                        <button
                          key={child.id}
                          onClick={() => scrollTo(child.id)}
                          className={`block w-full text-left px-4 py-2 text-[0.7rem] tracking-[0.12em] uppercase transition-colors rounded-sm ${
                            activeSection === child.id
                              ? "text-[#c8a97e] bg-[#c8a97e]/10"
                              : "text-[#a89a8c] hover:text-[#f5efe6] hover:bg-[#c8a97e]/5"
                          }`}
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-3 py-1.5 text-xs tracking-[0.15em] uppercase transition-all duration-300 rounded-sm ${
                    activeSection === item.id
                      ? "text-[#c8a97e] bg-[#c8a97e]/10"
                      : "text-[#a89a8c] hover:text-[#f5efe6]"
                  }`}
                >
                  {item.label}
                </button>
              )
            )}
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-[700px] pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-0.5">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.id}>
                  <button
                    onClick={() =>
                      setMobileOpenGroup(
                        mobileOpenGroup === item.id ? null : item.id
                      )
                    }
                    className="flex items-center justify-between w-full px-3 py-2.5 text-xs tracking-[0.15em] uppercase text-[#c8a97e] font-medium border-b border-[#3d3229]"
                  >
                    {item.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className={`transition-transform duration-300 ${
                        mobileOpenGroup === item.id ? "rotate-180" : ""
                      }`}
                    >
                      <path d="M3 5l3 3 3-3" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 grid grid-cols-2 gap-0.5 pl-2 ${
                      mobileOpenGroup === item.id ? "max-h-[300px]" : "max-h-0"
                    }`}
                  >
                    {item.children.map((child) => (
                      <button
                        key={child.id}
                        onClick={() => scrollTo(child.id)}
                        className={`px-3 py-2 text-[0.7rem] tracking-[0.12em] uppercase transition-all duration-300 text-left rounded-sm ${
                          activeSection === child.id
                            ? "text-[#c8a97e] bg-[#c8a97e]/10"
                            : "text-[#a89a8c] hover:text-[#f5efe6]"
                        }`}
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                  <div className="h-px bg-[#3d3229] my-1" />
                </div>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-3 py-2.5 text-xs tracking-[0.15em] uppercase transition-all duration-300 text-left rounded-sm ${
                    activeSection === item.id
                      ? "text-[#c8a97e] bg-[#c8a97e]/10"
                      : "text-[#a89a8c] hover:text-[#f5efe6]"
                  }`}
                >
                  {item.label}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
