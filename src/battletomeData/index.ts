import {
  skaven,
  skavenManifestationLore,
  spellLores as skavenSpellLores,
  prayerLores as skavenPrayerLores,
  heroicTraits as skavenHeroicTraits,
  artifactsOfPower as skavenArtifactsOfPower,
  battleFormations as skavenBattleFormations,
} from "./skaven";
import {
  stormcast,
  stormcastManifestationLore,
  spellLores as stormcastSpellLores,
  prayerLores as stormcastPrayerLores,
  heroicTraits as stormcastHeroicTraits,
  artifactsOfPower as stormcastArtifactsOfPower,
  battleFormations as stormcastBattleFormations,
} from "./stormcast";
import { genericManifestationLores as generic } from "./generic";

export const battletomeData = { skaven, stormcast };

export const genericManifestationLores = generic;
export const factionSpecificManifestationLores = {
  skaven: skavenManifestationLore,
  stormcast: stormcastManifestationLore,
};

export const spellLores = {
  skaven: skavenSpellLores,
  stormcast: stormcastSpellLores,
};

export const prayerLores = {
  skaven: skavenPrayerLores,
  stormcast: stormcastPrayerLores,
};

export const heroicTraits = {
  skaven: skavenHeroicTraits,
  stormcast: stormcastHeroicTraits,
};

export const artifactsOfPower = {
  skaven: skavenArtifactsOfPower,
  stormcast: stormcastArtifactsOfPower,
};

export const battleFormations = {
  skaven: skavenBattleFormations,
  stormcast: stormcastBattleFormations,
};
