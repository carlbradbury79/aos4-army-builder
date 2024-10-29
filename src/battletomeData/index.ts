import {
  skavenBattleProfiles as skaven,
  manifestationLore as skavenManifestationLore,
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
import {
  soulblightBattleProfiles as soulblightGravelords,
  manifestationLore as soulblightManifestationLore,
  spellLores as soulblightSpellLores,
  prayerLores as soulblightPrayerLores,
  heroicTraits as soulblightHeroicTraits,
  artifactsOfPower as soulblightArtifactsOfPower,
  battleFormations as soulblightBattleFormations,
} from "./soulblightGravelords";
import { genericManifestationLores as generic } from "./generic";

export const battletomeData = { skaven, stormcast, soulblightGravelords };

export const genericManifestationLores = generic;
export const factionSpecificManifestationLores = {
  skaven: skavenManifestationLore,
  stormcast: stormcastManifestationLore,
  soulblightGravelords: soulblightManifestationLore,
};

export const spellLores = {
  skaven: skavenSpellLores,
  stormcast: stormcastSpellLores,
  soulblightGravelords: soulblightSpellLores,
};

export const prayerLores = {
  skaven: skavenPrayerLores,
  stormcast: stormcastPrayerLores,
  soulblightGravelords: soulblightPrayerLores,
};

export const heroicTraits = {
  skaven: skavenHeroicTraits,
  stormcast: stormcastHeroicTraits,
  soulblightGravelords: soulblightHeroicTraits,
};

export const artifactsOfPower = {
  skaven: skavenArtifactsOfPower,
  stormcast: stormcastArtifactsOfPower,
  soulblightGravelords: soulblightArtifactsOfPower,
};

export const battleFormations = {
  skaven: skavenBattleFormations,
  stormcast: stormcastBattleFormations,
  soulblightGravelords: soulblightBattleFormations,
};
