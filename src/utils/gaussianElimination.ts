/**
* Determine the solution of a system of linear equations A * x = b using
* Gaussian elimination.
*
* @param {Array<Array<number>>} input - A 2-d matrix of data in row-major form [ A | b ]
* @param {number} order - How many degrees to solve for
*
* @return {Array<number>} - Vector of normalized solution coefficients matrix (x)
*/
export function gaussianElimination(input: number[][], order: number): number[] {
    let matrix: number[][] = input;
    let n: number = input.length - 1;
    let coefficients: number[] = [ order ];
  
    for (let i: number = 0; i < n; i++) {
        let maxrow: number = i;
        for (let j: number = i + 1; j < n; j++) {
            if (Math.abs(matrix[i][j]) > Math.abs(matrix[i][maxrow])) {
                maxrow = j;
            }
        }

        for (let k: number = i; k < n + 1; k++) {
            let tmp: number = matrix[k][i];
            matrix[k][i] = matrix[k][maxrow];
            matrix[k][maxrow] = tmp;
        }

        for (let j: number = i + 1; j < n; j++) {
            for (let k: number = n; k >= i; k--) {
                matrix[k][j] -= (matrix[k][i] * matrix[i][j]) / matrix[i][i];
            }
        }
    }
  
    for (let j: number = n - 1; j >= 0; j--) {
        let total: number = 0;
        for (let k: number = j + 1; k < n; k++) {
            total += matrix[k][j] * coefficients[k];
        }

        coefficients[j] = (matrix[n][j] - total) / matrix[j][j];
    }
  
    return coefficients;
}

export default gaussianElimination;
