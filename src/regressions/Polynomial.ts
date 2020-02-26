import {Regression} from "../Regression";
import round from "../utils/round";
import IOptions from "../IOptions";
import FittingStrategy from "../fitting/FittingStrategy";
import PolynomialFit from "../fitting/PolynomialFit";
import RegressionType from '../utils/RegressionType';

export class Polynomial extends Regression {
    protected _predict(x: number): Array<number> {
        return [
            round(x, this.getOptions().precision),
            round(
                this.getCoefficients().reverse().reduce((sum, coeff, power) => sum + (coeff * (x ** power)), 0),
                this.getOptions().precision,
            )
        ];
    }

    protected _derivative(x: number): number {
        let coeffs: Array<number> = this.getCoefficients().reverse();
        let result: number = 0;

        for (let i: number = 1; i < coeffs.length; i++) {
            let coeff: number = coeffs[i];
            
            if (i === 1) {
                result += i * coeff;
            }
            else if (i === 2) {
                result += i * coeff * x
            }
            else {
                result += i * coeff * Math.pow(x, i - 1);
            }
        }

        return result;
    }

    public getEquation(): string {
        const coefficients: Array<number> = this.getCoefficients().reverse();
        let string: string = 'y = ';
        for (let i: number = coefficients.length - 1; i >= 0; i--) {
            if (i > 1) {
                string += `${coefficients[i]}x^${i} + `;
            }
            else if (i === 1) {
                string += `${coefficients[i]}x + `;
            }
            else {
                string += coefficients[i];
            }
        }
        return string;
    }

    public getType(): string {
        return Polynomial.getType();
    }

    public static getType(): string {
        return RegressionType.POLYNOMIAL;
    }

    public static getFittingStrategy(options: IOptions): FittingStrategy {
        return new PolynomialFit(options);
    }
}
