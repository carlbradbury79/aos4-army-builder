import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { Army } from "@/types"; // Adjust the import path as necessary
import { ArmyContext } from "@/context/armyContext";

export const useStorage = () => {
  const { army, setArmy, setFaction, setArmyName, setSavedArmies } =
    useContext(ArmyContext);

  const saveArmyToLocalStorage = () => {
    const savedArmies = JSON.parse(localStorage.getItem("savedArmies") || "[]");

    // Check if an army with the same ID already exists
    const armyIndex = savedArmies.findIndex(
      (savedArmy: Army) => savedArmy.armyName === army.armyName
    );

    if (armyIndex !== -1) {
      // Replace the existing army
      savedArmies[armyIndex] = { ...army };
    } else {
      // Add the new army
      const newArmy = { ...army, id: uuidv4() };
      savedArmies.push(newArmy);
    }
    localStorage.setItem("savedArmies", JSON.stringify(savedArmies));
  };

  const loadArmyNamesFromLocalStorage = () => {
    const savedArmies = JSON.parse(localStorage.getItem("savedArmies") || "[]");
    setSavedArmies(savedArmies);
  };

  const loadArmyFromLocalStorage = (armyName: string) => {
    console.log("hook");
    const savedArmies = JSON.parse(localStorage.getItem("savedArmies") || "[]");
    const army = savedArmies.find((army: Army) => army.armyName === armyName);
    if (army) {
      setArmy(army);
      setFaction(army?.faction || "");
      setArmyName(army?.armyName || "");
    }
  };

  const removeArmyFromLocalStorage = (armyName: string) => {
    const savedArmies = JSON.parse(localStorage.getItem("savedArmies") || "[]");
    const updatedArmies = savedArmies.filter(
      (savedArmy: Army) => savedArmy.armyName !== armyName
    );
    localStorage.setItem("savedArmies", JSON.stringify(updatedArmies));
    loadArmyNamesFromLocalStorage();
  };

  return {
    saveArmyToLocalStorage,
    loadArmyFromLocalStorage,
    removeArmyFromLocalStorage,
    loadArmyNamesFromLocalStorage,
  };
};
