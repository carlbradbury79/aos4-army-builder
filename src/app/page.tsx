"use client";
import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArmyContext } from "@/context/armyContext";
import { PageWrapper } from "./styles/pages.style";
import { Army, Faction } from "@/types";
import { useStorage } from "@/hooks/useStorage";

const Home: React.FC = () => {
  const [selectedFaction, setSelectedFaction] = useState<Faction>();
  const [localArmyName, setLocalArmyName] = useState<string>("");
  const [armyNameTaken, setArmyNameTaken] = useState<boolean>(false);
  const { availableFactions, savedArmies, isArmyNameTaken, addNameAndFaction } =
    useContext(ArmyContext);
  const router = useRouter();
  const {
    loadArmyFromLocalStorage,
    removeArmyFromLocalStorage,
    loadArmyNamesFromLocalStorage,
  } = useStorage();

  const armyNames = savedArmies.map((army: Army) => army.armyName);

  useEffect(() => {
    loadArmyNamesFromLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const nameTaken = isArmyNameTaken(localArmyName);
    setArmyNameTaken(nameTaken);
  }, [localArmyName, isArmyNameTaken]);

  const handleRaceSelection = () => {
    if (selectedFaction && localArmyName && !armyNameTaken) {
      addNameAndFaction(localArmyName, selectedFaction);
      router.push(`/roster`);
    }
  };

  return (
    <PageWrapper>
      <h1>AOS Army Builder</h1>
      <h2>Create new army</h2>
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

      {selectedFaction && (
        <input
          type="text"
          value={localArmyName}
          onChange={(e) => setLocalArmyName(e.target.value)}
          placeholder="Enter army name"
        />
      )}

      {selectedFaction && !!localArmyName && !armyNameTaken && (
        <button
          disabled={!selectedFaction || !localArmyName || armyNameTaken}
          onClick={() => handleRaceSelection()}
        >
          Select Race
        </button>
      )}

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
