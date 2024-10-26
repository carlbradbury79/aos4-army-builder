import React, { useContext } from "react";
import { ArmyContext } from "@/context/armyContext";
import { armyTerms } from "@/constants/generalKeywords";
import { Hero as HeroType } from "@/types";

const Hero: React.FC<{ regimentId: string; hero: HeroType }> = ({
  regimentId,
  hero,
}) => {
  const {
    removeHero,
    setHeroField,
    isGeneralSelected,
    isHeroicTraitSelected,
    availableHeroicTraits,
    isArtefactOfPowerSelected,
    availableArtifactsOfPower,
  } = useContext(ArmyContext);

  const canHeroTakeTraitsOrArtefacts = !hero?.keywords?.includes("unique");

  return (
    <div>
      <h3>Hero</h3>
      <div>
        {hero.name} {hero.isGeneral && "(General)"}
        <button onClick={() => removeHero(regimentId)}>Remove Hero</button>
        {hero.isGeneral && (
          <button
            onClick={() =>
              setHeroField(regimentId, armyTerms.isGeneral, undefined)
            }
          >
            Remove General
          </button>
        )}
        {!hero.isGeneral && !isGeneralSelected && (
          <button
            onClick={() => setHeroField(regimentId, armyTerms.isGeneral, true)}
          >
            Set as General
          </button>
        )}
      </div>
      <h3>Hero Options</h3>
      {canHeroTakeTraitsOrArtefacts && (
        <>
          <div>
            {hero.heroicTrait && (
              <div>
                Heroic Trait: {hero.heroicTrait}
                <button
                  onClick={() =>
                    setHeroField(regimentId, armyTerms.heroicTrait, undefined)
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
                  value={hero.heroicTrait}
                  onChange={(e) =>
                    setHeroField(
                      regimentId,
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
          {hero.artefactOfPower && (
            <div>
              Artefact of Power: {hero.artefactOfPower}
              <button
                onClick={() =>
                  setHeroField(regimentId, armyTerms.artefactOfPower, undefined)
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
                  value={hero.artefactOfPower}
                  onChange={(e) =>
                    setHeroField(
                      regimentId,
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
    </div>
  );
};

export default Hero;
