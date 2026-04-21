import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { ChatWidget } from "@/components/chat-widget"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-zinc-950 overflow-hidden">
      {/* Subtle Radial Gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(127,0,113,0.08)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(127,0,113,0.06)_0%,transparent_70%)]" />
      </div>

      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
      <ChatWidget />
    </main>
  )
}
