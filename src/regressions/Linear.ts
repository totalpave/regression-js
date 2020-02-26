
import round from '../utils/round';
import IOptions from '../IOptions';
import {Regression} from '../Regression';
import FittingStrategy from '../fitting/FittingStrategy';
import LinearFit from '../fitting/LinearFit';
import RegressionType from '../utils/RegressionType';

export class Linear extends Regression {
    protected _predict(x: number): Array<number> {
        const gradient: number = this.getCoefficientAt(0);
        const intercept: number = this.getCoefficientAt(1);
        const options: IOptions = this.getOptions();
        return [ round(x, options.precision), round((gradient * x) + intercept, options.precision) ];
    }

    public getEquation(): string {
        const gradient: number = this.getCoefficientAt(0);
        const intercept: number = this.getCoefficientAt(1);
        return intercept === 0 ? `y = ${gradient}x` : `y = ${gradient}x + ${intercept}`;
    }

    public getType(): string {
        return Linear.getType();
    }

    public static getType(): string {
        return RegressionType.LINEAR;
    }

    public static getFittingStrategy(options: IOptions): FittingStrategy {
        return new LinearFit(options);
    }

    protected _derivative(x: number): number {
        return (this.solve(x + 1) - this.solve(x)) / 1;
    }
}

export default Linear;
