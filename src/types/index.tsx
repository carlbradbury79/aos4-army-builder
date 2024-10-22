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
  battleFormation?: string | undefined;
  spellLore?: string | undefined;
  prayerLore?: string | undefined;
  manifestationLore?: string | undefined;
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
  availableManifestationLores: string[];
  availableSpellLores: string[];
  availablePrayerLores: string[];
  availableBattleFormations: string[];
  setHeroField: (
    regimentId: number,
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
  removeHeroField: (regimentId: number, field: string) => void;
  setArmyField: (key: string, value: string | undefined) => void;
};
