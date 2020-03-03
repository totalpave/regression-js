
import {Regression} from "../Regression";
import round from "../utils/round";
import IOptions from "../IOptions";
import FittingStrategy from "../fitting/FittingStrategy";
import PowerFit from "../fitting/PowerFit";
import RegressionType from '../utils/RegressionType';

export class Power extends Regression {
    protected _predict(x: number): Array<number> {
        return [ round(x, this.getOptions().precision), round(round(this.getCoefficientAt(0) * (x ** this.getCoefficientAt(1)), this.getOptions().precision), this.getOptions().precision) ];
    }

    public getEquation(): string {
        return `y = ${this.getCoefficientAt(0)}x^${this.getCoefficientAt(1)}`;
    }

    public getType(): RegressionType {
        return Power.getType();
    }

    public static getType(): RegressionType {
        return RegressionType.POWER;
    }

    public static getFittingStrategy(options: IOptions): FittingStrategy {
        return new PowerFit(options);
    }

    protected _derivative(x: number): number {
        let c1: number = this.getCoefficientAt(0);
        let c2: number = this.getCoefficientAt(1);
        return c1 * (c2 * Math.pow(x, c2 - 1));
    }

    protected _clone(): Power {
        return new Power(this.getCoefficients(), this.getOptions());
    }

    protected _findX(y: number): number {
        let constant: number = this.getCoefficientAt(0);
        let exponent: number = this.getCoefficientAt(1);
        return Math.pow(y / constant, 1 / exponent);
    }
}

export default Power;
