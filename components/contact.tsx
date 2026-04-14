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
    <section id="contacto" className="relative py-32 px-6">
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-600 font-medium mb-4">
            Contacto
          </p>
          <h2 className="text-xl md:text-2xl font-medium text-white">
            ¿Tienes un proyecto? Hablemos.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-4">
            <a
              href="mailto:tu-correo@ejemplo.com"
              className="group flex items-center gap-3 p-4 bg-zinc-900/30 border border-white/5 rounded-lg hover:border-[rgb(127,0,113)]/30 transition-all duration-300"
            >
              <div className="p-2 bg-zinc-800/50 rounded">
                <Mail className="w-4 h-4 text-[rgb(180,100,160)]" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-zinc-600">Email</p>
                <p className="text-sm text-zinc-300 group-hover:text-white transition-colors">
                  Enviar un correo
                </p>
              </div>
            </a>

            <div className="flex items-center gap-3 p-4 bg-zinc-900/30 border border-white/5 rounded-lg">
              <div className="p-2 bg-zinc-800/50 rounded">
                <MapPin className="w-4 h-4 text-[rgb(180,100,160)]" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-zinc-600">Ubicación</p>
                <p className="text-sm text-zinc-300">Córdoba, Colombia</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/tu-id-aqui"
            method="POST"
            className="bg-zinc-900/30 border border-white/5 rounded-lg p-5 space-y-4"
          >
            {/* Success Message */}
            {status === "success" && (
              <div className="flex items-center gap-2 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 text-xs">
                <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" />
                <span>¡Mensaje enviado con éxito!</span>
              </div>
            )}

            {/* Error Message */}
            {status === "error" && (
              <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-xs">
                <XCircle className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Hubo un error. Intenta de nuevo.</span>
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-xs text-zinc-500 mb-1.5">
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
                className="w-full px-3 py-2 bg-zinc-800/30 border border-white/5 rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[rgb(127,0,113)]/40 transition-all"
                placeholder="Tu nombre"
                disabled={status === "submitting"}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs text-zinc-500 mb-1.5">
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
                className="w-full px-3 py-2 bg-zinc-800/30 border border-white/5 rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[rgb(127,0,113)]/40 transition-all"
                placeholder="tu@email.com"
                disabled={status === "submitting"}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs text-zinc-500 mb-1.5">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-3 py-2 bg-zinc-800/30 border border-white/5 rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[rgb(127,0,113)]/40 transition-all resize-none"
                placeholder="Cuéntame sobre tu proyecto..."
                disabled={status === "submitting"}
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full flex items-center justify-center gap-2 px-5 py-2.5 bg-[rgb(127,0,113)] hover:bg-[rgb(150,20,130)] text-white text-sm font-medium rounded-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
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
    </section>
  )
}
