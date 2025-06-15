import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { IndianFlagIcon } from '@/components/icons/indian-flag-icon';
import { Users, CalendarDays, BarChart3, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { GlassCard } from '@/components/ui/glass-card';

export default function WomensNationalTeamPage() {
  return (
    <div className="space-y-12">
      <section className="relative py-16 md:py-24 rounded-lg overflow-hidden">
        <Image 
          src="https://placehold.co/1200x400.png" 
          alt="Women's National Team Action" 
          layout="fill" 
          objectFit="cover" 
          className="opacity-30 z-0"
          data-ai-hint="women football match"
        />
        <div className="relative z-10 container mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <IndianFlagIcon width={45} height={30} />
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-accent">Women's National Team</h1>
            <IndianFlagIcon width={45} height={30} />
          </div>
          <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto">
            The Blue Tigresses - Inspiring a generation with their skill, determination, and passion for football.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <GlassCard>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center gap-2"><Users className="text-accent"/>Team History & Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/80">Explore the journey and key achievements of the Indian Women's National Football Team. (Placeholder content)</p>
          </CardContent>
        </GlassCard>
        
        <GlassCard>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center gap-2"><CalendarDays className="text-accent"/>Recent Performances & Fixtures</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/80">Stay updated on the Blue Tigresses' recent match results and upcoming games. (Placeholder content)</p>
             <Button variant="link" asChild className="text-accent p-0 mt-2">
                <Link href="/competitions/women/national-team">View Competition Details <ExternalLink className="ml-1 h-4 w-4" /></Link>
            </Button>
          </CardContent>
        </GlassCard>

        <GlassCard>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center gap-2"><BarChart3 className="text-accent"/>Key Players & Squad Info</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/80">Discover the talented players representing India and team statistics. (Placeholder content)</p>
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
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <a href="https://www.the-aiff.com/national-team/women" target="_blank" rel="noopener noreferrer">
                        Visit AIFF <ExternalLink className="ml-2 h-4 w-4"/>
                    </a>
                </Button>
            </CardContent>
          </GlassCard>
      </section>
    </div>
  );
}
