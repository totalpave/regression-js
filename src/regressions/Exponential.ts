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
        let options: IOptions = this.getOptions();
        let coeffA: number = this.getCoefficientAt(0);
        let coeffB: number = this.getCoefficientAt(1);
        return [ round(x, options.precision), round(coeffA * Math.exp(coeffB * x), options.precision) ];
    }

    public getEquation(): string {
        return `y = ${this.getCoefficientAt(0)}e^(${this.getCoefficientAt(1)}x)`;
    }

    public getType(): RegressionType {
        return Exponential.getType();
    }

    public static getType(): RegressionType {
        return RegressionType.EXPONENTIAL;
    }

    public static getFittingStrategy(options: IOptions): FittingStrategy {
        return new ExponentialFit(options);
    }

    protected _derivative(x: number): number {
        let constant: number = this.getCoefficientAt(0);
        let exponent: number = this.getCoefficientAt(1);
        return constant * Math.pow(Math.E, exponent * x) * exponent;
    }

    protected _clone(): Exponential {
        return new Exponential(this.getCoefficients(), this.getOptions());
    }

    protected _findX(y: number): number {
        let constant: number = this.getCoefficientAt(0);
        let exponent: number = this.getCoefficientAt(1);
        return (Math.log(y / constant) / Math.log(Math.E) / exponent);
    }
}

export default Exponential;
