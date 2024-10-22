type UnitBase = {
  name: string;
  id?: string;
  cost: number;
  quantity: number;
  keywords: string[];
  factionKeywords: string[];
};

export type Unit = UnitBase & {
  isReinforced?: boolean;
};

export type Hero = UnitBase & {
  subordinates: Unit[];
  isGeneral?: boolean | undefined;
  heroicTrait?: string | undefined;
  artefactOfPower?: string | undefined;
};

export type UnitTypes = Hero | Unit;

export type Regiment = {
  id: number;
  hero?: Hero;
  units: Unit[];
};

export type Army = {
  armyName?: string;
  battleFormation?: string;
  spellLore?: string;
  prayerLore?: string;
  manifestationLore?: string;
  regiments: Regiment[];
  auxiliaryUnits?: Unit[];
  armyPoints?: number;
  numberOfWounds?: number;
};

export type ArmyContextType = {
  army: Army;
  addRegiment: (regiment: Regiment) => void;
  removeRegiment: (regimentId: number) => void;
  addHero: (regimentId: number, hero: Hero) => void;
  removeHero: (regimentId: number) => void;
  addUnit: (regimentId: number, unit: Unit) => void;
  removeUnit: (regimentId: number, unitId: string) => void;
  getAvailableHeroes: () => Hero[];
  getAvailableUnits: () => Unit[];
  saveArmyToLocalStorage: () => void;
  loadArmyFromLocalStorage: () => void;
  faction: string;
  setFaction: (faction: string) => void;
  availableFactions: string[];
  availableHeroicTraits: string[];
  availableArtifactsOfPower: string[];
  setHeroField: (
    regimentId: number,
    key: string,
    value: string | boolean
  ) => void;
  isHeroicTraitSelected: boolean;
  isGeneralSelected: boolean;
  isArtefactOfPowerSelected: boolean;
  removeHeroField: (regimentId: number, field: string) => void;
};
