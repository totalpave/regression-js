import IOptions from "./IOptions";
import { DEFAULT_OPTIONS } from "./utils/defaults";
import round from "./utils/round";
import determineCoefficients from "./utils/determineCoefficients";

export abstract class Regression {
    private _coefficients: Array<number>;
    private _options: IOptions;

    public constructor(coefficients: Array<number>, options?: IOptions) {
        this._options = {
            ...DEFAULT_OPTIONS,
            ...options
        };
        this._coefficients = coefficients;
    }

    protected abstract _predict(x: number): Array<number>;
    public abstract getType(): string;
    public abstract getEquation(): string;

    public getOptions(): IOptions {
        return this._options;
    }

    public setCoefficients(coeffs: Array<number>): void {
        this._coefficients = coeffs;
    }
    
    public getCoefficientAt(index: number): number {
        return this._coefficients[index];
    }

    public getCoefficients(): Array<number> {
        return this._coefficients.slice();
    }

    public solve(x: number): number {
        return this._predict(x)[1];
    }

    public serialize(): string {
        let serializable: any = {
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
        return round(determineCoefficients(data, data.map(point => this._predict(point[0]))), this._options.precision);
    }
}
