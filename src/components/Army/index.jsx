import React, { useContext } from "react";
import { ArmyContext } from "../../context/armyContext";
import Regiment from "../Regiment";

const ArmyList = () => {
  const { army, addRegiment, removeRegiment } = useContext(ArmyContext);

  return (
    <div>
      <h1>Army List</h1>
      <button
        onClick={() =>
          addRegiment({ id: Date.now(), name: "New Regiment", units: [] })
        }
      >
        Add regiment
      </button>
      <ul>
        {army.regiments.map((regiment) => (
          <li key={regiment.id}>
            {regiment.name}{" "}
            <button onClick={() => removeRegiment(regiment.id)}>Remove</button>
            <Regiment regiment={regiment} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArmyList;
