import React, { useContext } from "react";
import { ArmyContext } from "@/context/armyContext";

const ArmyName = () => {
  const { saveArmyToLocalStorage } = useContext(ArmyContext);

  return (
    <div>
      {/* <input
        type="text"
        value={armyName}
        onChange={(e) => AddNameToArmy(e.target.value)}
        placeholder="Enter army name"
      /> */}
      <button onClick={saveArmyToLocalStorage}>Save Army</button>
    </div>
  );
};

export default ArmyName;
