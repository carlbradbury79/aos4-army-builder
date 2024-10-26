"use client";
import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArmyContext } from "@/context/armyContext";
import Army from "@/components/Army";
import { armyTerms } from "@/constants/generalKeywords";
import ArmyTrait from "@/components/ArmyTrait";

const ArmyBuilder: React.FC = () => {
  const {
    faction,
    availableBattleFormations,
    availablePrayerLores,
    availableSpellLores,
    availableManifestationLores,
    battleFormationSelected,
    prayerLoreSelected,
    spellLoreSelected,
    manifestationLoreSelected,
    totalArmyPoints,
  } = useContext(ArmyContext);
  const router = useRouter();

  useEffect(() => {
    if (!faction) {
      router.push("/");
    }
  }, [faction, router]);

  return (
    <div>
      <h1>Army Builder</h1>
      <ArmyTrait
        selected={spellLoreSelected}
        label="Spell Lore"
        armyTerm={armyTerms.spellLore}
        availableSelection={availableSpellLores}
        faction={faction}
      />
      <ArmyTrait
        selected={prayerLoreSelected}
        label="Prayer Lore"
        armyTerm={armyTerms.prayerLore}
        availableSelection={availablePrayerLores}
        faction={faction}
      />
      <ArmyTrait
        selected={battleFormationSelected}
        label="Battle Formation"
        armyTerm={armyTerms.battleFormation}
        availableSelection={availableBattleFormations}
        faction={faction}
      />
      <ArmyTrait
        selected={manifestationLoreSelected}
        label="Manifestation Lore"
        armyTerm={armyTerms.manifestationLore}
        availableSelection={availableManifestationLores}
        faction={faction}
      />
      <div>Points: {totalArmyPoints}</div>
      <Army />
    </div>
  );
};

export default ArmyBuilder;
