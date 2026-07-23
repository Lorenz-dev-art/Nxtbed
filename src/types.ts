export type Category = 'Todos' | 'Geral' | 'Pontes' | 'Combate' | 'Defesa' | 'Economia';

export interface Tip {
  id: string;
  title: string;
  content: string;
  detailedContent: string[];
  category: Category;
  iconName: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
}
