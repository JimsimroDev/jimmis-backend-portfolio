"use client"

import { projects } from "@/lib/projects-data"
import { ProjectCard } from "./project-card"

export function Projects() {
  return (
    <section id="proyectos" className="relative py-32 px-6">
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-600 font-medium mb-4">
            Proyectos
          </p>
          <h2 className="text-xl md:text-2xl font-medium text-white">
            Trabajo seleccionado
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.techStack}
              githubUrl={project.githubUrl}
              liveUrl={project.demoUrl}
              image={project.image}
              status={project.status}
              isComingSoon={project.isComingSoon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
