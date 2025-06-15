import type { LucideIcon } from 'lucide-react';
import { Home, Users, Shield, Trophy, Star, Newspaper, Link as LinkIcon, AlignJustify } from 'lucide-react';

export interface NavLink {
  href: string;
  label: string;
  icon?: LucideIcon;
  children?: NavLink[];
}

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home', icon: Home },
  { 
    href: '/men', 
    label: "Men's Football", 
    icon: Users,
    children: [
      { href: '/competitions/men/national-team', label: 'National Team Competitions' },
      { href: '/competitions/men/state', label: 'State Competitions' },
      { href: '/competitions/men/club', label: 'Club Competitions' },
    ]
  },
  { 
    href: '/women', 
    label: "Women's Football", 
    icon: Users,
    children: [
      { href: '/competitions/women/national-team', label: 'National Team Competitions' },
      { href: '/competitions/women/state', label: 'State Competitions' },
      { href: '/competitions/women/club', label: 'Club Competitions' },
    ]
  },
  { 
    href: '/national-teams', 
    label: 'National Teams', 
    icon: Shield,
    children: [
      { href: '/national-teams/men', label: "Men's Team" },
      { href: '/national-teams/women', label: "Women's Team" },
    ]
  },
  { href: '/awards', label: 'Awards', icon: Trophy },
  { href: '/icons', label: 'Icons', icon: Star },
];

export const mobileNavLinks: NavLink[] = [...navLinks]; // Can be customized if needed
