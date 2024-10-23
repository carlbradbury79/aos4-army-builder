import React, { useContext, useState } from "react";
import { ArmyContext } from "@/context/armyContext";
import { Unit as UnitType } from "@/types";

const AddUnit: React.FC<{
  regimentId: string;
  canAddUnit: boolean;
  hasTooManyUnits: boolean;
}> = ({ regimentId, canAddUnit, hasTooManyUnits }) => {
  const { addUnit, getAvailableUnits } = useContext(ArmyContext);
  const [selectedUnitName, setSelectedUnitName] = useState<string | undefined>(
    undefined
  );

  const availableUnits = getAvailableUnits();

  const handleAddUnit = () => {
    const selectedUnit = availableUnits.find(
      (u) => u.name === selectedUnitName
    );
    if (selectedUnit) {
      addUnit(regimentId, selectedUnit);
      setSelectedUnitName(undefined);
    }
  };

  return (
    <>
      {canAddUnit && (
        <div>
          <select
            value={selectedUnitName ?? ""}
            onChange={(e) => setSelectedUnitName(e.target.value)}
          >
            <option value="">Select Unit</option>
            {availableUnits.map((unit: UnitType) => (
              <option key={unit.name} value={unit.name}>
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

export default AddUnit;
