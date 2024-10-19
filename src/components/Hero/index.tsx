import React, { useContext, useState } from "react";
import { ArmyContext } from "@/context/armyContext";
import { Hero as HeroType } from "@/types";

const Hero: React.FC<{ regimentId: number; hero?: any }> = ({
  regimentId,
  hero,
}) => {
  const { addHero, removeHero, getAvailableHeroes, setGeneral, isGeneralSet } =
    useContext(ArmyContext);
  const [selectedHeroId, setSelectedHeroId] = useState<number | undefined>(
    undefined
  );

  const availableHeroes = getAvailableHeroes();

  const handleAddHero = () => {
    const selectedHero = availableHeroes.find((h) => h.id === selectedHeroId);
    if (selectedHero) {
      addHero(regimentId, selectedHero);
      setSelectedHeroId(undefined);
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
            value={selectedHeroId}
            onChange={(e) => setSelectedHeroId(Number(e.target.value))}
          >
            <option value="">Select Hero</option>
            {availableHeroes.map((hero: HeroType) => (
              <option key={hero.id} value={hero.id}>
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
