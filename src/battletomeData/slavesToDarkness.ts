import { Hero, Unit, UnitTypes } from "@/types";
import { keywords as genericKeywords } from "../constants";
import { addSubordinate } from "@/helpers/addSubordinate";
import { createHero } from "@/helpers/createHero";
import { createUnit as originalCreateUnit } from "@/helpers/createUnit";

export const keywords = {
  ruinousChampion: "Ruinous Champion",
  warriorsOfChaos: "Warriors of Chaos",
  slavesToDarkness: "Slaves to Darkness",
  darkoath: "Darkoath",
  oathsworn: "Oathsworn",
  chaosLegionaires: "Chaos Legionaires",
  ogroidTheridons: "Ogroid Theridons",
  daemon: "Daemon",
};
const { unique, monster, beast } = genericKeywords;

export const battleFormations = [];

export const artifactsOfPower = [];

export const heroicTraits = [];

export const spellLores = [];

export const prayerLores = [];

export const manifestationLore = [];

export const units = {
  abraxiaSpearOfTheEverchosen: "Abraxia, Spear of the Everchosen",
  archaonTheEverchosen: "Archaon the Everchosen",
  belakorTheDarkMaster: "Be'lakor, the Dark Master",
  centurionMarshal: "Centurion Marshal",
  chaosLord: "Chaos Lord",
  chaosLordOnDaemonicMount: "Chaos Lord on Daemonic Mount",
  chaosLordOnKarkadrak: "Chaos Lord on Karkadrak",
  chaosSorcererLord: "Chaos Sorcerer Lord",
  daemonPrince: "Daemon Prince",
  darkoathChieftain: "Darkoath Chieftain",
  darkoathChieftainOnWarsteed: "Darkoath Chieftain on Warsteed",
  darkoathWarqueen: "Darkoath Warqueen",
  eternusBladeOfTheFirstPrince: "Eternus, Blade of the First Prince",
  exaltedHeroOfChaos: "Exalted Hero of Chaos",
  gauntSummoner: "Gaunt Summoner",
  gauntSummonerOnDiscOfTzeentch: "Gaunt Summoner on Disc of Tzeentch",
  gunnarBrand: "Gunnar Brand",
  singriBrand: "Singri Brand",
  ogroidMyrmidon: "Ogroid Myrmidon",
  chaosChariot: "Chaos Chariot",
  chaosChosen: "Chaos Chosen",
  chaosFuries: "Chaos Furies",
  chaosKnights: "Chaos Knights",
  chaosLegionaires: "Chaos Legionaires",
  chaosSpawn: "Chaos Spawn",
  chaosWarrirors: "Chaos Warriors",
  darkoathFellriders: "Darkoath Fellriders",
  darkoathMarauders: "Darkoath Marauders",
  darkoathSavagers: "Darkoath Savagers",
  darkoathWilderfiend: "Darkoath Wilderfiend",
  fomoroidCrusher: "Fomoroid Crusher",
  gorebeastChariot: "Gorebeast Chariot",
  legionOfTheFirstPrinceBeastsOfNurgle:
    "Legion of the First Prince - Beasts of Nurgle",
  legionOfTheFirstPrinceBloodcrushers:
    "Legion of the First Prince - Bloodcrushers",
  legionOfTheFirstPrinceBloodletters:
    "Legion of the First Prince - Bloodletters",
  legionOfTheFirstPrinceFiends: "Legion of the First Prince - Fiends",
  legionOfTheFirstPrinceFlamersOfTzeentch:
    "Legion of the First Prince - Flamers of Tzeentch",
  legionOfTheFirstPrinceHellflayers: "Legion of the First Prince - Hellflayers",
  legionOfTheFirstPrincePlaguebearers:
    "Legion of the First Prince - Plaguebearers",
  legionOfTheFirstPrinceScreamersOfTzeentch:
    "Legion of the First Prince - Screamers of Tzeentch",
  mindstealerSphiranx: "Mindstealer Sphiranx",
  mutalithVortexBeast: "Mutalith Vortex Beast",
  ogroidTheridons: "Ogroid Theridons",
  raptoryx: "Raptoryx",
  slaughterbrute: "Slaughterbrute",
  theOathswornKin: "The Oathsworn Kin",
  varanguard: "Varanguard",
};

const createUnit = (
  id: string,
  name: string,
  cost: number,
  quantity: number,
  factionKeywords: string[] = [],
  cannotBeReinforced: boolean = false
): Unit => {
  return originalCreateUnit(
    id,
    name,
    cost,
    quantity,
    [...factionKeywords, keywords.slavesToDarkness],
    cannotBeReinforced
  );
};

const takeAnyWarriorsOfChaos = addSubordinate(keywords.warriorsOfChaos);
const takeOneRuinousChampion = addSubordinate(
  keywords.ruinousChampion,
  1,
  true
);
const takeAnySlavesToDarkness = addSubordinate(keywords.slavesToDarkness);
const takeOneMonster = addSubordinate(genericKeywords.monster, 1);
const takeAnyMonster = addSubordinate(genericKeywords.monster);
const takeAnyDarkoath = addSubordinate(keywords.darkoath);
const takeOneOathsworn = addSubordinate(keywords.oathsworn, 1);
const takeAnyOgroidTheridons = addSubordinate(keywords.ogroidTheridons);
const takeEternus = addSubordinate(units.eternusBladeOfTheFirstPrince, 1);
const takeAnyChaosLegionaires = addSubordinate(keywords.chaosLegionaires);
const takeAnyDaemon = addSubordinate(keywords.daemon);
const takeAnyChaosFuries = addSubordinate(units.chaosFuries);

export const slavesToDarknessHeroProfiles: Hero[] = [
  createHero(
    "1",
    units.abraxiaSpearOfTheEverchosen,
    340,
    1,
    [takeOneRuinousChampion, takeAnySlavesToDarkness],
    [unique]
  ),
  createHero(
    "2",
    units.archaonTheEverchosen,
    870,
    1,
    [takeOneRuinousChampion, takeAnySlavesToDarkness],
    [unique]
  ),
  createHero(
    "3",
    units.belakorTheDarkMaster,
    440,
    1,
    [takeOneRuinousChampion, takeEternus, takeAnySlavesToDarkness],
    [unique]
  ),
  createHero(
    "4",
    units.centurionMarshal,
    160,
    1,
    [takeOneMonster, takeAnyChaosLegionaires, takeAnyDaemon],
    [],
    [keywords.ruinousChampion]
  ),
  createHero(
    "5",
    units.chaosLord,
    100,
    1,
    [takeAnyWarriorsOfChaos, takeOneRuinousChampion, takeOneMonster],
    [],
    [keywords.ruinousChampion]
  ),
  createHero(
    "6",
    units.chaosLordOnDaemonicMount,
    160,
    1,
    [takeAnyWarriorsOfChaos, takeOneRuinousChampion, takeOneMonster],
    [],
    [keywords.ruinousChampion]
  ),
  createHero(
    "7",
    units.chaosLordOnKarkadrak,
    230,
    1,
    [takeAnyWarriorsOfChaos, takeOneRuinousChampion, takeOneMonster],
    [],
    [keywords.ruinousChampion]
  ),
  createHero("8", units.chaosSorcererLord, 120, 1, [
    takeAnyWarriorsOfChaos,
    takeOneRuinousChampion,
    takeOneMonster,
  ]),
  createHero("9", units.daemonPrince, 290, 1, [
    takeAnySlavesToDarkness,
    takeOneRuinousChampion,
  ]),
  createHero(
    "10",
    units.darkoathChieftain,
    90,
    1,
    [takeAnyDarkoath, takeOneMonster],
    [],
    [keywords.oathsworn]
  ),
  createHero(
    "11",
    units.darkoathChieftainOnWarsteed,
    130,
    1,
    [takeAnyDarkoath, takeOneMonster, takeOneOathsworn],
    [],
    [keywords.oathsworn]
  ),
  createHero("12", units.darkoathWarqueen, 120, 1, [
    takeAnyDarkoath,
    takeOneMonster,
    takeOneOathsworn,
  ]),
  createHero(
    "13",
    units.eternusBladeOfTheFirstPrince,
    200,
    1,
    [
      takeOneMonster,
      takeAnyWarriorsOfChaos,
      takeAnyChaosLegionaires,
      takeAnyChaosFuries,
    ],
    [unique],
    [units.eternusBladeOfTheFirstPrince]
  ),
  createHero(
    "14",
    units.exaltedHeroOfChaos,
    110,
    1,
    [takeAnyWarriorsOfChaos, takeOneMonster],
    [],
    [keywords.ruinousChampion]
  ),
  createHero("15", units.gauntSummoner, 170, 1, [takeAnySlavesToDarkness]),
  createHero("16", units.gauntSummonerOnDiscOfTzeentch, 210, 1, [
    takeAnySlavesToDarkness,
  ]),
  createHero("17", units.gunnarBrand, 240, 1, [takeAnyDarkoath]),
  createHero("18", units.singriBrand, 240, 1, []),
  createHero("19", units.ogroidMyrmidon, 150, 1, [
    takeAnyOgroidTheridons,
    takeAnyDaemon,
    takeAnyMonster,
  ]),
];

export const slavesToDarknessUnitProfiles: Unit[] = [
  createUnit("20", units.chaosChariot, 80, 1, [keywords.warriorsOfChaos]),
  createUnit("21", units.chaosChosen, 260, 5, [keywords.warriorsOfChaos]),
  createUnit("22", units.chaosFuries, 160, 6),
  createUnit("23", units.chaosKnights, 250, 5, [keywords.warriorsOfChaos]),
  createUnit(
    "24",
    units.chaosLegionaires,
    80,
    8,
    [keywords.chaosLegionaires],
    true
  ),
  createUnit("25", units.chaosSpawn, 60, 1, [beast]),
  createUnit("26", units.chaosWarrirors, 200, 10, [keywords.warriorsOfChaos]),
  createUnit("27", units.darkoathFellriders, 150, 5, [keywords.darkoath]),
  createUnit("28", units.darkoathMarauders, 80, 10, [keywords.darkoath]),
  createUnit("29", units.darkoathSavagers, 90, 5, [keywords.darkoath], true),
  createUnit("30", units.darkoathWilderfiend, 100, 1, [
    keywords.darkoath,
    genericKeywords.monster,
  ]),
  createUnit("31", units.fomoroidCrusher, 120, 1, [monster]),
  createUnit("32", units.gorebeastChariot, 90, 1, [keywords.warriorsOfChaos]),
  createUnit("33", units.mindstealerSphiranx, 170, 1, [monster]),
  createUnit("34", units.mutalithVortexBeast, 180, 1, [
    monster,
    keywords.daemon,
  ]),
  createUnit("35", units.ogroidTheridons, 180, 3, [keywords.ogroidTheridons]),
  createUnit("36", units.raptoryx, 100, 6, [beast]),
  createUnit("37", units.slaughterbrute, 220, 1, [monster, keywords.daemon]),
  createUnit("38", units.theOathswornKin, 100, 5, [keywords.oathsworn]),
  createUnit("39", units.varanguard, 330, 3, [keywords.warriorsOfChaos]),
];

export const slavesToDarknessBattleProfiles: UnitTypes[] = [
  ...slavesToDarknessHeroProfiles,
  ...slavesToDarknessUnitProfiles,
];
