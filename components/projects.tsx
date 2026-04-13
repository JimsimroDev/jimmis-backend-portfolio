"use client"

import { ProjectCard } from "./project-card"

const projects = [
  {
    title: "API Gateway Microservices",
    description:
      "Sistema de gateway centralizado para orquestar más de 50 microservicios con balanceo de carga, circuit breaker y rate limiting. Procesa +100K requests/segundo.",
    tags: ["Java 21", "Spring Cloud", "Redis", "Kubernetes"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Real-Time Payment Processor",
    description:
      "Motor de procesamiento de pagos en tiempo real con arquitectura event-driven. Maneja transacciones bancarias con latencia < 50ms y 99.99% uptime.",
    tags: ["Spring Boot", "Kafka", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com",
  },
  {
    title: "Distributed Task Scheduler",
    description:
      "Sistema distribuido de programación de tareas con soporte para cron jobs, workflows complejos y retry automático. Escala horizontalmente hasta 1M tareas/día.",
    tags: ["Java", "Quartz", "MongoDB", "RabbitMQ"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Authentication Service",
    description:
      "Microservicio de autenticación con OAuth2, JWT y MFA. Integración con proveedores externos (Google, GitHub) y sistema de roles granular.",
    tags: ["Spring Security", "OAuth2", "JWT", "MySQL"],
    githubUrl: "https://github.com",
  },
  {
    title: "Data Pipeline ETL",
    description:
      "Pipeline de procesamiento de datos masivos para analytics. Extrae, transforma y carga +5TB de datos diarios con tolerancia a fallos.",
    tags: ["Apache Spark", "Java", "Airflow", "AWS S3"],
    githubUrl: "https://github.com",
  },
  {
    title: "Inventory Management System",
    description:
      "Sistema de gestión de inventario en tiempo real para e-commerce. Sincronización multi-warehouse con consistencia eventual y alertas predictivas.",
    tags: ["Spring Boot", "Elasticsearch", "Redis", "gRPC"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
]

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
            Una selección de mis trabajos más relevantes en arquitectura backend
            y sistemas distribuidos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
