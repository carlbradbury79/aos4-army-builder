import React, { useContext, useState } from "react";
import { ArmyContext } from "@/context/armyContext";
import { Unit as UnitType } from "@/types";
import { useAvailability } from "@/hooks/useAvailablility";

const AddAuxUnit: React.FC = () => {
  const { getAvailableUnits } = useAvailability();
  const { addAuxUnit } = useContext(ArmyContext);
  const [selectedUnitName, setSelectedUnitName] = useState<string | undefined>(
    undefined
  );

  const availableUnits = getAvailableUnits();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const unitName = e.target.value;
    const selectedUnit = availableUnits.find((u) => u.name === unitName);
    if (selectedUnit) {
      addAuxUnit(selectedUnit);
      setSelectedUnitName(undefined);
    }
  };

  return (
    <div>
      <select value={selectedUnitName ?? ""} onChange={handleSelectChange}>
        <option value="">Select Unit</option>
        {availableUnits &&
          availableUnits.map((unit: UnitType) => (
            <option key={unit.name} value={unit.name}>
              {unit.quantity} {unit.name} - {unit.cost}pts
            </option>
          ))}
      </select>
    </div>
  );
};

export default AddAuxUnit;
