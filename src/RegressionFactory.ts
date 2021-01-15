
import {Regression} from './Regression';
import IOptions from './IOptions';
import FittingStrategy from './fitting/FittingStrategy';
import r2 from './utils/r2';
import RegressionType from './utils/RegressionType';
import {Exponential} from './regressions/Exponential';
import {Linear} from './regressions/Linear';
import {Logarithmic} from './regressions/Logarithmic';
import {Polynomial} from './regressions/Polynomial';
import {Power} from './regressions/Power';
import {ISerializedRegression} from './utils/ISerializedRegression';

export interface IBestFitResult<T extends Regression = Regression> {
    regression: T;
    r2: number;
}

export class RegressionFactory {

    public constructor() {}

    public create<T extends Regression = Regression>(type: RegressionType, coefficients: Array<number>, options?: IOptions): T {
        let regression: any = null;

        switch (type) {
            case RegressionType.EXPONENTIAL:
                regression = new Exponential(coefficients, options);
                break;
            case RegressionType.LINEAR:
                regression = new Linear(coefficients, options);
                break;
            case RegressionType.LOGARITHMIC:
                regression = new Logarithmic(coefficients, options);
                break;
            case RegressionType.POLYNOMIAL:
                regression = new Polynomial(coefficients, options);
                break;
            case RegressionType.POWER:
                regression = new Power(coefficients, options);
                break;
            default: this._throwNotBuildable(type);
        }

        return regression;
    }

    public bestFit<T extends Regression>(type: RegressionType, data: Array<Array<number>>, options?: IOptions): IBestFitResult<T> {
        let fitting: FittingStrategy = null;
        let regression: any = null;

        switch (type) {
            case RegressionType.EXPONENTIAL:
                fitting = Exponential.getFittingStrategy(options);
                regression = new Exponential(fitting.fit(data), options);
                break;
            case RegressionType.LINEAR:
                fitting = Linear.getFittingStrategy(options);
                regression = new Linear(fitting.fit(data), options);
                break;
            case RegressionType.LOGARITHMIC:
                fitting = Logarithmic.getFittingStrategy(options);
                regression = new Logarithmic(fitting.fit(data), options);
                break;
            case RegressionType.POLYNOMIAL:
                fitting = Polynomial.getFittingStrategy(options);
                regression = new Polynomial(fitting.fit(data), options);
                break;
            case RegressionType.POWER:
                fitting = Power.getFittingStrategy(options);
                regression = new Power(fitting.fit(data), options);
                break;
            default: this._throwNotBuildable(type);
        }

        return {
            regression: regression,
            r2: r2(regression, data)
        };
    }

    public load<T extends Regression>(serialized: string): T {
        let serializable: ISerializedRegression = JSON.parse(serialized);
        return this.create<T>(<RegressionType>serializable.type, <Array<number>>serializable.coefficients, <IOptions>serializable.options);
    }

    private _throwNotBuildable(type: RegressionType): void {
        throw new Error(`"${type} is not a buildable regression`);
    }
}

export default RegressionFactory;
