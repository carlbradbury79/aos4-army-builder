interface Subordinate {
  keyword: string;
  max: number;
  hero: boolean;
}

export const addSubordinate = (
  keyword: string,
  max: number = 0,
  hero: boolean = false
): Subordinate => ({
  keyword,
  max,
  hero,
});
