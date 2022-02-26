import RegressionType from './RegressionType';
import IOptions from '../IOptions';

export interface ISerializedRegression {
    type: RegressionType;
    coefficients: Array<number>;
    options: IOptions;
}
