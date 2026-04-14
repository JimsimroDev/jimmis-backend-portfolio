"use client"

import { ExternalLink, Github, Clock } from "lucide-react"
import type { ProjectStatus } from "@/lib/projects-data"
import { useRef, useState } from "react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  image?: string
  status?: ProjectStatus
  isComingSoon?: boolean
}

const statusConfig: Record<ProjectStatus, { label: string; bgColor: string; textColor: string }> = {
  live: {
    label: "Live",
    bgColor: "bg-emerald-500/20",
    textColor: "text-emerald-400",
  },
  beta: {
    label: "Beta",
    bgColor: "bg-amber-500/20",
    textColor: "text-amber-400",
  },
  "in-progress": {
    label: "In Progress",
    bgColor: "bg-blue-500/20",
    textColor: "text-blue-400",
  },
}

export function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
  image,
  status,
  isComingSoon = false,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 })
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Calculate rotation (max 15 degrees)
    const rotateX = ((y - centerY) / centerY) * -12
    const rotateY = ((x - centerX) / centerX) * 12

    // Calculate glow position as percentage
    const glowX = (x / rect.width) * 100
    const glowY = (y / rect.height) * 100

    setTransform({ rotateX, rotateY })
    setGlowPosition({ x: glowX, y: glowY })
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setTransform({ rotateX: 0, rotateY: 0 })
    setGlowPosition({ x: 50, y: 50 })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative"
      style={{ perspective: "1000px" }}
    >
      {/* Dynamic Glow Effect Behind Card - follows cursor */}
      <div
        className="absolute -inset-4 rounded-3xl blur-2xl transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(127, 0, 113, 0.7) 0%, rgba(127, 0, 113, 0.3) 40%, transparent 70%)`,
          opacity: isHovering ? 1 : 0,
        }}
      />

      {/* Card with Dynamic 3D Transform */}
      <div
        className="relative h-full bg-zinc-950/60 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden flex flex-col transition-all duration-200 ease-out"
        style={{
          transform: isHovering
            ? `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(1.02)`
            : "rotateX(0deg) rotateY(0deg) scale(1)",
          transformStyle: "preserve-3d",
          boxShadow: isHovering
            ? "0 25px 50px -12px rgba(127, 0, 113, 0.5), 0 0 60px rgba(127, 0, 113, 0.2)"
            : "none",
          borderColor: isHovering ? "rgba(127, 0, 113, 0.6)" : "rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Inner Glow Reflection */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-20"
          style={{
            background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(127, 0, 113, 0.15) 0%, transparent 50%)`,
            opacity: isHovering ? 1 : 0,
          }}
        />

        {/* Gradient Line Top */}
        <div
          className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[rgb(127,0,113)]/50 to-transparent transition-opacity duration-300 z-10"
          style={{ opacity: isHovering ? 1 : 0 }}
        />

        {/* Image/GIF Container with 16:9 Aspect Ratio */}
        {image && (
          <div className="relative w-full overflow-hidden border-b border-white/10">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>

            {/* Status Badge */}
            {status && (
              <div
                className={`absolute top-3 right-3 px-2.5 py-1 rounded-md text-xs font-semibold backdrop-blur-md border border-white/10 ${statusConfig[status].bgColor} ${statusConfig[status].textColor}`}
              >
                {statusConfig[status].label}
              </div>
            )}
          </div>
        )}

        {/* Content Section - with 3D floating effect */}
        <div
          className="p-6 flex flex-col flex-grow relative z-10 transition-transform duration-200"
          style={{
            transform: isHovering ? "translateZ(30px)" : "translateZ(0px)",
          }}
        >
          {/* Coming Soon Badge */}
          {isComingSoon && (
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 bg-zinc-800/50 border border-zinc-700/50 rounded-full text-zinc-400 text-xs w-fit transition-transform duration-200"
              style={{
                transform: isHovering ? "translateZ(15px)" : "translateZ(0px)",
              }}
            >
              <Clock className="w-3 h-3" />
              Próximamente
            </div>
          )}

          <h3
            className="text-xl font-bold text-white mb-3 group-hover:text-[rgb(127,0,113)] transition-all duration-200"
            style={{
              transform: isHovering ? "translateZ(40px)" : "translateZ(0px)",
              textShadow: isHovering ? "0 4px 12px rgba(0,0,0,0.3)" : "none",
            }}
          >
            {title}
          </h3>

          <p
            className="text-zinc-400 mb-4 text-sm leading-relaxed flex-grow transition-transform duration-200"
            style={{
              transform: isHovering ? "translateZ(20px)" : "translateZ(0px)",
            }}
          >
            {description}
          </p>

          {/* Tags - with floating effect */}
          <div
            className="flex flex-wrap gap-2 mb-4 transition-transform duration-200"
            style={{
              transform: isHovering ? "translateZ(35px)" : "translateZ(0px)",
            }}
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-[rgb(127,0,113)]/10 border border-[rgb(127,0,113)]/20 text-[rgb(180,100,170)] rounded-full transition-all duration-200 hover:bg-[rgb(127,0,113)]/20"
                style={{
                  boxShadow: isHovering ? "0 4px 8px rgba(127, 0, 113, 0.2)" : "none",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div
            className="flex items-center gap-3 pt-4 border-t border-white/5 mt-auto transition-transform duration-200"
            style={{
              transform: isHovering ? "translateZ(25px)" : "translateZ(0px)",
            }}
          >
            {githubUrl && !isComingSoon && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                Código
              </a>
            )}
            {liveUrl && !isComingSoon && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-zinc-500 hover:text-[rgb(127,0,113)] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Demo
              </a>
            )}
            {isComingSoon && (
              <span className="text-sm text-zinc-600 italic">
                En desarrollo...
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
