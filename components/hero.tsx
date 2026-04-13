"use client"

import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[rgb(127,0,113)] rounded-full blur-[150px] opacity-30" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[rgb(127,0,113)] rounded-full blur-[120px] opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[rgb(127,0,113)] rounded-full blur-[200px] opacity-10" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(127,0,113,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(127,0,113,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Glass Card with enhanced glassmorphism */}
        <div className="bg-zinc-950/60 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgb(127,0,113)]/20 border border-[rgb(127,0,113)]/30 rounded-full text-[rgb(127,0,113)] text-sm mb-6">
            <span className="w-2 h-2 bg-[rgb(127,0,113)] rounded-full animate-pulse" />
            Disponible para nuevos proyectos
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
            Hola, soy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(127,0,113)] to-[rgb(180,50,160)]">
              Carlos Mendoza
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400 mb-4 font-light">
            Senior Backend Engineer
          </p>

          <p className="text-lg text-zinc-500 max-w-2xl mx-auto mb-8 text-pretty">
            Especializado en Java, Spring Boot y arquitecturas de microservicios.
            Construyo sistemas escalables, resilientes y de alto rendimiento.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-[rgb(127,0,113)]/20 hover:border-[rgb(127,0,113)]/50 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-[rgb(127,0,113)]/20 hover:border-[rgb(127,0,113)]/50 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a
              href="mailto:carlos@example.com"
              className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-[rgb(127,0,113)]/20 hover:border-[rgb(127,0,113)]/50 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-white" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[rgb(127,0,113)] hover:bg-[rgb(150,20,130)] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(127,0,113,0.5)] hover:scale-105"
            >
              Ver mis proyectos
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
            
            {/* Download CV Button - Glassmorphism Style */}
            <a
              href="/cv-carlos-mendoza.pdf"
              download
              className="group inline-flex items-center gap-2 px-8 py-4 backdrop-blur-xl bg-white/5 border border-white/20 text-[rgb(180,100,170)] font-semibold rounded-xl transition-all duration-300 hover:bg-white/10 hover:border-[rgb(127,0,113)]/50 hover:shadow-[0_0_25px_rgba(127,0,113,0.3)] hover:scale-105 hover:-translate-y-1"
            >
              <Download className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
