import FittingStrategy from "./FittingStrategy";
import IOptions from "../IOptions";
import round from "../utils/round";

export class LinearFit extends FittingStrategy {
    protected _fit(data: Array<Array<number>>, options: IOptions): Array<number> {
        const sum: Array<number> = [
            0,
            0,
            0,
            0,
            0
        ];
        let len: number = 0;

        for (let n: number = 0; n < data.length; n++) {
            if (data[n][1] !== null) {
                len++;
                sum[0] += data[n][0];
                sum[1] += data[n][1];
                sum[2] += data[n][0] * data[n][0];
                sum[3] += data[n][0] * data[n][1];
                sum[4] += data[n][1] * data[n][1];
            }
        }

        const run: number = ((len * sum[2]) - (sum[0] * sum[0]));
        const rise: number = ((len * sum[3]) - (sum[0] * sum[1]));
        const gradient: number = run === 0 ? 0 : round(rise / run, options.precision);
        const intercept: number = round((sum[1] / len) - ((gradient * sum[0]) / len), options.precision);

        return [ gradient, intercept ];
    }
}

export default LinearFit;
