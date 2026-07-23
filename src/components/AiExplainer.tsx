import { useState } from 'react';
import { Sparkles, Loader2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Props {
  title: string;
  context: string;
}

export default function AiExplainer({ title, context }: Props) {
  const [explanation, setExplanation] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const fetchExplanation = async () => {
    setIsOpen(true);
    if (explanation) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, context }),
      });
      const data = await response.json();
      if (data.explanation) {
        setExplanation(data.explanation);
      } else {
        setExplanation('Não foi possível gerar a explicação. Tente novamente.');
      }
    } catch (error) {
      setExplanation('Erro ao conectar com o Nexus AI.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-6">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="button"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={fetchExplanation}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold transition-all bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 w-full sm:w-auto justify-center"
            >
              <Sparkles className="w-5 h-5" />
              Aprofundar com IA
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="p-5 bg-gradient-to-b from-cyan-950/20 to-zinc-950/50 border border-cyan-900/30 rounded-2xl relative"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {isLoading ? (
               <div className="flex flex-col items-center justify-center py-8 text-cyan-500 gap-3">
                 <Loader2 className="w-8 h-8 animate-spin" />
                 <p className="font-medium animate-pulse text-sm">O Nexus AI está preparando a explicação detalhada...</p>
               </div>
            ) : (
              <div className="space-y-4 pt-4">
                {explanation?.split('\n').map((line, i) => {
                  if (line.startsWith('#')) {
                    return <h4 key={i} className="text-xl font-bold text-white mt-4 mb-2">{line.replace(/#/g, '')}</h4>;
                  }
                  if (line.startsWith('* ') || line.startsWith('- ')) {
                    return <li key={i} className="text-zinc-300 text-sm md:text-base ml-4">{line.substring(2)}</li>;
                  }
                  if (line.trim() === '') return <div key={i} className="h-2" />;
                  
                  const boldedText = line.split(/(\*\*.*?\*\*)/).map((part, j) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                      return <strong key={j} className="text-cyan-400">{part.slice(2, -2)}</strong>;
                    }
                    return part;
                  });
                  
                  return <p key={i} className="text-zinc-300 text-sm md:text-base leading-relaxed">{boldedText}</p>;
                })}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
