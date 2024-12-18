"use client";
import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArmyContext } from "@/context/armyContext";
import Army from "@/components/Army";
import { armyTerms } from "@/constants/generalKeywords";
import ArmyTrait from "@/components/ArmyTrait";
import { PageWrapper } from "../styles/pages.style";
import ArmyName from "@/components/ArmyName";

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
    armyName,
  } = useContext(ArmyContext);
  const router = useRouter();

  useEffect(() => {
    if (!faction) {
      router.push("/");
    }
  }, [faction, router]);

  return (
    <PageWrapper>
      <h1>AOS Army Builder</h1>
      <h2>
        {armyName}: {totalArmyPoints}pts
      </h2>
      {/* Todo allow user to change army name */}
      <ArmyName />
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
      <Army />
      <button onClick={() => router.push("/display")}>View Roster</button>
    </PageWrapper>
  );
};

export default ArmyBuilder;
