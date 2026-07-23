import { motion } from 'motion/react';
import { Users, Shield, Zap, Crosshair, MessageCircle, Pickaxe, Bomb } from 'lucide-react';
import AiExplainer from './AiExplainer';

export default function TeamGuide() {
  return (
    <div className="max-w-4xl mx-auto w-full pb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Mestrado em <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Sinergia (3v3/4v4)</span>
        </h2>
        <p className="text-zinc-400 text-lg">
          Trabalho em equipe vence jogos. Defina funções, comunique-se e coordene ataques infalíveis.
        </p>
      </div>

      <div className="space-y-8">
        {/* Funções Ideais */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 md:p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <Users className="w-32 h-32" />
          </div>
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-400">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Funções da Equipe (Roles)</h3>
          </div>
          <div className="space-y-6 text-zinc-300 relative z-10">
            <div className="bg-zinc-950/50 p-4 rounded-2xl border border-zinc-800/50">
              <h4 className="font-bold text-indigo-400 mb-2 flex items-center gap-2"><Shield className="w-4 h-4"/> Defensor / Construtor (Base)</h4>
              <p className="text-sm text-zinc-400">Fica na base organizando recursos e foca na melhor defesa da cama (Lã, Madeira, Endstone, Vidro, Água). No começo do jogo, coleta o ferro para dar blocos para o Rusher. Depois, fica vigiando e avisando de ataques inimigos (Usa traps e radar).</p>
            </div>
            <div className="bg-zinc-950/50 p-4 rounded-2xl border border-zinc-800/50">
              <h4 className="font-bold text-red-400 mb-2 flex items-center gap-2"><Zap className="w-4 h-4"/> Rusher Principal (First Rush)</h4>
              <p className="text-sm text-zinc-400">O jogador mais agressivo e rápido nas pontes (Ninja/Breezily). Compra blocos nos primeiros segundos e vai direto para a primeira base vizinha tentar quebrar a cama enquanto eles ainda constroem a defesa. Depois, lidera os ataques (Pvp).</p>
            </div>
            <div className="bg-zinc-950/50 p-4 rounded-2xl border border-zinc-800/50">
              <h4 className="font-bold text-yellow-400 mb-2 flex items-center gap-2"><Crosshair className="w-4 h-4"/> Suporte / Controle de Meio</h4>
              <p className="text-sm text-zinc-400">Ajuda o Rusher nas lutas ou foca em dominar os geradores de Diamante e Esmeralda (Mid). Compra os upgrades essenciais na equipe (Sharpness, Protection) e distribui os minérios valiosos. Mantém o domínio de mapa e usa arco, se necessário.</p>
            </div>
            {/* 4o Jogador em 4v4 */}
             <div className="bg-zinc-950/50 p-4 rounded-2xl border border-zinc-800/50">
              <h4 className="font-bold text-cyan-400 mb-2 flex items-center gap-2"><Users className="w-4 h-4"/> Flex (Apenas no 4v4)</h4>
              <p className="text-sm text-zinc-400">O coringa. Pode ajudar o Defensor se a base estiver sendo muito focada, ou acompanhar o Suporte/Rusher para fazer 3 jogadores atacarem ao mesmo tempo. Adapta-se à necessidade do jogo no momento.</p>
            </div>
          </div>
          <AiExplainer 
            title="Funções de Equipe em Bedwars 3v3 / 4v4"
            context="Defensor (constrói defesa e vigia a base), Rusher Principal (faz ponte rápido e quebra camas), Suporte (pega diamantes, esmeraldas e ajuda no pvp) e Flex (ajuda onde precisar em 4v4)."
          />
        </motion.section>

        {/* Vocabulário Rápido */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 md:p-8 relative overflow-hidden"
        >
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="p-3 bg-fuchsia-500/10 rounded-2xl text-fuchsia-400">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Vocabulário de Emergência</h3>
          </div>
          <div className="space-y-4 text-zinc-300 relative z-10">
            <p><strong className="text-fuchsia-400">A Regra:</strong> Ninguém tem tempo para frases longas. Call (comunicação) precisa ser curta e direta.</p>
            <ul className="space-y-3">
              <li className="flex flex-col gap-1 bg-zinc-950/30 p-3 rounded-xl">
                <span className="font-bold text-white">"Base!" ou "Voltando!"</span>
                <span className="text-sm text-zinc-400">Tem inimigo vindo ou na nossa ilha, TODO MUNDO QUE ESTIVER PERTO volta para defender a cama.</span>
              </li>
              <li className="flex flex-col gap-1 bg-zinc-950/30 p-3 rounded-xl">
                <span className="font-bold text-white">"Invis!" (Invisível)</span>
                <span className="text-sm text-zinc-400">Alguém usou poção de invisibilidade e está na base. (Procure por partículas ou pegadas).</span>
              </li>
              <li className="flex flex-col gap-1 bg-zinc-950/30 p-3 rounded-xl">
                <span className="font-bold text-white">"Uma hit!" ou "Low!"</span>
                <span className="text-sm text-zinc-400">Inimigo está com a vida muito baixa. Ajuda a focar os alvos certos na teamfight (luta).</span>
              </li>
               <li className="flex flex-col gap-1 bg-zinc-950/30 p-3 rounded-xl">
                <span className="font-bold text-white">"Dropa [item]" (Ex: "Dropa ferro!")</span>
                <span className="text-sm text-zinc-400">O rusher precisa de algo rápido para comprar ferramentas. Não pergunte para que, apenas jogue o minério.</span>
              </li>
            </ul>
          </div>
          <AiExplainer 
            title="Calls e Comunicação de Emergência no Bedwars"
            context="Comunicação deve ser de 1 ou 2 palavras. 'Base' para voltar a defender, 'Invis' para detectar poções, 'Dropa' para repassar recursos na hora e 'Low' para indicar alvo quase morto."
          />
        </motion.section>

        {/* Coordenando o Ataque Perfeito */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 md:p-8"
        >
           <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-red-500/10 rounded-2xl text-red-400">
              <Bomb className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Ataque Coordenado (TNT + Ferramentas)</h3>
          </div>
          <p className="text-zinc-400 mb-6 font-medium">Bases bem defendidas (com Água, Endstone, Vidro e Madeira) não caem para um jogador só. Vocês precisam de um ataque sincronizado de 2 a 3 pessoas.</p>
          
          <div className="space-y-4 text-zinc-300">
             <p><strong className="text-red-400">O Setup:</strong></p>
             <ul className="list-disc list-inside space-y-2 pl-4 text-zinc-400 mb-4">
               <li>Jogador 1 (O Distrator/Bomba): Leva blocos e 1-2 TNTs.</li>
               <li>Jogador 2 (O Mineiro): Leva ferramentas superiores (Picareta de Ouro/Dima e Machado de Madeira/Pedra).</li>
               <li>Jogador 3 (O Guarda): Foca exclusivamente no PvP, tirando os inimigos de perto da cama enquanto os outros quebram.</li>
             </ul>

             <div className="bg-red-500/5 border border-red-500/20 p-5 rounded-2xl flex flex-col gap-3">
                <h4 className="font-bold text-zinc-100 flex items-center gap-2"><Pickaxe className="w-5 h-5 text-red-400"/> A Execução Sincronizada</h4>
                <ol className="list-decimal list-inside space-y-2 text-sm text-zinc-400">
                  <li>O time constrói uma ponte de cima para baixo (para não serem empurrados no void).</li>
                  <li>O <strong>Jogador 1 (Bomba)</strong> pula primeiro, ativando a TNT no topo da defesa para retirar Lã, Madeira ou Vidro. Ele também serve de isca para receber o knockback.</li>
                  <li>Imediatamente após a explosão, a água vai escorrer, ou a Endstone ficará exposta.</li>
                  <li>O <strong>Jogador 2 (Mineiro)</strong> cai exatamente na sequência e começa a quebrar a Endstone/Madeira restante por dentro da água com a ferramenta certa.</li>
                  <li>O <strong>Jogador 3 (Guarda)</strong> bloqueia qualquer defensor que tente impedir o Mineiro (colocando blocos no rosto deles ou espancando-os).</li>
                </ol>
             </div>
          </div>
          
          <div className="mt-8">
            <AiExplainer 
              title="Como Quebrar Defesas Fortes no Bedwars (Equipe)"
              context="Divida tarefas no push: Um jogador lança TNT para explodir as camadas de fora (vidro/madeira). Enquanto eles se distraem com a explosão, o jogador com melhores ferramentas entra para quebrar o miolo (Endstone). O restante protege contra hits."
            />
          </div>
        </motion.section>
      </div>
    </div>
  );
}
