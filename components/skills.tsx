"use client"

import { Code2, Layers, Brain, Container } from "lucide-react"

const skillCategories = [
  {
    title: "Lenguajes",
    icon: Code2,
    skills: ["Java", "TypeScript"],
  },
  {
    title: "Frameworks",
    icon: Layers,
    skills: ["Spring Boot", "Next.js"],
  },
  {
    title: "IA & Herramientas",
    icon: Brain,
    skills: ["LangChain4j", "OpenAI"],
  },
  {
    title: "DevOps",
    icon: Container,
    skills: ["Docker", "Render"],
  },
]

export function Skills() {
  return (
    <section id="habilidades" className="relative py-32 px-6">
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-600 font-medium mb-4">
            Stack Técnico
          </p>
          <h2 className="text-xl md:text-2xl font-medium text-white">
            Tecnologías con las que trabajo
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-[rgb(127,0,113)] rounded-xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-500" />
                
                <div className="relative bg-zinc-900/30 backdrop-blur-sm border border-white/5 rounded-xl p-4 hover:border-[rgb(127,0,113)]/30 transition-all duration-300 h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className="w-4 h-4 text-[rgb(180,100,160)]" />
                    <h3 className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs text-zinc-300 bg-zinc-800/50 rounded transition-colors duration-300 hover:text-white hover:bg-zinc-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
