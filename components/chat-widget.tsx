"use client"

import { useState } from "react"
import { MessageCircle, X, Send, Bot } from "lucide-react"

interface Message {
  id: number
  text: string
  isBot: boolean
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "¡Hola! Soy el asistente virtual de Carlos. ¿En qué puedo ayudarte?",
    isBot: true,
  },
]

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      isBot: false,
    }

    setMessages([...messages, userMessage])
    setInput("")

    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "¡Gracias por tu interés! Carlos está especializado en arquitecturas backend con Java y Spring Boot.",
        "Puedes contactar a Carlos directamente en carlos@example.com para discutir tu proyecto.",
        "Carlos tiene experiencia en microservicios, sistemas distribuidos y procesamiento de datos en tiempo real.",
        "¿Te gustaría ver algún proyecto específico? Puedes explorar la sección de proyectos.",
      ]

      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        isBot: true,
      }

      setMessages((prev) => [...prev, botMessage])
    }, 1000)
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
            <div className="bg-[rgb(127,0,113)] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Asistente IA</h3>
                  <p className="text-white/70 text-xs">Siempre disponible</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-lg transition-colors"
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
                    className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                      message.isBot
                        ? "bg-zinc-800/50 text-zinc-300 rounded-bl-sm"
                        : "bg-[rgb(127,0,113)] text-white rounded-br-sm"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 px-4 py-2 bg-zinc-800/50 border border-white/10 rounded-xl text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-[rgb(127,0,113)]/50 transition-colors"
                />
                <button
                  onClick={handleSend}
                  className="p-2 bg-[rgb(127,0,113)] hover:bg-[rgb(150,20,130)] text-white rounded-xl transition-colors"
                  aria-label="Enviar mensaje"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
