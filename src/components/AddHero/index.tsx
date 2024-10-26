import React, { useContext, useState } from "react";
import { ArmyContext } from "@/context/armyContext";
import { Hero as HeroType } from "@/types";

const AddHero: React.FC<{ regimentId: string }> = ({ regimentId }) => {
  const { addHero, getAvailableHeroes } = useContext(ArmyContext);
  const [selectedHeroName, setSelectedHeroName] = useState<string | undefined>(
    undefined
  );
  const handleAddHero = () => {
    const selectedHero = availableHeroes.find(
      (h) => h.name === selectedHeroName
    );
    if (selectedHero) {
      addHero(regimentId, selectedHero);
      setSelectedHeroName(undefined);
    }
  };
  const availableHeroes = getAvailableHeroes();
  return (
    <div>
      <select
        value={selectedHeroName}
        onChange={(e) => setSelectedHeroName(e.target.value)}
      >
        <option value="">Select Hero</option>
        {availableHeroes.map((hero: HeroType) => (
          <option key={hero.name} value={hero.name}>
            {hero.name} {hero.cost}pts
          </option>
        ))}
      </select>
      <button onClick={handleAddHero}>Add Hero</button>
    </div>
  );
};

export default AddHero;
