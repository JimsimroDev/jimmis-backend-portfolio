"use client"

import Image from "next/image"
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-zinc-950"
    >
      {/* Mesh Gradient Orbs - Animated */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top-left orb */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[rgb(127,0,113)] rounded-full blur-[120px] animate-orb-pulse" />
        {/* Bottom-right orb */}
        <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-[rgb(127,0,113)] rounded-full blur-[120px] animate-orb-pulse-slower" />
        {/* Center subtle orb */}
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[rgb(127,0,113)] rounded-full blur-[180px] animate-orb-pulse-slow" />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(127,0,113,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(127,0,113,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* perfil.jpgto with Glass Border and Aura */}
        <div className="flex justify-center mb-8">
          <div className="relative group">
            {/* Purple Aura */}
            <div className="absolute -inset-4 bg-[rgb(127,0,113)] rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700" />

            {/* Glass Container */}
            <div className="relative p-1 backdrop-blur-md bg-white/5 border border-white/10 rounded-full overflow-hidden">
              <Image
                src="/images/perfil.jpeg"
                alt="Jimmis J Simanca - Senior Backend Engineer"
                width={128}
                height={128}
                className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgb(127,0,113)]/10 border border-[rgb(127,0,113)]/20 rounded-full text-[rgb(200,120,180)] text-sm mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 bg-[rgb(127,0,113)] rounded-full animate-pulse" />
          Disponible para nuevos proyectos
        </div>

        {/* Giant Name with Gradient */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight tracking-tight">
          Jimmis J.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[rgb(200,150,190)] to-[rgb(127,0,113)]">
            Simanca
          </span>
        </h1>

        {/* Role with Letter Spacing */}
        <p className="text-lg md:text-xl text-zinc-400 mb-3 font-light tracking-widest uppercase">
          Senior Backend Engineer
        </p>

        {/* Description - Higher opacity for readability */}
        <p className="text-base md:text-lg text-gray-100 max-w-xl mx-auto mb-8 leading-relaxed">
          Especializado en Java, Spring Boot y arquitecturas de microservicios.
          Experto en orquestación de IA y sistemas escalables.
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <a
            href="https://github.com/JimsimroDev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl hover:bg-[rgb(127,0,113)]/20 hover:border-[rgb(127,0,113)]/40 transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-white" />
          </a>
          <a
            href="https://linkedin.com/in/jimmis-simanca"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl hover:bg-[rgb(127,0,113)]/20 hover:border-[rgb(127,0,113)]/40 transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-white" />
          </a>
          <a
            href="mailto:jimmis@example.com"
            className="p-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl hover:bg-[rgb(127,0,113)]/20 hover:border-[rgb(127,0,113)]/40 transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-white" />
          </a>
        </div>

        {/* CTA Buttons - Single Row */}
        <div className="flex flex-row items-center justify-center gap-4">
          {/* Primary Button - Solid */}
          <a
            href="#proyectos"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[rgb(127,0,113)] hover:bg-[rgb(150,30,135)] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(127,0,113,0.6)] hover:scale-105"
          >
            Ver proyectos
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>

          {/* Secondary Button - Pure Glass */}
          <a
            href="/cv-jimmis-simanca.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-4 backdrop-blur-xl bg-white/5 border border-white/15 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:scale-105"
          >
            <Download className="w-4 h-4" />
            Descargar CV
          </a>
        </div>
      </div>

      {/* Scroll Indicator with Bounce Animation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}
