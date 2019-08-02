
/**
* Determine the coefficient of determination (r^2) of a fit from the observations
* and predictions.
*
* @param {Array<Array<number>>} data - Pairs of observed x-y values
* @param {Array<Array<number>>} results - Pairs of observed predicted x-y values
*
* @return {number} - The r^2 value, or NaN if one cannot be calculated.
*/
export function determineCoefficients(data: Array<Array<number>>, results: Array<Array<number>>): number {
    const predictions: Array<Array<number>> = [];
    const observations: Array<Array<number>> = [];
  
    data.forEach((d, i) => {
        if (d[1] !== null) {
            observations.push(d);
            predictions.push(results[i]);
        }
    });
  
    const sum: number = observations.reduce((a, observation) => a + observation[1], 0);
    const mean: number = sum / observations.length;
  
    const ssyy: number = observations.reduce((a, observation) => {
        const difference: number = observation[1] - mean;
        return a + (difference * difference);
    }, 0);
  
    const sse: number = observations.reduce((accum, observation, index) => {
        const prediction: Array<number> = predictions[index];
        const residual: number = observation[1] - prediction[1];
        return accum + (residual * residual);
    }, 0);
  
    return 1 - (sse / ssyy);
}

export default determineCoefficients;
