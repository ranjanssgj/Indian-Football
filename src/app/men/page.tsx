import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Shield, Trophy, Users } from 'lucide-react';
import Image from 'next/image';
import { GlassCard } from '@/components/ui/glass-card';

const menSections = [
  {
    title: "National Team Competitions",
    description: "Explore the tournaments and qualifications our Men's National Team participates in.",
    href: "/competitions/men/national-team",
    icon: Shield,
    image: "https://i.ibb.co/LD1GN33X/MNT.jpg",
    imageHint: "team celebration"
  },
  {
    title: "National State Competitions",
    description: "Discover inter-state championships like the Santosh Trophy and their significance.",
    href: "/competitions/men/state",
    icon: Trophy,
    image: "https://i.ibb.co/whtSs3zz/MNS.jpg",
    imageHint: "trophy presentation"
  },
  {
    title: "National Club Competitions",
    description: "Follow top-tier club football including the ISL, I-League, and Super Cup.",
    href: "/competitions/men/club",
    icon: Users,
    image: "https://i.ibb.co/WWKGvs6y/MNC.jpg",
    imageHint: "football action"
  },
];

export default function MenFootballPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-gradient-to-b from-primary/10 to-transparent rounded-lg">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">Men's Football</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Dive into the world of Men's Indian Football. Explore national team achievements, state-level rivalries, and the vibrant club scene.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menSections.map((section) => (
          <GlassCard key={section.title} className="flex flex-col overflow-hidden hover:shadow-primary/40 transition-shadow duration-300">
            <div className="relative h-48 w-full">
              <Image src={section.image} alt={section.title} layout="fill" objectFit="cover" data-ai-hint={section.imageHint} />
            </div>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <section.icon className="h-8 w-8 text-primary" />
                <CardTitle className="font-headline text-2xl text-foreground">{section.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-foreground/80">{section.description}</CardDescription>
            </CardContent>
            <CardContent>
              <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
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
