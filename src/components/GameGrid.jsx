import React from 'react';
import { Gamepad2, Trophy, Joystick, Dice1, Rocket, GaugeCircle, Crown } from 'lucide-react';
import GameCard from './GameCard';

const GameGrid = ({ onSelect }) => {
  const games = [
    { key: 'ludo', title: 'Ludo', icon: Dice1 },
    { key: 'poker', title: 'Poker (Practice)', icon: Crown },
    { key: 'carrom', title: 'Carrom', icon: GaugeCircle },
    { key: 'chess', title: 'Chess', icon: Trophy },
    { key: 'snake', title: 'Snake & Ladder', icon: Rocket },
    { key: 'cards', title: 'Card Games', icon: Gamepad2 },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-100">Choose a Game</h2>
          <p className="text-slate-400 text-sm">All games are free, offline, and ad-light.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {games.map((g) => (
          <GameCard key={g.key} title={g.title} icon={g.icon} onPlay={() => onSelect(g.key)} />
        ))}
      </div>
    </section>
  );
};

export default GameGrid;
