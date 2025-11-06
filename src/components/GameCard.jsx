import React from 'react';
import { Play } from 'lucide-react';

const GameCard = ({ title, icon: Icon, onPlay, disabled = false }) => {
  return (
    <div className="group relative rounded-2xl p-4 bg-slate-900/60 border border-slate-800 hover:border-blue-500/60 transition overflow-hidden">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-blue-600/10 via-cyan-400/10 to-transparent pointer-events-none" />
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-[0_0_25px_rgba(59,130,246,0.4)]">
          {Icon && <Icon size={28} />}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-slate-100 mb-1">{title}</h3>
          <p className="text-xs text-slate-400 mb-3">Free · Offline · Smooth</p>
          <button
            onClick={onPlay}
            disabled={disabled}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium shadow focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50"
          >
            <Play size={16} />
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
