import React, { useState, useMemo } from 'react';
import { Search, Filter, Sparkles, BookOpen, FileSpreadsheet, Bot, LayoutGrid, ListTree, SlidersHorizontal, Sparkle } from 'lucide-react';
import { BriefEdition, BriefCategory } from '../types';
import { BriefCard } from './BriefCard';

interface BriefGridProps {
  briefs: BriefEdition[];
  onSelectBrief: (brief: BriefEdition) => void;
  onOpenCalendar: () => void;
  onOpenSubscribe?: () => void;
  unlockAll: boolean;
  isBriefUnlockedFn: (brief: BriefEdition) => boolean;
}

export const BriefGrid: React.FC<BriefGridProps> = ({
  briefs,
  onSelectBrief,
  onOpenCalendar,
  onOpenSubscribe,
  unlockAll,
  isBriefUnlockedFn
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'timeline'>('grid');

  // Filtered briefs based on category and search query
  const filteredBriefs = useMemo(() => {
    return briefs.filter((brief) => {
      // Category filter
      const matchesCategory = selectedCategory === 'all' || brief.category === selectedCategory;
      
      // Search filter
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch = 
        brief.title.toLowerCase().includes(query) ||
        brief.subtitle.toLowerCase().includes(query) ||
        brief.editionNumber.toLowerCase().includes(query) ||
        brief.caseOrTopic.toLowerCase().includes(query) ||
        brief.standards.some(std => std.toLowerCase().includes(query)) ||
        (brief.promptBlock && brief.promptBlock.title.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [briefs, selectedCategory, searchQuery]);

  // Categories with count
  const categories = [
    { id: 'all', label: 'Todas las Entregas', icon: null, count: briefs.length },
    { 
      id: 'deep-dive', 
      label: 'Deep-Dive Reporte', 
      icon: <BookOpen className="w-3.5 h-3.5" />, 
      count: briefs.filter(b => b.category === 'deep-dive').length 
    },
    { 
      id: 'prompt-engineering', 
      label: 'Prompt Engineering', 
      icon: <Sparkles className="w-3.5 h-3.5" />, 
      count: briefs.filter(b => b.category === 'prompt-engineering').length 
    },
    { 
      id: 'excel-tool', 
      label: 'Herramienta Excel', 
      icon: <FileSpreadsheet className="w-3.5 h-3.5" />, 
      count: briefs.filter(b => b.category === 'excel-tool').length 
    },
    { 
      id: 'ai-workflow', 
      label: 'AI Workflow', 
      icon: <Bot className="w-3.5 h-3.5" />, 
      count: briefs.filter(b => b.category === 'ai-workflow').length 
    },
  ];

  return (
    <section id="parrilla-briefs" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header with Bento Aesthetic */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-100 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#60afc1] uppercase tracking-wider">
              <span>CapacitaRSE Intelligence</span>
              <span>•</span>
              <span>Parrilla Oficial Bento Grid</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#09193a] mt-1 tracking-tight">
              Las 15 Ediciones de FridAI Brief
            </h2>
            <p className="text-sm text-[#696484] mt-1 max-w-2xl">
              Explora el cronograma semanal de 15 entregas. Cada Viernes AM se libera un nuevo brief de transferencia metodológica en sostenibilidad y modelos de lenguaje.
            </p>
          </div>

          {/* View Mode Controls */}
          <div className="flex items-center gap-1.5 self-start md:self-auto bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'grid' 
                  ? 'bg-white text-[#09193a] shadow-xs' 
                  : 'text-[#696484] hover:text-[#09193a]'
              }`}
              title="Vista en Bento Grid"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Bento Grid</span>
            </button>
            <button
              onClick={() => setViewMode('timeline')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'timeline' 
                  ? 'bg-white text-[#09193a] shadow-xs' 
                  : 'text-[#696484] hover:text-[#09193a]'
              }`}
              title="Vista en Cronograma Semanal"
            >
              <ListTree className="w-3.5 h-3.5" />
              <span>Cronograma</span>
            </button>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer border ${
                    isActive
                      ? 'bg-[#09193a] text-white border-[#09193a] shadow-xs'
                      : 'bg-slate-50 text-[#696484] hover:text-[#09193a] border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-200/80 text-[#696484]'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-[#9ba1a5] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por tema, GRI, CSRD, prompt..."
              className="w-full pl-9.5 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-[#09193a] placeholder:text-[#9ba1a5] focus:outline-hidden focus:border-[#60afc1] focus:ring-2 focus:ring-[#60afc1]/20 transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#9ba1a5] hover:text-[#09193a] p-1"
              >
                ×
              </button>
            )}
          </div>

        </div>

        {/* Results Counter & State Indicator */}
        <div className="flex flex-wrap items-center justify-between text-xs text-[#696484] px-1 gap-2">
          <span>Mostrando <strong>{filteredBriefs.length}</strong> de {briefs.length} entregas</span>
          {unlockAll && (
            <span className="text-[#09193a] font-bold bg-[#60afc1]/20 border border-[#60afc1]/40 px-2.5 py-1 rounded-xl">
              🔓 Modo Simulador: Todas las ediciones habilitadas
            </span>
          )}
        </div>

        {/* Bento Grid View (Multi-column responsive grid) */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
            {filteredBriefs.map((brief) => (
              <BriefCard
                key={brief.id}
                brief={brief}
                isUnlocked={unlockAll || isBriefUnlockedFn(brief)}
                onSelect={onSelectBrief}
                onOpenCalendar={onOpenCalendar}
                onOpenSubscribe={onOpenSubscribe}
              />
            ))}
          </div>
        ) : (
          /* Timeline / Sequential View */
          <div className="space-y-4 relative before:absolute before:inset-0 before:left-6 md:before:left-8 before:w-0.5 before:bg-slate-200">
            {filteredBriefs.map((brief) => {
              const isUnlocked = unlockAll || isBriefUnlockedFn(brief);
              return (
                <div 
                  key={brief.id} 
                  className={`card-hover relative pl-12 md:pl-16 p-5 sm:p-6 rounded-3xl bg-white border transition-all ${
                    isUnlocked && !brief.isPlaceholder
                      ? 'border-slate-200 hover:border-[#60afc1] shadow-xs hover:shadow-md'
                      : 'locked-card'
                  }`}
                >
                  {/* Timeline bullet */}
                  <div className={`absolute left-4 md:left-6 top-7 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-white flex items-center justify-center shadow-xs ${
                    isUnlocked ? 'bg-[#60afc1]' : 'bg-[#9ba1a5]'
                  }`}></div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-black text-sm text-[#09193a] bg-slate-100 px-2.5 py-1 rounded-xl">
                        {brief.editionNumber}
                      </span>
                      <span className="text-xs font-bold text-[#696484]">
                        {brief.formattedReleaseDate}
                      </span>
                      <span className="text-xs text-[#9ba1a5]">• Viernes AM</span>
                    </div>

                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-[#09193a] self-start sm:self-auto">
                      {brief.categoryLabel}
                    </span>
                  </div>

                  <div className="mt-3 space-y-2">
                    <h3 className="font-bold text-base text-[#09193a]">
                      {brief.title}
                    </h3>
                    <p className="text-xs text-[#696484] leading-relaxed">
                      {brief.subtitle}
                    </p>
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                      <div className="flex flex-wrap gap-1">
                        {brief.standards.map((std, i) => (
                          <span key={i} className="text-[10px] font-semibold bg-slate-100 text-[#09193a] px-2 py-0.5 rounded-md">
                            {std}
                          </span>
                        ))}
                      </div>
                      
                      {!brief.isPlaceholder && isUnlocked ? (
                        <button
                          onClick={() => onSelectBrief(brief)}
                          className="text-xs font-bold text-[#e76f51] hover:underline cursor-pointer"
                        >
                          Abrir Edición Web →
                        </button>
                      ) : (
                        <button
                          onClick={onOpenSubscribe || onOpenCalendar}
                          className="text-xs font-bold text-[#e76f51] hover:underline cursor-pointer flex items-center gap-1"
                        >
                          <span>Avísame al liberar</span>
                          <span>→</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Empty state */}
        {filteredBriefs.length === 0 && (
          <div className="bg-slate-50 rounded-3xl border border-slate-200 p-12 text-center space-y-3">
            <Filter className="w-8 h-8 text-[#9ba1a5] mx-auto" />
            <h3 className="text-base font-bold text-[#09193a]">No se encontraron entregas</h3>
            <p className="text-xs text-[#696484]">
              Intenta cambiar los términos de búsqueda o selecciona otra categoría.
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="text-xs font-bold text-[#60afc1] hover:underline cursor-pointer pt-2"
            >
              Restablecer filtros
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

