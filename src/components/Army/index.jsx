import React, { useContext } from "react";
import { ArmyContext } from "../../context/armyContext";
import Regiment from "../Regiment";
import AddAuxUnit from "../AddAuxUnit";
import AuxUnit from "../AuxUnit";
import { AddRegimentButton, ArmyWrapper } from "./index.style";

const ArmyList = () => {
  const { army, addRegiment } = useContext(ArmyContext);

  return (
    <ArmyWrapper>
      <h2>Regiments</h2>
      {army.regiments.length < 5 && (
        <AddRegimentButton onClick={() => addRegiment()}>
          &#43;
        </AddRegimentButton>
      )}
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
    </ArmyWrapper>
  );
};

export default ArmyList;
