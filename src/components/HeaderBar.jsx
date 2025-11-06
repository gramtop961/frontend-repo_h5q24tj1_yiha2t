import React from 'react';
import { Flame, Gamepad2, Volume2, VolumeX, User } from 'lucide-react';

const HeaderBar = ({ soundOn, onToggleSound }) => {
  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/70 border-b border-slate-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3 select-none">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-[0_0_30px_rgba(56,189,248,0.45)]">
            <Flame className="absolute -left-1 -top-1 text-blue-200/70" size={16} />
            <Gamepad2 className="text-white" size={22} />
          </div>
          <div>
            <div className="text-lg font-semibold tracking-wide bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-400 bg-clip-text text-transparent">
              GameHub Free Play
            </div>
            <p className="text-xs text-slate-400">Play multiple games in one place — free and offline</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSound}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/60 hover:bg-slate-800 border border-slate-700 text-slate-200 transition shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]"
            aria-label={soundOn ? 'Mute sound effects' : 'Unmute sound effects'}
          >
            {soundOn ? <Volume2 size={18} /> : <VolumeX size={18} />}
            <span className="text-sm hidden sm:block">{soundOn ? 'Sound On' : 'Sound Off'}</span>
          </button>

          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/60 border border-slate-700 text-slate-200">
            <User size={18} className="text-blue-300" />
            <span className="text-sm">Guest</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;
