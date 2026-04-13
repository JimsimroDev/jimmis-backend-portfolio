import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { ChatWidget } from "@/components/chat-widget"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-zinc-950 overflow-hidden">
      {/* Radial Gradients in Corners */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(127,0,113,0.15)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(127,0,113,0.1)_0%,transparent_70%)]" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(127,0,113,0.08)_0%,transparent_70%)]" />
      </div>

      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <ChatWidget />
    </main>
  )
}
