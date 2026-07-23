import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dices, Sparkles, Zap, Flame, ShieldAlert } from 'lucide-react';

type Difficulty = 'Fácil' | 'Médio' | 'Difícil';

interface Challenge {
  id: number;
  title: string;
  description: string;
  difficulty: Difficulty;
}

const challenges: Challenge[] = [
  {
    id: 1,
    title: 'Mão de Vaca',
    description: 'Vença a partida sem comprar NENHUMA peça de armadura.',
    difficulty: 'Fácil',
  },
  {
    id: 2,
    title: 'Lenhador Furioso',
    description: 'Jogue a partida inteira usando um machado (qualquer material) como sua arma principal.',
    difficulty: 'Fácil',
  },
  {
    id: 3,
    title: 'O Fantasma',
    description: 'Quebre uma cama inimiga sem dar nenhum hit no dono da ilha (use distração, blocos ou poção de invisibilidade).',
    difficulty: 'Fácil',
  },
  {
    id: 4,
    title: 'Arquiteto Lento',
    description: 'Faça as pontes apertando shift o tempo todo (sem ninja bridge ou speed bridge) e tente não ser derrubado.',
    difficulty: 'Fácil',
  },
  {
    id: 5,
    title: 'Sem Espada',
    description: 'Ganhe o jogo usando apenas graveto de knockback, ferramentas (picareta/machado) ou os punhos.',
    difficulty: 'Médio',
  },
  {
    id: 6,
    title: 'Chuva de Meteoros',
    description: 'Compre 10 bolas de fogo (fireballs) e consiga pelo menos 3 kills jogando os inimigos no void com elas.',
    difficulty: 'Médio',
  },
  {
    id: 7,
    title: 'Alpinista do Void',
    description: 'Construa uma ponte até o limite de altura do mapa antes de descer de balde de água (ou quebrando queda) na base inimiga.',
    difficulty: 'Médio',
  },
  {
    id: 8,
    title: 'Nômade',
    description: 'Não construa nenhuma defesa na sua cama. Deixe-a exposta e vença a partida.',
    difficulty: 'Difícil',
  },
  {
    id: 9,
    title: 'Invasor de Casas',
    description: 'Após quebrar a primeira cama inimiga, mude-se para a base deles e use a forja de lá pelo resto do jogo.',
    difficulty: 'Difícil',
  },
  {
    id: 10,
    title: 'Astronauta (TNT Jump)',
    description: 'Quebre uma cama fazendo um TNT Jump (pulo com explosão) da sua ponte direto para o buraco da cama inimiga.',
    difficulty: 'Difícil',
  },
];

const difficultyConfig = {
  Fácil: {
    color: 'text-green-400',
    bg: 'bg-green-400/10',
    border: 'border-green-400/20',
    icon: Zap,
  },
  Médio: {
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    border: 'border-yellow-400/20',
    icon: Flame,
  },
  Difícil: {
    color: 'text-red-400',
    bg: 'bg-red-400/10',
    border: 'border-red-400/20',
    icon: ShieldAlert,
  },
};

export default function Challenges() {
  const [currentChallenge, setCurrentChallenge] = useState<Challenge | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateChallenge = () => {
    setIsGenerating(true);
    setCurrentChallenge(null);
    
    // Simula um tempo de "roleta"
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * challenges.length);
      setCurrentChallenge(challenges[randomIndex]);
      setIsGenerating(false);
    }, 800);
  };

  return (
    <div className="max-w-4xl mx-auto w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Gerador de <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Desafios Malucos</span>
        </h2>
        <p className="text-zinc-400 text-lg">
          Cansado de jogar sempre igual? Gire a roleta e tente cumprir essas missões insanas na sua próxima partida!
        </p>
      </div>

      <div className="flex flex-col items-center">
        {/* Roleta/Resultado */}
        <div className="w-full max-w-2xl bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-12 min-h-[300px] flex flex-col items-center justify-center relative overflow-hidden mb-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

          <AnimatePresence mode="wait">
            {!currentChallenge && !isGenerating ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center flex flex-col items-center z-10"
              >
                <div className="p-4 bg-zinc-800/50 rounded-full mb-6">
                  <Dices className="w-12 h-12 text-zinc-400" />
                </div>
                <p className="text-zinc-500 text-xl font-medium">Clique no botão abaixo para receber um desafio.</p>
              </motion.div>
            ) : isGenerating ? (
              <motion.div
                key="generating"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center flex flex-col items-center z-10"
              >
                <Dices className="w-16 h-16 text-purple-400 animate-spin mb-6" />
                <p className="text-zinc-300 text-xl font-medium animate-pulse">Sorteando um desafio insano...</p>
              </motion.div>
            ) : (
              currentChallenge && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                  className="text-center z-10 w-full"
                >
                  <div className="flex justify-center mb-6">
                    {(() => {
                      const config = difficultyConfig[currentChallenge.difficulty];
                      const Icon = config.icon;
                      return (
                        <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full border font-bold text-sm uppercase tracking-wider ${config.bg} ${config.border} ${config.color}`}>
                          <Icon className="w-4 h-4" />
                          {currentChallenge.difficulty}
                        </div>
                      );
                    })()}
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
                    {currentChallenge.title}
                  </h3>
                  
                  <div className="p-6 bg-zinc-950/50 border border-zinc-800/80 rounded-2xl">
                    <p className="text-zinc-300 text-lg md:text-xl leading-relaxed">
                      {currentChallenge.description}
                    </p>
                  </div>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>

        <button
          onClick={generateChallenge}
          disabled={isGenerating}
          className="flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transform hover:-translate-y-1 active:translate-y-0"
        >
          {isGenerating ? (
            <Dices className="w-6 h-6 animate-spin" />
          ) : (
            <Sparkles className="w-6 h-6" />
          )}
          {currentChallenge ? 'Girar Novamente' : 'Gerar Desafio'}
        </button>
      </div>
    </div>
  );
}
