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
            Ingeniero de Sistemas en formaci&oacute;n enfocado en{" "}
            <span className="text-[rgb(180,100,160)]">APIs RESTful escalables</span>{" "}
            con Java y{" "}
            <span className="text-[rgb(180,100,160)]">Spring Boot</span>.
          </h2>
          
          <p className="text-zinc-500 text-sm leading-relaxed max-w-2xl">
            Experto en l&oacute;gica de negocio, persistencia de datos avanzada y automatizaci&oacute;n 
            con arquitecturas RAG. Comprometido con los est&aacute;ndares de Clean Code 
            y la eficiencia t&eacute;cnica.
          </p>
        </div>
      </div>
    </section>
  )
}
