import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Users, CalendarDays, BarChart3, List, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';

const clubCompetitions = [
  {
    id: 'isl',
    name: 'Indian Super League (ISL)',
    description: "India's top-tier professional football league, featuring city-based franchise clubs.",
    format: "League stage followed by playoffs.",
    keyFeatures: "Marquee players, high production value, AFC Champions League spot for winners.",
    image: "https://placehold.co/600x300.png",
    imageHint: "ISL football match"
  },
  {
    id: 'i-league',
    name: 'I-League',
    description: "One of the top professional football leagues in India, with clubs from across the country.",
    format: "League format.",
    keyFeatures: "Promotion to ISL (currently under discussion/implementation), rich history.",
    image: "https://placehold.co/600x300.png",
    imageHint: "I-League action"
  },
  {
    id: 'super-cup',
    name: 'Super Cup',
    description: "An annual knockout football tournament in India contested by clubs from the ISL and I-League.",
    format: "Knockout tournament.",
    keyFeatures: "Brings together teams from both top leagues.",
    image: "https://placehold.co/600x300.png",
    imageHint: "Super Cup trophy"
  },
  {
    id: 'durand-cup',
    name: 'Durand Cup',
    description: "The oldest football tournament in Asia and the third oldest in the world. Features top Indian clubs and armed forces teams.",
    format: "Group stage followed by knockout rounds.",
    keyFeatures: "Rich heritage, participation of armed forces teams.",
    image: "https://placehold.co/600x300.png",
    imageHint: "Durand Cup game"
  }
];

export default function MensClubCompetitionsPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-gradient-to-b from-primary/10 to-transparent rounded-lg">
        <Users className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">Men's National Club Competitions</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-6">
          Delve into the vibrant club football scene in India, from the premier leagues to historic cup tournaments.
        </p>
        <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="/competitions/men/club/clubs">
            <List className="mr-2 h-5 w-5" /> View All Clubs
          </Link>
        </Button>
      </section>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {clubCompetitions.map((comp) => (
          <GlassCard key={comp.id} className="overflow-hidden">
            <AccordionItem value={comp.id} className="border-b-0">
              <AccordionTrigger className="p-6 hover:no-underline">
                <div className="flex items-center gap-4 w-full">
                  <Users className="h-8 w-8 text-primary flex-shrink-0" />
                  <span className="font-headline text-xl text-left text-foreground flex-grow">{comp.name}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0">
                <div className="relative h-48 w-full mb-4 rounded-md overflow-hidden">
                  <Image src={comp.image} alt={comp.name} layout="fill" objectFit="cover" data-ai-hint={comp.imageHint}/>
                </div>
                <p className="text-foreground/80 mb-3">{comp.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-start gap-2">
                    <CalendarDays className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground/90">Format:</h4>
                      <p className="text-foreground/70">{comp.format}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <BarChart3 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground/90">Key Features:</h4>
                      <p className="text-foreground/70">{comp.keyFeatures}</p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </GlassCard>
        ))}
      </Accordion>
    </div>
  );
}
