import React from 'react';
import { Clock, Lock, CheckCircle2, ArrowRight, FileSpreadsheet, Sparkles, BookOpen, Bot, Calendar, Star } from 'lucide-react';
import { BriefEdition } from '../types';

interface BriefCardProps {
  brief: BriefEdition;
  isUnlocked: boolean;
  onSelect: (brief: BriefEdition) => void;
  onOpenCalendar: () => void;
  onOpenSubscribe?: () => void;
}

export const BriefCard: React.FC<BriefCardProps> = ({
  brief,
  isUnlocked,
  onSelect,
  onOpenCalendar,
  onOpenSubscribe
}) => {
  // Category Icon mapper
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'deep-dive':
        return <BookOpen className="w-3.5 h-3.5" />;
      case 'prompt-engineering':
        return <Sparkles className="w-3.5 h-3.5" />;
      case 'excel-tool':
        return <FileSpreadsheet className="w-3.5 h-3.5" />;
      case 'ai-workflow':
        return <Bot className="w-3.5 h-3.5" />;
      default:
        return <BookOpen className="w-3.5 h-3.5" />;
    }
  };

  // Category Badge Styles
  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'deep-dive':
        return 'bg-[#60afc1]/15 text-[#09193a] border-[#60afc1]/30';
      case 'prompt-engineering':
        return 'bg-[#696484]/15 text-[#696484] border-[#696484]/30';
      case 'excel-tool':
        return 'bg-[#e76f51]/15 text-[#e76f51] border-[#e76f51]/30';
      case 'ai-workflow':
        return 'bg-[#09193a]/10 text-[#09193a] border-[#09193a]/20';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  // Watermark number extractor (e.g. "#01" -> "01")
  const watermarkNum = brief.editionNumber.replace('#', '');
  const isSpecialFinale = brief.id === 15;
  const isFirstHero = brief.id === 1;

  if (brief.isPlaceholder || (!isUnlocked && !brief.isPlaceholder)) {
    return (
      <div 
        onClick={onOpenSubscribe || onOpenCalendar}
        className="locked-card card-hover relative rounded-3xl p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-2xs group cursor-pointer hover:border-[#60afc1] transition-all"
      >
        {/* Background Watermark Number */}
        <div className="absolute right-3 -bottom-2 text-7xl font-black text-slate-300/30 select-none pointer-events-none tracking-tighter">
          {watermarkNum}
        </div>

        <div className="space-y-4 relative z-10">
          {/* Card Top Pill & Tag */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="font-black text-sm text-[#09193a] bg-slate-200/80 px-2.5 py-1 rounded-xl">
                {brief.editionNumber}
              </span>
              <span className="text-[11px] font-semibold text-[#696484] px-2 py-0.5 rounded-full bg-white/80 border border-slate-200">
                {brief.categoryLabel}
              </span>
            </div>

            {isSpecialFinale ? (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-100/80 px-2.5 py-1 rounded-full border border-amber-200">
                <Star className="w-3 h-3 text-amber-600 fill-amber-500" />
                Gran Cierre
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#696484] bg-slate-200/80 px-2.5 py-1 rounded-full">
                <Lock className="w-3 h-3" />
                Programado
              </span>
            )}
          </div>

          {/* Release Date Info */}
          <div className="flex items-center gap-1.5 text-xs text-[#696484]">
            <Clock className="w-3.5 h-3.5 text-[#60afc1]" />
            <span className="font-medium">{brief.formattedReleaseDate} • Viernes AM</span>
          </div>

          {/* Title & Subtitle */}
          <div className="space-y-1">
            <h3 className="font-extrabold text-base text-[#09193a]/90 group-hover:text-[#60afc1] transition-colors leading-snug">
              {brief.title}
            </h3>
            <p className="text-xs text-[#696484] line-clamp-2 leading-relaxed">
              {brief.subtitle}
            </p>
          </div>

          {/* Enfoque & Standards */}
          <div className="pt-2 border-t border-slate-200/60 space-y-2">
            <div className="text-xs text-[#696484]">
              <strong className="text-[#09193a]">Enfoque:</strong> {brief.caseOrTopic}
            </div>
            <div className="flex flex-wrap gap-1">
              {brief.standards.map((std, idx) => (
                <span key={idx} className="text-[10px] bg-white text-[#696484] px-2 py-0.5 rounded-md border border-slate-200">
                  {std}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Card Action - Lead Capture & Calendar */}
        <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between gap-2 relative z-10" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={onOpenCalendar}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-[11px] font-semibold text-[#696484] hover:text-[#09193a] transition-colors cursor-pointer shadow-2xs"
            title="Añadir recordatorio al calendario"
          >
            <Calendar className="w-3.5 h-3.5 text-[#60afc1]" />
            <span>Calendario</span>
          </button>

          <button
            onClick={onOpenSubscribe || onOpenCalendar}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#e76f51] hover:bg-[#d55e40] text-white text-xs font-bold transition-all cursor-pointer shadow-2xs active:scale-95"
          >
            <span>Avísame al liberar</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    );
  }

  // Active / Unlocked Card
  return (
    <div 
      className={`card-hover relative bg-white rounded-3xl p-5 sm:p-6 border transition-all flex flex-col justify-between overflow-hidden shadow-sm group ${
        isFirstHero 
          ? 'border-[#60afc1] ring-1 ring-[#60afc1]/30' 
          : 'border-slate-200/90 hover:border-[#60afc1]'
      }`}
    >
      {/* Background Watermark Number */}
      <div className="absolute right-2 -bottom-2 text-7xl font-black text-[#60afc1]/10 group-hover:text-[#60afc1]/20 transition-colors select-none pointer-events-none tracking-tighter">
        {watermarkNum}
      </div>

      <div className="space-y-4 relative z-10">
        
        {/* Header: Edition Number, Category Pill & Status */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-black text-sm text-white bg-[#09193a] px-2.5 py-1 rounded-xl shadow-2xs">
              {brief.editionNumber}
            </span>
            <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full border ${getCategoryBadgeClass(brief.category)}`}>
              {getCategoryIcon(brief.category)}
              <span>{brief.categoryLabel}</span>
            </span>
          </div>

          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-200">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            Disponible
          </span>
        </div>

        {/* Release Date info */}
        <div className="flex items-center gap-1.5 text-xs text-[#696484]">
          <Clock className="w-3.5 h-3.5 text-[#60afc1]" />
          <span className="font-semibold">{brief.formattedReleaseDate}</span>
          <span className="text-slate-300">•</span>
          <span>{brief.estimatedReadingTime}</span>
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-1">
          <h3 className="font-black text-base text-[#09193a] group-hover:text-[#60afc1] transition-colors leading-snug">
            {brief.title}
          </h3>
          <p className="text-xs text-[#696484] line-clamp-2 leading-relaxed">
            {brief.subtitle}
          </p>
        </div>

        {/* Case / Topic & Standards */}
        <div className="pt-2 border-t border-slate-100 space-y-2">
          <div className="text-xs">
            <span className="font-bold text-[#09193a]">Enfoque: </span>
            <span className="text-[#696484]">{brief.caseOrTopic}</span>
          </div>

          {/* Standards pills */}
          <div className="flex flex-wrap gap-1.5">
            {brief.standards.slice(0, 3).map((std, idx) => (
              <span 
                key={idx} 
                className="text-[10px] font-semibold bg-[#60afc1]/10 text-[#09193a] px-2 py-0.5 rounded-md border border-[#60afc1]/20"
              >
                {std}
              </span>
            ))}
            {brief.standards.length > 3 && (
              <span className="text-[10px] font-semibold text-[#696484] self-center">
                +{brief.standards.length - 3} más
              </span>
            )}
          </div>
        </div>

      </div>

      {/* Card Footer / CTA */}
      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between relative z-10">
        <span className="text-[11px] text-[#696484] font-semibold">
          {brief.hasPromptBlock ? 'Prompt incluido' : 'Análisis metodológico'}
        </span>

        <button
          onClick={() => onSelect(brief)}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#09193a] group-hover:bg-[#e76f51] text-white text-xs font-bold transition-all cursor-pointer shadow-xs active:scale-95"
        >
          <span>Leer Brief</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

    </div>
  );
};

