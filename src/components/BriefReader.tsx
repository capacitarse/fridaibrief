import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, ArrowRight, Share2, Copy, Check, Calendar, Mail, 
  FileSpreadsheet, Sparkles, BookOpen, Bot, Printer, Bookmark,
  ExternalLink, CheckSquare, Square, AlertCircle, Quote, Layers,
  Lightbulb, ChevronRight, Download
} from 'lucide-react';
import { BriefEdition } from '../types';

interface BriefReaderProps {
  brief: BriefEdition;
  onBack: () => void;
  onSelectBrief: (brief: BriefEdition) => void;
  allBriefs: BriefEdition[];
  onOpenCalendar: () => void;
  onOpenSubscribe: () => void;
}

export const BriefReader: React.FC<BriefReaderProps> = ({
  brief,
  onBack,
  onSelectBrief,
  allBriefs,
  onOpenCalendar,
  onOpenSubscribe
}) => {
  const [copiedPrompt, setCopiedPrompt] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [copiedFormulaCell, setCopiedFormulaCell] = useState<string | null>(null);

  // Load checked items for this brief from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(`fridai_checklist_${brief.id}`);
      if (saved) {
        setCheckedItems(JSON.parse(saved));
      } else {
        setCheckedItems({});
      }
    } catch (e) {
      console.error(e);
    }
  }, [brief.id]);

  // Toggle checklist item
  const toggleCheck = (id: string) => {
    const updated = { ...checkedItems, [id]: !checkedItems[id] };
    setCheckedItems(updated);
    try {
      localStorage.setItem(`fridai_checklist_${brief.id}`, JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  // Copy prompt
  const copyPromptText = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2500);
  };

  // Copy formula
  const copyFormula = (formula: string, cell: string) => {
    navigator.clipboard.writeText(formula);
    setCopiedFormulaCell(cell);
    setTimeout(() => setCopiedFormulaCell(null), 2000);
  };

  // Share link
  const copyShareLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  // Find previous and next available briefs
  const currentIndex = allBriefs.findIndex(b => b.id === brief.id);
  const prevBrief = currentIndex > 0 ? allBriefs[currentIndex - 1] : null;
  const nextBrief = currentIndex < allBriefs.length - 1 ? allBriefs[currentIndex + 1] : null;

  return (
    <article className="min-h-screen bg-white">
      
      {/* Top Sticky Navigation Bar */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          
          {/* Back button */}
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#09193a] hover:text-[#60afc1] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Volver a la</span> Parrilla
          </button>

          {/* Center Edition Tag */}
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-xs text-[#09193a] bg-slate-100 px-2 py-0.5 rounded-md">
              {brief.editionNumber}
            </span>
            <span className="text-xs font-semibold text-[#696484] hidden md:inline truncate max-w-xs">
              {brief.title}
            </span>
          </div>

          {/* Actions: Prev / Next / Share / Print */}
          <div className="flex items-center gap-2">
            
            {/* Share link button */}
            <button
              onClick={copyShareLink}
              className="p-2 text-[#696484] hover:text-[#09193a] bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 text-xs flex items-center gap-1 transition-colors cursor-pointer"
              title="Copiar enlace directo a esta edición"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copiedLink ? "¡Copiado!" : "Compartir"}</span>
            </button>

            {/* Print / Export */}
            <button
              onClick={() => window.print()}
              className="p-2 text-[#696484] hover:text-[#09193a] bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 text-xs transition-colors cursor-pointer"
              title="Imprimir o Guardar en PDF"
            >
              <Printer className="w-3.5 h-3.5" />
            </button>

            {/* Prev Edition */}
            {prevBrief && (
              <button
                onClick={() => onSelectBrief(prevBrief)}
                className="p-2 text-[#696484] hover:text-[#09193a] bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 text-xs transition-colors cursor-pointer"
                title={`Ir a Edición anterior: ${prevBrief.editionNumber}`}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
            )}

            {/* Next Edition */}
            {nextBrief && (
              <button
                onClick={() => onSelectBrief(nextBrief)}
                className="p-2 text-[#696484] hover:text-[#09193a] bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 text-xs transition-colors cursor-pointer"
                title={`Ir a siguiente edición: ${nextBrief.editionNumber}`}
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}

          </div>

        </div>
      </div>

      {/* Reader Content Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-12">
        
        {/* Article Header */}
        <header className="space-y-5 border-b border-slate-200 pb-8">
          
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm text-[#09193a] bg-[#60afc1]/20 px-3 py-1 rounded-lg border border-[#60afc1]/30">
                FridAI Brief {brief.editionNumber}
              </span>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-[#696484]">
                {brief.categoryLabel}
              </span>
            </div>

            <div className="text-xs text-[#696484] flex items-center gap-2">
              <span>{brief.formattedReleaseDate}</span>
              <span>•</span>
              <span>{brief.estimatedReadingTime}</span>
            </div>
          </div>

          {/* Main Title & Subtitle */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#09193a] tracking-tight leading-snug">
            {brief.title}
          </h1>

          <p className="text-base sm:text-lg text-[#696484] font-normal leading-relaxed">
            {brief.subtitle}
          </p>

          {/* Email Subject Line Bar (Adapting from email to web) */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2 text-[#09193a]">
              <Mail className="w-4 h-4 text-[#60afc1] shrink-0" />
              <span className="font-semibold text-[#696484]">Asunto del envío semanal:</span>
              <span className="font-medium text-[#09193a] select-all">{brief.subjectLine}</span>
            </div>
            <span className="text-[11px] text-[#696484] shrink-0">Viernes AM</span>
          </div>

          {/* Standards & Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs font-semibold text-[#09193a]">Marcos & Estándares:</span>
            {brief.standards.map((std, i) => (
              <span 
                key={i}
                className="text-xs font-medium bg-[#60afc1]/10 text-[#09193a] px-2.5 py-0.5 rounded-md border border-[#60afc1]/20"
              >
                {std}
              </span>
            ))}
          </div>

        </header>

        {/* Introduction */}
        <section className="prose prose-slate max-w-none space-y-4 text-base text-[#09193a]/90 leading-relaxed">
          {brief.introduction.map((paragraph, idx) => (
            <p key={idx} className={idx === 0 ? "font-semibold text-lg text-[#09193a]" : ""}>
              {paragraph}
            </p>
          ))}
        </section>

        {/* SECTION 1: Deep Dive / Enfoque Técnico */}
        <section className="space-y-6 pt-4">
          <div className="border-l-4 border-[#60afc1] pl-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#09193a]">
              {brief.section1Title}
            </h2>
            {brief.section1Subtitle && (
              <p className="text-sm font-semibold text-[#696484] mt-0.5">
                {brief.section1Subtitle}
              </p>
            )}
          </div>

          <div className="space-y-3 text-base text-[#09193a]/90 leading-relaxed">
            {brief.section1Content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Key Pillars Grid if present */}
          {brief.section1KeyPillars && brief.section1KeyPillars.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {brief.section1KeyPillars.map((pillar, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#60afc1] transition-colors space-y-2"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#60afc1] uppercase tracking-wider">
                    <span className="w-5 h-5 rounded-full bg-[#60afc1]/20 text-[#09193a] flex items-center justify-center text-[10px] font-extrabold">
                      {idx + 1}
                    </span>
                    <span className="text-[#09193a]">{pillar.title}</span>
                  </div>
                  <p className="text-xs text-[#696484] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* SECTION 2: Matriz ESG / Tabla Técnica */}
        {(brief.esgMatrix || brief.genericTable) && (
          <section className="space-y-6 pt-4">
            <div className="border-l-4 border-[#696484] pl-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#09193a]">
                {brief.section2Title}
              </h2>
              <p className="text-xs text-[#696484] mt-0.5">
                Diagnóstico institucional asistido por IA para toma de decisiones
              </p>
            </div>

            {/* ESG Matrix Table */}
            {brief.esgMatrix && (
              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#09193a] text-white">
                      <th className="py-3 px-4 font-bold w-1/4">Dimensión ESG</th>
                      <th className="py-3 px-4 font-bold w-3/8">Fortaleza Técnica</th>
                      <th className="py-3 px-4 font-bold w-3/8">Brecha / Oportunidad (Gap)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {brief.esgMatrix.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                        <td className="py-3 px-4 font-bold text-[#09193a] align-top">
                          <span className={`inline-block px-2.5 py-1 rounded-md text-xs font-bold ${
                            row.dimension.includes('(E)') 
                              ? 'bg-emerald-100 text-emerald-900 border border-emerald-200' 
                              : row.dimension.includes('(S)')
                                ? 'bg-amber-100 text-amber-900 border border-amber-200'
                                : 'bg-indigo-100 text-indigo-900 border border-indigo-200'
                          }`}>
                            {row.dimension}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-[#09193a]/90 align-top leading-relaxed">
                          {row.strength}
                        </td>
                        <td className="py-3 px-4 text-[#e76f51] font-medium align-top leading-relaxed bg-[#e76f51]/5">
                          {row.gap}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Generic Table if present */}
            {brief.genericTable && (
              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#09193a] text-white">
                      {brief.genericTable.headers.map((h, i) => (
                        <th key={i} className="py-3 px-4 font-bold">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {brief.genericTable.rows.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                        {brief.genericTable!.headers.map((h, j) => (
                          <td key={j} className="py-3 px-4 text-[#09193a] align-top leading-relaxed">
                            {row[h]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Advisor Insight Callout */}
            {brief.advisorInsight && (
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#60afc1]/15 to-white border-l-4 border-[#60afc1] text-xs sm:text-sm text-[#09193a] space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-[#09193a]">
                  <Lightbulb className="w-4 h-4 text-[#e76f51]" />
                  <span>Insight del Advisor (CapacitaRSE)</span>
                </div>
                <p className="italic text-[#09193a]/90 pl-5">
                  "{brief.advisorInsight}"
                </p>
              </div>
            )}
          </section>
        )}

        {/* SECTION 3: Entregables / Checklist Interactivo / Excel Blueprint */}
        <section className="space-y-6 pt-4">
          <div className="border-l-4 border-[#e76f51] pl-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#09193a]">
              {brief.section3Title}
            </h2>
            <p className="text-xs text-[#696484] mt-0.5">
              Herramienta lista para aplicar en la gestión corporativa
            </p>
          </div>

          {/* Interactive Checklist */}
          {brief.checklist && brief.checklist.length > 0 && (
            <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <div className="text-xs font-bold text-[#696484] uppercase tracking-wider mb-2">
                Checklist Interactivo (Guarda tu progreso):
              </div>
              {brief.checklist.map((item) => {
                const isChecked = !!checkedItems[item.id];
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleCheck(item.id)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                      isChecked
                        ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950'
                        : 'bg-white border-slate-200 hover:border-[#60afc1]'
                    }`}
                  >
                    <button className="mt-0.5 text-[#60afc1] shrink-0">
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <Square className="w-5 h-5 text-[#9ba1a5]" />
                      )}
                    </button>
                    <div className="space-y-1">
                      <p className={`text-xs sm:text-sm font-bold ${isChecked ? 'line-through text-emerald-800' : 'text-[#09193a]'}`}>
                        {item.title}
                      </p>
                      <p className="text-xs text-[#696484] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Excel Column Blueprint */}
          {brief.excelColumns && brief.excelColumns.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-[#09193a]">
                <span>Estructura de Columnas para tu Hoja de Cálculo:</span>
                <span className="text-[#696484]">{brief.excelColumns.length} Columnas</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {brief.excelColumns.map((col, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#09193a] bg-white px-2 py-0.5 rounded-md border border-slate-200 text-[11px]">
                        {col.column}
                      </span>
                      {col.block && (
                        <span className="text-[10px] text-[#696484] font-medium">{col.block}</span>
                      )}
                    </div>
                    <p className="font-semibold text-[#09193a]">{col.title}</p>
                    <p className="text-[11px] text-[#696484] leading-tight">{col.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Excel Formulas Inspector */}
          {brief.excelFormulas && brief.excelFormulas.length > 0 && (
            <div className="space-y-3 bg-[#09193a] text-white p-5 rounded-2xl shadow-md">
              <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5 text-[#60afc1]" />
                  <span className="text-sm font-bold">Fórmulas Lógicas de Excel (Copiar y Pegar)</span>
                </div>
                <span className="text-[10px] text-slate-400">Sintaxis oficial en español</span>
              </div>

              <div className="space-y-3 pt-2">
                {brief.excelFormulas.map((f, idx) => (
                  <div key={idx} className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#60afc1]">{f.cell} — {f.name}</span>
                      <button
                        onClick={() => copyFormula(f.formula, f.cell)}
                        className="px-2.5 py-1 text-[10px] font-bold bg-[#60afc1]/20 hover:bg-[#60afc1]/30 text-[#60afc1] rounded-md transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        {copiedFormulaCell === f.cell ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedFormulaCell === f.cell ? "¡Copiada!" : "Copiar Fórmula"}</span>
                      </button>
                    </div>
                    <pre className="text-xs text-amber-300 font-mono overflow-x-auto py-1 px-2 bg-black/40 rounded-lg">
                      <code>{f.formula}</code>
                    </pre>
                    <p className="text-[11px] text-slate-300">{f.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step by Step Workflow if present */}
          {brief.stepByStepWorkflow && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {brief.stepByStepWorkflow.map((step, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-xs font-extrabold text-[#e76f51] bg-[#e76f51]/10 px-2 py-0.5 rounded-md">
                    {step.step}
                  </span>
                  <h4 className="text-sm font-bold text-[#09193a]">{step.title}</h4>
                  <p className="text-xs text-[#696484] leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* SECTION 4: AI Toolkit / Master Prompt */}
        {brief.promptBlock && (
          <section className="space-y-6 pt-4">
            <div className="border-l-4 border-[#09193a] pl-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#09193a]">
                {brief.section4Title || "AI Toolkit: Tu Prompt Maestro"}
              </h2>
              <p className="text-xs text-[#696484] mt-0.5">
                Instrucción técnica calibrada para modelos de lenguaje avanzados (GPT-4o, Claude 3.5 Sonnet, Gemini Pro)
              </p>
            </div>

            {/* Prompt Code Block Container */}
            <div className="rounded-2xl border border-slate-300 overflow-hidden shadow-lg bg-slate-900 text-slate-100">
              
              {/* Prompt Header */}
              <div className="bg-slate-950 px-5 py-3.5 border-b border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#60afc1]" />
                  <span className="text-xs font-bold text-white truncate">
                    {brief.promptBlock.title}
                  </span>
                </div>

                <button
                  onClick={() => copyPromptText(brief.promptBlock!.instructions)}
                  className="px-3 py-1.5 bg-[#e76f51] hover:bg-[#d55e40] text-white text-xs font-bold rounded-lg flex items-center gap-1.5 transition-all shadow-xs cursor-pointer transform active:scale-95"
                >
                  {copiedPrompt ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPrompt ? "¡Prompt Copiado!" : "Copiar Prompt Completo"}</span>
                </button>
              </div>

              {/* Role badge */}
              <div className="px-5 py-2 bg-slate-800/80 border-b border-slate-800 text-xs flex items-center gap-2 text-slate-300">
                <span className="text-[#60afc1] font-semibold">Rol del Sistema:</span>
                <span>{brief.promptBlock.role}</span>
              </div>

              {/* Code Box */}
              <div className="p-5 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed text-slate-200 whitespace-pre-wrap bg-slate-900/90 selection:bg-[#60afc1] selection:text-[#09193a]">
                {brief.promptBlock.instructions}
              </div>

              {/* Variables guide */}
              {brief.promptBlock.variables && brief.promptBlock.variables.length > 0 && (
                <div className="bg-slate-950 p-4 border-t border-slate-800 space-y-2 text-xs">
                  <span className="font-bold text-slate-300">Variables a completar entre corchetes []:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {brief.promptBlock.variables.map((v, i) => (
                      <div key={i} className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                        <span className="font-mono text-[#60afc1] font-bold">{v.name}</span>
                        <p className="text-[11px] text-slate-400 mt-0.5">{v.description}</p>
                        <p className="text-[10px] text-slate-500 italic">Ejemplo: {v.example}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Explanation Points */}
            {brief.promptBlock.explanationPoints && (
              <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
                <span className="font-bold text-[#09193a]">¿Por qué funciona este diseño técnico?</span>
                <ul className="list-disc pl-5 space-y-1 text-[#696484]">
                  {brief.promptBlock.explanationPoints.map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Follow up micro prompts */}
            {brief.promptBlock.followUpPrompts && brief.promptBlock.followUpPrompts.length > 0 && (
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold text-[#09193a]">Micro-Prompts Complementarios de Seguimiento:</span>
                <div className="space-y-2">
                  {brief.promptBlock.followUpPrompts.map((fp, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#696484]">{fp.title}</span>
                        <button
                          onClick={() => copyPromptText(fp.prompt)}
                          className="text-[11px] font-bold text-[#60afc1] hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          <Copy className="w-3 h-3" />
                          <span>Copiar</span>
                        </button>
                      </div>
                      <p className="italic text-[#09193a]/90 font-mono bg-white p-2 rounded-lg border border-slate-200">
                        {fp.prompt}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </section>
        )}

        {/* SECTION 5: Próxima Entrega & Producción */}
        <section className="pt-6 border-t border-slate-200 space-y-6">
          
          {/* Teaser Box */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-[#09193a] to-[#696484] text-white space-y-3 shadow-lg">
            <div className="flex items-center justify-between text-xs text-slate-300">
              <span className="uppercase tracking-wider font-bold text-[#60afc1]">Próximo Viernes</span>
              <span>{brief.nextEditionTeaser.date} • Viernes AM</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-white">
              {brief.nextEditionTeaser.edition}: {brief.nextEditionTeaser.topic}
            </h3>
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-600/60">
              <span className="text-xs text-slate-300 font-medium">
                {brief.nextEditionTeaser.format}
              </span>
              <button
                onClick={onOpenCalendar}
                className="px-4 py-2 bg-[#60afc1] hover:bg-[#4ea0b2] text-[#09193a] text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Agendar Recordatorio</span>
              </button>
            </div>
          </div>

          {/* Production Notes */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
            <span className="font-bold text-[#09193a] uppercase tracking-wider text-[10px]">
              Notas de Validación Técnica (CapacitaRSE)
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[#696484]">
              <div>
                <strong className="text-[#09193a]">Enfoque: </strong>
                {brief.productionNotes.institutionalFocus}
              </div>
              <div>
                <strong className="text-[#09193a]">Accionabilidad: </strong>
                {brief.productionNotes.practicalValue}
              </div>
            </div>
          </div>

        </section>

        {/* Bottom Actions & Reader Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
          
          <button
            onClick={onBack}
            className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#09193a] text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a la Parrilla</span>
          </button>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {nextBrief && (
              <button
                onClick={() => onSelectBrief(nextBrief)}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#e76f51] hover:bg-[#d55e40] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-md"
              >
                <span>Siguiente: {nextBrief.editionNumber}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>

      </div>

    </article>
  );
};
