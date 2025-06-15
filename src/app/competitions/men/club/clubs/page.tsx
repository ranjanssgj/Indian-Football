
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

const menClubsData: Club[] = [
  {
    id: 'mumbai-city-fc',
    name: 'Mumbai City FC',
    logoUrl: 'https://placehold.co/200x200.png',
    logoHint: 'Mumbai City FC logo',
    city: 'Mumbai',
    founded: 2014,
    shortBio: 'A leading club in the Indian Super League, known for its competitive spirit and strong fan base.',
  },
  {
    id: 'mohun-bagan-sg',
    name: 'Mohun Bagan Super Giant',
    logoUrl: 'https://placehold.co/200x200.png',
    logoHint: 'Mohun Bagan SG logo',
    city: 'Kolkata',
    founded: 1889,
    shortBio: 'One of the oldest and most successful clubs in India, with a rich history and passionate supporters.',
  },
  {
    id: 'bengaluru-fc',
    name: 'Bengaluru FC',
    logoUrl: 'https://placehold.co/200x200.png',
    logoHint: 'Bengaluru FC logo',
    city: 'Bengaluru',
    founded: 2013,
    shortBio: 'Known for professional setup and consistent performances in both domestic and continental competitions.',
  },
  {
    id: 'fc-goa',
    name: 'FC Goa',
    logoUrl: 'https://placehold.co/200x200.png',
    logoHint: 'FC Goa logo',
    city: 'Margao',
    founded: 2014,
    shortBio: 'Known for their attacking style of play and strong Goan footballing heritage.',
  },
  {
    id: 'kerala-blasters-fc',
    name: 'Kerala Blasters FC',
    logoUrl: 'https://placehold.co/200x200.png',
    logoHint: 'Kerala Blasters FC logo',
    city: 'Kochi',
    founded: 2014,
    shortBio: 'Boasting one of the most passionate fan bases in India, the "Manjappada".',
  },
  {
    id: 'chennaiyin-fc',
    name: 'Chennaiyin FC',
    logoUrl: 'https://placehold.co/200x200.png',
    logoHint: 'Chennaiyin FC logo',
    city: 'Chennai',
    founded: 2014,
    shortBio: 'Two-time ISL champions, known for their resilience and strong team ethic.',
  },
  {
    id: 'east-bengal-fc',
    name: 'East Bengal FC',
    logoUrl: 'https://placehold.co/200x200.png',
    logoHint: 'East Bengal FC logo',
    city: 'Kolkata',
    founded: 1920,
    shortBio: 'A historic giant of Indian football with a massive and devoted fan following.',
  },
  {
    id: 'northeast-united-fc',
    name: 'NorthEast United FC',
    logoUrl: 'https://placehold.co/200x200.png',
    logoHint: 'NorthEast United FC logo',
    city: 'Guwahati',
    founded: 2014,
    shortBio: 'Representing the eight states of North-East India, known for passionate support.',
  },
  {
    id: 'hyderabad-fc',
    name: 'Hyderabad FC',
    logoUrl: 'https://placehold.co/200x200.png',
    logoHint: 'Hyderabad FC logo',
    city: 'Hyderabad',
    founded: 2019,
    shortBio: 'ISL champions in 2021-22, known for their strong youth development.',
  },
  {
    id: 'jamshedpur-fc',
    name: 'Jamshedpur FC',
    logoUrl: 'https://placehold.co/200x200.png',
    logoHint: 'Jamshedpur FC logo',
    city: 'Jamshedpur',
    founded: 2017,
    shortBio: 'Known for their passionate fanbase and strong community engagement.',
  },
  {
    id: 'mohammedan-sc',
    name: 'Mohammedan Sporting Club',
    logoUrl: 'https://placehold.co/200x200.png',
    logoHint: 'Mohammedan SC logo',
    city: 'Kolkata',
    founded: 1891,
    shortBio: 'One of the oldest and most historically significant clubs in Indian football, recently promoted to ISL.',
  },
  {
    id: 'odisha-fc',
    name: 'Odisha FC',
    logoUrl: 'https://placehold.co/200x200.png',
    logoHint: 'Odisha FC logo',
    city: 'Bhubaneswar',
    founded: 2019,
    shortBio: 'Representing the state of Odisha, known for their focus on youth and community. Super Cup 2023 winners.',
  },
  {
    id: 'punjab-fc',
    name: 'Punjab FC',
    logoUrl: 'https://placehold.co/200x200.png',
    logoHint: 'Punjab FC logo',
    city: 'Mohali (plays in Delhi for ISL)',
    founded: 2005,
    shortBio: 'Promoted to ISL after winning the I-League, with a strong background in youth development.',
  },
];

export default function MensClubsListPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-gradient-to-b from-primary/10 to-transparent rounded-lg">
        <Users className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">Men's Football Clubs</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Discover the teams competing in India's top men's football leagues and competitions.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menClubsData.map((club) => (
          <GlassCard key={club.id} className="flex flex-col overflow-hidden hover:shadow-primary/40 transition-shadow duration-300">
            <div className="relative h-40 w-full bg-muted/30 flex items-center justify-center p-4">
              <Image src={club.logoUrl} alt={`${club.name} logo`} width={100} height={100} objectFit="contain" data-ai-hint={club.logoHint} className="rounded-md"/>
            </div>
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-foreground">{club.name}</CardTitle>
              <CardDescription className="text-primary font-semibold flex items-center gap-2">
                <Building className="h-4 w-4" /> {club.city} <span className="text-muted-foreground">|</span> <Calendar className="h-4 w-4" /> Founded: {club.founded}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-foreground/80">{club.shortBio}</p>
            </CardContent>
            <CardContent>
              <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                <Link href={`/competitions/men/club/clubs/${club.id}`}>
                  View Club Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </GlassCard>
        ))}
      </section>
       {menClubsData.length === 0 && (
        <GlassCard className="p-6 text-center">
            <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-muted-foreground">No clubs listed yet.</h2>
            <p className="text-muted-foreground/80">Information about men's football clubs will be available here soon.</p>
        </GlassCard>
      )}
    </div>
  );
}
