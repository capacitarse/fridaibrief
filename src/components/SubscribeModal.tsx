import React, { useState } from 'react';
import { X, Mail, CheckCircle2, Calendar, Download, Sparkles, ArrowRight, ShieldCheck, User, Globe2 } from 'lucide-react';
import { getGoogleCalendarUrl, downloadIcsCalendar } from '../utils/calendar';
import { LATAM_COUNTRIES, saveSubscriber } from '../utils/subscribers';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEmailPreview: () => void;
  initialEmail?: string;
}

export const SubscribeModal: React.FC<SubscribeModalProps> = ({
  isOpen,
  onClose,
  onOpenEmailPreview,
  initialEmail = ''
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState(initialEmail);
  const [country, setCountry] = useState('Argentina');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setError('Por favor, ingresa tu Nombre y Apellido.');
      return;
    }
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Por favor, ingresa un correo electrónico válido.');
      return;
    }
    if (!country) {
      setError('Por favor, selecciona tu país.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      await saveSubscriber({
        fullName,
        email,
        country,
        source: 'FridAI Brief Modal'
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setFullName('');
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative space-y-6 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#9ba1a5] hover:text-[#09193a] hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="space-y-2 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#60afc1]/15 text-[#09193a] text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-[#60afc1]" />
                <span>Aviso Semanal Gratuito</span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#09193a]">
                Suscríbete a Frid<span className="text-[#60afc1]">AI</span> Brief
              </h3>
              <p className="text-sm text-[#696484] leading-relaxed">
                Recibe cada Viernes AM un aviso conciso en texto plano con el enlace directo al análisis técnico y herramientas descargables de la semana.
              </p>
            </div>

            {/* Complete Subscriber Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-[#09193a] mb-1">
                  Nombre y Apellido
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#9ba1a5] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ej. Mariana Gómez"
                    required
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-[#09193a] focus:bg-white focus:outline-hidden focus:border-[#60afc1] focus:ring-2 focus:ring-[#60afc1]/20 transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-[#09193a] mb-1">
                  Correo Electrónico Corporativo / Profesional
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#9ba1a5] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="mariana.gomez@empresa.com"
                    required
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-[#09193a] focus:bg-white focus:outline-hidden focus:border-[#60afc1] focus:ring-2 focus:ring-[#60afc1]/20 transition-all"
                  />
                </div>
              </div>

              {/* Country Selection */}
              <div>
                <label className="block text-xs font-bold text-[#09193a] mb-1">
                  País
                </label>
                <div className="relative">
                  <Globe2 className="w-4 h-4 text-[#9ba1a5] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                    className="w-full pl-10 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-[#09193a] focus:bg-white focus:outline-hidden focus:border-[#60afc1] focus:ring-2 focus:ring-[#60afc1]/20 transition-all appearance-none cursor-pointer"
                  >
                    {LATAM_COUNTRIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {error && <p className="text-xs text-[#e76f51] mt-1 font-medium">{error}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-3 px-4 bg-[#e76f51] hover:bg-[#d55e40] text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 transform active:scale-98 disabled:opacity-75"
              >
                <span>{isSubmitting ? 'Registrando...' : 'Confirmar Suscripción Semanal'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-between text-xs text-[#696484] pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#60afc1]" />
                  Sin spam • 100% técnico
                </span>
                <button
                  type="button"
                  onClick={onOpenEmailPreview}
                  className="text-[#60afc1] hover:underline font-semibold cursor-pointer"
                >
                  Ver formato del aviso →
                </button>
              </div>
            </form>

            {/* Alternative: Add to Calendar directly */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <span className="block text-xs font-bold text-[#09193a]">
                O sincroniza tu calendario en 1 clic:
              </span>
              
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={getGoogleCalendarUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-semibold text-[#09193a] flex items-center justify-center gap-2 transition-colors text-center"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#60afc1]" />
                  <span>Google Calendar</span>
                </a>

                <button
                  type="button"
                  onClick={() => downloadIcsCalendar()}
                  className="p-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-semibold text-[#09193a] flex items-center justify-center gap-2 transition-colors cursor-pointer text-center"
                >
                  <Download className="w-3.5 h-3.5 text-[#696484]" />
                  <span>Apple / Outlook (.ics)</span>
                </button>
              </div>
            </div>
          </>
        ) : (
          /* Subscription Success State */
          <div className="text-center py-4 space-y-5">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-[#09193a]">
                ¡Suscripción Confirmada!
              </h3>
              <p className="text-sm text-[#696484] leading-relaxed">
                Hemos registrado a <strong className="text-[#09193a]">{fullName}</strong> (<span className="text-[#09193a] font-medium">{email}</span>) de <strong className="text-[#09193a]">{country}</strong>. Cada Viernes AM recibirás el aviso con el link de la nueva entrega.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2">
              <span className="font-bold text-[#09193a] flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#60afc1]" />
                Recomendación: Sincroniza tu calendario
              </span>
              <p className="text-[#696484]">
                Para no depender únicamente de tu bandeja de entrada, añade el recordatorio de las 15 semanas a tu calendario preferido:
              </p>
              <div className="flex gap-2 pt-1">
                <a
                  href={getGoogleCalendarUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 bg-[#60afc1] text-[#09193a] text-xs font-bold rounded-lg text-center hover:bg-[#4ea0b2] transition-colors"
                >
                  Google Calendar
                </a>
                <button
                  type="button"
                  onClick={() => downloadIcsCalendar()}
                  className="flex-1 py-2 px-3 bg-white border border-slate-200 text-[#09193a] text-xs font-bold rounded-lg text-center hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Descargar .ics
                </button>
              </div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="w-full py-3 bg-[#09193a] text-white text-xs font-bold rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Cerrar y Continuar Explorando
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
