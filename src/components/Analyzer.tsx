import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, Trophy, Skull, Loader2, Sparkles } from 'lucide-react';

interface AnalysisResult {
  diagnostic: string;
  playstyle: string;
  rank: string;
  tips: string[];
}

const rankColors: Record<string, string> = {
  'S': 'text-yellow-400 border-yellow-400 bg-yellow-400/10',
  'A': 'text-purple-400 border-purple-400 bg-purple-400/10',
  'B': 'text-blue-400 border-blue-400 bg-blue-400/10',
  'C': 'text-green-400 border-green-400 bg-green-400/10',
  'D': 'text-orange-400 border-orange-400 bg-orange-400/10',
  'E': 'text-red-400 border-red-400 bg-red-400/10',
  'F': 'text-zinc-400 border-zinc-400 bg-zinc-400/10',
};

export default function Analyzer() {
  const [wins, setWins] = useState<number | ''>('');
  const [beds, setBeds] = useState<number | ''>('');
  const [kdr, setKdr] = useState<number | ''>('');
  
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (wins === '' || beds === '' || kdr === '') return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ wins, beds, kdr }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erro ao analisar status.');
      }

      const data = await response.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message || 'Erro inesperado.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Analista de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Desempenho</span>
        </h2>
        <p className="text-zinc-400 text-lg">
          Insira seus status e descubra que tipo de jogador de Bedwars você realmente é.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Formulário */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 md:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <Target className="w-48 h-48" />
          </div>
          
          <form onSubmit={handleAnalyze} className="relative z-10 space-y-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-zinc-300 mb-2">
                <Trophy className="w-4 h-4 text-yellow-500" />
                Total de Vitórias
              </label>
              <input
                type="number"
                min="0"
                value={wins}
                onChange={(e) => setWins(e.target.value === '' ? '' : Number(e.target.value))}
                placeholder="Ex: 150"
                className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-colors"
                required
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-zinc-300 mb-2">
                <Target className="w-4 h-4 text-red-500" />
                Camas Destruídas
              </label>
              <input
                type="number"
                min="0"
                value={beds}
                onChange={(e) => setBeds(e.target.value === '' ? '' : Number(e.target.value))}
                placeholder="Ex: 320"
                className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-colors"
                required
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-zinc-300 mb-2">
                <Skull className="w-4 h-4 text-zinc-400" />
                KDR (Kill/Death Ratio)
              </label>
              <input
                type="number"
                step="0.01"
                min="0"
                value={kdr}
                onChange={(e) => setKdr(e.target.value === '' ? '' : Number(e.target.value))}
                placeholder="Ex: 1.5"
                className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3.5 px-6 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Analisando...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Analisar Status
                </>
              )}
            </button>

            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm text-center">
                {error}
              </div>
            )}
          </form>
        </div>

        {/* Resultado */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {!result && !loading ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full border-2 border-dashed border-zinc-800 rounded-3xl flex flex-col items-center justify-center p-8 text-center text-zinc-500"
              >
                <Target className="w-16 h-16 mb-4 opacity-50" />
                <p>Preencha seus status ao lado para receber a avaliação da inteligência artificial.</p>
              </motion.div>
            ) : loading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full border border-zinc-800 bg-zinc-900/30 rounded-3xl flex flex-col items-center justify-center p-8 text-center"
              >
                <div className="relative">
                  <div className="w-20 h-20 border-4 border-zinc-800 rounded-full"></div>
                  <div className="w-20 h-20 border-4 border-cyan-500 rounded-full border-t-transparent animate-spin absolute top-0 left-0"></div>
                </div>
                <p className="mt-6 text-zinc-400 font-medium animate-pulse">Calculando o nível de tryhard...</p>
              </motion.div>
            ) : result ? (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", bounce: 0.4 }}
                className="h-full bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-8 flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
                
                <div className="flex items-start justify-between mb-8 relative z-10">
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-1">Estilo de Jogo</h3>
                    <p className="text-2xl font-bold text-white">{result.playstyle}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] font-bold text-zinc-500 uppercase mb-1">Rank</span>
                    <div className={`w-14 h-14 rounded-2xl border-2 flex items-center justify-center text-3xl font-black ${rankColors[result.rank] || rankColors['F']}`}>
                      {result.rank}
                    </div>
                  </div>
                </div>

                <div className="mb-8 relative z-10">
                  <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-3">Diagnóstico do Analista</h3>
                  <div className="p-4 bg-zinc-950 rounded-2xl border border-zinc-800">
                    <p className="text-zinc-300 italic">"{result.diagnostic}"</p>
                  </div>
                </div>

                <div className="flex-1 relative z-10">
                  <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-3">Como Melhorar</h3>
                  <ul className="space-y-4">
                    {result.tips.map((tip, idx) => (
                      <li key={idx} className="flex gap-3 text-zinc-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
