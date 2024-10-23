import React, { useContext } from "react";
import { ArmyContext } from "@/context/armyContext";
import { canBeReinforced } from "@/helpers/canBeReinforced";
import { Unit as UnitType } from "@/types";

type UnitProps = {
  unit: UnitType;
  regimentId: string;
};

const Unit: React.FC<UnitProps> = ({ unit, regimentId }) => {
  const { removeUnit, reinforceUnit } = useContext(ArmyContext);
  return (
    <div key={unit.id}>
      {unit.quantity} {unit.name} {unit.isReinforced && "(Reinforced)"}{" "}
      {canBeReinforced(unit) &&
        (unit.isReinforced ? (
          <button onClick={() => reinforceUnit(regimentId, unit.id, false)}>
            Undo reinforce
          </button>
        ) : (
          <button onClick={() => reinforceUnit(regimentId, unit.id, true)}>
            Reinforce
          </button>
        ))}
      <button onClick={() => removeUnit(regimentId, unit.id)}>
        Remove Unit
      </button>
    </div>
  );
};

export default Unit;
