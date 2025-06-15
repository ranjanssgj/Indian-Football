
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

const menClubsData: Club[] = [
  {
    id: 'mumbai-city-fc',
    name: 'Mumbai City FC',
    logoUrl: 'https://placehold.co/200x200.png',
    logoHint: 'Mumbai City FC logo',
    city: 'Mumbai',
    founded: 2014,
    stadium: 'Mumbai Football Arena',
    shortBio: 'A leading club in the Indian Super League, known for its competitive spirit and strong fan base.',
    history: 'Mumbai City FC was founded on 30 August 2014 and is co-owned by City Football Group. The club has rapidly grown to become a significant force in Indian football, winning the ISL League Winners Shield and the ISL Trophy. They have also represented India in the AFC Champions League.',
    currentPlayers: [
      { name: 'Lallianzuala Chhangte', position: 'Winger', jerseyNumber: 7, nationality: 'India' },
      { name: 'Greg Stewart', position: 'Forward', jerseyNumber: 24, nationality: 'Scotland' },
      { name: 'Rahul Bheke', position: 'Defender', jerseyNumber: 4, nationality: 'India' },
    ],
    honours: ['ISL Cup (2020-21, 2023-24)', 'ISL League Winners Shield (2020-21, 2022-23)'],
    currentStats: { leaguePosition: 1, matchesPlayed: 22, wins: 14, draws: 5, losses: 3, points: 47 },
    preferredFormations: ['4-2-3-1', '4-3-3'],
  },
  {
    id: 'mohun-bagan-sg',
    name: 'Mohun Bagan Super Giant',
    logoUrl: 'https://placehold.co/200x200.png',
    logoHint: 'Mohun Bagan SG logo',
    city: 'Kolkata',
    founded: 1889,
    stadium: 'Salt Lake Stadium',
    shortBio: 'One of the oldest and most successful clubs in India, with a rich history and passionate supporters.',
    history: 'Established in 1889, Mohun Bagan is a historic institution in Indian football. They have a storied legacy, winning numerous trophies including the National Football League, I-League, Federation Cup, and the Durand Cup. They merged with ATK to form ATK Mohun Bagan (now Mohun Bagan Super Giant) and compete in the ISL.',
    currentPlayers: [
      { name: 'Dimitri Petratos', position: 'Forward', jerseyNumber: 9, nationality: 'Australia' },
      { name: 'Anirudh Thapa', position: 'Midfielder', jerseyNumber: 7, nationality: 'India' },
      { name: 'Subhasish Bose', position: 'Defender', jerseyNumber: 15, nationality: 'India' },
    ],
    honours: ['ISL Cup (2022-23)', 'Durand Cup (Multiple times)', 'I-League (Multiple times)'],
    currentStats: { leaguePosition: 2, matchesPlayed: 22, wins: 13, draws: 4, losses: 5, points: 43 },
    preferredFormations: ['4-4-2', '3-5-2'],
  },
   {
    id: 'bengaluru-fc',
    name: 'Bengaluru FC',
    logoUrl: 'https://placehold.co/200x200.png',
    logoHint: 'Bengaluru FC logo',
    city: 'Bengaluru',
    founded: 2013,
    stadium: 'Sree Kanteerava Stadium',
    shortBio: 'Known for professional setup and consistent performances in both domestic and continental competitions.',
    history: 'Bengaluru FC was formed in 2013 and quickly established itself as a powerhouse in Indian football. They won the I-League in their debut season and have since won multiple I-League titles, Federation Cups, the Super Cup, and the ISL. They were also runners-up in the AFC Cup.',
    currentPlayers: [
      { name: 'Sunil Chhetri', position: 'Forward', jerseyNumber: 11, nationality: 'India' },
      { name: 'Gurpreet Singh Sandhu', position: 'Goalkeeper', jerseyNumber: 1, nationality: 'India' },
      { name: 'Javi Hernández', position: 'Midfielder', jerseyNumber: 10, nationality: 'Spain' },
    ],
    honours: ['ISL Cup (2018-19)', 'I-League (Multiple times)', 'Super Cup (2018)', 'Durand Cup (2022)'],
    preferredFormations: ['4-3-3', '3-4-3'],
  },
  {
    id: 'fc-goa',
    name: 'FC Goa',
    logoUrl: 'https://placehold.co/200x200.png',
    logoHint: 'FC Goa logo',
    city: 'Margao',
    founded: 2014,
    stadium: 'Fatorda Stadium',
    shortBio: 'Known for their attacking style of play and strong Goan footballing heritage.',
    history: 'FC Goa, established in 2014, quickly became a fan favorite in the ISL. They have consistently been strong contenders, reaching the ISL playoffs multiple times and winning the ISL League Winners Shield and the Super Cup. The club is known for its attacking philosophy.',
    currentPlayers: [
        { name: 'Brandon Fernandes', position: 'Midfielder', jerseyNumber: 10, nationality: 'India' }, 
        { name: 'Noah Sadaoui', position: 'Forward', jerseyNumber: 9, nationality: 'Morocco' },
        { name: 'Odei Onaindia', position: 'Defender', jerseyNumber: 4, nationality: 'Spain'}
    ],
    honours: ['ISL League Winners Shield (2019-20)', 'Super Cup (2019)', 'Durand Cup (2021)'],
    currentStats: { leaguePosition: 3, matchesPlayed: 22, wins: 12, draws: 6, losses: 4, points: 42 },
    preferredFormations: ['4-2-3-1', '4-1-4-1'],
  },
  {
    id: 'kerala-blasters-fc',
    name: 'Kerala Blasters FC',
    logoUrl: 'https://placehold.co/200x200.png',
    logoHint: 'Kerala Blasters FC logo',
    city: 'Kochi',
    founded: 2014,
    stadium: 'Jawaharlal Nehru Stadium, Kochi',
    shortBio: 'Boasting one of the most passionate fan bases in India, the "Manjappada".',
    history: 'Kerala Blasters FC, founded in 2014, is renowned for its incredible fan support. While they are yet to win the ISL trophy, they have been runners-up multiple times, showcasing their competitive spirit. The club plays a significant role in Kerala\'s vibrant football culture.',
    currentPlayers: [
        { name: 'Adrian Luna', position: 'Midfielder', jerseyNumber: 10, nationality: 'Uruguay' }, 
        { name: 'Dimitrios Diamantakos', position: 'Forward', jerseyNumber: 9, nationality: 'Greece' },
        { name: 'Prabsukhan Gill', position: 'Goalkeeper', jerseyNumber: 1, nationality: 'India'}
    ],
    honours: ['ISL Runners-up (2014, 2016, 2021-22)'],
    currentStats: { leaguePosition: 5, matchesPlayed: 22, wins: 10, draws: 5, losses: 7, points: 35 },
    preferredFormations: ['4-4-2', '4-2-3-1'],
  },
  {
    id: 'chennaiyin-fc',
    name: 'Chennaiyin FC',
    logoUrl: 'https://placehold.co/200x200.png',
    logoHint: 'Chennaiyin FC logo',
    city: 'Chennai',
    founded: 2014,
    stadium: 'Jawaharlal Nehru Stadium, Chennai',
    shortBio: 'Two-time ISL champions, known for their resilience and strong team ethic.',
    history: 'Chennaiyin FC, formed in 2014, has a successful history in the ISL, having won the championship twice. The club has a strong connection with its fans and has consistently produced competitive teams.',
    currentPlayers: [
        { name: 'Rafael Crivellaro', position: 'Midfielder', jerseyNumber: 50, nationality: 'Brazil' },
        { name: 'Jordan Murray', position: 'Forward', jerseyNumber: 9, nationality: 'Australia' },
        { name: 'Debjit Majumder', position: 'Goalkeeper', jerseyNumber: 24, nationality: 'India' }
    ],
    honours: ['ISL Cup (2015, 2017-18)'],
    currentStats: { leaguePosition: 8, matchesPlayed: 22, wins: 7, draws: 6, losses: 9, points: 27 },
    preferredFormations: ['4-2-3-1', '4-3-1-2'],
  },
  {
    id: 'east-bengal-fc',
    name: 'East Bengal FC',
    logoUrl: 'https://placehold.co/200x200.png',
    logoHint: 'East Bengal FC logo',
    city: 'Kolkata',
    founded: 1920,
    stadium: 'Salt Lake Stadium',
    shortBio: 'A historic giant of Indian football with a massive and devoted fan following.',
    history: 'East Bengal FC, established in 1920, is one of India\'s most iconic football clubs with a rich legacy. They have won numerous National Football League titles, Federation Cups, and the Durand Cup. They joined the ISL in 2020, continuing their fierce rivalry with Mohun Bagan.',
    currentPlayers: [
      { name: 'Cleiton Silva', position: 'Forward', jerseyNumber: 10, nationality: 'Brazil' },
      { name: 'Naorem Mahesh Singh', position: 'Winger', jerseyNumber: 11, nationality: 'India' },
      { name: 'Saul Crespo', position: 'Midfielder', jerseyNumber: 8, nationality: 'Spain'}
    ],
    honours: ['National Football League (Multiple times)', 'Federation Cup (Multiple times)', 'Durand Cup (Multiple times)', 'Super Cup (2024)'],
    preferredFormations: ['4-4-2', '4-2-3-1'],
  },
  {
    id: 'northeast-united-fc',
    name: 'NorthEast United FC',
    logoUrl: 'https://placehold.co/200x200.png',
    logoHint: 'NorthEast United FC logo',
    city: 'Guwahati',
    founded: 2014,
    stadium: 'Indira Gandhi Athletic Stadium',
    shortBio: 'Representing the eight states of North-East India, known for passionate support.',
    history: 'NorthEast United FC was founded in 2014 to represent all eight states of North-East India in the ISL. The club has a passionate fanbase and focuses on developing talent from the region. They reached the ISL playoffs in the 2018-19 and 2020-21 seasons.',
    currentPlayers: [
      { name: 'Parthib Gogoi', position: 'Forward', jerseyNumber: 17, nationality: 'India' },
      { name: 'Mirshad Michu', position: 'Goalkeeper', jerseyNumber: 32, nationality: 'India' },
      { name: 'Romain Philippoteaux', position: 'Midfielder', jerseyNumber: 7, nationality: 'France'}
    ],
    honours: ['ISL Playoff appearances (2018-19, 2020-21)'],
    preferredFormations: ['4-3-3', '4-2-3-1'],
  },
  {
    id: 'hyderabad-fc',
    name: 'Hyderabad FC',
    logoUrl: 'https://placehold.co/200x200.png',
    logoHint: 'Hyderabad FC logo',
    city: 'Hyderabad',
    founded: 2019,
    stadium: 'G. M. C. Balayogi Athletic Stadium',
    shortBio: 'ISL champions in 2021-22, known for their strong youth development.',
    history: 'Hyderabad FC was founded in 2019. The club won the ISL trophy in the 2021-22 season and has quickly established itself as a competitive team.',
    currentPlayers: [
        { name: 'Joao Victor', position: 'Midfielder', jerseyNumber: 8, nationality: 'Brazil' }, 
        { name: 'Bartholomew Ogbeche', position: 'Forward', jerseyNumber: 20, nationality: 'Nigeria' },
        { name: 'Chinglensana Singh', position: 'Defender', nationality: 'India' }
    ],
    honours: ['ISL Cup (2021-22)'],
    preferredFormations: ['4-2-3-1', '4-4-2'],
  },
  {
    id: 'jamshedpur-fc',
    name: 'Jamshedpur FC',
    logoUrl: 'https://placehold.co/200x200.png',
    logoHint: 'Jamshedpur FC logo',
    city: 'Jamshedpur',
    founded: 2017,
    stadium: 'JRD Tata Sports Complex',
    shortBio: 'Known for their passionate fanbase and strong community engagement. Winners of ISL Shield.',
    history: 'Jamshedpur FC joined the ISL in 2017. The club won the ISL League Winners Shield in 2021-22, showcasing consistent performances and a strong defensive setup.',
    currentPlayers: [
        { name: 'Peter Hartley', position: 'Defender', nationality: 'England' }, 
        { name: 'Ritwik Das', position: 'Midfielder', jerseyNumber: 18, nationality: 'India' },
        { name: 'Daniel Chima Chukwu', position: 'Forward', jerseyNumber: 99, nationality: 'Nigeria' }
    ],
    honours: ["ISL League Winners Shield (2021-22)"],
    preferredFormations: ['4-2-3-1', '4-1-4-1'],
  },
  {
    id: 'mohammedan-sc',
    name: 'Mohammedan Sporting Club',
    logoUrl: 'https://placehold.co/200x200.png',
    logoHint: 'Mohammedan SC logo',
    city: 'Kolkata',
    founded: 1891,
    stadium: 'Salt Lake Stadium / Mohammedan Sporting Ground',
    shortBio: 'One of the oldest and most historically significant clubs in Indian football, recently promoted to ISL.',
    history: 'Founded in 1891, Mohammedan Sporting Club is a historic institution with a massive fanbase. They have won numerous trophies, including the Calcutta Football League, Durand Cup, and Federation Cup. They recently won the I-League 2023-24 and earned promotion to the ISL.',
    currentPlayers: [
        { name: 'Marcus Joseph', position: 'Forward', nationality: 'Trinidad and Tobago' }, 
        { name: 'SK Faiaz', position: 'Midfielder', nationality: 'India' },
        { name: 'Zothanmawia', position: 'Goalkeeper', nationality: 'India'}
    ],
    honours: ['I-League (2023-24)', 'Calcutta Football League (Multiple times)', 'Durand Cup (Multiple times)', 'Federation Cup (Multiple times)'],
    preferredFormations: ['4-3-3', '4-4-2'],
  },
  {
    id: 'odisha-fc',
    name: 'Odisha FC',
    logoUrl: 'https://placehold.co/200x200.png',
    logoHint: 'Odisha FC logo',
    city: 'Bhubaneswar',
    founded: 2019,
    stadium: 'Kalinga Stadium',
    shortBio: 'Representing the state of Odisha, known for their focus on youth and community. Super Cup 2023 winners.',
    history: 'Odisha FC was established in 2019 after the Delhi Dynamos ISL franchise relocated to Bhubaneswar. The club aims to promote football in Odisha and has invested in youth development. They won the Super Cup in 2023.',
    currentPlayers: [
        { name: 'Diego Maurício', position: 'Forward', jerseyNumber: 9, nationality: 'Brazil' }, 
        { name: 'Amrinder Singh', position: 'Goalkeeper', jerseyNumber: 1, nationality: 'India' },
        { name: 'Carlos Delgado', position: 'Defender', jerseyNumber: 5, nationality: 'Spain' }
    ],
    honours: ['Super Cup (2023)'],
    preferredFormations: ['4-3-3', '4-2-3-1'],
  },
  {
    id: 'punjab-fc',
    name: 'Punjab FC',
    logoUrl: 'https://placehold.co/200x200.png',
    logoHint: 'Punjab FC logo',
    city: 'Mohali (plays in Delhi for ISL)',
    founded: 2005, 
    stadium: 'Jawaharlal Nehru Stadium, Delhi (for ISL)',
    shortBio: 'Promoted to ISL after winning the I-League, with a strong background in youth development.',
    history: 'Originally Minerva Academy, Punjab FC has a strong history in youth football and won the I-League in 2017-18. They were rebranded as Punjab FC and won the I-League again in 2022-23 to gain promotion to the ISL for the 2023-24 season.',
    currentPlayers: [
        { name: 'Luka Majcen', position: 'Forward', jerseyNumber: 9, nationality: 'Slovenia' }, 
        { name: 'Madih Talal', position: 'Midfielder', jerseyNumber: 10, nationality: 'France' },
        { name: 'Kiran Chemjong', position: 'Goalkeeper', jerseyNumber: 16, nationality: 'Nepal' }
    ],
    honours: ['I-League (2017-18 as Minerva Punjab, 2022-23)'],
    preferredFormations: ['4-3-3', '4-4-2'],
  }
];

export default function MensClubDetailPage({ params }: { params: { clubId: string } }) {
  const club = menClubsData.find(c => c.id === params.clubId);

  if (!club) {
    return (
      <div className="text-center py-20">
        <Shield className="h-20 w-20 text-destructive mx-auto mb-6" />
        <h1 className="font-headline text-3xl font-bold text-destructive mb-4">Club Not Found</h1>
        <p className="text-lg text-muted-foreground mb-8">The men's club you are looking for does not exist or is not yet listed.</p>
        <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
          <Link href="/competitions/men/club/clubs">
            Back to Men's Clubs
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <GlassCard className="p-6 md:p-8 !bg-gradient-to-br from-card/50 via-card/20 to-transparent">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden border-4 border-primary shadow-lg flex-shrink-0">
            <Image src={club.logoUrl} alt={`${club.name} logo`} layout="fill" objectFit="contain" data-ai-hint={club.logoHint} />
          </div>
          <div className="text-center md:text-left">
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-2">{club.name}</h1>
            <div className="flex items-center justify-center md:justify-start gap-2 text-md text-foreground/80 mb-1">
              <Building className="h-5 w-5 text-primary/80" /> {club.city}
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-md text-foreground/80 mb-1">
              <Calendar className="h-5 w-5 text-primary/80" /> Founded: {club.founded}
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-md text-foreground/80">
              <Shield className="h-5 w-5 text-primary/80" /> Stadium: {club.stadium}
            </div>
          </div>
        </div>
      </GlassCard>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-8">
          <GlassCard className="p-6">
            <CardHeader className="pb-4">
              <CardTitle className="font-headline text-2xl flex items-center gap-3 text-primary"><Info className="h-6 w-6"/>Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">{club.shortBio}</p>
            </CardContent>
          </GlassCard>

          <GlassCard className="p-6">
            <CardHeader className="pb-4">
              <CardTitle className="font-headline text-2xl flex items-center gap-3 text-primary"><History className="h-6 w-6"/>Club History</CardTitle>
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
                <CardTitle className="font-headline text-xl flex items-center gap-2 text-primary"><BarChart3 className="h-5 w-5"/>Current Stats (Example)</CardTitle>
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
              <CardTitle className="font-headline text-xl flex items-center gap-2 text-primary"><Users className="h-5 w-5"/>Key Players (Example)</CardTitle>
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
              <CardTitle className="font-headline text-xl flex items-center gap-2 text-primary"><Trophy className="h-5 w-5"/>Honours</CardTitle>
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
              <CardTitle className="font-headline text-xl flex items-center gap-2 text-primary"><ListChecks className="h-5 w-5"/>Preferred Formations</CardTitle>
            </CardHeader>
            <CardContent>
                {club.preferredFormations.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                        {club.preferredFormations.map(formation => (
                            <span key={formation} className="text-xs bg-primary/20 text-primary font-medium px-2 py-1 rounded-full">{formation}</span>
                        ))}
                    </div>
                ) : <p className="text-sm text-muted-foreground">No formation data available.</p>}
            </CardContent>
          </GlassCard>
        </div>
      </div>
       <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <Link href="/competitions/men/club/clubs">
                Back to All Men's Clubs
            </Link>
          </Button>
      </div>
    </div>
  );
}
