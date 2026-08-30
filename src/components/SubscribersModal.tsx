import React, { useState, useEffect } from 'react';
import { 
  X, Users, Download, Copy, Check, Trash2, Mail, Globe2, 
  Search, FileSpreadsheet, Code2, ExternalLink, CheckCircle2, 
  Send, Sparkles, HelpCircle, RefreshCw, Layers
} from 'lucide-react';
import { Subscriber, getSubscribers, GOOGLE_APPS_SCRIPT_TEMPLATE } from '../utils/subscribers';

interface SubscribersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubscribersModal: React.FC<SubscribersModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'list' | 'google-sheets'>('list');
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [copiedEmails, setCopiedEmails] = useState(false);
  const [copiedScript, setCopiedScript] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Webhook URL configuration state
  const [webhookUrl, setWebhookUrl] = useState('');
  const [webhookSaved, setWebhookSaved] = useState(false);
  const [testStatus, setTestStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');

  const loadData = () => {
    setSubscribers(getSubscribers());
    const savedUrl = localStorage.getItem('fridai_webhook_url') || '';
    setWebhookUrl(savedUrl);
  };

  useEffect(() => {
    if (isOpen) {
      loadData();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filtered = subscribers.filter(s => 
    s.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleExportCSV = () => {
    if (subscribers.length === 0) return;
    
    const headers = ['Nombre y Apellido', 'Email', 'Pais', 'Fecha de Registro (ISO)', 'Fecha Local', 'Fuente'];
    const rows = subscribers.map(s => [
      `"${s.fullName.replace(/"/g, '""')}"`,
      `"${s.email.replace(/"/g, '""')}"`,
      `"${s.country.replace(/"/g, '""')}"`,
      `"${s.subscribedAt}"`,
      `"${new Date(s.subscribedAt).toLocaleString('es-AR')}"`,
      `"${s.source || 'FridAI Brief'}"`
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `Leads_FridAI_CapacitaRSE_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyAllEmails = () => {
    if (subscribers.length === 0) return;
    const emailsList = subscribers.map(s => s.email).join(', ');
    navigator.clipboard.writeText(emailsList);
    setCopiedEmails(true);
    setTimeout(() => setCopiedEmails(false), 2000);
  };

  const handleCopyScript = () => {
    navigator.clipboard.writeText(GOOGLE_APPS_SCRIPT_TEMPLATE);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2500);
  };

  const handleSaveWebhook = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('fridai_webhook_url', webhookUrl.trim());
    setWebhookSaved(true);
    setTimeout(() => setWebhookSaved(false), 3000);
  };

  const handleTestWebhook = async () => {
    if (!webhookUrl.trim()) return;
    setTestStatus('testing');
    try {
      await fetch(webhookUrl.trim(), {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: 'Prueba CapacitaRSE',
          email: 'contacto@cursosderse.com',
          country: 'Argentina',
          source: 'Test Webhook Verification',
          timestamp: new Date().toISOString()
        })
      });
      setTestStatus('success');
      setTimeout(() => setTestStatus('idle'), 4000);
    } catch (e) {
      console.error(e);
      setTestStatus('error');
      setTimeout(() => setTestStatus('idle'), 4000);
    }
  };

  const handleDeleteSubscriber = (id: string) => {
    const updated = subscribers.filter(s => s.id !== id);
    setSubscribers(updated);
    localStorage.setItem('fridai_subscribers', JSON.stringify(updated));
  };

  const handleClearAll = () => {
    if (window.confirm('¿Deseas vaciar los registros almacenados localmente en este navegador?')) {
      setSubscribers([]);
      localStorage.removeItem('fridai_subscribers');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative space-y-5 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#9ba1a5] hover:text-[#09193a] hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="space-y-1 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#60afc1]/15 text-[#09193a] text-xs font-bold">
              <Users className="w-3.5 h-3.5 text-[#60afc1]" />
              <span>Gestión de Base de Datos y Leads</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#09193a]">
              Suscriptores Frid<span className="text-[#60afc1]">AI</span> Brief
            </h3>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center bg-slate-100 p-1 rounded-2xl border border-slate-200 self-start sm:self-auto">
            <button
              onClick={() => setActiveTab('list')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'list' 
                  ? 'bg-white text-[#09193a] shadow-xs' 
                  : 'text-[#696484] hover:text-[#09193a]'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Leads ({subscribers.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('google-sheets')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'google-sheets' 
                  ? 'bg-[#09193a] text-white shadow-xs' 
                  : 'text-[#696484] hover:text-[#09193a]'
              }`}
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-[#60afc1]" />
              <span>Conectar Google Sheets</span>
            </button>
          </div>
        </div>

        {/* TAB 1: SUBSCRIBERS LIST & EXPORT */}
        {activeTab === 'list' && (
          <div className="space-y-4">
            {/* Actions Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              {/* Search */}
              <div className="relative flex-1 min-w-[200px]">
                <Search className="w-3.5 h-3.5 text-[#9ba1a5] absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar por nombre, email o país..."
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-[#09193a] focus:bg-white focus:outline-hidden focus:border-[#60afc1]"
                />
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyAllEmails}
                  disabled={subscribers.length === 0}
                  className="px-3 py-2 bg-slate-100 hover:bg-slate-200 disabled:opacity-50 text-[#09193a] text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
                  title="Copiar lista de correos separada por comas"
                >
                  {copiedEmails ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#696484]" />}
                  <span>{copiedEmails ? '¡Copiados!' : 'Copiar Mails'}</span>
                </button>

                <button
                  onClick={handleExportCSV}
                  disabled={subscribers.length === 0}
                  className="px-3.5 py-2 bg-[#e76f51] hover:bg-[#d55e40] disabled:opacity-50 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Descargar Base CSV (Excel)</span>
                </button>
              </div>
            </div>

            {/* Subscriber Table */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden max-h-72 overflow-y-auto bg-slate-50/50">
              {filtered.length > 0 ? (
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100 border-b border-slate-200 text-[#09193a] font-bold sticky top-0">
                    <tr>
                      <th className="py-2.5 px-4">Nombre y Apellido</th>
                      <th className="py-2.5 px-4">Email Corporativo</th>
                      <th className="py-2.5 px-4">País</th>
                      <th className="py-2.5 px-4 hidden sm:table-cell">Fecha</th>
                      <th className="py-2.5 px-3 text-right">Acción</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/70 bg-white">
                    {filtered.map((sub) => (
                      <tr key={sub.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-2.5 px-4 font-bold text-[#09193a]">
                          {sub.fullName}
                        </td>
                        <td className="py-2.5 px-4 text-[#09193a] font-medium">
                          <div className="flex items-center gap-1.5">
                            <Mail className="w-3 h-3 text-[#60afc1]" />
                            <span>{sub.email}</span>
                          </div>
                        </td>
                        <td className="py-2.5 px-4 text-[#696484]">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 text-[#09193a] font-semibold text-[11px]">
                            <Globe2 className="w-3 h-3 text-[#60afc1]" />
                            {sub.country}
                          </span>
                        </td>
                        <td className="py-2.5 px-4 text-[#696484] text-[11px] hidden sm:table-cell">
                          {new Date(sub.subscribedAt).toLocaleDateString('es-AR', {
                            day: '2-digit',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </td>
                        <td className="py-2.5 px-3 text-right">
                          <button
                            onClick={() => handleDeleteSubscriber(sub.id)}
                            className="text-slate-400 hover:text-[#e76f51] p-1 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                            title="Eliminar registro"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="p-8 text-center space-y-2">
                  <Mail className="w-8 h-8 text-[#9ba1a5] mx-auto opacity-50" />
                  <p className="text-xs font-bold text-[#09193a]">
                    {searchTerm ? 'No se encontraron registros con esa búsqueda' : 'Aún no hay suscriptores registrados'}
                  </p>
                  <p className="text-[11px] text-[#696484] max-w-sm mx-auto">
                    Cuando los profesionales de sostenibilidad completen el formulario en la web, sus datos (Nombre, Email y País) quedarán guardados aquí y se enviarán automáticamente a tu Google Sheet.
                  </p>
                </div>
              )}
            </div>

            {/* Hint to Google Sheets */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-[#09193a]">
                <FileSpreadsheet className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>¿Quieres sincronizar cada nuevo suscriptor directo a tu Google Sheet personal?</span>
              </div>
              <button
                onClick={() => setActiveTab('google-sheets')}
                className="text-xs font-bold text-[#60afc1] hover:underline shrink-0 cursor-pointer"
              >
                Configurar Webhook →
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: GOOGLE SHEETS & APPS SCRIPT WEBHOOK CONFIGURATION */}
        {activeTab === 'google-sheets' && (
          <div className="space-y-4 text-left">
            
            {/* Step by Step Guide */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#09193a] flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-[#60afc1]" />
                Pasos para conectar tu Google Sheets en 2 minutos:
              </h4>

              <ol className="text-xs text-[#696484] space-y-2 list-decimal list-inside leading-relaxed">
                <li>
                  Abre tu hoja de Google Sheets (por ejemplo, llamada <strong className="text-[#09193a]">Leads CapacitaRSE</strong>).
                </li>
                <li>
                  En el menú superior ve a: <span className="bg-white px-1.5 py-0.5 rounded-md border border-slate-200 font-mono text-[#09193a]">Extensiones &gt; Apps Script</span>.
                </li>
                <li>
                  Pega el script pre-diseñado y haz clic en <span className="bg-white px-1.5 py-0.5 rounded-md border border-slate-200 font-mono text-[#09193a]">Implementar &gt; Nueva implementación &gt; Aplicación Web</span> (Acceso: "Cualquier persona").
                </li>
                <li>
                  Pega la URL web generada en el campo de abajo y presiona <strong className="text-[#09193a]">Guardar</strong>.
                </li>
              </ol>

              <div className="pt-2 flex items-center gap-2">
                <button
                  onClick={handleCopyScript}
                  className="px-4 py-2 bg-[#09193a] hover:bg-slate-800 text-white font-bold text-xs rounded-xl flex items-center gap-2 transition-all cursor-pointer shadow-xs"
                >
                  {copiedScript ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#60afc1]" />}
                  <span>{copiedScript ? '¡Script Copiado al Portapapeles!' : 'Copiar Código de Google Apps Script'}</span>
                </button>
              </div>
            </div>

            {/* Webhook URL Input & Test */}
            <form onSubmit={handleSaveWebhook} className="space-y-2">
              <label className="block text-xs font-bold text-[#09193a]">
                URL de tu Webhook / Aplicación Web de Google Apps Script (o Make/Zapier):
              </label>
              <div className="flex gap-2">
                <input
                  type="url"
                  value={webhookUrl}
                  onChange={(e) => setWebhookUrl(e.target.value)}
                  placeholder="https://script.google.com/macros/s/.../exec"
                  className="flex-1 px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-[#09193a] focus:bg-white focus:outline-hidden focus:border-[#60afc1]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#60afc1] hover:bg-[#4ea0b2] text-[#09193a] font-bold text-xs rounded-xl transition-all cursor-pointer"
                >
                  {webhookSaved ? '¡Guardado!' : 'Guardar URL'}
                </button>
                <button
                  type="button"
                  onClick={handleTestWebhook}
                  disabled={!webhookUrl || testStatus === 'testing'}
                  className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 disabled:opacity-50 text-[#09193a] font-bold text-xs rounded-xl flex items-center gap-1.5 transition-all cursor-pointer"
                  title="Enviar lead de prueba al webhook"
                >
                  <Send className="w-3 h-3 text-[#696484]" />
                  <span>{testStatus === 'testing' ? 'Probando...' : 'Probar Envío'}</span>
                </button>
              </div>

              {testStatus === 'success' && (
                <p className="text-[11px] text-emerald-600 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  ¡Envío de prueba exitoso! Revisa tu Google Sheet.
                </p>
              )}

              {testStatus === 'error' && (
                <p className="text-[11px] text-[#e76f51] font-bold">
                  Hubo un error al contactar la URL. Verifica que la implementación esté en modo "Cualquier persona" (Anyone).
                </p>
              )}
            </form>

            {/* Email Automation Notice */}
            <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-[#09193a] space-y-1">
              <span className="font-bold flex items-center gap-1.5 text-amber-900">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                Automatización de Envíos de los Viernes:
              </span>
              <p className="text-[#696484] text-[11px] leading-relaxed">
                El script incluye la función <code className="bg-white px-1 py-0.5 rounded font-mono text-[#09193a]">sendWeeklyFridayBriefEmails()</code> que puedes programar como un "Activador temporal" (Trigger) en Apps Script cada viernes a las 8:00 AM, o sincronizar esa misma hoja de Google Sheets con tu cuenta de Mailchimp/Brevo para el despacho automático.
              </p>
            </div>

          </div>
        )}

        {/* Footer actions */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
          {activeTab === 'list' && subscribers.length > 0 ? (
            <button
              onClick={handleClearAll}
              className="text-[#e76f51] hover:underline font-semibold cursor-pointer text-[11px]"
            >
              Vaciar registros locales
            </button>
          ) : (
            <div></div>
          )}
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#09193a] text-white font-bold rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Cerrar Panel
          </button>
        </div>

      </div>
    </div>
  );
};
