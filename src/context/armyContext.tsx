"use client";
import React, { createContext, ReactNode, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ArmyContextType, Army, Hero, Unit, UnitTypes, Faction } from "@/types";
import {
  battletomeData,
  genericManifestationLores,
  factionSpecificManifestationLores,
  spellLores,
  prayerLores,
  heroicTraits,
  artifactsOfPower,
  battleFormations,
} from "@/battletomeData";
import { keywords } from "@/constants";

export const ArmyContext = createContext<ArmyContextType>(
  {} as ArmyContextType
);

const ArmyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [army, setArmy] = useState<Army>({ regiments: [], auxiliaryUnits: [] });
  const [faction, setFaction] = useState<string>("");
  const [armyName, setArmyName] = useState<string>("");
  const [savedArmies, setSavedArmies] = useState<Army[]>([]);

  const addNameAndFaction = (armyName: string, faction: Faction) => {
    setArmy({ ...army, armyName, faction });
    setArmyName(armyName);
    setFaction(faction);
  };

  const isArmyNameTaken = (armyName: string): boolean => {
    const savedArmies = JSON.parse(localStorage.getItem("savedArmies") || "[]");
    return savedArmies.some(
      (savedArmy: Army) => savedArmy.armyName === armyName
    );
  };

  const AddNameToArmy = (armyName: string) => {
    setArmyName(armyName);
    setArmy({ ...army, armyName });
  };

  const addFactionToArmy = (faction: Faction) => {
    setArmy({ ...army, faction });
    setFaction(faction);
  };

  const saveArmyToLocalStorage = () => {
    const savedArmies = JSON.parse(localStorage.getItem("savedArmies") || "[]");

    // Check if an army with the same ID already exists
    const armyIndex = savedArmies.findIndex(
      (savedArmy: Army) => savedArmy.armyName === army.armyName
    );

    if (armyIndex !== -1) {
      // Replace the existing army
      savedArmies[armyIndex] = { ...army };
    } else {
      // Add the new army
      const newArmy = { ...army, id: uuidv4() };
      savedArmies.push(newArmy);
    }

    console.log("Saving...");
    localStorage.setItem("savedArmies", JSON.stringify(savedArmies));
  };

  const loadArmyNamesFromLocalStorage = () => {
    const savedArmies = JSON.parse(localStorage.getItem("savedArmies") || "[]");
    setSavedArmies(savedArmies);
  };

  const loadArmyFromLocalStorage = (armyName: string) => {
    const savedArmies = JSON.parse(localStorage.getItem("savedArmies") || "[]");
    const army = savedArmies.find((army: Army) => army.armyName === armyName);
    if (army) {
      setArmy(army);
      setFaction(army?.faction || "");
      setArmyName(army?.armyName || "");
    }
  };

  const removeArmyFromLocalStorage = (armyName: string) => {
    const savedArmies = JSON.parse(localStorage.getItem("savedArmies") || "[]");
    const updatedArmies = savedArmies.filter(
      (savedArmy: Army) => savedArmy.armyName !== armyName
    );
    localStorage.setItem("savedArmies", JSON.stringify(updatedArmies));
    loadArmyNamesFromLocalStorage();
  };

  const availableFactions = Object.keys(battletomeData);

  const factionManifestationLore =
    factionSpecificManifestationLores[
      faction as keyof typeof factionSpecificManifestationLores
    ] || [];

  const availableManifestationLores = [
    ...genericManifestationLores,
    ...factionManifestationLore,
  ];

  const availableHeroicTraits =
    heroicTraits[faction as keyof typeof heroicTraits];

  const availableBattleFormations =
    battleFormations[faction as keyof typeof battleFormations];

  const availableArtifactsOfPower =
    artifactsOfPower[faction as keyof typeof artifactsOfPower];

  const availableSpellLores = spellLores[faction as keyof typeof spellLores];
  const availablePrayerLores = prayerLores[faction as keyof typeof prayerLores];

  const setArmyField = (field: string, value: string | undefined) => {
    setArmy(() => ({ ...army, [field]: value }));
  };

  const setHeroField = (
    regimentId: string,
    key: string,
    value: string | boolean | undefined
  ) => {
    setArmy({
      ...army,
      regiments: army.regiments.map((regiment) => {
        const hero = regiment.hero;
        const updatedHero = hero ? { ...hero, [key]: value } : hero;
        return regiment.id === regimentId
          ? { ...regiment, hero: updatedHero }
          : regiment;
      }),
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

  const spellLoreSelected = army.spellLore;
  const prayerLoreSelected = army.prayerLore;
  const battleFormationSelected = army.battleFormation;
  const manifestationLoreSelected = army.manifestationLore;

  const filterUnitsByFaction = (faction: string): UnitTypes[] => {
    return battletomeData[faction as keyof typeof battletomeData];
  };

  const getAvailableHeroes = (): Hero[] =>
    filterUnitsByFaction(faction).filter((unit) =>
      unit.keywords.includes(keywords.hero)
    ) as Hero[];

  const getAvailableUnits = () =>
    faction
      ? filterUnitsByFaction(faction).filter(
          (unit) => !unit.keywords.includes(keywords.hero)
        )
      : [];

  const getAvailableSubordinateUnits = (
    hero: Hero,
    regimentId: string
  ): UnitTypes[] => {
    const availableUnits = filterUnitsByFaction(faction);
    const regiment = army.regiments.find((r) => r.id === regimentId);

    const subordinateUnits = availableUnits.filter((unit) => {
      const matchingSubordinate = hero?.subordinates?.find(
        (sub) =>
          unit.factionKeywords.some((keyword) => keyword === sub.keyword) &&
          ((sub.hero && unit.keywords.includes(keywords.hero)) ||
            !unit.keywords.includes(keywords.hero))
      );

      if (matchingSubordinate) {
        const isHero = unit.keywords.includes(keywords.hero);
        const isAlreadyIncluded = regiment?.units.some(
          (regimentUnit) => regimentUnit.name === unit.name
        );

        if (matchingSubordinate.max > 0) {
          const countMatchingUnits: number = (regiment?.units ?? []).filter(
            (regimentUnit) =>
              regimentUnit.factionKeywords.some(
                (keyword) => keyword === matchingSubordinate.keyword
              )
          ).length;

          console.log(countMatchingUnits);

          if (isHero) {
            return (
              !isAlreadyIncluded && countMatchingUnits < matchingSubordinate.max
            );
          }

          return countMatchingUnits < matchingSubordinate.max;
        }

        return !isAlreadyIncluded;
      }

      return false;
    });

    return subordinateUnits;
  };

  const addRegiment = () => {
    if (army.regiments.length < 5) {
      setArmy({
        ...army,
        regiments: [...army.regiments, { id: uuidv4(), units: [] }],
      });
    }
  };

  const removeRegiment = (regimentId: string) => {
    setArmy({
      ...army,
      regiments: army.regiments.filter(
        (regiment) => regiment.id !== regimentId
      ),
    });
  };

  const addHero = (regimentId: string, hero: Hero) => {
    const heroWithUniqueId = { ...hero, id: uuidv4() };
    setArmy({
      ...army,
      regiments: army.regiments.map((regiment) =>
        regiment.id === regimentId
          ? { ...regiment, hero: heroWithUniqueId, units: [] }
          : regiment
      ),
    });
  };

  const removeHero = (regimentId: string) => {
    setArmy({
      ...army,
      regiments: army.regiments.map((regiment) =>
        regiment.id === regimentId ? { ...regiment, hero: undefined } : regiment
      ),
    });
  };

  const addUnit = (regimentId: string, unit: Unit) => {
    const unitWithUniqueId = { ...unit, id: uuidv4() };
    setArmy({
      ...army,
      regiments: army.regiments.map((regiment) =>
        regiment.id === regimentId && regiment.hero
          ? { ...regiment, units: [...regiment.units, unitWithUniqueId] }
          : regiment
      ),
    });
  };
  const addAuxUnit = (unit: Unit) => {
    const unitWithUniqueId = { ...unit, id: uuidv4() };
    setArmy({
      ...army,
      auxiliaryUnits: [...army.auxiliaryUnits, unitWithUniqueId],
    });
  };

  const removeAuxUnit = (unitId: string) => {
    setArmy({
      ...army,
      auxiliaryUnits: army.auxiliaryUnits.filter((unit) => unit.id !== unitId),
    });
  };

  const reinforceAuxUnit = (unitId: string, reinforce: boolean) => {
    setArmy({
      ...army,
      auxiliaryUnits: army.auxiliaryUnits.map((unit) => {
        const quantity = reinforce ? unit.quantity * 2 : unit.quantity / 2;
        const cost = reinforce ? unit.cost * 2 : unit.cost / 2;
        return unit.id === unitId
          ? { ...unit, isReinforced: reinforce, quantity, cost }
          : unit;
      }),
    });
  };

  const removeUnit = (regimentId: string, unitId: string) => {
    setArmy({
      ...army,
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

  const reinforceUnit = (
    regimentId: string,
    unitId: string,
    reinforce: boolean
  ) => {
    setArmy({
      ...army,
      regiments: army.regiments.map((regiment) =>
        regiment.id === regimentId
          ? {
              ...regiment,
              units: regiment.units.map((unit) => {
                const quantity = reinforce
                  ? unit.quantity * 2
                  : unit.quantity / 2;
                const cost = reinforce ? unit.cost * 2 : unit.cost / 2;
                return unit.id === unitId
                  ? { ...unit, isReinforced: reinforce, quantity, cost }
                  : unit;
              }),
            }
          : regiment
      ),
    });
  };

  // const saveArmyToLocalStorage = () => {
  //   localStorage.setItem("army", JSON.stringify(army));
  // };

  // const loadArmyFromLocalStorage = () => {
  //   const savedArmy = localStorage.getItem("army");
  //   if (savedArmy) {
  //     setArmy(JSON.parse(savedArmy));
  //   }
  // };

  const totalArmyPoints =
    army.regiments.reduce(
      (acc, regiment) =>
        acc +
        (regiment?.hero?.cost ?? 0) +
        regiment.units.reduce((acc, unit) => acc + unit.cost, 0),
      0
    ) + army.auxiliaryUnits.reduce((acc, unit) => acc + unit.cost, 0);

  console.log(army);

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
        availableBattleFormations,
        availableArtifactsOfPower,
        availableManifestationLores,
        availableSpellLores,
        availablePrayerLores,
        setHeroField,
        isHeroicTraitSelected,
        isGeneralSelected,
        isArtefactOfPowerSelected,
        spellLoreSelected,
        prayerLoreSelected,
        battleFormationSelected,
        manifestationLoreSelected,
        setArmyField,
        totalArmyPoints,
        reinforceUnit,
        getAvailableSubordinateUnits,
        addAuxUnit,
        removeAuxUnit,
        reinforceAuxUnit,
        loadArmyNamesFromLocalStorage,
        armyName,
        AddNameToArmy,
        removeArmyFromLocalStorage,
        savedArmies,
        addFactionToArmy,
        isArmyNameTaken,
        addNameAndFaction,
      }}
    >
      {children}
    </ArmyContext.Provider>
  );
};

export default ArmyProvider;
