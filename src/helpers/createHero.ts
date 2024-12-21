import { Hero, subordinates } from "@/types";
import { keywords as genericKeywords } from "../constants";

const { hero } = genericKeywords;

export const createHero = (
  id: string,
  name: string,
  cost: number,
  quantity: number,
  subordinates: subordinates[],
  keywords: string[] = [],
  factionKeywords: string[] = []
): Hero => ({
  id,
  name,
  cost,
  quantity,
  subordinates,
  keywords: [hero, ...keywords],
  factionKeywords,
});
