import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Users, Shield } from 'lucide-react';
import Image from 'next/image';
import { GlassCard } from '@/components/ui/glass-card';

const teamSections = [
  {
    title: "Men's National Team",
    description: "Follow the Blue Tigers: history, achievements, current squad, and upcoming fixtures.",
    href: "/national-teams/men",
    icon: Users,
    image: "https://placehold.co/600x400.png",
    imageHint: "men football team"
  },
  {
    title: "Women's National Team",
    description: "Support the Blue Tigresses: journey, milestones, player profiles, and match schedules.",
    href: "/national-teams/women",
    icon: Users,
    image: "https://placehold.co/600x400.png",
    imageHint: "women football team"
  },
];

export default function NationalTeamsPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-gradient-to-b from-primary/10 to-transparent rounded-lg">
        <div className="flex justify-center items-center mb-4">
          <Shield className="h-16 w-16 text-primary" />
        </div>
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">Our National Pride</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Learn about the Men's and Women's National Football Teams representing India on the international stage.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {teamSections.map((section) => (
          <GlassCard key={section.title} className="flex flex-col overflow-hidden hover:shadow-primary/40 transition-shadow duration-300">
            <div className="relative h-56 w-full">
              <Image src={section.image} alt={section.title} layout="fill" objectFit="cover" data-ai-hint={section.imageHint}/>
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
                  View Team Info <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </GlassCard>
        ))}
      </section>
    </div>
  );
}
