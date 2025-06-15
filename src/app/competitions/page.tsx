import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Users, Shield, ArrowRight } from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';

const competitionCategories = [
  {
    title: "Men's National Team Competitions",
    description: "AFC Asian Cup, FIFA World Cup Qualifiers, SAFF Championship, and more.",
    href: "/competitions/men/national-team",
    icon: Shield,
  },
  {
    title: "Men's State Competitions",
    description: "Santosh Trophy and other prestigious inter-state tournaments.",
    href: "/competitions/men/state",
    icon: Trophy,
  },
  {
    title: "Men's Club Competitions",
    description: "Indian Super League (ISL), I-League, Super Cup, Durand Cup.",
    href: "/competitions/men/club",
    icon: Users,
  },
  {
    title: "Women's National Team Competitions",
    description: "AFC Women's Asian Cup, SAFF Women's Championship, Olympic Qualifiers.",
    href: "/competitions/women/national-team",
    icon: Shield,
  },
  {
    title: "Women's State Competitions",
    description: "Senior Women's National Football Championship and other state-level events.",
    href: "/competitions/women/state",
    icon: Trophy,
  },
  {
    title: "Women's Club Competitions",
    description: "Indian Women's League (IWL) and developing club ecosystem.",
    href: "/competitions/women/club",
    icon: Users,
  },
];

export default function CompetitionsOverviewPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-gradient-to-b from-primary/10 to-transparent rounded-lg">
        <Trophy className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">Indian Football Competitions</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Explore the diverse landscape of football competitions in India, from national leagues to international tournaments.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {competitionCategories.map((category) => (
          <GlassCard key={category.title} className="flex flex-col hover:shadow-primary/30 transition-shadow duration-300">
            <CardHeader className="flex-row items-center gap-4">
              <category.icon className="h-10 w-10 text-primary" />
              <div>
                <CardTitle className="font-headline text-xl text-foreground">{category.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-foreground/80">{category.description}</CardDescription>
            </CardContent>
            <CardContent>
              <Button variant="outline" asChild className="w-full border-primary text-primary hover:bg-primary/10">
                <Link href={category.href}>
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </GlassCard>
        ))}
      </section>
    </div>
  );
}
