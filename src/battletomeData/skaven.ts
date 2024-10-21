import { keywords, skavenKeywords, skavenUnits } from "../constants";

export const skaven = [
  {
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

export const battleFormations = {
  warpcogConvocation: "Warpcog Convocation",
  clawHorde: "Claw Horde",
  fleshmeldManagerie: "Fleshmeld Managerie",
  viriluntProcession: "Virilunt Procession",
};

export const artifactsOfPower = {
  foulhide: "Foulhide",
  warpstoneCharm: "Warpstone Charm",
  skavenbrew: "Skavenbrew",
};

export const heroicTraits = [
  "Scurry Away",
  "Short Tempered",
  "Skill Manipulator",
];

export const spellLores = { loreOfRuin: "Lore of Ruin" };

export const prayerLores = { noxiousPrayers: "Noxious Prayers" };

export const skavenManifestationLore = {
  manifestationsOfDoom: "Manifestations of Doom",
};
