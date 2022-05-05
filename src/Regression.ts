import IOptions from "./IOptions";
import { DEFAULT_OPTIONS } from "./utils/defaults";
import round from "./utils/round";
import determineCoefficients from "./utils/determineCoefficients";
import {
    ISerializable,
    ICloneable,
    ObjectUtils
} from '@totalpave/object';
import {ISerializedRegression} from './utils/ISerializedRegression';
import {RegressionType} from './utils/RegressionType';

export abstract class Regression implements ISerializable, ICloneable<Regression> {
    private $coefficients: Array<number>;
    private $options: IOptions;

    public constructor(coefficients: Array<number>, options?: IOptions) {
        this.$options = {
            ...DEFAULT_OPTIONS,
            ...this._applyOptionDefaults(),
            ...options
        };
        this.$coefficients = coefficients;
    }

    public setOrder(order: number): void {
        this.$options.order = order;
    }

    public setPrecision(precision: number): void {
        this.$options.precision = precision;
    }

    public setPeriod(period: number): void {
        this.$options.period = period;
    }

    public setRange(low: number, high: number): void {
        this.$options.xRange.low = low;
        this.$options.xRange.high = high;
    }

    public setPreferLowerX(flag: boolean): void {
        this.$options.xRange.preferLowerX = flag;
    }

    public allowOutOfBoundResolutions(flag: boolean): void {
        this.$options.xRange.allowOutOfBounds = flag;
    }

    protected _applyOptionDefaults(): Record<any, any> {
        return {};
    }

    protected abstract _predict(x: number): Array<number>;
    public abstract getType(): RegressionType;
    public abstract getEquation(): string;
    protected abstract _derivative(x: number): number;
    protected abstract _findX(y: number): number;

    protected abstract _clone(): Regression;
    public clone(): Regression {
        return this._clone();
    }

    public derivative(x: number = 0): number {
        return this._derivative(x);
    }

    public getOptions(): IOptions {
        return ObjectUtils.clone(this.$options);
    }

    public setCoefficients(coeffs: Array<number>): void {
        this.$coefficients = coeffs;
    }
    
    public getCoefficientAt(index: number): number {
        return this.$coefficients[index];
    }

    public getCoefficients(): Array<number> {
        return this.$coefficients.slice();
    }

    public solve(x: number): number {
        return this._predict(x)[1];
    }

    public findY(x: number): number {
        return this.solve(x);
    }

    public findX(y: number): number {
        return this._findX(y);
    }

    public serialize(): string {
        let serializable: ISerializedRegression = {
            type: this.getType(),
            coefficients: this.getCoefficients(),
            options: this.getOptions()
        };

        return JSON.stringify(serializable);
    }

    public toString(): string {
        return this.getEquation();
    }

    public getFitAccuracy(data: Array<Array<number>>): number {
        return round(determineCoefficients(data, data.map(point => this._predict(point[0]))), this.$options.precision);
    }
}
