import React, { useMemo, useState } from 'react';
import HeaderBar from './components/HeaderBar';
import GameGrid from './components/GameGrid';
import FooterBar from './components/FooterBar';
import Modal from './components/Modal';

function App() {
  const [soundOn, setSoundOn] = useState(true);
  const [activeGame, setActiveGame] = useState(null);
  const [showHelp, setShowHelp] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const helpContent = useMemo(() => ({
    ludo: 'Ludo: Roll the dice and move all your tokens to home. Single-device local play.\nControls: Tap to roll, tap token to move.',
    poker: 'Poker Practice: Play simplified Texas Hold’em against bots. No money, just practice.\nControls: Buttons for Fold, Check, Bet.',
    carrom: 'Carrom: Pocket all your coins and the queen.\nControls: Drag to aim, release to strike.',
    chess: 'Chess: Classic chess vs. local friend.\nControls: Tap a piece, then tap a square.',
    snake: 'Snake & Ladder: Climb ladders, avoid snakes.\nControls: Tap to roll; tokens move automatically.',
    cards: 'Card Games: Simple solitaire and matching mini-games.\nControls: Tap and drag cards as indicated.'
  }), []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="fixed inset-0 bg-[radial-gradient(1200px_600px_at_50%_-200px,rgba(37,99,235,0.35),transparent)] pointer-events-none" />

      <HeaderBar soundOn={soundOn} onToggleSound={() => setSoundOn((s) => !s)} />

      {!activeGame && (
        <main>
          <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-10">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex items-center justify-between">
              <div>
                <h1 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">Welcome to GameHub Free Play</h1>
                <p className="text-slate-400 mt-2 text-sm">Pick a game below to start instantly. Everything runs offline. No real-money transactions.</p>
              </div>
              <img src="/gamehub-logo.png" alt="GameHub Logo" className="hidden sm:block w-20 h-20 object-contain opacity-90" onError={(e)=>{e.currentTarget.style.display='none';}} />
            </div>
          </section>

          <GameGrid onSelect={(key) => { setActiveGame(key); setShowHelp(true); }} />
        </main>
      )}

      {activeGame && (
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-slate-800">
              <div className="text-lg font-medium capitalize">{activeGame.replace('-', ' ')}</div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-sm" onClick={() => setShowHelp(true)}>Rules</button>
                <button className="px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm" onClick={() => setActiveGame(null)}>Exit</button>
              </div>
            </div>
            <div className="aspect-video bg-[conic-gradient(at_30%_30%,#0ea5e9_0deg,#1e293b_120deg,#0ea5e9_240deg,#1e293b_360deg)] flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-bold tracking-tight">{activeGame === 'poker' ? 'Practice Table' : 'Coming Soon'}</div>
                <p className="text-slate-300 mt-2">This interactive preview demonstrates the app’s design. Full game engines can be integrated next.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      <FooterBar onOpenHelp={() => setShowHelp(true)} onOpenSettings={() => setShowSettings(true)} />

      <Modal open={showHelp} title="Help & Rules" onClose={() => setShowHelp(false)}>
        <p className="whitespace-pre-line">{activeGame ? helpContent[activeGame] : 'Select a game to see the rules. Games are free, offline, and ad-light. Use Settings to toggle sound effects.'}</p>
      </Modal>

      <Modal open={showSettings} title="Settings" onClose={() => setShowSettings(false)}>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Sound Effects</span>
            <button onClick={() => setSoundOn((s) => !s)} className={`px-3 py-1.5 rounded-lg text-sm border ${soundOn ? 'bg-blue-600 text-white border-blue-500' : 'bg-slate-800 border-slate-700 text-slate-200'}`}>
              {soundOn ? 'On' : 'Off'}
            </button>
          </div>
          <p className="text-slate-400 text-sm">Design theme: Dark + neon blue. Rounded buttons, clean layout.</p>
        </div>
      </Modal>
    </div>
  );
}

export default App;
