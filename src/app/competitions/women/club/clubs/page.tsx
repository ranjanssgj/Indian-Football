
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GlassCard } from '@/components/ui/glass-card';
import { ArrowRight, Users, Building, Calendar, Shield } from 'lucide-react';

interface Club {
  id: string;
  name: string;
  logoUrl: string;
  logoHint: string;
  city: string;
  founded: number;
  shortBio: string;
}

const womenClubsData: Club[] = [
  {
    id: 'gokulam-kerala-fcw',
    name: 'Gokulam Kerala FC (Women)',
    logoUrl: 'https://placehold.co/200x200.png',
    logoHint: 'Gokulam Kerala FC Women logo',
    city: 'Kozhikode',
    founded: 2017, 
    shortBio: 'A dominant force in the Indian Women\'s League, consistently performing at the top level.',
  },
  {
    id: 'sethu-fc',
    name: 'Sethu FC',
    logoUrl: 'https://placehold.co/200x200.png',
    logoHint: 'Sethu FC logo',
    city: 'Madurai',
    founded: 2016, 
    shortBio: 'Former champions of the Indian Women\'s League, known for developing young talent.',
  },
   {
    id: 'odisha-fc-women',
    name: 'Odisha FC (Women)',
    logoUrl: 'https://placehold.co/200x200.png',
    logoHint: 'Odisha FC Women logo',
    city: 'Bhubaneswar',
    founded: 2022, 
    shortBio: 'A relatively new but ambitious club in the Indian Women\'s League.',
  },
  {
    id: 'kickstart-fc',
    name: 'Kickstart FC Karnataka',
    logoUrl: 'https://placehold.co/200x200.png',
    logoHint: 'Kickstart FC logo',
    city: 'Bengaluru',
    founded: 2016,
    shortBio: 'A prominent team in the IWL, known for promoting women\'s football in Karnataka.',
  },
  {
    id: 'eastern-sporting-union',
    name: 'Eastern Sporting Union',
    logoUrl: 'https://placehold.co/200x200.png',
    logoHint: 'Eastern Sporting Union logo',
    city: 'Imphal',
    founded: 1956, 
    shortBio: 'Inaugural IWL champions, hailing from the powerhouse of Manipur.',
  },
  {
    id: 'sribhumi-fc',
    name: 'Sribhumi Football Club',
    logoUrl: 'https://placehold.co/200x200.png',
    logoHint: 'Sribhumi FC logo',
    city: 'Kolkata',
    founded: 2018, // Placeholder
    shortBio: 'An upcoming club participating in West Bengal state leagues and aiming for IWL.',
  },
  {
    id: 'hops-fc',
    name: 'HOPS Football Club',
    logoUrl: 'https://placehold.co/200x200.png',
    logoHint: 'HOPS FC logo',
    city: 'Delhi',
    founded: 2020, // Placeholder
    shortBio: 'A team from Delhi competing in the IWL, focusing on regional talent.',
  },
];

export default function WomensClubsListPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-gradient-to-b from-accent/10 to-transparent rounded-lg">
        <Users className="h-16 w-16 text-accent mx-auto mb-4" />
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-accent mb-4">Women's Football Clubs</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Explore the teams participating in the Indian Women's League and other women's club competitions.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {womenClubsData.map((club) => (
          <GlassCard key={club.id} className="flex flex-col overflow-hidden hover:shadow-accent/40 transition-shadow duration-300">
            <div className="relative h-40 w-full bg-muted/30 flex items-center justify-center p-4">
              <Image src={club.logoUrl} alt={`${club.name} logo`} width={100} height={100} objectFit="contain" data-ai-hint={club.logoHint} className="rounded-md"/>
            </div>
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-foreground">{club.name}</CardTitle>
              <CardDescription className="text-accent font-semibold flex items-center gap-2">
                <Building className="h-4 w-4" /> {club.city} <span className="text-muted-foreground">|</span> <Calendar className="h-4 w-4" /> Founded: {club.founded}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-foreground/80">{club.shortBio}</p>
            </CardContent>
            <CardContent>
              <Button asChild variant="outline" className="w-full border-accent text-accent hover:bg-accent/10">
                <Link href={`/competitions/women/club/clubs/${club.id}`}>
                  View Club Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </GlassCard>
        ))}
      </section>
      {womenClubsData.length === 0 && (
        <GlassCard className="p-6 text-center">
            <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-muted-foreground">No clubs listed yet.</h2>
            <p className="text-muted-foreground/80">Information about women's football clubs will be available here soon.</p>
        </GlassCard>
      )}
    </div>
  );
}
