export function Footer() {
  return (
    <footer className="bg-[#1a3a2a] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-xl font-semibold mb-3">Apartmány Albeř</h3>
            <p className="text-green-200 text-sm leading-relaxed">
              Turistický areál v srdci České Kanady.<br />
              Albeř, 378 33, Česká republika
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-green-300">Rychlé odkazy</h4>
            <ul className="space-y-2 text-sm text-green-200">
              <li><a href="#area" className="hover:text-[#c9882a] transition-colors">O areálu</a></li>
              <li><a href="#economics" className="hover:text-[#c9882a] transition-colors">Ekonomika</a></li>
              <li><a href="#gallery" className="hover:text-[#c9882a] transition-colors">Galerie</a></li>
              <li><a href="#contact" className="hover:text-[#c9882a] transition-colors">Kontakt</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-green-300">Kontakt</h4>
            <p className="text-sm text-green-200 leading-relaxed">
              Pro vážné zájemce.<br />
              <a href="#contact" className="text-[#c9882a] hover:underline">Napište nám →</a>
            </p>
          </div>
        </div>
        <div className="border-t border-green-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-green-400">
          <p>© 2026 MANASTAV spol. s.r.o. Všechna práva vyhrazena.</p>
          <p>Informace jsou důvěrné a určeny výhradně vážným zájemcům o koupi.</p>
        </div>
      </div>
    </footer>
  )
}
