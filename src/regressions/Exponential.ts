import {Regression} from "../Regression";
import IOptions from "../IOptions";
import round from "../utils/round";
import ExponentialFit from "../fitting/ExponentialFit";
import FittingStrategy from "../fitting/FittingStrategy";
import RegressionType from '../utils/RegressionType';

export class Exponential extends Regression {
    public constructor(coefficients: Array<number>, options?: IOptions) {
        super(coefficients, options);
    }

    protected _predict(x: number): Array<number> {
        const options: IOptions = this.getOptions();
        const coeffA: number = this.getCoefficientAt(0);
        const coeffB: number = this.getCoefficientAt(1);
        return [ round(x, options.precision), round(coeffA * Math.exp(coeffB * x), options.precision) ];
    }

    public getEquation(): string {
        return `y = ${this.getCoefficientAt(0)}e^(${this.getCoefficientAt(1)}x)`;
    }

    public getType(): string {
        return Exponential.getType();
    }

    public static getType(): string {
        return RegressionType.EXPONENTIAL;
    }

    public static getFittingStrategy(options: IOptions): FittingStrategy {
        return new ExponentialFit(options);
    }
}

export default Exponential;
