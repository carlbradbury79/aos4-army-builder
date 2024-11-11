import React, { useContext } from "react";
import { ArmyContext } from "@/context/armyContext";
import { CloseButton } from "@/app/styles/buttons.style";
import { AddonWrapper } from "./index.style";

export const Addon: React.FC<{
  regimentId: string;
  label: string;
  addonKey: string;
  addonValue: string;
}> = ({ label, addonValue, regimentId, addonKey }) => {
  const { setHeroField } = useContext(ArmyContext);
  return (
    <AddonWrapper>
      <div>
        {label}: {addonValue}
      </div>
      <CloseButton
        onClick={() => setHeroField(regimentId, addonKey, undefined)}
      >
        &#10006;
      </CloseButton>
    </AddonWrapper>
  );
};
