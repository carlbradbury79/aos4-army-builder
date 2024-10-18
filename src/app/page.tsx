"use client";
import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { ArmyContext } from "@/context/armyContext";

const Home: React.FC = () => {
  const [selectedFaction, setSelectedFaction] = useState<string>("");
  const { loadArmyFromLocalStorage, setFaction } = useContext(ArmyContext);
  const router = useRouter();

  const handleRaceSelection = () => {
    if (selectedFaction) {
      setFaction(selectedFaction);
      router.push(`/roster`);
    }
  };

  const handleLoadArmy = () => {
    loadArmyFromLocalStorage();
    router.push("/roster");
  };

  return (
    <div>
      <h1>Select a Race or Load an Army</h1>
      <select
        value={selectedFaction}
        onChange={(e) => setSelectedFaction(e.target.value)}
      >
        <option value="">Select Race</option>
        <option value="race1">Race 1</option>
        <option value="race2">Race 2</option>
        {/* Add more races as needed */}
      </select>
      <button onClick={handleRaceSelection}>Select Race</button>
      <button onClick={handleLoadArmy}>Load Army</button>
    </div>
  );
};

export default Home;
