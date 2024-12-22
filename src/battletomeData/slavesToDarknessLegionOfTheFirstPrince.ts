import { UnitTypes } from "@/types";
import {
  slavesToDarknessDaemonUnits,
  slavesToDarknessFirstPrinceHeroes,
  slavesToDarknessFirstPrinceUnits,
} from "./slavesToDarkness";

export const slavesToDarknessLegionOfTheFirstPrinceProfiles: UnitTypes[] = [
  ...slavesToDarknessFirstPrinceHeroes,
  ...slavesToDarknessFirstPrinceUnits,
  ...slavesToDarknessDaemonUnits,
];

export const battleFormations = ["Legion of the First Prince"];

export const artifactsOfPower = ["Black-ritual Dagger"];

export const heroicTraits = ["Dread Marshall"];

export const spellLores = ["Lore of the First Prince"];

export const prayerLores = [];

export const manifestationLore = ["Summon eightfold Doom-sigil"];
