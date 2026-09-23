export interface NavItem {
  id: string;
  label: string;
  href: string;
  badge?: string;
  isExternal?: boolean;
}

export type GridCategory = 'all' | 'ai' | 'gaming' | 'payments' | 'security';

export interface GridFeature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: GridCategory;
  colSpan: string; // e.g. 'lg:col-span-4' or 'lg:col-span-8'
  rowSpan?: string;
  iconName: string;
  badgeText?: string;
  badgeColor?: string;
  accentColor: string;
  stats?: {
    value: string;
    label: string;
    change?: string;
  };
}

export interface QuestItem {
  id: string;
  title: string;
  reward: string;
  progress: number;
  total: number;
  completed: boolean;
}

export interface LeaderboardUser {
  rank: number;
  name: string;
  avatar: string;
  volume: string;
  level: number;
  badge: string;
}
