import React, { useContext, useState } from "react";
import { ArmyContext } from "@/context/armyContext";

const ArmyName = () => {
  const { saveArmyToLocalStorage } = useContext(ArmyContext);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    saveArmyToLocalStorage();
    setTimeout(() => {
      setIsSaving(false);
    }, 2000);
  };

  return (
    <div>
      {/* <input
        type="text"
        value={armyName}
        onChange={(e) => AddNameToArmy(e.target.value)}
        placeholder="Enter army name"
      /> */}
      <button onClick={() => handleSave()}>&#128190;</button>
      {isSaving && <span>Saving...</span>}
    </div>
  );
};

export default ArmyName;
