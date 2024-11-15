import { Hero, Unit } from "@/types";
import { keywords, ossiarchKeywords, ossiarchUnits } from "../constants";

const { hero, infantry, monster, cavalry, warMachine } = keywords;
const { ossiarchBonereapers, legionSubcommander } = ossiarchKeywords;

// Allegiance Abilities

export const battleFormations = [
  "Mortisan Council",
  "Mortek Ballistari",
  "Kavalos Lance",
  "Mortek Phalanx",
];

export const artifactsOfPower = [
  "Marrowpact",
  "Lord of Saturation",
  "Helm of Tyranny",
];

export const heroicTraits = [
  "Diversionary Tactics",
  "Aura of Sterility",
  "Mighty Archaeossian",
];

export const spellLores = ["Lore of Ossian Sorcery"];

export const prayerLores = ["Noxious Prayers"];

export const manifestationLore = ["Horrors of the Necropolis"];

// Subordinates
const anyOssiarch = { keyword: ossiarchBonereapers, max: 0 };
const anyInfantry = { keyword: "infantry", max: 0 };
const oneSubcommander = { keyword: legionSubcommander, max: 1 };
const oneMortekCrawler = { keyword: ossiarchUnits.mortekCrawler, max: 1 };
const oneGothizzarHarvester = {
  keyword: ossiarchUnits.gothizzarHarvester,
  max: 1,
};

// Heroes
export const ossiarchBonereaperHeroProfiles: Hero[] = [
  {
    id: "1",
    name: ossiarchUnits.archKavalosZandtos,
    cost: 230,
    quantity: 1,
    subordinates: [anyOssiarch],
    keywords: [],
    factionKeywords: [ossiarchBonereapers],
  },
  {
    id: "2",
    name: ossiarchUnits.arkhanTheBlackMortarchOfSacrament,
    cost: 410,
    quantity: 1,
    subordinates: [anyOssiarch, oneSubcommander],
    keywords: [hero, monster],
    factionKeywords: [ossiarchBonereapers],
  },
  {
    id: "3",
    name: ossiarchUnits.katakrosMortarchOfTheNecropolis,
    cost: 500,
    quantity: 1,
    subordinates: [anyOssiarch, oneSubcommander],
    keywords: [hero, monster],
    factionKeywords: [ossiarchBonereapers],
  },
  {
    id: "4",
    name: ossiarchUnits.liegeKavalos,
    cost: 210,
    quantity: 1,
    subordinates: [anyOssiarch],
    keywords: [hero, "cavalry"],
    factionKeywords: [ossiarchBonereapers, legionSubcommander],
  },
  {
    id: "5",
    name: ossiarchUnits.mortisanBoneshaper,
    cost: 130,
    quantity: 1,
    subordinates: [anyInfantry, oneGothizzarHarvester],
    keywords: [hero, "infantry"],
    factionKeywords: [ossiarchBonereapers],
  },
  {
    id: "6",
    name: ossiarchUnits.mortisanOssifector,
    cost: 110,
    quantity: 1,
    subordinates: [anyInfantry, oneMortekCrawler, oneGothizzarHarvester],
    keywords: [hero, "infantry"],
    factionKeywords: [ossiarchBonereapers],
  },
  {
    id: "7",
    name: ossiarchUnits.mortisanSoulmason,
    cost: 160,
    quantity: 1,
    subordinates: [anyInfantry, oneGothizzarHarvester],
    keywords: [hero, "infantry"],
    factionKeywords: [ossiarchBonereapers],
  },
  {
    id: "8",
    name: ossiarchUnits.mortisanSoulreaper,
    cost: 120,
    quantity: 1,
    subordinates: [anyInfantry, oneGothizzarHarvester],
    keywords: [hero, "infantry"],
    factionKeywords: [ossiarchBonereapers],
  },
  {
    id: "9",
    name: ossiarchUnits.nagashSupremeLordOfTheUndead,
    cost: 880,
    quantity: 1,
    subordinates: [anyOssiarch, oneSubcommander],
    keywords: [hero, monster],
    factionKeywords: [ossiarchBonereapers],
  },
  {
    id: "10",
    name: ossiarchUnits.vokmortianMasterOfTheBoneTithe,
    cost: 170,
    quantity: 1,
    subordinates: [anyOssiarch],
    keywords: [hero, "infantry"],
    factionKeywords: [ossiarchBonereapers],
  },
];

// Units
export const skavenUnitProfiles: Unit[] = [
  {
    id: "11",
    name: ossiarchUnits.gothizzarHarvester,
    cost: 220,
    quantity: 1,
    keywords: [monster],
    factionKeywords: [ossiarchBonereapers, ossiarchUnits.gothizzarHarvester],
  },
  {
    id: "12",
    name: ossiarchUnits.immortisGuard,
    cost: 200,
    quantity: 3,
    keywords: [infantry],
    factionKeywords: [ossiarchBonereapers, infantry],
  },
  {
    id: "13",
    name: ossiarchUnits.kavalosDeathriders,
    cost: 180,
    quantity: 5,
    keywords: [cavalry],
    factionKeywords: [ossiarchBonereapers],
  },
  {
    id: "14",
    name: ossiarchUnits.morghastArchai,
    cost: 270,
    quantity: 2,
    keywords: [infantry],
    factionKeywords: [ossiarchBonereapers, infantry],
  },
  {
    id: "15",
    name: ossiarchUnits.morghastHarbingers,
    cost: 270,
    quantity: 2,
    keywords: [infantry],
    factionKeywords: [ossiarchBonereapers, infantry],
  },
  {
    id: "16",
    name: ossiarchUnits.mortekCrawler,
    cost: 200,
    quantity: 1,
    keywords: [warMachine],
    factionKeywords: [ossiarchBonereapers, ossiarchUnits.mortekCrawler],
  },
  {
    id: "17",
    name: ossiarchUnits.mortekGuard,
    cost: 120,
    quantity: 10,
    keywords: [infantry],
    factionKeywords: [ossiarchBonereapers, infantry],
  },
  {
    id: "18",
    name: ossiarchUnits.necropolisStalkers,
    cost: 170,
    quantity: 3,
    keywords: [infantry],
    factionKeywords: [ossiarchBonereapers, infantry],
  },
  {
    id: "19",
    name: ossiarchUnits.teraticCohort,
    cost: 140,
    quantity: 8,
    keywords: [infantry],
    factionKeywords: [ossiarchBonereapers, infantry],
  },
];
