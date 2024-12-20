import { Hero, Unit, UnitTypes } from "@/types";
import { keywords as genericKeywords } from "../constants";

const { hero } = genericKeywords;

export const keywords = {
  skink: "Skink",
  saurus: "Saurus",
  kroxigor: "Kroxigor",
  monster: "Monster",
  beast: "Beast",
  favouredSpawning: "Favoured Spawning",
  skinkCavalry: "Skink Cavalry",
  seraphon: "Seraphon",
};

export const units = {
  lordKroak: "Lord Kroak",
  ripperdactylChief: "Ripperdactyl Chief",
  saurusAstrolithBearer: "Saurus Astrolith Bearer",
  saurusOldblood: "Saurus Oldblood",
  saurusOldbloodOnCarnosaur: "Saurus Oldblood on Carnosaur",
  saurusScarVeteranOnAggradon: "Saurus Scar-Veteran on Aggadon",
  saurusScarVeteranOnCarnosaur: "Saurus Scar-Veteran on Carnosaur",
  skinkOracleOnTroglodon: "Skink Oracle on Troglodon",
  skinkStarpriest: "Skink Starpriest",
  skinkStarseer: "Skink Starseer",
  slannStarmaster: "Slann Starmaster",
  stegadonChief: "Stegadon Chief",
  terradonChief: "Terradon Chief",
  aggradonLancers: "Aggadon Lancers",
  bastiladonWithArkOfSotek: "Bastiladon with Ark of Sotek",
  bastiladonWithSolarEngine: "Bastiladon with Solar Engine",
  engineOfTheGods: "Engine of the Gods",
  huntersOfHuanchiWithDartpipes: "Hunters of Huanchi with Dartpipes",
  huntersOfHuanchiWithStarstoneBolas: "Hunters of Huanchi with Starstone Bolas",
  kroxigor: "Kroxigor",
  kroxigorWarspawned: "Kroxigor Warspawned",
  raptadonChargers: "Raptadon Chargers",
  raptadonHunters: "Raptadon Hunters",
  ripperdactylRiders: "Ripperdactyl Riders",
  ripperdactylRidersTwoModels: "Ripperdactyl Riders (2 models)",
  saurusGuard: "Saurus Guard",
  saurusWarriors: "Saurus Warriors",
  skinks: "Skinks",
  spawnOfChotec: "Spawn of Chotec",
  stegadon: "Stegadon",
  terradonRiders: "Terradon Riders",
  terradonRidersTwoModels: "Terradon Riders (2 models)",
  terrawings: "Terrawings",
};

export const battleFormations = [
  "Eternal Starhost",
  "Shadowstrike Starhost",
  "Sunclaw Starhost",
  "Thunderquake Starhost",
];

export const artifactsOfPower = [
  "Coatl familiar",
  "Incandescent rectrices",
  "Bloodrage pendant",
];

export const heroicTraits = [
  "Being of the stars",
  "Beastmaster",
  "Reptilian Cunning",
];

export const spellLores = [
  "Lore of celestial manipulation",
  "Lore of primal jungles",
];

export const prayerLores = [];

export const manifestationLore = [];

const takeOneFavouredSpawning = {
  keyword: keywords.favouredSpawning,
  max: 1,
  hero: true,
};
const takeSeraphon = { keyword: keywords.seraphon, max: 0 };
const takeStarPriest = { keyword: units.skinkStarpriest, max: 1, hero: true };
const takeOneMonster = { keyword: keywords.monster, max: 1 };
const takeAnyMonster = { keyword: keywords.monster, max: 0 };
const takeOneBeast = { keyword: keywords.beast, max: 1 };
const takeBeasts = { keyword: keywords.beast, max: 0 };
const takeSkinkCavalry = { keyword: keywords.skinkCavalry, max: 0 };
const takeSaurus = { keyword: keywords.saurus, max: 0 };
const takeKroxigor = { keyword: units.kroxigor, max: 0 };
const takeSkinks = { keyword: units.skinks, max: 0 };

export const seraphonHeroProfiles: Hero[] = [
  {
    id: "1",
    name: units.lordKroak,
    cost: 430,
    quantity: 1,
    subordinates: [takeOneFavouredSpawning, takeSeraphon, takeStarPriest],
    keywords: [hero],
    factionKeywords: [],
  },
  {
    id: "2",
    name: units.ripperdactylChief,
    cost: 130,
    quantity: 1,
    subordinates: [takeOneMonster, takeOneBeast, takeSkinkCavalry],
    keywords: [hero],
    factionKeywords: [],
  },
  {
    id: "3",
    name: units.saurusAstrolithBearer,
    cost: 130,
    quantity: 1,
    subordinates: [takeSaurus],
    keywords: [hero],
    factionKeywords: [keywords.favouredSpawning],
  },
  {
    id: "4",
    name: units.saurusOldblood,
    cost: 110,
    quantity: 1,
    subordinates: [takeOneFavouredSpawning, takeSaurus],
    keywords: [hero],
    factionKeywords: [],
  },
  {
    id: "5",
    name: units.saurusOldbloodOnCarnosaur,
    cost: 290,
    quantity: 1,
    subordinates: [takeAnyMonster, takeSaurus, takeOneFavouredSpawning],
    keywords: [hero],
    factionKeywords: [],
  },
  {
    id: "6",
    name: units.saurusScarVeteranOnAggradon,
    cost: 190,
    quantity: 1,
    subordinates: [takeOneFavouredSpawning, takeSaurus],
    keywords: [hero],
    factionKeywords: [],
  },
  {
    id: "7",
    name: units.saurusScarVeteranOnCarnosaur,
    cost: 230,
    quantity: 1,
    subordinates: [takeOneMonster, takeOneFavouredSpawning, takeSaurus],
    keywords: [hero],
    factionKeywords: [],
  },
  {
    id: "8",
    name: units.skinkOracleOnTroglodon,
    cost: 240,
    quantity: 1,
    subordinates: [takeOneMonster, takeOneBeast, takeSkinks, takeKroxigor],
    keywords: [hero],
    factionKeywords: [],
  },
  {
    id: "9",
    name: units.skinkStarpriest,
    cost: 100,
    quantity: 1,
    subordinates: [takeOneMonster, takeOneBeast, takeKroxigor, takeSkinks],
    keywords: [hero],
    factionKeywords: [units.skinkStarpriest],
  },
  {
    id: "10",
    name: units.skinkStarseer,
    cost: 170,
    quantity: 1,
    subordinates: [takeOneMonster, takeBeasts, takeKroxigor, takeSkinks],
    keywords: [hero],
    factionKeywords: [],
  },
  {
    id: "11",
    name: units.slannStarmaster,
    cost: 280,
    quantity: 1,
    subordinates: [takeOneFavouredSpawning, takeSeraphon, takeStarPriest],
    keywords: [hero],
    factionKeywords: [],
  },
  {
    id: "12",
    name: units.stegadonChief,
    cost: 200,
    quantity: 1,
    subordinates: [takeOneMonster, takeKroxigor, takeSkinks],
    keywords: [hero],
    factionKeywords: [],
  },
  {
    id: "13",
    name: units.terradonChief,
    cost: 100,
    quantity: 1,
    subordinates: [takeOneBeast, takeOneMonster, takeSkinkCavalry],
    keywords: [hero],
    factionKeywords: [],
  },
];

export const seraphonUnitProfiles: Unit[] = [
  {
    id: "14",
    name: units.aggradonLancers,
    cost: 220,
    quantity: 3,
    keywords: [],
    factionKeywords: [keywords.saurus, keywords.seraphon],
  },
  {
    id: "15",
    name: units.bastiladonWithArkOfSotek,
    cost: 230,
    quantity: 1,
    keywords: [],
    factionKeywords: [keywords.monster, keywords.seraphon],
  },
  {
    id: "16",
    name: units.bastiladonWithSolarEngine,
    cost: 240,
    quantity: 1,
    keywords: [],
    factionKeywords: [keywords.monster, keywords.seraphon],
  },
  {
    id: "17",
    name: units.engineOfTheGods,
    cost: 180,
    quantity: 1,
    keywords: [],
    factionKeywords: [keywords.monster, keywords.seraphon],
  },
  {
    id: "18",
    name: units.huntersOfHuanchiWithDartpipes,
    cost: 80,
    quantity: 5,
    keywords: [],
    factionKeywords: [keywords.skink, keywords.seraphon],
    cannotBeReinforced: true,
  },
  {
    id: "19",
    name: units.huntersOfHuanchiWithStarstoneBolas,
    cost: 100,
    quantity: 5,
    keywords: [],
    factionKeywords: [keywords.skink, keywords.seraphon],
    cannotBeReinforced: true,
  },
  {
    id: "20",
    name: units.kroxigor,
    cost: 210,
    quantity: 3,
    keywords: [],
    factionKeywords: [keywords.kroxigor, keywords.seraphon],
  },
  {
    id: "21",
    name: units.kroxigorWarspawned,
    cost: 220,
    quantity: 3,
    keywords: [],
    factionKeywords: [keywords.kroxigor, keywords.seraphon],
  },
  {
    id: "22",
    name: units.raptadonChargers,
    cost: 140,
    quantity: 5,
    keywords: [],
    factionKeywords: [keywords.skinkCavalry, keywords.seraphon],
  },
  {
    id: "23",
    name: units.raptadonHunters,
    cost: 130,
    quantity: 5,
    keywords: [],
    factionKeywords: [keywords.skinkCavalry, keywords.seraphon],
  },
  {
    id: "24",
    name: units.ripperdactylRiders,
    cost: 110,
    quantity: 3,
    keywords: [],
    factionKeywords: [keywords.skinkCavalry, keywords.skink, keywords.seraphon],
  },
  {
    id: "25",
    name: units.ripperdactylRidersTwoModels,
    cost: 70,
    quantity: 2,
    keywords: [],
    factionKeywords: [keywords.skinkCavalry, keywords.skink, keywords.seraphon],
    cannotBeReinforced: true,
  },
  {
    id: "26",
    name: units.saurusGuard,
    cost: 120,
    quantity: 5,
    keywords: [],
    factionKeywords: [keywords.saurus, keywords.seraphon],
  },
  {
    id: "27",
    name: units.saurusWarriors,
    cost: 160,
    quantity: 10,
    keywords: [],
    factionKeywords: [keywords.saurus, keywords.seraphon],
  },
  {
    id: "28",
    name: units.skinks,
    cost: 80,
    quantity: 10,
    keywords: [],
    factionKeywords: [keywords.skink, keywords.seraphon],
  },
  {
    id: "29",
    name: units.spawnOfChotec,
    cost: 120,
    quantity: 1,
    keywords: [],
    factionKeywords: [keywords.skink, keywords.beast, keywords.seraphon],
  },
  {
    id: "30",
    name: units.stegadon,
    cost: 220,
    quantity: 3,
    keywords: [],
    factionKeywords: [keywords.monster, keywords.seraphon],
  },
  {
    id: "31",
    name: units.terradonRiders,
    cost: 90,
    quantity: 3,
    keywords: [],
    factionKeywords: [keywords.skinkCavalry, keywords.skink, keywords.seraphon],
  },
  {
    id: "32",
    name: units.terradonRidersTwoModels,
    cost: 70,
    quantity: 3,
    keywords: [],
    factionKeywords: [keywords.skinkCavalry, keywords.skink, keywords.seraphon],
    cannotBeReinforced: true,
  },
  {
    id: "33",
    name: units.terrawings,
    cost: 70,
    quantity: 3,
    keywords: [],
    factionKeywords: [keywords.beast, keywords.seraphon],
    cannotBeReinforced: true,
  },
];

export const seraphonBattleProfiles: UnitTypes[] = [
  ...seraphonHeroProfiles,
  ...seraphonUnitProfiles,
];
