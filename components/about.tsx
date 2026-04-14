"use client"

export function About() {
  return (
    <section id="sobre-mi" className="relative py-32 px-6">
      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-600 font-medium">
            Sobre mí
          </p>
          
          <h2 className="text-2xl md:text-3xl font-medium text-white leading-relaxed">
            Estudiante de Ingeniería de Sistemas en 8vo semestre, enfocado en construir{" "}
            <span className="text-[rgb(180,100,160)]">arquitecturas backend escalables</span>{" "}
            y soluciones de{" "}
            <span className="text-[rgb(180,100,160)]">inteligencia artificial</span>.
          </h2>
          
          <p className="text-zinc-500 text-sm leading-relaxed max-w-2xl">
            Me apasiona el diseño de sistemas distribuidos, la orquestación de IA y 
            la creación de código limpio que resuelve problemas complejos de manera elegante.
            Siempre buscando aprender y aplicar las mejores prácticas de la industria.
          </p>
        </div>
      </div>
    </section>
  )
}
