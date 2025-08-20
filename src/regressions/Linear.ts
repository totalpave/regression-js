
import round from '../utils/round';
import IOptions from '../IOptions';
import {Regression} from '../Regression';
import FittingStrategy from '../fitting/FittingStrategy';
import LinearFit from '../fitting/LinearFit';
import RegressionType from '../utils/RegressionType';

export class Linear extends Regression {
    protected _predict(x: number): number[] {
        let gradient: number = this.getCoefficientAt(0);
        let intercept: number = this.getCoefficientAt(1);
        let options: IOptions = this.getOptions();
        return [ round(x, options.precision), round((gradient * x) + intercept, options.precision) ];
    }

    public getEquation(): string {
        let gradient: number = this.getCoefficientAt(0);
        let intercept: number = this.getCoefficientAt(1);
        return intercept === 0 ? `y = ${gradient}x` : `y = ${gradient}x + ${intercept}`;
    }

    public getType(): RegressionType {
        return Linear.getType();
    }

    public static getType(): RegressionType {
        return RegressionType.LINEAR;
    }

    public static getFittingStrategy(options: IOptions): FittingStrategy {
        return new LinearFit(options);
    }

    protected _derivative(x: number): number {
        return (this.solve(x + 1) - this.solve(x)) / 1;
    }

    protected _clone(): Linear {
        return new Linear(this.getCoefficients(), this.getOptions());
    }

    protected _findX(y: number): number {
        let c1: number = this.getCoefficientAt(0);
        let c2: number = this.getCoefficientAt(1);
        return (y - c2) / c1;
    }
}

export default Linear;
