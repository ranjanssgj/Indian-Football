import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { NewsSummarizer } from '@/components/news-summarizer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Newspaper, Trophy, Users, Shield, BarChart, Globe, Link2 } from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';

const offerings = [
  { title: "Men's Football", description: "Latest updates, match results, and player profiles from men's football leagues and tournaments.", icon: Users, href: "/men" },
  { title: "Women's Football", description: "Follow the growth of women's football in India, with news, fixtures, and analysis.", icon: Users, href: "/women" },
  { title: "National Teams", description: "Track the journey of India's national football teams (men and women) in international competitions.", icon: Shield, href: "/national-teams" },
  { title: "Awards & Recognition", description: "Discover the prestigious awards in Indian football and celebrate the achievers.", icon: Trophy, href: "/awards" },
  { title: "Football Icons", description: "Learn about the legends who have shaped Indian football history.", icon: Newspaper, href: "/icons" },
  { title: "Competition Stats", description: "Detailed statistics and overviews of various national and state level competitions.", icon: BarChart, href: "/competitions" },
];

const quickLinks = [
  { name: 'All India Football Federation (AIFF)', url: 'https://www.the-aiff.com/', icon: Globe },
  { name: 'Indian Super League (ISL)', url: 'https://www.indiansuperleague.com/', icon: Globe },
  { name: 'I-League', url: 'https://i-league.org/', icon: Globe },
];

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative text-center py-20 md:py-32 rounded-xl overflow-hidden bg-gradient-to-br from-primary/30 via-background to-background">
        <Image 
          src="https://i.ibb.co/rR71Zn6s/p7.png" 
          alt="Indian football stadium" 
          layout="fill" 
          objectFit="cover" 
          className="opacity-20 z-0"
          data-ai-hint="football stadium"
          priority
        />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary mb-6">
            Welcome to Indian Football Hub
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
            Your ultimate destination for everything related to Indian football. Explore news, competitions, player profiles, and much more.
          </p>
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/men">
              Explore Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* What We Offer Section */}
      <section id="what-we-offer">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((item) => (
            <GlassCard key={item.title} className="flex flex-col hover:shadow-primary/30 transition-shadow duration-300">
              <CardHeader className="flex-row items-center gap-4">
                <item.icon className="h-10 w-10 text-primary" />
                <div>
                  <CardTitle className="font-headline text-xl text-foreground">{item.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-foreground/80">{item.description}</CardDescription>
              </CardContent>
              <CardContent>
                 <Button variant="outline" asChild className="mt-auto border-primary text-primary hover:bg-primary/10">
                    <Link href={item.href}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
              </CardContent>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Indian Football in the News Section */}
      {/* <section id="news-summarizer" className="py-12">
         <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Indian Football in the News
        </h2>
        <NewsSummarizer />
      </section> */}

      {/* Quick Links Section */}
      <section id="quick-links">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Quick Links
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickLinks.map((link) => (
            <GlassCard key={link.name} className="hover:shadow-accent/30 transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <link.icon className="h-10 w-10 text-accent mb-4" />
                <h3 className="font-headline text-lg font-semibold text-foreground mb-2">{link.name}</h3>
                <Button variant="link" asChild className="text-accent hover:text-accent/80">
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    Visit Site <Link2 className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
}
