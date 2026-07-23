import { Tip, Category } from './types';

export const categories: Category[] = ['Todos', 'Geral', 'Pontes', 'Combate', 'Defesa', 'Economia'];

export const bedwarsTips: Tip[] = [
  {
    id: '1',
    title: 'Proteção em Camadas (Defesa Borboleta)',
    content: 'A melhor defesa básica consiste em uma camada de madeira (ou endstone), coberta por lã. O vidro é excelente contra TNTs.',
    detailedContent: [
      'A defesa "Borboleta" (Butterfly Defense) é o padrão de ouro no Bedwars moderno. O objetivo não é ser impenetrável, mas ganhar tempo e forçar o inimigo a usar as ferramentas certas.',
      'Camada 1 (Interna): Endstone (Pedra do Fim) ou Madeira. Endstone tem alta resistência a explosões, tornando as TNTs menos eficazes. Madeira requer um machado para ser quebrada rapidamente.',
      'Camada 2 (Externa): Lã. A lã é barata e esconde os blocos internos. O inimigo não saberá qual ferramenta usar até quebrar a lã.',
      'Sempre cubra o topo da cama também! Muitos jogadores esquecem e perdem a cama para um pulo com TNT ou Fireball.',
      'Se sobrar recursos, adicione uma camada de Vidro. O vidro é imune a explosões no Minecraft, sendo a defesa perfeita contra ataques de TNT.'
    ],
    category: 'Defesa',
    iconName: 'shield',
    level: 'Intermediário',
  },
  {
    id: '2',
    title: 'Speed Bridging (Ninja Bridge)',
    content: 'Aprenda a fazer ponte rapidamente soltando o shift (agachar) logo após colocar o bloco e apertando novamente na borda.',
    detailedContent: [
      'Speed Bridging (ou Ninja Bridge) é a técnica mais essencial para movimentação rápida e agressiva.',
      'Passo 1: Posicione-se na borda do bloco segurando shift (agachar).',
      'Passo 2: Coloque o bloco e solte o shift instantaneamente enquanto caminha para trás.',
      'Passo 3: Pressione shift novamente logo antes de cair da nova borda.',
      'Treine o ritmo! No começo você vai cair muito, mas a memória muscular se desenvolve rápido. Tente praticar no modo treino de pontes (Bridge Practice) de servidores populares.',
      'Vantagem: Você chega no gerador de diamantes ou na base inimiga antes deles sequer começarem a construir as defesas adequadas.'
    ],
    category: 'Pontes',
    iconName: 'footprints',
    level: 'Intermediário',
  },
  {
    id: '3',
    title: 'W-Tap e Reset de Sprint',
    content: 'No combate corpo-a-corpo, solte e pressione a tecla "W" logo após dar um golpe no inimigo para resetar seu sprint.',
    detailedContent: [
      'O W-Tap é a base do PvP (Player vs Player) competitivo no Minecraft. Ele manipula a mecânica de "sprint" (corrida) do jogo.',
      'Quando você dá o primeiro golpe enquanto corre, você causa knockback (repulsão) extra. Os golpes subsequentes dão muito menos knockback.',
      'A execução: Acertou o hit > Soltou o "W" (por uma fração de segundo) > Pressionou o "W" novamente.',
      'Isso engana o jogo, fazendo-o pensar que cada golpe que você dá é o "primeiro golpe correndo", maximizando a distância que você empurra o inimigo.',
      'Combinando isso com "Strafing" (andar para os lados com A e D), você pode prender o inimigo em um combo onde ele não consegue te acertar.'
    ],
    category: 'Combate',
    iconName: 'sword',
    level: 'Avançado',
  },
  {
    id: '4',
    title: 'Controle os Geradores de Diamante',
    content: 'Dominar os geradores de diamante cedo no jogo garante upgrades cruciais como Proteção para armadura e Afiação.',
    detailedContent: [
      'O jogo não se ganha apenas quebrando camas, mas controlando a economia do mapa. Os geradores de diamante são o seu principal objetivo no início do jogo.',
      'Prioridade de Upgrades com Diamantes:',
      '1. Iron Forge (Forja de Ferro): Acelera a geração de recursos na sua base.',
      '2. Proteção (Armor Protection): Reduz o dano recebido em porcentagem. Crucial para trocas de dano.',
      '3. Miner Fatigue Trap (Armadilha de Fadiga): Alerta quando alguém entra na sua base e os deixa extremamente lentos para quebrar blocos, dando tempo para você voltar e defender.',
      '4. Sharpness (Afiação): Aumenta o dano das espadas do seu time.'
    ],
    category: 'Economia',
    iconName: 'gem',
    level: 'Geral',
  },
  {
    id: '5',
    title: 'Highground nas Pontes',
    content: 'Sempre tente construir sua ponte 1 ou 2 blocos mais alta que a ponte do inimigo para ter vantagem.',
    detailedContent: [
      'Em combates em pontes, a altura é a sua maior vantagem posicional.',
      'Por que funciona? No Minecraft, você tem mais alcance ao bater para baixo do que para cima. Além disso, quando o inimigo está abaixo de você, o knockback natural o empurra para trás e para baixo, frequentemente jogando-o no vazio.',
      'Se você vir um inimigo construindo uma ponte reta na sua direção, comece a construir a sua subindo.',
      'Cuidado com as cabeças: Se você bater na parte superior da hitbox (cabeça) do inimigo enquanto ele está abaixo de você, é quase impossível ele revidar.',
      'Atenção às Fireballs: Estar muito alto pode te tornar um alvo fácil para bolas de fogo, então esteja pronto para pular de volta para a ponte principal.'
    ],
    category: 'Pontes',
    iconName: 'trending-up',
    level: 'Intermediário',
  },
  {
    id: '6',
    title: 'Uso Estratégico de TNT',
    content: 'Use TNT para abrir buracos na defesa inimiga, ou para ser arremessado para dentro da base inimiga.',
    detailedContent: [
      'A TNT não é apenas um explosivo; é uma ferramenta de invasão tática.',
      'Uso Básico: Coloque a TNT em cima da defesa inimiga. Como o dano vai para baixo e para os lados, ela removerá a lã e a madeira facilmente.',
      'TNT Jump (Pulo com TNT): A tática avançada. Coloque a TNT, conte até 3 segundos, corra em direção a ela e pule exatamente no momento da explosão. O impulso te lançará muito longe, diretamente para dentro da base inimiga.',
      'Combinação: Use a TNT Jump para ignorar completamente a defesa do inimigo, caindo de cima diretamente no buraco da cama enquanto eles estão distraídos.',
      'Nota: Compre sempre blocos para cobrir a TNT assim que a colocar, caso os defensores tentem usar água para anular a explosão.'
    ],
    category: 'Geral',
    iconName: 'bomb',
    level: 'Avançado',
  },
  {
    id: '7',
    title: 'Compre armadura antes da espada',
    content: 'Se você tiver ferro ou ouro limitado, priorize melhorar sua armadura em vez da espada.',
    detailedContent: [
      'O erro mais comum dos iniciantes é focar apenas no dano (comprar espadas de pedra/ferro primeiro). A sobrevivência é quase sempre mais importante.',
      'Armadura de Malha (Chainmail): A primeira compra essencial. Ela é permanente até que sua cama seja destruída e te dá uma grande vantagem sobre quem só tem a armadura de couro padrão.',
      'Armadura de Ferro (Iron Armor): Se você juntar ouro suficiente cedo, essa deve ser sua prioridade máxima.',
      'Por que a espada de pedra não é prioridade? A diferença de dano entre a espada de madeira (inicial) e a de pedra é de apenas 1 de dano (meio coração). Já a diferença de proteção entre couro e malha é substancial.',
      'Dica: Espada de madeira é mais que suficiente para jogar os inimigos no void (vazio), que é como a maioria das mortes acontecem no early game.'
    ],
    category: 'Economia',
    iconName: 'shopping-cart',
    level: 'Iniciante',
  },
  {
    id: '8',
    title: 'Foque nas Camas, Não nas Kills',
    content: 'Bedwars é um jogo de objetivo. Quebre a cama primeiro, assim eles não poderão renascer.',
    detailedContent: [
      'O K/D (Kill/Death ratio) não importa no Bedwars. O objetivo é eliminar times permanentemente.',
      'Evite perseguições: Se um jogador estiver fugindo para o centro ou rodando o mapa e a cama dele ainda existir, ignore-o e vá quebrar a cama.',
      'Mortes táticas (Voiding): Às vezes, pular no void intencionalmente para voltar para a base rapidamente com recursos para defender um rush é a melhor jogada.',
      'O Elemento Surpresa: As melhores invasões acontecem quando o time inimigo não está olhando. Invada enquanto eles estão distraídos lutando contra outro time ou focados no meio.',
      'Lembre-se: Matar um jogador que tem cama apenas o manda de volta para a base dele com vida e fome cheias, muitas vezes ajudando-o a defender.'
    ],
    category: 'Geral',
    iconName: 'bed',
    level: 'Iniciante',
  },
  {
    id: '9',
    title: 'Fireballs (Bolas de Fogo)',
    content: 'Você pode usar Fireballs não apenas para destruir pontes, mas para dar um pulo impulsionado.',
    detailedContent: [
      'As Fireballs (Bolas de Fogo) são um dos itens mais versáteis do arsenal. Custam 40 de ferro, o que é um preço justo para seu utilitário.',
      'Pulo Impulsionado (Fireball Jump): Olhe cerca de 45 graus para baixo, pule, e atire a fireball logo após sair do chão. O impacto te lançará para a frente ou para cima.',
      'Defesa contra Rushes: Se um inimigo estiver fazendo uma ponte na direção da sua base, uma fireball bem mirada pode destruir os blocos e jogá-lo no void simultaneamente.',
      'Dano em Grupo: Em combates contra vários inimigos em espaços apertados, o dano em área da fireball é devastador e quebra o ritmo do time adversário.',
      'Atenção ao Delay: Existe um pequeno tempo de recarga (cooldown) entre o lançamento de bolas de fogo.'
    ],
    category: 'Combate',
    iconName: 'flame',
    level: 'Avançado',
  },
  {
    id: '10',
    title: 'Sempre leve blocos e ferramentas',
    content: 'Nunca saia da sua base sem blocos extras e as ferramentas certas para invasões.',
    detailedContent: [
      'Sua barra de acesso rápido (Hotbar) deve estar sempre preparada para qualquer situação.',
      'O "Kit" Obrigatório: Espada, Blocos (Lã), Picareta, Machado e, se possível, uma Maçã Dourada.',
      'Picareta vs Machado: Madeira é a defesa interna mais comum. Se você for sem machado e encontrar madeira, vai demorar muito para quebrar e o inimigo vai renascer e te matar. A Picareta é vital contra Endstone (Pedra do fim).',
      'Sempre tenha blocos de fuga: Blocos não servem apenas para construir pontes, servem para fechar passagens atrás de você quando estiver fugindo (block clutching) ou ganhar altura rápida para não tomar dano de espada.',
      'Dica de organização: Mantenha sempre a espada no slot 1 e os blocos em um slot que você alcança facilmente com o teclado (como o 2, 3 ou 4).'
    ],
    category: 'Defesa',
    iconName: 'hammer',
    level: 'Iniciante',
  }
];
