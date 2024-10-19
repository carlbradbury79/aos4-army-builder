export type Unit = {
  id: string;
  name: string;
};

export type Hero = { id: number; name: string; isGeneral?: boolean };
// export type Unit = {
//   name: string;
//   id: number;
//   cost: number;
//   quantity: number;
//   keywords: string[];
//   factionKeywords: string[];
//   isReinforced?: boolean;
// };

// export type Hero = Omit<Unit, "isReinforced"> & {
//   subordinates: Unit[];
//   isGeneral?: boolean;
// };

export type Regiment = {
  id: number;
  hero?: Hero;
  units: Unit[];
};

export type Army = {
  armyName?: string;
  battleFormation?: string;
  heroicTrait?: string;
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
  setGeneral: (regimentId: number) => void;
  addUnit: (regimentId: number, unit: Unit) => void;
  removeUnit: (regimentId: number, unitId: string) => void;
  getAvailableHeroes: () => Hero[];
  getAvailableUnits: () => Unit[];
  isGeneralSet: boolean;
  saveArmyToLocalStorage: () => void;
  loadArmyFromLocalStorage: () => void;
  faction: string;
  setFaction: (faction: string) => void;
};
