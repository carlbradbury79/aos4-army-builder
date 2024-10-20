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
} from "@/battletomeData";
import { keywords } from "@/constants";

export const ArmyContext = createContext<ArmyContextType>(
  {} as ArmyContextType
);

const ArmyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [army, setArmy] = useState<Army>({ regiments: [] });
  const [isGeneralSet, setIsGeneralSet] = useState<boolean>(false);
  const [faction, setFaction] = useState<string>("");

  const availableFactions = Object.keys(battletomeData);


  // const availableUnits: Unit[] = skavenData.filter(
  //   (unit) => !unit.keywords.includes(keywords.hero)
  // );

  const factionData: { [key: string]: { heroes: Hero[]; units: Unit[] } } = {
    race1: {
      heroes: [
        { id: 1, name: "Race 1 Hero 1" },
        { id: 2, name: "Race 1 Hero 2" },
      ],
      units: [
        { id: 1, name: "Race 1 Unit 1" },
        { id: 2, name: "Race 1 Unit 2" },
      ],
    },
    race2: {
      heroes: [
        { id: 3, name: "Race 2 Hero 1" },
        { id: 4, name: "Race 2 Hero 2" },
      ],
      units: [
        { id: 3, name: "Race 2 Unit 1" },
        { id: 4, name: "Race 2 Unit 2" },
      ],
    },
  };

  const getAvailableHeroes = () => factionData[faction]?.heroes || [];
  const getAvailableUnits = () => factionData[faction]?.units || [];

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
    setArmy({
      regiments: army.regiments.map((regiment) =>
        regiment.id === regimentId ? { ...regiment, hero } : regiment
      ),
    });
  };

  const removeHero = (regimentId: number) => {
    setArmy({
      regiments: army.regiments.map((regiment) =>
        regiment.id === regimentId ? { ...regiment, hero: undefined } : regiment
      ),
    });
    setIsGeneralSet(false);
  };

  const setGeneral = (regimentId: number) => {
    setArmy({
      regiments: army.regiments.map((reg) =>
        reg.id === regimentId && reg.hero
          ? { ...reg, hero: { ...reg.hero, isGeneral: true } }
          : reg
      ),
    });
    setIsGeneralSet(true);
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
        setGeneral,
        addUnit,
        removeUnit,
        getAvailableHeroes,
        getAvailableUnits,
        isGeneralSet,
        saveArmyToLocalStorage,
        loadArmyFromLocalStorage,
        faction,
        setFaction,
        availableFactions,
      }}
    >
      {children}
    </ArmyContext.Provider>
  );
};

export default ArmyProvider;
