
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { GlassCard } from '@/components/ui/glass-card';
import { Users, Building, Calendar, Shield, BarChart3, History, Info, Trophy, ListChecks } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface Player {
  name: string;
  position: string;
  jerseyNumber?: number;
  nationality?: string;
}

interface Club {
  id: string;
  name: string;
  logoUrl: string;
  logoHint: string;
  city: string;
  founded: number;
  stadium: string;
  shortBio: string;
  history: string;
  currentPlayers: Player[];
  honours: string[]; 
  currentStats?: { 
    leaguePosition?: number;
    matchesPlayed?: number;
    wins?: number;
    draws?: number;
    losses?: number;
    points?: number;
  };
  preferredFormations: string[];
}

const womenClubsData: Club[] = [
  {
    id: 'gokulam-kerala-fcw',
    name: 'Gokulam Kerala FC (Women)',
    logoUrl: 'https://placehold.co/200x200.png',
    logoHint: 'Gokulam Kerala FC Women logo',
    city: 'Kozhikode',
    founded: 2017,
    stadium: 'EMS Stadium',
    shortBio: 'A dominant force in the Indian Women\'s League, consistently performing at the top level.',
    history: 'Gokulam Kerala FC Women\'s team has rapidly risen to prominence in Indian women\'s football. They have won multiple Indian Women\'s League titles and have represented India in the AFC Women\'s Club Championship, showcasing their strength on the continental stage.',
    currentPlayers: [
      { name: 'Manisha Kalyan', position: 'Forward', jerseyNumber: 10, nationality: 'India' },
      { name: 'Aditi Chauhan', position: 'Goalkeeper', jerseyNumber: 1, nationality: 'India' },
      { name: 'Grace Dangmei', position: 'Midfielder', jerseyNumber: 11, nationality: 'India' },
    ],
    honours: ['Indian Women\'s League (2019–20, 2021–22, 2022–23)'],
    currentStats: { leaguePosition: 1, matchesPlayed: 10, wins: 9, draws: 1, losses: 0, points: 28 },
    preferredFormations: ['4-3-3', '4-1-4-1'],
  },
  {
    id: 'sethu-fc',
    name: 'Sethu FC',
    logoUrl: 'https://placehold.co/200x200.png',
    logoHint: 'Sethu FC logo',
    city: 'Madurai',
    founded: 2016,
    stadium: 'Jawaharlal Nehru Stadium, Chennai (uses various grounds)',
    shortBio: 'Former champions of the Indian Women\'s League, known for developing young talent from Tamil Nadu.',
    history: 'Sethu FC, based in Madurai, made a significant impact by winning the Indian Women\'s League in the 2018-19 season. The club is known for its focus on nurturing local talent and has been a consistent performer in the league.',
    currentPlayers: [
      { name: 'Sandhiya Ranganathan', position: 'Forward', jerseyNumber: 7, nationality: 'India' },
      { name: 'Karthika Angamuthu', position: 'Midfielder', jerseyNumber: 8, nationality: 'India' },
    ],
    honours: ['Indian Women\'s League (2018-19)'],
    preferredFormations: ['4-4-2', '4-2-3-1'],
  },
   {
    id: 'odisha-fc-women',
    name: 'Odisha FC (Women)',
    logoUrl: 'https://placehold.co/200x200.png',
    logoHint: 'Odisha FC Women logo',
    city: 'Bhubaneswar',
    founded: 2022,
    stadium: 'Kalinga Stadium',
    shortBio: 'A relatively new but ambitious club in the Indian Women\'s League, backed by the ISL franchise.',
    history: 'Odisha FC Women\'s team was launched in 2022, extending the ISL club\'s presence into women\'s football. They aim to develop a strong team and contribute to the growth of women\'s football in Odisha and India. They were runners-up in the 2023-24 IWL season.',
    currentPlayers: [
      { name: 'Pyari Xaxa', position: 'Forward', jerseyNumber: 17, nationality: 'India' },
      { name: 'Bala Devi', position: 'Forward', jerseyNumber: 10, nationality: 'India' },
    ],
    honours: ['Indian Women\'s League Runners-up (2023-24)'],
    preferredFormations: ['4-3-3'],
  },
  {
    id: 'kickstart-fc',
    name: 'Kickstart FC Karnataka',
    logoUrl: 'https://placehold.co/200x200.png',
    logoHint: 'Kickstart FC logo',
    city: 'Bengaluru',
    founded: 2016,
    stadium: 'Bangalore Football Stadium',
    shortBio: 'A prominent team in the Indian Women\'s League, known for promoting women\'s football in Karnataka.',
    history: 'Kickstart FC, based in Bengaluru, has been a consistent participant in the Indian Women\'s League. They focus on developing local talent and have established themselves as one of the stronger teams in the IWL, regularly competing for top spots and finishing as runners-up in the 2022-23 season.',
    currentPlayers: [
        { name: 'Dalima Chhibber', position: 'Defender', jerseyNumber: 17, nationality: 'India' }, 
        { name: 'Kaviya Pakkirisamy', position: 'Forward', jerseyNumber: 9, nationality: 'India' },
        { name: 'Ashalata Devi', position: 'Defender', jerseyNumber: 4, nationality: 'India'}
    ],
    honours: ['Indian Women\'s League Runners-up (2022-23)'],
    currentStats: { leaguePosition: 2, matchesPlayed: 10, wins: 8, draws: 0, losses: 2, points: 24 },
    preferredFormations: ['4-3-3', '4-4-2'],
  },
  {
    id: 'eastern-sporting-union',
    name: 'Eastern Sporting Union',
    logoUrl: 'https://placehold.co/200x200.png',
    logoHint: 'Eastern Sporting Union logo',
    city: 'Imphal',
    founded: 1956, // Club founded earlier, women's team later
    stadium: 'Khuman Lampak Main Stadium',
    shortBio: 'Inaugural champions of the Indian Women\'s League, hailing from Manipur, a powerhouse of Indian women\'s football.',
    history: 'Eastern Sporting Union, from Manipur, holds the distinction of being the first-ever champions of the Indian Women\'s League in 2016-17. Manipur has a rich tradition of producing talented women footballers, and ESU has played a key role in this, contributing many players to the national team.',
    currentPlayers: [
        { name: 'Kamala Devi', position: 'Forward', jerseyNumber: 7, nationality: 'India' },
        { name: 'Premi Chiru', position: 'Midfielder', nationality: 'India' },
        { name: 'Oinam Bembem Devi (Former Player/Coach)', position: 'Midfielder', nationality: 'India'}
    ],
    honours: ['Indian Women\'s League (2016-17)'],
    preferredFormations: ['4-3-3', '3-5-2'],
  },
  {
    id: 'sribhumi-fc',
    name: 'Sribhumi Football Club',
    logoUrl: 'https://placehold.co/200x200.png',
    logoHint: 'Sribhumi FC logo',
    city: 'Kolkata', 
    founded: 2018, 
    stadium: 'Various local grounds', 
    shortBio: 'An upcoming club participating in the Indian Women\'s League state qualifiers and other regional tournaments.',
    history: 'Sribhumi FC is actively involved in promoting women\'s football in West Bengal, participating in state leagues and aiming for IWL qualification. (More details to be added as available)',
    currentPlayers: [{ name: 'Sangita Basfore', position: 'Midfielder', nationality: 'India' }, { name: 'Ritu Rani', position: 'Forward', nationality: 'India' }], // Example players
    honours: ['Participation in West Bengal state leagues', 'Kanyashree Cup Performers'], // Placeholder
    preferredFormations: ['4-4-2', '4-3-3'],
  },
  {
    id: 'hops-fc',
    name: 'HOPS Football Club',
    logoUrl: 'https://placehold.co/200x200.png',
    logoHint: 'HOPS FC logo',
    city: 'Delhi', 
    founded: 2020,
    stadium: 'Ambedkar Stadium (uses various grounds)',
    shortBio: 'A team from Delhi competing in the Indian Women\'s League, focusing on developing talent from the region.',
    history: 'HOPS FC (House of Power Soccer) has emerged as a competitive team from Delhi, participating in the IWL and contributing to the growth of women\'s football in the capital region. They have shown strong performances in recent IWL seasons.',
    currentPlayers: [
        { name: 'Fredrica Torkudzor', position: 'Forward', nationality: 'Ghana' }, 
        { name: 'Shreya Hooda', position: 'Goalkeeper', nationality: 'India' },
        { name: 'Ritu Bagria', position: 'Defender', nationality: 'India' }
    ],
    honours: ['IWL Participation', 'Delhi Women\'s League Champions'],
    preferredFormations: ['4-3-3', '4-2-3-1'],
  }
];

export default function WomensClubDetailPage({ params }: { params: { clubId: string } }) {
  const club = womenClubsData.find(c => c.id === params.clubId);

  if (!club) {
    return (
      <div className="text-center py-20">
        <Shield className="h-20 w-20 text-destructive mx-auto mb-6" />
        <h1 className="font-headline text-3xl font-bold text-destructive mb-4">Club Not Found</h1>
        <p className="text-lg text-muted-foreground mb-8">The women's club you are looking for does not exist or is not yet listed.</p>
        <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent/10">
          <Link href="/competitions/women/club/clubs">
            Back to Women's Clubs
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <GlassCard className="p-6 md:p-8 !bg-gradient-to-br from-card/50 via-card/20 to-transparent">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden border-4 border-accent shadow-lg flex-shrink-0">
            <Image src={club.logoUrl} alt={`${club.name} logo`} layout="fill" objectFit="contain" data-ai-hint={club.logoHint} />
          </div>
          <div className="text-center md:text-left">
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-accent mb-2">{club.name}</h1>
            <div className="flex items-center justify-center md:justify-start gap-2 text-md text-foreground/80 mb-1">
              <Building className="h-5 w-5 text-accent/80" /> {club.city}
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-md text-foreground/80 mb-1">
              <Calendar className="h-5 w-5 text-accent/80" /> Founded: {club.founded}
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-md text-foreground/80">
              <Shield className="h-5 w-5 text-accent/80" /> Stadium: {club.stadium}
            </div>
          </div>
        </div>
      </GlassCard>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-8">
          <GlassCard className="p-6">
            <CardHeader className="pb-4">
              <CardTitle className="font-headline text-2xl flex items-center gap-3 text-accent"><Info className="h-6 w-6"/>Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">{club.shortBio}</p>
            </CardContent>
          </GlassCard>

          <GlassCard className="p-6">
            <CardHeader className="pb-4">
              <CardTitle className="font-headline text-2xl flex items-center gap-3 text-accent"><History className="h-6 w-6"/>Club History</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed whitespace-pre-line">{club.history}</p>
            </CardContent>
          </GlassCard>
        </div>

        <div className="space-y-8">
           {club.currentStats && (
            <GlassCard className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="font-headline text-xl flex items-center gap-2 text-accent"><BarChart3 className="h-5 w-5"/>Current Stats (Example)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-foreground/80">
                <div className="flex justify-between"><span>League Position:</span> <span className="font-semibold">{club.currentStats.leaguePosition || 'N/A'}</span></div>
                 <Separator className="my-1 bg-border/50"/>
                <div className="flex justify-between"><span>Matches Played:</span> <span className="font-semibold">{club.currentStats.matchesPlayed || 'N/A'}</span></div>
                <div className="flex justify-between"><span>Wins:</span> <span className="font-semibold">{club.currentStats.wins || 'N/A'}</span></div>
                <div className="flex justify-between"><span>Draws:</span> <span className="font-semibold">{club.currentStats.draws || 'N/A'}</span></div>
                <div className="flex justify-between"><span>Losses:</span> <span className="font-semibold">{club.currentStats.losses || 'N/A'}</span></div>
                 <Separator className="my-1 bg-border/50"/>
                <div className="flex justify-between"><span>Points:</span> <span className="font-semibold">{club.currentStats.points || 'N/A'}</span></div>
              </CardContent>
            </GlassCard>
          )}

          <GlassCard className="p-6">
            <CardHeader className="pb-4">
              <CardTitle className="font-headline text-xl flex items-center gap-2 text-accent"><Users className="h-5 w-5"/>Key Players (Example)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {club.currentPlayers.length > 0 ? club.currentPlayers.map(player => (
                <div key={player.name} className="text-sm p-2 bg-card/50 rounded-md">
                  <p className="font-semibold text-foreground">{player.name} <span className="text-xs text-muted-foreground">({player.nationality})</span></p>
                  <p className="text-xs text-foreground/80">{player.position} {player.jerseyNumber && `- #${player.jerseyNumber}`}</p>
                </div>
              )) : <p className="text-sm text-muted-foreground">No player data available.</p>}
            </CardContent>
          </GlassCard>

           <GlassCard className="p-6">
            <CardHeader className="pb-4">
              <CardTitle className="font-headline text-xl flex items-center gap-2 text-accent"><Trophy className="h-5 w-5"/>Honours</CardTitle>
            </CardHeader>
            <CardContent>
                {club.honours.length > 0 ? (
                    <ul className="list-disc list-inside text-sm text-foreground/80 space-y-1">
                        {club.honours.map(honour => <li key={honour}>{honour}</li>)}
                    </ul>
                ) : <p className="text-sm text-muted-foreground">No honours listed.</p>}
            </CardContent>
          </GlassCard>

          <GlassCard className="p-6">
            <CardHeader className="pb-4">
              <CardTitle className="font-headline text-xl flex items-center gap-2 text-accent"><ListChecks className="h-5 w-5"/>Preferred Formations</CardTitle>
            </CardHeader>
            <CardContent>
                {club.preferredFormations.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                        {club.preferredFormations.map(formation => (
                            <span key={formation} className="text-xs bg-accent/20 text-accent font-medium px-2 py-1 rounded-full">{formation}</span>
                        ))}
                    </div>
                ) : <p className="text-sm text-muted-foreground">No formation data available.</p>}
            </CardContent>
          </GlassCard>
        </div>
      </div>
      <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent/10">
            <Link href="/competitions/women/club/clubs">
                Back to All Women's Clubs
            </Link>
          </Button>
      </div>
    </div>
  );
}
