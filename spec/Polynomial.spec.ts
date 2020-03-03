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
        console.log(p.getEquation());
        expect(p.findX(100)).toBe(0);
    });
});
