"use client"

import { useLayoutEffect, useMemo, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { projects } from "@/lib/projects-data"
import { ProjectCard } from "./project-card"

type Skill = string

type CloneFlight = {
  key: string
  to: { x: number; y: number }
  delayMs: number
}

type CloneLayer = {
  id: string
  skill: string
  flights: CloneFlight[]
}

type SkillIconProps = { className?: string }

type SkillIcon = {
  title: string
  Icon: (props: SkillIconProps) => React.JSX.Element
}

const JavaIcon = ({ className }: SkillIconProps) => (
  <svg className={className} viewBox="0 0 128 128" fill="currentColor" aria-hidden="true">
    <path d="M47.617 98.12c-19.192 5.362 11.677 16.439 36.115 5.969-4.003-1.556-6.874-3.351-6.874-3.351-10.897 2.06-15.952 2.222-25.844 1.092-8.164-.935-3.397-3.71-3.397-3.71zm33.189-10.46c-14.444 2.779-22.787 2.69-33.354 1.6-8.171-.845-2.822-4.805-2.822-4.805-21.137 7.016 11.767 14.977 41.309 6.336-3.14-1.106-5.133-3.131-5.133-3.131zm11.319-60.575c.001 0-42.731 10.669-22.323 34.187 6.024 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.793 15.634-29.58zm9.998 81.144s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.095.171-4.45-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.952-3.487-32.013 6.85-13.742 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM85 77.896c2.395-1.634 5.703-3.053 5.703-3.053s-9.424 1.685-18.813 2.474c-11.494.965-23.823 1.154-30.012.326-14.652-1.959 8.033-7.348 8.033-7.348s-8.812-.596-19.644 4.644C17.455 81.134 61.958 83.958 85 77.896zm5.609 15.145c-.108.29-.468.616-.468.616 31.273-8.221 19.775-28.979 4.822-23.725-1.312.464-2 1.543-2 1.543s.829-.334 2.678-.72c7.559-1.575 18.389 10.119-5.032 22.286zM64.181 70.069c-4.614-10.429-20.26-19.553.007-35.559C89.459 14.563 76.492 1.587 76.492 1.587c5.23 20.608-18.451 26.833-26.999 39.667-5.821 8.745 2.857 18.142 14.688 28.815zm27.274 51.748c-19.187 3.612-42.854 3.191-56.887.874 0 0 2.874 2.38 17.646 3.331 22.476 1.437 57-.8 57.816-11.436.001 0-1.57 4.032-18.575 7.231z"/>
  </svg>
)

const SpringBootIcon = ({ className }: SkillIconProps) => (
  <svg className={className} viewBox="0 0 128 128" fill="currentColor" aria-hidden="true">
    <path d="M116.452 6.643a59.104 59.104 0 01-6.837 12.136A64.249 64.249 0 0064.205-.026C28.984-.026 0 28.982 0 64.242a64.316 64.316 0 0019.945 46.562l2.368 2.1a64.22 64.22 0 0041.358 15.122c33.487 0 61.637-26.24 64.021-59.683 1.751-16.371-3.051-37.077-11.24-61.7zM29.067 111.17a5.5 5.5 0 01-4.269 2.034c-3.018 0-5.487-2.484-5.487-5.502 0-3.017 2.485-5.501 5.487-5.501 1.25 0 2.485.433 3.452 1.234 2.351 1.9 2.718 5.384.817 7.735zm87.119-19.238c-15.843 21.122-49.68 14.003-71.376 15.02 0 0-3.852.234-7.721.867 0 0 1.45-.617 3.335-1.334 15.226-5.301 22.43-6.335 31.685-11.086 17.427-8.869 34.654-28.274 38.24-48.463-6.637 19.422-26.75 36.11-45.078 42.895-12.557 4.635-35.238 9.136-35.238 9.136l-.917-.484c-15.442-7.518-15.91-40.977 12.157-51.78 12.291-4.735 24.048-2.134 37.323-5.302 14.175-3.367 30.568-14.004 37.238-27.874 7.471 22.19 16.46 56.932.352 78.405z"/>
  </svg>
)

const DockerIcon = ({ className }: SkillIconProps) => (
  <svg className={className} viewBox="0 0 128 128" fill="currentColor" aria-hidden="true">
    <path d="M124.8 52.1c-4.3-2.5-10-2.8-14.8-1.4-.6-5.2-4-9.7-8-12.9l-1.6-1.3-1.4 1.6c-2.7 3.1-3.5 8.3-3.1 12.3.3 2.9 1.2 5.9 3 8.3-1.4.8-2.9 1.9-4.3 2.4-2.8 1-5.9 2-8.9 2H79V49H66V24H51v12H26V24H13v25H1.8l-.2 1.5c-.5 6.4.3 12.6 3 18.5l1.1 2.2.1.2c7.9 13.4 21.7 19 36.8 19 29.2 0 53.3-13.1 64.3-40.6 7.4.4 15-1.8 18.6-8.9l.9-1.8-1.6-1z" />
  </svg>
)

const PostgreSQLIcon = ({ className }: SkillIconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12 2c-3.3 0-6 1.6-6 3.6V18.4C6 20.4 8.7 22 12 22s6-1.6 6-3.6V5.6C18 3.6 15.3 2 12 2zm0 2c2.5 0 4 .9 4 1.6S14.5 7.2 12 7.2 8 6.3 8 5.6 9.5 4 12 4zm0 5.2c2.5 0 4-.9 4-1.6v3.1c0 .7-1.5 1.6-4 1.6s-4-.9-4-1.6V7.6c0 .7 1.5 1.6 4 1.6zm0 5.2c2.5 0 4-.9 4-1.6v3.1c0 .7-1.5 1.6-4 1.6s-4-.9-4-1.6v-3.1c0 .7 1.5 1.6 4 1.6zm0 5.2c2.5 0 4-.9 4-1.6v.6c0 .7-1.5 1.6-4 1.6s-4-.9-4-1.6v-.6c0 .7 1.5 1.6 4 1.6z" />
  </svg>
)

const KubernetesIcon = ({ className }: SkillIconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2l3.5 2v4L12 10 8.5 8V4L12 2zm-5 4l3 1.8V12L7 13.8 4 12V8l3-2zm10 0l3 2v4l-3 1.8V12l3-2.2V6zm-7 7l2 1.2 2-1.2v2.5L12 17l-2-1.5V13zm-6 1l3 1.8V20l-3-2v-4zm16 0v4l-3 2v-4.2l3-1.8z" />
  </svg>
)

const RedisIcon = ({ className }: SkillIconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2L4 6v4l8 4 8-4V6l-8-4zm0 2.2L17.8 6 12 8.8 6.2 6 12 4.2zM6 10.2l6 3 6-3V13l-6 3-6-3v-2.8zM6 15.2l6 3 6-3V18l-6 3-6-3v-2.8z" />
  </svg>
)

const OpenAIIcon = ({ className }: SkillIconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073z" />
  </svg>
)

const LangChainIcon = ({ className }: SkillIconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
)

const RenderIcon = ({ className }: SkillIconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-2 5v10l8-5-8-5z" />
  </svg>
)

const skillIconMap: Record<string, SkillIcon> = {
  Java: { title: "Java", Icon: JavaIcon },
  "Java 21": { title: "Java", Icon: JavaIcon },
  "Spring Boot": { title: "Spring Boot", Icon: SpringBootIcon },
  "Spring Cloud": { title: "Spring Cloud", Icon: SpringBootIcon },
  PostgreSQL: { title: "PostgreSQL", Icon: PostgreSQLIcon },
  Docker: { title: "Docker", Icon: DockerIcon },
  Kubernetes: { title: "Kubernetes", Icon: KubernetesIcon },
  Redis: { title: "Redis", Icon: RedisIcon },
  OpenAI: { title: "OpenAI", Icon: OpenAIIcon },
  LangChain4j: { title: "LangChain4j", Icon: LangChainIcon },
  Render: { title: "Render", Icon: RenderIcon },
}

function SkillGlyph({ label, className }: { label: string; className?: string }) {
  const mapped = skillIconMap[label]
  const Icon = mapped?.Icon

  if (!Icon) {
    return (
      <span
        className={
          "grid size-5 place-items-center rounded-full bg-[rgb(127,0,113)] text-[9px] font-semibold leading-none text-white " +
          (className ?? "")
        }
      >
        {label.slice(0, 1).toUpperCase()}
      </span>
    )
  }

  return <Icon className={className ?? "size-5 text-[rgb(180,100,160)]"} />
}

function renderProjectTagIcon(tag: string, opts?: { isActive?: boolean }) {
  const isActive = !!opts?.isActive
  // Keep a consistent size so clone targeting remains stable.
  return (
    <span className="grid size-3.5 place-items-center rounded-full border border-white/10 bg-zinc-900/40">
      <SkillGlyph
        label={tag}
        className={isActive ? "size-3 text-[rgb(180,100,160)]" : "size-3 text-zinc-400"}
      />
    </span>
  )
}

function uniqSorted(items: string[]) {
  return Array.from(new Set(items)).sort((a, b) => a.localeCompare(b))
}

function getRectCenter(rect: DOMRect) {
  return {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2,
  }
}

export function Projects() {
  const skills: Skill[] = useMemo(
    () => uniqSorted(projects.flatMap((p) => p.techStack)),
    []
  )

  const [activeSkill, setActiveSkill] = useState<Skill | null>(null)

  // Source icon refs (one per skill pill)
  const pillDotRefs = useRef(new Map<string, HTMLSpanElement>())

  // Project container ref to scope destination queries
  const gridRef = useRef<HTMLDivElement>(null)

  const [cloneLayer, setCloneLayer] = useState<CloneLayer | null>(null)

  function computeFlights(skill: string, layerId: string): CloneFlight[] {
    const sourceEl = pillDotRefs.current.get(skill)
    const gridEl = gridRef.current
    if (!sourceEl || !gridEl) return []

    const sourceCenter = getRectCenter(sourceEl.getBoundingClientRect())

    const destDots = Array.from(
      gridEl.querySelectorAll<HTMLElement>(
        `[data-skill-tag=\"${CSS.escape(skill)}\"] [data-skill-dot]`
      )
    )

    return destDots.map((el, i) => {
      const center = getRectCenter(el.getBoundingClientRect())

      return {
        key: `${layerId}-${i}`,
        to: {
          x: center.x - sourceCenter.x,
          y: center.y - sourceCenter.y,
        },
        delayMs: i * 70,
      }
    })
  }

  // Spawn a transient clone layer when selecting a skill.
  // Recompute flight destinations for a short window so clones track the layout reorder.
  useLayoutEffect(() => {
    if (!activeSkill) {
      setCloneLayer(null)
      return
    }

    const layerId = `${activeSkill}-${Date.now()}`
    setCloneLayer({
      id: layerId,
      skill: activeSkill,
      flights: computeFlights(activeSkill, layerId),
    })

    // Track destinations briefly while the project grid reorders
    const start = performance.now()
    const trackMs = 750
    let rafId: number | null = null

    const tick = () => {
      const now = performance.now()
      const elapsed = now - start
      if (elapsed > trackMs) {
        if (rafId != null) window.cancelAnimationFrame(rafId)
        return
      }

      setCloneLayer((prev) => {
        if (!prev || prev.id !== layerId) return prev
        return {
          ...prev,
          flights: computeFlights(prev.skill, prev.id),
        }
      })

      rafId = window.requestAnimationFrame(tick)
    }

    rafId = window.requestAnimationFrame(tick)

    // Auto-clear after the flight + fade completes
    const maxDelayMs = Math.max(0, ...computeFlights(activeSkill, layerId).map((f) => f.delayMs))
    const totalMs = 1300 + maxDelayMs
    const timeoutId = window.setTimeout(() => {
      setCloneLayer((prev) => {
        if (!prev || prev.id !== layerId) return prev
        return null
      })
    }, totalMs)

    return () => {
      if (rafId != null) window.cancelAnimationFrame(rafId)
      window.clearTimeout(timeoutId)
    }
  }, [activeSkill])

  return (
    <section id="proyectos" className="relative py-16 px-6">
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-600 font-medium mb-4">
            Stack T&eacute;cnico
          </p>
          <h2 className="text-xl md:text-2xl font-medium text-white">
            Backend
          </h2>
        </div>

        {/* Skills submenu - Bento micro-cards */}
        <div className="mb-10">
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
            {skills.map((skill) => {
              const isActive = activeSkill === skill

              return (
                <button
                  key={skill}
                  type="button"
                  onClick={() => setActiveSkill((prev) => (prev === skill ? null : skill))}
                  className={
                    "group relative aspect-square rounded-lg border transition-all duration-300 ease-out " +
                    "flex flex-col items-center justify-center gap-1.5 px-1 " +
                    (isActive
                      ? "border-[rgb(127,0,113)]/40 bg-[rgb(127,0,113)]/[0.08]"
                      : "border-white/[0.06] bg-zinc-900/40 hover:border-white/10 hover:bg-zinc-900/60")
                  }
                  aria-pressed={isActive}
                  aria-label={`Filtrar por ${skill}`}
                >
                  {/* Source icon: spawn point for clone flights */}
                  <span
                    ref={(el) => {
                      if (!el) {
                        pillDotRefs.current.delete(skill)
                        return
                      }
                      pillDotRefs.current.set(skill, el)
                    }}
                    className="grid place-items-center"
                  >
                    <SkillGlyph
                      label={skill}
                      className={
                        "size-5 transition-colors duration-300 " +
                        (isActive ? "text-[rgb(180,100,160)]" : "text-zinc-400 group-hover:text-zinc-200")
                      }
                    />
                  </span>

                  <span
                    className={
                      "text-[10px] font-light leading-none tracking-tight text-center transition-colors duration-300 truncate max-w-full " +
                      (isActive ? "text-white" : "text-zinc-500 group-hover:text-zinc-300")
                    }
                  >
                    {skill}
                  </span>
                </button>
              )
            })}
          </div>

          <div className="mt-4 text-[11px] text-zinc-600 font-light">
            {activeSkill ? (
              <span>
                Filtrando por <span className="text-zinc-400">{activeSkill}</span>. Haz click de nuevo para
                resetear.
              </span>
            ) : (
              <span>Selecciona una skill para ver proyectos relacionados.</span>
            )}
          </div>
        </div>

        {/* Clone overlay (one-to-many) */}
        <AnimatePresence>
          {cloneLayer && cloneLayer.flights.length > 0 && (
            <motion.div
              key={`clone-layer-${cloneLayer.id}`}
              className="pointer-events-none fixed inset-0 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.12 }}
            >
              {cloneLayer.flights.map((flight) => {
                const sourceEl = pillDotRefs.current.get(cloneLayer.skill)
                if (!sourceEl) return null

                const sourceCenter = getRectCenter(sourceEl.getBoundingClientRect())

                return (
                  <motion.div
                    key={flight.key}
                    style={{
                      position: "fixed",
                      left: sourceCenter.x - 22,
                      top: sourceCenter.y - 22,
                      willChange: "transform",
                    }}
                    initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                    animate={{
                      x: flight.to.x,
                      y: flight.to.y,
                      opacity: [1, 1, 0],
                      scale: [1, 1, 0.85],
                    }}
                    transition={{
                      x: { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: flight.delayMs / 1000 },
                      y: { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: flight.delayMs / 1000 },
                      opacity: { duration: 0.9, times: [0, 0.75, 1], ease: [0.16, 1, 0.3, 1], delay: flight.delayMs / 1000 },
                      scale: { duration: 0.9, times: [0, 0.75, 1], ease: [0.16, 1, 0.3, 1], delay: flight.delayMs / 1000 },
                    }}
                  >
                    {/* Mini bento card matching the source skill tile */}
                    <div className="size-11 rounded-lg border border-[rgb(127,0,113)]/40 bg-[rgb(127,0,113)]/[0.12] backdrop-blur-sm grid place-items-center">
                      <SkillGlyph label={cloneLayer.skill} className="size-5 text-[rgb(180,100,160)]" />
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Projects grid (layout reorder + fade non-matching) */}
        <motion.div
          ref={gridRef}
          layout
          transition={{ layout: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr"
        >
          {projects.map((project) => {
            const matches = !activeSkill || project.techStack.includes(activeSkill)

            return (
              <motion.div
                key={project.id}
                layout
                initial={false}
                className="h-full"
                animate={{
                  opacity: matches ? 1 : 0,
                }}
                transition={{
                  layout: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
                  opacity: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                }}
                style={{
                  pointerEvents: matches ? "auto" : "none",
                }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  githubUrl={project.githubUrl}
                  liveUrl={project.demoUrl}
                  image={project.image}
                  status={project.status}
                  isComingSoon={project.isComingSoon}
                  activeSkill={activeSkill}
                  renderTagIcon={renderProjectTagIcon}
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
