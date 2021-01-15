import FittingStrategy from "./FittingStrategy";
import IOptions from "../IOptions";
import round from "../utils/round";

export class PowerFit extends FittingStrategy {
    protected _fit(data: Array<Array<number>>, options: IOptions): Array<number> {
        let sum: Array<number> = [
            0,
            0,
            0,
            0,
            0
        ];

        let len: number = data.length;

        for (let n: number = 0; n < len; n++) {
            if (data[n][1] !== null) {
                sum[0] += Math.log(data[n][0]);
                sum[1] += Math.log(data[n][1]) * Math.log(data[n][0]);
                sum[2] += Math.log(data[n][1]);
                sum[3] += (Math.log(data[n][0]) ** 2);
            }
        }

        let b: number = ((len * sum[1]) - (sum[0] * sum[2])) / ((len * sum[3]) - (sum[0] ** 2));
        let a: number = ((sum[2] - (b * sum[0])) / len);
        let coeffA: number = round(Math.exp(a), options.precision);
        let coeffB: number = round(b, options.precision);

        return [ coeffA, coeffB ];
    }
}

export default PowerFit;
