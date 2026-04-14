"use client"

import { projects } from "@/lib/projects-data"
import { ProjectCard } from "./project-card"

export function Projects() {
  return (
    <section id="proyectos" className="relative py-24 px-6">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[rgb(127,0,113)] rounded-full blur-[200px] opacity-10" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[rgb(127,0,113)] rounded-full blur-[150px] opacity-10" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Una selección de mis trabajos más relevantes en arquitectura backend,
            orquestación de IA y sistemas distribuidos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.techStack}
              githubUrl={project.githubUrl}
              liveUrl={project.demoUrl}
              isComingSoon={project.isComingSoon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
