export function Footer() {
  return (
    <footer className="relative py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Jimmis J. Simanca. Todos los derechos reservados.
        </p>
        <p className="text-zinc-600 text-xs">
          Construido con{" "}
          <span className="text-[rgb(127,0,113)]">♥</span> y mucho café
        </p>
      </div>
    </footer>
  )
}
