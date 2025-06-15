import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Shield, CalendarDays, Globe } from 'lucide-react';
import Image from 'next/image';
import { GlassCard } from '@/components/ui/glass-card';

const competitions = [
  {
    id: 'afc-womens-asian-cup',
    name: "AFC Women's Asian Cup",
    description: "The premier international football competition for women's national teams in Asia, organized by the AFC. Also serves as qualifiers for the FIFA Women's World Cup.",
    frequency: "Every four years",
    indiaPerformance: "Runners-up (1979, 1983). Hosted the tournament in 2022.",
    image: "https://placehold.co/600x300.png",
    imageHint: "AFC Women Asian Cup"
  },
  {
    id: 'fifa-wwc-qualifiers',
    name: "FIFA Women's World Cup Qualifiers (AFC)",
    description: "The AFC Women's Asian Cup often serves as the qualification tournament for Asian teams to the FIFA Women's World Cup.",
    frequency: "Road to each Women's World Cup",
    indiaPerformance: "Participates through the AFC Women's Asian Cup.",
    image: "https://placehold.co/600x300.png",
    imageHint: "women world cup qualifier"
  },
  {
    id: 'saff-womens-championship',
    name: "SAFF Women's Championship",
    description: "The main international football competition for women's national teams in South Asia, organized by SAFF.",
    frequency: "Biennial",
    indiaPerformance: "Dominant force, winning the championship multiple times.",
    image: "https://placehold.co/600x300.png",
    imageHint: "SAFF Women Championship"
  },
  {
    id: 'olympic-qualifiers',
    name: "Olympic Football Tournament Qualifiers (AFC)",
    description: "Asian qualifiers for the women's football tournament at the Summer Olympics.",
    frequency: "Road to each Olympic Games",
    indiaPerformance: "Participates in qualification rounds.",
    image: "https://placehold.co/600x300.png",
    imageHint: "women olympic football"
  }
];

export default function WomensNationalTeamCompetitionsPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-gradient-to-b from-accent/10 to-transparent rounded-lg">
        <Shield className="h-16 w-16 text-accent mx-auto mb-4" />
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-accent mb-4">Women's National Team Competitions</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Discover the major international tournaments where the Indian Women's National Football Team (Blue Tigresses) compete.
        </p>
      </section>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {competitions.map((comp) => (
          <GlassCard key={comp.id} className="overflow-hidden">
            <AccordionItem value={comp.id} className="border-b-0">
              <AccordionTrigger className="p-6 hover:no-underline">
                <div className="flex items-center gap-4 w-full">
                  <Shield className="h-8 w-8 text-accent flex-shrink-0" />
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
                      <h4 className="font-semibold text-foreground/90">Frequency:</h4>
                      <p className="text-foreground/70">{comp.frequency}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Globe className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
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
