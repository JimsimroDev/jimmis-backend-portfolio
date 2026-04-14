"use client"

import { ExternalLink, Github, Clock } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  isComingSoon?: boolean
}

export function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
  isComingSoon = false,
}: ProjectCardProps) {
  return (
    <div className="group relative [perspective:1000px]">
      {/* Glow Effect Behind Card */}
      <div className="absolute -inset-2 bg-[rgb(127,0,113)] rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500 group-hover:drop-shadow-[0_0_25px_rgba(127,0,113,0.5)]" />

      {/* Card with 3D Transform */}
      <div className="relative h-full bg-zinc-950/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:[transform:rotateX(5deg)_rotateY(-5deg)_scale(1.02)] group-hover:shadow-[0_25px_50px_-12px_rgba(127,0,113,0.4)] group-hover:border-[rgb(127,0,113)]/60 group-hover:bg-zinc-900/70 flex flex-col">
        {/* Gradient Line Top */}
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[rgb(127,0,113)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Coming Soon Badge */}
        {isComingSoon && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 bg-zinc-800/50 border border-zinc-700/50 rounded-full text-zinc-400 text-xs w-fit">
            <Clock className="w-3 h-3" />
            Próximamente
          </div>
        )}

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[rgb(127,0,113)] transition-colors">
          {title}
        </h3>

        <p className="text-zinc-400 mb-4 text-sm leading-relaxed flex-grow">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-[rgb(127,0,113)]/10 border border-[rgb(127,0,113)]/20 text-[rgb(180,100,170)] rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/5 mt-auto">
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
  )
}
