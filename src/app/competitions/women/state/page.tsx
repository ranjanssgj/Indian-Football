import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Trophy, CalendarDays, Users } from 'lucide-react';
import Image from 'next/image';
import { GlassCard } from '@/components/ui/glass-card';

const stateCompetitions = [
  {
    id: 'senior-womens-nfc',
    name: "Senior Women's National Football Championship",
    description: "The premier state-level football competition for women in India, organized by the AIFF. Teams representing various state associations compete for the title.",
    significance: "A key tournament for scouting talent for the national team and promoting women's football across states.",
    format: "Group stages followed by knock-out rounds.",
    image: "https://placehold.co/600x300.png",
    imageHint: "women football championship"
  },
  {
    id: 'other-state-leagues-womens',
    name: "Various Women's State Leagues",
    description: "Several states have started their own women's football leagues to provide regular competitive opportunities and develop the game at the grassroots level.",
    significance: "Essential for building a strong foundation for women's football and increasing participation.",
    format: "League format, specific to each state.",
    image: "https://placehold.co/600x300.png",
    imageHint: "women state league"
  },
];

export default function WomensStateCompetitionsPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-gradient-to-b from-accent/10 to-transparent rounded-lg">
        <Trophy className="h-16 w-16 text-accent mx-auto mb-4" />
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-accent mb-4">Women's National State Competitions</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Learn about the state-level championships that are pivotal in nurturing talent and promoting women's football throughout India.
        </p>
      </section>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {stateCompetitions.map((comp) => (
          <GlassCard key={comp.id} className="overflow-hidden">
            <AccordionItem value={comp.id} className="border-b-0">
              <AccordionTrigger className="p-6 hover:no-underline">
                <div className="flex items-center gap-4 w-full">
                  <Trophy className="h-8 w-8 text-accent flex-shrink-0" />
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
                    <Users className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground/90">Significance:</h4>
                      <p className="text-foreground/70">{comp.significance}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CalendarDays className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground/90">Format:</h4>
                      <p className="text-foreground/70">{comp.format}</p>
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
