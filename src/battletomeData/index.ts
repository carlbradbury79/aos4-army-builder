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

import {
  battleFormations as ossiarchBattleFormations,
  artifactsOfPower as ossiarchArtifactsOfPower,
  heroicTraits as ossiarchHeroicTraits,
  spellLores as ossiarchSpellLores,
  prayerLores as ossiarchPrayerLores,
  manifestationLore as ossiarchManifestationLore,
  ossiarchBonereapersBattleProfiles as ossiarchBonereapers,
} from "./ossiarchBonereapers";

import {
  battleFormations as seraphonBattleFormations,
  artifactsOfPower as seraphonArtifactsOfPower,
  heroicTraits as seraphonHeroicTraits,
  spellLores as seraphonSpellLores,
  prayerLores as seraphonPrayerLores,
  manifestationLore as seraphonManifestationLore,
  seraphonBattleProfiles as seraphon,
} from "./seraphon";

import { genericManifestationLores as generic } from "./generic";

export const battletomeData = {
  skaven,
  stormcast,
  soulblightGravelords,
  ossiarchBonereapers,
  seraphon,
};

export const genericManifestationLores = generic;
export const factionSpecificManifestationLores = {
  skaven: skavenManifestationLore,
  stormcast: stormcastManifestationLore,
  soulblightGravelords: soulblightManifestationLore,
  ossiarchBonereapers: ossiarchManifestationLore,
  seraphon: seraphonManifestationLore,
};

export const spellLores = {
  skaven: skavenSpellLores,
  stormcast: stormcastSpellLores,
  soulblightGravelords: soulblightSpellLores,
  ossiarchBonereapers: ossiarchSpellLores,
  seraphon: seraphonSpellLores,
};

export const prayerLores = {
  skaven: skavenPrayerLores,
  stormcast: stormcastPrayerLores,
  soulblightGravelords: soulblightPrayerLores,
  ossiarchBonereapers: ossiarchPrayerLores,
  seraphon: seraphonPrayerLores,
};

export const heroicTraits = {
  skaven: skavenHeroicTraits,
  stormcast: stormcastHeroicTraits,
  soulblightGravelords: soulblightHeroicTraits,
  ossiarchBonereapers: ossiarchHeroicTraits,
  seraphon: seraphonHeroicTraits,
};

export const artifactsOfPower = {
  skaven: skavenArtifactsOfPower,
  stormcast: stormcastArtifactsOfPower,
  soulblightGravelords: soulblightArtifactsOfPower,
  ossiarchBonereapers: ossiarchArtifactsOfPower,
  seraphon: seraphonArtifactsOfPower,
};

export const battleFormations = {
  skaven: skavenBattleFormations,
  stormcast: stormcastBattleFormations,
  soulblightGravelords: soulblightBattleFormations,
  ossiarchBonereapers: ossiarchBattleFormations,
  seraphon: seraphonBattleFormations,
};
