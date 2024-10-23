import React, { useContext } from "react";
import { ArmyContext } from "@/context/armyContext";

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
        <div>
          {label}: {selected}{" "}
          <button onClick={() => setArmyField(armyTerm, undefined)}>
            Remove
          </button>
        </div>
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
