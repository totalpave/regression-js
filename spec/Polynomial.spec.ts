import { Polynomial } from "../src/regressions/Polynomial";

describe('Polynomial', () => {
    it('findX', () => {
        let p: Polynomial = new Polynomial([
            -0.03,
            -0.58,
            100
        ], {
            precision: 10,
            xRange: {
                preferLowerX: true,
                low: 0,
                high: 35
            }
        });
        expect(p.findX(100)).toBe(0);
    });

    it('derivative', () => {
        let p: Polynomial = new Polynomial([
            -7.96390941104619e-6,
            0.000650882546324283,
            -0.0194003954529762,
            0.255068331956863,
            -1.39548635482788,
            -0.56826284599304,
            100
        ], {
            precision: 10,
            xRange: {
                preferLowerX: true,
                low: 0,
                high: 35
            }
        });

        expect(p.derivative(12)).toBe(-2.3724999639838167);
    });
});
