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
import { genericManifestationLores as generic } from "./generic";

export const battletomeData = {
  skaven,
  stormcast,
  soulblightGravelords,
  ossiarchBonereapers,
};

export const genericManifestationLores = generic;
export const factionSpecificManifestationLores = {
  skaven: skavenManifestationLore,
  stormcast: stormcastManifestationLore,
  soulblightGravelords: soulblightManifestationLore,
  ossiarchBonereapers: ossiarchManifestationLore,
};

export const spellLores = {
  skaven: skavenSpellLores,
  stormcast: stormcastSpellLores,
  soulblightGravelords: soulblightSpellLores,
  ossiarchBonereapers: ossiarchSpellLores,
};

export const prayerLores = {
  skaven: skavenPrayerLores,
  stormcast: stormcastPrayerLores,
  soulblightGravelords: soulblightPrayerLores,
  ossiarchBonereapers: ossiarchPrayerLores,
};

export const heroicTraits = {
  skaven: skavenHeroicTraits,
  stormcast: stormcastHeroicTraits,
  soulblightGravelords: soulblightHeroicTraits,
  ossiarchBonereapers: ossiarchHeroicTraits,
};

export const artifactsOfPower = {
  skaven: skavenArtifactsOfPower,
  stormcast: stormcastArtifactsOfPower,
  soulblightGravelords: soulblightArtifactsOfPower,
  ossiarchBonereapers: ossiarchArtifactsOfPower,
};

export const battleFormations = {
  skaven: skavenBattleFormations,
  stormcast: stormcastBattleFormations,
  soulblightGravelords: soulblightBattleFormations,
  ossiarchBonereapers: ossiarchBattleFormations,
};
