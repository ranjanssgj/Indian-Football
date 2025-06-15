import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { IndianFlagIcon } from '@/components/icons/indian-flag-icon';
import { Users, CalendarDays, BarChart3, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { GlassCard } from '@/components/ui/glass-card';

export default function MensNationalTeamPage() {
  return (
    <div className="space-y-12">
      <section className="relative py-16 md:py-24 rounded-lg overflow-hidden">
        <Image 
          src="https://placehold.co/1200x400.png" 
          alt="Men's National Team Action" 
          layout="fill" 
          objectFit="cover" 
          className="opacity-30 z-0"
          data-ai-hint="men football action"
        />
        <div className="relative z-10 container mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <IndianFlagIcon width={45} height={30} />
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Men's National Team</h1>
            <IndianFlagIcon width={45} height={30} />
          </div>
          <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto">
            The Blue Tigers - Carrying the hopes of a billion hearts on the football pitch.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <GlassCard>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center gap-2"><Users className="text-primary"/>Team History</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/80">A brief history of the Indian Men's National Football Team, highlighting key milestones and achievements. (Placeholder content)</p>
          </CardContent>
        </GlassCard>
        
        <GlassCard>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center gap-2"><CalendarDays className="text-primary"/>Recent Performances & Fixtures</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/80">Information on recent match results and upcoming fixtures for the Blue Tigers. (Placeholder content)</p>
            <Button variant="link" asChild className="text-primary p-0 mt-2">
                <Link href="/competitions/men/national-team">View Competition Details <ExternalLink className="ml-1 h-4 w-4" /></Link>
            </Button>
          </CardContent>
        </GlassCard>

        <GlassCard>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center gap-2"><BarChart3 className="text-primary"/>Key Players & Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/80">Profiles of key players, team statistics, and records. (Placeholder content)</p>
          </CardContent>
        </GlassCard>
      </section>

       <section className="text-center">
          <GlassCard className="inline-block">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Official AIFF Page</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-foreground/80 mb-4">For the latest official updates, visit the AIFF website.</p>
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <a href="https://www.the-aiff.com/national-team/men" target="_blank" rel="noopener noreferrer">
                        Visit AIFF <ExternalLink className="ml-2 h-4 w-4"/>
                    </a>
                </Button>
            </CardContent>
          </GlassCard>
      </section>
    </div>
  );
}
