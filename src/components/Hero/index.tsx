import React, { useContext } from "react";
import { ArmyContext } from "@/context/armyContext";
import { armyTerms } from "@/constants/generalKeywords";
import { Hero as HeroType } from "@/types";
import { Addon } from "./Addon";
import { SelectAddon } from "./SelectAddon";
import { InlineButton, CloseButton } from "@/app/styles/buttons.style";
import { HeroName, HeroGeneralClose, HeroWrapper } from "./index.style";

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
    <HeroWrapper>
      <h3>Hero</h3>
      <HeroName>
        <div>{hero.name}</div>
        <HeroGeneralClose>
          {hero.isGeneral && (
            <InlineButton
              borderColor="#ff0000"
              onClick={() =>
                setHeroField(regimentId, armyTerms.isGeneral, undefined)
              }
            >
              &#9819;
            </InlineButton>
          )}
          {!hero.isGeneral && !isGeneralSelected && (
            <InlineButton
              onClick={() =>
                setHeroField(regimentId, armyTerms.isGeneral, true)
              }
            >
              &#9819;
            </InlineButton>
          )}
          <CloseButton onClick={() => removeHero(regimentId)}>
            &#10006;
          </CloseButton>
        </HeroGeneralClose>
      </HeroName>
      {canHeroTakeTraitsOrArtefacts && (
        <>
          <h4>Hero Options</h4>
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
    </HeroWrapper>
  );
};

export default Hero;
