import RegressionType from './RegressionType';
import IOptions from '../IOptions';

export interface ISerializedRegression {
    type: RegressionType;
    coefficients: number[];
    options: IOptions;
}
