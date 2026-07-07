export interface EvidenceItem {
  id: string
  title: string
  date: string
  description: string
  category: string
  impact: string
  tweetLinks: { handle: string; url: string }[]
}

export const evidenceItems: EvidenceItem[] = [
  {
    id: 'messi-algeria',
    title: 'Messi Escapes Red Card — Studs-Up Challenge vs Algeria',
    date: '2026-06-21',
    category: 'Group Stage',
    description:
      'During Argentina\'s group stage match against Algeria, Lionel Messi planted his studs into Aissa Mandi\'s calf with a dangerous challenge. VAR did not intervene, and Messi escaped without even a yellow card. The Algerian Football Federation filed an official complaint, and ESPN analysts publicly questioned the "preferential treatment" afforded to star players.',
    impact:
      'Set the tone for the tournament — star players getting away with what would be automatic red cards for anyone else.',
    tweetLinks: [
      { handle: 'RodriVidaal', url: 'https://x.com/RodriVidaal/status/2074558142629724508?s=20' },
      { handle: 'CodyKakpo', url: 'https://x.com/CodyKakpo/status/2074572108295000423?s=20' },
      { handle: 'mbafraaude', url: 'https://x.com/mbafraaude/status/2074553553868189723?s=20' },
    ],
  },
  {
    id: 'cape-verde',
    title: 'Cape Verde Robbed — Disallowed Goal Controversy',
    date: '2026-07-03',
    category: 'Round of 32',
    description:
      'Argentina needed extra time to beat tournament debutants Cape Verde. A viral clip showed a potential offside in the build-up to Lisandro Martínez\'s goal that VAR somehow missed. Fans erupted on X, with many calling it a straight robbery. Adding fuel: a Leandro Paredes challenge at the edge of the box went unpunished moments before Cape Verde\'s equalizer was scored from almost the identical spot.',
    impact:
      'First major rigged allegation of the knockout stage. "Why does it always seem to happen with Argentina?" became a trending sentiment.',
    tweetLinks: [
      { handle: 'NoodleHairCR7', url: 'https://x.com/NoodleHairCR7/status/2074535612288307656?s=20' },
      { handle: 'NoodleHairCR7', url: 'https://x.com/NoodleHairCR7/status/2074546326604316908?s=20' },
      { handle: 'LudwigAhgren', url: 'https://x.com/LudwigAhgren/status/2074541948116070573?s=20' },
    ],
  },
  {
    id: 'infantino-suffered',
    title: 'FIFA President: "I Suffered With Argentina" — Caught on Camera',
    date: '2026-07-04',
    category: 'Corruption',
    description:
      'In a viral video, FIFA President Gianni Infantino was caught on camera telling an Argentine journalist: "Tonight, I suffered with Argentina… but I\'m neutral." The latter part came out as an afterthought. Fans immediately pointed out that the FIFA President, who is supposed to be neutral, openly admitted emotional investment in Argentina\'s result. Sepp Blatter, Infantino\'s disgraced predecessor, even weighed in: "Red cards are not overturned by political phone calls."',
    impact:
      'Destroyed any illusion of FIFA neutrality. Infantino\'s own words became exhibit A in the rigged narrative.',
    tweetLinks: [
      { handle: 'jacksonhinkle', url: 'https://x.com/jacksonhinkle/status/2074564486141264303?s=20' },
      { handle: 'TheSaviour', url: 'https://x.com/TheSaviour/status/2074583076588368071?s=20' },
      { handle: 'PolymarketSport', url: 'https://x.com/PolymarketSport/status/2074550571466404246?s=20' },
    ],
  },
  {
    id: 'egypt-zico',
    title: 'Egypt\'s Zico: "It Was a Rigged Game" — Goal Disallowed After 70-Yard VAR Review',
    date: '2026-07-07',
    category: 'Round of 16',
    description:
      'Egypt were 2-0 up against Argentina when Mostafa Zico scored a brilliant 70-yard team goal, chipping Emiliano Martínez. Referee François Letexier was called to the monitor by VAR and disallowed it — for a soft foul by Marwan Ateya on Lisandro Martínez that happened 20+ seconds and several passes earlier in the buildup. Zico\'s post-match interview went viral: "It was a rigged game. He persecuted us from the start." Egypt also had a penalty shout denied moments before Argentina\'s stoppage-time winner.',
    impact:
      'An Egyptian player directly saying the game was rigged. The phrase "The Fifa Files" was born in the aftermath of this match.',
    tweetLinks: [
      { handle: 'SalahUpdates', url: 'https://x.com/SalahUpdates/status/2074587123940815236?s=20' },
      { handle: 'bassem_youssef9', url: 'https://x.com/bassem_youssef9/status/2074556399703429526?s=20' },
      { handle: 'FabrizioRomano', url: 'https://x.com/FabrizioRomano/status/2074581485890277399?s=20' },
      { handle: 'BBCSport', url: 'https://x.com/BBCSport/status/2074596583052845233?s=20' },
      { handle: '_Zaraquin', url: 'https://x.com/_Zaraquin/status/2074557286526382550?s=20' },
    ],
  },
  {
    id: 'balogun-trump',
    title: 'Trump Calls Infantino — Balogun Red Card Overturned',
    date: '2026-07-06',
    category: 'Political Interference',
    description:
      'US striker Folarin Balogun received a red card against Bosnia-Herzegovina for stepping on an opponent\'s ankle — a routine red card all season worldwide. President Donald Trump called FIFA President Infantino to "ask for a review." FIFA\'s disciplinary committee then suspended the ban — the first time since 1962 a World Cup red card was overturned mid-tournament. UEFA called it "unprecedented, incomprehensible and unjustifiable." Belgium\'s legal challenge was dismissed hours before kickoff. The US still lost 4-1.',
    impact:
      'Proved that political power can directly influence FIFA decisions. Trump bragged about it. Infantino confirmed the call.',
    tweetLinks: [
      { handle: 'diegohead_', url: 'https://x.com/diegohead_/status/2074556955981398110?s=20' },
    ],
  },
]
