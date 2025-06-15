import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, ShieldCheck, Zap } from 'lucide-react';
import Image from 'next/image';
import { GlassCard } from '@/components/ui/glass-card';

interface PlayerIcon {
  id: string;
  name: string;
  imageUrl: string;
  imageHint: string;
  bio: string;
  achievements: string[];
  playingYears?: string;
}

const legendaryPlayers: PlayerIcon[] = [
  {
    id: 'sunil-chhetri',
    name: 'Sunil Chhetri',
    imageUrl: 'https://placehold.co/400x400.png',
    imageHint: 'Sunil Chhetri portrait',
    bio: "One of India's most prolific goalscorers and current captain of the national team. Known for his leadership and dedication.",
    achievements: ['Record Indian International Goalscorer', 'Multiple AIFF Player of the Year awards', 'Led India to multiple SAFF Championships'],
    playingYears: '2002 - Present'
  },
  {
    id: 'bhaichung-bhutia',
    name: 'Bhaichung Bhutia',
    imageUrl: 'https://placehold.co/400x400.png',
    imageHint: 'Bhaichung Bhutia portrait',
    bio: 'Known as the "Sikkimese Sniper", Bhutia was a trailblazer for Indian footballers, playing professionally in England.',
    achievements: ['First Indian to play professionally in Europe (Bury F.C.)', 'Arjuna Award & Padma Shri recipient', 'Over 100 international caps'],
    playingYears: '1993 - 2011'
  },
  {
    id: 'im-vijayan',
    name: 'I. M. Vijayan',
    imageUrl: 'https://placehold.co/400x400.png',
    imageHint: 'IM Vijayan portrait',
    bio: 'Fondly called "Kalo Harin" (Black Buck), Vijayan was renowned for his electrifying pace and goal-scoring prowess.',
    achievements: ['Three-time AIFF Player of the Year', 'Scored one of the fastest international goals', 'Legend of Kolkata Maidan'],
    playingYears: '1987 - 2004'
  },
  {
    id: 'pk-banerjee',
    name: 'P. K. Banerjee',
    imageUrl: 'https://placehold.co/400x400.png',
    imageHint: 'PK Banerjee portrait',
    bio: 'A legendary player and coach, P.K. Banerjee was part of India\'s golden era in the 1950s and 60s.',
    achievements: ['1962 Asian Games Gold Medalist', 'FIFA Centennial Order of Merit', 'Represented India in two Olympics'],
    playingYears: '1954 - 1967 (Player)'
  },
  {
    id: 'o-bembem-devi',
    name: 'Oinam Bembem Devi',
    imageUrl: 'https://placehold.co/400x400.png',
    imageHint: 'Oinam Bembem Devi portrait',
    bio: 'A stalwart of Indian women\'s football for over two decades, known as the "Durga of Indian Football".',
    achievements: ['Arjuna Award & Padma Shri recipient', 'Multiple SAFF Women\'s Championships', 'Over 80 international caps'],
    playingYears: '1995 - 2016'
  },
];

export default function IconsPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-gradient-to-b from-accent/10 to-transparent rounded-lg">
         <div className="flex justify-center items-center mb-4">
          <Star className="h-16 w-16 text-accent" />
        </div>
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-accent mb-4">Legends of Indian Football</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Honouring the iconic players who have left an indelible mark on the history of Indian football.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {legendaryPlayers.map((player) => (
          <GlassCard key={player.id} className="flex flex-col overflow-hidden hover:shadow-accent/40 transition-shadow duration-300">
            <div className="relative aspect-square w-full">
              <Image src={player.imageUrl} alt={player.name} layout="fill" objectFit="cover" className="rounded-t-xl" data-ai-hint={player.imageHint}/>
            </div>
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-foreground">{player.name}</CardTitle>
              {player.playingYears && <CardDescription className="text-accent font-semibold">{player.playingYears}</CardDescription>}
            </CardHeader>
            <CardContent className="flex-grow space-y-3">
              <p className="text-sm text-foreground/80">{player.bio}</p>
              <div>
                <h4 className="font-semibold text-sm text-foreground/90 mb-1 flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-accent" />Key Achievements:</h4>
                <ul className="list-disc list-inside text-xs text-foreground/70 space-y-0.5">
                  {player.achievements.map((ach, index) => (
                    <li key={index}>{ach}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </GlassCard>
        ))}
      </section>
    </div>
  );
}
