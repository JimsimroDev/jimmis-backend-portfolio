export type ProjectStatus = "live" | "beta" | "in-progress"

export interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  githubUrl?: string
  demoUrl?: string
  image?: string // Supports JPG, PNG, GIF, or video poster
  status?: ProjectStatus
  isComingSoon?: boolean
}

export const projects: Project[] = [
  {
    id: "ai-orchestrator",
    title: "AI Orchestrator & RAG Engine",
    description:
      "Sistema de orquestación de IA desarrollado en Java. Implementa RAG (Retrieval-Augmented Generation) para procesar documentos PDF y realizar búsquedas web en tiempo real.",
    techStack: ["Java", "Spring Boot", "LangChain4j", "OpenAI", "Render"],
    githubUrl: "https://github.com/JimsimroDev/Hybrid-Intel-Orchestrator",
    demoUrl: "https://orchestrator.jimsimrodev.uk",
    image: "https://res.cloudinary.com/dzngz770f/image/upload/v1776132043/demo_invyqb.gif",
    status: "live",
  },
  {
    id: "microservicios-ha",
    title: "Microservicios de Alta Disponibilidad",
    description:
      "Arquitectura de microservicios con balanceo de carga, circuit breaker y service discovery. Diseñado para 99.99% uptime.",
    techStack: ["Java 21", "Spring Cloud", "Kubernetes", "Redis"],
    image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDh0cWxvZ3Bmd2N6aXA4OXI5bzd5NXNxODl0NXFuYmIxNTRiZHJxcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPEqDGUULpEU0aQ/giphy.gif",
    status: "in-progress",
    isComingSoon: true,
  },
  {
    id: "arquitectura-hexagonal",
    title: "Arquitectura Hexagonal Base",
    description:
      "Template de arquitectura hexagonal con DDD, CQRS y Event Sourcing. Base para proyectos enterprise escalables.",
    techStack: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzN4a3I0YnQ1ZG5lbWxwcHB5MnRkZGp0NnRiY3V2MXNxcW5lYmR3aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9IgzoKnwFNmISR8I/giphy.gif",
    status: "in-progress",
    isComingSoon: true,
  },
]
