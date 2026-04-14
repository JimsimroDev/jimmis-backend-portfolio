"use client"

import { Mail, MapPin, Send, CheckCircle, XCircle, Loader2 } from "lucide-react"
import { useState } from "react"

type FormStatus = "idle" | "submitting" | "success" | "error"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<FormStatus>("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("submitting")

    try {
      const response = await fetch("https://formspree.io/f/tu-id-aqui", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => setStatus("idle"), 5000)
      } else {
        setStatus("error")
        setTimeout(() => setStatus("idle"), 5000)
      }
    } catch {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 5000)
    }
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
              <a
                href="mailto:tu-correo@ejemplo.com"
                className="relative block bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-[rgb(127,0,113)]/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[rgb(127,0,113)]/20 rounded-lg">
                    <Mail className="w-5 h-5 text-[rgb(127,0,113)]" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Email</p>
                    <p className="text-white font-medium hover:text-[rgb(127,0,113)] transition-colors">
                      Enviar un correo
                    </p>
                  </div>
                </div>
              </a>
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
                    <p className="text-white">Córdoba, Colombia</p>
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
              action="https://formspree.io/f/tu-id-aqui"
              method="POST"
              className="relative bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-4 hover:border-[rgb(127,0,113)]/40 transition-all duration-300"
            >
              {/* Success Message */}
              {status === "success" && (
                <div className="flex items-center gap-2 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-sm">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span>¡Mensaje enviado con éxito! Te responderé pronto.</span>
                </div>
              )}

              {/* Error Message */}
              {status === "error" && (
                <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                  <XCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Hubo un error al enviar. Por favor, intenta de nuevo.</span>
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm text-zinc-400 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-[rgb(127,0,113)]/50 focus:ring-1 focus:ring-[rgb(127,0,113)]/50 transition-all"
                  placeholder="Tu nombre"
                  disabled={status === "submitting"}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-zinc-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-[rgb(127,0,113)]/50 focus:ring-1 focus:ring-[rgb(127,0,113)]/50 transition-all"
                  placeholder="tu@email.com"
                  disabled={status === "submitting"}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-zinc-400 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-[rgb(127,0,113)]/50 focus:ring-1 focus:ring-[rgb(127,0,113)]/50 transition-all resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                  disabled={status === "submitting"}
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[rgb(127,0,113)] hover:bg-[rgb(150,20,130)] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(127,0,113,0.5)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar mensaje
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
