import FittingStrategy from "./FittingStrategy";
import IOptions from "../IOptions";
import round from "../utils/round";

export class PowerFit extends FittingStrategy {
    protected _fit(data: Array<Array<number>>, options: IOptions): Array<number> {
        const sum = [0, 0, 0, 0, 0];
        const len = data.length;

        for (let n = 0; n < len; n++) {
        if (data[n][1] !== null) {
            sum[0] += Math.log(data[n][0]);
            sum[1] += Math.log(data[n][1]) * Math.log(data[n][0]);
            sum[2] += Math.log(data[n][1]);
            sum[3] += (Math.log(data[n][0]) ** 2);
        }
        }

        const b = ((len * sum[1]) - (sum[0] * sum[2])) / ((len * sum[3]) - (sum[0] ** 2));
        const a = ((sum[2] - (b * sum[0])) / len);
        const coeffA = round(Math.exp(a), options.precision);
        const coeffB = round(b, options.precision);

        return [
            coeffA,
            coeffB
        ];
    }
}

export default PowerFit;
