import React, { useContext, useState } from "react";
import { ArmyContext } from "@/context/armyContext";
import { Hero as HeroType } from "@/types";

const Hero: React.FC<{ regimentId: number; hero?: any }> = ({
  regimentId,
  hero,
}) => {
  const { addHero, removeHero, getAvailableHeroes, setGeneral, isGeneralSet } =
    useContext(ArmyContext);
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
          {!hero.isGeneral && !isGeneralSet && (
            <button onClick={() => setGeneral(regimentId)}>
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
