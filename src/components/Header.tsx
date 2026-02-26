import React, { useState } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b border-white/10 bg-obsidian/95 backdrop-blur-md px-4 py-2 md:py-3 font-mono text-[10px] flex flex-row justify-between items-center sticky top-0 z-[100] w-full">
      
      {/* SECCIÓN IZQUIERDA: Identidad */}
      <div className="flex items-center gap-3 overflow-hidden shrink-0">
        <div className="flex items-center whitespace-nowrap">
          <span className="text-old-gold font-bold tracking-tighter">USER:</span>
          <span className="text-white ml-1.5 opacity-90 tracking-widest uppercase text-[9px] sm:text-[10px] max-w-[65px] xs:max-w-none truncate">
            S_Pierre
          </span>
        </div>
        <div className="flex items-center gap-1.5 border-l border-white/10 pl-3">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-500 font-bold tracking-widest text-[8px] hidden xs:block">ONLINE</span>
        </div>
      </div>

      {/* SECCIÓN DERECHA */}
      <div className="flex items-center">
        {/* Navegación Desktop */}
        <div className="hidden lg:flex gap-6 items-center">
          <a href="#proyectos" className="text-antique-silver hover:text-old-gold transition-colors tracking-[0.2em]">[ 01_PROJECTS ]</a>
          <a href="https://linkedin.com/in/susana-pierre/" target="_blank" rel="noopener noreferrer" className="text-antique-silver hover:text-old-gold transition-colors tracking-[0.2em]">[ 02_LINKEDIN ]</a>
          <a href="https://www.instagram.com/syntexia.ai/" target="_blank" rel="noopener noreferrer" className="bg-old-gold/10 text-old-gold px-3 py-1 border border-old-gold/30 hover:bg-old-gold transition-all font-bold uppercase tracking-[0.2em]">[ 03_INSTA ]</a>
        </div>

        {/* BOTÓN HAMBURGUESA: Z-INDEX 200 para que no lo tape la capa negra */}
        <button
          className="lg:hidden flex flex-col justify-center items-end gap-1.5 p-2 border border-old-gold/30 bg-old-gold/5 rounded-sm active:scale-95 transition-all z-[200] relative"
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block h-[2px] bg-old-gold transition-all duration-300 ${menuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
          <span className={`block w-6 h-[2px] bg-old-gold transition-all duration-200 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block h-[2px] bg-old-gold transition-all duration-300 ${menuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-4'}`}></span>
        </button>
      </div>

      {/* MENÚ MÓVIL: PANTALLA COMPLETA TOTALMENTE OPACA */}
      <div 
        className={`fixed inset-0 h-screen w-screen bg-[#000] z-[150] lg:hidden transition-transform duration-500 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Fondo imagen hero para el menú hamburguesa (más visible) */}
        <div className="absolute inset-0 w-full h-full opacity-60 pointer-events-none flex">
          <img src="/fondohero.png" alt="Fondo Menu" className="w-full h-full object-cover" />
        </div>
        {/* Decoración de textura encima de la imagen */}
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        {/* Contenido del Menú */}
        <div className="relative h-full w-full flex flex-col p-8 pt-32 shadow-2xl">
          
          {/* Header del Menú */}
          <div className="flex items-center gap-3 mb-12 border-b border-old-gold/20 pb-6">
            <span className="w-2 h-2 bg-old-gold rounded-full animate-pulse"></span>
            <span className="text-old-gold font-mono text-[11px] tracking-[0.5em] uppercase font-bold">
              Access_Granted_V2.6
            </span>
          </div>

          {/* Enlaces: Botones grandes para no fallar el click */}
          <nav className="flex flex-col gap-6">
            <a 
              href="#proyectos" 
              onClick={() => setMenuOpen(false)} 
              className="group flex flex-col gap-1 py-4"
            >
              <span className="text-old-gold/40 text-[9px] font-mono tracking-widest uppercase">01_Database</span>
              <span className="text-white text-2xl tracking-[0.2em] font-bold group-hover:text-old-gold transition-colors font-mono italic">PROJECTS</span>
            </a>

            <a 
              href="https://linkedin.com/in/susana-pierre/" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)} 
              className="group flex flex-col gap-1 py-4"
            >
              <span className="text-old-gold/40 text-[9px] font-mono tracking-widest uppercase">02_Network</span>
              <span className="text-white text-2xl tracking-[0.2em] font-bold group-hover:text-old-gold transition-colors font-mono italic">LINKEDIN</span>
            </a>
            
            <a 
              href="https://www.instagram.com/syntexia.ai/" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-6 w-full py-5 bg-old-gold text-black text-center text-sm font-bold tracking-[0.4em] uppercase hover:bg-white transition-all shadow-[0_0_20px_rgba(178,148,91,0.4)]"
            >
              [ OPEN_INSTAGRAM ]
            </a>
          </nav>

          {/* Metadata Inferior */}
          <div className="mt-auto border-t border-white/10 pt-8 flex flex-col gap-2 opacity-40 font-mono text-[9px] uppercase tracking-tighter text-antique-silver">
            <div className="flex justify-between">
              <span>Status:</span>
              <span className="text-emerald-500">Authenticated_Session</span>
            </div>
            <div className="flex justify-between" suppressHydrationWarning>
              <span>Timestamp:</span>
              <span>{new Date().getFullYear()}.02.26_NAV</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};