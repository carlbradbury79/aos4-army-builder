export type Unit = {
  id: number;
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
  regiments: Regiment[];
  additioanlRegiments?: Unit[];
  battleTrait?: string;
  commandAbility?: string;
  armyName?: string;
  armyPoints?: number;
  numberOfWounds?: number;
  spells?: string;
  prayer?: string;
  endlessSpells?: string;
};

export type ArmyContextType = {
  army: Army;
  addRegiment: (regiment: Regiment) => void;
  removeRegiment: (regimentId: number) => void;
  addHero: (regimentId: number, hero: Hero) => void;
  removeHero: (regimentId: number) => void;
  setGeneral: (regimentId: number) => void;
  addUnit: (regimentId: number, unit: Unit) => void;
  removeUnit: (regimentId: number, unitId: number) => void;
  getAvailableHeroes: () => Hero[];
  getAvailableUnits: () => Unit[];
  isGeneralSet: boolean;
  saveArmyToLocalStorage: () => void;
  loadArmyFromLocalStorage: () => void;
  setFaction: (faction: string) => void;
};
