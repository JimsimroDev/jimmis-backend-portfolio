"use client"

import { Mail, MapPin, Send } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contacto" className="relative py-24 px-6">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[rgb(127,0,113)] rounded-full blur-[200px] opacity-15" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contacto
          </h2>
          <p className="text-zinc-400">
            ¿Tienes un proyecto interesante? Hablemos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="group relative">
              <div className="absolute -inset-1 bg-[rgb(127,0,113)] rounded-xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-500" />
              <div className="relative bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-[rgb(127,0,113)]/40 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[rgb(127,0,113)]/20 rounded-lg">
                    <Mail className="w-5 h-5 text-[rgb(127,0,113)]" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Email</p>
                    <p className="text-white">carlos@example.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-1 bg-[rgb(127,0,113)] rounded-xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-500" />
              <div className="relative bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-[rgb(127,0,113)]/40 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[rgb(127,0,113)]/20 rounded-lg">
                    <MapPin className="w-5 h-5 text-[rgb(127,0,113)]" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Ubicación</p>
                    <p className="text-white">Madrid, España</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-[rgb(127,0,113)] rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500" />
            <form
              onSubmit={handleSubmit}
              className="relative bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-4 hover:border-[rgb(127,0,113)]/40 transition-all duration-300"
            >
              <div>
                <label htmlFor="name" className="block text-sm text-zinc-400 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-[rgb(127,0,113)]/50 focus:ring-1 focus:ring-[rgb(127,0,113)]/50 transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-zinc-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-[rgb(127,0,113)]/50 focus:ring-1 focus:ring-[rgb(127,0,113)]/50 transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-zinc-400 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-[rgb(127,0,113)]/50 focus:ring-1 focus:ring-[rgb(127,0,113)]/50 transition-all resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[rgb(127,0,113)] hover:bg-[rgb(150,20,130)] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(127,0,113,0.5)]"
              >
                Enviar mensaje
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
