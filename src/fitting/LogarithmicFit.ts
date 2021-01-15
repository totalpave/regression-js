import FittingStrategy from "./FittingStrategy";
import IOptions from "../IOptions";
import round from "../utils/round";

export class LogarithmicFit extends FittingStrategy {
    protected _fit(data: Array<Array<number>>, options: IOptions): Array<number> {
        let sum: Array<number> = [
            0,
            0,
            0,
            0
        ];
        
        let len: number = data.length;

        for (let n: number = 0; n < len; n++) {
            if (data[n][1] !== null) {
                sum[0] += Math.log(data[n][0]);
                sum[1] += data[n][1] * Math.log(data[n][0]);
                sum[2] += data[n][1];
                sum[3] += (Math.log(data[n][0]) ** 2);
            }
        }

        let a: number = ((len * sum[1]) - (sum[2] * sum[0])) / ((len * sum[3]) - (sum[0] * sum[0]));
        let coeffB: number = round(a, options.precision);
        let coeffA: number = round((sum[2] - (coeffB * sum[0])) / len, options.precision);
        return [ coeffA, coeffB ];
    }
}

export default LogarithmicFit;
