import React, { useContext } from "react";
import { ArmyContext } from "@/context/armyContext";
import { canBeReinforced } from "@/helpers/canBeReinforced";
import { Unit as UnitType } from "@/types";
import { InlineButton, CloseButton } from "@/app/styles/buttons.style";
import { UnitName, UnitClose } from "../Unit/index.style";

type UnitProps = {
  unit: UnitType;
};

const AuxUnit: React.FC<UnitProps> = ({ unit }) => {
  const { removeAuxUnit, reinforceAuxUnit } = useContext(ArmyContext);
  return (
    <UnitName key={unit.id}>
      <div>
        {unit.quantity} {unit.name} {unit.isReinforced && "(Reinforced)"}{" "}
      </div>
      <UnitClose>
        {canBeReinforced(unit) &&
          (unit.isReinforced ? (
            <InlineButton onClick={() => reinforceAuxUnit(unit.id, false)}>
              &#128100;&#128100;
            </InlineButton>
          ) : (
            <InlineButton onClick={() => reinforceAuxUnit(unit.id, true)}>
              &#128100;
            </InlineButton>
          ))}
        <CloseButton onClick={() => removeAuxUnit(unit.id)}>
          &#10006;
        </CloseButton>
      </UnitClose>
    </UnitName>
  );
};

export default AuxUnit;
