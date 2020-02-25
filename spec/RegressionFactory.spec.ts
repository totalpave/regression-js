
import RegressionFactory from '../src/RegressionFactory';
import {Regression} from '../src/Regression';
import RegressionType from '../src/utils/RegressionType';

describe('RegressionFactory', () => {
    let factory: RegressionFactory = new RegressionFactory();

    it('create "blah" should throw', () => {
        expect(() => {
            factory.create(<RegressionType>'blah', [])
        }).toThrow();
    });

    it('bestFit "blah" should throw', () => {
        expect(() => {
            factory.bestFit(<RegressionType>'blah', []);
        }).toThrow();
    });

    describe('can create', () => {
        it('Linear', () => {
            let regression: Regression = factory.create(RegressionType.LINEAR, [ 0, 2 ]);
            expect(regression.solve(0)).toBe(2);
        });

        it('Exponential', () => {
            let regression: Regression = factory.create(RegressionType.EXPONENTIAL, [ 0, 2 ]);
            expect(regression.solve(0)).toBe(0);
        });

        it('Logarithmic', () => {
            let regression: Regression = factory.create(RegressionType.LOGARITHMIC, [ 0, 10 ]);
            expect(regression.solve(1)).toBe(0);
        });

        it('Polynomial', () => {
            let regression: Regression = factory.create(RegressionType.POLYNOMIAL, [ 2, 0 ]);
            expect(regression.solve(10)).toBe(20);
        });

        it('Power', () => {
            let regression: Regression = factory.create(RegressionType.POWER, [ 1, 1 ]);
            expect(regression.solve(1)).toBe(1);
        });
    });

    it('can load', () => {
        const serialized: string = '{"type":"Linear","coefficients":[1,2],"equation":"y = 1x + 2","$regressionParams":{}}';
        let regression: Regression = factory.load(serialized);
        expect(regression.solve(1)).toBe(3);
    });
});
