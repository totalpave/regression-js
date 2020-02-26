
import * as api from '../src/api';
import {Regression} from '../src/Regression';
import {RegressionFactory} from '../src/RegressionFactory';
import {r2} from '../src/utils/r2';
import {RegressionType} from '../src/utils/RegressionType';
import {Exponential} from '../src/regressions/Exponential';
import {Linear} from '../src/regressions/Linear';
import {Polynomial} from '../src/regressions/Polynomial';
import {Logarithmic} from '../src/regressions/Logarithmic';
import {Power} from '../src/regressions/Power';
import {gaussianElimination} from '../src/utils/gaussianElimination';
import {PowerFit} from '../src/fitting/PowerFit';
import {FittingStrategy} from '../src/fitting/FittingStrategy';
import {ExponentialFit} from '../src/fitting/ExponentialFit';
import {LinearFit} from '../src/fitting/LinearFit';
import {PolynomialFit} from '../src/fitting/PolynomialFit';
import {LogarithmicFit} from '../src/fitting/LogarithmicFit';

describe('Public API', () => {
    it('Regression', () => {
        expect(api.Regression).toBe(Regression);
    });

    it('RegressionFactory', () => {
        expect(api.RegressionFactory).toBe(RegressionFactory);
    });

    describe('fitting', () => {
        it('FittingStrategy', () => {
            expect(api.FittingStrategy).toBe(FittingStrategy);
        });

        it('LinearFit', () => {
            expect(api.LinearFit).toBe(LinearFit);
        });

        it('PowerFit', () => {
            expect(api.PowerFit).toBe(PowerFit);
        });

        it('ExponentialFit', () => {
            expect(api.ExponentialFit).toBe(ExponentialFit);
        });

        it('PolynomialFit', () => {
            expect(api.PolynomialFit).toBe(PolynomialFit);
        });

        it('LogarithmicFit', () => {
            expect(api.LogarithmicFit).toBe(LogarithmicFit);
        });
    });

    describe('regressions', () => {
        it('Exponential', () => {
            expect(api.Exponential).toBe(Exponential);
        });
    
        it('Linear', () => {
            expect(api.Linear).toBe(Linear);
        });
    
        it('Logarithmic', () => {
            expect(api.Logarithmic).toBe(Logarithmic);
        });
    
        it('Polynomial', () => {
            expect(api.Polynomial).toBe(Polynomial);
        });
    
        it('Power', () => {
            expect(api.Power).toBe(Power);
        });
    });

    describe('utils', () => {
        it('r2', () => {
            expect(api.r2).toBe(r2);
        });
    
        it('RegressionType', () => {
            expect(api.RegressionType).toBe(RegressionType);
        });

        it('gaussianElimination', () => {
            expect(api.gaussianElimination).toBe(gaussianElimination);
        });
    });
});
