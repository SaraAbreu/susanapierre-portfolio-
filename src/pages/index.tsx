import React, { useState } from 'react';
import { Header } from '../components/Header';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Home() {
  const [showCard, setShowCard] = useState(false);
  return (
    <div className="bg-obsidian min-h-screen text-antique-silver selection:bg-old-gold selection:text-obsidian font-sans">
      <Header />

      <main className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 py-8 md:py-12">

        {/* 00_HERO: Impacto Inicial Estilo Máquina */}
        <section className="relative min-h-[70vh] flex flex-col justify-center items-center text-center mb-12 md:mb-24 overflow-hidden">

          {/* Fondo de Cuadrícula 3D Mejorado */}
          <div className="absolute inset-0 z-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(to right, #B2945B 1px, transparent 1px), linear-gradient(to bottom, #B2945B 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
              perspective: '1200px',
              transform: 'rotateX(55deg) translateY(-120px)',
              maskImage: 'radial-gradient(circle at center, black 30%, transparent 90%)'
            }}
          />

          {/* Elementos Decorativos de Terminal Lateral */}
          <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden xl:block font-mono text-[8px] text-old-gold/20 text-left space-y-1">
            <p>LOG_STREAM: ACTIVE</p>
            <p>X_COORD: 14.02.26</p>
            <p>Y_COORD: 09.27.03</p>
            <p>BUFFER_OVR: NULL</p>
          </div>

          <div className="relative z-10 flex flex-col items-center">

            {/* Versión del Sistema */}
            <div className="inline-block px-4 py-1.5 mb-10 border border-old-gold/30 bg-black/40 backdrop-blur-sm rounded-sm">
              <span className="text-old-gold font-mono text-[10px] tracking-[0.6em] uppercase flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-old-gold rounded-full animate-pulse"></span>
                SISTEMA_OPERATIVO_V2.6.60
              </span>
            </div>

            {/* TÍTULO PRINCIPAL: IMPACTO MECÁNICO */}
            <div className="relative group mb-12">
              <h1 className="text-4xl sm:text-6xl md:text-9xl font-black text-white leading-none tracking-tighter uppercase">
                SISTEMA DE <br />
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-b from-old-gold to-old-gold/60">
                  INGENIERÍA
                  {/* Capas de Glitch sutiles */}
                  <span className="absolute top-0 left-0 w-full h-full text-white opacity-10 animate-pulse transition-transform group-hover:translate-x-1">INGENIERÍA</span>
                </span>
              </h1>

              <p className="mt-2 md:mt-4 text-antique-silver/40 font-mono text-[9px] sm:text-[10px] tracking-[0.5em] md:tracking-[0.8em] uppercase">
                Designed_by_Susana_Pierre // Interface_V1.0
              </p>
            </div>

            {/* SUBTÍTULO: PROTOCOLO ACTIVO */}
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-4">
                <span className="text-emerald-500 font-mono text-xl animate-pulse font-bold">&gt;</span>
                <p className="text-emerald-400 font-mono text-sm md:text-base tracking-[0.25em] uppercase font-bold">
                  ESTABLECIENDO_PROTOCOLOS_DE_AUTOMATIZACIÓN...
                </p>
                <span className="w-3 h-6 bg-emerald-500/80 animate-bounce"></span>
              </div>

              {/* Línea de Carga Industrial */}
              <div className="w-80 h-[3px] bg-white/5 border border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-old-gold to-transparent animate-[loading_2.5s_infinite]" />
              </div>
            </div>
          </div>
        </section>
        {/* 01_MANIFIESTO: Introducción Profesional */}
        <section className="mb-16 md:mb-32 mt-8 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8 opacity-60 group">
              <span className="text-old-gold font-mono text-lg font-bold">[01]</span>
              <div className="h-[1px] w-12 bg-old-gold/40 group-hover:w-20 transition-all duration-500"></div>
              <span className="tracking-[0.4em] uppercase text-xs font-mono font-bold text-white">Sobre_Mí</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tighter leading-tight">
              Arquitecturas de <span className="text-old-gold">Automatización</span> para la era de la IA.
            </h2>
            <p className="text-base sm:text-xl md:text-2xl leading-relaxed text-antique-silver/90 border-l-4 border-old-gold/30 pl-4 md:pl-8 italic">
              "Diseño sistemas resilientes donde la Inteligencia Artificial y la automatización convergen para eliminar ineficiencias operativas."
            </p>
          </div>
          <div className="bg-black/60 border-2 border-old-gold p-4 md:p-8 rounded-sm font-mono text-[13px] md:text-[14px] leading-relaxed shadow-2xl">
            <p className="text-old-gold mb-4">// PERFIL_DEL_SISTEMA_CARGADO</p>
            <div className="space-y-3 text-antique-silver/80">
              <p>&gt; Especialista en flujos de IA Generativa.</p>
              <p>&gt; Experta en arquitectura de datos y ciberseguridad.</p>
              <p>&gt; Enfoque en estabilidad y escalabilidad industrial.</p>
              <p className="mt-6 pt-4 border-t border-white/10 text-emerald-500 animate-pulse font-bold tracking-widest uppercase">
                Estado: Disponible para proyectos
              </p>
            </div>
          </div>
        </section>

        {/* 02_PROYECTOS: Consola con Fondo de Video y Resplandor Esmeralda */}
        <section id="proyectos" className="mb-20 md:mb-48 relative flex flex-col items-center">
          {/* Encabezado Terminal */}
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="flex items-center gap-4 opacity-60 mb-6 group">
              <span className="text-emerald-500 font-mono text-xl font-bold">[02]</span>
              <div className="h-[1px] w-12 bg-emerald-500/40 group-hover:w-20 transition-all duration-500"></div>
              <span className="tracking-[0.4em] uppercase text-xs font-mono font-bold text-white">
                Proyectos_Seleccionados
              </span>
            </div>
            <div className="max-w-3xl px-2 md:px-6 text-antique-silver/90 font-mono text-base md:text-lg lowercase">
              &gt; analizando_repositorios_activos...
            </div>
          </div>

          {/* HARDWARE: MONITOR */}
          <div className="relative mx-auto max-w-[1100px] w-full px-1 sm:px-4 flex flex-col items-center group/monitor">
            <div className="relative w-full bg-[#0A0A0A] rounded-[35px] p-5 border border-emerald-500/30 
                    shadow-[0_0_80px_-10px_rgba(16,185,129,0.4)] transition-all duration-700 
                    group-hover/monitor:shadow-[0_0_100px_-5px_rgba(16,185,129,0.6)]">

              <div className="relative aspect-[16/10] w-full bg-[#020202] rounded-[25px] overflow-hidden 
                      border-[12px] border-[#121212] shadow-[inset_0_0_120px_rgba(0,0,0,1)] 
                      flex items-center justify-center">

                {/* --- CAPA DE FONDO: VIDEO --- */}
                <div className="absolute inset-0 z-0">
                  <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60 mix-blend-lighten">
                    <source src="/fondo_monitor.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-emerald-900/10 to-black/60 z-1" />
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(16,185,129,0.05)_50%)] bg-[length:100%_4px] z-10 opacity-30" />
                </div>

                {/* Contenedor de Proyectos Reflejados */}
                <div className="relative z-20 w-full h-full flex items-center justify-center gap-4 sm:gap-6 px-2 sm:px-8 py-6 sm:py-12 overflow-x-auto no-scrollbar">
                  {[
                    {
                      title: "Chatbot_Ciudadano",
                      protocol: "NLP_NEURAL_ENGINE",
                      latency: "0.012ms",
                      status: "Listo_PARA_DESPLEGAR",
                      url: null,
                      description: "Agente conversacional inteligente con integración RAG. Optimizado para resolver consultas complejas y automatizar trámites en tiempo real mediante procesamiento de lenguaje natural."
                    },
                    {
                      title: "Email_System_Control",
                      protocol: "SMTP_ORCHESTRATOR",
                      latency: "0.850ms",
                      status: "BUILDING...",
                      url: null,
                      description: "Sistema de mensajería automatizada basado en disparadores de comportamiento. Gestión masiva de notificaciones críticas con filtrado inteligente y trazabilidad total de entrega."
                    },
                    {
                      title: "Smartbilling",
                      protocol: "FINTECH_PROTOCOL",
                      latency: "0.005ms",
                      status: "PROXIMO_LANZAMIENTO",
                      url: null,
                      description: "Motor de facturación electrónica y conciliación bancaria autónoma. Automatización de flujos financieros con validación fiscal íntegra y generación de informes de alta precisión."
                    }
                  ].map((project, idx) => (
                    <div key={idx} className="relative w-[200px] sm:w-[260px] h-[320px] sm:h-[360px] transition-all duration-500 hover:scale-[1.05] group/card flex-shrink-0">
                      <div className="absolute -inset-1 bg-emerald-500/10 blur-lg opacity-0 group-hover/card:opacity-100 transition-opacity" />
                      <div className="relative h-full w-full bg-black/85 backdrop-blur-md border border-old-gold/20 rounded-xl p-5 overflow-hidden shadow-2xl transition-all group-hover/card:border-old-gold/50 flex flex-col">

                        <div className="flex justify-between items-start mb-4">
                          <div className="p-1.5 bg-old-gold/10 rounded-lg border border-old-gold/20">
                            <svg className="w-4 h-4 text-old-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                            </svg>
                          </div>
                          <div className="flex h-2 w-2">
                            <span className={`animate-ping absolute inline-flex h-2 w-2 rounded-full ${project.status === 'Listo_PARA_DESPLEGAR' ? 'bg-emerald-400' : 'bg-amber-400'} opacity-75`}></span>
                            <span className={`relative inline-flex rounded-full h-2 w-2 ${project.status === 'Listo_PARA_DESPLEGAR' ? 'bg-emerald-500' : 'bg-amber-500'} shadow-[0_0_8px_currentColor]`}></span>
                          </div>
                        </div>

                        <h4 className="text-old-gold font-bold tracking-tighter text-base mb-2 uppercase italic">{project.title}</h4>

                        <div className="space-y-1.5 mb-4 font-mono text-[8px]">
                          <div className="flex justify-between border-b border-white/5 pb-1">
                            <span className="text-antique-silver/60 uppercase">Protocolo</span>
                            <span className="text-emerald-400 font-bold">{project.protocol}</span>
                          </div>
                          <div className="flex justify-between border-b border-white/5 pb-1">
                            <span className="text-antique-silver/60 uppercase">Latencia</span>
                            <span className="text-emerald-400 font-bold">{project.latency}</span>
                          </div>
                        </div>

                        <div className="mb-4 flex-grow">
                          <p className="text-[10px] text-white/80 leading-normal font-light italic border-l border-old-gold/20 pl-2">
                            {project.description}
                          </p>
                        </div>

                        {/* Botón de Estado / Acción */}
                        <div className="mt-4">
                          {project.url ? (
                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="block w-full py-2 bg-emerald-500/10 border border-emerald-500/20 text-[8px] text-emerald-400 font-mono uppercase tracking-[0.15em] hover:bg-emerald-500 hover:text-black text-center transition-all font-bold cursor-pointer">
                              [ VER_REPOSITORIO ]
                            </a>
                          ) : (
                            <div className="w-full py-2 bg-white/5 border border-white/10 text-[7px] text-white/40 font-mono uppercase tracking-[0.1em] text-center font-bold">
                              {project.status}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* HUD de Pantalla */}
                <div className="absolute top-8 left-10 font-mono text-[10px] text-emerald-500/60 flex gap-6 z-30">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981] animate-pulse" />
                    LIVE_NEURAL_FEED
                  </span>
                  <span className="opacity-40 tracking-[0.3em] hidden sm:inline">DECODING_VIDEO_STREAM...</span>
                </div>
              </div>
            </div>

            {/* Soporte */}
            <div className="w-40 h-8 bg-gradient-to-b from-[#111] to-black border-x border-white/5 shadow-2xl" />
            <div className="w-64 h-3 bg-[#0A0A0A] rounded-t-2xl border-t border-emerald-500/30 shadow-[0_-10px_40px_rgba(16,185,129,0.2)]" />
            <div className="w-48 h-2 bg-emerald-500/40 blur-md rounded-full mt-1 opacity-50" />
          </div>
        </section>

        {/* Sección de Flujo Lógico: Arquitectura Minimalista Interactiva */}
  <section className="mb-20 md:mb-48 relative flex flex-col items-center group/panel">
  {/* Fondo de Micro-puntos (Dot Matrix) más elegante que el Grid */}
  <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

  <div className="relative z-10 flex flex-col items-center w-full max-w-6xl px-2 md:px-6">
    
    {/* Header Minimalista */}
    <div className="flex flex-col items-center mb-10 md:mb-20">
       <span className="text-old-gold font-mono text-[9px] tracking-[0.6em] uppercase opacity-40 mb-3">System_Architecture_Blueprint</span>
       <h3 className="text-white text-xl font-light tracking-[0.2em] uppercase">
         Flujo Lógico <span className="text-old-gold/80 italic">Operativo</span>
       </h3>
       <div className="w-12 h-[1px] bg-old-gold/30 mt-4"></div>
    </div>

    {/* Contenedor Principal de Nodos */}
    <div className="flex flex-col lg:flex-row items-stretch justify-center w-full gap-4 md:gap-0">
      
      {/* NODO 01: ENTRADA */}
      <div className="relative flex flex-col items-center group/node">
        <div className="border border-white/5 px-4 md:px-8 py-6 md:py-10 bg-white/[0.02] backdrop-blur-sm min-w-[160px] md:min-w-[220px] text-center transition-all duration-500 group-hover/node:bg-white/[0.05] group-hover/node:border-white/20">
          <div className="text-[10px] text-white/20 font-mono mb-6 tracking-widest uppercase">Step_01</div>
          <span className="text-antique-silver font-mono text-[12px] uppercase tracking-[0.15em] block mb-2">Entrada_De_Datos</span>
          <div className="h-[1px] w-4 bg-white/10 mx-auto transition-all group-hover/node:w-12"></div>
        </div>
      </div>

      {/* CONECTOR ELEGANTE 01 */}
      <div className="flex items-center justify-center w-full lg:w-16 h-12 lg:h-auto relative">
        <div className="h-full lg:h-[1px] w-[1px] lg:w-full bg-gradient-to-b lg:bg-gradient-to-r from-white/5 via-old-gold/40 to-white/5 opacity-50"></div>
        <div className="absolute text-[8px] text-old-gold animate-pulse lg:rotate-0 rotate-90 tracking-tighter"></div>
      </div>

      {/* NODO 02: CEREBRO (EL NÚCLEO) */}
      <div className="relative flex flex-col items-center group/node">
        {/* Glow muy suave en el centro */}
        <div className="absolute -inset-2 bg-old-gold/5 blur-2xl opacity-0 group-hover/node:opacity-100 transition-opacity duration-700"></div>
        <div className="relative border border-old-gold/20 px-6 md:px-10 py-8 md:py-12 bg-black/40 backdrop-blur-md min-w-[180px] md:min-w-[260px] text-center shadow-[0_0_40px_-10px_rgba(178,148,91,0.05)] transition-all duration-500 group-hover/node:border-old-gold/50">
          <div className="text-[10px] text-old-gold/40 font-mono mb-6 tracking-widest uppercase animate-pulse">Processing_Core</div>
          <span className="text-old-gold font-mono text-[14px] font-bold uppercase tracking-[0.3em]">Cerebro_IA (LLM)</span>
        </div>
      </div>

      {/* CONECTOR ELEGANTE 02 */}
      <div className="flex items-center justify-center w-full lg:w-16 h-12 lg:h-auto relative">
        <div className="h-full lg:h-[1px] w-[1px] lg:w-full bg-gradient-to-b lg:bg-gradient-to-r from-white/5 via-old-gold/40 to-white/5 opacity-50"></div>
        <div className="absolute text-[8px] text-old-gold animate-pulse lg:rotate-0 rotate-90 tracking-tighter">➢</div>
      </div>

      {/* NODO 03: EJECUCIÓN */}
      <div className="relative flex flex-col items-center group/node">
        <div className="border border-white/5 px-4 md:px-8 py-6 md:py-10 bg-white/[0.02] backdrop-blur-sm min-w-[160px] md:min-w-[220px] text-center transition-all duration-500 group-hover/node:bg-white/[0.05] group-hover/node:border-white/20">
          <div className="text-[10px] text-white/20 font-mono mb-6 tracking-widest uppercase">Step_03</div>
          <span className="text-antique-silver font-mono text-[12px] uppercase tracking-[0.15em] block mb-2">Ejecución_Autónoma</span>
          <div className="h-[1px] w-4 bg-white/10 mx-auto transition-all group-hover/node:w-12"></div>
        </div>
      </div>

      {/* CONECTOR ELEGANTE 03 */}
      <div className="flex items-center justify-center w-full lg:w-20 h-12 lg:h-auto relative">
        <div className="h-full lg:h-[1px] w-[1px] lg:w-full bg-gradient-to-b lg:bg-gradient-to-r from-white/5 via-emerald-500/40 to-white/5 opacity-50"></div>
        <div className="absolute text-[8px] text-emerald-500 animate-pulse lg:rotate-0 rotate-90 tracking-tighter">➢</div>
      </div>

      {/* NODO 04: VALOR */}
      <div className="relative flex flex-col items-center group/node">
        <div className="relative border border-emerald-500/10 px-8 py-10 bg-emerald-500/[0.02] backdrop-blur-sm min-w-[220px] text-center transition-all duration-500 group-hover/node:bg-emerald-500/[0.05] group-hover/node:border-emerald-500/30">
          <div className="text-[10px] text-emerald-500/30 font-mono mb-6 tracking-widest uppercase">Outcome</div>
          <span className="text-emerald-500 font-mono text-[13px] font-bold uppercase tracking-[0.2em]">Valor_De_Negocio</span>
        </div>
      </div>

    </div>

    {/* Footer de sección con metadata técnica */}
    <div className="mt-20 flex gap-12 text-[9px] font-mono text-white/20 uppercase tracking-[0.4em]">
       <div className="flex items-center gap-2">
          <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
          Optimización_Activa
       </div>
       <div className="flex items-center gap-2">
          <span className="w-1 h-1 bg-old-gold rounded-full"></span>
          Latencia_Minimizada
       </div>
    </div>
  </div>
</section>
        {/* [04] PANEL TÉCNICO: Especialización por Ecosistemas */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12 opacity-60 group">
            <span className="text-old-gold font-mono text-xl font-bold">[04]</span>
            <div className="h-[1px] w-12 bg-old-gold/40 group-hover:w-20 transition-all duration-500"></div>
            <span className="tracking-[0.4em] uppercase text-xs font-mono font-bold text-white">Panel_Técnico_Lenguaje</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        {/* Sección de Estándares de Calidad - Enfocada al Usuario */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12 opacity-60">
            <span className="text-old-gold font-mono text-xl font-bold">[05]</span>
            <div className="h-[1px] w-12 bg-old-gold/40"></div>
            <span className="tracking-[0.4em] uppercase text-xs font-mono font-bold text-white">Estándares_Industriales</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        {/* 05_FORMACIÓN: Trayectoria Académica */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-10 opacity-60 group">
            <span className="text-old-gold font-mono text-lg font-bold">[06]</span>
            <div className="h-[1px] w-12 bg-old-gold/40 group-hover:w-20 transition-all duration-500"></div>
            <span className="tracking-[0.4em] uppercase text-xs font-mono font-bold text-white">Historial_Académico</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
      <footer className="w-full relative py-32 border-t border-white/5 text-center px-6 overflow-hidden group">

        {/* CAPA DE FONDO: Imagen de Neuronas */}
        <div className="absolute inset-0 z-0">
          <img
            src="\footer.png"
            alt="IA Neural Network"
            className="w-full h-full object-cover opacity-30 mix-blend-screen transition-transform duration-1000 group-hover:scale-110"
          />
          {/* Gradiente para fundir la imagen con el negro de la web */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
          <div className="absolute inset-0 bg-black/40 z-10" />
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
              <span className="relative z-10">[ INICIAR_PROTOCOLO_CONTACTO ]</span>
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
                <div className="flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-old-gold/20 to-black w-full md:w-72 h-72 md:h-96 p-8 relative">
                  <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                  <img
                    src="/susanapierre.jpeg"
                    alt="Susana Pierre"
                    className="w-44 h-44 md:w-52 md:h-52 rounded-full object-cover border-4 border-old-gold shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
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