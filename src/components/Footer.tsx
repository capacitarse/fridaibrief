import React from 'react';
import { Calendar, Mail, ExternalLink, ShieldCheck, Heart, Github, Users } from 'lucide-react';

interface FooterProps {
  onOpenSubscribe: () => void;
  onOpenCalendar: () => void;
  onOpenSubscribers?: () => void;
  isAdmin?: boolean;
  onToggleAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenSubscribe, 
  onOpenCalendar, 
  onOpenSubscribers,
  isAdmin = false,
  onToggleAdmin
}) => {
  return (
    <footer className="bg-[#09193a] text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand & Manifesto */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <a 
                href="https://cursosderse.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-xl inline-block"
              >
                <img 
                  src="https://www.cursosderse.com/wp-content/uploads/2016/02/LogoCAP10_web.png" 
                  alt="CapacitaRSE" 
                  className="h-9 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </a>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight">
                  Frid<span className="text-[#60afc1]">AI</span> Brief
                </span>
                <p className="text-xs text-slate-400">by CapacitaRSE</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Plataforma de divulgación técnica semanal creada por <strong>CapacitaRSE</strong>. Análisis de reportes corporativos, ingeniería de prompts y matrices en Excel formuladas para profesionales de sostenibilidad y ESG.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs pt-1">
              <button
                onClick={onOpenSubscribe}
                className="text-[#60afc1] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Suscribirse por E-mail</span>
              </button>
              <span className="text-slate-600">•</span>
              <button
                onClick={onOpenCalendar}
                className="text-slate-300 hover:text-white font-semibold flex items-center gap-1 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Sincronizar Calendario</span>
              </button>
              {isAdmin && onOpenSubscribers && (
                <>
                  <span className="text-slate-600">•</span>
                  <button
                    onClick={onOpenSubscribers}
                    className="text-[#e76f51] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <Users className="w-3.5 h-3.5" />
                    <span>Panel de Leads</span>
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Ecosystem Links */}
          <div className="md:col-span-7 space-y-4 text-xs">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Ecosistema CapacitaRSE
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a 
                href="https://cursosderse.com/cursos/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#60afc1] text-slate-300 hover:text-white flex items-center justify-between transition-all group cursor-pointer"
              >
                <div className="space-y-0.5">
                  <div className="font-bold text-white group-hover:text-[#60afc1] transition-colors">Oferta Educativa vigente</div>
                  <div className="text-[11px] text-slate-400">Diplomados y cursos de especialización ESG</div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#60afc1] group-hover:translate-x-0.5 transition-transform shrink-0" />
              </a>

              <a 
                href="https://www.cursosderse.com/in-company-2/servicios/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#60afc1] text-slate-300 hover:text-white flex items-center justify-between transition-all group cursor-pointer"
              >
                <div className="space-y-0.5">
                  <div className="font-bold text-white group-hover:text-[#60afc1] transition-colors">Servicios para Empresas</div>
                  <div className="text-[11px] text-slate-400">Capacitación in-company & consultoría metodológica</div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#60afc1] group-hover:translate-x-0.5 transition-transform shrink-0" />
              </a>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-slate-400 text-xs">
              <a 
                href="https://cursosderse.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>Portal Institucional CapacitaRSE</span>
                <ExternalLink className="w-3 h-3 text-[#60afc1]" />
              </a>
              <span className="text-slate-700">•</span>
              <span>Publicación semanal: <strong>Viernes AM</strong></span>
            </div>
          </div>

        </div>

        {/* Bottom bar (Sin candado ni toggles visibles) */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} CapacitaRSE. Todos los derechos reservados.
          </p>
          
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1">
              <span>Diseñado para</span>
              <strong className="text-white">FridAI Brief</strong>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
