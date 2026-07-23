import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sword,
  Shield,
  Footprints,
  Gem,
  TrendingUp,
  Bomb,
  ShoppingCart,
  BedDouble,
  Flame,
  Hammer,
  Search,
  Swords,
  ChevronRight,
  X,
  BookOpen,
  Activity,
  Dices,
  Brain,
  Zap,
  Users
} from 'lucide-react';
import { bedwarsTips, categories } from './data';
import { Tip, Category } from './types';
import Analyzer from './components/Analyzer';
import Challenges from './components/Challenges';
import BridgeGuide from './components/BridgeGuide';
import PvPGuide from './components/PvPGuide';
import StrategyGuide from './components/StrategyGuide';
import ClutchGuide from './components/ClutchGuide';
import TeamGuide from './components/TeamGuide';
import MindsetGuide from './components/MindsetGuide';

import TipDetails from './components/TipDetails';

const iconMap: Record<string, React.FC<any>> = {
  sword: Sword,
  shield: Shield,
  footprints: Footprints,
  gem: Gem,
  'trending-up': TrendingUp,
  bomb: Bomb,
  'shopping-cart': ShoppingCart,
  bed: BedDouble,
  flame: Flame,
  hammer: Hammer,
};

const levelColorMap = {
  Iniciante: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Intermediário: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Avançado: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
};

export default function App() {
  const [currentView, setCurrentView] = useState<'tips' | 'tip-details' | 'analyzer' | 'challenges' | 'bridge-guide' | 'pvp-guide' | 'strategy-guide' | 'clutch-guide' | 'team-guide' | 'mindset-guide'>('tips');
  const [activeCategory, setActiveCategory] = useState<Category>('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTip, setSelectedTip] = useState<Tip | null>(null);

  const filteredTips = bedwarsTips.filter((tip) => {
    const matchesCategory = activeCategory === 'Todos' || tip.category === activeCategory;
    const matchesSearch = tip.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tip.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSelectTip = (tip: Tip) => {
    setSelectedTip(tip);
    setCurrentView('tip-details');
  };

  const handleBackToTips = () => {
    setSelectedTip(null);
    setCurrentView('tips');
  };

  return (
    <div className="min-h-screen bg-zinc-950 font-sans selection:bg-cyan-500/30">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Swords className="w-5 h-5 text-cyan-400" />
              <span className="font-bold text-white tracking-tight">Nexus Academy</span>
            </div>
            
            <div className="hidden md:flex flex-wrap items-center justify-end gap-1">
              <button
                onClick={() => setCurrentView('tips')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  currentView === 'tips' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                }`}
              >
                Biblioteca
              </button>
              <button
                onClick={() => setCurrentView('analyzer')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  currentView === 'analyzer' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                }`}
              >
                Analista IA
              </button>
              <button
                onClick={() => setCurrentView('challenges')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  currentView === 'challenges' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                }`}
              >
                Desafios
              </button>
              <button
                onClick={() => setCurrentView('bridge-guide')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  currentView === 'bridge-guide' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                }`}
              >
                Pontes
              </button>
              <button
                onClick={() => setCurrentView('pvp-guide')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  currentView === 'pvp-guide' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                }`}
              >
                PvP
              </button>
              <button
                onClick={() => setCurrentView('strategy-guide')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  currentView === 'strategy-guide' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                }`}
              >
                Estratégia
              </button>
              <button
                onClick={() => setCurrentView('clutch-guide')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  currentView === 'clutch-guide' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                }`}
              >
                Clutches
              </button>
              <button
                onClick={() => setCurrentView('team-guide')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  currentView === 'team-guide' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                }`}
              >
                Equipe
              </button>
              <button
                onClick={() => setCurrentView('mindset-guide')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  currentView === 'mindset-guide' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                }`}
              >
                Mentalidade
              </button>
            </div>
          </div>
        </div>
        {/* Mobile scrollable nav */}
        <div className="md:hidden flex overflow-x-auto px-4 pb-2 gap-1 snap-x scrollbar-hide">
             <button
                onClick={() => setCurrentView('tips')}
                className={`flex-shrink-0 snap-center px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  currentView === 'tips' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                Biblioteca
              </button>
              <button
                onClick={() => setCurrentView('analyzer')}
                className={`flex-shrink-0 snap-center px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  currentView === 'analyzer' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                Analista IA
              </button>
              <button
                onClick={() => setCurrentView('challenges')}
                className={`flex-shrink-0 snap-center px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  currentView === 'challenges' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                Desafios
              </button>
              <button
                onClick={() => setCurrentView('bridge-guide')}
                className={`flex-shrink-0 snap-center px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  currentView === 'bridge-guide' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                Pontes
              </button>
              <button
                onClick={() => setCurrentView('pvp-guide')}
                className={`flex-shrink-0 snap-center px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  currentView === 'pvp-guide' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                PvP
              </button>
              <button
                onClick={() => setCurrentView('strategy-guide')}
                className={`flex-shrink-0 snap-center px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  currentView === 'strategy-guide' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                Estratégia
              </button>
              <button
                onClick={() => setCurrentView('clutch-guide')}
                className={`flex-shrink-0 snap-center px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  currentView === 'clutch-guide' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                Clutches
              </button>
              <button
                onClick={() => setCurrentView('team-guide')}
                className={`flex-shrink-0 snap-center px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  currentView === 'team-guide' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                Equipe
              </button>
              <button
                onClick={() => setCurrentView('mindset-guide')}
                className={`flex-shrink-0 snap-center px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  currentView === 'mindset-guide' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                Mentalidade
              </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {currentView === 'tips' ? (
          <>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-2">Biblioteca de Dicas</h2>
              <p className="text-zinc-400">Estratégias e técnicas para melhorar seu jogo no Bedwars.</p>
            </div>
            {/* Controls */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-cyan-500 text-zinc-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                    : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-zinc-500" />
            </div>
            <input
              type="text"
              placeholder="Buscar dica..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2.5 border border-zinc-800 rounded-xl leading-5 bg-zinc-900/50 text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors sm:text-sm"
            />
          </div>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredTips.map((tip, index) => {
              const Icon = iconMap[tip.iconName] || Swords;
              
              return (
                <motion.div
                  key={tip.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => handleSelectTip(tip)}
                  className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:bg-zinc-800/50 transition-colors group flex flex-col h-full cursor-pointer relative overflow-hidden"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2.5 bg-zinc-800/80 rounded-xl group-hover:bg-cyan-500/10 group-hover:text-cyan-400 transition-colors text-zinc-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${levelColorMap[tip.level]}`}>
                      {tip.level}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-zinc-100 mb-3 group-hover:text-cyan-400 transition-colors">
                    {tip.title}
                  </h3>
                  
                  <p className="text-zinc-400 text-sm leading-relaxed flex-grow">
                    {tip.content}
                  </p>
                  
                  <div className="mt-6 pt-4 border-t border-zinc-800/50 flex items-center justify-between text-xs font-medium text-zinc-500 uppercase tracking-wider">
                    <span>{tip.category}</span>
                    <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-400" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

            {filteredTips.length === 0 && (
              <div className="text-center py-24">
                <p className="text-zinc-500 text-lg">Nenhuma dica encontrada para sua busca.</p>
              </div>
            )}
          </>
        ) : currentView === 'tip-details' && selectedTip ? (
          <TipDetails tip={selectedTip} onBack={handleBackToTips} />
        ) : currentView === 'analyzer' ? (
          <Analyzer />
        ) : currentView === 'challenges' ? (
          <Challenges />
        ) : currentView === 'bridge-guide' ? (
          <BridgeGuide />
        ) : currentView === 'pvp-guide' ? (
          <PvPGuide />
        ) : currentView === 'strategy-guide' ? (
          <StrategyGuide />
        ) : currentView === 'clutch-guide' ? (
          <ClutchGuide />
        ) : currentView === 'team-guide' ? (
          <TeamGuide />
        ) : (
          <MindsetGuide />
        )}
      </main>

      <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-end">
        <p className="text-zinc-500 text-sm font-medium tracking-wide">
          feito por <span className="text-cyan-500 font-bold">lozin</span>
        </p>
      </footer>
    </div>
  );
}
