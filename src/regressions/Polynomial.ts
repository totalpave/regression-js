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
        const coefficients: Array<number> = this.getCoefficients().reverse();
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
            x = this._quadratic(y, range);
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
            
            x = this._newton(initialGuess, coefficients);
        }

        return x;
    }

    // private _longDivision(n: number, d: number): number {
    //     let num: string = n.toString(),
    //         numLength: number = num.length,
    //         remainder: number = 0,
    //         answer: any = '',
    //         i: number = 0;
    
    //     while (i < numLength + 3) {
    //         let digit: number = i < numLength ? parseInt(num[i]) : 0;
    
    //         if (i === numLength){
    //             answer = answer + ".";
    //         }
    
    //         answer = answer + Math.floor((digit + (remainder * 10))/d);
    //         remainder = (digit + (remainder * 10))%d;
    //         i++;
    //     }

    //     return parseFloat(answer);
    // }

    private _quadratic(y: number, range: IRangeOptions): number {
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

        return chosen;
    }

    // private _findPossibles(leadingF: Array<number>, constantF: Array<number>): Array<number> {
    //     let t: Array<number> = [];

    //     for (let i: number = 0; i < leadingF.length; i++) {
    //         let a: number = leadingF[i];

    //         for (let j: number = 0; j < constantF.length; j++) {
    //             let b: number = constantF[j];

    //             t.push(b / a);
    //         }
    //     }

    //     //filter duplicates
    //     let out: Array<number> = [];

    //     for (let i: number = 0; i < t.length; i++) {
    //         if (out.indexOf(t[i]) === -1) {
    //             out.push(t[i]);
    //         }
    //     }

    //     return out;
    // }

    // private _findFactors(x: number): Array<number> {
    //     let numbers: Array<number> = [];
    //     for (let i: number = 1; i <= x; i++) {
    //         numbers.push(i);
    //     }
    //     let possibilities: Array<number> = numbers.filter((i: number) => {
    //         return x % i === 0;
    //     });
    //     let t: Array<number> = possibilities.slice();
    //     for (let i: number = 0; i < t.length; i++) {
    //         possibilities.push(t[i] * -1);
    //     }
    //     return possibilities;
    // }

    private _newton(x0: number, coefficients: Array<number>): number {
        // console.log('EQUATION', this.getEquation());
        // let coefficients: Array<number> = this.getCoefficients();
        // console.log('COES', coefficients);
        // console.log('x0', x0);
        // 0.000001

        // let testPoly: Polynomial = new Polynomial([
        //     21,
        //     1,
        //     21,
        //     -2
        // ]);
        // console.log('TEST', testPoly.solve(1), testPoly.derivative(1), testPoly.solve(1) / testPoly.derivative(1));

        let prevX: number = x0;
        let x: number = x0;
        let dx: number = x0;
        let iter: number = 0;

        let poly: Polynomial = new Polynomial(coefficients, {
            precision: 5
        });

        do {
            // console.log(`f(x${iter}) = ${coefficients[0]}^3 + ${coefficients[1]}^2 + ${coefficients[2]}^1 + ${coefficients[3]}`);
            // console.log('===================');
            // console.log(iter);
            // console.log('===================');
            // // console.log(coefficients);
            
            // console.log(`F(${x})`, poly.solve(x));
            // console.log(`F'(${x})`, poly.derivative(x));
            // console.log('BASD', prevX, poly.solve(x) / poly.derivative(x));
            x = prevX - (poly.solve(x) / poly.derivative(x));
            // console.log('x', x);
            dx = prevX - x;
            // console.log(`dx = ${prevX} - ${x} = ${dx}`);
            prevX = x;
            iter++;

            // Modify each coefficient that contains an x, which is
            // every cofficient except for the last one.
            // for (let i: number = 0; i < coefficients.length - 1; i++) {
            //     coefficients[i] -= dx;
            // }

            // console.log('ITER X', x);
            // console.log('ITER dx', dx);
            // console.log('');
        } while (dx > 0.000001 && iter !== 20);
        // console.log('');

        // console.log('x1', x);
        // console.log('dx1', dx);

        // console.log('RESULT', x1, result);
        // if (result !== null && x1 > result) {
        //     return null;
        // }

        // if (x1 > 0.000001) {
        //     // x1 = this._newton(x0 + 1, x1);
        //     if (x1 === null) {
        //         return null;
        //     }
        // }

        return x;
    }

    // private _newtonRaphson(x0: number): number {
    //     let x1: number,
    //         y: number,
    //         yp: number,
    //         tol: number,
    //         maxIter: number,
    //         iter: number,
    //         // yph: number,
    //         // ymh: number,
    //         // yp2h: number,
    //         // ym2h: number,
    //         // h: number,
    //         // hr: number,
    //         verbose: boolean,
    //         eps: number;
      
    //     // Iterpret variadic forms:
    //     // if (typeof fp !== 'function') {
    //     //   options = x0;
    //     //   x0 = fp;
    //     //   fp = null;
    //     // }
      
    //     tol = 1e-7;
    //     eps = 2.220446049250313e-16
    //     maxIter = 100;
    //     // h = 1e-4;
    //     verbose = true;
    //     // hr = 1 / h;
    //     // options = options || {};
    //     // tol = options.tolerance === undefined ? 1e-7 : options.tolerance;
    //     // eps = options.epsilon === undefined ? 2.220446049250313e-16 : options.epsilon;
    //     // maxIter = options.maxIterations === undefined ? 20 : options.maxIterations;
    //     // h = options.h === undefined ? 1e-4 : options.h;
    //     // verbose = options.verbose === undefined ? false : options.verbose;
    //     // hr = 1 / h;
      
    //     iter = 0;
    //     while (iter++ < maxIter) {
    //         // Compute the value of the function:
    //         y = this.solve(x0);

    //         yp = this.derivative(x0);
        
    //     //   if (fp) {
    //     //     yp = fp(x0);
    //     //   } else {
    //     //     // Needs numerical derivatives:
    //     //     yph = f(x0 + h);
    //     //     ymh = f(x0 - h);
    //     //     yp2h = f(x0 + 2 * h);
    //     //     ym2h = f(x0 - 2 * h);
      
    //     //     yp = ((ym2h - yp2h) + 8 * (yph - ymh)) * hr / 12;
    //     //   }
      
    //       // Check for badly conditioned update (extremely small first deriv relative to function):
    //         if (Math.abs(yp) <= eps * Math.abs(y)) {
    //             if (verbose) {
    //                 console.log('Newton-Raphson: failed to converged due to nearly zero first derivative');
    //             }
    //             return null;
    //         // return false;
    //         }
      
    //       // Update the guess:
    //         x1 = x0 - y / yp;
      
    //       // Check for convergence:
    //         if (Math.abs(x1 - x0) <= tol * Math.abs(x1)) {
    //             if (verbose) {
    //                 console.log('Newton-Raphson: converged to x = ' + x1 + ' after ' + iter + ' iterations');
    //             }
    //             return x1;
    //         }
      
    //       // Transfer update to the new guess:
    //         x0 = x1;
    //     }
      
    //     if (verbose) {
    //         console.log('Newton-Raphson: Maximum iterations reached (' + maxIter + ')');
    //     }
      
    //     return null;
    //     // return false;
    // }
}
