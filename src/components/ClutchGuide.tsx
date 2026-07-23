import { motion } from 'motion/react';
import { Flame, Bomb, ArrowUpRight } from 'lucide-react';
import AiExplainer from './AiExplainer';

export default function ClutchGuide() {
  return (
    <div className="max-w-4xl mx-auto w-full pb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Mestrado em <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Clutches</span>
        </h2>
        <p className="text-zinc-400 text-lg">
          Domine a gravidade. Aprenda Jumps explosivos e Extensões de Bloco para voltar da morte certa.
        </p>
      </div>

      <div className="space-y-8">
        {/* Fireball Jump */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 md:p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <Flame className="w-32 h-32" />
          </div>
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="p-3 bg-orange-500/10 rounded-2xl text-orange-400">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Fireball Jump</h3>
          </div>
          <div className="space-y-4 text-zinc-300 relative z-10">
            <p><strong className="text-orange-400">A Física:</strong> A Fireball (Bola de Fogo) não tem delay de explosão. Assim que ela toca em algo sólido, explode, causando um Knockback radial absurdo. Para ir longe, você precisa estar no limite do raio da explosão no momento do impacto.</p>
            <p><strong className="text-orange-400">O Timing (Execução):</strong></p>
            <ul className="list-disc list-inside space-y-2 pl-4 text-zinc-400">
              <li>Corra (sprint) em direção à borda.</li>
              <li>Pule antes de jogar. (Isso zera a fricção do chão no seu boneco).</li>
              <li>No pico do seu pulo (ou logo após começar a cair), olhe quase para baixo (ângulo de uns 70-80 graus) e <strong className="text-zinc-200">atire a Fireball</strong>.</li>
              <li>Não pare de correr para frente no ar.</li>
            </ul>
          </div>
          <AiExplainer 
            title="Fireball Jump - Física e Execução"
            context="Correr, pular e jogar a Fireball quase reto para baixo um instante após sair do chão. O impulso é imediato. Ideal para atravessar espaços enormes entre bases se usado da altura correta."
          />
        </motion.section>

        {/* TNT Jump */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 md:p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <Bomb className="w-32 h-32" />
          </div>
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="p-3 bg-red-500/10 rounded-2xl text-red-400">
              <Bomb className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">TNT Jump</h3>
          </div>
          <div className="space-y-4 text-zinc-300 relative z-10">
            <p><strong className="text-red-400">A Física:</strong> A TNT acende e demora exatamente <strong className="text-zinc-100">4 segundos (ou 4 "tiques" brancos visuais em alguns servidores/mods)</strong> para explodir, variando pouca coisa dependendo do lag. O empurrão também é radial, mas ao contrário da Fireball, requer precisão de relógio.</p>
            <p><strong className="text-red-400">O Timing (Execução Clássica):</strong></p>
            <ul className="list-disc list-inside space-y-2 pl-4 text-zinc-400">
              <li>Coloque a TNT no chão.</li>
              <li>Fique colado nela (mas não exatamente em cima do centro dela se quiser impulso pra frente). Para voar alto e para frente, fique de costas para onde quer ir.</li>
              <li>Conte os piscas da TNT ou o tempo. <strong className="text-zinc-200">Exatamente antes do momento da explosão, corra e PULE.</strong></li>
              <li>A explosão te pegará no ar e te arremessará. Se você pular antes, ela não te pega; se pular depois, o chão absorve o impacto e você voa pouco.</li>
            </ul>
          </div>
          <AiExplainer 
            title="TNT Jump - Timing e Física"
            context="Ao colocar a TNT, você tem exatos 4 segundos. Para máximo impulso vertical e horizontal, fique junto da borda da TNT e pule no momento exato em que ela detona, recebendo o knockback no ar."
          />
        </motion.section>

        {/* Block Extension */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 md:p-8"
        >
           <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-cyan-500/10 rounded-2xl text-cyan-400">
              <ArrowUpRight className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Método 3 Passos: Block Extension (Clutch)</h3>
          </div>
          <p className="text-zinc-400 mb-6 font-medium">Você levou um hit e está voando para o void, mas há blocos na sua mão. Salvar a si mesmo (Clutch) exige reflexo e clique rápido.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
             <div className="bg-zinc-950/50 p-5 rounded-2xl border border-zinc-800/50 flex flex-col gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-sm font-bold text-cyan-400">1</span>
                <h4 className="font-bold text-zinc-100 flex items-center gap-2">Reconhecimento (Vire)</h4>
                <p className="text-sm text-zinc-400">Assim que tomar o empurrão para fora do bloco, vire bruscamente (flick) 180 graus mirando na face de onde você caiu. Não olhe para cima, olhe para a lateral do bloco.</p>
             </div>
             <div className="bg-zinc-950/50 p-5 rounded-2xl border border-zinc-800/50 flex flex-col gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-sm font-bold text-cyan-400">2</span>
                <h4 className="font-bold text-zinc-100 flex items-center gap-2">Spam de Clique</h4>
                <p className="text-sm text-zinc-400">Com a mira presa na lateral inferior do bloco, use sua melhor técnica de clique (Drag click é o rei, mas Jitter 15+ CPS serve). Construa uma escada no ar antes de cair abaixo dela.</p>
             </div>
             <div className="bg-zinc-950/50 p-5 rounded-2xl border border-zinc-800/50 flex flex-col gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-sm font-bold text-cyan-400">3</span>
                <h4 className="font-bold text-zinc-100 flex items-center gap-2">Pouse e Ande</h4>
                <p className="text-sm text-zinc-400">No momento em que colocar o primeiro bloco debaixo do pé, pressione 'W' para anular o momento de queda e estabilize o boneco andando para a ilha. É normal bater o nariz na parede, desde que haja chão.</p>
             </div>
          </div>
          
          <div className="mt-8">
            <AiExplainer 
              title="Treino e Execução de Block Extensions (Clutches)"
              context="O Método de 3 passos: 1. Gire a câmera rápido focando na parede do bloco. 2. Drag click/Spam click imediato para formar a plataforma embaixo de você no ar. 3. Segure W no impacto para subir e estabilizar de volta à base."
            />
          </div>
        </motion.section>
      </div>
    </div>
  );
}
