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

    protected abstract _fit(data: Array<Array<number>>, options: IOptions): Array<number>;

    public fit(data: Array<Array<number>>): Array<number> {
        return this._fit(data, this.$options);
    }
}

export default FittingStrategy;
