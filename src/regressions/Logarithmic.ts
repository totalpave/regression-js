import {Regression} from "../Regression";
import IOptions from "../IOptions";
import round from "../utils/round";
import LogarithmicFit from "../fitting/LogarithmicFit";
import FittingStrategy from "../fitting/FittingStrategy";
import RegressionType from '../utils/RegressionType';

export class Logarithmic extends Regression {
    protected _predict(x: number): Array<number> {
        return [ round(x, this.getOptions().precision), round(round(this.getCoefficientAt(0) + (this.getCoefficientAt(1) * Math.log(x)), this.getOptions().precision), this.getOptions().precision) ];
    }

    public getEquation(): string {
        return `y = ${this.getCoefficientAt(0)} + ${this.getCoefficientAt(1)} ln(x)`
    }

    public getType(): RegressionType {
        return Logarithmic.getType();
    }

    public static getType(): RegressionType {
        return RegressionType.LOGARITHMIC;
    }

    public static getFittingStrategy(options: IOptions): FittingStrategy {
        return new LogarithmicFit(options);
    }

    protected _derivative(x: number): number {
        if (x <= 0) {
            return null;
        }

        let c1: number = this.getCoefficientAt(0);
        let c2: number = this.getCoefficientAt(1);

        return c2 * (1 / x) + c1;
    }

    protected _clone(): Logarithmic {
        return new Logarithmic(this.getCoefficients(), this.getOptions());
    }

    protected _findX(y: number): number {
        let constant: number = this.getCoefficientAt(0);
        let log: number = this.getCoefficientAt(1);
        return Math.pow(Math.E, (y - constant) / log);
    }
}

export default Logarithmic;
