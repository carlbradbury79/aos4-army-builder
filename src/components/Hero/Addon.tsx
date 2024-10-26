import React, { useContext } from "react";
import { ArmyContext } from "@/context/armyContext";

export const Addon: React.FC<{
  regimentId: string;
  label: string;
  addonKey: string;
  addonValue: string;
}> = ({ label, addonValue, regimentId, addonKey }) => {
  const { setHeroField } = useContext(ArmyContext);
  return (
    <div>
      {label}: {addonValue}
      <button onClick={() => setHeroField(regimentId, addonKey, undefined)}>
        Remove
      </button>
    </div>
  );
};
