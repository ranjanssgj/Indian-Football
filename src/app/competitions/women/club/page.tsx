import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Users, CalendarDays, BarChart3, List, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';

const clubCompetitions = [
  {
    id: 'iwl',
    name: 'Indian Women\'s League (IWL)',
    description: "The top-tier professional women's football league in India, organized by the AIFF. It features clubs from various parts of the country.",
    format: "League format, sometimes with a final round/playoffs.",
    keyFeatures: "Provides a platform for top women footballers, winners may qualify for AFC Women's Club Championship.",
    image: "https://placehold.co/600x300.png",
    imageHint: "IWL football game"
  },
  {
    id: 'afc-womens-club-championship',
    name: "AFC Women's Club Championship",
    description: "The premier women's club football competition in Asia, organized by the AFC. Winners of national leagues like IWL get a chance to participate.",
    format: "Tournament format, often with group stages and finals.",
    keyFeatures: "Showcases top women's clubs from across Asia.",
    image: "https://placehold.co/600x300.png",
    imageHint: "AFC Women Club Championship"
  },
  {
    id: 'developing-club-scene',
    name: 'Developing Club Scene',
    description: "The women's club football ecosystem in India is continuously evolving, with more clubs and regional tournaments emerging to support player development.",
    format: "Varies by region and tournament.",
    keyFeatures: "Focus on grassroots development, increasing participation, and creating pathways for players.",
    image: "https://placehold.co/600x300.png",
    imageHint: "women football training"
  }
];

export default function WomensClubCompetitionsPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-gradient-to-b from-accent/10 to-transparent rounded-lg">
        <Users className="h-16 w-16 text-accent mx-auto mb-4" />
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-accent mb-4">Women's National Club Competitions</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-6">
          Explore the dynamic world of women's club football in India, led by the Indian Women's League (IWL) and the growing club culture.
        </p>
         <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="/competitions/women/club/clubs">
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
                  <Users className="h-8 w-8 text-accent flex-shrink-0" />
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
                    <CalendarDays className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground/90">Format:</h4>
                      <p className="text-foreground/70">{comp.format}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <BarChart3 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
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
