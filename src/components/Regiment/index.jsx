import React, { useContext } from "react";
import { ArmyContext } from "@/context/armyContext";
import Hero from "@/components/Hero";
import Unit from "@/components/Unit";
import { armyTerms } from "@/constants/generalKeywords";
import { canBeReinforced } from "@/helpers/canBeReinforced";

const Regiment = ({ regiment }) => {
  const {
    removeUnit,
    availableHeroicTraits,
    availableArtifactsOfPower,
    setHeroField,
    isHeroicTraitSelected,
    removeHeroField,
    isArtefactOfPowerSelected,
    reinforceUnit,
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
              {regiment.hero.artefactOfPower && (
                <div>
                  Artefact of Power: {regiment.hero.artefactOfPower}
                  <button
                    onClick={() =>
                      removeHeroField(regiment.id, armyTerms.artefactOfPower)
                    }
                  >
                    Remove
                  </button>
                </div>
              )}
              <div>
                {!isArtefactOfPowerSelected && (
                  <label>
                    Artefact of Power:
                    <select
                      value={regiment.hero.artefactOfPower || ""}
                      onChange={(e) =>
                        setHeroField(
                          regiment.id,
                          armyTerms.artefactOfPower,
                          e.target.value
                        )
                      }
                    >
                      <option value="">Select Artefact of Power</option>
                      {availableArtifactsOfPower.map((artefact) => (
                        <option key={artefact} value={artefact}>
                          {artefact}
                        </option>
                      ))}
                    </select>
                  </label>
                )}
              </div>
            </>
          )}
          <h3>Units</h3>
          {regiment.units.map((unit) => (
            <div key={unit.id}>
              {unit.quantity} {unit.name} {unit.isReinforced && "(Reinforced)"}{" "}
              {canBeReinforced(unit) &&
                (unit.isReinforced ? (
                  <button
                    onClick={() => reinforceUnit(regiment.id, unit.id, false)}
                  >
                    Undo reinforce
                  </button>
                ) : (
                  <button
                    onClick={() => reinforceUnit(regiment.id, unit.id, true)}
                  >
                    Reinforce
                  </button>
                ))}
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
