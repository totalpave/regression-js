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

    public getType(): string {
        return Logarithmic.getType();
    }

    public static getType(): string {
        return RegressionType.LOGARITHMIC;
    }

    public static getFittingStrategy(options: IOptions): FittingStrategy {
        return new LogarithmicFit(options);
    }
}

export default Logarithmic;
