"use client";
import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { ArmyContext } from "@/context/armyContext";
import { PageWrapper } from "./styles/pages.style";

const Home: React.FC = () => {
  const [selectedFaction, setSelectedFaction] = useState<string>("");
  const { setFaction, availableFactions } = useContext(ArmyContext);
  const router = useRouter();

  const handleRaceSelection = () => {
    if (selectedFaction) {
      setFaction(selectedFaction);
      router.push(`/roster`);
    }
  };

  return (
    <PageWrapper>
      <h1>Select a Race</h1>
      <select
        value={selectedFaction}
        onChange={(e) => setSelectedFaction(e.target.value)}
      >
        <option value="">Select Race</option>
        {availableFactions.map((faction) => (
          <option key={faction} value={faction}>
            {faction}
          </option>
        ))}
      </select>
      <button onClick={handleRaceSelection}>Select Race</button>
    </PageWrapper>
  );
};

export default Home;
