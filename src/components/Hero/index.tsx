import React, { useContext, useState } from "react";
import { ArmyContext } from "@/context/armyContext";
import { Hero as HeroType } from "@/types";
import { armyTerms } from "@/constants/generalKeywords";

const Hero: React.FC<{ regimentId: number; hero?: any }> = ({
  regimentId,
  hero,
}) => {
  const {
    addHero,
    removeHero,
    getAvailableHeroes,
    setHeroField,
    removeHeroField,
    isGeneralSelected,
  } = useContext(ArmyContext);
  const [selectedHeroName, setSelectedHeroName] = useState<string | undefined>(
    undefined
  );

  const availableHeroes = getAvailableHeroes();

  const handleAddHero = () => {
    const selectedHero = availableHeroes.find(
      (h) => h.name === selectedHeroName
    );
    if (selectedHero) {
      addHero(regimentId, selectedHero);
      setSelectedHeroName(undefined);
    }
  };

  return (
    <div>
      <h3>Hero</h3>
      {hero ? (
        <div>
          {hero.name} {hero.isGeneral && "(General)"}
          <button onClick={() => removeHero(regimentId)}>Remove Hero</button>
          {hero.isGeneral && (
            <button
              onClick={() => removeHeroField(regimentId, armyTerms.isGeneral)}
            >
              Remove General
            </button>
          )}
          {!hero.isGeneral && !isGeneralSelected && (
            <button
              onClick={() =>
                setHeroField(regimentId, armyTerms.isGeneral, true)
              }
            >
              Set as General
            </button>
          )}
        </div>
      ) : (
        <div>
          <select
            value={selectedHeroName}
            onChange={(e) => setSelectedHeroName(e.target.value)}
          >
            <option value="">Select Hero</option>
            {availableHeroes.map((hero: HeroType) => (
              <option key={hero.name} value={hero.name}>
                {hero.name}
              </option>
            ))}
          </select>
          <button onClick={handleAddHero}>Add Hero</button>
        </div>
      )}
    </div>
  );
};

export default Hero;
