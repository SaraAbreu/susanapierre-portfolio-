import React, { useState } from 'react';
import { Header } from '../components/Header';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Home() {
  const [showCard, setShowCard] = useState(false);
  return (
    <div className="bg-obsidian min-h-screen text-antique-silver selection:bg-old-gold selection:text-obsidian font-sans overflow-x-hidden">
      <Header />

      <main className="max-w-6xl mx-auto px-4 md:px-6 pt-1 md:pt-12 pb-6 md:pb-12">

        {/* 00_HERO: Estilo Consola de Operaciones con Datos en Esquinas */}
        <section className="relative min-h-[50vh] md:min-h-[75vh] flex flex-col justify-center items-center text-center mb-4 md:mb-24 overflow-hidden pt-4 md:pt-10 bg-[#050505]">
          {/* CAPA 0: Fondo imagen hero */}
          <div className="absolute inset-0 z-0 w-full h-full opacity-40 pointer-events-none flex">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover" style={{objectFit: 'cover'}}>
              <source src="/fondohero.mp4" type="video/mp4" />
            </video>
          </div>

          {/* CAPA 1: SCANLINES (Efecto Monitor CRT) */}
          <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]"></div>

          {/* CAPA 2: MICRO-DATOS EN ESQUINAS (Recomendación) */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none font-mono text-[7px] md:text-[9px] text-old-gold p-6 flex justify-between items-start">
            {/* Esquina Superior Izquierda */}
            <div className="flex flex-col gap-1 text-left">
              <p className="animate-pulse">● SYS_LIVE_CONNECT</p>
              <p>IP_TRACE: 192.168.1.XX</p>
              <p>MEM_USAGE: 24.5%</p>
              <div className="h-px w-8 bg-old-gold/30 my-1"></div>
              <p className="text-[6px] opacity-50">0x445A_INIT_CORE</p>
            </div>
            {/* Esquina Superior Derecha */}
            <div className="flex flex-col gap-1 text-right">
              <p>LATENCY: 0.002ms</p>
              <p>ENCRYPT: AES_256_ACTIVE</p>
              <p>SIGNAL: STRONG</p>
              <div className="h-px w-8 bg-old-gold/30 my-1 ml-auto"></div>
              <p className="text-[6px] opacity-50">SEC_LAYER_v4.2</p>
            </div>
          </div>

          {/* CAPA 3: RESPLANDOR (GLOW) CENTRAL */}
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(178,148,91,0.08)_0%,transparent_70%)] pointer-events-none"></div>

          {/* CONTENEDOR DE TEXTO: Mantenemos el gap-8 y md:gap-12 para el espacio entre textos */}
          <div className="relative z-10 flex flex-col items-center w-full gap-8 md:gap-12">

            {/* BLOQUE 1: BADGE / PROMPT */}
            <div className="inline-block px-3 py-1 border border-emerald-500/30 bg-emerald-500/5 backdrop-blur-sm rounded-sm">
              <span className="text-emerald-500 font-mono text-[9px] md:text-[10px] tracking-[0.4em] uppercase flex items-center gap-3">
                <span className="animate-pulse">●</span>
                SUSANA_PIERRE_OS_v2.6.60
              </span>
            </div>

            {/* BLOQUE 2: TÍTULO Y SUBTÍTULO */}
            <div className="relative group w-full px-2">
              <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-9xl font-black text-white leading-[1.1] tracking-tighter uppercase">
                SISTEMA <br />
                <span className="text-old-gold drop-shadow-[0_0_20px_rgba(178,148,91,0.4)]">
                  INGENIERÍA
                </span>
              </h1>
              <p className="mt-8 text-white/30 font-mono text-[8px] md:text-[10px] tracking-[0.5em] uppercase">
                {`>> ROOT_ACCESS_GRANTED // SESSION_ID: 8892-001`}
              </p>
            </div>

            {/* BLOQUE 3: STATUS / PROTOCOLO */}
            <div className="flex flex-col items-center gap-4 w-full px-4">
              <div className="flex items-center gap-3">
                <span className="text-emerald-500 font-mono text-xl animate-pulse font-bold">&gt;_</span>
                <p className="text-emerald-400 font-mono text-[10px] md:text-base tracking-[0.3em] uppercase font-bold text-center leading-tight">
                  ESTABLECIENDO_CONEXIÓN_IA...
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LÍNEA DIVISORA TÉCNICA: Diferencia el Hero de la siguiente sección */}
        <div className="relative w-full flex items-center justify-center my-6 md:my-12 opacity-40">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-old-gold to-transparent"></div>
          <div className="absolute px-4 bg-obsidian flex items-center gap-2">
            <span className="text-[7px] md:text-[9px] font-mono text-old-gold uppercase tracking-[0.4em]">Section_Separator</span>
          </div>
        </div>
        {/* 01_MANIFIESTO: Centrado Armonioso */}
        <section className="mb-20 md:mb-32 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-2">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6 opacity-60">
              <span className="text-old-gold font-mono text-lg font-bold">[01]</span>
              <div className="h-[1px] w-12 bg-old-gold/40"></div>
              <span className="tracking-[0.4em] uppercase text-[10px] font-mono font-bold text-white">Sobre_Mí</span>
            </div>
            <h2 className="text-2xl md:text-6xl font-bold text-white mb-6 tracking-tighter leading-tight">
              Arquitecturas de <span className="text-old-gold">Automatización</span>
            </h2>
            <p className="text-base md:text-2xl leading-relaxed text-antique-silver/90 border-l-2 lg:border-l-4 border-old-gold/30 pl-4 lg:pl-8 italic mx-auto lg:mx-0 max-w-[90%]">
              "Diseño sistemas resilientes donde la IA y la automatización convergen."
            </p>
          </div>
          <div className="bg-black/40 border border-old-gold/20 p-6 md:p-8 rounded-sm font-mono text-[12px] md:text-[14px] shadow-2xl backdrop-blur-sm">
            <p className="text-old-gold mb-4 text-[10px] opacity-70">// PERFIL_SISTEMA_CARGADO</p>
            <div className="space-y-3 text-antique-silver/80 text-left">
              <p>&gt; Especialista en flujos de IA Generativa.</p>
              <p>&gt; Experta en arquitectura de datos.</p>
              <div className="mt-6 pt-4 border-t border-white/5 text-emerald-500 animate-pulse font-bold tracking-widest uppercase text-[10px] text-center lg:text-left">
                Estado: Disponible para proyectos
              </div>
            </div>
          </div>
        </section>
        {/* LÍNEA DIVISORA TÉCNICA: Diferencia el Hero de la siguiente sección */}
        <div className="relative w-full flex items-center justify-center my-6 md:my-12 opacity-40">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-old-gold to-transparent"></div>
          <div className="absolute px-4 bg-obsidian flex items-center gap-2">
            <span className="text-[7px] md:text-[9px] font-mono text-old-gold uppercase tracking-[0.4em]">Section_Separator</span>
          </div>
        </div>
        {/* 02_PROYECTOS: MONITOR TÁCTICO (SOLUCIÓN MÓVIL) */}
        <section id="proyectos" className="mb-24 md:mb-48 relative flex flex-col items-center">
          <div className="flex flex-col items-center mb-10 text-center px-4">
            <div className="flex items-center gap-4 opacity-60 mb-4">
              <span className="text-emerald-500 font-mono text-lg font-bold">[02]</span>
              <span className="tracking-[0.2em] uppercase text-[10px] font-mono font-bold text-white">Proyectos_Seleccionados</span>
            </div>
          </div>

          <div className="relative w-full max-w-[1100px] bg-[#0A0A0A] rounded-[25px] md:rounded-[35px] p-2 md:p-5 border border-emerald-500/20 shadow-2xl flex flex-col items-center">
            {/* Monitor: Cambia a Vertical en móvil para legibilidad */}
            <div className="relative aspect-[3/4] md:aspect-[16/10] w-full bg-[#020202] rounded-[20px] md:rounded-[25px] overflow-hidden border-2 md:border-[12px] border-[#121212] flex items-center">

              <div className="absolute inset-0 z-0 opacity-40">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover mix-blend-lighten">
                  <source src="/fondo_monitor.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Contenedor de Proyectos: Snap Scroll Lateral */}
              <div className="relative z-20 w-full h-full flex items-center gap-6 px-6 md:px-12 overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth">
                {projects.map((project, idx) => (
                  <div key={idx} className="w-[80vw] md:w-[280px] h-[75%] md:h-[340px] flex-shrink-0 snap-center">
                    <div className="h-full bg-black/90 border border-old-gold/20 rounded-xl p-6 flex flex-col justify-between backdrop-blur-md">
                      <div>
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-[9px] font-mono text-old-gold/40 tracking-widest uppercase">Module_0{idx + 1}</span>
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                        </div>
                        <h4 className="text-white text-base md:text-base font-bold uppercase mb-3 italic tracking-tight">{project.title}</h4>
                        <p className="text-[11px] md:text-[11px] text-antique-silver/60 italic leading-relaxed line-clamp-6">
                          {project.description}
                        </p>
                      </div>
                      <div className="text-[9px] md:text-[10px] text-old-gold/60 font-mono border border-old-gold/20 py-2 text-center mt-4 uppercase tracking-[0.2em] font-bold">
                        {project.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Soporte Monitor (Oculto en móvil para ganar espacio vertical) */}
          <div className="hidden md:block w-40 h-8 bg-gradient-to-b from-[#111] to-black border-x border-white/5" />
          <div className="hidden md:block w-64 h-2 bg-[#0A0A0A] rounded-t-2xl border-t border-emerald-500/30" />
        </section>
       {/* LÍNEA DIVISORA TÉCNICA: Diferencia el Hero de la siguiente sección */}
        <div className="relative w-full flex items-center justify-center my-6 md:my-12 opacity-40">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-old-gold to-transparent"></div>
          <div className="absolute px-4 bg-obsidian flex items-center gap-2">
            <span className="text-[7px] md:text-[9px] font-mono text-old-gold uppercase tracking-[0.4em]">Section_Separator</span>
          </div>
        </div>
        {/* Sección de Flujo Lógico: Arquitectura Minimalista Interactiva */}
        <section className="mb-12 md:mb-48 relative flex flex-col items-center group/panel px-1 xs:px-2">
          {/* Fondo de Micro-puntos (Dot Matrix) más elegante que el Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

          <div className="relative z-10 flex flex-col items-center w-full max-w-6xl px-1 md:px-6">

            {/* Header Minimalista */}
            <div className="flex flex-col items-center mb-8 md:mb-20">
              <span className="text-old-gold font-mono text-[9px] tracking-[0.6em] uppercase opacity-40 mb-3">System_Architecture_Blueprint</span>
              <h3 className="text-white text-xl font-light tracking-[0.2em] uppercase">
                Flujo Lógico <span className="text-old-gold/80 italic">Operativo</span>
              </h3>
              <div className="w-12 h-[1px] bg-old-gold/30 mt-4"></div>
            </div>

            {/* Contenedor Principal de Nodos */}
            <div className="flex flex-col lg:flex-row items-stretch justify-center w-full gap-2 md:gap-0">

              {/* NODO 01: ENTRADA */}
              <div className="relative flex flex-col items-center group/node">
                <div className="border border-old-gold/80 px-4 py-6 bg-black/80 backdrop-blur-xl min-w-[180px] md:min-w-[220px] h-[110px] md:h-[140px] text-center rounded-xl shadow-[0_0_40px_10px_rgba(178,148,91,0.12)] flex flex-col justify-center transition-all duration-500 group-hover/node:border-old-gold">
                  <div className="text-[14px] text-old-gold/60 font-mono mb-4 tracking-widest uppercase animate-pulse">Step_01</div>
                  <span className="text-old-gold font-mono text-[18px] font-bold uppercase tracking-[0.2em]">Entrada_De_Datos</span>
                </div>
              </div>
              {/* Flecha móvil */}
              <div className="flex lg:hidden items-center justify-center w-full h-10 my-2">
                <span className="text-old-gold text-2xl font-bold">↓</span>
              </div>

              {/* CONECTOR ELEGANTE 01 */}
              <div className="hidden lg:flex items-center justify-center w-12 h-[160px] relative">
                <span className="text-old-gold text-2xl font-bold mx-2 self-center">➔</span>
              </div>

              {/* NODO 02: CEREBRO (EL NÚCLEO) */}
              <div className="relative flex flex-col items-center group/node">
                <div className="border border-old-gold/40 px-8 py-10 bg-black/60 backdrop-blur-lg min-w-[240px] h-[160px] text-center rounded-xl shadow-[0_0_30px_5px_rgba(178,148,91,0.08)] flex flex-col justify-center transition-all duration-500 group-hover/node:border-old-gold/80">
                  <div className="text-[14px] text-old-gold/60 font-mono mb-4 tracking-widest uppercase animate-pulse">Processing_Core</div>
                  <span className="text-old-gold font-mono text-[18px] font-bold uppercase tracking-[0.2em]">Cerebro_IA (LLM)</span>
                </div>
              </div>
              {/* Flecha móvil */}
              <div className="flex lg:hidden items-center justify-center w-full h-10 my-2">
                <span className="text-old-gold text-2xl font-bold">↓</span>
              </div>

              {/* CONECTOR ELEGANTE 02 */}
              <div className="hidden lg:flex items-center justify-center w-12 h-[160px] relative">
                <span className="text-old-gold text-2xl font-bold mx-2 self-center">➔</span>
              </div>

              {/* NODO 03: EJECUCIÓN */}
              <div className="relative flex flex-col items-center group/node">
                <div className="border border-old-gold/40 px-8 py-10 bg-black/60 backdrop-blur-lg min-w-[240px] h-[160px] text-center rounded-xl shadow-[0_0_30px_5px_rgba(178,148,91,0.08)] flex flex-col justify-center transition-all duration-500 group-hover/node:border-old-gold/80">
                  <div className="text-[14px] text-old-gold/60 font-mono mb-4 tracking-widest uppercase animate-pulse">Step_03</div>
                  <span className="text-old-gold font-mono text-[18px] font-bold uppercase tracking-[0.2em]">Ejecución_Autónoma</span>
                </div>
              </div>
              {/* Flecha móvil */}
              <div className="flex lg:hidden items-center justify-center w-full h-10 my-2">
                <span className="text-old-gold text-2xl font-bold">↓</span>
              </div>

              {/* CONECTOR ELEGANTE 03 */}
              <div className="hidden lg:flex items-center justify-center w-12 h-[160px] relative">
                <span className="text-old-gold text-2xl font-bold mx-2 self-center">➔</span>
              </div>

              {/* NODO 04: VALOR */}
              <div className="relative flex flex-col items-center group/node">
                <div className="border border-old-gold/40 px-8 py-10 bg-black/60 backdrop-blur-lg min-w-[240px] h-[160px] text-center rounded-xl shadow-[0_0_30px_5px_rgba(178,148,91,0.08)] flex flex-col justify-center transition-all duration-500 group-hover/node:border-old-gold/80">
                  <div className="text-[14px] text-old-gold/60 font-mono mb-4 tracking-widest uppercase animate-pulse">Outcome</div>
                  <span className="text-old-gold font-mono text-[18px] font-bold uppercase tracking-[0.2em]">Valor_De_Negocio</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* LÍNEA DIVISORA TÉCNICA: Diferencia el Hero de la siguiente sección */}
        <div className="relative w-full flex items-center justify-center my-6 md:my-12 opacity-40">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-old-gold to-transparent"></div>
          <div className="absolute px-4 bg-obsidian flex items-center gap-2">
            <span className="text-[7px] md:text-[9px] font-mono text-old-gold uppercase tracking-[0.4em]">Section_Separator</span>
          </div>
        </div>
        {/* [04] PANEL TÉCNICO: Especialización por Ecosistemas */}
        <section className="mb-20 md:mb-32 px-1 xs:px-2">
          <div className="flex items-center gap-4 mb-12 opacity-60 group">
            <span className="text-old-gold font-mono text-xl font-bold">[04]</span>
            <div className="h-[1px] w-12 bg-old-gold/40 group-hover:w-20 transition-all duration-500"></div>
            <span className="tracking-[0.4em] uppercase text-xs font-mono font-bold text-white">Panel_Técnico_Lenguaje</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                title: "Motor_IA",
                icon: (
                  <svg className="w-6 h-6 text-old-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                desc: "// Modelos, pipelines y MLOps. Creación e integración.",
                techs: ['Python', 'R', 'C++', 'Java']
              },
              {
                title: "Backend",
                icon: (
                  <svg className="w-6 h-6 text-old-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                ),
                desc: "// APIs y microservicios. Lógica de negocio orquestada.",
                techs: ['Node.js', 'Java', 'C#', 'Python', 'PHP']
              },
              {
                title: "DevOps",
                icon: (
                  <svg className="w-6 h-6 text-old-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                ),
                desc: "// DevOps y SRE. Gestión de sistemas e IaC avanzada.",
                techs: ['YAML', 'Bash / Shell', 'PowerShell', 'Python']
              },
              {
                title: "RPA",
                icon: (
                  <svg className="w-6 h-6 text-old-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                ),
                desc: "// RPA y bots. Automatización directa de tareas complejas.",
                techs: ['Python', 'JavaScript', 'Java', 'C#', 'PowerShell']
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative bg-black/40 border border-old-gold/20 p-10 rounded-sm hover:border-old-gold/60 transition-all duration-500 group overflow-hidden"
              >
                {/* Glow de fondo */}
                <div className="absolute -inset-x-20 -inset-y-20 bg-old-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-2 bg-old-gold/10 rounded-sm group-hover:bg-old-gold/20 transition-colors">
                      {item.icon}
                    </div>
                    {/* Reducción sutil de fuente para títulos largos como Infraestructura */}
                    <h4 className="text-white text-xs sm:text-sm font-bold tracking-[0.2em] uppercase group-hover:text-old-gold transition-colors truncate">
                      {item.title}
                    </h4>
                  </div>

                  <p className="text-[10px] text-antique-silver/40 mb-8 italic leading-relaxed font-mono min-h-[48px] border-l border-old-gold/30 pl-4 pr-2">
                    {item.desc}
                  </p>

                  <ul className="space-y-4">
                    {item.techs.map((tech) => (
                      <li key={tech} className="flex justify-between items-center text-xs font-mono text-antique-silver/90 hover:text-white transition-colors pr-2">
                        <span className="flex items-center gap-2">
                          <span className="text-old-gold opacity-50 group-hover:opacity-100 transition-opacity">→</span>
                          {tech}
                        </span>
                        <span className="flex h-2 w-2 relative flex-shrink-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-20"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
       {/* LÍNEA DIVISORA TÉCNICA: Diferencia el Hero de la siguiente sección */}
        <div className="relative w-full flex items-center justify-center my-6 md:my-12 opacity-40">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-old-gold to-transparent"></div>
          <div className="absolute px-4 bg-obsidian flex items-center gap-2">
            <span className="text-[7px] md:text-[9px] font-mono text-old-gold uppercase tracking-[0.4em]">Section_Separator</span>
          </div>
        </div>
        {/* Sección de Estándares de Calidad - Enfocada al Usuario */}
        <section className="mb-20 md:mb-32 px-1 xs:px-2">
          <div className="flex items-center gap-4 mb-12 opacity-60">
            <span className="text-old-gold font-mono text-xl font-bold">[05]</span>
            <div className="h-[1px] w-12 bg-old-gold/40"></div>
            <span className="tracking-[0.4em] uppercase text-xs font-mono font-bold text-white">Estándares_Industriales</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              {
                title: 'PRIVACIDAD',
                label: 'DATA_PRIVACY',
                desc: 'Cumplimiento estricto de RGPD. Tus datos y los de tus clientes están siempre protegidos y encriptados.',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                )
              },
              {
                title: 'ESCALABILIDAD',
                label: 'SCALABILITY',
                desc: 'Sistemas diseñados para crecer. Tu infraestructura no se detendrá aunque el volumen de trabajo se multiplique.',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                )
              },
              {
                title: 'RENDIMIENTO',
                label: 'LATENCY_ZERO',
                desc: 'Optimización de latencia para respuestas instantáneas. Sin esperas, sin cuellos de botella.',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                )
              },
              {
                title: 'TRAZABILIDAD',
                label: 'ISO_STANDARDS',
                desc: 'Código limpio y documentado bajo estándares internacionales. Fácil de mantener y evolucionar.',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                )
              }
            ].map((badge, i) => (
              <div key={i} className="bg-black/20 border border-white/5 p-10 flex flex-col items-center text-center group hover:border-old-gold/30 transition-all duration-300">
                {/* Icono dinámico según el objeto */}
                <div className="w-16 h-16 mb-8 text-old-gold opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                  {badge.icon}
                </div>

                <span className="text-old-gold font-mono text-[10px] tracking-[0.3em] mb-2 uppercase opacity-50">{badge.label}</span>
                <h4 className="text-white text-lg font-bold tracking-widest mb-4">{badge.title}</h4>

                <p className="text-sm leading-relaxed text-antique-silver/70 font-medium italic">
                  "{badge.desc}"
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* LÍNEA DIVISORA TÉCNICA: Diferencia el Hero de la siguiente sección */}
        <div className="relative w-full flex items-center justify-center my-6 md:my-12 opacity-40">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-old-gold to-transparent"></div>
          <div className="absolute px-4 bg-obsidian flex items-center gap-2">
            <span className="text-[7px] md:text-[9px] font-mono text-old-gold uppercase tracking-[0.4em]">Section_Separator</span>
          </div>
        </div>
        {/* 05_FORMACIÓN: Trayectoria Académica */}
        <section className="mb-20 md:mb-32 px-1 xs:px-2">
          <div className="flex items-center gap-4 mb-10 opacity-60 group">
            <span className="text-old-gold font-mono text-lg font-bold">[06]</span>
            <div className="h-[1px] w-12 bg-old-gold/40 group-hover:w-20 transition-all duration-500"></div>
            <span className="tracking-[0.4em] uppercase text-xs font-mono font-bold text-white">Historial_Académico</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
            {[
              { centro: "Reboot Academy", curso: "Especialista en Inteligencia Artificial", h: "-" },
              { centro: "FAUCA", curso: "Actividades de Gestión Administrativa", h: "-" },
              { centro: "ICADEPRO", curso: "Programación Web con .NET", h: "-" },
              { centro: "Formación Online", curso: "Ciberseguridad", h: "-" },
              { centro: "Big Data", curso: "Análisis y Gestión de Datos Masivos", h: "-" }
            ].map((edu, i) => (
              <div key={i} className="border border-white/5 p-8 flex justify-between items-center bg-black/20 group hover:border-old-gold/30 transition-all">
                <div>
                  <h4 className="text-white text-lg font-bold mb-1 tracking-tight">{edu.curso}</h4>
                  <p className="text-xs text-antique-silver/40 font-mono uppercase tracking-[0.2em]">{edu.centro}</p>
                </div>
                <div className="text-old-gold font-mono text-2xl font-light">{edu.h}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER: Terminal de Contacto con Fondo Neural */}
      <footer className="w-full relative py-20 md:py-32 border-t border-white/5 text-center px-2 md:px-6 overflow-hidden group">

        {/* CAPA DE FONDO: Imagen de Neuronas */}
        <div className="absolute inset-0 z-0">
          <img
            src="/footer.png"
            alt="IA Neural Network"
            className="w-full h-full object-cover opacity-80 mix-blend-normal transition-transform duration-1000 group-hover:scale-110"
          />
        </div>

        {/* CONTENIDO DEL FOOTER */}
        <div className="relative z-20 max-w-4xl mx-auto">
          <div className="font-mono text-lg mb-12">
            <span className="text-old-gold block mb-4 animate-pulse uppercase tracking-[0.4em] font-bold">
              &gt; Estado: Sistema_Listo
            </span>
            <span className="text-antique-silver/60 italic text-sm md:text-base">
              Esperando parámetros de colaboración...
              <span className="inline-block w-2 h-5 bg-old-gold ml-2 align-middle shadow-[0_0_8px_#B2945B]" />
            </span>
          </div>

          <div className="flex flex-wrap gap-8 justify-center">
            <button
              onClick={() => setShowCard(true)}
              className="relative overflow-hidden border-2 border-old-gold/40 text-old-gold font-mono text-sm px-12 py-5 transition-all duration-500 hover:border-old-gold hover:shadow-[0_0_20px_rgba(178,148,91,0.3)] font-bold tracking-[0.3em] group/btn"
            >
              <span className="relative z-10">[ INICIAR_CONTACTO ]</span>
              {/* Efecto de barrido al pasar el ratón */}
              <div className="absolute inset-0 bg-old-gold translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-300 opacity-10" />
            </button>
          </div>

          {/* Tarjeta de presentación modal (Mantiene tu lógica actual) */}
          {showCard && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
              <div className="bg-[#050505] border-2 border-old-gold/50 rounded-xl shadow-[0_0_50px_rgba(178,148,91,0.2)] p-0 flex flex-col md:flex-row items-center relative min-w-[320px] max-w-[900px] overflow-hidden">
                <button
                  onClick={() => setShowCard(false)}
                  className="absolute top-4 right-4 text-old-gold/50 text-3xl font-light hover:text-white transition-colors z-30"
                >
                  ×
                </button>

                {/* Foto a la izquierda con efecto técnico */}
                <div className="flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-old-gold/20 to-black w-full md:w-72 h-56 md:h-96 p-4 md:p-8 relative">
                  <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                  <img
                    src="/susanapierre.jpeg"
                    alt="Susana Pierre"
                    className="w-32 h-32 md:w-52 md:h-52 rounded-full object-cover border-4 border-old-gold shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>

                {/* Info a la derecha */}
                <div className="flex-1 px-10 py-10 md:py-0 text-left">
                  <h3 className="text-white text-3xl font-black mb-1 tracking-tighter uppercase italic">Susana Pierre</h3>
                  <div className="text-old-gold font-mono text-xs mb-6 tracking-widest opacity-80 border-b border-old-gold/20 pb-4">
                    ESPECIALISTA_IA // ARQUITECTURA_DATOS
                  </div>

                  <div className="space-y-4 text-antique-silver/90 font-mono text-sm">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-old-gold/50 uppercase">Communication_Line</span>
                      <a href="tel:+34624513345" className="hover:text-old-gold transition-colors">+34 624 51 33 45</a>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-old-gold/50 uppercase">Secure_Mail</span>
                      <a href="mailto:syntexia.ai@gmail.com" className="hover:text-old-gold transition-colors">syntexia.ai@gmail.com</a>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-old-gold/50 uppercase">Neural_Network_Hub</span>
                      <a href="https://syntexia-solutions.es/" target="_blank" rel="noopener noreferrer" className="hover:text-old-gold transition-colors underline decoration-old-gold/30">syntexia-solutions.es</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-32 font-mono opacity-20 text-[10px] tracking-[0.5em] uppercase">
            © 2026 SUSANA_PIERRE_SYSTEMS // PROTOCOLO_FINALIZADO
          </div>
        </div>
      </footer>
    </div>
  );
}