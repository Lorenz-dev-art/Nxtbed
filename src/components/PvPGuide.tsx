import { motion } from 'motion/react';
import { Swords, MousePointerClick, Keyboard, Crosshair, ShieldAlert, Target } from 'lucide-react';
import AiExplainer from './AiExplainer';

export default function PvPGuide() {
  return (
    <div className="max-w-4xl mx-auto w-full pb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Mestrado em <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">PvP (1.8.9)</span>
        </h2>
        <p className="text-zinc-400 text-lg">
          O segredo dos combos infinitos. Aprenda a dominar o W-Tap, Block Hit e Strafing.
        </p>
      </div>

      <div className="space-y-8">
        {/* W-Tap */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 md:p-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-red-500/10 rounded-2xl text-red-400">
              <Keyboard className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">W-Tap (Reset de Sprint)</h3>
          </div>
          <div className="space-y-4 text-zinc-300">
            <p><strong className="text-red-400">O que é:</strong> A mecânica mais importante da 1.8.9. Quando você dá o primeiro hit correndo (sprint), você dá mais Knockback (empurrão) no inimigo. Porém, os hits seguintes dão menos Knockback se você continuar segurando o W. O W-Tap serve para "resetar" a sua corrida, fazendo com que TODOS os seus hits deem o Knockback máximo.</p>
            <p><strong className="text-red-400">Como executar (Ação das Teclas):</strong></p>
            <ul className="list-disc list-inside space-y-2 pl-4 text-zinc-400">
              <li>Mantenha-se correndo (Ctrl ou botão de sprint).</li>
              <li>Bata no inimigo (Clique Esquerdo).</li>
              <li>Imediatamente após o hit, <strong className="text-zinc-200">solte a tecla W</strong> por uma fração de segundo.</li>
              <li><strong className="text-zinc-200">Aperte a tecla W</strong> novamente para voltar a correr antes de dar o próximo hit.</li>
            </ul>
            <p><strong className="text-red-400">O Segredo:</strong> O ritmo! Se você soltar o W tarde demais, o reset não funciona. Se demorar muito para apertar de novo, o inimigo escapa do combo.</p>
          </div>
          <AiExplainer 
            title="W-Tap (Reset de Sprint) PvP 1.8.9"
            context="O W-Tap reseta a corrida para dar mais knockback. Solte o W rapidamente após o hit e aperte novamente. O ritmo perfeito mantém o inimigo no ar sem ele conseguir te acertar."
          />
        </motion.section>

        {/* Block Hit */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 md:p-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-orange-500/10 rounded-2xl text-orange-400">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Block Hit</h3>
          </div>
          <div className="space-y-4 text-zinc-300">
            <p><strong className="text-orange-400">O que é:</strong> Usar a espada para defender e atacar quase ao mesmo tempo. Tem dois objetivos: reduzir o dano recebido pela metade em uma trocação franca (trade) e também serve como uma forma de resetar o sprint (similar ao W-Tap).</p>
            <p><strong className="text-orange-400">Como executar (Ação dos Botões):</strong></p>
            <ul className="list-disc list-inside space-y-2 pl-4 text-zinc-400">
              <li>Durante o combate corpo-a-corpo.</li>
              <li>Ao dar um ataque (Clique Esquerdo), pressione rapidamente também o botão de defender (Clique Direito).</li>
              <li>Pode ser feito simultaneamente (spammar os dois cliques) ou de forma ritmada logo após o ataque.</li>
            </ul>
            <p><strong className="text-orange-400">Quando usar:</strong> Perfeito para lugares apertados onde não dá para dar muito combo e você precisa trocar hit por hit (ex: dentro de bases ou pontes curtas de 1 bloco de largura).</p>
          </div>
          <AiExplainer 
            title="Block Hit (PvP 1.8.9)"
            context="Defender e atacar quase ao mesmo tempo com a espada. Reduz o dano recebido pela metade e reseta o sprint para aplicar mais knockback em trocações diretas."
          />
        </motion.section>

        {/* Strafing */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 md:p-8"
        >
           <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-yellow-500/10 rounded-2xl text-yellow-400">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Strafing</h3>
          </div>
          <div className="space-y-4 text-zinc-300">
            <p><strong className="text-yellow-400">O que é:</strong> Movimentar-se lateralmente para sair do centro da tela (mira) do inimigo. É a principal defesa no PvP. Se o inimigo não consegue te focar na mira, ele não te acerta. Junte Strafing com W-Tap e você será intocável.</p>
            <p><strong className="text-yellow-400">Como executar (Ação das Teclas):</strong></p>
            <ul className="list-disc list-inside space-y-2 pl-4 text-zinc-400">
              <li>Enquanto corre para frente (W), misture o uso das teclas <strong className="text-zinc-200">A e D</strong>.</li>
              <li><strong className="text-zinc-200">Círculo:</strong> Andar para um lado só (ex: W + A) rodeando o inimigo.</li>
              <li><strong className="text-zinc-200">Ziguezague:</strong> Alternar rapidamente de um lado para o outro (W + A, depois W + D) no momento em que o inimigo for te acertar.</li>
            </ul>
            <p><strong className="text-yellow-400">Regra de Ouro:</strong> Siga a cabeça do inimigo. Se ele olhar para a sua direita, vá para a sua esquerda (costas dele).</p>
          </div>
          <AiExplainer 
            title="Strafing (PvP 1.8.9)"
            context="Movimentação lateral usando A e D para sair da mira do inimigo. Círculo (andar para um lado rodeando) ou Ziguezague. Ajuda a não tomar golpes."
          />
        </motion.section>

        {/* Rotina de Treino */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-red-500/5 to-orange-500/5 border border-orange-500/20 rounded-3xl p-6 md:p-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-orange-500/10 rounded-2xl text-orange-400">
              <Swords className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Rotina de Treino na Memória Muscular</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="bg-zinc-950/50 p-5 rounded-2xl border border-zinc-800/50">
                <h4 className="font-bold text-red-400 mb-2 flex items-center gap-2"><MousePointerClick className="w-4 h-4"/> Nível 1: Ar</h4>
                <p className="text-sm text-zinc-400">Entre em um mundo solo. Comece a correr e dar cliques no ar. A cada clique, tente soltar e apertar o W no ritmo perfeito. Faça isso por 5 minutos até a mão acostumar sem pensar.</p>
             </div>
             <div className="bg-zinc-950/50 p-5 rounded-2xl border border-zinc-800/50">
                <h4 className="font-bold text-orange-400 mb-2 flex items-center gap-2"><Target className="w-4 h-4"/> Nível 2: Mobs</h4>
                <p className="text-sm text-zinc-400">Invoque Zumbis ou jogue modos PvE. Pratique combar os mobs usando W-Tap. O objetivo é matar o zumbi sem tomar nenhum hit, mantendo ele no ar pelo knockback.</p>
             </div>
             <div className="bg-zinc-950/50 p-5 rounded-2xl border border-zinc-800/50">
                <h4 className="font-bold text-yellow-400 mb-2 flex items-center gap-2"><Crosshair className="w-4 h-4"/> Nível 3: Duels</h4>
                <p className="text-sm text-zinc-400">Vá para servidores de Duels (ex: modo Sumo, que é focado só em Knockback). Aqui, se você não dominar W-Tap e Strafe, você voa para fora da arena. Foque em melhorar seu posicionamento (Strafe).</p>
             </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
