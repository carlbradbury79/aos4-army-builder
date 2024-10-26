import React, { useContext } from "react";
import { ArmyContext } from "@/context/armyContext";
import { armyTerms } from "@/constants/generalKeywords";
import { Hero as HeroType } from "@/types";
import { Addon } from "./Addon";
import { SelectAddon } from "./SelectAddon";

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
              <Addon
                label="Heroic Trait"
                addonKey={armyTerms.heroicTrait}
                addonValue={hero.heroicTrait}
                regimentId={regimentId}
              />
            )}
            {!isHeroicTraitSelected && (
              <SelectAddon
                label="Heroic Trait"
                addonKey={armyTerms.heroicTrait}
                addonValue={hero.heroicTrait}
                regimentId={regimentId}
                availableAddons={availableHeroicTraits}
              />
            )}
          </div>
          {hero.artefactOfPower && (
            <Addon
              label="Artefact of Power"
              addonKey={armyTerms.artefactOfPower}
              addonValue={hero.artefactOfPower}
              regimentId={regimentId}
            />
          )}
          <div>
            {!isArtefactOfPowerSelected && (
              <SelectAddon
                label="Artefact of Power"
                addonKey={armyTerms.artefactOfPower}
                addonValue={hero.artefactOfPower}
                regimentId={regimentId}
                availableAddons={availableArtifactsOfPower}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
