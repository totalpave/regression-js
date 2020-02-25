import Linear from "../src/regressions/Linear";
import RegressionType from "../src/utils/RegressionType";
import Exponential from "../src/regressions/Exponential";
import { Polynomial } from "../src/regressions/Polynomial";
import Logarithmic from "../src/regressions/Logarithmic";
import Power from "../src/regressions/Power";

describe('Regression', () => {
    let regression: Linear = new Linear([ 1, 2 ]);

    it('can serialize', () => {
        expect(regression.serialize()).toBe('{"type":"Linear","coefficients":[1,2],"options":{"order":2,"precision":2,"period":null}}');
    });

    it('can set coefficients', () => {
        let regression: Linear = new Linear([]);
        regression.setCoefficients([ 2, 4 ]);
        expect(regression.getCoefficients()).toEqual([ 2, 4 ]);
    });

    it('toString', () => {
        expect(regression.toString()).toBe(regression.getEquation());
    });

    it('getFitAccuracy', () => {
        let regression: Linear = new Linear([ 2, 0 ]);
        expect(regression.getFitAccuracy([
            [ 0, 0 ],
            [ 1, 2 ],
            [ 2, 4 ],
            [ 3, 6 ]
        ])).toBe(1);
    });

    describe('Types', () => {
        it('Linear', () => {
            expect(Linear.getType()).toBe(RegressionType.LINEAR);
            expect(new Linear([]).getType()).toBe(Linear.getType());
        });

        it('Exponential', () => {
            expect(Exponential.getType()).toBe(RegressionType.EXPONENTIAL);
            expect(new Exponential([]).getType()).toBe(Exponential.getType());
        });

        it('Logarithmic', () => {
            expect(Logarithmic.getType()).toBe(RegressionType.LOGARITHMIC);
            expect(new Logarithmic([]).getType()).toBe(Logarithmic.getType());
        });

        it('Polynomial', () => {
            expect(Polynomial.getType()).toBe(RegressionType.POLYNOMIAL);
            expect(new Polynomial([]).getType()).toBe(Polynomial.getType());
        });

        it('Power', () => {
            expect(Power.getType()).toBe(RegressionType.POWER);
            expect(new Power([]).getType()).toBe(Power.getType());
        });
    });
});
