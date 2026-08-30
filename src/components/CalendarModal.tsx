import React from 'react';
import { X, Calendar, Download, ExternalLink, CheckCircle2, Clock, Globe } from 'lucide-react';
import { getGoogleCalendarUrl, getOutlookWebUrl, downloadIcsCalendar } from '../utils/calendar';

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendarModal: React.FC<CalendarModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative space-y-6 animate-in fade-in zoom-in-95 duration-200"
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
        <div className="space-y-2 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#60afc1]/15 text-[#09193a] text-xs font-bold">
            <Calendar className="w-3.5 h-3.5 text-[#60afc1]" />
            <span>Sincronización Automática</span>
          </div>
          <h3 className="text-2xl font-extrabold text-[#09193a]">
            Añadir a mi Calendario
          </h3>
          <p className="text-sm text-[#696484] leading-relaxed">
            Agrega el recordatorio semanal de <strong>FridAI Brief</strong> a tu aplicación de calendario favorita.
          </p>
        </div>

        {/* Schedule Info Box */}
        <div className="p-4 rounded-2xl bg-[#60afc1]/10 border border-[#60afc1]/25 text-xs text-[#09193a] space-y-1.5">
          <div className="flex items-center gap-2 font-bold">
            <Clock className="w-4 h-4 text-[#09193a]" />
            <span>Horario Oficial de Liberación:</span>
          </div>
          <p className="text-[#696484] pl-6">
            Cada <strong>Viernes AM</strong>.
          </p>
          <p className="text-[#696484] pl-6">
            Ciclo de 15 semanas: <strong>Viernes 4 de Septiembre al Viernes 11 de Diciembre de 2026</strong>.
          </p>
        </div>

        {/* Calendar Options Grid */}
        <div className="space-y-3">
          
          {/* Google Calendar */}
          <a
            href={getGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 font-extrabold text-sm shadow-xs">
                G
              </div>
              <div className="text-left">
                <h4 className="text-sm font-bold text-[#09193a] group-hover:text-[#60afc1] transition-colors">
                  Google Calendar
                </h4>
                <p className="text-xs text-[#696484]">
                  Añadir evento recurrente web con enlace
                </p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[#9ba1a5] group-hover:text-[#09193a] transition-colors" />
          </a>

          {/* Apple Calendar / iCal File */}
          <button
            type="button"
            onClick={() => downloadIcsCalendar()}
            className="w-full p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-between group transition-all text-left cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-800 font-extrabold text-sm shadow-xs">
                
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#09193a] group-hover:text-[#60afc1] transition-colors">
                  Apple Calendar / iOS / Mac
                </h4>
                <p className="text-xs text-[#696484]">
                  Descargar archivo .ics universal con alarmas
                </p>
              </div>
            </div>
            <Download className="w-4 h-4 text-[#9ba1a5] group-hover:text-[#09193a] transition-colors" />
          </button>

          {/* Microsoft Outlook 365 */}
          <a
            href={getOutlookWebUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#0078d4] font-extrabold text-sm shadow-xs">
                O
              </div>
              <div className="text-left">
                <h4 className="text-sm font-bold text-[#09193a] group-hover:text-[#60afc1] transition-colors">
                  Outlook & Office 365
                </h4>
                <p className="text-xs text-[#696484]">
                  Abrir directamente en Outlook Live / Web
                </p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[#9ba1a5] group-hover:text-[#09193a] transition-colors" />
          </a>

        </div>

        <button
          onClick={onClose}
          className="w-full py-3 bg-[#09193a] text-white text-xs font-bold rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
        >
          Cerrar
        </button>

      </div>
    </div>
  );
};
