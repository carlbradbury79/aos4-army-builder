import { Unit } from "@/types";
import { keywords } from "@/constants/generalKeywords";

export const canBeReinforced = (unit: Unit): boolean =>
  unit.keywords.includes(keywords.infantry) ||
  unit.keywords.includes(keywords.cavalry);
