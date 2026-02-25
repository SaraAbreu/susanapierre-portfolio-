export const Header = () => {
  return (
    <nav className="border-b border-white/10 bg-obsidian/80 backdrop-blur-md px-6 py-4 font-mono text-xs flex flex-wrap justify-between items-center sticky top-0 z-50">
      
      {/* Sección de Identidad de Sistema */}
      <div className="flex items-center gap-8">
        <div className="flex items-center">
          <span className="text-old-gold font-bold tracking-tighter">USER:</span> 
          <span className="text-white ml-2 opacity-90 tracking-widest uppercase">Susana_Pierre</span>
        </div>
        
        <div className="hidden lg:flex items-center border-l border-white/10 pl-8">
          <span className="text-old-gold font-bold tracking-tighter">LOC:</span> 
          <span className="text-antique-silver ml-2">SPAIN [40.41N]</span>
        </div>

        {/* Indicador de Estado con Pulso Real */}
        <div className="flex items-center gap-2 border-l border-white/10 pl-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-500 font-bold tracking-[0.2em] text-[10px]">SYSTEM_ONLINE</span>
        </div>
      </div>
      
      {/* Navegación - Letras más grandes y claras */}
      <div className="flex gap-6 items-center mt-4 md:mt-0">
        <a
          href="#proyectos"
          className="text-antique-silver hover:text-old-gold transition-colors tracking-[0.2em] font-medium"
        >
          [ 01_PROJECTS ]
        </a>
        <a 
          href="https://linkedin.com/in/susana-pierre/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-antique-silver hover:text-old-gold transition-colors tracking-[0.2em] font-medium"
        >
          [ 02_LINKEDIN ]
        </a>
        <a 
          href="https://www.instagram.com/syntexia.ai/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-old-gold/10 text-old-gold px-3 py-1 border border-old-gold/30 hover:bg-old-gold hover:text-obsidian transition-all tracking-[0.2em] font-bold"
        >
          [ 03_INSTAGRAM ]
        </a>
      </div>
    </nav>
  )
}