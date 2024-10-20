import {
  skaven,
  skavenManifestationLore,
  spellLores as skavenSpellLores,
  prayerLores as skavenPrayerLores,
} from "./skaven";
import {
  stormcast,
  stormcastManifestationLore,
  spellLores as stormcastSpellLores,
  prayerLores as stormcastPrayerLores,
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
