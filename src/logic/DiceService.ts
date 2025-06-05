export type RandomFn = () => number;

export default class DiceService {
  private readonly rng: RandomFn;

  constructor(rng: RandomFn) {
    this.rng = rng;
  }

  roll(n: number): number[] {
    const results: number[] = [];
    for (let i = 0; i < n; i += 1) {
      results.push(Math.floor(this.rng() * 6) + 1);
    }
    return results;
  }
}
