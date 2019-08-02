import Regression from "../Regression";
import round from "../utils/round";
import { Serializable } from "../utils/Serializable";
import IOptions from "../IOptions";
import FittingStrategy from "../fitting/FittingStrategy";
import PowerFit from "../fitting/PowerFit";

export class Power extends Regression {
    protected _serialize(): Serializable {
        return {}
    }

    protected _predict(x: number): Array<number> {
        return [
            round(x, this.getOptions().precision),
            round(round(this.getCoefficientAt(0) * (x ** this.getCoefficientAt(1)), this.getOptions().precision), this.getOptions().precision),
        ];
    }

    public getEquation(): string {
        return `y = ${this.getCoefficientAt(0)}x^${this.getCoefficientAt(1)}`;
    }

    public getType(): string {
        return Power.getType();
    }

    public static getType(): string {
        return 'Power';
    }

    public static getFittingStrategy(options: IOptions): FittingStrategy {
        return new PowerFit(options);
    }
}

export default Power;
