import { GlassCard } from '@/components/ui/glass-card';
import { Info, Users, Goal } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-gradient-to-b from-primary/10 to-transparent rounded-lg">
        <Info className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">About Indian Football Hub</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Learn more about our mission, vision, and the team behind this platform dedicated to Indian football.
        </p>
      </section>

      <GlassCard className="p-6 md:p-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-headline text-3xl text-primary mb-4">Our Mission</h2>
            <p className="text-foreground/80 mb-6">
              To be the most comprehensive and engaging platform for Indian football enthusiasts, providing timely news, in-depth analysis, and a vibrant community space. We aim to celebrate the sport's rich history while championing its future growth.
            </p>
            <h2 className="font-headline text-3xl text-primary mb-4">Our Vision</h2>
            <p className="text-foreground/80">
              To contribute to the rise of Indian football by fostering passion, knowledge, and support for the game at all levels – from grassroots to international stages. We envision a future where Indian football is a dominant force globally.
            </p>
          </div>
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
            <Image src="https://placehold.co/600x400.png" alt="Team discussing strategy" layout="fill" objectFit="cover" data-ai-hint="team strategy football"/>
          </div>
        </div>
      </GlassCard>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <GlassCard className="p-6">
          <Users className="h-10 w-10 text-accent mb-3" />
          <h3 className="font-headline text-2xl text-accent mb-2">Who We Are</h3>
          <p className="text-foreground/80">
            We are a passionate team of football lovers, writers, developers, and designers committed to bringing you the best of Indian football. (Placeholder for more team details).
          </p>
        </GlassCard>
        <GlassCard className="p-6">
          <Goal className="h-10 w-10 text-accent mb-3" />
          <h3 className="font-headline text-2xl text-accent mb-2">Our Commitment</h3>
          <p className="text-foreground/80">
            We are committed to accuracy, objectivity, and providing a positive platform for discussion and engagement around Indian football. We strive to cover all facets of the game with dedication.
          </p>
        </GlassCard>
      </section>
    </div>
  );
}
