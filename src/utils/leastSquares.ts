
// import {RegressionFactory} from '../RegressionFactory';
// import {RegressionType} from './RegressionType';
// import { Regression } from '../Regression';
// import { Polynomial } from '../regressions/Polynomial';

// export function leastSquares(data: Array<Array<number>>): any {
//     // let intercept: number = null; // a
//     // let gradient: number = null;  // b
//     let estIntercept: number = null;
//     let estGradient: number = null;
//     let meanX: number = null;
//     let meanY: number = null;
//     let totalX: number = 0;
//     let totalY: number = 0;
//     let n: number = data.length;
//     let sst: number = 0;
//     let ssr: number = 0;
//     let sse: number = 0;

//     // let regression: Regression = new Polynomial([ 100, -255203700065613 ]);
//     let regression: Regression = (new RegressionFactory).bestFit<Polynomial>(RegressionType.POLYNOMIAL, data, {
//         precision: 100,
//         xRange: {
//             preferLowerX: true,
//             low: 0,
//             high: 40
//         }
//     }).regression;
//     regression.setCoefficients([
//         0.0362398363649845,
//         -3.38187336921692,
//         100
//     ]);
//     // let coefficients: Array<number> = linear.getCoefficients();
//     // gradient = coefficients[0];
//     // intercept = coefficients[1];

//     for (let i: number = 0; i < data.length; i++) {
//         let d: Array<number> = data[i];
//         let x: number = d[0];
//         let y: number = d[1];

//         totalX += x;
//         totalY += y;
//     }

//     meanX = totalX / n;
//     meanY = totalY / n;

//     let estBa: number = 0;
//     let estBb: number = 0;
//     for (let i: number = 0; i < data.length; i++) {
//         let d: Array<number> = data[i];
//         let x: number = d[0];
//         let y: number = d[1];
//         estBa += (x - meanX) * (y - meanY);
//         estBb += Math.pow(x - meanX, 2);
//     }

//     estGradient = estBa / estBb;
//     estIntercept = 100;
//     // estIntercept = meanY - (estGradient * meanX);
//     // let avgSd: number = 0;
//     let e: number = 0;

//     for (let i: number = 0; i < data.length; i++) {
//         let d: Array<number> = data[i];
//         // let x: number = d[0];
//         let y: number = d[1];

//         // let estY: number = estIntercept + (estGradient * x);
//         let estY: number = estIntercept + (estGradient * regression.findX(y));

//         sst += y - meanY;
//         ssr += estY - meanY;
//         sse += y - estY;

//         sst += Math.pow(y - meanY, 2);
//         ssr += Math.pow(estY - meanY, 2);
//         sse += Math.pow(y - estY, 2);
//         e += estY - y;

//         // let sd: number = Math.sqrt(sse / (data.length - 1));
//         // if (isNaN(sd)) {
//         //     sd = 0;
//         // }

//         // avgSd += sd;

//         // console.log(i, 'residual', regression.findX(y), estY, y - estY, '|', x, y, '|', 1.4744956132980862 * 1.96)
//     }

//     let sd: number = Math.sqrt(sse / (data.length - 2));
//     e /= data.length;
//     // avgSd /= data.length;

//     console.log('\n',
//         'equation', regression.getEquation(), '\n',
//         'estIntercept', estIntercept, '\n',
//         'estGradient', estGradient, '\n',
//         'sst', sst, '\n',
//         'ssr', ssr, '\n',
//         'sse', sse, '\n',
//         'r^2', ssr / sst, '\n',
//         'sd', sd, '\n',
//         'e', e, '\n'
//     );
// }

// leastSquares([
//     [ 1, 92 ],
//     [ 3, 100 ],
//     [ 3, 90 ],
//     [ 4, 100 ],
//     [ 5, 78 ],
//     [ 7, 80 ],
//     [ 7, 79 ],
//     [ 8, 85 ],
//     [ 12, 92 ],
//     [ 12, 50 ],
//     [ 12, 85 ],
//     [ 12, 40 ],
//     [ 12, 81 ],
//     [ 16, 78 ],
//     [ 16, 53 ],
//     [ 16, 46 ],
//     [ 16, 37 ],
//     [ 20, 52 ],
//     [ 20, 90 ],
//     [ 20, 57 ],
//     [ 22, 34 ],
//     [ 22, 34 ],
//     [ 26, 40 ],
//     [ 26, 40 ],
//     [ 30, 31 ]
// ])
