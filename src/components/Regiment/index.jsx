import React, { useContext } from "react";
import { ArmyContext } from "@/context/armyContext";
import Hero from "@/components/Hero";
import AddUnit from "@/components/AddUnit";
import Unit from "@/components/Unit";
import AddHero from "../AddHero";

const Regiment = ({ regiment }) => {
  const { removeRegiment } = useContext(ArmyContext);

  const regimentHasGeneral = regiment?.hero?.isGeneral;
  const regimentCurrentSize = regiment.units.length;
  const regimentMaxSize = regimentHasGeneral ? 4 : 3;
  const canAddUnit = regimentCurrentSize < regimentMaxSize;
  const hasTooManyUnits = regimentCurrentSize > regimentMaxSize;

  return (
    <div>
      <button onClick={() => removeRegiment(regiment.id)}>Remove</button>

      <h2>Regiment</h2>
      {regiment.hero ? (
        <Hero regimentId={regiment.id} hero={regiment.hero} />
      ) : (
        <AddHero regimentId={regiment.id} />
      )}
      {regiment.hero && (
        <div>
          <h3>Units</h3>
          {regiment.units.map((unit) => (
            <Unit key={unit.id} unit={unit} regimentId={regiment.id} />
          ))}
          <AddUnit
            regimentId={regiment.id}
            canAddUnit={canAddUnit}
            hasTooManyUnits={hasTooManyUnits}
            hero={regiment.hero}
          />
        </div>
      )}
    </div>
  );
};

export default Regiment;
