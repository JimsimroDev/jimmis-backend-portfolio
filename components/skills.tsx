"use client"

const skillCategories = [
  {
    title: "Lenguajes & Frameworks",
    skills: [
      { name: "Java 21", level: 95 },
      { name: "Spring Boot", level: 92 },
      { name: "Spring Cloud", level: 88 },
      { name: "Kotlin", level: 75 },
    ],
  },
  {
    title: "Bases de Datos",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 88 },
      { name: "Elasticsearch", level: 80 },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 85 },
      { name: "AWS", level: 82 },
      { name: "CI/CD", level: 88 },
    ],
  },
  {
    title: "Arquitectura",
    skills: [
      { name: "Microservicios", level: 92 },
      { name: "Event-Driven", level: 88 },
      { name: "API Design", level: 90 },
      { name: "System Design", level: 85 },
    ],
  },
]

export function Skills() {
  return (
    <section id="habilidades" className="relative py-24 px-6">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[rgb(127,0,113)] rounded-full blur-[180px] opacity-15" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Habilidades Técnicas
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            +8 años de experiencia construyendo sistemas backend robustos y
            escalables.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group relative [perspective:1000px]"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-2 bg-[rgb(127,0,113)] rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500 group-hover:drop-shadow-[0_0_20px_rgba(127,0,113,0.4)]" />
              
              <div className="relative bg-zinc-950/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:[transform:rotateX(5deg)_rotateY(-5deg)_scale(1.02)] group-hover:shadow-[0_20px_40px_-12px_rgba(127,0,113,0.35)] group-hover:border-[rgb(127,0,113)]/50">
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[rgb(127,0,113)] rounded-full" />
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-zinc-300">{skill.name}</span>
                        <span className="text-zinc-500">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[rgb(127,0,113)] to-[rgb(180,50,160)] rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
