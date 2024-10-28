import React, { useContext } from "react";
import { ArmyContext } from "../../context/armyContext";
import Regiment from "../Regiment";
import AddAuxUnit from "../AddAuxUnit";
import AuxUnit from "../AuxUnit";

const ArmyList = () => {
  const { army, addRegiment } = useContext(ArmyContext);

  return (
    <div>
      <h1>Army List</h1>
      <button onClick={() => addRegiment()}>Add regiment</button>
      <div>
        {army.regiments.map((regiment) => (
          <Regiment regiment={regiment} key={regiment.id} />
        ))}
      </div>
      <div>
        <h2>Auxillary Units</h2>
        <AddAuxUnit />
        {army.auxiliaryUnits &&
          army.auxiliaryUnits.map((unit) => (
            <AuxUnit key={unit.id} unit={unit} />
          ))}
      </div>
    </div>
  );
};

export default ArmyList;
