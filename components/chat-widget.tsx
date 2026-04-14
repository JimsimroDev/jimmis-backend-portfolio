"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Bot, Loader2 } from "lucide-react"

interface Message {
  id: number
  text: string
  isBot: boolean
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "¡Hola! Soy el asistente virtual de Jimmis. ¿En qué puedo ayudarte?",
    isBot: true,
  },
]

// CONEXIÓN API: Sustituir este mock por fetch a la API RAG en Render.
const RAG_API_ENDPOINT = process.env.NEXT_PUBLIC_RAG_API_URL || ""

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      isBot: false,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // CONEXIÓN API: Sustituir este mock por fetch a la API RAG en Render.
      if (RAG_API_ENDPOINT) {
        const response = await fetch(RAG_API_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: input }),
        })

        if (!response.ok) throw new Error("API Error")

        const data = await response.json()
        const botMessage: Message = {
          id: messages.length + 2,
          text: data.response || data.message,
          isBot: true,
        }
        setMessages((prev) => [...prev, botMessage])
      } else {
        // Mock response when API is not configured
        await new Promise((resolve) => setTimeout(resolve, 1200))

        const botResponses = [
          "¡Gracias por tu interés! Jimmis está especializado en arquitecturas backend con Java y Spring Boot.",
          "Puedes contactar a Jimmis directamente en jimmis@example.com para discutir tu proyecto.",
          "Jimmis tiene experiencia en microservicios, sistemas distribuidos y orquestación de IA con RAG.",
          "¿Te gustaría ver algún proyecto específico? Puedes explorar la sección de proyectos.",
        ]

        const botMessage: Message = {
          id: messages.length + 2,
          text: botResponses[Math.floor(Math.random() * botResponses.length)],
          isBot: true,
        }
        setMessages((prev) => [...prev, botMessage])
      }
    } catch {
      const errorMessage: Message = {
        id: messages.length + 2,
        text: "Lo siento, hubo un problema al procesar tu mensaje. Por favor, intenta de nuevo.",
        isBot: true,
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 bg-[rgb(127,0,113)] hover:bg-[rgb(150,20,130)] text-white rounded-full shadow-lg hover:shadow-[0_0_40px_rgba(127,0,113,0.6)] transition-all duration-300 hover:scale-110 ${
          isOpen ? "hidden" : "flex"
        }`}
        aria-label="Abrir chat"
      >
        <MessageCircle className="w-6 h-6" />
        {/* Pulse Animation */}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-zinc-950 animate-pulse" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)]">
          {/* Glow Effect */}
          <div className="absolute -inset-2 bg-[rgb(127,0,113)] rounded-3xl blur-2xl opacity-30" />

          <div className="relative bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-[rgb(127,0,113)] px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-white/20 rounded-xl">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">
                    Asistente IA
                  </h3>
                  <p className="text-white/70 text-xs mt-0.5">
                    Siempre disponible
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-xl transition-colors"
                aria-label="Cerrar chat"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      message.isBot
                        ? "bg-zinc-800/50 text-zinc-300 rounded-bl-sm"
                        : "bg-[rgb(127,0,113)] text-white rounded-br-sm"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {/* Loading Indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-zinc-800/50 text-zinc-400 px-4 py-3 rounded-2xl rounded-bl-sm flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm">Pensando...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder={
                    isLoading ? "Esperando respuesta..." : "Escribe tu mensaje..."
                  }
                  disabled={isLoading}
                  className="flex-1 px-4 py-2 bg-zinc-800/50 border border-white/10 rounded-xl text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-[rgb(127,0,113)]/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="p-2 bg-[rgb(127,0,113)] hover:bg-[rgb(150,20,130)] text-white rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Enviar mensaje"
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
