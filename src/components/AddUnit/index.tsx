import React, { useContext, useState } from "react";
import { ArmyContext } from "@/context/armyContext";
import { Unit as UnitType, Hero } from "@/types";

const AddUnit: React.FC<{
  regimentId: string;
  canAddUnit: boolean;
  hasTooManyUnits: boolean;
  hero: Hero;
}> = ({ regimentId, canAddUnit, hasTooManyUnits, hero }) => {
  const { addUnit, getAvailableSubordinateUnits } = useContext(ArmyContext);
  const [selectedUnitName, setSelectedUnitName] = useState<string | undefined>(
    undefined
  );

  const availableUnits = getAvailableSubordinateUnits(hero);

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
                {unit.quantity} {unit.name} - {unit.cost}pts
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
