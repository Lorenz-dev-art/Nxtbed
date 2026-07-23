import { motion } from 'motion/react';
import { Brain, ShoppingCart, Gem, ShieldAlert, Target, Zap } from 'lucide-react';
import AiExplainer from './AiExplainer';

export default function StrategyGuide() {
  return (
    <div className="max-w-4xl mx-auto w-full pb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Mestrado em <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">Game Sense</span>
        </h2>
        <p className="text-zinc-400 text-lg">
          Bedwars não é só clicar rápido. Aprenda a pensar como um pro player em Solo e Doubles.
        </p>
      </div>

      <div className="space-y-8">
        {/* Early Game */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 md:p-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-400">
              <ShoppingCart className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Early Game: Os Primeiros 3 Minutos</h3>
          </div>
          <div className="space-y-4 text-zinc-300">
            <p><strong className="text-emerald-400">A Regra de Ouro (Solo/Doubles):</strong> O primeiro "Rush" dita o seu jogo. O objetivo é eliminar o seu vizinho (first rush) antes que ele seja uma ameaça e farmar os recursos da base dele.</p>
            <p><strong className="text-emerald-400">Ordem de Compra Clássica (16 Ferro + 4 Ouro):</strong></p>
            <ul className="list-disc list-inside space-y-2 pl-4 text-zinc-400">
              <li>Espere até ter <strong className="text-zinc-200">16 ferros e 4 ouros</strong>.</li>
              <li>Compre <strong className="text-zinc-200">blocos de lã (16 ferros)</strong> e <strong className="text-zinc-200">TNT (4 ouros)</strong>.</li>
              <li>Deixe a cama apenas com a defesa padrão do mapa ou lã básica e vá direto para a base vizinha. A TNT vai quebrar a defesa dele enquanto ele tenta construir.</li>
            </ul>
            <p><strong className="text-emerald-400">Agressão Pura (Com Espada):</strong> Se o mapa tiver ilhas muito coladas, pegue só blocos (ferro), espere um pouco para pegar mais e compre uma espada de pedra (10 ferros). Cubra sua cama com uma camada de lã e rushe imediatamente.</p>
          </div>
          <AiExplainer 
            title="Early Game e Ordem de Compras no Bedwars"
            context="O objetivo inicial é eliminar o vizinho. A compra padrão é juntar 16 ferros (para blocos) e 4 ouros (para TNT) e ir atacar rápido. Em mapas colados, vale investir em espada de pedra e blocos rápidos."
          />
        </motion.section>

        {/* Diamantes vs Rush */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 md:p-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-400">
              <Gem className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Diamantes vs Rush: O Equilíbrio</h3>
          </div>
          <div className="space-y-4 text-zinc-300">
            <p><strong className="text-blue-400">O Dilema:</strong> Muitos perdem tempo pegando diamantes enquanto o inimigo quebra suas camas. Diamantes são poderosos, mas dominar território é mais importante no início.</p>
            <p><strong className="text-blue-400">Quando Rushar:</strong> O early game é 100% sobre Rush. Enquanto você tiver um inimigo do lado da sua base, NÃO vá para o meio (Emeralds) e não pare o ataque para farmar diamante, a menos que a ilha de dima seja caminho obrigatório para o rush.</p>
            <p><strong className="text-blue-400">Quando Farmar Diamantes:</strong></p>
            <ul className="list-disc list-inside space-y-2 pl-4 text-zinc-400">
              <li>Quando o seu 'first rush' (vizinho) estiver morto e sua base estiver segura.</li>
              <li>Prioridade de Upgrades: <strong className="text-zinc-200">1º Sharpness (Dano)</strong>. A diferença de dano ganha PvP. <strong className="text-zinc-200">2º Protection I e II (Armadura)</strong>. <strong className="text-zinc-200">3º Miner Fatigue</strong> (Armadilha para avisar se alguém for na sua base).</li>
            </ul>
          </div>
          <AiExplainer 
            title="Upgrades de Diamante vs Rush no Bedwars"
            context="No começo, rushar o vizinho é prioridade total. Só foque em diamantes depois que sua vizinhança estiver segura. Ordem ideal de compra nos diamantes: Sharpness (Espadas Afiadas), Protection (Proteção), e Traps (Armadilhas de fadiga)."
          />
        </motion.section>

        {/* Atacar ou Defender */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 md:p-8"
        >
           <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-purple-500/10 rounded-2xl text-purple-400">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Atacar ou Defender? A Decisão Crucial</h3>
          </div>
          <div className="space-y-4 text-zinc-300">
            <p><strong className="text-purple-400">Consciência de Mapa:</strong> Olhar ao redor é o que diferencia o novato do Pro. Use F5 ou olhe constantemente pros lados enquanto faz pontes.</p>
            <p><strong className="text-purple-400">O Momento de Atacar:</strong></p>
            <ul className="list-disc list-inside space-y-2 pl-4 text-zinc-400">
              <li>Você viu que o inimigo saiu da base dele e foi para a ilha do meio.</li>
              <li>O time inimigo acabou de morrer para outra pessoa e vai respawnar (tempo para quebrar a cama).</li>
              <li>Você tem ferramentas (Pickaxe/Axe) ou TNT, e o inimigo tem uma defesa falha.</li>
            </ul>
            <p><strong className="text-purple-400">O Momento de Recuar (Defender):</strong></p>
            <ul className="list-disc list-inside space-y-2 pl-4 text-zinc-400">
              <li>Você vê alguém construindo em direção à sua base (NUNCA IGNORE UM RUSH!). A cama é sua vida. Volte e derrube a ponte dele.</li>
              <li>Você está com muitos recursos (Esmeraldas, Diamantes) e com pouca vida em campo aberto. O "Greed" (ganância) vai te fazer morrer de bobeira.</li>
              <li>A armadilha da sua base apitou. Use 'Magic Toy Stick' ou pule no void se tiver itens sobrando no ender chest para dar respawn e defender rápido.</li>
            </ul>
          </div>
          <AiExplainer 
            title="Saber quando Atacar e Defender no Bedwars"
            context="Ataque quando o inimigo estiver fora da base ou morto. Recue IMEDIATAMENTE se vir alguém fazendo ponte para sua ilha ou se a sua trap disparar. Cama viva vale mais do que matar alguém."
          />
        </motion.section>
      </div>
    </div>
  );
}
