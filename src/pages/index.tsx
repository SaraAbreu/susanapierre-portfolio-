import React, { useState } from 'react';
import { Header } from '../components/Header';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Home() {
  const [showCard, setShowCard] = useState(false);
  return (
    <div className="bg-obsidian min-h-screen text-antique-silver selection:bg-old-gold selection:text-obsidian font-sans">
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-12">
        
        {/* 01_MANIFIESTO: Introducción Profesional */}
        <section className="mb-32 mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8 opacity-60 group">
              <span className="text-old-gold font-mono text-lg font-bold">[01]</span>
              <div className="h-[1px] w-12 bg-old-gold/40 group-hover:w-20 transition-all duration-500"></div>
              <span className="tracking-[0.4em] uppercase text-xs font-mono font-bold text-white">Sobre_Mí</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter leading-tight">
              Arquitecturas de <span className="text-old-gold">Automatización</span> para la era de la IA.
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed text-antique-silver/90 border-l-4 border-old-gold/30 pl-8 italic">
              "Diseño sistemas resilientes donde la Inteligencia Artificial y la automatización convergen para eliminar ineficiencias operativas."
            </p>
          </div>
          <div className="bg-black/60 border-2 border-old-gold p-8 rounded-sm font-mono text-[14px] leading-relaxed shadow-2xl">
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
        <section id="proyectos" className="mb-48 relative flex flex-col items-center">
          {/* Encabezado Terminal */}
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="flex items-center gap-4 opacity-60 mb-6 group">
              <span className="text-emerald-500 font-mono text-xl font-bold">[02]</span>
              <div className="h-[1px] w-12 bg-emerald-500/40 group-hover:w-20 transition-all duration-500"></div>
              <span className="tracking-[0.4em] uppercase text-xs font-mono font-bold text-white">
                Proyectos_Seleccionados
              </span>
            </div>
            <div className="max-w-3xl px-6 text-antique-silver/90 font-mono text-lg lowercase">
              &gt; analizando_repositorios_activos...
            </div>
          </div>

          {/* HARDWARE: MONITOR */}
          <div className="relative mx-auto max-w-[1100px] w-full px-4 flex flex-col items-center group/monitor">

            {/* Chasis con Glow Verde Esmeralda */}
            <div className="relative w-full bg-[#0A0A0A] rounded-[35px] p-5 border border-emerald-500/30 
                    shadow-[0_0_80px_-10px_rgba(16,185,129,0.4)] transition-all duration-700 
                    group-hover/monitor:shadow-[0_0_100px_-5px_rgba(16,185,129,0.6)]">

              {/* Pantalla Negro Vinilo */}
              <div className="relative aspect-[16/10] w-full bg-[#020202] rounded-[25px] overflow-hidden 
                      border-[12px] border-[#121212] shadow-[inset_0_0_120px_rgba(0,0,0,1)] 
                      flex items-center justify-center">

                {/* --- CAPA DE FONDO: VIDEO MP4 --- */}
                <div className="absolute inset-0 z-0">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60 mix-blend-lighten"
                  >
                    <source src="/fondo_monitor.mp4" type="video/mp4" />
                  </video>

                  {/* Overlay de color para integrar el video con el verde esmeralda */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-emerald-900/10 to-black/60 z-1" />

                  {/* Nebulosa de profundidad central */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.15),transparent_70%)] z-2" />

                  {/* Capa de Escaneo CRT (Líneas horizontales) para efecto retro-tech */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(16,185,129,0.05)_50%)] bg-[length:100%_4px] z-10 opacity-30" />
                </div>

                {/* Contenedor de Proyectos */}
                <div className="relative z-20 w-full h-full flex items-center justify-center gap-8 px-12 py-16 overflow-x-auto no-scrollbar">
                  {projects.slice(0, 3).map((project) => (
                    <div key={project.id} className="relative w-[300px] h-[420px] transition-all duration-500 hover:scale-[1.05] group/card">

                      {/* Glow Esmeralda sutil de fondo */}
                      <div className="absolute -inset-2 bg-emerald-500/10 blur-xl opacity-0 group-hover/card:opacity-100 transition-opacity" />

                      {/* Card: Cuerpo Dorado / Detalles Verdes */}
                      <div className="relative h-full w-full bg-black/85 backdrop-blur-md border border-old-gold/30 rounded-xl p-7 overflow-hidden shadow-2xl transition-all group-hover/card:border-old-gold/60">

                        <div className="flex justify-between items-start mb-5">
                          {/* Icono Principal */}
                          <div className="p-2 bg-old-gold/10 rounded-lg border border-old-gold/20">
                            <svg className="w-5 h-5 text-old-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                            </svg>
                          </div>
                          {/* Status Live */}
                          <div className="flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_10px_#10b981]"></span>
                          </div>
                        </div>

                        {/* Título del Proyecto */}
                        <h4 className="text-old-gold font-bold tracking-tighter text-lg mb-3 uppercase italic">
                          {project.title || "SISTEMA_ASIGNADO"}
                        </h4>

                        {/* Métrica de Red (Visual) */}
                        <div className="space-y-2 mb-5 font-mono text-[9px]">
                          <div className="flex justify-between border-b border-white/5 pb-1">
                            <span className="text-antique-silver/60 uppercase">Protocolo</span>
                            <span className="text-emerald-400 font-bold">TCP_ENCRYPTED</span>
                          </div>
                          <div className="flex justify-between border-b border-white/5 pb-1">
                            <span className="text-antique-silver/60 uppercase">Latencia</span>
                            <span className="text-emerald-400 font-bold">0.042ms</span>
                          </div>
                        </div>

                        {/* BLOQUE DE DESCRIPCIÓN: Refinado para legibilidad */}
                        <div className="mb-8">
                          <p className="text-[11px] text-white/80 leading-relaxed font-light line-clamp-4 italic border-l-2 border-old-gold/20 pl-3">
                            {project.description || "Despliegue de arquitectura escalable optimizada para procesamiento de datos masivos y automatización de flujos críticos."}
                          </p>
                        </div>

                        {/* Acceso al Sistema */}
                        <div className="absolute bottom-7 left-7 right-7">
                          <button className="w-full py-2.5 bg-emerald-500/5 border border-emerald-500/30 text-[9px] text-emerald-400 font-mono uppercase tracking-[0.2em] hover:bg-emerald-500 hover:text-black transition-all font-bold">
                            [ EJECUTAR_PROTOCOLO ]
                          </button>
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

            {/* Soporte con Aura Verde */}
            <div className="w-40 h-8 bg-gradient-to-b from-[#111] to-black border-x border-white/5 shadow-2xl" />
            <div className="w-64 h-3 bg-[#0A0A0A] rounded-t-2xl border-t border-emerald-500/30 shadow-[0_-10px_40px_rgba(16,185,129,0.2)]" />
            <div className="w-48 h-2 bg-emerald-500/40 blur-md rounded-full mt-1 opacity-50" />
          </div>
        </section>


        {/* Sección de Flujo Lógico (Blueprint) - Versión en Español */}
        <section className="mb-32 flex flex-col items-center">
          
          <h3 className="text-old-gold text-xs tracking-[0.5em] mb-12 uppercase opacity-50 font-bold">Flujo_Arquitectura_Del_Sistema</h3>
          <div className="flex flex-col md:flex-row items-center gap-4 text-antique-silver/80 font-mono text-[12px] uppercase tracking-tighter">

            <div className="border border-white/10 px-6 py-4 bg-black/40">
              Entrada_De_Datos
            </div>

            <div className="text-old-gold animate-pulse">──▶</div>

            <div className="border border-old-gold/30 px-6 py-4 bg-old-gold/5 text-old-gold font-bold">
              Cerebro_IA (LLM)
            </div>

            <div className="text-old-gold animate-pulse">──▶</div>

            <div className="border border-white/10 px-6 py-4 bg-black/40">
              Ejecución_Autónoma
            </div>

            <div className="text-old-gold animate-pulse">──▶</div>

            <div className="border border-emerald-500/20 px-6 py-4 bg-emerald-500/10 text-emerald-500 font-bold">
              Valor_De_Negocio
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

      {/* FOOTER: Terminal de Contacto */}
      <footer className="w-full bg-black py-24 border-t border-white/5 text-center px-6">
        <div className="font-mono text-lg mb-12">
          <span className="text-old-gold block mb-4 animate-pulse uppercase tracking-widest">&gt; Estado: Sistema_Listo</span>
          <span className="text-antique-silver/60 italic">Esperando parámetros de colaboración...<span className="inline-block w-3 h-6 bg-old-gold ml-2 align-middle" /></span>
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          <button
            onClick={() => setShowCard(true)}
            className="border-2 border-old-gold/40 text-old-gold font-mono text-sm px-12 py-5 hover:bg-old-gold hover:text-obsidian transition-all font-bold tracking-widest"
          >
            [ INICIAR_PROTOCOLO_CONTACTO ]
          </button>
        </div>

        {/* Tarjeta de presentación modal */}
        {showCard && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="bg-black border-2 border-old-gold rounded-xl shadow-2xl p-0 flex flex-col md:flex-row items-center relative min-w-[320px] max-w-[95vw] overflow-hidden">
              <button
                onClick={() => setShowCard(false)}
                className="absolute top-3 right-3 text-old-gold text-2xl font-bold hover:text-white transition-colors z-20"
                aria-label="Cerrar"
              >
                ×
              </button>
              {/* Foto a la izquierda */}
              <div className="flex-shrink-0 flex items-center justify-center bg-gradient-to-b from-old-gold/10 to-black/60 md:rounded-l-xl w-full md:w-64 h-64 md:h-80 p-6 md:p-0">
                <img
                  src="/susanapierre.jpeg"
                  alt="Susana Pierre"
                  className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-old-gold shadow-lg"
                />
              </div>
              {/* Info a la derecha */}
              <div className="flex-1 flex flex-col justify-center items-center md:items-start px-8 py-8 md:py-0 bg-black/90 min-w-[220px]">
                <h3 className="text-white text-2xl font-bold mb-2 tracking-tight">Susana Pierre</h3>
                <div className="text-antique-silver/80 font-mono text-base mb-4 text-center md:text-left">
                  Especialista en IA Generativa<br/>
                  Arquitectura de Datos & Ciberseguridad
                </div>
                <div className="flex flex-col gap-3 text-antique-silver/90 font-mono text-[16px] w-full">
                  <span><span className="text-old-gold font-bold">Teléfono:</span> <a href="tel:+34624513345" className="hover:underline">+34 624 51 33 45</a></span>
                  <span><span className="text-old-gold font-bold">Mail:</span> <a href="mailto:syntexia.ai@gmail.com" className="hover:underline">syntexia.ai@gmail.com</a></span>
                  <span><span className="text-old-gold font-bold">Web:</span> <a href="https://syntexia-solutions.es/" target="_blank" rel="noopener noreferrer" className="hover:underline">syntexia-solutions.es</a></span>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="mt-32 font-mono opacity-20 text-[10px] tracking-[0.5em] uppercase">
          © 2026 SUSANA_PIERRE_SYSTEMS // TODOS_LOS_DERECHOS_RESERVADOS
        </div>
      </footer>
    </div>
  );
}