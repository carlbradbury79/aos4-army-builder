import React, { useContext } from "react";
import { ArmyContext } from "@/context/armyContext";
import Hero from "@/components/Hero";
import Unit from "@/components/Unit";

const Regiment = ({ regiment }) => {
  const { removeUnit } = useContext(ArmyContext);

  const regimentHasGeneral = regiment?.hero?.isGeneral;
  const regimentCurrentSize = regiment.units.length;
  const regimentMaxSize = regimentHasGeneral ? 4 : 3;
  const canAddUnit = regimentCurrentSize < regimentMaxSize;
  const hasTooManyUnits = regimentCurrentSize > regimentMaxSize;

  return (
    <div>
      <h2>Regiment {regiment.id}</h2>
      <Hero regimentId={regiment.id} hero={regiment.hero} />
      {regiment.hero && (
        <div>
          <h3>Units</h3>
          {regiment.units.map((unit) => (
            <div key={unit.id}>
              {unit.name}
              <button onClick={() => removeUnit(regiment.id, unit.id)}>
                Remove Unit
              </button>
            </div>
          ))}
          <Unit
            regimentId={regiment.id}
            canAddUnit={canAddUnit}
            hasTooManyUnits={hasTooManyUnits}
          />
        </div>
      )}
    </div>
  );
};

export default Regiment;
