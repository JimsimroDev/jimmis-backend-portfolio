"use client"

import { ExternalLink, Github, Clock } from "lucide-react"
import type { ProjectStatus } from "@/lib/projects-data"
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"
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
  activeSkill?: string | null
  renderTagIcon?: (tag: string, opts?: { isActive?: boolean }) => React.ReactNode
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
  activeSkill = null,
  renderTagIcon,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  // MotionValues: avoid re-rendering on mousemove
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const glowX = useMotionValue(50)
  const glowY = useMotionValue(50)

  const rotateXSpring = useSpring(rotateX, { stiffness: 400, damping: 40 })
  const rotateYSpring = useSpring(rotateY, { stiffness: 400, damping: 40 })

  const outerGlowBg = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(127, 0, 113, 0.5) 0%, rgba(127, 0, 113, 0.2) 40%, transparent 70%)`
  const innerGlowBg = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(127, 0, 113, 0.15) 0%, transparent 50%)`

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Calculate rotation (more subtle - max 6 degrees for sophisticated feel)
    rotateX.set(((y - centerY) / centerY) * -6)
    rotateY.set(((x - centerX) / centerX) * 6)

    // Calculate glow position as percentage
    glowX.set((x / rect.width) * 100)
    glowY.set((y / rect.height) * 100)
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    rotateX.set(0)
    rotateY.set(0)
    glowX.set(50)
    glowY.set(50)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative h-full"
      style={{ perspective: "1000px" }}
    >
      {/* Dynamic Glow Effect Behind Card - follows cursor (subtle) */}
      <motion.div
        className="absolute -inset-3 rounded-2xl blur-xl transition-opacity duration-500 pointer-events-none"
        style={{
          background: outerGlowBg,
          opacity: isHovering ? 0.8 : 0,
        }}
      />

      {/* Card with Dynamic 3D Transform - Compact & Elegant */}
      <motion.div
        className="relative h-full bg-zinc-950/50 backdrop-blur-sm border border-white/5 rounded-xl overflow-hidden flex flex-col transition-all duration-300 ease-out min-h-full"
        style={{
          rotateX: rotateXSpring,
          rotateY: rotateYSpring,
          scale: isHovering ? 1.01 : 1,
          transformStyle: "preserve-3d",
          boxShadow: isHovering
            ? "0 15px 40px -10px rgba(127, 0, 113, 0.3), 0 0 30px rgba(127, 0, 113, 0.1)"
            : "none",
          borderColor: isHovering ? "rgba(127, 0, 113, 0.4)" : "rgba(255, 255, 255, 0.05)",
        }}
      >
        {/* Inner Glow Reflection */}
        <motion.div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-20"
          style={{
            background: innerGlowBg,
            opacity: isHovering ? 1 : 0,
          }}
        />

        {/* Gradient Line Top */}
        <div
          className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[rgb(127,0,113)]/50 to-transparent transition-opacity duration-300 z-10"
          style={{ opacity: isHovering ? 1 : 0 }}
        />

        {/* Image/GIF Container - Compact with subtle aspect ratio */}
        {image && (
          <div className="relative w-full overflow-hidden border-b border-white/5">
            <div className="aspect-[16/9] w-full overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* Status Badge - Minimal */}
            {status && (
              <div
                className={`absolute top-2 right-2 px-1.5 py-0.5 rounded text-[9px] font-light uppercase tracking-wider backdrop-blur-sm border border-white/5 ${statusConfig[status].bgColor} ${statusConfig[status].textColor}`}
              >
                {statusConfig[status].label}
              </div>
            )}
          </div>
        )}

        {/* Content Section - Compact with subtle 3D floating effect */}
        <div
          className="p-3.5 flex flex-col flex-grow relative z-10 transition-transform duration-300"
          style={{
            transform: isHovering ? "translateZ(20px)" : "translateZ(0px)",
          }}
        >
          {/* Coming Soon Badge - Minimal */}
          {isComingSoon && (
            <div
              className="inline-flex items-center gap-1 px-2 py-0.5 mb-3 bg-zinc-800/30 border border-zinc-700/30 rounded text-zinc-500 text-[10px] uppercase tracking-wider w-fit transition-transform duration-300"
              style={{
                transform: isHovering ? "translateZ(10px)" : "translateZ(0px)",
              }}
            >
              <Clock className="w-2.5 h-2.5" />
              Próximamente
            </div>
          )}

          <h3
            className="text-sm font-medium text-white mb-1.5 group-hover:text-[rgb(180,100,160)] transition-all duration-300 tracking-tight"
            style={{
              transform: isHovering ? "translateZ(25px)" : "translateZ(0px)",
            }}
          >
            {title}
          </h3>

          <p
            className="text-zinc-500 mb-3 text-[11px] leading-relaxed font-light flex-grow line-clamp-2 transition-transform duration-300"
            style={{
              transform: isHovering ? "translateZ(15px)" : "translateZ(0px)",
            }}
          >
            {description}
          </p>

          {/* Tags - Minimal */}
          <div
            className="flex flex-wrap gap-1.5 mb-3 transition-transform duration-300"
            style={{
              transform: isHovering ? "translateZ(20px)" : "translateZ(0px)",
            }}
          >
            {(() => {
              const defaultVisible = tags.slice(0, 3)
              const shouldForce = !!activeSkill && tags.includes(activeSkill)
              const forcedTag = shouldForce ? activeSkill : null

              const visibleTags = forcedTag
                ? Array.from(
                    new Set([
                      forcedTag,
                      ...defaultVisible.filter((t) => t !== forcedTag),
                    ])
                  ).slice(0, 3)
                : defaultVisible

              return visibleTags.map((tag) => {
                const isActive = !!activeSkill && tag === activeSkill

                return (
                  <span
                    key={tag}
                    data-skill-tag={tag}
                    className={
                      "inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-medium rounded transition-colors duration-300 " +
                      (isActive
                        ? "bg-[rgb(127,0,113)]/10 text-zinc-200 border border-[rgb(127,0,113)]/30"
                        : "bg-zinc-800/50 text-zinc-400 hover:text-zinc-300")
                    }
                  >
                    {/* Anchor dot inside tag (always present for measurement) */}
                    {renderTagIcon ? (
                      <span data-skill-dot className="block">
                        {renderTagIcon(tag, { isActive })}
                      </span>
                    ) : (
                      <span
                        data-skill-dot
                        className={
                          "block size-2.5 rounded-full transition-colors duration-300 " +
                          (isActive ? "bg-[rgb(127,0,113)]" : "bg-zinc-700")
                        }
                      />
                    )}
                    {tag}
                  </span>
                )
              })
            })()}

            {tags.length > 3 && (
              <span className="px-2 py-0.5 text-[10px] text-zinc-600">
                +{tags.length - 3}
              </span>
            )}
          </div>

          {/* Links - Minimal */}
          <div
            className="flex items-center gap-3 pt-3 border-t border-white/5 mt-auto transition-transform duration-300"
            style={{
              transform: isHovering ? "translateZ(18px)" : "translateZ(0px)",
            }}
          >
            {githubUrl && !isComingSoon && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                Código
              </a>
            )}
            {liveUrl && !isComingSoon && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-[rgb(180,100,160)] transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Demo
              </a>
            )}
            {isComingSoon && (
              <span className="text-xs text-zinc-600">
                En desarrollo...
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
