import { keywords, skavenKeywords, skavenUnits } from "../constants";

export const skaven = [
  {
    id: "1",
    name: skavenUnits.greySeer,
    cost: 120,
    quantity: 1,
    subordinates: [skavenUnits.clanrats],
    keywords: [keywords.hero, keywords.wizard[1], keywords.infantry],
    factionKeywords: [
      skavenKeywords.chaos,
      skavenKeywords.skaven,
      skavenKeywords.masterclan,
    ],
  },
  {
    id: "2",
    name: skavenUnits.clanrats,
    cost: 150,
    quantity: 20,
    keywords: [keywords.infantry],
    factionKeywords: [
      skavenKeywords.chaos,
      skavenKeywords.skaven,
      skavenKeywords.verminus,
    ],
  },
  {
    id: "3",
    name: skavenUnits.stormvermin,
    cost: 140,
    quantity: 10,
    keywords: [keywords.infantry],
    factionKeywords: [
      skavenKeywords.chaos,
      skavenKeywords.skaven,
      skavenKeywords.verminus,
    ],
  },
  {
    id: "4",
    name: skavenUnits.warpfireThrowers,
    cost: 70,
    quantity: 1,
    keywords: [keywords.warMachine],
    factionKeywords: [
      skavenKeywords.chaos,
      skavenKeywords.skaven,
      skavenKeywords.skryre,
    ],
  },
  {
    id: "5",
    name: skavenUnits.warplockJezzails,
    cost: 70,
    quantity: 1,
    keywords: [keywords.warMachine],
    factionKeywords: [
      skavenKeywords.chaos,
      skavenKeywords.skaven,
      skavenKeywords.skryre,
    ],
  },
  {
    id: "6",
    name: skavenUnits.doomwheel,
    cost: 160,
    quantity: 1,
    keywords: [keywords.monster],
    factionKeywords: [
      skavenKeywords.chaos,
      skavenKeywords.skaven,
      skavenKeywords.masterclan,
    ],
  },
  {
    id: "7",
    name: skavenUnits.hellPitAbomination,
    cost: 220,
    quantity: 1,
    keywords: [keywords.monster],
    factionKeywords: [
      skavenKeywords.chaos,
      skavenKeywords.skaven,
      skavenKeywords.masterclan,
    ],
  },
  {
    id: "8",
    name: skavenUnits.deathmaster,
    cost: 100,
    quantity: 1,
    keywords: [keywords.hero],
    factionKeywords: [
      skavenKeywords.chaos,
      skavenKeywords.skaven,
      skavenKeywords.masterclan,
    ],
  },
  {
    id: "9",
    name: skavenUnits.nightRunners,
    cost: 100,
    quantity: 10,
    keywords: [keywords.infantry],
    factionKeywords: [
      skavenKeywords.chaos,
      skavenKeywords.skaven,
      skavenKeywords.masterclan,
    ],
  },
  {
    id: "10",
    name: skavenUnits.acolyteglobadiers,
    cost: 80,
    quantity: 5,
    keywords: [keywords.infantry],
    factionKeywords: [
      skavenKeywords.chaos,
      skavenKeywords.skaven,
      skavenKeywords.masterclan,
    ],
  },
  {
    id: "11",
    name: skavenUnits.warpGrinder,
    cost: 80,
    quantity: 1,
    keywords: [keywords.warMachine],
    factionKeywords: [
      skavenKeywords.chaos,
      skavenKeywords.skaven,
      skavenKeywords.masterclan,
    ],
  },
  {
    id: "12",
    name: skavenUnits.plagueMonks,
    cost: 70,
    quantity: 10,
    keywords: [keywords.infantry],
    factionKeywords: [
      skavenKeywords.chaos,
      skavenKeywords.skaven,
      skavenKeywords.masterclan,
    ],
  },
  {
    id: "13",
    name: skavenUnits.plaguePriest,
    cost: 80,
    quantity: 1,
    keywords: [keywords.hero, keywords.priest[1]],
    factionKeywords: [
      skavenKeywords.chaos,
      skavenKeywords.skaven,
      skavenKeywords.masterclan,
    ],
  },
  {
    id: "14",
    name: skavenUnits.plagueclaw,
    cost: 100,
    quantity: 1,
    keywords: [keywords.warMachine],
    factionKeywords: [
      skavenKeywords.chaos,
      skavenKeywords.skaven,
      skavenKeywords.masterclan,
    ],
  },
  {
    id: "15",
    name: skavenUnits.krittokFoulblade,
    cost: 80,
    quantity: 1,
    keywords: [keywords.hero],
    factionKeywords: [
      skavenKeywords.chaos,
      skavenKeywords.skaven,
      skavenKeywords.masterclan,
    ],
  },
  {
    id: "16",
    name: skavenUnits.clawlord,
    cost: 100,
    quantity: 1,
    keywords: [keywords.hero],
    factionKeywords: [
      skavenKeywords.chaos,
      skavenKeywords.skaven,
      skavenKeywords.masterclan,
    ],
  },
  {
    id: "17",
    name: skavenUnits.clawlordOnGnawBeast,
    cost: 100,
    quantity: 1,
    keywords: [keywords.hero],
    factionKeywords: [
      skavenKeywords.chaos,
      skavenKeywords.skaven,
      skavenKeywords.masterclan,
    ],
  },
  {
    id: "18",
    name: skavenUnits.masterMoulder,
    cost: 100,
    quantity: 1,
    keywords: [keywords.hero],
    factionKeywords: [
      skavenKeywords.chaos,
      skavenKeywords.skaven,
      skavenKeywords.masterclan,
    ],
  },
  {
    id: "19",
    name: skavenUnits.broodTerrror,
    cost: 100,
    quantity: 1,
    keywords: [keywords.monster],
    factionKeywords: [
      skavenKeywords.chaos,
      skavenKeywords.skaven,
      skavenKeywords.masterclan,
    ],
  },
  {
    id: "20",
    name: skavenUnits.ratOgre,
    cost: 100,
    quantity: 1,
    keywords: [keywords.monster],
    factionKeywords: [
      skavenKeywords.chaos,
      skavenKeywords.skaven,
      skavenKeywords.masterclan,
    ],
  },
  {
    id: "21",
    name: skavenUnits.stormFiends,
    cost: 140,
    quantity: 3,
    keywords: [keywords.monster],
    factionKeywords: [
      skavenKeywords.chaos,
      skavenKeywords.skaven,
      skavenKeywords.masterclan,
    ],
  },
  {
    id: "22",
    name: skavenUnits.warlockEngineer,
    cost: 100,
    quantity: 1,
    keywords: [keywords.hero, keywords.wizard[1]],
    factionKeywords: [
      skavenKeywords.chaos,
      skavenKeywords.skaven,
      skavenKeywords.masterclan,
    ],
  },
];

export const battleFormations = [
  "Warpcog Convocation",
  "Claw Horde",
  "Fleshmeld Managerie",
  "Virilunt Procession",
];

export const artifactsOfPower = ["Foulhide", "Warpstone Charm", "Skavenbrew"];

export const heroicTraits = [
  "Scurry Away",
  "Short Tempered",
  "Skill Manipulator",
];

export const spellLores = ["Lore of Ruin"];

export const prayerLores = ["Noxious Prayers"];

export const skavenManifestationLore = ["Manifestations of Doom"];
