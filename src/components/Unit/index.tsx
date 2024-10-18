import React, { useContext, useState } from "react";
import { ArmyContext } from "@/context/armyContext";
import { Unit as UnitType } from "@/types";

const Unit: React.FC<{
  regimentId: number;
  canAddUnit: boolean;
  hasTooManyUnits: boolean;
}> = ({ regimentId, canAddUnit, hasTooManyUnits }) => {
  const { addUnit, getAvailableUnits } = useContext(ArmyContext);
  const [selectedUnitId, setSelectedUnitId] = useState<number | undefined>(
    undefined
  );

  const availableUnits = getAvailableUnits();

  const handleAddUnit = () => {
    const selectedUnit = availableUnits.find((u) => u.id === selectedUnitId);
    if (selectedUnit) {
      addUnit(regimentId, selectedUnit);
      setSelectedUnitId(undefined);
    }
  };

  return (
    <>
      {canAddUnit && (
        <div>
          <select
            value={selectedUnitId ?? ""}
            onChange={(e) => setSelectedUnitId(Number(e.target.value))}
          >
            <option value="">Select Unit</option>
            {availableUnits.map((unit: UnitType) => (
              <option key={unit.id} value={unit.id}>
                {unit.name}
              </option>
            ))}
          </select>
          <button onClick={handleAddUnit}>Add Unit</button>
        </div>
      )}
      {hasTooManyUnits && <p>Too many units</p>}
    </>
  );
};

export default Unit;
