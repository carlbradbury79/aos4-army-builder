import { useContext, useState } from "react";
import { ArmyContext } from "@/context/armyContext";
import { Hero as HeroType } from "@/types";

const AddHero: React.FC<{ regimentId: string }> = ({ regimentId }) => {
  const { addHero, getAvailableHeroes } = useContext(ArmyContext);
  const [selectedHeroName, setSelectedHeroName] = useState<string | undefined>(
    undefined
  );

  const availableHeroes = getAvailableHeroes();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const heroName = e.target.value;
    const selectedHero = availableHeroes.find((h) => h.name === heroName);
    if (selectedHero) {
      addHero(regimentId, selectedHero);
      setSelectedHeroName(undefined);
    }
  };

  return (
    <div>
      <select value={selectedHeroName ?? ""} onChange={handleSelectChange}>
        <option value="">Select Hero</option>
        {availableHeroes.map((hero: HeroType) => (
          <option key={hero.name} value={hero.name}>
            {hero.name} {hero.cost}pts
          </option>
        ))}
      </select>
    </div>
  );
};

export default AddHero;
