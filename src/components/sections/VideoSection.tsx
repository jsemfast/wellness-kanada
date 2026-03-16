export function VideoSection() {
  return (
    <section className="py-20 px-6 bg-[#1a3a2a]">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[#f0b96a] text-sm font-semibold uppercase tracking-widest mb-3">Video</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-10 leading-tight">
          Podívejte se na areál vlastníma očima
        </h2>
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.youtube.com/embed/xK0d_CwWeBc"
            title="Apartmány Albeř — video areálu"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}
