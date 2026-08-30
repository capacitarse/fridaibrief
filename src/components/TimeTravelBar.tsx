import React from 'react';
import { SlidersHorizontal, Unlock, Lock, Clock, Calendar, RefreshCw, Users } from 'lucide-react';

interface TimeTravelBarProps {
  unlockAll: boolean;
  onToggleUnlockAll: () => void;
  simulatedDate: string | null;
  onSelectSimulatedDate: (iso: string | null) => void;
  currentBaTime: string;
  onOpenSubscribers?: () => void;
}

export const TimeTravelBar: React.FC<TimeTravelBarProps> = ({
  unlockAll,
  onToggleUnlockAll,
  simulatedDate,
  onSelectSimulatedDate,
  currentBaTime,
  onOpenSubscribers
}) => {
  const milestoneDates = [
    { label: 'Tiempo Real', iso: null },
    { label: '#01 (4 Sep)', iso: '2026-09-04T08:05:00-03:00' },
    { label: '#04 (25 Sep)', iso: '2026-09-25T08:05:00-03:00' },
    { label: '#08 (23 Oct)', iso: '2026-10-23T08:05:00-03:00' },
    { label: '#12 (20 Nov)', iso: '2026-11-20T08:05:00-03:00' },
    { label: '#15 (11 Dic)', iso: '2026-12-11T08:05:00-03:00' },
  ];

  return (
    <div className="bg-[#09193a] text-white text-xs border-b border-slate-800 py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        
        {/* Left: Clock status */}
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-[#60afc1] animate-pulse"></span>
          <span className="font-semibold text-slate-300">Hora Buenos Aires (UTC-3):</span>
          <span className="font-mono text-[#60afc1] font-bold">{currentBaTime}</span>
        </div>

        {/* Center: Quick milestone simulator */}
        <div className="hidden md:flex items-center gap-1 text-[11px]">
          <span className="text-slate-400 mr-1 flex items-center gap-1">
            <Clock className="w-3 h-3 text-[#60afc1]" />
            Simular fecha:
          </span>
          {milestoneDates.map((item, idx) => {
            const isSelected = simulatedDate === item.iso;
            return (
              <button
                key={idx}
                onClick={() => onSelectSimulatedDate(item.iso)}
                className={`px-2 py-0.5 rounded-md font-medium transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#60afc1] text-[#09193a] font-bold'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {onOpenSubscribers && (
            <button
              onClick={onOpenSubscribers}
              className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-[#e76f51] hover:bg-[#d55e40] text-white flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
              title="Ver correos captados y exportar CSV"
            >
              <Users className="w-3 h-3" />
              <span>Ver Leads / Exportar CSV</span>
            </button>
          )}

          <button
            onClick={onToggleUnlockAll}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
              unlockAll
                ? 'bg-emerald-500 text-white'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
            }`}
          >
            {unlockAll ? <Unlock className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
            <span>{unlockAll ? "Modo Revisión Completo (Desbloqueado)" : "Desbloquear Todas para Revisión"}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
