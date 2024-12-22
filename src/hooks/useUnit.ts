import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { Unit } from "@/types"; // Adjust the import path as necessary
import { ArmyContext } from "@/context/armyContext";

export const useUnit = () => {
  const { army, setArmy } = useContext(ArmyContext);

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

  return { addUnit, removeUnit, reinforceUnit };
};
