import React, { useState } from 'react';
import { X, Mail, Copy, Check, Terminal, Info } from 'lucide-react';
import { BriefEdition } from '../types';

interface PlainEmailPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  sampleBrief: BriefEdition;
}

export const PlainEmailPreviewModal: React.FC<PlainEmailPreviewModalProps> = ({
  isOpen,
  onClose,
  sampleBrief
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.origin : 'https://cursosderse.com/fridai-brief';

  const plainTextEmailContent = `De: CapacitaRSE Intelligence <brief@cursosderse.com>
Para: suscriptor@empresa.com
Fecha: ${sampleBrief.formattedReleaseDate}, Viernes AM
Asunto: ${sampleBrief.subjectLine}

Hola,

Ya se encuentra disponible en la web la nueva entrega de FridAI Brief by CapacitaRSE (${sampleBrief.editionNumber}):

"${sampleBrief.title}"

${sampleBrief.subtitle}

Eje temático: ${sampleBrief.caseOrTopic}
Marcos: ${sampleBrief.standards.join(', ')}
Tiempo estimado: ${sampleBrief.estimatedReadingTime}

Podes acceder directamente a la entrega completa, matrices y prompts en el siguiente enlace:
${currentUrl}?edition=${sampleBrief.id}

---
CapacitaRSE | Formación y Consultoría en Sostenibilidad & ESG
https://cursosderse.com
Para modificar tu suscripción o cancelar avisos, responde este mensaje con la palabra 'BAJA'.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(plainTextEmailContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative space-y-6 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#9ba1a5] hover:text-[#09193a] hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1.5 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#60afc1]/15 text-[#09193a] text-xs font-bold">
            <Mail className="w-3.5 h-3.5 text-[#60afc1]" />
            <span>Formato de Aviso por E-mail</span>
          </div>
          <h3 className="text-xl font-extrabold text-[#09193a]">
            Aviso Semanal en Texto Plano
          </h3>
          <p className="text-xs text-[#696484]">
            Diseñado para máxima entregabilidad, sin tracking invasivo ni imágenes pesadas: directo al grano cada Viernes AM.
          </p>
        </div>

        {/* Plain text preview terminal */}
        <div className="bg-slate-950 rounded-2xl p-5 text-left font-mono text-xs text-slate-200 leading-relaxed overflow-x-auto border border-slate-800 space-y-3 relative shadow-inner">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-2 text-slate-400 text-[11px]">
              <Terminal className="w-3.5 h-3.5 text-[#60afc1]" />
              <span>Vista previa del mensaje de texto plano</span>
            </div>
            <button
              onClick={handleCopy}
              className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-white rounded text-[11px] font-sans font-bold flex items-center gap-1 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? "Copiado" : "Copiar Texto"}</span>
            </button>
          </div>

          <pre className="whitespace-pre-wrap text-slate-300 font-mono text-[11px]">
            {plainTextEmailContent}
          </pre>
        </div>

        <div className="flex items-center justify-between text-xs text-[#696484] pt-2">
          <span>Liberación automática: Viernes AM</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#09193a] text-white font-bold rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>

      </div>
    </div>
  );
};
