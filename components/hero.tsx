"use client"

import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 md:py-20"
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[rgb(127,0,113)] rounded-full blur-[150px] opacity-30" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[rgb(127,0,113)] rounded-full blur-[120px] opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[rgb(127,0,113)] rounded-full blur-[200px] opacity-10" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(127,0,113,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(127,0,113,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Glass Card - Compact */}
        <div className="bg-zinc-950/60 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl">
          {/* Profile Photo - Smaller */}
          <div className="flex justify-center mb-4">
            <div className="relative group">
              {/* Purple Glow Behind Photo */}
              <div className="absolute -inset-2 bg-[rgb(127,0,113)] rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
              
              {/* Glass Container */}
              <div className="relative p-1 backdrop-blur-md bg-white/5 border border-white/10 rounded-full">
                <img
                  src="/images/profile.jpg"
                  alt="Jimmis J Simanca - Senior Backend Engineer"
                  className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover opacity-90 ring-2 ring-[rgb(127,0,113)]/30"
                />
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[rgb(127,0,113)]/20 border border-[rgb(127,0,113)]/30 rounded-full text-[rgb(127,0,113)] text-xs mb-4">
            <span className="w-1.5 h-1.5 bg-[rgb(127,0,113)] rounded-full animate-pulse" />
            Disponible para nuevos proyectos
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight text-balance">
            Hola, soy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(127,0,113)] to-[rgb(180,50,160)]">
              Jimmis J Simanca
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 mb-2 font-light">
            Senior Backend Engineer
          </p>

          <p className="text-base text-zinc-500 max-w-xl mx-auto mb-5 text-pretty">
            Especializado en Java, Spring Boot y arquitecturas de microservicios.
            Construyo sistemas escalables y de alto rendimiento.
          </p>

          {/* Social Links - Compact */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white/5 border border-white/10 rounded-lg hover:bg-[rgb(127,0,113)]/20 hover:border-[rgb(127,0,113)]/50 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 text-white" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white/5 border border-white/10 rounded-lg hover:bg-[rgb(127,0,113)]/20 hover:border-[rgb(127,0,113)]/50 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-white" />
            </a>
            <a
              href="mailto:jimmis@example.com"
              className="p-2.5 bg-white/5 border border-white/10 rounded-lg hover:bg-[rgb(127,0,113)]/20 hover:border-[rgb(127,0,113)]/50 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 text-white" />
            </a>
          </div>

          {/* CTA Buttons - Always Row */}
          <div className="flex flex-row items-center justify-center gap-3">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[rgb(127,0,113)] hover:bg-[rgb(150,20,130)] text-white text-sm font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(127,0,113,0.5)] hover:scale-105"
            >
              Ver proyectos
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
            
            {/* Download CV Button */}
            <a
              href="/cv-jimmis-simanca.pdf"
              download
              className="group inline-flex items-center gap-2 px-6 py-3 backdrop-blur-xl bg-white/5 border border-white/20 text-[rgb(180,100,170)] text-sm font-semibold rounded-xl transition-all duration-300 hover:bg-white/10 hover:border-[rgb(127,0,113)]/50 hover:shadow-[0_0_25px_rgba(127,0,113,0.3)] hover:scale-105"
            >
              <Download className="w-4 h-4" />
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
