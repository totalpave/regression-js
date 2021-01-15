import FittingStrategy from "./FittingStrategy";
import IOptions from "../IOptions";
import gaussianElimination from "../utils/gaussianElimination";
import round from "../utils/round";

export class PolynomialFit extends FittingStrategy {
    protected _fit(data: Array<Array<number>>, options: IOptions): Array<number> {
        let lhs: Array<number> = [];
        let rhs: Array<Array<number>> = [];
        let a: number = 0;
        let b: number = 0;
        let len: number = data.length;
        let k: number = options.order + 1;

        for (let i: number = 0; i < k; i++) {
            for (let l: number = 0; l < len; l++) {
                if (data[l][1] !== null) {
                    a += (data[l][0] ** i) * data[l][1];
                }
            }

            lhs.push(a);
            a = 0;

            let c: Array<number> = [];
            for (let j: number = 0; j < k; j++) {
                for (let l: number = 0; l < len; l++) {
                    if (data[l][1] !== null) {
                        b += data[l][0] ** (i + j);
                    }
                }
                c.push(b);
                b = 0;
            }
            rhs.push(c);
        }
        rhs.push(lhs);

        let coefficients: Array<number> = gaussianElimination(rhs, k).map(v => round(v, options.precision));
        return coefficients.reverse();
    }
}

export default PolynomialFit;
