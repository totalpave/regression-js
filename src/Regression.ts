import IOptions from "./IOptions";
import { DEFAULT_OPTIONS } from "./utils/defaults";
import round from "./utils/round";
import determineCoefficients from "./utils/determineCoefficients";
import { Serializable } from "./utils/Serializable";

export abstract class Regression {
    private _coefficients: Array<number>;
    private _options: IOptions;

    public constructor(coefficients: Array<number>, options?: IOptions) {

        if (!options) {
            options = DEFAULT_OPTIONS;
        }

        this._options;
        this._coefficients = coefficients;
    }

    // protected abstract _init(): void;
    protected abstract _predict(x: number): Array<number>;
    public abstract getType(): string;
    public abstract getEquation(): string;

    public getOptions(): IOptions {
        return this._options;
    }

    protected _serialize(): Serializable {
        return {};
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

    public serialize(): string {
        let serializable: any = {
            type: this.getType(),
            coefficients: this.getCoefficients(),
            equation: this.getEquation(),
            $regressionParams: this._serialize()
        };

        return JSON.stringify(serializable);
    }

    public toString(): string {
        return this.getEquation();
    }

    public getFitAccuracy(data: Array<Array<number>>): number {
        return round(determineCoefficients(data, data.map(point => this._predict(point[0]))), this._options.precision);
    }

    // protected _getPoints(data: Array<Array<number>>): Array<Array<number>> {
    //     return data.map(point => this._predict(point[0]));
    // }

    // protected _calculateR2(data: Array<Array<number>>, points: Array<Array<number>>, precision: number): number {
    //     return round(determineCoefficients(data, points), precision);
    // }

    private _load(serialized: string): void {
        let data: Serializable = JSON.parse(serialized);
        
        if (data.type !== this.getType()) {
            throw new Error(`Incorrect regression type. You are using "${this.getType()}" regression, but the serialized type was built from "${data.type}" regression.`);
        }
        
        this.setCoefficients(<Array<number>>data.coefficients);
        this._loadRegression(data);
    }

    protected _loadRegression(data: Serializable): void {}
}

export default Regression;
