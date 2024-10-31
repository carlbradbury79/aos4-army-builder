import React, { useContext } from "react";
import { ArmyContext } from "@/context/armyContext";

export const SelectAddon: React.FC<{
  regimentId: string;
  label: string;
  addonKey: string;
  addonValue: string | undefined;
  availableAddons: string[];
}> = ({ label, regimentId, addonKey, addonValue, availableAddons }) => {
  const { setHeroField } = useContext(ArmyContext);
  return (
    <div>
      <label>
        {label}:
        <select
          value={addonValue}
          onChange={(e) => setHeroField(regimentId, addonKey, e.target.value)}
        >
          <option value="">Select {label}</option>
          {availableAddons.map((trait) => (
            <option key={trait} value={trait}>
              {trait}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};
