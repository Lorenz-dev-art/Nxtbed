import { motion } from 'motion/react';
import { Footprints, AlertTriangle, Crosshair, CalendarClock, MoveRight, Star, Zap } from 'lucide-react';
import AiExplainer from './AiExplainer';

export default function BridgeGuide() {
  return (
    <div className="max-w-4xl mx-auto w-full pb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Mestrado em <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Pontes</span>
        </h2>
        <p className="text-zinc-400 text-lg">
          Do Ninja ao Breezily: o guia definitivo para você parar de cair no void e rushar na velocidade da luz.
        </p>
      </div>

      <div className="space-y-8">
        {/* Fundamentos */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 md:p-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-cyan-500/10 rounded-2xl text-cyan-400">
              <Crosshair className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Fundamentos: Mira e Ritmo</h3>
          </div>
          <div className="space-y-4 text-zinc-300">
            <p><strong className="text-cyan-400">Posicionamento da Mira:</strong> Nunca olhe direto para baixo. O ideal é mirar na metade inferior da face do bloco onde você quer colocar o próximo. Se a mira ficar muito alta, você vai errar o clique; se ficar muito baixa, não conseguirá colocar o bloco a tempo.</p>
            <p><strong className="text-cyan-400">Ritmo (Timing):</strong> Ponte não é sobre clicar rápido (drag click ajuda, mas não é obrigatório para Ninja). É sobre consistência. O som do bloco sendo colocado dita o ritmo em que você solta e aperta o shift.</p>
            <p><strong className="text-cyan-400">Ângulo (Yaw/Pitch):</strong> Tente alinhar a sua câmera em ângulos perfeitos (ex: 45 graus ou 135 graus se for fazer ponte na diagonal, ou reto para trás). Muitos clients mostram isso.</p>
          </div>
          <AiExplainer 
            title="Fundamentos: Mira e Ritmo para Pontes"
            context="Mira deve ficar na metade inferior do bloco. O ritmo dos cliques acompanha o som do bloco. Tente manter o ângulo da câmera reto (45 ou 135 graus para diagonal)."
          />
        </motion.section>

        {/* Ninja Bridge */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 md:p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <Footprints className="w-32 h-32" />
          </div>
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="p-3 bg-green-500/10 rounded-2xl text-green-400">
              <MoveRight className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Nível 1: Ninja Bridge (Speed Bridge)</h3>
          </div>
          <p className="text-zinc-400 mb-6 font-medium">A base do Bedwars moderno. Consiste em agachar (shift) na ponta, colocar o bloco, des-agachar (soltar shift) andando para trás e agachar de novo na próxima ponta.</p>
          <ol className="space-y-4 relative z-10">
            {[
              "Posicione-se na borda do bloco segurando Shift (S + D ou S + A, ou apenas S).",
              "Coloque o bloco.",
              "Imediatamente solte o Shift enquanto continua andando para trás.",
              "Assim que chegar na beirada do novo bloco, aperte e segure o Shift novamente.",
              "Repita. Comece devagar (fazendo 1 bloco por vez) e depois tente emendar 2, 3..."
            ].map((step, idx) => (
              <li key={idx} className="flex gap-4 items-start bg-zinc-950/50 p-4 rounded-xl border border-zinc-800/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-bold text-zinc-300">
                  {idx + 1}
                </span>
                <span className="text-zinc-300 pt-1">{step}</span>
              </li>
            ))}
          </ol>
          <AiExplainer 
            title="Ninja Bridge (Speed Bridge)"
            context="Agachar na ponta, colocar bloco, soltar shift andando para trás, agachar na ponta do novo bloco. Consistência é chave. Os passos são: posicionar segurando shift, colocar bloco, soltar shift andando para trás, segurar shift novamente ao chegar na ponta."
          />
        </motion.section>

        {/* Breezily Bridge */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 md:p-8 relative overflow-hidden"
        >
           <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <Zap className="w-32 h-32" />
          </div>
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="p-3 bg-purple-500/10 rounded-2xl text-purple-400">
              <Star className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Nível 2: Breezily Bridge</h3>
          </div>
          <p className="text-zinc-400 mb-6 font-medium">Não usa shift! Você anda para trás de costas enquanto faz um 'strafe' (A e D) para não cair. Requer CPS alto (12+ CPS) ou muito ritmo, além de muita prática de alinhamento.</p>
          <ol className="space-y-4 relative z-10">
            {[
              "Alinhe sua mira PERFEITAMENTE no centro da borda do bloco (geralmente ajudado pelo F3 ou mods).",
              "Comece a clicar rápido (drag click, butterfly ou jitter).",
              "Segure 'S' para andar para trás.",
              "Fique alternando rapidamente entre 'A' e 'D' (Strafing) no ritmo correto para manter o personagem centralizado e evitar que ele ande rápido demais para trás e caia.",
              "Dica Pro: A Breezily não te faz chegar tão mais rápido que uma boa Ninja, mas é excelente para intimidar os inimigos (o famoso 'flex')."
            ].map((step, idx) => (
              <li key={idx} className="flex gap-4 items-start bg-zinc-950/50 p-4 rounded-xl border border-zinc-800/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-bold text-purple-400">
                  {idx + 1}
                </span>
                <span className="text-zinc-300 pt-1">{step}</span>
              </li>
            ))}
          </ol>
          <AiExplainer 
            title="Breezily Bridge"
            context="Não usa shift. Andar para trás de costas enquanto faz strafe (A e D) no tempo certo. CPS alto ajuda (drag click, butterfly), e mira precisa estar perfeita no meio do bloco."
          />
        </motion.section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Erros Comuns */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-red-500/5 border border-red-500/20 rounded-3xl p-6 md:p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-red-500/10 rounded-2xl text-red-400">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Erros Fatais (Por que você cai?)</h3>
            </div>
            <ul className="space-y-4">
              {[
                { title: "Soltar o Shift Cedo Demais", desc: "Você des-agacha antes do bloco ser registrado pelo servidor." },
                { title: "Mira Dançarina", desc: "Ficar mexendo o mouse pros lados enquanto anda para trás. A mira deve ficar PARADA." },
                { title: "Pânico no Ping", desc: "Tentar acelerar além do que o servidor aguenta. Se o bloco sumir (ghost block), segure shift e espere 1 segundo." },
                { title: "Não saber virar", desc: "Tentar mudar de direção (diagonal para reta) sem apertar shift por segurança." }
              ].map((erro, idx) => (
                <li key={idx} className="border-l-2 border-red-500/30 pl-4">
                  <h4 className="font-bold text-zinc-200 mb-1">{erro.title}</h4>
                  <p className="text-sm text-zinc-400">{erro.desc}</p>
                </li>
              ))}
            </ul>
            <AiExplainer 
              title="Erros Comuns em Pontes (Bedwars)"
              context="Soltar o shift cedo demais, mira mexendo (dançarina), problemas de ping (ghost blocks) e mudar de direção sem shift são os erros mais comuns."
            />
          </motion.section>

          {/* Rotina de Treino */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-cyan-500/5 border border-cyan-500/20 rounded-3xl p-6 md:p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-cyan-500/10 rounded-2xl text-cyan-400">
                <CalendarClock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Rotina Diária (15 Minutos)</h3>
            </div>
            <ul className="space-y-4">
               {[
                { time: "5 Minutos", desc: "Aquecimento: Ninja Bridge reta, sem pressa. Foco 100% na consistência, zero foco na velocidade." },
                { time: "5 Minutos", desc: "Diagonal Bridge: Pratique a ninja bridge em diagonal, segurando S e A (ou S e D). É vital para ir pros geradores de dima no modo solo." },
                { time: "3 Minutos", desc: "Up Bridge: Pratique subir (Ponte de Escada). Coloque bloco, pule, coloque no ar, segure shift." },
                { time: "2 Minutos", desc: "Tryhard: Force o seu limite. Tente ir o mais rápido possível até cair. Isso constrói memória muscular de velocidade." }
              ].map((treino, idx) => (
                <li key={idx} className="flex flex-col gap-1">
                  <span className="text-cyan-400 font-bold text-sm tracking-wider uppercase">{treino.time}</span>
                  <p className="text-zinc-300 text-sm leading-relaxed">{treino.desc}</p>
                </li>
              ))}
            </ul>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
