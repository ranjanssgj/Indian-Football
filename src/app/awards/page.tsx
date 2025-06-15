import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Award as AwardIconLucide, UserCheck, Users } from 'lucide-react';
import Image from 'next/image';
import { GlassCard } from '@/components/ui/glass-card';

interface Award {
  id: string;
  name: string;
  description: string;
  categories?: string[];
  recentWinner?: string; // Placeholder
  icon?: React.ElementType;
  image?: string;
  imageHint?: string;
}

const awardsData: Award[] = [
  {
    id: 'aiff-poty',
    name: 'AIFF Player of the Year',
    description: 'Awarded annually by the All India Football Federation to the best male and female footballers.',
    categories: ["Men's", "Women's"],
    recentWinner: 'Sunil Chhetri (Men, 2021-22), Manisha Kalyan (Women, 2021-22) (Example)',
    icon: UserCheck,
    image: "https://placehold.co/600x400.png",
    imageHint: "award ceremony"
  },
  {
    id: 'fpa-poty',
    name: 'FPAI Player of the Year',
    description: 'Presented by the Football Players Association of India, voted by fellow players.',
    categories: ["Men's"],
    recentWinner: 'Player Name (Example)',
    icon: Users,
    image: "https://placehold.co/600x400.png",
    imageHint: "player award"
  },
  {
    id: 'isl-golden-boot',
    name: 'ISL Golden Boot',
    description: 'Awarded to the top goalscorer in the Indian Super League season.',
    icon: AwardIconLucide,
    image: "https://placehold.co/600x400.png",
    imageHint: "golden boot"
  },
   {
    id: 'isl-golden-ball',
    name: 'ISL Golden Ball',
    description: 'Awarded to the best player in the Indian Super League season.',
    icon: AwardIconLucide,
    image: "https://placehold.co/600x400.png",
    imageHint: "golden ball"
  },
  {
    id: 'durand-cup-awards',
    name: 'Durand Cup Awards',
    description: 'Various awards presented at the prestigious Durand Cup tournament.',
    categories: ["Golden Boot", "Golden Glove", "Golden Ball"],
    icon: Trophy,
    image: "https://placehold.co/600x400.png",
    imageHint: "cup trophy"
  },
];

export default function AwardsPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-gradient-to-b from-primary/10 to-transparent rounded-lg">
        <div className="flex justify-center items-center mb-4">
          <Trophy className="h-16 w-16 text-primary" />
        </div>
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">Indian Football Awards</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Celebrating excellence and achievement in Indian Football. Discover the prestigious awards and honours.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {awardsData.map((award) => {
          const IconComponent = award.icon || Trophy;
          return (
            <GlassCard key={award.id} className="flex flex-col overflow-hidden hover:shadow-primary/40 transition-shadow duration-300">
              {award.image && (
                <div className="relative h-48 w-full">
                  <Image src={award.image} alt={award.name} layout="fill" objectFit="cover" data-ai-hint={award.imageHint} />
                </div>
              )}
              <CardHeader>
                 <div className="flex items-center gap-3 mb-2">
                    <IconComponent className="h-8 w-8 text-primary" />
                    <CardTitle className="font-headline text-2xl text-foreground">{award.name}</CardTitle>
                 </div>
              </CardHeader>
              <CardContent className="flex-grow space-y-2">
                <CardDescription className="text-foreground/80">{award.description}</CardDescription>
                {award.categories && (
                  <div>
                    <h4 className="font-semibold text-sm text-foreground/90">Categories:</h4>
                    <p className="text-xs text-foreground/70">{award.categories.join(', ')}</p>
                  </div>
                )}
                {award.recentWinner && (
                  <div>
                    <h4 className="font-semibold text-sm text-foreground/90">Recent Winner(s) (Example):</h4>
                    <p className="text-xs text-foreground/70">{award.recentWinner}</p>
                  </div>
                )}
              </CardContent>
            </GlassCard>
          );
        })}
      </section>
    </div>
  );
}
