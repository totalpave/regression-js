import Linear from "../src/regressions/Linear";
// import {Regression} from '../src/Regression';
import {RegressionFactory, IBestFitResult} from '../src/RegressionFactory';
import RegressionType from "../src/utils/RegressionType";
import Exponential from "../src/regressions/Exponential";
import { Polynomial } from "../src/regressions/Polynomial";
import Logarithmic from "../src/regressions/Logarithmic";
import Power from "../src/regressions/Power";
import * as models from './support/data';

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

    describe('findX', () => {
        let factory: RegressionFactory = new RegressionFactory();

        it('Linear', () => {
            let regression: Linear = new Linear([ 2, 4 ]);
            expect(regression.findX(3)).toBe(-0.5);
        });

        it('Expontential', () => {
            let fitted: IBestFitResult = factory.bestFit(RegressionType.EXPONENTIAL, models.Exponential.growthGreaterThanZero.data);
            expect(fitted.regression.findX(3)).toBe(0.2027325540540822);
        });

        it('Power', () => {
            let fitted: IBestFitResult = factory.bestFit(RegressionType.POWER, models.Power.coefficientsEqualToOne.data);
            fitted.regression.setCoefficients([ 5, 5 ]);
            expect(fitted.regression.findX(3)).toBe(0.9028804514474342);
        });

        it('Logarithmic', () => {
            let fitted: IBestFitResult = factory.bestFit(RegressionType.LOGARITHMIC, models.Logarithmic.greaterThanOne.data);
            fitted.regression.setCoefficients([ 5, 10 ]);
            expect(fitted.regression.findX(3)).toBe(0.8187307530779818);
        });

        describe('Polynomial', () => {
            // These are simly testing for errornous polynomials
            it('1-term', () => {
                let fitted: IBestFitResult = factory.bestFit(RegressionType.POLYNOMIAL, models.Polynomial.parabolaPositiveCoefficients.data);
                fitted.regression.setCoefficients([ 12 ]);
                expect(fitted.regression.findX(3)).toBe(null);
            });
            
            it('2-term', () => {
                let fitted: IBestFitResult = factory.bestFit(RegressionType.POLYNOMIAL, models.Polynomial.parabolaPositiveCoefficients.data);
                fitted.regression.setCoefficients([ -8, 12 ]);
                expect(fitted.regression.findX(3)).toBe(null);
            });

            // 3-term uses the quadratic formula
            it('3-term', () => {
                let fitted: IBestFitResult = factory.bestFit(RegressionType.POLYNOMIAL, models.Polynomial.parabolaPositiveCoefficients.data);
                fitted.regression.setCoefficients([
                    7,
                    -8,
                    12
                ]);
                // fitted.regression.setCoefficients([
                //     1,
                //     2,
                //     -7,
                //     -8,
                //     12
                // ]);
                expect(fitted.regression.findX(12)).toBe(0);
                expect(fitted.regression.findX(3)).toBe(null);
                expect(fitted.regression.findX(14)).toBe(1.3538893678645232);
            });

            it('4-term', () => {
                let fitted: IBestFitResult = factory.bestFit(RegressionType.POLYNOMIAL, models.Polynomial.parabolaPositiveCoefficients.data);
                fitted.regression.setCoefficients([
                    2,
                    1,
                    2,
                    3
                ]);
                expect(fitted.regression.findX(5)).toBe(0.6014905795822434);
                expect(fitted.regression.findX(10)).toBe(1.2);
            });

            it('5-term', () => {
                let fitted: IBestFitResult = factory.bestFit(RegressionType.POLYNOMIAL, models.Polynomial.parabolaPositiveCoefficients.data);
                fitted.regression.setCoefficients([
                    1,
                    2,
                    -7,
                    -8,
                    12
                ]);
                expect(fitted.regression.findX(5)).toBe(2.25);
                expect(fitted.regression.findX(10)).toBe(2.5);
            });
        });
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

    describe('derivatives', () => {
        let factory: RegressionFactory = new RegressionFactory();

        it('Linear', () => {
            let fitted: IBestFitResult = factory.bestFit(RegressionType.LINEAR, models.Linear.positiveGradient.data);
            expect(fitted.regression.derivative()).toBe(2);
        });

        it('Exponential', () => {
            let fitted: IBestFitResult = factory.bestFit(RegressionType.EXPONENTIAL, models.Exponential.growthGreaterThanZero.data);
            expect(fitted.regression.derivative()).toBe(4);
        });

        it('Polynomial', () => {
            let fitted: IBestFitResult = factory.bestFit(RegressionType.POLYNOMIAL, models.Polynomial.parabolaPositiveCoefficients.data);
            expect(fitted.regression.derivative()).toBe(2);
        });

        it('Logarithmic', () => {
            let fitted: IBestFitResult = factory.bestFit(RegressionType.LOGARITHMIC, models.Logarithmic.greaterThanOne.data);
            expect(fitted.regression.derivative(1)).toBe(10);
        });

        it('Power', () => {
            let fitted: IBestFitResult = factory.bestFit(RegressionType.POWER, models.Power.coefficientsEqualToOne.data);
            expect(fitted.regression.derivative(1)).toBe(1);
        });
    });
});
