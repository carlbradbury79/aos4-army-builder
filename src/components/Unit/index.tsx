import React, { useContext } from "react";
import { ArmyContext } from "@/context/armyContext";
import { canBeReinforced } from "@/helpers/canBeReinforced";
import { Unit as UnitType } from "@/types";
import { InlineButton, CloseButton } from "@/app/styles/buttons.style";
import { UnitName, UnitClose } from "./index.style";

type UnitProps = {
  unit: UnitType;
  regimentId: string;
};

const Unit: React.FC<UnitProps> = ({ unit, regimentId }) => {
  const { removeUnit, reinforceUnit } = useContext(ArmyContext);
  return (
    <UnitName key={unit.id}>
      <div>
        {unit.quantity} {unit.name}
      </div>
      <UnitClose>
        {canBeReinforced(unit) &&
          (unit.isReinforced ? (
            <InlineButton
              onClick={() => reinforceUnit(regimentId, unit.id, false)}
            >
              &#128100;&#128100;
            </InlineButton>
          ) : (
            <InlineButton
              onClick={() => reinforceUnit(regimentId, unit.id, true)}
            >
              &#128100;
            </InlineButton>
          ))}
        <CloseButton onClick={() => removeUnit(regimentId, unit.id)}>
          &#10006;
        </CloseButton>
      </UnitClose>
    </UnitName>
  );
};

export default Unit;
