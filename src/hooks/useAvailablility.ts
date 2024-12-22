import { useContext } from "react";
import { Hero, UnitTypes } from "@/types";
import { ArmyContext } from "@/context/armyContext";
import { battletomeData } from "@/battletomeData";
import { keywords } from "@/constants";

export const useAvailability = () => {
  const { army, faction } = useContext(ArmyContext);

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

  return {
    getAvailableHeroes,
    getAvailableUnits,
    getAvailableSubordinateUnits,
  };
};
