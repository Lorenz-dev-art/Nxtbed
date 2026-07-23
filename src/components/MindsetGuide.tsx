import { motion } from 'motion/react';
import { BrainCircuit, Video, CheckSquare, HeartPulse, RefreshCw } from 'lucide-react';
import AiExplainer from './AiExplainer';
import { useState } from 'react';

const checklistItems = [
  { id: 'q1', type: 'decision', text: 'Eu prestei atenção ao meu redor antes de sair da base ou fazer a ponte? (Game Sense)' },
  { id: 'q2', type: 'decision', text: 'Eu ataquei alguém que estava com vantagem óbvia de itens (armadura/espada)?' },
  { id: 'q3', type: 'decision', text: 'Eu ignorei alguém construindo para a minha base porque estava focado em farmar diamantes ou esmeraldas?' },
  { id: 'q4', type: 'mechanic', text: 'Eu errei um block hit ou w-tap durante a luta e perdi o combo?' },
  { id: 'q5', type: 'mechanic', text: 'Eu caí no void porque errei o timing da ponte (soltei shift cedo demais)?' },
  { id: 'q6', type: 'mechanic', text: 'Meu TNT Jump falhou porque pulei atrasado ou adiantado?' },
  { id: 'q7', type: 'decision', text: 'Eu demorei muito na loja comprando itens e dei tempo para o inimigo chegar?' },
];

export default function MindsetGuide() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = (completedCount / checklistItems.length) * 100;

  return (
    <div className="max-w-4xl mx-auto w-full pb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Mestrado em <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-500">Mentalidade</span>
        </h2>
        <p className="text-zinc-400 text-lg">
          O verdadeiro PvP acontece na sua cabeça. Aprenda a analisar suas derrotas e manter o foco.
        </p>
      </div>

      <div className="space-y-8">
        {/* Review de Replay */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 md:p-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-pink-500/10 rounded-2xl text-pink-400">
              <Video className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Autoanálise de Replay</h3>
          </div>
          <p className="text-zinc-400 mb-6 font-medium">Você perdeu. O que você faz? Assistir ao replay é a forma mais rápida de evoluir. Faça a si mesmo as perguntas abaixo para descobrir onde você realmente errou.</p>
          
          <div className="bg-zinc-950/50 rounded-2xl border border-zinc-800/50 p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-bold text-zinc-200 flex items-center gap-2">
                <CheckSquare className="w-5 h-5 text-pink-400" />
                Checklist de VOD Review
              </h4>
              <span className="text-sm font-medium text-pink-400">{completedCount} / {checklistItems.length}</span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-zinc-800 rounded-full h-2 mb-6">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 h-2 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
            </div>

            <div className="space-y-3">
              {checklistItems.map((item) => (
                <label key={item.id} className="flex items-start gap-4 p-3 rounded-xl hover:bg-zinc-900/50 cursor-pointer transition-colors border border-transparent hover:border-zinc-800/50">
                  <div className="relative flex items-center justify-center mt-1">
                    <input 
                      type="checkbox" 
                      className="peer appearance-none w-5 h-5 border-2 border-zinc-600 rounded-md checked:bg-pink-500 checked:border-pink-500 transition-colors"
                      checked={checkedItems[item.id] || false}
                      onChange={() => toggleCheck(item.id)}
                    />
                    <CheckSquare className="w-3.5 h-3.5 text-white absolute opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm md:text-base transition-colors ${checkedItems[item.id] ? 'text-zinc-500 line-through' : 'text-zinc-300'}`}>
                      {item.text}
                    </p>
                    <span className={`text-xs font-bold mt-1 inline-block px-2 py-0.5 rounded-full ${item.type === 'decision' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'}`}>
                      {item.type === 'decision' ? 'Erro de Decisão' : 'Erro Mecânico'}
                    </span>
                  </div>
                </label>
              ))}
            </div>
          </div>
          
          <div className="bg-rose-500/5 border border-rose-500/20 rounded-2xl p-5">
            <h4 className="font-bold text-rose-400 mb-2">O Veredito: Mecânica vs Decisão</h4>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Se a maioria dos seus erros foi <strong className="text-blue-400">Mecânica</strong>, vá para modos de treino (Duels, Bridge practice) para praticar cliques e timing. Se a maioria foi <strong className="text-purple-400">Decisão</strong>, você precisa focar no <strong>Game Sense</strong>. Preste mais atenção no minimapa, no barulho de blocos sendo colocados e no placar de itens dos inimigos.
            </p>
          </div>
        </motion.section>

        {/* Cama Quebrada */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 md:p-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-rose-500/10 rounded-2xl text-rose-400">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Sobrevivendo Sem Cama (Bedless)</h3>
          </div>
          <div className="space-y-4 text-zinc-300">
            <p><strong className="text-rose-400">O Pânico Inicial:</strong> É comum a adrenalina subir quando a tela avisa "BED DESTROYED". O maior erro é se desesperar e tentar correr atrás de quem quebrou, ou pular no void achando que acabou.</p>
            <p><strong className="text-rose-400">A Regra dos 10 Segundos:</strong></p>
            <ul className="list-disc list-inside space-y-2 pl-4 text-zinc-400">
              <li>Respire fundo. A prioridade agora mudou de "Ganhar" para <strong className="text-zinc-200">"Sobreviver"</strong>.</li>
              <li>Fuja imediatamente do foco da batalha. Não tente lutar 1v2 ou 1v1 se não tiver vantagem clara de armadura.</li>
              <li>Gaste seus minérios. Se você tiver ouros/ferros, compre Tracker (Bússola), Ender Pearls ou Fireballs para fugas e mobilidade.</li>
            </ul>
            <p><strong className="text-rose-400">Mentalidade de "Guerilla":</strong> Sem cama, você deve jogar nas sombras. Colete esmeraldas no meio de forma furtiva, compre poções de invisibilidade e pule de base em base apenas para pegar os geradores vazios até estar forte o suficiente para lutar (Full Dima).</p>
          </div>
          <AiExplainer 
            title="Como manter a calma e jogar sem cama (Bedless) no Bedwars"
            context="Ao perder a cama, mude o foco para sobrevivência extrema. Evite lutas justas, compre itens de fuga (Pérola, Fireball), jogue recuado e foque em pegar esmeraldas para conseguir poções de invisibilidade e armadura de diamante antes de tentar a vingança."
          />
        </motion.section>

        {/* Tilt e Resiliência */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 md:p-8"
        >
           <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-purple-500/10 rounded-2xl text-purple-400">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Resetando o "Tilt"</h3>
          </div>
          <div className="space-y-4 text-zinc-300">
            <p>O "Tilt" (ficar irritado e jogar mal por causa das emoções) é o maior inimigo de um jogador de PvP.</p>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start">
                 <div className="mt-1 w-2 h-2 rounded-full bg-purple-400 flex-shrink-0" />
                 <p><strong className="text-zinc-200">Reconheça os Sinais:</strong> Clicar com mais força no mouse, respiração acelerada, reclamar de lag ou "hitbox" o tempo todo.</p>
              </li>
              <li className="flex gap-3 items-start">
                 <div className="mt-1 w-2 h-2 rounded-full bg-purple-400 flex-shrink-0" />
                 <p><strong className="text-zinc-200">A Regra das 3 Derrotas:</strong> Se você perder 3 partidas seguidas e estiver frustrado, levante-se. Beba água, lave o rosto. O Bedwars exige precisão, e a raiva destrói sua mira e timing de ponte.</p>
              </li>
              <li className="flex gap-3 items-start">
                 <div className="mt-1 w-2 h-2 rounded-full bg-purple-400 flex-shrink-0" />
                 <p><strong className="text-zinc-200">Foque no Processo, Não na Vitória:</strong> Se o inimigo te combar com um W-Tap perfeito, não reclame. Diga: "Isso foi um bom combo". Aprender com quem é melhor que você é a única forma de subir de nível.</p>
              </li>
            </ul>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
