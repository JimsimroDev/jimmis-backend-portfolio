export function Footer() {
  const appVersion = process.env.NEXT_PUBLIC_APP_VERSION ?? "1.0.0"

  return (
    <footer className="relative py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Jimmis J. Simanca. Las marcas y logotipos mencionados son propiedad de sus respectivos dueños.
        </p>
        <div className="text-zinc-600 text-xs text-center md:text-right">
          <p>
            Construido con{" "}
            <span className="text-[rgb(127,0,113)]">♥</span> y mucho café
          </p>
          <p className="mt-1 text-zinc-500">Versión v{appVersion}</p>
        </div>
      </div>
    </footer>
  )
}
