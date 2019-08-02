import Regression from "../Regression";
import { Serializable } from "../utils/Serializable";
import round from "../utils/round";
import IOptions from "../IOptions";
import FittingStrategy from "../fitting/FittingStrategy";
import PolynomialFit from "../fitting/PolynomialFit";

export class Polynomial extends Regression {

    protected _serialize(): Serializable {
        return {};
    }

    protected _predict(x: number): Array<number> {
        return [
            round(x, this.getOptions().precision),
            round(
                this.getCoefficients().reduce((sum, coeff, power) => sum + (coeff * (x ** power)), 0),
                this.getOptions().precision,
            ),
        ];
    }

    public getEquation(): string {
        const coefficients: Array<number> = this.getCoefficients();
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
        return 'Polynomial';
    }

    public getFittingStrategy(options: IOptions): FittingStrategy {
        return new PolynomialFit(options);
    }
}
