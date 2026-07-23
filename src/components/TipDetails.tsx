import { useState } from 'react';
import { motion } from 'motion/react';
import { Tip } from '../types';
import { ChevronLeft, Sparkles, Loader2, Target, Swords, Shield, Gem, Footprints, Flame, Hammer, Bomb, ShoppingCart, Bed, TrendingUp } from 'lucide-react';

const iconMap: Record<string, React.FC<any>> = {
  sword: Swords,
  shield: Shield,
  gem: Gem,
  footprints: Footprints,
  flame: Flame,
  hammer: Hammer,
  bomb: Bomb,
  'shopping-cart': ShoppingCart,
  bed: Bed,
  'trending-up': TrendingUp,
};

const levelColorMap: Record<string, string> = {
  'Iniciante': 'text-green-400 border-green-400/20 bg-green-400/10',
  'Intermediário': 'text-yellow-400 border-yellow-400/20 bg-yellow-400/10',
  'Avançado': 'text-red-400 border-red-400/20 bg-red-400/10',
};

interface Props {
  tip: Tip;
  onBack: () => void;
}

export default function TipDetails({ tip, onBack }: Props) {
  const [activeTab, setActiveTab] = useState<'resumo' | 'detalhada'>('resumo');
  const [aiExplanation, setAiExplanation] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchDetailedExplanation = async () => {
    setActiveTab('detalhada');
    if (aiExplanation) return; // Já carregou antes

    setIsLoading(true);
    try {
      const response = await fetch('/api/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: tip.title,
          context: tip.content + ' ' + tip.detailedContent.join(' '),
        }),
      });
      const data = await response.json();
      if (data.explanation) {
        setAiExplanation(data.explanation);
      } else {
        setAiExplanation('Não foi possível gerar a explicação. Tente novamente.');
      }
    } catch (error) {
      setAiExplanation('Erro ao conectar com o Nexus AI.');
    } finally {
      setIsLoading(false);
    }
  };

  const Icon = iconMap[tip.iconName] || Target;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto w-full pb-16"
    >
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors group bg-zinc-900/50 px-4 py-2 rounded-xl border border-zinc-800"
      >
        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Voltar para as Dicas
      </button>

      <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 md:p-10 relative overflow-hidden">
        {/* Glow de fundo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        
        <div className="flex flex-col md:flex-row gap-6 items-start mb-10 relative z-10">
          <div className="p-4 bg-zinc-950 rounded-2xl text-cyan-400 border border-zinc-800 shadow-[0_0_15px_rgba(6,182,212,0.15)] flex-shrink-0">
            <Icon className="w-12 h-12" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-sm font-bold text-zinc-500 uppercase tracking-wider">{tip.category}</span>
              <span className={`px-3 py-1 text-xs font-bold rounded-full border ${levelColorMap[tip.level]}`}>
                {tip.level}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              {tip.title}
            </h2>
          </div>
        </div>

        {/* Abas */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-zinc-800/50 pb-4">
          <button
            onClick={() => setActiveTab('resumo')}
            className={`px-6 py-3 rounded-xl font-bold transition-all ${
              activeTab === 'resumo' 
                ? 'bg-zinc-800 text-white' 
                : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50'
            }`}
          >
            Resumo e Passos
          </button>
          <button
            onClick={fetchDetailedExplanation}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
              activeTab === 'detalhada' 
                ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-500/30' 
                : 'text-zinc-500 hover:text-cyan-400 hover:bg-zinc-800/50 border border-transparent'
            }`}
          >
            <Sparkles className="w-5 h-5" />
            Explicação Detalhada (AI)
          </button>
        </div>

        {/* Conteúdo das Abas */}
        <div className="relative z-10 min-h-[300px]">
          {activeTab === 'resumo' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <div className="p-6 bg-zinc-950/50 border border-zinc-800/80 rounded-2xl">
                <p className="text-xl text-zinc-300 leading-relaxed font-medium">
                  {tip.content}
                </p>
              </div>
              
              <div className="space-y-4 pl-2 border-l-2 border-zinc-800">
                {tip.detailedContent.map((paragraph, idx) => {
                  const colonIndex = paragraph.indexOf(':');
                  const hasPrefix = (paragraph.startsWith('Camada') || paragraph.startsWith('Passo') || paragraph.startsWith('1.') || paragraph.startsWith('2.') || paragraph.startsWith('3.') || paragraph.startsWith('4.')) && colonIndex !== -1;
                  
                  return (
                    <p key={idx} className="text-zinc-400 leading-relaxed text-lg">
                      {hasPrefix ? (
                        <>
                          <strong className="text-cyan-400">{paragraph.substring(0, colonIndex + 1)}</strong>
                          {paragraph.substring(colonIndex + 1)}
                        </>
                      ) : (
                        paragraph
                      )}
                    </p>
                  );
                })}
              </div>
            </motion.div>
          )}

          {activeTab === 'detalhada' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-6 bg-gradient-to-b from-cyan-950/20 to-zinc-950/50 border border-cyan-900/30 rounded-2xl"
            >
              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-16 text-cyan-500 gap-4">
                  <Loader2 className="w-10 h-10 animate-spin" />
                  <p className="font-medium animate-pulse text-lg">O Nexus AI está preparando a melhor explicação para você...</p>
                </div>
              ) : (
                <div className="prose prose-invert max-w-none">
                  {aiExplanation?.split('\n').map((line, i) => {
                    // Processamento simples de markdown (negrito e tópicos)
                    if (line.startsWith('#')) {
                      return <h3 key={i} className="text-2xl font-bold text-white mt-6 mb-3">{line.replace(/#/g, '')}</h3>;
                    }
                    if (line.startsWith('* ') || line.startsWith('- ')) {
                      return <li key={i} className="text-zinc-300 text-lg ml-4 mb-2">{line.substring(2)}</li>;
                    }
                    if (line.trim() === '') return <br key={i} />;
                    
                    const boldedText = line.split(/(\*\*.*?\*\*)/).map((part, j) => {
                      if (part.startsWith('**') && part.endsWith('**')) {
                        return <strong key={j} className="text-cyan-400">{part.slice(2, -2)}</strong>;
                      }
                      return part;
                    });
                    
                    return <p key={i} className="text-zinc-300 text-lg leading-relaxed mb-4">{boldedText}</p>;
                  })}
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
