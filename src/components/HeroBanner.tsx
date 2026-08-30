import React, { useState } from 'react';
import { Calendar, Mail, Clock, ArrowRight, ShieldCheck, Sparkles, CheckCircle2, ChevronDown, Check, ExternalLink } from 'lucide-react';
import { BriefEdition } from '../types';

interface HeroBannerProps {
  onOpenSubscribe: (initialEmail?: string) => void;
  onOpenCalendar: () => void;
  onScrollToGrid: () => void;
  nextBriefCountdown: {
    nextBrief: BriefEdition | null;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isAllReleased: boolean;
  };
  totalBriefs: number;
  availableBriefs: number;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onOpenSubscribe,
  onOpenCalendar,
  onScrollToGrid,
  nextBriefCountdown,
  totalBriefs,
  availableBriefs
}) => {
  const [quickEmail, setQuickEmail] = useState('');

  const handleQuickSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenSubscribe(quickEmail.trim());
    setQuickEmail('');
  };

  return (
    <section className="relative overflow-hidden bg-[#60afc1]/10 border-b border-[#9ba1a5]/20 pt-8 pb-10 sm:pt-12 sm:pb-14">
      {/* Bento grid subtle background glow */}
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-96 h-96 bg-[#60afc1]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-80 h-80 bg-[#696484]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Bento Grid Header Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Main Left Bento Hero Box (7 cols) */}
          <div className="lg:col-span-7 bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white shadow-md flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#09193a] text-white shadow-xs">
                <span className="flex h-2 w-2 rounded-full bg-[#60afc1] animate-pulse"></span>
                <span className="text-xs font-bold tracking-wide uppercase">
                  Ciclo Oficial 2026 • 15 Entregas
                </span>
                <span className="text-xs text-[#60afc1] border-l border-white/20 pl-2 font-medium">
                  4 Sept — 11 Dic
                </span>
              </div>

              {/* Bento Title */}
              <h1 className="text-2xl sm:text-4xl lg:text-4xl xl:text-5xl font-black text-[#09193a] tracking-tight leading-tight">
                Sostenibilidad & IA <br className="hidden sm:inline" />
                <span className="text-[#60afc1]">en una sola entrega</span> semanal.
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-[#09193a]/80 font-normal leading-relaxed">
                <strong>FridAI Brief</strong> es la transferencia metodológica semanal de <strong>CapacitaRSE</strong>: análisis técnico de reportes corporativos (GRI, CSRD, IFRS S1/S2), prompts auditados sin alucinaciones y matrices en Excel listas para usar.
              </p>
            </div>

            {/* Bento Value Props (3 interactive cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
              <div className="p-3 rounded-2xl bg-[#60afc1]/10 border border-[#60afc1]/25 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#60afc1] shrink-0" />
                <div>
                  <div className="text-xs font-bold text-[#09193a]">Auditado</div>
                  <div className="text-[11px] text-[#696484]">Sin alucinaciones</div>
                </div>
              </div>
              
              <div className="p-3 rounded-2xl bg-[#696484]/10 border border-[#696484]/25 flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#696484] shrink-0" />
                <div>
                  <div className="text-xs font-bold text-[#09193a]">Prompts Copiables</div>
                  <div className="text-[11px] text-[#696484]">Frameworks ESG</div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-[#e76f51]/10 border border-[#e76f51]/25 flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#e76f51] shrink-0" />
                <div>
                  <div className="text-xs font-bold text-[#09193a]">Viernes AM</div>
                  <div className="text-[11px] text-[#696484]">Semanal</div>
                </div>
              </div>
            </div>

            {/* Quick Action Navigation */}
            <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-100">
              <button
                onClick={onScrollToGrid}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#09193a] text-white hover:bg-slate-800 text-xs font-bold transition-all cursor-pointer shadow-xs"
              >
                <span>Ver las 15 Ediciones</span>
                <ChevronDown className="w-4 h-4 text-[#60afc1]" />
              </button>

              <button
                onClick={onOpenCalendar}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#09193a] text-xs font-semibold transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#60afc1]" />
                <span>Sincronizar Calendario</span>
              </button>
            </div>

          </div>

          {/* Right Column: Bento Subscription & Live Sync Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            
            {/* Bento Box 1: Quick Subscribe Tile */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md relative overflow-hidden flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#e76f51]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#09193a]">Suscripción Directa</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#e76f51]/15 text-[#e76f51]">
                    Gratuito
                  </span>
                </div>
                
                <h3 className="text-base font-extrabold text-[#09193a]">
                  Recibe el aviso cada viernes en tu bandeja
                </h3>
                <p className="text-xs text-[#696484]">
                  Ingresa tu correo corporativo para recibir la notificación matutina de cada nueva entrega.
                </p>
              </div>

              <form onSubmit={handleQuickSubscribe} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={quickEmail}
                    onChange={(e) => setQuickEmail(e.target.value)}
                    placeholder="tu.correo@empresa.com"
                    required
                    className="flex-1 px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-[#09193a] placeholder:text-[#9ba1a5] focus:outline-hidden focus:border-[#60afc1] focus:ring-2 focus:ring-[#60afc1]/20 transition-all"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-[#e76f51] hover:bg-[#d55e40] text-white font-bold text-xs rounded-xl shadow-xs transition-all cursor-pointer whitespace-nowrap active:scale-95 flex items-center gap-1"
                  >
                    <span>SUSCRIBIR</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
                <p className="text-[10px] text-[#9ba1a5] text-center">
                  Cero spam. Ingresa para confirmar nombre y país de recepción.
                </p>
              </form>
            </div>

            {/* Bento Box 2: Live Release Status & Calendar Quick Sync */}
            <div className="bg-[#09193a] text-white rounded-3xl p-5 border border-[#09193a] shadow-md space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#60afc1]" />
                  <span className="text-xs font-bold text-slate-200">Próxima Entrega en Parrilla</span>
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#60afc1]/20 text-[#60afc1]">
                  Viernes AM
                </span>
              </div>

              {nextBriefCountdown.nextBrief ? (
                <div className="grid grid-cols-4 gap-2 text-center pt-1">
                  <div className="bg-white/10 rounded-xl p-2 border border-white/10">
                    <div className="text-xl font-extrabold text-white">{nextBriefCountdown.days}</div>
                    <div className="text-[9px] uppercase font-bold text-slate-400">Días</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-2 border border-white/10">
                    <div className="text-xl font-extrabold text-white">{String(nextBriefCountdown.hours).padStart(2, '0')}</div>
                    <div className="text-[9px] uppercase font-bold text-slate-400">Horas</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-2 border border-white/10">
                    <div className="text-xl font-extrabold text-white">{String(nextBriefCountdown.minutes).padStart(2, '0')}</div>
                    <div className="text-[9px] uppercase font-bold text-slate-400">Min</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-2 border border-white/10">
                    <div className="text-xl font-extrabold text-[#e76f51]">{String(nextBriefCountdown.seconds).padStart(2, '0')}</div>
                    <div className="text-[9px] uppercase font-bold text-slate-400">Seg</div>
                  </div>
                </div>
              ) : (
                <div className="text-xs text-slate-300">
                  Todas las entregas del ciclo se encuentran liberadas en la parrilla.
                </div>
              )}

              {/* 1-Click Calendar Sync inside Bento tile */}
              <button
                onClick={onOpenCalendar}
                className="w-full py-2 px-3 bg-[#60afc1]/20 hover:bg-[#60afc1]/30 border border-[#60afc1]/40 rounded-xl text-xs font-semibold text-[#60afc1] hover:text-white flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Añadir a Google Calendar / Outlook</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

