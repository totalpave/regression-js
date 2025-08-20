import IOptions from "../IOptions";
import { DEFAULT_OPTIONS } from "../utils/defaults";

export abstract class FittingStrategy {
    private $options: IOptions;

    public constructor(options?: IOptions) {
        this.$options = {
            ...DEFAULT_OPTIONS,
            ...options
        };
    }

    protected abstract _fit(data: number[][], options: IOptions): number[];

    public fit(data: number[][]): number[] {
        return this._fit(data, this.$options);
    }
}

export default FittingStrategy;
