/**
* Round a number to a precision, specificed in number of decimal places
*
* @param {number} number - The number to round
* @param {number} precision - The number of decimal places to round to:
*                             > 0 means decimals, < 0 means powers of 10
*
*
* @return {numbr} - The number, rounded
*/
export function round(number: number, precision: number): number {
    const factor: number = 10 ** precision;
    return Math.round(number * factor) / factor;
}

export default round;
