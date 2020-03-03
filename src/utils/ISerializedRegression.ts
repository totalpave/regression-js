import RegressionType from './RegressionType';
import IOptions from 'src/IOptions';

export interface ISerializedRegression {
    type: RegressionType;
    coefficients: Array<number>;
    options: IOptions;
}
