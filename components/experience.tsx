"use client"

import { Briefcase, Calendar, CheckCircle } from "lucide-react"

const experiences = [
  {
    title: "Desarrollador Backend",
    company: "No Country",
    type: "Simulación Profesional",
    period: "08/2024 - 09/2024",
    achievements: [
      "Diseño e implementación de lógica de negocio para APIs de reservas con Java y Spring Boot.",
      "Desarrollo de un motor de validación de disponibilidad en tiempo real con transacciones atómicas.",
      "Gestión de despliegue continuo en Render.",
    ],
  },
]

export function Experience() {
  return (
    <section id="experiencia" className="relative py-16 px-6">
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-600 font-medium mb-4">
            Trayectoria
          </p>
          <h2 className="text-xl md:text-2xl font-medium text-white">
            Experiencia Profesional
          </h2>
        </div>

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-2 bg-[rgb(127,0,113)] rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500" />

              {/* Card */}
              <div className="relative p-6 bg-zinc-900/30 backdrop-blur-sm border border-white/5 rounded-xl hover:border-[rgb(127,0,113)]/40 transition-all duration-300 group-hover:bg-zinc-900/50">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                  <div className="flex items-start gap-4">
                    {/* Icon container */}
                    <div className="flex-shrink-0 p-3 bg-[rgb(127,0,113)]/10 border border-[rgb(127,0,113)]/20 rounded-lg">
                      <Briefcase className="w-5 h-5 text-[rgb(180,100,160)]" />
                    </div>

                    {/* Title and company */}
                    <div>
                      <h3 className="text-lg font-medium text-white">
                        {experience.title}
                      </h3>
                      <p className="text-sm text-[rgb(180,100,160)] mt-1">
                        {experience.company}
                      </p>
                      <p className="text-xs text-zinc-500 mt-0.5">
                        {experience.type}
                      </p>
                    </div>
                  </div>

                  {/* Period badge */}
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-800/50 border border-white/5 rounded-full w-fit">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    <span className="text-xs text-zinc-400 font-medium">
                      {experience.period}
                    </span>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-zinc-600 font-medium">
                    Logros clave
                  </h4>
                  <ul className="space-y-2.5">
                    {experience.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="flex items-start gap-3 animate-fade-in-up"
                        style={{
                          animationDelay: `${(index * 150) + ((achIndex + 1) * 100)}ms`,
                        }}
                      >
                        <CheckCircle className="w-4 h-4 text-[rgb(127,0,113)] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-zinc-400 leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
