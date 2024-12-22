import { Unit as UnitType, Hero } from "@/types";
import { useState } from "react";
import { useAvailability } from "@/hooks/useAvailablility";
import { useUnit } from "@/hooks/useUnit";

const AddUnit: React.FC<{
  regimentId: string;
  canAddUnit: boolean;
  hasTooManyUnits: boolean;
  hero: Hero;
}> = ({ regimentId, canAddUnit, hasTooManyUnits, hero }) => {
  const { getAvailableSubordinateUnits } = useAvailability();
  const { addUnit } = useUnit();
  const [selectedUnitName, setSelectedUnitName] = useState<string | undefined>(
    undefined
  );

  const availableUnits = getAvailableSubordinateUnits(hero, regimentId);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const unitName = e.target.value;
    const selectedUnit = availableUnits.find((u) => u.name === unitName);
    if (selectedUnit) {
      addUnit(regimentId, selectedUnit);
      setSelectedUnitName(undefined);
    }
  };

  return (
    <>
      {canAddUnit && (
        <div>
          <select value={selectedUnitName ?? ""} onChange={handleSelectChange}>
            <option value="">Select Unit</option>
            {availableUnits.map((unit: UnitType) => (
              <option key={unit.name} value={unit.name}>
                {unit.quantity} {unit.name} - {unit.cost}pts
              </option>
            ))}
          </select>
        </div>
      )}
      {hasTooManyUnits && <p>Too many units</p>}
    </>
  );
};

export default AddUnit;
