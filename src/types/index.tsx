type UnitBase = {
  name: string;
  id: string;
  cost: number;
  quantity: number;
  keywords: string[];
  factionKeywords: string[];
};

export type Unit = UnitBase & {
  isReinforced?: boolean;
  cannotBeReinforced?: boolean;
};

type subordinates = {
  keyword: string;
  max: number;
  hero?: boolean;
};

export type Hero = UnitBase & {
  subordinates: subordinates[];
  isGeneral?: boolean | undefined;
  heroicTrait?: string | undefined;
  artefactOfPower?: string | undefined;
};

export type UnitTypes = Hero | Unit;

export type Regiment = {
  id: string;
  hero?: Hero;
  units: Unit[];
};

export type Faction = "skaven" | "stormcast" | "soulblight";

export type Army = {
  armyName?: string;
  battleFormation?: string | undefined;
  spellLore?: string | undefined;
  prayerLore?: string | undefined;
  manifestationLore?: string | undefined;
  regiments: Regiment[];
  auxiliaryUnits: Unit[];
  armyPoints?: number;
  numberOfWounds?: number;
  faction?: Faction;
};

export type ArmyContextType = {
  army: Army;
  addRegiment: (regiment: Regiment) => void;
  removeRegiment: (regimentId: string) => void;
  addHero: (regimentId: string, hero: Hero) => void;
  removeHero: (regimentId: string) => void;
  addUnit: (regimentId: string, unit: Unit) => void;
  removeUnit: (regimentId: string, unitId: string) => void;
  getAvailableHeroes: () => Hero[];
  getAvailableUnits: () => Unit[];
  saveArmyToLocalStorage: () => void;
  loadArmyFromLocalStorage: (armyId: string) => void;
  faction: string;
  setFaction: (faction: string) => void;
  availableFactions: string[];
  availableHeroicTraits: string[];
  availableArtifactsOfPower: string[];
  availableManifestationLores: string[];
  availableSpellLores: string[];
  availablePrayerLores: string[];
  availableBattleFormations: string[];
  setHeroField: (
    regimentId: string,
    key: string,
    value: string | boolean | undefined
  ) => void;
  isHeroicTraitSelected: boolean;
  isGeneralSelected: boolean;
  isArtefactOfPowerSelected: boolean;
  spellLoreSelected: string | undefined;
  prayerLoreSelected: string | undefined;
  battleFormationSelected: string | undefined;
  manifestationLoreSelected: string | undefined;
  setArmyField: (key: string, value: string | undefined) => void;
  totalArmyPoints: number;
  reinforceUnit: (
    regimentId: string,
    unitId: string,
    reinforce: boolean
  ) => void;
  getAvailableSubordinateUnits: (hero: Hero, regimentId: string) => UnitTypes[];
  addAuxUnit: (unit: Unit) => void;
  removeAuxUnit: (unitId: string) => void;
  reinforceAuxUnit: (unitId: string, reinforce: boolean) => void;
  loadArmyNamesFromLocalStorage: () => void;
  armyName: string;
  AddNameToArmy: (name: string) => void;
  removeArmyFromLocalStorage: (armyId: string) => void;
  savedArmies: Army[];
  addFactionToArmy: (faction: Faction) => void;
  isArmyNameTaken: (name: string) => boolean;
  addNameAndFaction: (name: string, faction: Faction) => void;
};
