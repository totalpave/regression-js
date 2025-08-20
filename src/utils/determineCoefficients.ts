
/**
* Determine the coefficient of determination (r^2) of a fit from the observations
* and predictions.
*
* @param {Array<Array<number>>} data - Pairs of observed x-y values
* @param {Array<Array<number>>} results - Pairs of observed predicted x-y values
*
* @return {number} - The r^2 value, or NaN if one cannot be calculated.
*/
export function determineCoefficients(data: number[][], results: number[][]): number {
    let predictions: number[][] = [];
    let observations: number[][] = [];
  
    data.forEach((d, i) => {
        if (d[1] !== null) {
            observations.push(d);
            predictions.push(results[i]);
        }
    });
  
    let sum: number = observations.reduce((a, observation) => a + observation[1], 0);
    let mean: number = sum / observations.length;
  
    let ssyy: number = observations.reduce((a, observation) => {
        let difference: number = observation[1] - mean;
        return a + (difference * difference);
    }, 0);
  
    let sse: number = observations.reduce((accum, observation, index) => {
        let prediction: number[] = predictions[index];
        let residual: number = observation[1] - prediction[1];
        return accum + (residual * residual);
    }, 0);
  
    return 1 - (sse / ssyy);
}

export default determineCoefficients;
