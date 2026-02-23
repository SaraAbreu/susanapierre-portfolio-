import React from 'react';

interface Project {
  id: string;
  title: string;
  status: string;
  stack: string[];
  metrics: Record<string, string | number>;
  differentiator: string;
}

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = "" }) => {
  return (
    <div
      className={`
        relative w-[160px] h-[210px]
        flex flex-col justify-between
        p-3 rounded-md border border-antique-silver/20
        bg-black/85 group-hover:bg-black/95
        text-antique-silver group-hover:text-white
        transition-all duration-300 ease-in-out
        cursor-pointer
        hover:scale-110 hover:z-50 hover:border-old-gold 
        hover:shadow-[0_0_40px_rgba(178,148,91,0.25)]
        group
        overflow-visible
        hover:w-[260px] hover:h-auto hover:p-6
        transform
        ${className}
      `}
    >
      {/* Cabecera con Status */}
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-old-gold font-bold text-xs tracking-[0.2em] uppercase italic group-hover:text-white group-hover:text-sm transition-all">
          {project.title}
        </h3>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-deep-emerald animate-pulse"></span>
          <span className="text-[8px] text-deep-emerald tracking-widest uppercase"></span>
        </div>
      </div>
      {/* Métricas */}
      <div className="space-y-2 mb-2 flex-grow">
        {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
          <div key={key} className="border-l border-old-gold/30 pl-2">
            <p className="text-[8px] uppercase text-antique-silver/50 tracking-[0.2em] mb-1 group-hover:text-white transition-all">
              {key.replace('_', ' ')}
            </p>
            <p className="text-white font-mono text-xs leading-relaxed group-hover:text-lg transition-all">
              {value}
            </p>
          </div>
        ))}
      </div>
      {/* Diferenciador */}
      <div className="mt-auto pt-2 border-t border-white/5">
        <p className="text-[9px] leading-relaxed text-antique-silver/70 italic line-clamp-3 group-hover:text-white group-hover:text-[11px] transition-all">
          {project.differentiator}
        </p>
      </div>
      {/* Indicador de Hover */}
      <div className="absolute bottom-2 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-[8px] text-old-gold font-bold tracking-widest uppercase">
          [ Access_System_&gt; ]
        </span>
      </div>
    </div>
  )
}