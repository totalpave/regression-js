import round from '../src/utils/round';

describe('round', () => {
    it('rounds to the correct precision', () => {
        // eslint-disable-next-line @typescript-eslint/no-loss-of-precision
        expect(round(0.33333333333333333333, 9)).toBe(0.333333333);
    });
});
