
import * as api from '../src/api';

describe('Public API', () => {
    it('Regression', () => {
        expect(api.Regression).toBeTruthy();
    });

    it('RegressionFactory', () => {
        expect(api.RegressionFactory).toBeTruthy();
    });

    it('Exponential', () => {
        expect(api.Exponential).toBeTruthy();
    });

    it('Linear', () => {
        expect(api.Linear).toBeTruthy();
    });

    it('Logarithmic', () => {
        expect(api.Logarithmic).toBeTruthy();
    });

    it('Polynomial', () => {
        expect(api.Polynomial).toBeTruthy();
    });

    it('Power', () => {
        expect(api.Power).toBeTruthy();
    });

    it('r2', () => {
        expect(api.r2).toBeTruthy();
    });
});
