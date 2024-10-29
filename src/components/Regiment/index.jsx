import React, { useContext } from "react";
import { ArmyContext } from "@/context/armyContext";
import Hero from "@/components/Hero";
import AddUnit from "@/components/AddUnit";
import Unit from "@/components/Unit";
import AddHero from "../AddHero";
import { RegimentWrapper, RemoveRegimentButton } from "./index.style";
import { UnitWrapper } from "../Unit/index.style";

const Regiment = ({ regiment }) => {
  const { removeRegiment } = useContext(ArmyContext);

  const regimentHasGeneral = regiment?.hero?.isGeneral;
  const regimentCurrentSize = regiment.units.length;
  const regimentMaxSize = regimentHasGeneral ? 4 : 3;
  const canAddUnit = regimentCurrentSize < regimentMaxSize;
  const hasTooManyUnits = regimentCurrentSize > regimentMaxSize;

  return (
    <RegimentWrapper>
      <RemoveRegimentButton onClick={() => removeRegiment(regiment.id)}>
        &#10006;
      </RemoveRegimentButton>

      <h2>Regiment</h2>
      {regiment.hero ? (
        <Hero regimentId={regiment.id} hero={regiment.hero} />
      ) : (
        <AddHero regimentId={regiment.id} />
      )}
      {regiment.hero && (
        <div>
          <h3>Units</h3>
          <UnitWrapper>
            {regiment.units.map((unit) => (
              <Unit key={unit.id} unit={unit} regimentId={regiment.id} />
            ))}
          </UnitWrapper>
          <AddUnit
            regimentId={regiment.id}
            canAddUnit={canAddUnit}
            hasTooManyUnits={hasTooManyUnits}
            hero={regiment.hero}
          />
        </div>
      )}
    </RegimentWrapper>
  );
};

export default Regiment;
