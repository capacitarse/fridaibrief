import React from 'react';
import { Calendar, Mail, Clock, CheckCircle2, Lock, Sparkles, ExternalLink, BookOpen } from 'lucide-react';

interface NavbarProps {
  onOpenSubscribe: () => void;
  onOpenCalendar: () => void;
  onResetView: () => void;
  activeBriefId: number | null;
  releasedCount: number;
  totalCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSubscribe,
  onOpenCalendar,
  onResetView,
  activeBriefId,
  releasedCount,
  totalCount
}) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#9ba1a5]/20 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo CapacitaRSE & Brand Name */}
          <div className="flex items-center gap-4">
            <a 
              href="https://cursosderse.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center group transition-opacity hover:opacity-90"
              title="Ir al sitio oficial de CapacitaRSE"
            >
              <img 
                src="https://www.cursosderse.com/wp-content/uploads/2016/02/LogoCAP10_web.png" 
                alt="Logo CapacitaRSE" 
                className="h-10 sm:h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </a>
            
            <div className="h-8 w-px bg-[#9ba1a5]/30 hidden sm:block"></div>
            
            <button 
              onClick={onResetView}
              className="flex flex-col text-left group cursor-pointer focus:outline-hidden"
            >
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl sm:text-2xl text-[#09193a] tracking-tight">
                  Frid<span className="text-[#60afc1]">AI</span> Brief
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#60afc1]/15 text-[#09193a] border border-[#60afc1]/30">
                  by CapacitaRSE
                </span>
              </div>
              <span className="text-xs text-[#696484] font-medium hidden md:block">
                Sostenibilidad, ESG e Inteligencia Artificial
              </span>
            </button>
          </div>

          {/* Center Info / Navigation */}
          <div className="hidden lg:flex items-center gap-2 bg-[#f8fafc] px-3 py-1.5 rounded-full border border-[#9ba1a5]/20 text-xs text-[#09193a]">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-semibold text-[#09193a]">Cada Viernes AM</span>
            <span className="text-[#9ba1a5]">•</span>
            <span className="text-[#696484]">{releasedCount} de {totalCount} en parrilla</span>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* Add to Calendar Button */}
            <button
              onClick={onOpenCalendar}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#09193a] bg-[#60afc1]/20 hover:bg-[#60afc1]/35 rounded-lg border border-[#60afc1]/40 transition-all cursor-pointer shadow-xs"
            >
              <Calendar className="w-4 h-4 text-[#09193a]" />
              <span className="hidden sm:inline">Añadir al</span> Calendario
            </button>

            {/* Subscribe CTA Button */}
            <button
              onClick={onOpenSubscribe}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#e76f51] hover:bg-[#d55e40] rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer transform active:scale-95"
            >
              <Mail className="w-4 h-4 text-white" />
              <span>Suscribirse</span>
            </button>

          </div>

        </div>
      </div>
    </header>
  );
};
