import { Polynomial } from "../src/regressions/Polynomial";
import { RegressionFactory } from '../src/RegressionFactory';

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

    describe('findX', () => {
        it('should be 0', () => {
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

        describe('bound checks', () => {
            let serializedCurve: string = '{"type":"Polynomial","coefficients":[0.0362400189042091,-3.38187694549561,100],"options":{"order":2,"precision":10,"period":null,"xRange":{"preferLowerX":true,"low":0,"high":30}}}';
            let factory: RegressionFactory = new RegressionFactory();

            it('should return null', () => {
                let p: Polynomial = factory.load(serializedCurve);
                expect(p.findX(28)).toBe(null);
            });

            it('should return ~32', () => {
                let p: Polynomial = factory.load(serializedCurve);
                expect(p.findX(28, {
                    allowOutOfBounds: true
                })).toBe(32.86275645858272);
            });

            it('should interpolate', () => {
                let p: Polynomial = factory.load(serializedCurve);
                expect(p.findX(0, {
                    allowOutOfBounds: true
                })).toBe(55.05975887132257);
            });
        });
    });

    describe('Sanity Checks', () => {
        let serializedCurve: string = '{"type":"Polynomial","coefficients":[0.000152046704897657,-0.00994217768311501,0.211343005299568,-1.59829998016357,-0.0000337600504280999,100],"options":{"order":5,"precision":10,"enforceNegativeSlope": true, "period":null,"xRange":{"preferLowerX":true,"low":0,"high":25, "allowOutOfBounds": true}, "yRange": {"low": 0, "high": 100}}}';
        let factory: RegressionFactory = new RegressionFactory();

        it('X 100 should be equal to Y 0', () => {
            let p: Polynomial = factory.load(serializedCurve);
            expect(p.solve(100)).toBe(0);
        });

        it('X 26 should be equal to Y 0.8431922929', () => {
            let p: Polynomial = factory.load(serializedCurve);
            expect(p.solve(26)).toBe(0.8431922929);
        });
    });
});
