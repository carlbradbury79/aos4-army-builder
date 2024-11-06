"use client";
import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArmyContext } from "@/context/armyContext";
import { PageWrapper } from "./styles/pages.style";
import { Army, Faction } from "@/types";

const Home: React.FC = () => {
  const [selectedFaction, setSelectedFaction] = useState<Faction>();
  const {
    addFactionToArmy,
    availableFactions,
    loadArmyNamesFromLocalStorage,
    removeArmyFromLocalStorage,
    loadArmyFromLocalStorage,
    savedArmies,
  } = useContext(ArmyContext);
  const router = useRouter();

  const armyNames = savedArmies.map((army: Army) => army.armyName);

  useEffect(() => {
    loadArmyNamesFromLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRaceSelection = () => {
    if (selectedFaction) {
      addFactionToArmy(selectedFaction);
      router.push(`/roster`);
    }
  };

  return (
    <PageWrapper>
      <h1>Select a Race</h1>
      <select
        value={selectedFaction}
        onChange={(e) => setSelectedFaction(e.target.value as Faction)}
      >
        <option value="">Select Race</option>
        {availableFactions.map((faction) => (
          <option key={faction} value={faction}>
            {faction}
          </option>
        ))}
      </select>
      <button onClick={() => handleRaceSelection()}>Select Race</button>
      <h2>Load Army</h2>
      {armyNames.length === 0 && <p>No armies saved</p>}
      <div>
        {armyNames.map((name, index) => (
          <div key={index}>
            {name}{" "}
            <button onClick={() => name && removeArmyFromLocalStorage(name)}>
              Remove
            </button>
            <button
              onClick={() => {
                if (name) {
                  loadArmyFromLocalStorage(name);
                  router.push(`/roster`);
                }
              }}
            >
              Load
            </button>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Home;
