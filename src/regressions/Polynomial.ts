import {Regression} from "../Regression";
import round from "../utils/round";
import IOptions from "../IOptions";
import {ObjectUtils} from '@totalpave/object';
import FittingStrategy from "../fitting/FittingStrategy";
import PolynomialFit from "../fitting/PolynomialFit";
import RegressionType from '../utils/RegressionType';
import {IRangeOptions} from '../IOptions';

export class Polynomial extends Regression {
    private $averageSlope: number = null;

    protected _predict(x: number): Array<number> {
        let options: IOptions = this.getOptions();
        if (options && options.xRange && options.xRange.allowOutOfBounds && x > options.xRange.high) {
            // interpolate
            let avgSlope: number = this.getAverageSlope();
            let yAtEndSafeX: number = this.solve(options.xRange.high);

            // simple y = mx + b
            let yDrop: number = avgSlope * (x - options.xRange.high);
            if (options.enforceNegativeSlope) {
                yDrop = Math.abs(yDrop);
            }

            let precision: number = this.getOptions().precision;

            let retx: number = round(x, precision);
            let rety: number = round(yAtEndSafeX - yDrop, precision);

            if (options.yRange) {
                if (!ObjectUtils.isVoid(options.yRange.low)) {
                    rety = Math.max(rety, options.yRange.low);
                }

                if (!ObjectUtils.isVoid(options.yRange.high)) {
                    rety = Math.min(rety, options.yRange.high);
                }
            }

            return [ retx, rety ];
        }
        else {
            return [
                round(x, options.precision),
                round(
                    this.getCoefficients().reverse().reduce((sum, coeff, power) => sum + (coeff * (x ** power)), 0),
                    options.precision,
                )
            ];
        }
    }

    protected _applyOptionDefaults(): Record<string, any> {
        let obj: {
            xRange: IRangeOptions;
        } = {
            xRange: {
                low: 0,
                high: 100,
                preferLowerX: true,
                allowOutOfBounds: false
            }
        };
        return obj;
    }

    public getAverageSlope(): number {
        if (this.$averageSlope !== null) {
            return this.$averageSlope;
        }

        let options: IOptions = this.getOptions();

        let startX: number = options.xRange.low;
        let endX: number = options.xRange.high;

        let ycount: number = 0;
        let totalY: number = 0;

        for (let i: number = startX + 1; i < endX; i++) {
            let y0: number = this.solve(i - 1);
            let y1: number = this.solve(i);

            ycount++;
            totalY += y1 - y0;
        }

        let avgY: number = totalY / ycount;
        
        this.$averageSlope = avgY;
        return avgY;
    }

    protected _derivative(x: number): number {
        let coeffs: Array<number> = this.getCoefficients().reverse();
        let result: number = 0;

        for (let i: number = 1; i < coeffs.length; i++) {
            let coeff: number = coeffs[i];
            
            if (i === 1) {
                result += i * coeff;
            }
            else if (i === 2) {
                result += i * coeff * x
            }
            else {
                result += i * coeff * Math.pow(x, i - 1);
            }
        }

        return result;
    }

    public getEquation(): string {
        let coefficients: Array<number> = this.getCoefficients().reverse();
        let string: string = 'y = ';
        for (let i: number = coefficients.length - 1; i >= 0; i--) {
            if (i > 1) {
                string += `${coefficients[i]}x^${i} + `;
            }
            else if (i === 1) {
                string += `${coefficients[i]}x + `;
            }
            else {
                string += coefficients[i];
            }
        }
        return string;
    }

    public getType(): RegressionType {
        return Polynomial.getType();
    }

    public static getType(): RegressionType {
        return RegressionType.POLYNOMIAL;
    }

    public static getFittingStrategy(options: IOptions): FittingStrategy {
        return new PolynomialFit(options);
    }

    protected _clone(): Polynomial {
        return new Polynomial(this.getCoefficients(), this.getOptions());
    }

    public findX(y: number, range?: Partial<IRangeOptions>): number {
        let opts: IRangeOptions = {
            low: this.getOptions().xRange.low,
            high: this.getOptions().xRange.high,
            preferLowerX: this.getOptions().xRange.preferLowerX,
            allowOutOfBounds: false
        };

        if (range) {
            opts = {
                ...opts,
                ...range
            };
        }

        if (opts.low > opts.high) {
            let t = opts.high;
            opts.high = opts.low;
            opts.low = t;
        }

        return this._findX(y, opts);
    }

    /**
     * while range is "optional", it will always be provided as the public method deals with
     * a missing range by providing a default based on the polynomial options.
     * Typescript requires it to be optional so the signature can still match the superclass,
     * but the super class will never use findX generically, so this is ok.
     */
    protected _findX(y: number, range?: IRangeOptions): number {
        let coefficients: Array<number> = this.getCoefficients();
        let x: number = null;
        if (coefficients.length <= 2) {
            // This isn't a valid polynomial
            x = null;
        }
        else if (coefficients.length === 3) {
            x = this.$quadratic(y, range);
        }
        else {
            let initialGuess: number = null;
            let diff: number = null;
            for (let i: number = range.high; i > range.low; i--) {
                if (initialGuess === null) {
                    initialGuess = i;
                    diff = Math.abs(y - this.solve(i));
                }
                else {
                    let d: number = Math.abs(y - this.solve(i));
                    if (d < diff) {
                        diff = d;
                        initialGuess = i;
                    }
                }
            }
            
            let coefficients: Array<number> = this.getCoefficients();
            coefficients[coefficients.length - 1] -= y;
            
            x = this.$newton(initialGuess, coefficients);
        }

        return x;
    }

    private $quadratic(y: number, range: IRangeOptions): number {
        let coefficients: Array<number> = this.getCoefficients();
        coefficients[coefficients.length - 1] -= y;

        let a: number = coefficients[0];
        let b: number = coefficients[1];
        let c: number = coefficients[2];

        let pResult: number = ((b * -1) + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
        let nResult: number = ((b * -1) - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);

        if (isNaN(pResult) || isNaN(nResult)) {
            // if we reached here, we are requesting a Y value
            // that doesn't fit in the given polynomial, therefore
            // we will need to find the X result via extrapolation given
            // the average slope.
            return this.$findExtrapolatedX(y, range);
        }

        let possibilities: Array<number> = [ pResult, nResult ];

        if (!range.allowOutOfBounds) {
            possibilities = possibilities.filter((value: number): boolean => {
                return value >= range.low && value <= range.high;
            });
        }

        let chosen: number = null;
        if (possibilities.length === 1) {
            chosen = possibilities[0];
        }
        else {
            let closestFit: number = null;
            for (let i: number = 0; i < possibilities.length; i++) {
                let possibility: number = possibilities[i];
                if (closestFit === null) {
                    closestFit = possibility;
                    continue;
                }

                if (range.preferLowerX) {
                    if (possibility < closestFit) {
                        closestFit = possibility;
                    }
                }
                else {
                    if (possibility > closestFit) {
                        closestFit = possibility;
                    }
                }
            }
            chosen = closestFit;
        }

        // You can't compare against -0 using normal methods...
        if (Object.is(chosen, -0)) {
            chosen = 0;
        }

        return chosen;
    }

    // Inefficient brute force method...
    private $findExtrapolatedX(y: number, range: IRangeOptions): number {
        let slope: number = this.getAverageSlope();

        const ACCEPTABLE_APPROX: number = 1e-8;

        let isApproxZero = (v: number): boolean => {
            return v >= -ACCEPTABLE_APPROX && v <= ACCEPTABLE_APPROX;
        };

        let criticalPoints: Array<number> = [];
        let firstDeriv: number = this.derivative(range.low);
        let isPositiveSlope: boolean = null;
        let offset: number = 0;

        while (isApproxZero(firstDeriv)) {
            criticalPoints.push(range.low + offset);
            offset++;
            firstDeriv = this.derivative(range.low + offset);
        }
        
        isPositiveSlope = firstDeriv > 0;

        for (let i: number = range.low + offset; i < range.low + 100; i++) {
            let d: number = this.derivative(i);

            let isDPositive: boolean = null;
            if (d === 0) {
                criticalPoints.push(i);
            }
            else {
                isDPositive = d > 0;

                if (isPositiveSlope !== isDPositive) {
                    // The critical point is somewheres in between i - 1 and i.
                    // But we aren't trying to be super accurate here, so we will
                    // call i-1 the critical point.

                    criticalPoints.push(i-1);
                    isPositiveSlope = isDPositive;
                }
            }
        }

        let criticalPoint: number = null;
        if (criticalPoints.length === 0) {
            throw new Error('Unsolvable equation');
        }
        else if (criticalPoints.length === 1) {
            criticalPoint = criticalPoints[0];
        }
        else {
            for (let i: number = 0; i < criticalPoints.length; i++) {
                criticalPoint = Math.min(criticalPoint, criticalPoints[i]);
            }
        }

        let yAtCritical: number = this.solve(criticalPoint);
        let xGuess = Math.abs((yAtCritical - y) / slope)

        return criticalPoint + xGuess;
    }

    private $newton(x0: number, coefficients: Array<number>): number {
        let prevX: number = x0;
        let x: number = x0;
        let dx: number = x0;
        let iter: number = 0;

        let poly: Polynomial = new Polynomial(coefficients, {
            precision: 5
        });

        do {
            x = prevX - (poly.solve(x) / poly.derivative(x));
            dx = prevX - x;
            prevX = x;
            iter++;
        } while (dx > 0.000001 && iter !== 20);

        return x;
    }
}
