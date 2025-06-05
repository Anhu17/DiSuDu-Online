import { describe, it, expect } from 'vitest';
import DiceService from './DiceService';

describe('DiceService', () => {
  it('rolls n dice using the rng function', () => {
    const values = [0, 0.5, 0.999];
    let idx = 0;
    const rng = () => values[idx++];
    const service = new DiceService(rng);

    const result = service.roll(3);

    expect(result).toEqual([1, 4, 6]);
  });
});
