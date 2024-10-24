import React, { useContext } from "react";
import { ArmyContext } from "../../context/armyContext";
import Regiment from "../Regiment";

const ArmyList = () => {
  const { army, addRegiment, removeRegiment } = useContext(ArmyContext);

  return (
    <div>
      <h1>Army List</h1>
      <button onClick={() => addRegiment()}>Add regiment</button>
      <div>
        {army.regiments.map((regiment) => (
          <Regiment regiment={regiment} key={regiment.id} />
        ))}
      </div>
    </div>
  );
};

export default ArmyList;
