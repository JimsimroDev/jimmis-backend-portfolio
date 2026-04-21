"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#habilidades", label: "Stack" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-zinc-950/50 backdrop-blur-xl border-b border-white/[0.03]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <a
            href="#inicio"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300 tracking-wide"
          >
            JJS
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors duration-300 tracking-wider uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-zinc-400 p-2 hover:text-white transition-colors"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-6 pb-4 backdrop-blur-xl bg-zinc-900/50 rounded-lg border border-white/5 p-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-xs text-zinc-500 hover:text-white transition-colors tracking-wider uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
