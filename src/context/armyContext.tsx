"use client";
import React, { createContext, ReactNode, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  ArmyContextType,
  Regiment,
  Army,
  Hero,
  Unit,
  UnitTypes,
} from "@/types";
import {
  battletomeData,
  genericManifestationLores,
  factionSpecificManifestationLores,
  spellLores,
  prayerLores,
  heroicTraits,
  artifactsOfPower,
} from "@/battletomeData";
import { keywords } from "@/constants";

export const ArmyContext = createContext<ArmyContextType>(
  {} as ArmyContextType
);

const ArmyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [army, setArmy] = useState<Army>({ regiments: [] });
  const [faction, setFaction] = useState<string>("");

  const availableFactions = Object.keys(battletomeData);

  const availableManifestationLores = [
    ...genericManifestationLores,
    ...factionSpecificManifestationLores[
      faction as keyof typeof factionSpecificManifestationLores
    ],
  ];

  const availableHeroicTraits =
    heroicTraits[faction as keyof typeof heroicTraits];

  const availableArtifactsOfPower =
    artifactsOfPower[faction as keyof typeof artifactsOfPower];

  const availableSpellLores = spellLores[faction as keyof typeof spellLores];
  const availablePrayerLores = prayerLores[faction as keyof typeof prayerLores];

  const setSpellLore = (spellLore: string) => {
    setArmy((prevArmy) => ({ ...prevArmy, spellLore }));
  };

  const setPrayerLore = (prayerLore: string) => {
    setArmy((prevArmy) => ({ ...prevArmy, prayerLore }));
  };

  const setHeroField = (
    regimentId: number,
    key: string,
    value: string | boolean
  ) => {
    setArmy((prevArmy) => ({
      ...prevArmy,
      regiments: prevArmy.regiments.map((regiment) =>
        regiment.id === regimentId
          ? { ...regiment, hero: { ...regiment.hero, [key]: value } }
          : regiment
      ),
    }));
  };

  const removeHeroField = (regimentId: number, field: string) => {
    setArmy({
      regiments: army.regiments.map((regiment) =>
        regiment.id === regimentId
          ? { ...regiment, hero: { ...regiment.hero, [field]: undefined } }
          : regiment
      ),
    });
  };

  const isHeroicTraitSelected = army.regiments.some(
    (regiment) => regiment.hero?.heroicTrait
  );

  const isGeneralSelected = army.regiments.some(
    (regiment) => regiment.hero?.isGeneral
  );

  const isArtefactOfPowerSelected = army.regiments.some(
    (regiment) => regiment.hero?.artefactOfPower
  );

  const setBattleFormation = (battleFormation: string) => {
    setArmy((prevArmy) => ({ ...prevArmy, battleFormation }));
  };

  const filterUnitsByFaction = (faction: string): UnitTypes[] => {
    return battletomeData[faction as keyof typeof battletomeData];
  };

  const getAvailableHeroes = (): Hero[] =>
    filterUnitsByFaction(faction).filter((unit) =>
      unit.keywords.includes(keywords.hero)
    ) as Hero[];

  const getAvailableUnits = () =>
    filterUnitsByFaction(faction).filter(
      (unit) => !unit.keywords.includes(keywords.hero)
    );

  const addRegiment = () => {
    if (army.regiments.length < 5) {
      setArmy({
        regiments: [...army.regiments, { id: Date.now(), units: [] }],
      });
    }
  };

  const removeRegiment = (regimentId: number) => {
    setArmy({
      regiments: army.regiments.filter(
        (regiment) => regiment.id !== regimentId
      ),
    });
  };

  const addHero = (regimentId: number, hero: Hero) => {
    const heroWithUniqueId = { ...hero, id: uuidv4() };
    setArmy({
      regiments: army.regiments.map((regiment) =>
        regiment.id === regimentId
          ? { ...regiment, hero: heroWithUniqueId }
          : regiment
      ),
    });
  };

  const removeHero = (regimentId: number) => {
    setArmy({
      regiments: army.regiments.map((regiment) =>
        regiment.id === regimentId ? { ...regiment, hero: undefined } : regiment
      ),
    });
  };

  const addUnit = (regimentId: number, unit: Unit) => {
    const unitWithUniqueId = { ...unit, id: uuidv4() };
    setArmy({
      regiments: army.regiments.map((regiment) =>
        regiment.id === regimentId && regiment.hero
          ? { ...regiment, units: [...regiment.units, unitWithUniqueId] }
          : regiment
      ),
    });
  };

  const removeUnit = (regimentId: number, unitId: string) => {
    setArmy({
      regiments: army.regiments.map((regiment) =>
        regiment.id === regimentId
          ? {
              ...regiment,
              units: regiment.units.filter((unit) => unit.id !== unitId),
            }
          : regiment
      ),
    });
  };

  const saveArmyToLocalStorage = () => {
    localStorage.setItem("army", JSON.stringify(army));
  };

  const loadArmyFromLocalStorage = () => {
    const savedArmy = localStorage.getItem("army");
    if (savedArmy) {
      setArmy(JSON.parse(savedArmy));
    }
  };

  return (
    <ArmyContext.Provider
      value={{
        army,
        addRegiment,
        removeRegiment,
        addHero,
        removeHero,
        addUnit,
        removeUnit,
        getAvailableHeroes,
        getAvailableUnits,
        saveArmyToLocalStorage,
        loadArmyFromLocalStorage,
        faction,
        setFaction,
        availableFactions,
        availableHeroicTraits,
        availableArtifactsOfPower,
        availableManifestationLores,
        availableSpellLores,
        availablePrayerLores,
        setHeroField,
        isHeroicTraitSelected,
        isGeneralSelected,
        isArtefactOfPowerSelected,
        removeHeroField,
      }}
    >
      {children}
    </ArmyContext.Provider>
  );
};

export default ArmyProvider;
