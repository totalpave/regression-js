import {Regression} from '../Regression';
import round from './round';
import determineCoefficients from './determineCoefficients';

export let r2 = (regression: Regression, data: number[][]): number => {
    let points: number[][] = data.map((point: number[]) => {
        return [ point[0], regression.solve(point[0]) ];
    });

    return round(determineCoefficients(data, points), regression.getOptions().precision);
}

export default r2;
