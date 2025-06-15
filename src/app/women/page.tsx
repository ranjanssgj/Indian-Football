import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Shield, Trophy, Users } from 'lucide-react';
import Image from 'next/image';
import { GlassCard } from '@/components/ui/glass-card';

const womenSections = [
  {
    title: "National Team Competitions",
    description: "Follow the journey of our Women's National Team in international arenas.",
    href: "/competitions/women/national-team",
    icon: Shield,
    image: "https://placehold.co/600x400.png",
    imageHint: "women team"
  },
  {
    title: "National State Competitions",
    description: "Learn about state-level tournaments fostering talent in women's football.",
    href: "/competitions/women/state",
    icon: Trophy,
    image: "https://placehold.co/600x400.png",
    imageHint: "women football"
  },
  {
    title: "National Club Competitions",
    description: "Explore the Indian Women's League (IWL) and other club-level championships.",
    href: "/competitions/women/club",
    icon: Users,
    image: "https://placehold.co/600x400.png",
    imageHint: "action shot"
  },
];

export default function WomenFootballPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-gradient-to-b from-accent/10 to-transparent rounded-lg">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-accent mb-4">Women's Football</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Discover the exciting and rapidly growing landscape of Women's Indian Football. From national team glory to the thriving club competitions.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {womenSections.map((section) => (
          <GlassCard key={section.title} className="flex flex-col overflow-hidden hover:shadow-accent/40 transition-shadow duration-300">
             <div className="relative h-48 w-full">
              <Image src={section.image} alt={section.title} layout="fill" objectFit="cover" data-ai-hint={section.imageHint} />
            </div>
            <CardHeader>
               <div className="flex items-center gap-3 mb-2">
                <section.icon className="h-8 w-8 text-accent" />
                <CardTitle className="font-headline text-2xl text-foreground">{section.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-foreground/80">{section.description}</CardDescription>
            </CardContent>
             <CardContent>
              <Button asChild variant="outline" className="w-full border-accent text-accent hover:bg-accent/10">
                <Link href={section.href}>
                  Explore <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </GlassCard>
        ))}
      </section>
    </div>
  );
}
