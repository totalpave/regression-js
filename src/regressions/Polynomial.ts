import {Regression} from "../Regression";
import round from "../utils/round";
import IOptions from "../IOptions";
import FittingStrategy from "../fitting/FittingStrategy";
import PolynomialFit from "../fitting/PolynomialFit";
import RegressionType from '../utils/RegressionType';
import { IDictionary } from '@totalpave/interfaces';
import {IRangeOptions} from '../IOptions';

export class Polynomial extends Regression {
    protected _predict(x: number): Array<number> {
        return [
            round(x, this.getOptions().precision),
            round(
                this.getCoefficients().reverse().reduce((sum, coeff, power) => sum + (coeff * (x ** power)), 0),
                this.getOptions().precision,
            )
        ];
    }

    protected _applyOptionDefaults(): IDictionary {
        let obj: {
            xRange: IRangeOptions;
        } = {
            xRange: {
                low: 0,
                high: 100,
                preferLowerX: true
            }
        };
        return obj;
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

    public findX(y: number, range?: IRangeOptions): number {
        if (!range) {
            range = {
                low: this.getOptions().xRange.low,
                high: this.getOptions().xRange.high,
                preferLowerX: this.getOptions().xRange.preferLowerX
            };
        }

        if (range.low > range.high) {
            let t = range.high;
            range.high = range.low;
            range.low = t;
        }
        return this._findX(y, range);
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
            return null;
        }

        let possibilities: Array<number> = [ pResult, nResult ].filter((value: number): boolean => {
            return value >= range.low && value <= range.high;
        });

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
