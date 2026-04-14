export interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  githubUrl?: string
  demoUrl?: string
  image?: string
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
  },
  {
    id: "microservicios-ha",
    title: "Microservicios de Alta Disponibilidad",
    description:
      "Arquitectura de microservicios con balanceo de carga, circuit breaker y service discovery. Diseñado para 99.99% uptime.",
    techStack: ["Java 21", "Spring Cloud", "Kubernetes", "Redis"],
    isComingSoon: true,
  },
  {
    id: "arquitectura-hexagonal",
    title: "Arquitectura Hexagonal Base",
    description:
      "Template de arquitectura hexagonal con DDD, CQRS y Event Sourcing. Base para proyectos enterprise escalables.",
    techStack: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    isComingSoon: true,
  },
]
