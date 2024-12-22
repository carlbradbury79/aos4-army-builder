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

  const getAvailableHeroes = (): Hero[] => {
    const uniqueHeroesSelected = army.regiments
      .filter((regiment) => regiment.hero)
      .map((regiment) => regiment.hero!.name);

    return filterUnitsByFaction(faction).filter(
      (unit) =>
        unit.keywords.includes(keywords.hero) &&
        (!unit.keywords.includes("unique") ||
          !uniqueHeroesSelected.includes(unit.name))
    ) as Hero[];
  };

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
      const matchingSubordinates = hero?.subordinates?.filter(
        (sub) =>
          unit.factionKeywords.some((keyword) => keyword === sub.keyword) &&
          ((sub.hero && unit.keywords.includes(keywords.hero)) ||
            !unit.keywords.includes(keywords.hero))
      );

      if (matchingSubordinates && matchingSubordinates.length > 0) {
        return matchingSubordinates.every((subordinate) => {
          const isHero = unit.keywords.includes(keywords.hero);
          const isAlreadyIncluded = regiment?.units.some(
            (regimentUnit) => regimentUnit.name === unit.name
          );

          if (subordinate.max > 0) {
            const countMatchingUnits: number = (regiment?.units ?? []).filter(
              (regimentUnit) =>
                regimentUnit.factionKeywords.some(
                  (keyword) => keyword === subordinate.keyword
                )
            ).length;

            if (isHero) {
              return !isAlreadyIncluded && countMatchingUnits < subordinate.max;
            }

            return countMatchingUnits < subordinate.max;
          }

          // If max is 0, it can be chosen an unlimited number of times
          return !isAlreadyIncluded || subordinate.max === 0;
        });
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

  const totalArmyPoints =
    army.regiments.reduce(
      (acc, regiment) =>
        acc +
        (regiment?.hero?.cost ?? 0) +
        regiment.units.reduce((acc, unit) => acc + unit.cost, 0),
      0
    ) + army.auxiliaryUnits.reduce((acc, unit) => acc + unit.cost, 0);

  return (
    <ArmyContext.Provider
      value={{
        setArmy,
        setSavedArmies,
        setFaction,
        setArmyName,
        army,
        addRegiment,
        removeRegiment,
        addHero,
        removeHero,
        addUnit,
        removeUnit,
        getAvailableHeroes,
        getAvailableUnits,
        faction,
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
        armyName,
        AddNameToArmy,
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
