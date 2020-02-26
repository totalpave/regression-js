
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

    public getType(): string {
        return Power.getType();
    }

    public static getType(): string {
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
}

export default Power;
