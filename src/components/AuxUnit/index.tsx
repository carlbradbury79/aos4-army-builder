import React, { useContext } from "react";
import { ArmyContext } from "@/context/armyContext";
import { canBeReinforced } from "@/helpers/canBeReinforced";
import { Unit as UnitType } from "@/types";

type UnitProps = {
  unit: UnitType;
};

const AuxUnit: React.FC<UnitProps> = ({ unit }) => {
  const { removeAuxUnit, reinforceAuxUnit } = useContext(ArmyContext);
  return (
    <div key={unit.id}>
      {unit.quantity} {unit.name} {unit.isReinforced && "(Reinforced)"}{" "}
      {canBeReinforced(unit) &&
        (unit.isReinforced ? (
          <button onClick={() => reinforceAuxUnit(unit.id, false)}>
            Undo reinforce
          </button>
        ) : (
          <button onClick={() => reinforceAuxUnit(unit.id, true)}>
            Reinforce
          </button>
        ))}
      <button onClick={() => removeAuxUnit(unit.id)}>Remove Unit</button>
    </div>
  );
};

export default AuxUnit;
