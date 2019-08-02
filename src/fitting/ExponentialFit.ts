import FittingStrategy from "./FittingStrategy";
import IOptions from "../IOptions";
import round from "../utils/round";

export class ExponentialFit extends FittingStrategy {
    protected _fit(data: Array<Array<number>>, options: IOptions): Array<number> {
        const sum: Array<number> = [0, 0, 0, 0, 0, 0];

        for (let n: number = 0; n < data.length; n++) {
            if (data[n][1] !== null) {
                sum[0] += data[n][0];
                sum[1] += data[n][1];
                sum[2] += data[n][0] * data[n][0] * data[n][1];
                sum[3] += data[n][1] * Math.log(data[n][1]);
                sum[4] += data[n][0] * data[n][1] * Math.log(data[n][1]);
                sum[5] += data[n][0] * data[n][1];
            }
        }

        const denominator = ((sum[1] * sum[2]) - (sum[5] * sum[5]));
        const a: number = Math.exp(((sum[2] * sum[3]) - (sum[5] * sum[4])) / denominator);
        const b: number = ((sum[1] * sum[4]) - (sum[5] * sum[3])) / denominator;
        const coeffA: number = round(a, options.precision);
        const coeffB: number = round(b, options.precision);
        return [
            coeffA,
            coeffB
        ];
    }
}

export default ExponentialFit;
