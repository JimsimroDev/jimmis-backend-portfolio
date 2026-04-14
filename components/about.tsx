"use client"

export function About() {
  return (
    <section id="sobre-mi" className="relative py-16 px-6">
      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-600 font-medium">
            Sobre mí
          </p>
          
          <h2 className="text-2xl md:text-3xl font-medium text-white leading-relaxed">
            Backend Engineer enfocado en construir{" "}
            <span className="text-[rgb(180,100,160)]">sistemas escalables</span>{" "}
            y soluciones de{" "}
            <span className="text-[rgb(180,100,160)]">inteligencia artificial</span>.
          </h2>
          
          <p className="text-zinc-500 text-sm leading-relaxed max-w-2xl">
            Especializado en Java y Spring Boot, diseño arquitecturas robustas orientadas 
            a microservicios. Integro soluciones de IA con LangChain4j y OpenAI para crear 
            sistemas inteligentes que resuelven problemas complejos de manera eficiente.
          </p>
        </div>
      </div>
    </section>
  )
}
