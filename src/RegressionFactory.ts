
import * as regressions from './regressions';
import Regression from './Regression';
import IOptions from './IOptions';
import FittingStrategy from './fitting/FittingStrategy';

// Breaking out of Typescript here, cause we are doing things
// a little dynamically dangerous, but unit testing will ensure
// that things are built properly.
type IRegression = any;

export class RegressionFactory {
    private _regressionMap: {[key: string]: IRegression};
    private _instaince: RegressionFactory;

    private constructor() {
        this._regressionMap = {};

        for (let i in regressions) {
            this.addRegression(regressions[i]);
        }
    }

    public addRegression(RegressionClass: IRegression): void {
        this._regressionMap[RegressionClass.getType()] = RegressionClass;
    }

    public create(type: string, coefficients: Array<number>, options?: IOptions): Regression {
        const Regression: IRegression = this._getRegressionClass(type);
        return new Regression(coefficients, options);
    }

    public bestFit(type: string, data: Array<Array<number>>, options?: IOptions): Regression {
        const Regression: IRegression = this._getRegressionClass(type);
        const fitting: FittingStrategy = Regression.getFittingStrategy(options);
        return new Regression(fitting.fit(data), options);
    }

    private _getRegressionClass(type: string): Regression {
        if (!this._regressionMap[type]) {
            throw new Error(`"${type} is not a buildable regression`);
        }

        return this._regressionMap[type];
    }
}
