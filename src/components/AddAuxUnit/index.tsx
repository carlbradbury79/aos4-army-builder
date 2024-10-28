import React, { useContext, useState } from "react";
import { ArmyContext } from "@/context/armyContext";
import { Unit as UnitType } from "@/types";

const AddAuxUnit: React.FC = () => {
  const { addAuxUnit, getAvailableUnits } = useContext(ArmyContext);
  const [selectedUnitName, setSelectedUnitName] = useState<string | undefined>(
    undefined
  );

  const availableUnits = getAvailableUnits();

  const handleAddUnit = () => {
    const selectedUnit = availableUnits.find(
      (u) => u.name === selectedUnitName
    );
    if (selectedUnit) {
      addAuxUnit(selectedUnit);
      setSelectedUnitName(undefined);
    }
  };

  return (
    <div>
      <select
        value={selectedUnitName ?? ""}
        onChange={(e) => setSelectedUnitName(e.target.value)}
      >
        <option value="">Select Unit</option>
        {availableUnits &&
          availableUnits.map((unit: UnitType) => (
            <option key={unit.name} value={unit.name}>
              {unit.quantity} {unit.name} - {unit.cost}pts
            </option>
          ))}
      </select>
      <button onClick={handleAddUnit}>Add Unit</button>
    </div>
  );
};

export default AddAuxUnit;
