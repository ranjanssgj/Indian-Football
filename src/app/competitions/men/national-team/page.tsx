import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Shield, CalendarDays, Globe } from 'lucide-react';
import Image from 'next/image';
import { GlassCard } from '@/components/ui/glass-card';

const competitions = [
  {
    id: 'afc-asian-cup',
    name: 'AFC Asian Cup',
    description: "The primary football competition contested by the senior men's national teams of the members of the Asian Football Confederation (AFC).",
    frequency: "Every four years",
    indiaPerformance: "Best performance: Runners-up (1964). Qualified multiple times.",
    image: "https://placehold.co/600x300.png",
    imageHint: "AFC Asian Cup trophy"
  },
  {
    id: 'fifa-wc-qualifiers',
    name: 'FIFA World Cup Qualifiers (AFC)',
    description: "Asian section of the FIFA World Cup qualification, determining which national teams from Asia qualify for the FIFA World Cup finals.",
    frequency: "Road to each World Cup",
    indiaPerformance: "Participates regularly; has not yet qualified for the World Cup finals.",
    image: "https://placehold.co/600x300.png",
    imageHint: "World Cup qualifier match"
  },
  {
    id: 'saff-championship',
    name: 'SAFF Championship',
    description: "The main international football competition of the men's national football teams governed by the South Asian Football Federation (SAFF).",
    frequency: "Biennial",
    indiaPerformance: "Most successful team, winning the tournament multiple times.",
    image: "https://placehold.co/600x300.png",
    imageHint: "SAFF Championship celebration"
  },
   {
    id: 'intercontinental-cup',
    name: 'Intercontinental Cup / Hero Tri-Nation Series',
    description: "An invitational football tournament organized by the AIFF, featuring India and other invited national teams.",
    frequency: "Periodical",
    indiaPerformance: "Hosted and won the tournament.",
    image: "https://placehold.co/600x300.png",
    imageHint: "India football match"
  }
];

export default function MensNationalTeamCompetitionsPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-gradient-to-b from-primary/10 to-transparent rounded-lg">
        <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">Men's National Team Competitions</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          An overview of the major international tournaments and qualifiers involving the Indian Men's National Football Team.
        </p>
      </section>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {competitions.map((comp) => (
          <GlassCard key={comp.id} className="overflow-hidden">
            <AccordionItem value={comp.id} className="border-b-0">
              <AccordionTrigger className="p-6 hover:no-underline">
                <div className="flex items-center gap-4 w-full">
                  <Shield className="h-8 w-8 text-primary flex-shrink-0" />
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
                      <h4 className="font-semibold text-foreground/90">Frequency:</h4>
                      <p className="text-foreground/70">{comp.frequency}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Globe className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground/90">India's Performance Highlights:</h4>
                      <p className="text-foreground/70">{comp.indiaPerformance}</p>
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
