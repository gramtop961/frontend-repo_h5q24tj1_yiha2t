import React from 'react';
import { HelpCircle, Settings, ShieldCheck } from 'lucide-react';

const FooterBar = ({ onOpenHelp, onOpenSettings }) => {
  return (
    <footer className="w-full mt-10 border-t border-slate-800 bg-slate-900/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">© {new Date().getFullYear()} GameHub Free Play — No real-money transactions.</p>
        <div className="flex items-center gap-2">
          <button onClick={onOpenHelp} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/60 hover:bg-slate-800 border border-slate-700 text-slate-200">
            <HelpCircle size={16} />
            <span className="text-sm">Help & Rules</span>
          </button>
          <button onClick={onOpenSettings} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/60 hover:bg-slate-800 border border-slate-700 text-slate-200">
            <Settings size={16} />
            <span className="text-sm">Settings</span>
          </button>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-6 flex items-center gap-2 text-slate-500 text-xs">
        <ShieldCheck size={14} />
        Free, offline practice. No ads during gameplay.
      </div>
    </footer>
  );
};

export default FooterBar;
