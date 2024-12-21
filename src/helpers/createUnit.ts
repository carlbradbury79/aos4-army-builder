import { Unit } from "@/types";

export const createUnit = (
  id: string,
  name: string,
  cost: number,
  quantity: number,
  factionKeywords: string[] = [],
  cannotBeReinforced: boolean = false
): Unit => ({
  id,
  name,
  cost,
  quantity,
  factionKeywords,
  cannotBeReinforced,
  keywords: [],
});
