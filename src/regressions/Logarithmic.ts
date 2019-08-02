import Regression from "../Regression";
import IOptions from "../IOptions";
import round from "../utils/round";
import LogarithmicFit from "../fitting/LogarithmicFit";
import FittingStrategy from "../fitting/FittingStrategy";

export class Logarithmic extends Regression {
    // protected _init(): void {
    //     const data: Array<Array<number>> = this.getData();
    //     const options: IOptions = this.getOptions();
    //     const sum: Array<number> = [0, 0, 0, 0];
    //     const len: number = data.length;

    //     for (let n: number = 0; n < len; n++) {
    //         if (data[n][1] !== null) {
    //             sum[0] += Math.log(data[n][0]);
    //             sum[1] += data[n][1] * Math.log(data[n][0]);
    //             sum[2] += data[n][1];
    //             sum[3] += (Math.log(data[n][0]) ** 2);
    //         }
    //     }

    //     const a: number = ((len * sum[1]) - (sum[2] * sum[0])) / ((len * sum[3]) - (sum[0] * sum[0]));
    //     const coeffB: number = round(a, options.precision);
    //     const coeffA: number = round((sum[2] - (coeffB * sum[0])) / len, options.precision);
    //     this.setCoefficients([
    //         coeffA,
    //         coeffB
    //     ]);
    // }

    protected _predict(x: number): Array<number> {
        return [
            round(x, this.getOptions().precision),
            round(round(this.getCoefficientAt(0) + (this.getCoefficientAt(1) * Math.log(x)), this.getOptions().precision), this.getOptions().precision)
        ];
    }

    public getEquation(): string {
        return `y = ${this.getCoefficientAt(0)} + ${this.getCoefficientAt(1)} ln(x)`
    }

    public getType(): string {
        return Logarithmic.getType();
    }

    public static getType(): string {
        return 'Logarithmic';
    }

    public static getFittingStrategy(options: IOptions): FittingStrategy {
        return new LogarithmicFit(options);
    }
}

export default Logarithmic;
