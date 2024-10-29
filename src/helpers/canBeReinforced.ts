import { Unit } from "@/types";

export const canBeReinforced = (unit: Unit): boolean =>
  unit.quantity > 1 && !unit.cannotBeReinforced;
