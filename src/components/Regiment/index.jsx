import React, { useContext } from "react";
import { ArmyContext } from "@/context/armyContext";
import Hero from "@/components/Hero";
import Unit from "@/components/Unit";
import { armyTerms } from "@/constants/generalKeywords";

const Regiment = ({ regiment }) => {
  const {
    removeUnit,
    availableHeroicTraits,
    setHeroField,
    isHeroicTraitSelected,
    removeHeroField,
  } = useContext(ArmyContext);

  const regimentHasGeneral = regiment?.hero?.isGeneral;
  const regimentCurrentSize = regiment.units.length;
  const regimentMaxSize = regimentHasGeneral ? 4 : 3;
  const canAddUnit = regimentCurrentSize < regimentMaxSize;
  const hasTooManyUnits = regimentCurrentSize > regimentMaxSize;
  const canHeroTakeTraitsOrArtefacts =
    regiment.hero && !regiment?.hero?.keywords?.includes("unique");

  return (
    <div>
      <h2>Regiment {regiment.id}</h2>
      <Hero regimentId={regiment.id} hero={regiment.hero} />
      {regiment.hero && (
        <div>
          <h3>Hero Options</h3>
          {canHeroTakeTraitsOrArtefacts && (
            <>
              <div>
                {regiment.hero.heroicTrait && (
                  <div>
                    Heroic Trait: {regiment.hero.heroicTrait}
                    <button
                      onClick={() =>
                        removeHeroField(regiment.id, armyTerms.heroicTrait)
                      }
                    >
                      Remove
                    </button>
                  </div>
                )}
                {!isHeroicTraitSelected && (
                  <label>
                    Heroic Trait:
                    <select
                      value={regiment.hero.heroicTrait || ""}
                      onChange={(e) =>
                        setHeroField(
                          regiment.id,
                          armyTerms.heroicTrait,
                          e.target.value
                        )
                      }
                    >
                      <option value="">Select Heroic Trait</option>
                      {availableHeroicTraits.map((trait) => (
                        <option key={trait} value={trait}>
                          {trait}
                        </option>
                      ))}
                    </select>
                  </label>
                )}
              </div>
              <div>
                <label>
                  Artefact of Power:
                  <select
                    value={regiment.hero.artefactOfPower || ""}
                    onChange={(e) =>
                      setArtefactOfPower(regiment.id, e.target.value)
                    }
                  >
                    <option value="">Select Artefact of Power</option>
                    {/* Add artefact of power options here */}
                  </select>
                </label>
              </div>
            </>
          )}
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
