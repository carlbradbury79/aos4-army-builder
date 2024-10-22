"use client";
import React, { use, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArmyContext } from "@/context/armyContext";
import Army from "@/components/Army";
import { armyTerms } from "@/constants/generalKeywords";

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
    setArmyField,
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
      <div>
        {spellLoreSelected ? (
          <div>
            Spell Lore: {spellLoreSelected}{" "}
            <button
              onClick={() => setArmyField(armyTerms.spellLore, undefined)}
            >
              Remove
            </button>
          </div>
        ) : (
          <label>
            Spell Lore:
            <select
              value={armyTerms.spellLore || ""}
              onChange={(e) =>
                setArmyField(armyTerms.spellLore, e.target.value)
              }
            >
              <option value="">Select Spell Lore</option>
              {faction &&
                availableSpellLores.map((spellLore: string) => (
                  <option key={spellLore} value={spellLore}>
                    {spellLore}
                  </option>
                ))}
            </select>
          </label>
        )}
      </div>
      <div>
        {prayerLoreSelected ? (
          <div>
            Spell Lore: {prayerLoreSelected}{" "}
            <button
              onClick={() => setArmyField(armyTerms.prayerLore, undefined)}
            >
              Remove
            </button>
          </div>
        ) : (
          <label>
            Prayer Lore:
            <select
              value={armyTerms.prayerLore || ""}
              onChange={(e) =>
                setArmyField(armyTerms.prayerLore, e.target.value)
              }
            >
              <option value="">Select Prayer Lore</option>
              {faction &&
                availablePrayerLores.map((prayerLore: string) => (
                  <option key={prayerLore} value={prayerLore}>
                    {prayerLore}
                  </option>
                ))}
            </select>
          </label>
        )}
      </div>
      <div>
        {battleFormationSelected ? (
          <div>
            Battle Formation: {battleFormationSelected}{" "}
            <button
              onClick={() => setArmyField(armyTerms.battleFormation, undefined)}
            >
              Remove
            </button>
          </div>
        ) : (
          <label>
            Battle Formation:
            <select
              value={armyTerms.battleFormation || ""}
              onChange={(e) =>
                setArmyField(armyTerms.battleFormation, e.target.value)
              }
            >
              <option value="">Select Battle Formation</option>
              {faction &&
                availableBattleFormations.map((battleFormation: string) => (
                  <option key={battleFormation} value={battleFormation}>
                    {battleFormation}
                  </option>
                ))}
            </select>
          </label>
        )}
      </div>
      <div>
        {manifestationLoreSelected ? (
          <div>
            Manifestation Lore: {manifestationLoreSelected}{" "}
            <button
              onClick={() =>
                setArmyField(armyTerms.manifestationLore, undefined)
              }
            >
              Remove
            </button>
          </div>
        ) : (
          <label>
            Manifestation Lore:
            <select
              value={armyTerms.manifestationLore || ""}
              onChange={(e) =>
                setArmyField(armyTerms.manifestationLore, e.target.value)
              }
            >
              <option value="">Select Manifestation Lore</option>
              {faction &&
                availableManifestationLores.map((manifestationLore: string) => (
                  <option key={manifestationLore} value={manifestationLore}>
                    {manifestationLore}
                  </option>
                ))}
            </select>
          </label>
        )}
      </div>
      <Army />
    </div>
  );
};

export default ArmyBuilder;
