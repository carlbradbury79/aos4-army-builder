import React, { useContext } from "react";
import { ArmyContext } from "@/context/armyContext";
import { CloseButton } from "@/app/styles/buttons.style";
import { ArmyTraitWrapper } from "./index.style";

type ArmyTraitTypes = {
  selected: string | undefined;
  label: string;
  armyTerm: string;
  availableSelection: string[];
  faction: string;
};

const ArmyTrait: React.FC<ArmyTraitTypes> = ({
  selected,
  label,
  armyTerm,
  availableSelection,
  faction,
}) => {
  const { setArmyField } = useContext(ArmyContext);
  return (
    <div>
      {selected ? (
        <ArmyTraitWrapper>
          <div>
            {label}: {selected}
          </div>
          <CloseButton onClick={() => setArmyField(armyTerm, undefined)}>
            &#10006;
          </CloseButton>
        </ArmyTraitWrapper>
      ) : (
        <label>
          {label}:
          <select
            value={armyTerm || ""}
            onChange={(e) => setArmyField(armyTerm, e.target.value)}
          >
            <option value="">Select {label}</option>
            {faction &&
              availableSelection.map((spellLore: string) => (
                <option key={spellLore} value={spellLore}>
                  {spellLore}
                </option>
              ))}
          </select>
        </label>
      )}
    </div>
  );
};

export default ArmyTrait;
