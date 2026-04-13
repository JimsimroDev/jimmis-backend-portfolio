"use client"

import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
}

export function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div className="group relative">
      {/* Glow Effect Behind Card */}
      <div className="absolute -inset-1 bg-[rgb(127,0,113)] rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500" />
      
      {/* Card */}
      <div className="relative bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:border-[rgb(127,0,113)]/60 hover:bg-zinc-900/60">
        {/* Gradient Line Top */}
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[rgb(127,0,113)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[rgb(127,0,113)] transition-colors">
          {title}
        </h3>
        
        <p className="text-zinc-400 mb-4 text-sm leading-relaxed">
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
        <div className="flex items-center gap-3 pt-4 border-t border-white/5">
          {githubUrl && (
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
          {liveUrl && (
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
        </div>
      </div>
    </div>
  )
}
