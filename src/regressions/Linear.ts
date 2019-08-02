
import round from '../utils/round';
import IOptions from '../IOptions';
import Regression from '../Regression';
import { Serializable } from '../utils/Serializable';
import FittingStrategy from '../fitting/FittingStrategy';
import LinearFit from '../fitting/LinearFit';

export class Linear extends Regression {
    
    // protected _init(): void {
    //     const sum: Array<number> = [0, 0, 0, 0, 0, 0];
    //     const data: Array<Array<number>> = this.getData();
    //     const options: IOptions = this.getOptions();

    //     for (let n: number = 0; n < data.length; n++) {
    //         if (data[n][1] !== null) {
    //             sum[0] += data[n][0];
    //             sum[1] += data[n][1];
    //             sum[2] += data[n][0] * data[n][0] * data[n][1];
    //             sum[3] += data[n][1] * Math.log(data[n][1]);
    //             sum[4] += data[n][0] * data[n][1] * Math.log(data[n][1]);
    //             sum[5] += data[n][0] * data[n][1];
    //         }
    //     }

    //     const denominator: number = ((sum[1] * sum[2]) - (sum[5] * sum[5]));
    //     const a: number = Math.exp(((sum[2] * sum[3]) - (sum[5] * sum[4])) / denominator);
    //     const b: number = ((sum[1] * sum[4]) - (sum[5] * sum[3])) / denominator;
    //     const coeffA: number = round(a, options.precision);
    //     const coeffB: number = round(b, options.precision);
    //     this.setCoefficients([
    //         coeffA,
    //         coeffB
    //     ]);
    // }

    protected _serialize(): Serializable {
        return {}
    }

    protected _predict(x: number): Array<number> {
        const coeffA: number = this.getCoefficientAt(0);
        const coeffB: number = this.getCoefficientAt(1);
        return [
            round(x, this.getOptions().precision),
            round(coeffA * Math.exp(coeffB * x), this.getOptions().precision)
        ];
    }

    public getEquation(): string {
        return `y = ${this.getCoefficientAt(0)}e^(${this.getCoefficientAt(1)}x)`;
    }

    public getType(): string {
        return Linear.getType();
    }

    public static getType(): string {
        return 'Linear';
    }

    public static getFittingStrategy(options: IOptions): FittingStrategy {
        return new LinearFit(options);
    }
}

export default Linear;
